import { NextResponse } from 'next/server';

/**
 * Shared front door for the public form endpoints (contact, newsletter).
 *
 * - Same-origin only: a browser always sends `Origin` on a cross-site POST, so
 *   another website cannot make its visitors submit our forms.
 * - JSON only: `req.json()` ignores Content-Type, which let a plain HTML form
 *   on another site post a JSON-looking text body.
 * - Honeypot: a field real visitors never see. Bots that fill every input get
 *   a fake "ok" and nothing is sent.
 * - Rate limit per IP, in memory. On Vercel each instance has its own memory,
 *   so this caps a single script hammering one instance, not a distributed
 *   attack; a Vercel Firewall rate-limit rule on /api/* is the stronger layer.
 */

const ALLOWED_HOSTS = new Set(['ovioplus.ai', 'www.ovioplus.ai', 'localhost', '127.0.0.1']);

function originAllowed(req: Request): boolean {
  const origin = req.headers.get('origin');
  // No Origin: not a cross-site browser request (curl, server). The rate limit
  // and honeypot still apply.
  if (!origin) return true;
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_HOSTS.has(host) || host.endsWith('.vercel.app');
  } catch {
    return false;
  }
}

const hits = new Map<string, number[]>();

function rateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    // Keep memory bounded: drop the oldest entries.
    for (const k of [...hits.keys()].slice(0, 1000)) hits.delete(k);
  }
  return recent.length > limit;
}

function clientIp(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
}

export type Guarded =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; response: NextResponse };

export async function guardForm(
  req: Request,
  opts: { name: string; limit: number; windowMs: number },
): Promise<Guarded> {
  if (!originAllowed(req)) {
    return { ok: false, response: NextResponse.json({ error: 'forbidden' }, { status: 403 }) };
  }
  if (!(req.headers.get('content-type') ?? '').toLowerCase().startsWith('application/json')) {
    return { ok: false, response: NextResponse.json({ error: 'unsupported' }, { status: 415 }) };
  }
  if (rateLimited(`${opts.name}:${clientIp(req)}`, opts.limit, opts.windowMs)) {
    return { ok: false, response: NextResponse.json({ error: 'rate_limited' }, { status: 429 }) };
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return { ok: false, response: NextResponse.json({ error: 'invalid_body' }, { status: 400 }) };
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, response: NextResponse.json({ error: 'invalid_body' }, { status: 400 }) };
  }
  const b = body as Record<string, unknown>;
  // Honeypot filled: pretend success so the bot learns nothing.
  if (typeof b.website === 'string' && b.website.trim() !== '') {
    return { ok: false, response: NextResponse.json({ ok: true }) };
  }
  return { ok: true, body: b };
}

/** One line of text: no CR/LF (headers, subjects), trimmed, capped. */
export function oneLine(v: unknown, max: number): string {
  return String(v ?? '')
    .replace(/[\r\n\t]+/g, ' ')
    .trim()
    .slice(0, max);
}

/** The live site (not previews, not a local `next start`). */
export const isProduction = () => process.env.VERCEL_ENV === 'production';

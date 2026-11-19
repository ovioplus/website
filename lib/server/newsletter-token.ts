import { createHmac, timingSafeEqual } from 'node:crypto';

/**
 * Signed confirmation links for the newsletter double opt-in. The token is an
 * HMAC of the email and an expiry, so only someone who received the email can
 * confirm it, and a link stops working after 7 days.
 *
 * Key: NEWSLETTER_SECRET if set, otherwise derived from RESEND_API_KEY (a
 * server-only secret that already exists), so this works without a new env var.
 */
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

function key(): string | null {
  const base = process.env.NEWSLETTER_SECRET || process.env.RESEND_API_KEY;
  return base ? `ovioplus-newsletter-confirm:${base}` : null;
}

function sign(email: string, exp: number, k: string): string {
  return createHmac('sha256', k).update(`${email.toLowerCase()}|${exp}`).digest('base64url');
}

export function makeConfirmToken(email: string): { exp: number; sig: string } | null {
  const k = key();
  if (!k) return null;
  const exp = Date.now() + TTL_MS;
  return { exp, sig: sign(email, exp, k) };
}

export function checkConfirmToken(email: string, exp: number, sig: string): boolean {
  const k = key();
  if (!k || !Number.isFinite(exp) || exp < Date.now()) return false;
  const want = Buffer.from(sign(email, exp, k));
  const got = Buffer.from(sig);
  return want.length === got.length && timingSafeEqual(want, got);
}

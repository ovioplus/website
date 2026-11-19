import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkConfirmToken } from '@/lib/server/newsletter-token';

/**
 * The link in the confirmation email. A valid, unexpired signature for this
 * email flips the Resend contact to subscribed, then shows the result page.
 * Redirect targets are fixed paths on this site, never taken from the URL.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = (url.searchParams.get('e') ?? '').toLowerCase();
  const exp = Number(url.searchParams.get('x'));
  const sig = url.searchParams.get('s') ?? '';
  const done = (ok: boolean) => NextResponse.redirect(new URL(`/newsletter?status=${ok ? 'confirmed' : 'invalid'}`, url.origin), 303);

  if (!email || !checkConfirmToken(email, exp, sig)) return done(false);

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return done(false);

  const { error } = await new Resend(apiKey).contacts.update({ audienceId, email, unsubscribed: false });
  if (error) {
    console.error('[newsletter] confirm failed', error);
    return done(false);
  }
  return done(true);
}

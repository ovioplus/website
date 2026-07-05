import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter subscribe endpoint.
 *
 * Uses **Resend Audiences** (same Resend account you already use for the
 * contact form — no new service needed, no new account).
 *
 * Setup once:
 *   1. Go to https://resend.com/audiences
 *   2. Click "Create Audience" → name it "OvioPlus Newsletter"
 *   3. Copy the audience ID (starts with `aud_...`)
 *   4. Add to .env.local AND to Vercel env vars:
 *        RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxxx
 *   5. Redeploy
 *
 * Without the audience ID, submissions log to terminal only.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (body.email ?? '').toString().trim().slice(0, 200);
    const lang = (body.lang ?? 'en').toString();

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // Dev fallback — no keys configured
    if (!apiKey || !audienceId) {
      console.log(`\n[newsletter] new subscriber: ${email} (lang: ${lang})`);
      console.log('(No RESEND_AUDIENCE_ID set — subscriber not saved to Resend.)\n');
      return NextResponse.json({ ok: true, mode: 'logged' });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false,
    });

    if (error) {
      // Duplicate email is common and shouldn't be treated as user-facing error
      if (String(error.message).toLowerCase().includes('already exists')) {
        return NextResponse.json({ ok: true, mode: 'already_subscribed' });
      }
      console.error('[newsletter] resend error', error);
      return NextResponse.json({ error: 'send_failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, mode: 'subscribed' });
  } catch (err) {
    console.error('[newsletter] error', err);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}

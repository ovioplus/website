import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { guardForm, isProduction, oneLine } from '@/lib/server/form-guard';
import { makeConfirmToken } from '@/lib/server/newsletter-token';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_ADDRESS = process.env.CONTACT_FROM ?? 'OvioPlus <noreply@ovioplus.com>';
const SITE = 'https://ovioplus.ai';

/**
 * Newsletter subscribe, double opt-in.
 *
 * The address is stored in the Resend audience as UNSUBSCRIBED and a
 * confirmation email with a signed link is sent. Only clicking that link
 * (/api/newsletter/confirm) subscribes it. Without this anyone could sign up
 * any address, and the first campaign would go to people who never consented
 * (GDPR / ePrivacy) and earn spam complaints for the sending domain.
 *
 * Env: RESEND_API_KEY, RESEND_AUDIENCE_ID (see https://resend.com/audiences).
 * Without them, submissions are logged locally and refused on the live site.
 */
export async function POST(req: Request) {
  try {
    // Same-origin JSON only, honeypot, 5 requests per IP per 10 minutes.
    const g = await guardForm(req, { name: 'newsletter', limit: 5, windowMs: 10 * 60_000 });
    if (!g.ok) return g.response;
    const email = oneLine(g.body.email, 254).toLowerCase();
    const lang = g.body.lang === 'it' ? 'it' : 'en';

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      if (isProduction()) {
        console.error('[newsletter] RESEND_API_KEY or RESEND_AUDIENCE_ID missing in production');
        return NextResponse.json({ error: 'send_failed' }, { status: 500 });
      }
      console.log(`\n[newsletter] new subscriber (not saved, no Resend audience configured), lang ${lang}\n`);
      return NextResponse.json({ ok: true, mode: 'logged' });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.contacts.create({ audienceId, email, unsubscribed: true });
    if (error && String(error.message).toLowerCase().includes('already exists')) {
      // Already in the audience. Confirmed: nothing to send. Not confirmed (or
      // unsubscribed since): send the link again, so a lost email is not a
      // dead end. Same answer to the browser either way, so the form does not
      // reveal who is subscribed.
      const existing = await resend.contacts.get({ audienceId, email });
      if (existing.data && !existing.data.unsubscribed) return NextResponse.json({ ok: true, mode: 'pending' });
    } else if (error) {
      console.error('[newsletter] resend error', error);
      return NextResponse.json({ error: 'send_failed' }, { status: 500 });
    }

    const token = makeConfirmToken(email);
    if (!token) return NextResponse.json({ error: 'send_failed' }, { status: 500 });
    const link = `${SITE}/api/newsletter/confirm?e=${encodeURIComponent(email)}&x=${token.exp}&s=${token.sig}&l=${lang}`;
    const it = lang === 'it';
    const sent = await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: it ? 'Conferma la tua iscrizione a OvioPlus' : 'Confirm your OvioPlus subscription',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 520px; margin: 0 auto; padding: 24px; color: #0f172a;">
          <h1 style="font-size: 20px; margin: 0 0 12px;">${it ? 'Un ultimo passo' : 'One last step'}</h1>
          <p style="line-height: 1.6; margin: 0 0 20px;">${
            it
              ? 'Clicca qui sotto per confermare che vuoi ricevere la newsletter di OvioPlus.'
              : 'Click below to confirm you want to receive the OvioPlus newsletter.'
          }</p>
          <p><a href="${link}" style="display: inline-block; background: #06b6d4; color: #fff; text-decoration: none; padding: 12px 22px; border-radius: 999px; font-weight: 600;">${
            it ? 'Conferma iscrizione' : 'Confirm subscription'
          }</a></p>
          <p style="font-size: 12px; color: #64748b; line-height: 1.6; margin-top: 28px;">${
            it
              ? 'Se non ti sei iscritto tu, ignora questa email: senza conferma non ti scriveremo.'
              : 'If you did not sign up, ignore this email: without confirmation we will not write to you.'
          }</p>
        </div>`,
    });
    if (sent.error) {
      console.error('[newsletter] confirmation email failed', sent.error);
      return NextResponse.json({ error: 'send_failed' }, { status: 500 });
    }
    return NextResponse.json({ ok: true, mode: 'pending' });
  } catch (err) {
    console.error('[newsletter] error', err);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}

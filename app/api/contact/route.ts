import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 1000;

const TO_ADDRESS = process.env.CONTACT_TO ?? 'hello@ovioplus.com';
const FROM_ADDRESS = process.env.CONTACT_FROM ?? 'OvioPlus <noreply@ovioplus.com>';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = (body.name ?? '').toString().trim().slice(0, MAX_FIELD_LENGTH);
    const restaurant = (body.restaurant ?? '').toString().trim().slice(0, MAX_FIELD_LENGTH);
    const email = (body.email ?? '').toString().trim().slice(0, MAX_FIELD_LENGTH);
    const phone = (body.phone ?? '').toString().trim().slice(0, MAX_FIELD_LENGTH);
    const message = (body.message ?? '').toString().trim().slice(0, MAX_FIELD_LENGTH * 4);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'invalid_name' }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Dev fallback: log to terminal when no API key is set
    if (!apiKey) {
      console.log('\n[contact] new demo request (no RESEND_API_KEY — not sent)');
      console.log({ name, restaurant, email, phone, message });
      console.log(`Would have sent to: ${TO_ADDRESS}\n`);
      return NextResponse.json({ ok: true, mode: 'logged' });
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h1 style="font-size: 20px; margin: 0 0 16px;">New demo request — OvioPlus</h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 130px;">Name</td><td><strong>${escape(name)}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Restaurant</td><td>${escape(restaurant) || '—'}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Phone</td><td>${escape(phone) || '—'}</td></tr>
        </table>
        ${
          message
            ? `<div style="margin-top: 24px; padding: 16px; background: #f5f5f7; border-radius: 8px;">
                 <div style="font-size: 12px; color: #666; margin-bottom: 8px;">MESSAGE</div>
                 <div style="white-space: pre-wrap;">${escape(message)}</div>
               </div>`
            : ''
        }
        <p style="margin-top: 32px; font-size: 12px; color: #999;">
          Sent from ovioplus.ai contact form · ${new Date().toISOString()}
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Demo request — ${name}${restaurant ? ` (${restaurant})` : ''}`,
      html,
    });

    if (error) {
      console.error('[contact] resend error', error);
      return NextResponse.json({ error: 'send_failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, mode: 'sent' });
  } catch (err) {
    console.error('[contact] error', err);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

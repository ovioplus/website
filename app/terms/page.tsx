import { LegalLayout } from '@/components/sections/LegalLayout';

export const metadata = { title: 'Terms of Service — OvioPlus' };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 2026">
      <p>
        These terms govern your use of the OvioPlus platform. By signing up you agree to
        them.
      </p>

      <h2>1. Service</h2>
      <p>
        OvioPlus provides an AI receptionist service for restaurants. Features include
        voice agent, chat widget, reservation page, and admin dashboard.
      </p>

      <h2>2. Subscription &amp; billing</h2>
      <ul>
        <li>Plans are billed monthly in advance.</li>
        <li>Voice minutes beyond the plan allowance are billed monthly in arrears.</li>
        <li>You can cancel anytime — service continues until the end of the billing period.</li>
        <li>Setup fees are non-refundable.</li>
      </ul>

      <h2>3. Acceptable use</h2>
      <p>
        You agree not to use OvioPlus for spam, fraud, illegal activity, or to harass
        callers. We may suspend accounts that violate these terms.
      </p>

      <h2>4. Service availability</h2>
      <p>
        We target 99.5% monthly uptime. Scheduled maintenance is announced 48 hours in
        advance. We&apos;re not liable for downtime caused by upstream providers (Twilio,
        OpenAI, etc.).
      </p>

      <h2>5. Your data</h2>
      <p>
        You own your data. We process it on your behalf per our{' '}
        <a href="/privacy">Privacy Policy</a> and{' '}
        <a href="/gdpr">DPA</a>. You can export everything at any time.
      </p>

      <h2>6. AI limitations</h2>
      <p>
        The AI is highly accurate but not infallible. We recommend reviewing reservations
        in your dashboard regularly. OvioPlus is not liable for missed bookings caused by
        AI misunderstanding or telephony issues outside our control.
      </p>

      <h2>7. Liability</h2>
      <p>
        Our liability is limited to the fees paid in the 12 months preceding the claim.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by Italian law. Disputes are resolved in the courts of
        Milan.
      </p>

      <h2>9. Contact</h2>
      <p>
        Email <a href="mailto:contact@ovioplus.com">contact@ovioplus.com</a>.
      </p>
    </LegalLayout>
  );
}

import { LegalLayout } from '@/components/sections/LegalLayout';

export const metadata = { title: 'Privacy Policy — OvioPlus' };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>
        OvioPlus (&quot;we&quot;, &quot;our&quot;) operates a SaaS platform that helps
        restaurants accept reservations across phone, chat, and web. This policy describes
        what personal data we collect, how we use it, and the rights you have under EU
        GDPR.
      </p>

      <h2>1. Data we collect</h2>
      <ul>
        <li><strong>Restaurant accounts:</strong> business name, contact email, billing details.</li>
        <li><strong>Customer reservations:</strong> name, email, phone number, party size, date, time, optional notes.</li>
        <li><strong>Voice recordings:</strong> recordings of calls handled by our AI voice agent, retained for 30 days for quality assurance.</li>
        <li><strong>Usage analytics:</strong> anonymized page views and feature usage on the admin dashboard.</li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To deliver the reservation service (the contract between us).</li>
        <li>To send transactional emails (booking confirmations, owner alerts).</li>
        <li>To improve the AI model — with explicit opt-in only.</li>
        <li>To comply with legal obligations (e.g. tax records).</li>
      </ul>

      <h2>3. Where data lives</h2>
      <p>
        All customer data is stored in the EU (Frankfurt region, Germany). We never transfer
        personal data outside the EEA.
      </p>

      <h2>4. Your rights under GDPR</h2>
      <ul>
        <li>Right of access — request a copy of your data.</li>
        <li>Right to rectification — correct inaccurate data.</li>
        <li>Right to erasure — delete your account and all associated data.</li>
        <li>Right to data portability — export your data in machine-readable form.</li>
        <li>Right to object to processing for marketing purposes.</li>
      </ul>
      <p>
        To exercise any of these rights, email{' '}
        <a href="mailto:privacy@ovioplus.com">privacy@ovioplus.com</a>. We respond within
        30 days.
      </p>

      <h2>5. Cookies</h2>
      <p>
        We use only essential cookies (session, security). No tracking or advertising
        cookies.
      </p>

      <h2>6. Data Processing Agreement</h2>
      <p>
        Restaurants signing up for OvioPlus automatically receive a DPA. A copy is
        available at{' '}
        <a href="/gdpr">/gdpr</a>.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions? Email <a href="mailto:privacy@ovioplus.com">privacy@ovioplus.com</a>.
      </p>
    </LegalLayout>
  );
}

import { LegalLayout } from '@/components/sections/LegalLayout';

export const metadata = { title: 'GDPR & Data Processing — OvioPlus' };

export default function GdprPage() {
  return (
    <LegalLayout title="GDPR &amp; Data Processing" updated="June 2026">
      <p>
        OvioPlus is built EU-first and GDPR-compliant from day one. This page summarizes
        our commitments. A full Data Processing Agreement is signed with every
        restaurant.
      </p>

      <h2>1. Our commitments</h2>
      <ul>
        <li>All personal data stored in the EU (Frankfurt, Germany).</li>
        <li>No data transfers outside the EEA.</li>
        <li>Encryption in transit (TLS 1.3) and at rest (AES-256).</li>
        <li>Daily backups with point-in-time recovery, 30-day retention.</li>
        <li>Annual access audits and security reviews.</li>
      </ul>

      <h2>2. Sub-processors</h2>
      <p>We use the following GDPR-compliant providers:</p>
      <table>
        <thead>
          <tr><th>Provider</th><th>Purpose</th><th>Region</th></tr>
        </thead>
        <tbody>
          <tr><td>Neon</td><td>Database hosting</td><td>EU (Frankfurt)</td></tr>
          <tr><td>Vercel</td><td>Web hosting</td><td>EU edges</td></tr>
          <tr><td>Fly.io</td><td>Backend hosting</td><td>EU (Frankfurt)</td></tr>
          <tr><td>Resend</td><td>Transactional email</td><td>EU available</td></tr>
          <tr><td>Vapi.ai</td><td>Voice AI orchestration</td><td>Bound by DPA</td></tr>
          <tr><td>OpenAI</td><td>Language model</td><td>EU API endpoints used</td></tr>
        </tbody>
      </table>

      <h2>3. Customer rights</h2>
      <p>
        End-customers booking through OvioPlus retain all GDPR rights. Restaurants
        receive an automatic exposure of these tools to customers (privacy link in
        confirmation emails).
      </p>

      <h2>4. Breach notification</h2>
      <p>
        In the unlikely event of a data breach, we notify affected restaurants within 24
        hours and authorities within 72 hours.
      </p>

      <h2>5. Right to erasure</h2>
      <p>
        Customers can request deletion of their booking data at any time by emailing{' '}
        <a href="mailto:privacy@ovioplus.com">privacy@ovioplus.com</a>. Restaurants can
        delete their entire workspace from the dashboard, and we permanently erase data
        within 30 days.
      </p>

      <h2>6. Request our full DPA</h2>
      <p>
        Restaurants sign the DPA during onboarding. To request a copy in advance, email{' '}
        <a href="mailto:privacy@ovioplus.com">privacy@ovioplus.com</a>.
      </p>
    </LegalLayout>
  );
}

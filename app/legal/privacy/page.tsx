import { LegalShell } from '@/components/legal/LegalShell';

export const metadata = {
  title: 'Privacy Policy — OvioPlus',
  description: 'How OvioPlus handles personal data, in accordance with the GDPR.',
};

export default function PrivacyPage() {
  return <LegalShell slug="privacy" />;
}

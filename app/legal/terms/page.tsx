import { LegalShell } from '@/components/legal/LegalShell';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of use of the OvioPlus platform.',
};

export default function TermsPage() {
  return <LegalShell slug="terms" />;
}

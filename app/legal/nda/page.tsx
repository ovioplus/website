import { LegalShell } from '@/components/legal/LegalShell';

export const metadata = {
  title: 'Non-Disclosure Agreement (NDA) — OvioPlus',
  description: 'Confidentiality agreement between parties.',
};

export default function NDAPage() {
  return <LegalShell slug="nda" />;
}

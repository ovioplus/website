import { LegalShell } from '@/components/legal/LegalShell';

export const metadata = {
  title: 'Data Processing Agreement (DPA) — OvioPlus',
  description: 'GDPR Art. 28 Data Processing Agreement.',
};

export default function DPAPage() {
  return <LegalShell slug="dpa" />;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact OvioPlus — Book a demo, email or call our team',
  description:
    'Book a 30-minute demo of the OvioPlus AI receptionist, email contact@ovioplus.com, or call our team. We reply within 24 hours on business days.',
  alternates: { canonical: 'https://ovioplus.ai/contact' },
  openGraph: {
    title: 'Contact OvioPlus — Book a demo of the AI receptionist',
    description: 'Book a 30-minute demo. See the AI take a real call. No commitment.',
    url: 'https://ovioplus.ai/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

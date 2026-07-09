import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About OvioPlus — Building the AI receptionist for restaurants',
  description:
    'OvioPlus builds AI receptionists for restaurants — phone, chat and web bookings answered 24/7. Learn our mission, values and vision for the future of hospitality.',
  alternates: { canonical: 'https://ovioplus.ai/about' },
  openGraph: {
    title: 'About OvioPlus — Building the AI receptionist for restaurants',
    description:
      'Our mission: give every restaurant an AI receptionist that never misses a call and never forgets a regular.',
    url: 'https://ovioplus.ai/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

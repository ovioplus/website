import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships — Build with OvioPlus | Restaurant AI for Europe',
  description:
    'Partner with OvioPlus. We work with restaurant software, POS systems, reservation platforms, consulting firms and hospitality agencies to bring AI receptionists to more restaurants across Europe.',
  alternates: { canonical: 'https://ovioplus.ai/partnerships' },
  openGraph: {
    title: 'Partnerships — Build with OvioPlus',
    description:
      'Together we are building the future of the restaurant industry. Partner with OvioPlus to bring AI receptionists to more restaurants.',
    url: 'https://ovioplus.ai/partnerships',
    type: 'website',
  },
};

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

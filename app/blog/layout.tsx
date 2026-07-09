import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Restaurant AI insights, case studies and product updates',
  description:
    'Product updates, restaurant case studies and industry trends. Written for people who run restaurants — from independent trattorias to Michelin rooms.',
  alternates: { canonical: 'https://ovioplus.ai/blog' },
  openGraph: {
    title: 'OvioPlus Blog — Restaurant AI, unpacked',
    description:
      'Product updates, restaurant case studies and industry trends for people who run restaurants.',
    url: 'https://ovioplus.ai/blog',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

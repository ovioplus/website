import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap — Every page on ovioplus.ai',
  description:
    'Full map of every page on ovioplus.ai. Product features, pricing, FAQ, company info, partnerships, contact and legal — all in one place.',
  alternates: { canonical: 'https://ovioplus.ai/site-map' },
  robots: { index: true, follow: true },
};

export default function SitemapPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

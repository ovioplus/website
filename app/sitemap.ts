import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

/**
 * Sitemap — Next.js auto-serves this at /sitemap.xml.
 * Google & Bing discover it automatically once you submit
 * the domain to Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  return [
    // Primary pages
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/site-map`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },

    // Legal
    { url: `${base}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/dpa`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/nda`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}

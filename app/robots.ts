import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

/**
 * robots.txt — Next.js auto-serves this at /robots.txt.
 * Allows all crawlers; points to sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

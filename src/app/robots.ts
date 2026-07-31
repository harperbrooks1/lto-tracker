import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Robots.txt generation.
 * Next.js serves this at /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Web App Manifest for PWA-readiness and better mobile experience.
 * Next.js serves this at /manifest.webmanifest
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { TrackerHero } from '@/components/sections/TrackerHero';
import { TrackerTool } from '@/components/tracker/TrackerTool';
import { TrackerExplanation } from '@/components/sections/TrackerExplanation';
import { ArticlePlaceholder } from '@/components/sections/ArticlePlaceholder';
import { FAQ } from '@/components/sections/FAQ';
import { RelatedArticles } from '@/components/sections/RelatedArticles';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getWebApplicationSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from '@/lib/schema';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'LTO Tracker - Check Your Transaction Status',
  description:
    'Free tool to check and understand your LTO vehicle registration, driver\'s license, or MV file transaction status. Get clear guidance on your next steps.',
  alternates: {
    canonical: `${siteConfig.url}/lto-tracker`,
  },
  openGraph: {
    title: 'LTO Tracker - Check Your Transaction Status',
    description:
      'Check and understand your LTO transaction status with our free guidance tool. Get clear next steps for vehicle registration and license renewals.',
    url: `${siteConfig.url}/lto-tracker`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LTO Tracker - Check Your Transaction Status',
    description:
      'Check and understand your LTO transaction status. Free guidance for vehicle registration and license renewals.',
  },
};

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'LTO Tracker', path: '/lto-tracker' },
];

export default function LTOTrackerPage() {
  return (
    <>
      {/* Structured data for SEO */}
      <JsonLd
        data={[
          getWebApplicationSchema(),
          getFAQSchema(),
          getBreadcrumbSchema(breadcrumbItems),
        ]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <TrackerHero />

      {/* Interactive tracker tool */}
      <section className="py-12 sm:py-16">
        <Container>
          <TrackerTool />
        </Container>
      </section>

      {/* Explanation */}
      <TrackerExplanation />

      {/* SEO article placeholder */}
      <ArticlePlaceholder />

      {/* FAQ */}
      <FAQ />

      {/* Related articles */}
      <RelatedArticles limit={6} />
    </>
  );
}

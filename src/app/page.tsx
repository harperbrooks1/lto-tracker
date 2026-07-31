import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';
import { RelatedArticles } from '@/components/sections/RelatedArticles';
import { JsonLd } from '@/components/seo/JsonLd';
import { getOrganizationSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd data={getOrganizationSchema()} />

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-600 to-primary-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Guide to LTO Services in the Philippines
            </h1>
            <p className="text-xl sm:text-2xl text-primary-50 mb-8 leading-relaxed">
              Everything you need to know about vehicle registration, driver's
              license renewal, fees, requirements, and transaction tracking.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <LinkButton href="/lto-tracker" size="lg" className="text-lg">
                Try the LTO Tracker
              </LinkButton>
              <LinkButton
                href="/#articles"
                variant="outline"
                size="lg"
                className="text-lg bg-white"
              >
                Browse Articles
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Key features */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Use TheLTOPortal?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We make navigating LTO processes easier with clear guidance and
              helpful resources.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="bg-white rounded-2xl border border-neutral-200 shadow-soft p-8 text-center"
              >
                <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-4xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Check Your LTO Transaction Status Now
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Get clear guidance on your vehicle registration, driver's license,
              or MV file transaction in seconds.
            </p>
            <LinkButton href="/lto-tracker" size="lg" className="text-lg">
              Open LTO Tracker
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* Related articles */}
      <RelatedArticles limit={6} />

      {/* Disclaimer */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <Container size="narrow">
          <p className="text-sm text-neutral-600 leading-relaxed text-center">
            <strong className="text-neutral-900">Important Notice:</strong>{' '}
            {siteConfig.fullName} is an independent informational resource. We
            are not affiliated with the Land Transportation Office or any
            government agency. For official transactions, visit{' '}
            <a
              href={siteConfig.ltoOfficialSite}
              className="text-primary-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              lto.gov.ph
            </a>{' '}
            or call {siteConfig.ltoHotline}.
          </p>
        </Container>
      </section>
    </>
  );
}

const features = [
  {
    icon: '🔍',
    title: 'Free LTO Tracker',
    description:
      'Check your transaction status and understand what each status means with recommended next steps.',
  },
  {
    icon: '📚',
    title: 'Comprehensive Guides',
    description:
      'Step-by-step articles covering registration, renewals, requirements, fees, and common issues.',
  },
  {
    icon: '🎯',
    title: 'Clear & Trustworthy',
    description:
      'No confusing jargon. Just clear, accurate information designed to help you get things done.',
  },
];

/**
 * ArticlePlaceholder - Dedicated slot where the SEO article will be inserted.
 *
 * HOW TO ADD YOUR ARTICLE:
 * The article is written separately. When ready, replace the contents of the
 * <div className="article-content"> below with your article HTML/JSX, OR
 * import it from an MDX/CMS source. The surrounding heading, spacing, and
 * "prose" typography styles are already set up for you.
 */

import { Container } from '@/components/ui/Container';

export function ArticlePlaceholder() {
  return (
    <section
      id="article"
      className="py-16 sm:py-20"
      aria-labelledby="article-heading"
    >
      <Container size="narrow">
        <h2
          id="article-heading"
          className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6"
        >
          Understanding LTO Transaction Tracking
        </h2>

        {/*
          ====================================================
          ARTICLE CONTENT PLACEHOLDER
          ====================================================
          Insert the pre-written SEO article here.
          The .prose classes below provide clean, readable
          typography for headings, paragraphs, and lists.
          ====================================================
        */}
        <div className="article-content prose prose-lg max-w-none text-neutral-700">
          <div className="rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-neutral-500 text-base">
              📝 The full SEO article will be inserted here.
            </p>
            <p className="text-neutral-400 text-sm mt-2">
              This is a placeholder. See{' '}
              <code className="px-1.5 py-0.5 bg-neutral-200 rounded text-neutral-600">
                src/components/sections/ArticlePlaceholder.tsx
              </code>{' '}
              for instructions on adding your content.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

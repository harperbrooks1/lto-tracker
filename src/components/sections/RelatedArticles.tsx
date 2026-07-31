/**
 * RelatedArticles - Grid of related LTO article cards
 */

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { formatDate } from '@/lib/utils';
import articlesData from '@/data/articles.json';
import type { RelatedArticle } from '@/types';

const articles = articlesData.articles as RelatedArticle[];

interface RelatedArticlesProps {
  limit?: number;
}

export function RelatedArticles({ limit = 6 }: RelatedArticlesProps) {
  const displayed = articles.slice(0, limit);

  return (
    <section
      id="articles"
      className="py-16 sm:py-20"
      aria-labelledby="articles-heading"
    >
      <Container>
        <div className="text-center mb-10">
          <h2
            id="articles-heading"
            className="text-3xl sm:text-4xl font-bold text-neutral-900"
          >
            Related LTO Articles
          </h2>
          <p className="mt-3 text-lg text-neutral-600">
            Guides and resources to help you with your LTO transactions.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((article) => (
            <li key={article.id}>
              <Link
                href={`/articles/${article.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl border border-neutral-200 shadow-soft overflow-hidden transition-all duration-200 hover:shadow-medium hover:border-primary-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
              >
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-flex self-start px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-neutral-500">
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

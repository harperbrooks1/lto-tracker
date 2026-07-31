/**
 * Breadcrumbs - Accessible visual breadcrumb navigation.
 * Pair with getBreadcrumbSchema() for SEO.
 */

import Link from 'next/link';
import { Container } from '@/components/ui/Container';

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-neutral-50 border-b border-neutral-200">
      <Container>
        <nav aria-label="Breadcrumb" className="py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.path} className="flex items-center gap-2">
                  {isLast ? (
                    <span
                      className="text-neutral-500 font-medium"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={item.path}
                        className="text-primary-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 rounded"
                      >
                        {item.name}
                      </Link>
                      <span className="text-neutral-400" aria-hidden="true">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}

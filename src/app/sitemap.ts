import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import articlesData from '@/data/articles.json';
import type { RelatedArticle } from '@/types';

/**
 * Dynamic sitemap generation.
 * Automatically includes static pages and all articles from the data layer.
 * Next.js serves this at /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = articlesData.articles as RelatedArticle[];

  // Static, high-priority pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/lto-tracker`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Article pages generated from the data layer
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}

/**
 * Structured Data (JSON-LD) generators for SEO
 * Produces schema.org objects for rich search results.
 */

import { siteConfig } from '@/config/site';
import faqsData from '@/data/faqs.json';
import type { FAQItem } from '@/types';

/**
 * WebApplication schema for the tracker tool.
 */
export function getWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LTO Tracker',
    url: `${siteConfig.url}/lto-tracker`,
    description:
      'Free tool to check and understand the status of your LTO vehicle registration, driver\'s license, and MV file transactions.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PHP',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.organization.name,
      url: siteConfig.url,
    },
  };
}

/**
 * FAQPage schema built from the FAQ data.
 */
export function getFAQSchema() {
  const faqs = faqsData.faqs as FAQItem[];
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema.
 * @param items - Array of { name, path } from home to current page.
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/**
 * Organization schema for the site.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.organization.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

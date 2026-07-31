/**
 * Central site configuration
 * Edit these values to update site-wide information.
 * Non-technical owners can safely change text values here.
 */

export const siteConfig = {
  // Basic site information
  name: 'TheLTOPortal',
  fullName: 'TheLTOPortal.ph',
  title: 'LTO Portal Philippines - Your Guide to LTO Services',
  description:
    'TheLTOPortal.ph is your trusted informational guide to LTO services in the Philippines, including vehicle registration, driver\'s license renewal, fees, and requirements.',

  // Production URL (used for canonical URLs, sitemap, and Open Graph)
  url: 'https://theltoportal.ph',

  // Contact & official references
  ltoHotline: '1342',
  ltoOfficialSite: 'https://lto.gov.ph',
  ltoEmail: 'info@lto.gov.ph',

  // Social media handles (for Twitter cards)
  twitterHandle: '@theltoportal',

  // Locale
  locale: 'en_PH',

  // Organization info for structured data
  organization: {
    name: 'TheLTOPortal.ph',
    logo: 'https://theltoportal.ph/logo.png',
  },
} as const;

/**
 * Navigation links used in the header and footer
 */
export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'LTO Tracker', href: '/lto-tracker' },
  { label: 'Vehicle Registration', href: '/#registration' },
  { label: "Driver's License", href: '/#license' },
  { label: 'FAQ', href: '/lto-tracker#faq' },
] as const;

/**
 * Footer link groups
 */
export const footerLinks = {
  services: [
    { label: 'LTO Tracker', href: '/lto-tracker' },
    { label: 'Vehicle Registration', href: '/#registration' },
    { label: "Driver's License", href: '/#license' },
    { label: 'Fees & Penalties', href: '/#fees' },
  ],
  resources: [
    { label: 'FAQ', href: '/lto-tracker#faq' },
    { label: 'Articles', href: '/#articles' },
    { label: 'Official LTO Website', href: 'https://lto.gov.ph' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
} as const;

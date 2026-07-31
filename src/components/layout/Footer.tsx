/**
 * Footer - Site footer with links and legal disclaimer
 */

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { footerLinks, siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600 text-white font-bold text-xl">
                L
              </span>
              <span className="text-xl font-bold text-white">
                {siteConfig.name}
                <span className="text-primary-400">.ph</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted informational guide to LTO services in the
              Philippines.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="text-white font-semibold mb-4 text-base">Services</h2>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h2 className="text-white font-semibold mb-4 text-base">Resources</h2>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h2 className="text-white font-semibold mb-4 text-base">Legal</h2>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-neutral-800">
          <p className="text-xs leading-relaxed text-neutral-400 mb-4">
            <strong className="text-neutral-300">Disclaimer:</strong>{' '}
            {siteConfig.fullName} is an independent informational resource and is
            not affiliated with, endorsed by, or operated by the Land
            Transportation Office (LTO) or any government agency. For official
            transactions and records, please visit the official LTO website at{' '}
            <a
              href={siteConfig.ltoOfficialSite}
              className="text-primary-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              lto.gov.ph
            </a>{' '}
            or call the LTO hotline at {siteConfig.ltoHotline}.
          </p>
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

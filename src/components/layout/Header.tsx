'use client';

/**
 * Header - Site navigation with mobile-responsive menu
 */

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { navigationLinks, siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-soft">
      <Container>
        <nav
          className="flex items-center justify-between h-18 py-3"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300 rounded-lg"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600 text-white font-bold text-xl">
              L
            </span>
            <span className="text-xl font-bold text-neutral-900">
              {siteConfig.name}
              <span className="text-primary-600">.ph</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-neutral-700 font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-neutral-700 font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}

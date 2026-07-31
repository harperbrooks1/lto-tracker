/**
 * LinkButton - A Next.js Link styled exactly like a Button.
 * Use this for navigation so we never nest a <button> inside an <a>.
 */

import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from '@/components/ui/Button';

interface LinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  /** Set for external links (adds target and rel automatically). */
  external?: boolean;
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'lg',
  className,
  children,
  external = false,
}: LinkButtonProps) {
  const classes = buttonStyles(variant, size, className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/**
 * Button - Accessible, reusable button component
 * Large touch targets and clear focus states for elderly users.
 *
 * For navigation, use <LinkButton> instead of wrapping <Button> in a <Link>
 * (a <button> inside an <a> is invalid HTML).
 */

import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-soft',
  secondary:
    'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-300',
  outline:
    'bg-white text-primary-700 border-2 border-primary-600 hover:bg-primary-50 active:bg-primary-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-base min-h-[48px]',
  lg: 'px-8 py-4 text-lg min-h-[56px]',
};

/**
 * Shared button styling. Reused by <Button> and <LinkButton> so buttons and
 * link-buttons look identical without duplicating class strings.
 */
export function buttonStyles(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'lg',
  className?: string
): string {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
    'transition-colors duration-200',
    'focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export function Button({
  variant = 'primary',
  size = 'lg',
  isLoading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles(variant, size, className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

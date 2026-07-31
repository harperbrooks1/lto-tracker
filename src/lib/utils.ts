/**
 * Shared utility helpers
 */

import { clsx, type ClassValue } from 'clsx';

/**
 * Merge conditional class names cleanly.
 * Usage: cn('base', condition && 'active', 'more')
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Format an ISO date string into a readable Philippine-friendly format.
 * Example: "2026-08-05" -> "August 5, 2026"
 */
export function formatDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return isoDate;
  }
}

/**
 * Human-readable label for each search type.
 */
export function getSearchTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    plate: 'Plate Number',
    'mv-file': 'MV File Number',
    license: "Driver's License Number",
  };
  return labels[type] ?? type;
}

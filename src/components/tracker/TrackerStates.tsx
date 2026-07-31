/**
 * TrackerStates - Presentational components for the tool's various states:
 * loading, empty (initial), and no-result (valid search, nothing found).
 */

import { siteConfig } from '@/config/site';

/**
 * Loading skeleton shown while a search is in progress.
 */
export function LoadingState() {
  return (
    <div
      className="animate-fade-in bg-white rounded-2xl border border-neutral-200 shadow-soft p-8"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Searching, please wait...</span>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-neutral-200 animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/3 bg-neutral-200 rounded animate-pulse" />
          <div className="h-6 w-1/2 bg-neutral-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-neutral-200 rounded animate-pulse" />
        <div className="h-4 w-4/6 bg-neutral-200 rounded animate-pulse" />
      </div>
      <p className="mt-6 text-center text-neutral-500 text-sm">
        Checking status guidance...
      </p>
    </div>
  );
}

/**
 * Empty state shown before the user has searched anything.
 */
export function EmptyState() {
  return (
    <div className="text-center py-12 px-6">
      <div className="mx-auto w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
        Ready to check your status
      </h3>
      <p className="text-neutral-600 max-w-md mx-auto">
        Choose what you want to search, enter your details above, and we'll
        explain the status and your next steps.
      </p>
    </div>
  );
}

/**
 * No-result state shown when the search was valid but nothing matched.
 */
export function NoResultState({ searchValue }: { searchValue: string }) {
  return (
    <div
      className="animate-fade-in bg-white rounded-2xl border border-neutral-200 shadow-soft text-center py-12 px-6"
      role="status"
    >
      <div className="mx-auto w-16 h-16 rounded-full bg-warning-50 flex items-center justify-center mb-4">
        <span className="text-3xl" aria-hidden="true">
          🔍
        </span>
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
        No matching record found for &ldquo;{searchValue}&rdquo;
      </h3>
      <p className="text-neutral-600 max-w-md mx-auto mb-4">
        We couldn&apos;t find guidance for that entry. Double-check the spelling
        and format, then try again.
      </p>
      <p className="text-sm text-neutral-500 max-w-md mx-auto">
        For your exact official record, call the LTO hotline at{' '}
        <a
          href={`tel:${siteConfig.ltoHotline}`}
          className="font-semibold text-primary-700 underline"
        >
          {siteConfig.ltoHotline}
        </a>{' '}
        or visit your nearest LTO office.
      </p>
    </div>
  );
}

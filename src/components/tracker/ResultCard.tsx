/**
 * ResultCard - Displays a transaction result with status, timeline, and guidance
 */

import { Badge } from '@/components/ui/Badge';
import { Timeline } from '@/components/tracker/Timeline';
import { formatDate, getSearchTypeLabel } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import type { TransactionResult } from '@/types';

interface ResultCardProps {
  result: TransactionResult;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <article className="animate-slide-up bg-white rounded-2xl border border-neutral-200 shadow-medium overflow-hidden">
      {/* Header */}
      <div className="bg-primary-600 px-6 py-5 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-primary-100 text-sm font-medium">
              {getSearchTypeLabel(result.searchType)}
            </p>
            <h3 className="text-white text-2xl font-bold mt-1">
              {result.searchValue}
            </h3>
          </div>
          <Badge statusInfo={result.statusInfo} />
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Status meaning */}
        <section aria-labelledby="status-meaning">
          <h4
            id="status-meaning"
            className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2"
          >
            What this means
          </h4>
          <p className="text-base text-neutral-700 leading-relaxed">
            {result.statusInfo.description}
          </p>
        </section>

        {/* Transaction details */}
        <section aria-labelledby="details" className="grid sm:grid-cols-2 gap-4">
          <h4 id="details" className="sr-only">
            Transaction details
          </h4>
          <DetailItem label="Transaction Type" value={result.transactionType} />
          <DetailItem label="Reference Number" value={result.referenceNumber} />
          <DetailItem label="Office Location" value={result.officeLocation} />
          {result.estimatedCompletion && (
            <DetailItem
              label="Estimated Completion"
              value={formatDate(result.estimatedCompletion)}
            />
          )}
        </section>

        {/* Recommended next action */}
        <section
          aria-labelledby="next-action"
          className="rounded-xl bg-primary-50 border border-primary-200 p-5"
        >
          <h4
            id="next-action"
            className="flex items-center gap-2 text-base font-semibold text-primary-800 mb-2"
          >
            <span aria-hidden="true">👉</span> Recommended Next Step
          </h4>
          <p className="text-base text-primary-900 leading-relaxed">
            {result.nextAction}
          </p>
        </section>

        {/* Timeline */}
        <section aria-labelledby="timeline-heading">
          <h4
            id="timeline-heading"
            className="text-lg font-semibold text-neutral-900 mb-5"
          >
            Progress Timeline
          </h4>
          <Timeline entries={result.timeline} />
        </section>

        {/* Helpful notes */}
        {result.notes.length > 0 && (
          <section
            aria-labelledby="notes-heading"
            className="rounded-xl bg-neutral-50 border border-neutral-200 p-5"
          >
            <h4
              id="notes-heading"
              className="text-base font-semibold text-neutral-900 mb-3"
            >
              Helpful Notes
            </h4>
            <ul className="space-y-2">
              {result.notes.map((note, index) => (
                <li key={index} className="flex gap-2 text-sm text-neutral-700">
                  <span className="text-primary-600 flex-shrink-0" aria-hidden="true">
                    •
                  </span>
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Official verification notice */}
        <div className="rounded-xl bg-warning-50 border border-warning-200 p-4">
          <p className="text-sm text-warning-800 leading-relaxed">
            <strong>Please note:</strong> This tool provides guidance and status
            interpretation to help you understand the LTO process. It does not
            claim to provide official real-time records. For your exact official
            record, please call the LTO hotline at{' '}
            <a
              href={`tel:${siteConfig.ltoHotline}`}
              className="font-semibold underline"
            >
              {siteConfig.ltoHotline}
            </a>{' '}
            or visit the LTO office handling your transaction.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * Small helper for consistent detail display
 */
function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-neutral-500">{label}</dt>
      <dd className="text-base text-neutral-900 mt-0.5">{value}</dd>
    </div>
  );
}

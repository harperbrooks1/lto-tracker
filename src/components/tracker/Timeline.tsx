/**
 * Timeline - Visual progress timeline for a transaction
 */

import { getStatusInfo } from '@/lib/status-info';
import { formatDate } from '@/lib/utils';
import type { TimelineEntry } from '@/types';

interface TimelineProps {
  entries: TimelineEntry[];
}

const dotColorClasses: Record<string, string> = {
  blue: 'bg-primary-600 ring-primary-100',
  yellow: 'bg-warning-500 ring-warning-100',
  green: 'bg-success-600 ring-success-100',
  red: 'bg-error-600 ring-error-100',
  gray: 'bg-neutral-400 ring-neutral-100',
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative space-y-6" aria-label="Transaction timeline">
      {entries.map((entry, index) => {
        const info = getStatusInfo(entry.status);
        const isLast = index === entries.length - 1;

        return (
          <li key={`${entry.date}-${index}`} className="relative flex gap-4">
            {/* Connector line */}
            {!isLast && (
              <span
                className="absolute left-[11px] top-8 bottom-[-24px] w-0.5 bg-neutral-200"
                aria-hidden="true"
              />
            )}

            {/* Dot */}
            <span
              className={`relative z-10 mt-1 flex-shrink-0 w-6 h-6 rounded-full ring-4 ${
                dotColorClasses[info.color]
              }`}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="text-base font-semibold text-neutral-900">
                  {entry.title}
                </h4>
                <time className="text-sm text-neutral-500">
                  {formatDate(entry.date)} &middot; {entry.time}
                </time>
              </div>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                {entry.description}
              </p>
              {entry.location && (
                <p className="mt-1 text-sm text-neutral-500">
                  <span aria-hidden="true">📍</span> {entry.location}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

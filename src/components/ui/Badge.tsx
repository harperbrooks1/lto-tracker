/**
 * Badge - Status badge with semantic colors
 */

import { getStatusBadgeClasses } from '@/lib/status-info';
import type { StatusInfo } from '@/types';

interface BadgeProps {
  statusInfo: StatusInfo;
}

export function Badge({ statusInfo }: BadgeProps) {
  return (
    <span
      className={getStatusBadgeClasses(statusInfo.color)}
      role="status"
      aria-label={`Status: ${statusInfo.label}`}
    >
      <span aria-hidden="true">{statusInfo.icon}</span>
      {statusInfo.label}
    </span>
  );
}

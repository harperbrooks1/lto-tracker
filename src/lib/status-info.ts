/**
 * Status information and helpers
 * Provides human-readable status descriptions and styling
 */

import type { StatusInfo, TransactionStatus } from '@/types';

/**
 * Get detailed information about a transaction status
 */
export function getStatusInfo(status: TransactionStatus): StatusInfo {
  const statusMap: Record<TransactionStatus, StatusInfo> = {
    pending: {
      status: 'pending',
      label: 'Pending Verification',
      description:
        'Your transaction has been received and is awaiting initial verification.',
      color: 'gray',
      icon: '⏳',
    },
    'in-progress': {
      status: 'in-progress',
      label: 'In Progress',
      description:
        'Your documents are currently being processed by LTO personnel.',
      color: 'blue',
      icon: '🔄',
    },
    'for-release': {
      status: 'for-release',
      label: 'For Release',
      description:
        'Processing is complete. Your documents are ready for claiming.',
      color: 'green',
      icon: '✓',
    },
    released: {
      status: 'released',
      label: 'Released',
      description: 'Transaction completed. Documents have been released.',
      color: 'green',
      icon: '✓',
    },
    'on-hold': {
      status: 'on-hold',
      label: 'On Hold',
      description:
        'Transaction is temporarily on hold. Additional requirements may be needed.',
      color: 'yellow',
      icon: '⚠',
    },
    rejected: {
      status: 'rejected',
      label: 'Rejected',
      description:
        'Transaction could not be processed. Please check the notes for details.',
      color: 'red',
      icon: '✕',
    },
    cancelled: {
      status: 'cancelled',
      label: 'Cancelled',
      description: 'Transaction has been cancelled.',
      color: 'gray',
      icon: '✕',
    },
    completed: {
      status: 'completed',
      label: 'Completed',
      description: 'All processes have been successfully completed.',
      color: 'green',
      icon: '✓',
    },
  };

  return statusMap[status];
}

/**
 * Get CSS classes for status badge
 */
export function getStatusBadgeClasses(color: StatusInfo['color']): string {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm';

  const colorClasses: Record<StatusInfo['color'], string> = {
    blue: 'bg-primary-50 text-primary-700 border border-primary-200',
    yellow: 'bg-warning-50 text-warning-700 border border-warning-200',
    green: 'bg-success-50 text-success-700 border border-success-200',
    red: 'bg-error-50 text-error-700 border border-error-200',
    gray: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
  };

  return `${baseClasses} ${colorClasses[color]}`;
}

/**
 * Determine if status is terminal (no further updates expected)
 */
export function isTerminalStatus(status: TransactionStatus): boolean {
  return ['released', 'completed', 'rejected', 'cancelled'].includes(status);
}

/**
 * Determine if status requires user action
 */
export function requiresAction(status: TransactionStatus): boolean {
  return ['on-hold', 'for-release'].includes(status);
}

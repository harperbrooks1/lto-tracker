/**
 * Search Service - Data Access Layer
 *
 * This is the ONLY place that reads transaction data.
 * Today it reads from a local JSON file. To connect a real LTO API later,
 * replace the body of `searchTransaction` with a fetch() call - the rest
 * of the application will not need to change.
 */

import type {
  SearchType,
  TransactionResult,
  TransactionStatus,
} from '@/types';
import { getStatusInfo } from '@/lib/status-info';
import transactionsData from '@/data/transactions.json';

// Simulated network latency for realistic loading states (ms)
const SIMULATED_DELAY = 900;

/**
 * Shape of a raw transaction record from the JSON data source.
 */
interface RawTransaction {
  id: string;
  searchType: string;
  searchValue: string;
  transactionType: string;
  currentStatus: string;
  referenceNumber: string;
  officeLocation: string;
  estimatedCompletion?: string;
  nextAction: string;
  notes: string[];
  contactInfo?: { hotline: string; email: string };
  timeline: Array<{
    date: string;
    time: string;
    title: string;
    description: string;
    location?: string;
    status: string;
  }>;
}

/**
 * Map a raw JSON record into a fully-typed TransactionResult,
 * enriching it with computed status information.
 */
function mapToResult(raw: RawTransaction): TransactionResult {
  const currentStatus = raw.currentStatus as TransactionStatus;

  return {
    id: raw.id,
    searchType: raw.searchType as SearchType,
    searchValue: raw.searchValue,
    transactionType: raw.transactionType,
    currentStatus,
    statusInfo: getStatusInfo(currentStatus),
    referenceNumber: raw.referenceNumber,
    officeLocation: raw.officeLocation,
    estimatedCompletion: raw.estimatedCompletion,
    nextAction: raw.nextAction,
    notes: raw.notes,
    contactInfo: raw.contactInfo,
    timeline: raw.timeline.map((entry) => ({
      ...entry,
      status: entry.status as TransactionStatus,
    })),
  };
}

/**
 * Search for a transaction by type and value.
 *
 * @returns The matching transaction result, or null if not found.
 *
 * NOTE: This function returns guidance and status interpretation.
 * It does NOT claim to provide official real-time LTO records.
 */
export async function searchTransaction(
  type: SearchType,
  sanitizedValue: string
): Promise<TransactionResult | null> {
  // Simulate async data fetch (replace with real API call later)
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));

  const records = transactionsData.transactions as RawTransaction[];

  const match = records.find(
    (record) =>
      record.searchType === type &&
      record.searchValue.toUpperCase() === sanitizedValue.toUpperCase()
  );

  return match ? mapToResult(match) : null;
}

/**
 * Get a few example search values so users can try the tool.
 * Useful for empty states and demos.
 */
export function getExampleSearches(): Record<SearchType, string> {
  return {
    plate: 'ABC1234',
    'mv-file': '1234567890',
    license: 'N01-23-456789',
  };
}

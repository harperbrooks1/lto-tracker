/**
 * Core type definitions for LTO Tracker
 * These types ensure type safety across the application
 */

// Search input types
export type SearchType = 'plate' | 'mv-file' | 'license';

export interface SearchInput {
  type: SearchType;
  value: string;
}

// Status types
export type TransactionStatus =
  | 'pending'
  | 'in-progress'
  | 'for-release'
  | 'released'
  | 'on-hold'
  | 'rejected'
  | 'cancelled'
  | 'completed';

export interface StatusInfo {
  status: TransactionStatus;
  label: string;
  description: string;
  color: 'blue' | 'yellow' | 'green' | 'red' | 'gray';
  icon: string;
}

// Timeline entry
export interface TimelineEntry {
  date: string;
  time: string;
  title: string;
  description: string;
  location?: string;
  status: TransactionStatus;
}

// Transaction result
export interface TransactionResult {
  id: string;
  searchType: SearchType;
  searchValue: string;
  transactionType: string;
  currentStatus: TransactionStatus;
  statusInfo: StatusInfo;
  timeline: TimelineEntry[];
  estimatedCompletion?: string;
  referenceNumber: string;
  officeLocation: string;
  notes: string[];
  nextAction: string;
  contactInfo?: {
    hotline: string;
    email: string;
  };
}

// Validation result
export interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitizedValue?: string;
}

// FAQ item
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'registration' | 'license' | 'renewal' | 'requirements';
}

// Related article
export interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime: number;
  publishedAt: string;
}

// Search history (for future enhancement)
export interface SearchHistory {
  timestamp: string;
  searchType: SearchType;
  searchValue: string;
}

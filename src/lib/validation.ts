/**
 * Input validation utilities for LTO searches
 * Validates and sanitizes user input before processing
 */

import type { SearchType, ValidationResult } from '@/types';

/**
 * Validate Philippine plate number
 * Formats: ABC1234, ABC123, AB1234, NCR1234, etc.
 */
export function validatePlateNumber(value: string): ValidationResult {
  const sanitized = value.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (!sanitized) {
    return {
      isValid: false,
      error: 'Plate number cannot be empty',
    };
  }

  if (sanitized.length < 5 || sanitized.length > 7) {
    return {
      isValid: false,
      error: 'Plate number must be 5-7 characters (e.g., ABC1234)',
    };
  }

  // Basic pattern: starts with letters, ends with numbers
  const hasLetters = /[A-Z]/.test(sanitized);
  const hasNumbers = /[0-9]/.test(sanitized);

  if (!hasLetters || !hasNumbers) {
    return {
      isValid: false,
      error: 'Plate number must contain both letters and numbers',
    };
  }

  return {
    isValid: true,
    sanitizedValue: sanitized,
  };
}

/**
 * Validate MV File Number
 * Format: 1234567890 (10-12 digits)
 */
export function validateMVFileNumber(value: string): ValidationResult {
  const sanitized = value.replace(/[^0-9]/g, '');

  if (!sanitized) {
    return {
      isValid: false,
      error: 'MV File Number cannot be empty',
    };
  }

  if (sanitized.length < 10 || sanitized.length > 12) {
    return {
      isValid: false,
      error: 'MV File Number must be 10-12 digits',
    };
  }

  return {
    isValid: true,
    sanitizedValue: sanitized,
  };
}

/**
 * Validate Driver's License Number
 * Format: N12-34-567890 or similar variations
 */
export function validateLicenseNumber(value: string): ValidationResult {
  const sanitized = value.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (!sanitized) {
    return {
      isValid: false,
      error: 'License number cannot be empty',
    };
  }

  if (sanitized.length < 11 || sanitized.length > 13) {
    return {
      isValid: false,
      error: 'License number must be 11-13 characters',
    };
  }

  // Should start with a letter
  if (!/^[A-Z]/.test(sanitized)) {
    return {
      isValid: false,
      error: 'License number should start with a letter (e.g., N01-23-456789)',
    };
  }

  return {
    isValid: true,
    sanitizedValue: sanitized,
  };
}

/**
 * Main validation function that routes to specific validators
 */
export function validateSearchInput(
  type: SearchType,
  value: string
): ValidationResult {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return {
      isValid: false,
      error: 'Please enter a value to search',
    };
  }

  switch (type) {
    case 'plate':
      return validatePlateNumber(trimmedValue);
    case 'mv-file':
      return validateMVFileNumber(trimmedValue);
    case 'license':
      return validateLicenseNumber(trimmedValue);
    default:
      return {
        isValid: false,
        error: 'Invalid search type',
      };
  }
}

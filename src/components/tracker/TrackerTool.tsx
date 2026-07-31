'use client';

/**
 * TrackerTool - Main interactive LTO tracker component
 * Handles search input, validation, API calls, and state management.
 */

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ResultCard } from '@/components/tracker/ResultCard';
import {
  EmptyState,
  LoadingState,
  NoResultState,
} from '@/components/tracker/TrackerStates';
import { validateSearchInput } from '@/lib/validation';
import { searchTransaction, getExampleSearches } from '@/lib/search-service';
import { getSearchTypeLabel } from '@/lib/utils';
import type { SearchType, TransactionResult } from '@/types';

type ViewState =
  | { type: 'empty' }
  | { type: 'loading' }
  | { type: 'result'; data: TransactionResult }
  | { type: 'no-result'; searchValue: string }
  | { type: 'error'; message: string };

export function TrackerTool() {
  const [searchType, setSearchType] = useState<SearchType>('plate');
  const [inputValue, setInputValue] = useState('');
  const [viewState, setViewState] = useState<ViewState>({ type: 'empty' });
  const [validationError, setValidationError] = useState<string | null>(null);

  const examples = getExampleSearches();

  const handleSearch = async () => {
    // Clear previous validation error
    setValidationError(null);

    // Validate input
    const validation = validateSearchInput(searchType, inputValue);
    if (!validation.isValid) {
      setValidationError(validation.error || 'Invalid input');
      return;
    }

    // Start search
    setViewState({ type: 'loading' });

    try {
      const result = await searchTransaction(
        searchType,
        validation.sanitizedValue!
      );

      if (result) {
        setViewState({ type: 'result', data: result });
      } else {
        setViewState({
          type: 'no-result',
          searchValue: validation.sanitizedValue!,
        });
      }
    } catch (error) {
      setViewState({
        type: 'error',
        message: 'An error occurred while searching. Please try again.',
      });
      console.error('Search error:', error);
    }
  };

  const handleReset = () => {
    setInputValue('');
    setValidationError(null);
    setViewState({ type: 'empty' });
  };

  const handleTryExample = () => {
    const exampleValue = examples[searchType];
    setInputValue(exampleValue);
    setValidationError(null);
  };

  return (
    <div className="space-y-8">
      {/* Search form */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-medium p-6 sm:p-8">
        <div className="space-y-6">
          {/* Search type selector */}
          <div>
            <label
              htmlFor="search-type"
              className="block text-sm font-semibold text-neutral-700 mb-3"
            >
              What do you want to search?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['plate', 'mv-file', 'license'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    setSearchType(type);
                    setValidationError(null);
                  }}
                  className={`
                    px-4 py-3 rounded-xl border-2 font-medium text-sm
                    transition-all duration-200
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300
                    ${
                      searchType === type
                        ? 'bg-primary-600 text-white border-primary-600 shadow-soft'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                    }
                  `}
                  aria-pressed={searchType === type}
                >
                  {getSearchTypeLabel(type)}
                </button>
              ))}
            </div>
          </div>

          {/* Input field */}
          <div>
            <label
              htmlFor="search-input"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Enter your {getSearchTypeLabel(searchType).toLowerCase()}
            </label>
            <input
              id="search-input"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setValidationError(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              placeholder={getPlaceholder(searchType)}
              className={`
                w-full px-4 py-3 text-base rounded-xl border-2
                transition-colors duration-200
                focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300
                ${
                  validationError
                    ? 'border-error-500 bg-error-50'
                    : 'border-neutral-200 bg-white focus:border-primary-500'
                }
              `}
              aria-invalid={!!validationError}
              aria-describedby={
                validationError ? 'input-error' : 'input-hint'
              }
            />
            {validationError ? (
              <p
                id="input-error"
                className="mt-2 text-sm text-error-600 flex items-start gap-1"
                role="alert"
              >
                <span aria-hidden="true">⚠</span>
                <span>{validationError}</span>
              </p>
            ) : (
              <p id="input-hint" className="mt-2 text-sm text-neutral-500">
                Example: {examples[searchType]}
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleSearch}
              disabled={!inputValue.trim()}
              isLoading={viewState.type === 'loading'}
              className="flex-1 sm:flex-initial"
            >
              {viewState.type === 'loading' ? 'Checking...' : 'Check Status'}
            </Button>

            {viewState.type !== 'empty' && viewState.type !== 'loading' && (
              <Button
                variant="outline"
                onClick={handleReset}
                className="flex-1 sm:flex-initial"
              >
                New Search
              </Button>
            )}

            {viewState.type === 'empty' && (
              <Button
                variant="secondary"
                onClick={handleTryExample}
                className="flex-1 sm:flex-initial"
              >
                Try Example
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Results area */}
      <div>
        {viewState.type === 'empty' && <EmptyState />}
        {viewState.type === 'loading' && <LoadingState />}
        {viewState.type === 'result' && <ResultCard result={viewState.data} />}
        {viewState.type === 'no-result' && (
          <NoResultState searchValue={viewState.searchValue} />
        )}
        {viewState.type === 'error' && (
          <div className="bg-error-50 border border-error-200 rounded-xl p-6 text-center">
            <p className="text-error-700">{viewState.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Get placeholder text for the input based on search type
 */
function getPlaceholder(type: SearchType): string {
  const placeholders: Record<SearchType, string> = {
    plate: 'e.g., ABC1234',
    'mv-file': 'e.g., 1234567890',
    license: 'e.g., N01-23-456789',
  };
  return placeholders[type];
}

'use client';

/**
 * FAQ - Accessible accordion of frequently asked questions
 */

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import faqsData from '@/data/faqs.json';
import type { FAQItem } from '@/types';

const faqs = faqsData.faqs as FAQItem[];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-neutral-50" aria-labelledby="faq-heading">
      <Container size="narrow">
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-neutral-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-neutral-600">
            Answers to common questions about the LTO Tracker and LTO services.
          </p>
        </div>

        <dl className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-neutral-200 shadow-soft overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300 rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-base sm:text-lg font-semibold text-neutral-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`flex-shrink-0 w-6 h-6 text-primary-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-base text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}

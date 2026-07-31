/**
 * TrackerExplanation - Short "how it works" section below the tool
 */

import { Container } from '@/components/ui/Container';

const steps = [
  {
    icon: '1',
    title: 'Choose your search type',
    description:
      'Select whether you want to search by plate number, MV file number, or driver\'s license number.',
  },
  {
    icon: '2',
    title: 'Enter your details',
    description:
      'Type your number exactly as it appears on your document. We validate it before searching.',
  },
  {
    icon: '3',
    title: 'Understand your status',
    description:
      'Get a clear explanation of your status, a progress timeline, and the recommended next step.',
  },
];

export function TrackerExplanation() {
  return (
    <section
      className="py-16 sm:py-20 bg-neutral-50"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className="text-center mb-12">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-bold text-neutral-900"
          >
            How the LTO Tracker Works
          </h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            A simple, three-step guide to checking and understanding your LTO
            transaction status.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <li key={step.icon} className="text-center">
              <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white text-2xl font-bold">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

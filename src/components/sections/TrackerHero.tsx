/**
 * TrackerHero - Hero section for the LTO tracker page
 */

import { Container } from '@/components/ui/Container';

export function TrackerHero() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 to-primary-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            LTO Tracker
          </h1>
          <p className="text-xl sm:text-2xl text-primary-50 mb-6">
            Check your vehicle registration, driver's license, or MV file status
            and understand your next steps.
          </p>
          <p className="text-base text-primary-100">
            Free guidance tool to help you navigate LTO transactions with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}

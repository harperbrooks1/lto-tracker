import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';

/**
 * Custom 404 page
 */
export default function NotFound() {
  return (
    <Container>
      <div className="py-24 text-center max-w-lg mx-auto">
        <p className="text-6xl font-bold text-primary-600 mb-4">404</p>
        <h1 className="text-3xl font-bold text-neutral-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-lg text-neutral-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <LinkButton href="/">Back to Home</LinkButton>
          <LinkButton href="/lto-tracker" variant="outline">
            Open LTO Tracker
          </LinkButton>
        </div>
      </div>
    </Container>
  );
}

/**
 * JsonLd - Injects structured data (schema.org) into the page.
 * Rendered server-side for optimal SEO with no client JS cost.
 */

interface JsonLdProps {
  // Accepts one or more schema objects
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          // Structured data is trusted, generated content (no user input)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

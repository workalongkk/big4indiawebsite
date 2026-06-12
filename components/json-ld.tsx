/**
 * Server-rendered JSON-LD. Emitted directly into the DOM so search engines
 * and AI answer engines can read structured data without executing JS.
 * Content is our own static data (never user input), so the raw injection is safe.
 */
export function JsonLd({
  id,
  data,
}: {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

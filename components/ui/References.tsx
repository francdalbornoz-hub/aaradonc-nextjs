// ─── Scientific references (visible citations) ───────────────────────────────
// Rendered at the bottom of condition pages. Every clinical claim on a page
// should trace to one of these peer-reviewed sources. Also emits ScholarlyArticle
// JSON-LD so AI answer engines (GEO) and search can see the page is sourced.

export interface Reference {
  /** Author list, e.g. "Mayer MN, et al." */
  authors: string
  /** Publication year, e.g. "2019" */
  year: string
  /** Full article title (no trailing period — added by the renderer) */
  title: string
  /** Journal + volume/pages, e.g. "J Am Vet Med Assoc. 254(5):602" */
  source: string
}

interface ReferencesProps {
  items: Reference[]
}

export default function References({ items }: ReferencesProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ScholarlyArticle',
        name: r.title,
        headline: r.title,
        datePublished: r.year,
        publication: r.source,
      },
    })),
  }

  return (
    <section className="seccion" aria-labelledby="refs-heading">
      <div className="contenedor">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="eyebrow">References</div>
        <h2 id="refs-heading" className="titulo-seccion" style={{ fontSize: 28, marginBottom: 12 }}>
          Scientific <em>references.</em>
        </h2>
        <p className="bajada" style={{ marginBottom: 28, maxWidth: 720 }}>
          The clinical information on this page is grounded in peer-reviewed veterinary radiation
          oncology literature.
        </p>
        <ol style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 12, maxWidth: 900 }}>
          {items.map((r, i) => (
            <li key={i} style={{ fontSize: 14, lineHeight: 1.6, color: '#4b5563' }}>
              {r.authors} ({r.year}). {r.title}. <em>{r.source}.</em>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

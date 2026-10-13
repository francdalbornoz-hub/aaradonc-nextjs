// ─── Internationalization (EN default at root · ES mirrored under /es/) ───────
//
// Static export can't use Next's built-in `i18n` config, so routing is manual:
// English pages stay at the root (untouched — they're already being advertised),
// Spanish pages live under /es/ with translated, SEO-friendly slugs.
//
// This file is the SINGLE SOURCE OF TRUTH for the EN↔ES URL pairing. It powers:
//   • the language switcher (jump to the counterpart URL)
//   • hreflang alternates in metadata (bidirectional en-US ↔ es-US + x-default)
//   • the sitemap (both languages)
//   • the bilingual nav (Spanish hrefs)
//
// To change a Spanish slug, change it HERE only.

export type Lang = 'en' | 'es'

/**
 * Master switch for the Spanish (/es) version on the PUBLIC site.
 * false = deactivated: language switchers hidden, no hreflang/sitemap for ES,
 * and /es is redirected away at the server (see public/.htaccess).
 * The /es pages stay in the repo and still work in local `next dev` so we can
 * keep translating. To RE-ENABLE: set this to true AND remove the /es redirect
 * block in public/.htaccess.
 */
export const ES_ENABLED = false

/**
 * EN route (path without trailing slash, '/' for home) → ES slug (the segment
 * that goes AFTER /es, no leading/trailing slash; '' for the ES home).
 * Slugs are translated for Spanish SEO + Google Ads relevance.
 */
export const EN_TO_ES_SLUG: Record<string, string> = {
  '/': '',

  // Core
  '/radiation-therapy': 'radioterapia',
  '/for-veterinarians': 'para-veterinarios',
  '/radiation-oncologist': 'oncologo-radioterapeuta',
  '/pet-cancer': 'cancer-en-mascotas',
  '/dog-cancer': 'cancer-en-perros',
  '/cat-cancer': 'cancer-en-gatos',

  // Contact
  '/contact': 'contacto',
  '/contact-pet-owners': 'contacto-familias',
  '/contact-referrers': 'contacto-veterinarios',

  // Brain & nervous system
  '/brain-tumors': 'tumores-cerebrales',
  '/meningioma': 'meningioma',
  '/glioma': 'glioma',
  '/pituitary-tumors': 'tumores-de-hipofisis',
  '/spinal-tumors': 'tumores-espinales',

  // Nasal & sinus
  '/nasal-tumors': 'tumores-nasales',
  '/nasal-carcinoma': 'carcinoma-nasal',

  // Oral & head/neck
  '/oral-tumors': 'tumores-orales',
  '/oral-melanoma': 'melanoma-oral',
  '/oral-squamous-cell-carcinoma': 'carcinoma-de-celulas-escamosas-oral',
  '/fibrosarcoma': 'fibrosarcoma',

  // Cardiac
  '/heart-base-tumors': 'tumores-de-base-cardiaca',

  // Skin & soft tissue
  '/soft-tissue-sarcomas': 'sarcomas-de-tejidos-blandos',
  '/mast-cell-tumors': 'mastocitomas',
  '/vaccine-associated-sarcoma': 'sarcoma-asociado-al-punto-de-inyeccion',

  // Bone
  '/osteosarcoma': 'osteosarcoma',

  // Lymphoma / hematopoietic
  '/lymphoma': 'linfoma',

  // Abdominal & other
  '/bladder-cancer': 'cancer-de-vejiga',
  '/anal-sac-carcinoma': 'carcinoma-de-sacos-anales',
}

/** ES full path (e.g. '/es/cancer-en-perros') → EN route (e.g. '/dog-cancer'). */
export const ES_PATH_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_ES_SLUG).map(([en, es]) => [es ? `/es/${es}` : '/es', en])
)

/** EN route → ES full path (with /es prefix, no trailing slash). */
export function esPath(enRoute: string): string {
  const slug = EN_TO_ES_SLUG[enRoute]
  if (slug === undefined) return `/es${enRoute}` // fallback: keep same slug under /es
  return slug ? `/es/${slug}` : '/es'
}

/** Detect language from any pathname. */
export function langFromPath(pathname: string): Lang {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en'
}

/**
 * Given the current pathname, return its counterpart URL in the other language.
 * Used by the language switcher. Falls back to the language home if unmapped.
 */
export function counterpartPath(pathname: string): string {
  const clean = pathname.replace(/\/$/, '') || '/'
  if (langFromPath(clean) === 'es') {
    return ES_PATH_TO_EN[clean] ?? '/'
  }
  return esPath(clean)
}

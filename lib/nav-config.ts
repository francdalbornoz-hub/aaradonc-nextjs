/**
 * AARADONC — Navigation Configuration
 *
 * Source of truth for all menu items, dropdown links, and mega-menu structure.
 * URLs are consistent with seo-config.ts.
 *
 * Rendering rules:
 *   href present + hasOwnPage: true  → blue Link, hover animation
 *   href present + hasOwnPage: false → lighter Link pointing to parent (sub that shares parent page)
 *   href absent                       → static <span>, grey, no hover, no animation
 *   isSub: true                       → visually indented (sub-tumor of a parent)
 */

import { esPath as esPathFn, type Lang } from './i18n'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavDropdownEntry {
  label: string
  href?: string
  tag?: string
  featured?: boolean
}

export interface MegaMenuItem {
  label: string
  /** Absent = no page exists → renders as static grey text, no link */
  href?: string
  /** Has its own dedicated page: primary color & full hover */
  hasOwnPage: boolean
  /** Visually indented sub-tumor */
  isSub?: boolean
  /** Decorative badge */
  tag?: string
}

export interface MegaMenuGroup {
  category: string
  items: MegaMenuItem[]
}

export interface MegaMenuColumn {
  groups: MegaMenuGroup[]
}

export interface NavItem {
  label: string
  href?: string
  variant?: 'vet'
  dropdown?: NavDropdownEntry[]
  megaMenu?: MegaMenuColumn[]
}

// ─── Radiation Therapy dropdown ───────────────────────────────────────────────

const RT_DROPDOWN: NavDropdownEntry[] = [
  { label: 'Overview' },
  { label: 'What Is Radiation Therapy', href: '/radiation-therapy#what-is' },
  { label: 'Our Technology', href: '/radiation-therapy#our-technology' },
  { label: 'Treatment Intent', href: '/radiation-therapy#treatment-intent' },
  { label: 'Protocols' },
  { label: 'CFRT', href: '/radiation-therapy#cfrt', tag: 'Curative' },
  { label: 'SRS / SRT', href: '/radiation-therapy#srs-srt', tag: '★ Stereotactic', featured: true },
  { label: 'Palliative Radiation', href: '/radiation-therapy#palliative', tag: 'QoL' },
  { label: 'More' },
  { label: 'Conditions We Treat', href: '/radiation-therapy#conditions' },
  { label: 'The Process', href: '/radiation-therapy#process' },
  { label: 'Who We Help', href: '/radiation-therapy#pet-owners' },
  { label: 'FAQ', href: '/radiation-therapy#faq' },
]

// ─── Pet Cancer dropdown ──────────────────────────────────────────────────────

const PET_CANCER_DROPDOWN: NavDropdownEntry[] = [
  { label: 'By Species' },
  { label: 'Dog Cancer', href: '/dog-cancer', featured: true },
  { label: 'Cat Cancer', href: '/cat-cancer', featured: true },
]

// ─── Contact dropdown ─────────────────────────────────────────────────────────

const CONTACT_DROPDOWN: NavDropdownEntry[] = [
  { label: 'For Pet Families', href: '/contact-pet-owners', featured: true },
  { label: 'For Veterinarians', href: '/contact-referrers', featured: true },
]

// ─── Conditions mega-menu ─────────────────────────────────────────────────────
// Ordered per Lionel's request.
// Items without href = no page yet → render as static grey text (no link, no animation).

export const CONDITIONS_MEGA_MENU: MegaMenuColumn[] = [
  // ── Column 1: Brain & Nervous System + Nasal & Sinus ─────────────────────
  {
    groups: [
      {
        category: 'Brain & Nervous System',
        items: [
          { label: 'Brain Tumors',       href: '/brain-tumors',      hasOwnPage: true },
          { label: 'Meningioma',         href: '/meningioma',        hasOwnPage: true,  isSub: true },
          { label: 'Glioma',             href: '/glioma',            hasOwnPage: true,  isSub: true },
          { label: 'Pituitary Tumors',   href: '/pituitary-tumors',  hasOwnPage: true,  isSub: true },
          { label: 'Brain Stem Tumors',                              hasOwnPage: false, isSub: true },
          { label: 'Ependymoma',                                     hasOwnPage: false, isSub: true },
          { label: 'Spinal Tumors',      href: '/spinal-tumors',  hasOwnPage: true },
        ],
      },
      {
        category: 'Nasal & Sinus',
        items: [
          { label: 'Nasal Tumors',       href: '/nasal-tumors',   hasOwnPage: true },
          { label: 'Nasal Carcinoma',    href: '/nasal-carcinoma',hasOwnPage: true,  isSub: true },
          { label: 'Nasal SCC',                                    hasOwnPage: false, isSub: true },
        ],
      },
    ],
  },

  // ── Column 2: Oral & Head / Neck + Cardiac ───────────────────────────────
  {
    groups: [
      {
        category: 'Oral & Head / Neck',
        items: [
          { label: 'Oral Tumors',            href: '/oral-tumors',    hasOwnPage: true },
          { label: 'Oral Melanoma',          href: '/oral-melanoma',                   hasOwnPage: true,  isSub: true },
          { label: 'Oral SCC',               href: '/oral-squamous-cell-carcinoma',    hasOwnPage: true,  isSub: true },
          { label: 'Acanthomatous Epulis',                                             hasOwnPage: false, isSub: true },
          { label: 'Fibrosarcoma',           href: '/fibrosarcoma',                    hasOwnPage: true,  isSub: true },
          { label: 'Ear Canal Tumors',                                hasOwnPage: false, isSub: true },
          { label: 'Salivary Gland Tumors',                           hasOwnPage: false, isSub: true },
          { label: 'Thyroid Tumors',                                  hasOwnPage: false, isSub: true },
        ],
      },
      {
        category: 'Cardiac',
        items: [
          { label: 'Heart Base Tumors',      href: '/heart-base-tumors', hasOwnPage: true },
          { label: 'Chemodectoma',                                        hasOwnPage: false, isSub: true },
          { label: 'Cardiac Hemangiosarcoma',                             hasOwnPage: false, isSub: true },
          { label: 'Atrial Tumor',                                        hasOwnPage: false, isSub: true },
        ],
      },
    ],
  },

  // ── Column 3: Skin & Soft Tissue + Bone ──────────────────────────────────
  {
    groups: [
      {
        category: 'Skin & Soft Tissue',
        items: [
          { label: 'Soft Tissue Sarcomas',      href: '/soft-tissue-sarcomas',       hasOwnPage: true },
          { label: 'Mast Cell Tumors',           href: '/mast-cell-tumors',           hasOwnPage: true,  isSub: true },
          { label: 'Vaccine-Associated Sarcoma', href: '/vaccine-associated-sarcoma', hasOwnPage: true,  isSub: true },
          { label: 'Hemangiopericytoma',                                               hasOwnPage: false, isSub: true },
          { label: 'Infiltrative Lipoma',                                              hasOwnPage: false, isSub: true },
          { label: 'Spindle Cell Tumor',                                               hasOwnPage: false, isSub: true },
        ],
      },
      {
        category: 'Bone',
        items: [
          { label: 'Osteosarcoma',          href: '/osteosarcoma', hasOwnPage: true },
          { label: 'Chondrosarcoma',                               hasOwnPage: false, isSub: true },
          { label: 'Metastatic Bone Cancer',                       hasOwnPage: false, isSub: true },
        ],
      },
    ],
  },

  // ── Column 4: Abdominal & Other + Lymphoma / Hematopoietic ───────────────
  {
    groups: [
      {
        category: 'Abdominal & Other',
        items: [
          { label: 'Bladder Cancer',              href: '/bladder-cancer',     hasOwnPage: true },
          { label: 'Anal Sac Carcinoma',          href: '/anal-sac-carcinoma', hasOwnPage: true },
        ],
      },
      {
        category: 'Lymphoma / Hematopoietic',
        items: [
          { label: 'Lymphoma',                    href: '/lymphoma',           hasOwnPage: true },
          { label: 'Cutaneous Lymphoma',                                       hasOwnPage: false, isSub: true },
          { label: 'CNS Lymphoma',                                             hasOwnPage: false, isSub: true },
          { label: 'Spinal Lymphoma',                                          hasOwnPage: false, isSub: true },
          { label: 'Mediastinal Lymphoma',                                     hasOwnPage: false, isSub: true },
          { label: 'Alimentary / GI Lymphoma',                                 hasOwnPage: false, isSub: true },
          { label: 'Multicentric',                                             hasOwnPage: false, isSub: true },
        ],
      },
    ],
  },
]

// ─── Main nav ─────────────────────────────────────────────────────────────────

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Radiation Therapy', href: '/radiation-therapy', dropdown: RT_DROPDOWN },
  { label: 'For Veterinarians', href: '/for-veterinarians', variant: 'vet' },
  { label: 'Our Radiation Oncologist', href: '/radiation-oncologist' },
  { label: 'Pet Cancer', href: '/pet-cancer', dropdown: PET_CANCER_DROPDOWN },
  { label: 'Conditions We Treat', megaMenu: CONDITIONS_MEGA_MENU },
  { label: 'Contact', href: '/contact-pet-owners', dropdown: CONTACT_DROPDOWN },
]

// ─── Contact info ─────────────────────────────────────────────────────────────

export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? '(561) 557-2565',
  phoneHref: `tel:${(process.env.NEXT_PUBLIC_PHONE ?? '5615572565').replace(/\D/g, '')}`,
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'info@aaradonc.com',
  // Full NAP address — must stay identical across header, footer, Contact pages, and schema.
  address: '12993 Southern Blvd, Suite A · Loxahatchee, FL 33470',
  // Google Business / Maps profile (opened in a new tab from any address element).
  mapsUrl: 'https://maps.app.goo.gl/cjkQDyYLqLpjTadv5',
  // Social
  instagram: 'https://www.instagram.com/aaradonc/',
  hours: 'Mon–Thu 8:00 AM – 5:00 PM',
} as const

// ═══════════════════════════════════════════════════════════════════════════
// SPANISH (ES) NAV — built programmatically from the EN structure above.
// Labels are translated via a dictionary; hrefs are rewritten through the slug
// map (lib/i18n). This keeps the mega-menu defined once. English exports above
// stay untouched so the live English site is unaffected.
// ═══════════════════════════════════════════════════════════════════════════

// EN label / category / tag  →  ES.
const ES_LABELS: Record<string, string> = {
  // Main nav
  'Home': 'Inicio',
  'Radiation Therapy': 'Radioterapia',
  'For Veterinarians': 'Para veterinarios',
  'Our Radiation Oncologist': 'Nuestra radiooncóloga',
  'Pet Cancer': 'Cáncer en mascotas',
  'Conditions We Treat': 'Tumores que tratamos',
  'Contact': 'Contacto',
  // RT dropdown
  'Overview': 'Información general',
  'What Is Radiation Therapy': 'Qué es la radioterapia',
  'Our Technology': 'Nuestra tecnología',
  'Treatment Intent': 'Intención del tratamiento',
  'Protocols': 'Protocolos',
  'Palliative Radiation': 'Radioterapia paliativa',
  'More': 'Más',
  'The Process': 'Cómo es el tratamiento',
  'Who We Help': 'A quién ayudamos',
  'FAQ': 'Preguntas frecuentes',
  // Tags
  'Curative': 'Con intención curativa',
  '★ Stereotactic': '★ Estereotáctica',
  'QoL': 'Calidad de vida',
  // Pet Cancer dropdown
  'By Species': 'Por especie',
  'Dog Cancer': 'Cáncer en perros',
  'Cat Cancer': 'Cáncer en gatos',
  // Contact dropdown
  'For Pet Families': 'Para familias',
  // Mega-menu categories
  'Brain & Nervous System': 'Cerebro y sistema nervioso',
  'Nasal & Sinus': 'Nariz y senos paranasales',
  'Oral & Head / Neck': 'Boca, cabeza y cuello',
  'Cardiac': 'Corazón',
  'Skin & Soft Tissue': 'Piel y tejidos blandos',
  'Bone': 'Huesos',
  'Abdominal & Other': 'Abdomen y otros',
  'Lymphoma / Hematopoietic': 'Linfoma y tumores hematopoyéticos',
  // Mega-menu items
  'Brain Tumors': 'Tumores cerebrales',
  'Pituitary Tumors': 'Tumores de hipófisis',
  'Brain Stem Tumors': 'Tumores del tronco encefálico',
  'Ependymoma': 'Ependimoma',
  'Spinal Tumors': 'Tumores espinales',
  'Nasal Tumors': 'Tumores nasales',
  'Nasal Carcinoma': 'Carcinoma nasal',
  'Nasal SCC': 'Carcinoma de células escamosas nasal',
  'Oral Tumors': 'Tumores orales',
  'Oral Melanoma': 'Melanoma oral',
  'Oral SCC': 'Carcinoma de células escamosas oral',
  'Acanthomatous Epulis': 'Épulis acantomatoso',
  'Ear Canal Tumors': 'Tumores del conducto auditivo',
  'Salivary Gland Tumors': 'Tumores de las glándulas salivales',
  'Thyroid Tumors': 'Tumores de tiroides',
  'Heart Base Tumors': 'Tumores de la base del corazón',
  'Chemodectoma': 'Quimiodectoma',
  'Cardiac Hemangiosarcoma': 'Hemangiosarcoma cardíaco',
  'Atrial Tumor': 'Tumor auricular',
  'Soft Tissue Sarcomas': 'Sarcomas de tejidos blandos',
  'Mast Cell Tumors': 'Mastocitomas',
  'Vaccine-Associated Sarcoma': 'Sarcoma asociado al punto de inyección',
  'Hemangiopericytoma': 'Hemangiopericitoma',
  'Infiltrative Lipoma': 'Lipoma infiltrativo',
  'Spindle Cell Tumor': 'Tumor de células fusiformes',
  'Osteosarcoma': 'Osteosarcoma',
  'Chondrosarcoma': 'Condrosarcoma',
  'Metastatic Bone Cancer': 'Cáncer óseo metastásico',
  'Bladder Cancer': 'Cáncer de vejiga',
  'Anal Sac Carcinoma': 'Carcinoma de sacos anales',
  'Lymphoma': 'Linfoma',
  'Cutaneous Lymphoma': 'Linfoma cutáneo',
  'CNS Lymphoma': 'Linfoma del sistema nervioso central',
  'Spinal Lymphoma': 'Linfoma espinal',
  'Mediastinal Lymphoma': 'Linfoma mediastínico',
  'Alimentary / GI Lymphoma': 'Linfoma digestivo',
  'Multicentric': 'Linfoma multicéntrico',
  // Items that keep the same word in ES (listed for completeness / no-op):
  // Meningioma, Glioma, Fibrosarcoma
}

function tl(label: string): string {
  return ES_LABELS[label] ?? label
}

function localizeHref(href: string | undefined): string | undefined {
  if (!href) return href
  const [base, hash] = href.split('#')
  const clean = base === '/' ? '/' : base.replace(/\/$/, '')
  const mapped = esPathFn(clean)
  return hash ? `${mapped}#${hash}` : mapped
}

function localizeDropdown(items: NavDropdownEntry[]): NavDropdownEntry[] {
  return items.map((it) => ({
    ...it,
    label: tl(it.label),
    href: localizeHref(it.href),
    tag: it.tag ? tl(it.tag) : undefined,
  }))
}

function localizeMega(menu: MegaMenuColumn[]): MegaMenuColumn[] {
  return menu.map((col) => ({
    groups: col.groups.map((g) => ({
      category: tl(g.category),
      items: g.items.map((it) => ({
        ...it,
        label: tl(it.label),
        href: localizeHref(it.href),
        tag: it.tag ? tl(it.tag) : undefined,
      })),
    })),
  }))
}

export const MAIN_NAV_ES: NavItem[] = MAIN_NAV.map((item) => ({
  ...item,
  label: tl(item.label),
  href: localizeHref(item.href),
  dropdown: item.dropdown ? localizeDropdown(item.dropdown) : undefined,
  megaMenu: item.megaMenu ? localizeMega(item.megaMenu) : undefined,
}))

export const CONTACT_INFO_ES = {
  ...CONTACT_INFO,
  hours: 'Lunes a jueves, 8:00 a. m. a 5:00 p. m.',
} as const

/** Return the nav for a language. */
export function getMainNav(lang: Lang): NavItem[] {
  return lang === 'es' ? MAIN_NAV_ES : MAIN_NAV
}

/** Return contact info (localized hours) for a language. */
export function getContactInfo(lang: Lang) {
  return lang === 'es' ? CONTACT_INFO_ES : CONTACT_INFO
}

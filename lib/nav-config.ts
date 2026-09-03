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
  { label: 'SRS / SRT', href: '/radiation-therapy#srs-srt', tag: '★ Precision', featured: true },
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

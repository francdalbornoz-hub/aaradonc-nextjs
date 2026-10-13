/**
 * AARADONC — Centralized SEO Configuration
 *
 * Single source of truth for:
 *  - <title> and <meta name="description">
 *  - Open Graph metadata (og:title, og:description, og:image, og:url, og:type)
 *  - Canonical URLs
 *  - Schema.org markup data (LocalBusiness, MedicalCondition, FAQPage, BreadcrumbList)
 *  - Sitemap priority and changefreq
 *
 * Usage:
 *   import { getPageSeo } from '@/lib/seo-config'
 *   const seo = getPageSeo('/brain-tumors')
 *
 * All titles extracted from source-content/*.txt files — not generated.
 */

import { esPath, ES_ENABLED } from './i18n'

// ─── Environment ──────────────────────────────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aaradonc.com'
const SITE_NAME = 'Animal Alliance Radiation Oncology'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg` // TODO: provide actual OG image

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PageSeo {
  /** <title> tag value */
  title: string
  /** <meta name="description"> */
  description: string
  /** Absolute canonical URL */
  canonical: string
  /** Open Graph */
  og: {
    title: string
    description: string
    image: string
    url: string
    type: 'website' | 'article'
  }
  /** Sitemap hints */
  sitemap: {
    priority: number
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  }
  /** Schema.org type(s) to render on this page */
  schema: PageSchemaConfig
}

export interface PageSchemaConfig {
  /** Include LocalBusiness / VeterinaryCare block */
  localBusiness?: boolean
  /** MedicalCondition schema — condition pages only */
  medicalCondition?: MedicalConditionSchema
  /** FAQPage schema — include when page has FAQ accordion */
  faqPage?: boolean
  /** BreadcrumbList — all internal pages (not home) */
  breadcrumbs?: BreadcrumbItem[]
}

export interface MedicalConditionSchema {
  name: string
  alternateName?: string
  /** Maps to Schema.org MedicalCondition.associatedAnatomy */
  bodyLocation?: string
  /** Brief plain-text description for schema (not shown to user) */
  description: string
}

export interface BreadcrumbItem {
  name: string
  href: string
}

// ─── Organization data (shared across schema blocks) ─────────────────────────

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: 'Animal Alliance Radiation Oncology',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`, // TODO: add actual logo path
  // NAP — kept identical to CONTACT_INFO (header/footer/Contact pages) per the consistency rule.
  telephone: process.env.NEXT_PUBLIC_PHONE ?? '(561) 557-2565',
  address: {
    streetAddress: process.env.NEXT_PUBLIC_ADDRESS_STREET ?? '12993 Southern Blvd, Suite A',
    addressLocality: process.env.NEXT_PUBLIC_ADDRESS_CITY ?? 'Loxahatchee',
    addressRegion: 'FL',
    postalCode: process.env.NEXT_PUBLIC_ADDRESS_ZIP ?? '33470',
    addressCountry: 'US',
  },
  geo: {
    latitude: process.env.NEXT_PUBLIC_GEO_LAT ?? '26.6826731',
    longitude: process.env.NEXT_PUBLIC_GEO_LNG ?? '-80.2507762',
  },
  openingHours: process.env.NEXT_PUBLIC_HOURS ?? 'Mo-Th 08:00-17:00',
  sameAs: [
    'https://www.instagram.com/aaradonc/',
    'https://maps.app.goo.gl/cjkQDyYLqLpjTadv5',
  ] as string[],
} as const

// ─── Raw page data ────────────────────────────────────────────────────────────
// H1 texts sourced from source-content/*.txt files (Elementor exports).
// Meta descriptions are concise summaries of the H1 + page intent.
// Descriptions < 160 characters.

type RawPageData = Omit<PageSeo, 'canonical' | 'og'> & {
  /** og:image override — if omitted, DEFAULT_OG_IMAGE is used */
  ogImage?: string
}

const RAW_PAGES: Record<string, RawPageData> = {

  // ── Main pages ──────────────────────────────────────────────────────────────

  '/': {
    title: `Radiation Therapy for Dogs and Cats in Florida | ${SITE_NAME}`,
    description:
      'The only center 100% dedicated to Radiation Oncology in Florida. Board Certified Radiation Oncologist ON SITE. Advanced technology. Prompt response. Always.',
    sitemap: { priority: 1.0, changefreq: 'weekly' },
    schema: { localBusiness: true },
  },

  '/radiation-therapy': {
    title: `Veterinary Radiation Therapy — Protocols & Technology | ${SITE_NAME}`,
    description:
      'Conformal Radiation Therapy, SRS/SRT, and Palliative protocols. Delivered with Varian TrueBeam technology by a Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.9, changefreq: 'monthly' },
    schema: { localBusiness: true, faqPage: true },
  },

  '/for-veterinarians': {
    title: `Refer a Patient — Veterinary Radiation Oncology | ${SITE_NAME}`,
    description:
      'Refer a patient simply and fast. We respond promptly. Always. Board Certified Radiation Oncologist ON SITE. No overlap — we return every patient to your care.',
    sitemap: { priority: 0.9, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'For Veterinarians', href: '/for-veterinarians' },
      ],
    },
  },

  '/radiation-oncologist': {
    title: `Board Certified Veterinary Radiation Oncologist ON SITE | ${SITE_NAME}`,
    description:
      'Meet Dr. Lisa DiBernardi — Board Certified Radiation Oncologist ON SITE. Every treatment plan reviewed and designed personally for each patient.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Our Radiation Oncologist', href: '/radiation-oncologist' },
      ],
    },
  },

  '/pet-cancer': {
    title: `Pet Cancer — Radiation Therapy for Dogs & Cats | ${SITE_NAME}`,
    description:
      'Radiation therapy for pet cancer in Florida. Personalized plans for dogs and cats. Board Certified Radiation Oncologist ON SITE. Outpatient treatment.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Pet Cancer', href: '/pet-cancer' },
      ],
    },
  },

  '/dog-cancer': {
    title: `Dog Cancer Treatment — Radiation Therapy in Florida | ${SITE_NAME}`,
    description:
      'Dog cancer treatment in Florida — built around radiation. The only center 100% dedicated to Radiation Oncology. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Pet Cancer', href: '/pet-cancer' },
        { name: 'Dog Cancer', href: '/dog-cancer' },
      ],
    },
  },

  '/cat-cancer': {
    title: `Cat Cancer Treatment — Radiation Therapy in Florida | ${SITE_NAME}`,
    description:
      'Cat cancer treatment in Florida with veterinary radiation therapy for cats by a Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Pet Cancer', href: '/pet-cancer' },
        { name: 'Cat Cancer', href: '/cat-cancer' },
      ],
    },
  },

  '/contact-pet-owners': {
    title: `Contact — Request a Consultation | ${SITE_NAME}`,
    description:
      "Request a consultation for your pet. We respond promptly. Always. Florida's only center 100% dedicated to Radiation Oncology.",
    sitemap: { priority: 0.7, changefreq: 'yearly' },
    schema: {
      localBusiness: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/contact-pet-owners' },
      ],
    },
  },

  '/contact-referrers': {
    title: `Refer a Patient — Contact for Veterinarians | ${SITE_NAME}`,
    description:
      "Refer a patient to Florida's only center 100% dedicated to Radiation Oncology. Simple and fast. Board Certified Radiation Oncologist ON SITE. Promptly. Always.",
    sitemap: { priority: 0.7, changefreq: 'yearly' },
    schema: {
      localBusiness: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'For Veterinarians', href: '/for-veterinarians' },
        { name: 'Refer a Patient', href: '/contact-referrers' },
      ],
    },
  },

  // ── Brain & Nervous System ──────────────────────────────────────────────────

  '/brain-tumors': {
    title: `Brain Tumor Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      'Brain tumor radiation therapy for dogs and cats in Florida. Image-guided treatment with Varian TrueBeam. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Brain Tumors in Dogs and Cats',
        alternateName: 'Intracranial Neoplasia',
        bodyLocation: 'Brain',
        description:
          'Brain tumors in dogs and cats are intracranial neoplasms treated with radiation therapy, including conformal radiation, SRS, and SRT protocols.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Brain Tumors', href: '/brain-tumors' },
      ],
    },
  },

  '/meningioma': {
    title: `Radiation Therapy for Meningiomas in Dogs and Cats | ${SITE_NAME}`,
    description:
      'Radiation therapy for meningiomas in dogs and cats. Advanced SRS/SRT and conformal protocols. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Meningioma in Dogs and Cats',
        bodyLocation: 'Meninges',
        description:
          'Meningioma is a common intracranial tumor in dogs and cats arising from the meninges, treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Brain Tumors', href: '/brain-tumors' },
        { name: 'Meningioma', href: '/meningioma' },
      ],
    },
  },

  '/glioma': {
    title: `Radiation Therapy for Gliomas in Dogs | ${SITE_NAME}`,
    description:
      'Radiation therapy for gliomas in dogs. Personalized conformal and SRS protocols. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Glioma in Dogs',
        bodyLocation: 'Brain',
        description: 'Gliomas are brain tumors originating from glial cells, treated with radiation therapy in dogs.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Brain Tumors', href: '/brain-tumors' },
        { name: 'Glioma', href: '/glioma' },
      ],
    },
  },

  '/pituitary-tumors': {
    title: `Radiation Therapy for Pituitary Tumors in Dogs and Cats | ${SITE_NAME}`,
    description:
      'Radiation therapy for pituitary tumors in dogs and cats. Precise image-guided treatment. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Pituitary Tumors in Dogs and Cats',
        bodyLocation: 'Pituitary Gland',
        description:
          'Pituitary tumors in dogs and cats are intracranial neoplasms treated with radiation therapy using SRS/SRT and conformal protocols.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Brain Tumors', href: '/brain-tumors' },
        { name: 'Pituitary Tumors', href: '/pituitary-tumors' },
      ],
    },
  },

  '/spinal-tumors': {
    title: `Spinal Tumor Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      'Spinal tumor radiation therapy for dogs and cats. Image-guided precision with Varian TrueBeam. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Spinal Tumors in Dogs and Cats',
        bodyLocation: 'Spine',
        description:
          'Spinal tumors in dogs and cats include primary and metastatic neoplasms affecting the spinal cord and vertebrae, treated with image-guided radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Brain Tumors', href: '/brain-tumors' },
        { name: 'Spinal Tumors', href: '/spinal-tumors' },
      ],
    },
  },

  // ── Nasal & Sinus ───────────────────────────────────────────────────────────

  '/nasal-tumors': {
    title: `Nasal Tumor Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      'Nasal tumor radiation therapy for dogs and cats in Florida. Advanced conformal and SRS protocols. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Nasal Tumors in Dogs and Cats',
        bodyLocation: 'Nasal Cavity',
        description:
          'Nasal tumors in dogs and cats are common head and neck neoplasms treated primarily with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Nasal Tumors', href: '/nasal-tumors' },
      ],
    },
  },

  '/nasal-carcinoma': {
    title: `Radiation Therapy for Nasal Carcinoma in Dogs | ${SITE_NAME}`,
    description:
      'Radiation therapy for nasal carcinoma in dogs. Precise image-guided treatment. The only center 100% dedicated to Radiation Oncology in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Nasal Carcinoma in Dogs',
        bodyLocation: 'Nasal Cavity',
        description: 'Nasal carcinoma in dogs is a malignant epithelial tumor of the nasal cavity treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Nasal Tumors', href: '/nasal-tumors' },
        { name: 'Nasal Carcinoma', href: '/nasal-carcinoma' },
      ],
    },
  },

  '/nasal-squamous-cell-carcinoma': {
    title: `Radiation Therapy for Nasal Squamous Cell Carcinoma | ${SITE_NAME}`,
    description:
      'Radiation therapy for nasal squamous cell carcinoma in dogs and cats. Varian TrueBeam technology. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Nasal Squamous Cell Carcinoma',
        alternateName: 'Nasal SCC',
        bodyLocation: 'Nasal Cavity',
        description: 'Squamous cell carcinoma of the nasal cavity in dogs and cats treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Nasal Tumors', href: '/nasal-tumors' },
        { name: 'Nasal SCC', href: '/nasal-squamous-cell-carcinoma' },
      ],
    },
  },

  // ── Oral & Head/Neck ────────────────────────────────────────────────────────

  '/oral-tumors': {
    title: `Oral Tumor Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      'Oral tumor radiation therapy for dogs and cats. Fibrosarcoma, melanoma, SCC, and more. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Oral Tumors in Dogs and Cats',
        bodyLocation: 'Oral Cavity',
        description: 'Oral tumors in dogs and cats include melanoma, squamous cell carcinoma, fibrosarcoma, and acanthomatous epulis, treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Oral Tumors', href: '/oral-tumors' },
      ],
    },
  },

  '/oral-melanoma': {
    title: `Radiation Therapy for Oral Melanoma in Dogs | ${SITE_NAME}`,
    description:
      "Radiation therapy for oral melanoma in dogs. Personalized treatment plans. Board Certified Radiation Oncologist ON SITE. Florida's only dedicated center.",
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Oral Melanoma in Dogs',
        bodyLocation: 'Oral Cavity',
        description: 'Oral melanoma is a common malignant tumor in dogs treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Oral Tumors', href: '/oral-tumors' },
        { name: 'Oral Melanoma', href: '/oral-melanoma' },
      ],
    },
  },

  '/oral-squamous-cell-carcinoma': {
    title: `Radiation Therapy for Oral Squamous Cell Carcinoma | ${SITE_NAME}`,
    description:
      'Radiation therapy for oral squamous cell carcinoma in dogs and cats. Precise treatment with Varian TrueBeam. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Oral Squamous Cell Carcinoma',
        alternateName: 'Oral SCC',
        bodyLocation: 'Oral Cavity',
        description: 'Oral squamous cell carcinoma in dogs and cats treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Oral Tumors', href: '/oral-tumors' },
        { name: 'Oral SCC', href: '/oral-squamous-cell-carcinoma' },
      ],
    },
  },

  '/fibrosarcoma': {
    title: `Fibrosarcoma Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      'Fibrosarcoma radiation therapy for dogs and cats. Advanced protocols. Board Certified Radiation Oncologist ON SITE. The only dedicated center in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Fibrosarcoma in Dogs and Cats',
        bodyLocation: 'Soft Tissue',
        description: 'Fibrosarcoma is a malignant soft tissue tumor in dogs and cats treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Oral Tumors', href: '/oral-tumors' },
        { name: 'Fibrosarcoma', href: '/fibrosarcoma' },
      ],
    },
  },

  '/ear-canal-tumors': {
    title: `Radiation Therapy for Ear Canal Tumors in Dogs and Cats | ${SITE_NAME}`,
    description:
      'Radiation therapy for ear canal tumors in dogs and cats. Precise image-guided treatment. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Ear Canal Tumors in Dogs and Cats',
        bodyLocation: 'Ear Canal',
        description: 'Ear canal tumors in dogs and cats treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Oral Tumors', href: '/oral-tumors' },
        { name: 'Ear Canal Tumors', href: '/ear-canal-tumors' },
      ],
    },
  },

  '/salivary-gland-tumors': {
    title: `Radiation Therapy for Salivary Gland Tumors in Pets | ${SITE_NAME}`,
    description:
      'Radiation therapy for salivary gland tumors in dogs and cats. Personalized plans. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Salivary Gland Tumors in Dogs and Cats',
        bodyLocation: 'Salivary Glands',
        description: 'Salivary gland tumors in dogs and cats treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Oral Tumors', href: '/oral-tumors' },
        { name: 'Salivary Gland Tumors', href: '/salivary-gland-tumors' },
      ],
    },
  },

  '/thyroid-tumors': {
    title: `Radiation Therapy for Thyroid Tumors in Dogs | ${SITE_NAME}`,
    description:
      'Radiation therapy for thyroid tumors in dogs. Advanced protocols. Board Certified Radiation Oncologist ON SITE. The only dedicated center in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Thyroid Tumors in Dogs',
        bodyLocation: 'Thyroid Gland',
        description: 'Thyroid tumors in dogs are treated with radiation therapy as part of a multimodal approach.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Oral Tumors', href: '/oral-tumors' },
        { name: 'Thyroid Tumors', href: '/thyroid-tumors' },
      ],
    },
  },

  // ── Cardiac ─────────────────────────────────────────────────────────────────

  '/heart-base-tumors': {
    title: `Radiation Therapy for Heart Base Tumors in Dogs | ${SITE_NAME}`,
    description:
      'Radiation therapy for heart base tumors, chemodectoma, and cardiac hemangiosarcoma in dogs. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Heart Base Tumors in Dogs',
        bodyLocation: 'Heart',
        description: 'Heart base tumors, including chemodectoma and cardiac hemangiosarcoma, in dogs treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Heart Base Tumors', href: '/heart-base-tumors' },
      ],
    },
  },

  // ── Skin & Soft Tissue ──────────────────────────────────────────────────────

  '/soft-tissue-sarcomas': {
    title: `Soft Tissue Sarcoma Radiation Therapy for Pets | ${SITE_NAME}`,
    description:
      'Soft tissue sarcoma radiation therapy for dogs and cats in Florida. Post-surgical radiation and conformal protocols. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Soft Tissue Sarcomas in Dogs and Cats',
        bodyLocation: 'Soft Tissue',
        description:
          'Soft tissue sarcomas in dogs and cats are a group of malignant tumors arising from connective tissue, treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Soft Tissue Sarcomas', href: '/soft-tissue-sarcomas' },
      ],
    },
  },

  '/mast-cell-tumors': {
    title: `Mast Cell Tumor Radiation Therapy for Dogs | ${SITE_NAME}`,
    description:
      'Mast cell tumor radiation therapy for dogs in Florida. Conformal and post-surgical protocols. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Mast Cell Tumors in Dogs',
        alternateName: 'MCT',
        bodyLocation: 'Skin',
        description: 'Mast cell tumors are common skin tumors in dogs treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Soft Tissue Sarcomas', href: '/soft-tissue-sarcomas' },
        { name: 'Mast Cell Tumors', href: '/mast-cell-tumors' },
      ],
    },
  },

  '/vaccine-associated-sarcoma': {
    title: `Vaccine-Associated Sarcoma Radiation Therapy for Cats | ${SITE_NAME}`,
    description:
      'Radiation therapy for vaccine-associated sarcoma in cats in Florida. Specialized protocols. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Vaccine-Associated Sarcoma in Cats',
        alternateName: 'Feline Injection-Site Sarcoma',
        bodyLocation: 'Skin / Subcutaneous Tissue',
        description: 'Vaccine-associated sarcoma is a malignant tumor in cats arising at injection sites, treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Soft Tissue Sarcomas', href: '/soft-tissue-sarcomas' },
        { name: 'Vaccine-Associated Sarcoma', href: '/vaccine-associated-sarcoma' },
      ],
    },
  },

  // ── Bone ────────────────────────────────────────────────────────────────────

  '/osteosarcoma': {
    title: `Osteosarcoma Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      'Osteosarcoma radiation therapy for dogs and cats. Palliative and definitive protocols. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Osteosarcoma in Dogs and Cats',
        bodyLocation: 'Bone',
        description: 'Osteosarcoma is the most common primary bone tumor in dogs, treated with radiation therapy for pain control and definitive intent.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Osteosarcoma', href: '/osteosarcoma' },
      ],
    },
  },

  '/chondrosarcoma': {
    title: `Chondrosarcoma Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      'Chondrosarcoma radiation therapy for dogs and cats. Advanced protocols with Varian TrueBeam. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Chondrosarcoma in Dogs and Cats',
        bodyLocation: 'Bone / Cartilage',
        description: 'Chondrosarcoma is a malignant bone and cartilage tumor in dogs and cats treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Chondrosarcoma', href: '/chondrosarcoma' },
      ],
    },
  },

  '/metastatic-bone-cancer': {
    title: `Radiation Therapy for Metastatic Bone Cancer in Pets | ${SITE_NAME}`,
    description:
      'Radiation therapy for metastatic bone cancer in dogs and cats. Palliative and pain management protocols. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Metastatic Bone Cancer in Dogs and Cats',
        bodyLocation: 'Bone',
        description: 'Metastatic bone cancer in dogs and cats treated with palliative radiation therapy for pain relief.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Metastatic Bone Cancer', href: '/metastatic-bone-cancer' },
      ],
    },
  },

  // ── Thoracic & Internal Organs ──────────────────────────────────────────────

  '/lymphoma': {
    title: `Lymphoma Radiation Therapy for Pets in Florida | ${SITE_NAME}`,
    description:
      "Lymphoma radiation therapy for dogs and cats. Personalized protocols. Board Certified Radiation Oncologist ON SITE. Florida's only dedicated center.",
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Lymphoma in Dogs and Cats',
        bodyLocation: 'Lymph Nodes / Mediastinum',
        description: 'Lymphoma in dogs and cats is a common hematologic malignancy treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Lymphoma', href: '/lymphoma' },
      ],
    },
  },

  '/bladder-cancer': {
    title: `Bladder Cancer Radiation Therapy for Dogs | ${SITE_NAME}`,
    description:
      'Bladder cancer radiation therapy for dogs in Florida. Advanced protocols. Board Certified Radiation Oncologist ON SITE. Promptly. Always.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Bladder Cancer in Dogs',
        alternateName: 'Transitional Cell Carcinoma of the Bladder',
        bodyLocation: 'Urinary Bladder',
        description: 'Bladder cancer in dogs, primarily transitional cell carcinoma, treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Bladder Cancer', href: '/bladder-cancer' },
      ],
    },
  },

  '/transitional-cell-carcinoma': {
    title: `Radiation Therapy for Transitional Cell Carcinoma in Dogs | ${SITE_NAME}`,
    description:
      'Radiation therapy for transitional cell carcinoma (TCC) in dogs. Advanced protocols in Florida. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Transitional Cell Carcinoma in Dogs',
        alternateName: 'TCC, Urothelial Carcinoma',
        bodyLocation: 'Urinary Tract',
        description: 'Transitional cell carcinoma (TCC) is the most common urinary tract tumor in dogs, treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Bladder Cancer', href: '/bladder-cancer' },
        { name: 'Transitional Cell Carcinoma', href: '/transitional-cell-carcinoma' },
      ],
    },
  },

  '/digit-tumors': {
    title: `Radiation Therapy for Digit Tumors in Dogs | ${SITE_NAME}`,
    description:
      'Radiation therapy for digit tumors in dogs. Precise treatment with Varian TrueBeam. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Digit Tumors in Dogs',
        bodyLocation: 'Digit / Paw',
        description: 'Digit tumors in dogs treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Digit Tumors', href: '/digit-tumors' },
      ],
    },
  },

  '/lung-tumor': {
    title: `Radiation Therapy for Lung Tumors in Dogs and Cats | ${SITE_NAME}`,
    description:
      'Radiation therapy for non-surgical lung tumors in dogs and cats. Advanced protocols. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Lung Tumors in Dogs and Cats',
        bodyLocation: 'Lung',
        description: 'Primary and metastatic lung tumors in dogs and cats treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Lung Tumor', href: '/lung-tumor' },
      ],
    },
  },

  '/anal-sac-carcinoma': {
    title: `Anal Sac Carcinoma Radiation Therapy for Dogs | ${SITE_NAME}`,
    description:
      'Anal sac carcinoma radiation therapy for dogs in Florida. Personalized protocols. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      medicalCondition: {
        name: 'Anal Sac Carcinoma in Dogs',
        alternateName: 'Anal Sac Adenocarcinoma',
        bodyLocation: 'Anal Sac',
        description: 'Anal sac carcinoma is a malignant tumor of the anal sac glands in dogs treated with radiation therapy.',
      },
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Anal Sac Carcinoma', href: '/anal-sac-carcinoma' },
      ],
    },
  },

  // ── Treatment roles ─────────────────────────────────────────────────────────

  '/post-surgical-radiation': {
    title: `Post-Surgical Radiation Therapy for Pets | ${SITE_NAME}`,
    description:
      'Post-surgical radiation therapy for dogs and cats in Florida. Adjuvant radiation after surgery. Board Certified Radiation Oncologist ON SITE.',
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Post-Surgical Radiation', href: '/post-surgical-radiation' },
      ],
    },
  },

  '/palliative-radiation': {
    title: `Palliative Radiation Therapy for Pets — Comfort First | ${SITE_NAME}`,
    description:
      'Palliative radiation therapy for dogs and cats. Fewer sessions, focused on comfort and quality of life. Board Certified Radiation Oncologist ON SITE in Florida.',
    sitemap: { priority: 0.85, changefreq: 'monthly' },
    schema: {
      localBusiness: true,
      faqPage: true,
      breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Palliative Radiation', href: '/palliative-radiation' },
      ],
    },
  },
}

// ─── Helper: build full PageSeo from raw data ─────────────────────────────────

function buildPageSeo(path: string, raw: RawPageData): PageSeo {
  const url = `${SITE_URL}${path}`
  const image = raw.ogImage ?? DEFAULT_OG_IMAGE
  return {
    title: raw.title,
    description: raw.description,
    canonical: url,
    og: {
      title: raw.title,
      description: raw.description,
      image,
      url,
      type: path === '/' ? 'website' : 'article',
    },
    sitemap: raw.sitemap,
    schema: raw.schema,
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Returns the full PageSeo for a given path.
 * Falls back to a generic placeholder for unknown paths.
 */
export function getPageSeo(path: string): PageSeo {
  const raw = RAW_PAGES[path]
  if (raw) return buildPageSeo(path, raw)

  // Fallback — should not happen in production
  const fallback: RawPageData = {
    title: SITE_NAME,
    description: 'The only center 100% dedicated to Radiation Oncology in Florida.',
    sitemap: { priority: 0.5, changefreq: 'monthly' },
    schema: {},
  }
  return buildPageSeo(path, fallback)
}

/**
 * All paths with their seo data — used by sitemap.ts and for mega-menu URL validation.
 */
export function getAllPageSeo(): Array<{ path: string } & PageSeo> {
  return Object.entries(RAW_PAGES).map(([path, raw]) => ({
    path,
    ...buildPageSeo(path, raw),
  }))
}

/**
 * Routes that have a RAW_PAGES entry but NO actual page yet (would 404).
 * Excluded from the sitemap so Google doesn't flag them as errors.
 * (Audit 2026-10 technical finding.) Remove a slug from here once its page exists.
 */
const SITEMAP_EXCLUDE = new Set<string>([
  '/chondrosarcoma', '/digit-tumors', '/ear-canal-tumors', '/lung-tumor',
  '/metastatic-bone-cancer', '/nasal-squamous-cell-carcinoma', '/palliative-radiation',
  '/post-surgical-radiation', '/salivary-gland-tumors', '/thyroid-tumors',
  '/transitional-cell-carcinoma',
])

/**
 * All paths that should appear in sitemap.xml (excludes routes without a page).
 */
export function getSitemapPaths(): Array<{
  url: string
  priority: number
  changefreq: PageSeo['sitemap']['changefreq']
}> {
  const included = getAllPageSeo().filter(({ path }) => !SITEMAP_EXCLUDE.has(path))
  const enEntries = included.map(({ canonical, sitemap }) => ({
    url: canonical,
    priority: sitemap.priority,
    changefreq: sitemap.changefreq,
  }))
  // Spanish deactivated → sitemap lists English pages only.
  if (!ES_ENABLED) return enEntries
  // Spanish mirror: every indexable EN page also has a translated /es counterpart.
  const esEntries = included.map(({ path, sitemap }) => ({
    url: `${SITE_URL}${esPath(path)}`,
    priority: sitemap.priority,
    changefreq: sitemap.changefreq,
  }))
  return [...enEntries, ...esEntries]
}

/**
 * Typed list of all condition page paths — used by condition template and RT page grid.
 */
export const CONDITION_PATHS = [
  '/brain-tumors', '/meningioma', '/glioma', '/pituitary-tumors', '/spinal-tumors',
  '/nasal-tumors', '/nasal-carcinoma', '/nasal-squamous-cell-carcinoma',
  '/oral-tumors', '/oral-melanoma', '/oral-squamous-cell-carcinoma',
  '/fibrosarcoma', '/ear-canal-tumors', '/salivary-gland-tumors', '/thyroid-tumors',
  '/heart-base-tumors',
  '/soft-tissue-sarcomas', '/mast-cell-tumors', '/vaccine-associated-sarcoma',
  '/osteosarcoma', '/chondrosarcoma', '/metastatic-bone-cancer',
  '/lymphoma', '/bladder-cancer', '/transitional-cell-carcinoma',
  '/digit-tumors', '/lung-tumor', '/anal-sac-carcinoma',
  '/post-surgical-radiation', '/palliative-radiation',
] as const

export type ConditionPath = typeof CONDITION_PATHS[number]

// ═══════════════════════════════════════════════════════════════════════════
// SPANISH SEO (ES) + hreflang alternates
// EN pages stay at the root; ES pages live under /es/. hreflang is bidirectional
// (en ↔ es) with x-default → English. Spanish titles/descriptions are keyed by
// the ENGLISH path (same keys as RAW_PAGES). Missing entries fall back to the
// English copy so nothing breaks before a page is translated.
// ═══════════════════════════════════════════════════════════════════════════

type RawEsSeo = { title: string; description: string }

export const RAW_PAGES_ES: Record<string, RawEsSeo> = {
  '/': {
    title: `Radioterapia para perros y gatos en Florida | ${SITE_NAME}`,
    description:
      'Único centro de Florida dedicado exclusivamente a la radioterapia veterinaria, con atención directa de una radiooncóloga certificada y respuesta rápida.',
  },
  '/radiation-therapy': {
    title: `Radioterapia veterinaria: protocolos y tecnología | ${SITE_NAME}`,
    description:
      'Radioterapia fraccionada, SRS/SRT y radioterapia paliativa con tecnología Varian TrueBeam, a cargo de una radiooncóloga certificada.',
  },
  '/for-veterinarians': {
    title: `Derivar un paciente a radioterapia veterinaria | ${SITE_NAME}`,
    description:
      'Deriva un paciente a radioterapia veterinaria en Florida, con atención directa de una radiooncóloga certificada. Al terminar, el paciente continúa su seguimiento en tu clínica.',
  },
  '/radiation-oncologist': {
    title: `Radiooncóloga veterinaria certificada en Florida | ${SITE_NAME}`,
    description:
      'Conoce a la Dra. Lisa DiBernardi, radiooncóloga veterinaria certificada. Diseña y revisa personalmente el tratamiento de cada paciente.',
  },
  '/pet-cancer': {
    title: `Cáncer en mascotas: radioterapia para perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para perros y gatos con cáncer en Florida. Sesiones ambulatorias y atención directa de una radiooncóloga certificada.',
  },
  '/dog-cancer': {
    title: `Cáncer en perros: radioterapia en Florida | ${SITE_NAME}`,
    description:
      'Radioterapia para perros con cáncer en Florida, a cargo de una radiooncóloga certificada. Único centro dedicado exclusivamente a la radioterapia veterinaria.',
  },
  '/cat-cancer': {
    title: `Cáncer en gatos: radioterapia en Florida | ${SITE_NAME}`,
    description:
      'Radioterapia para gatos con cáncer en Florida, con protocolos pensados para la especie y a cargo de una radiooncóloga certificada.',
  },
  '/contact': {
    title: `Contacto: radioterapia veterinaria en Florida | ${SITE_NAME}`,
    description:
      'Contáctanos para agendar una consulta de radioterapia veterinaria en Florida. Atención directa de una radiooncóloga certificada. Respuesta rápida.',
  },
  '/contact-pet-owners': {
    title: `Contacto: agendar una consulta | ${SITE_NAME}`,
    description:
      'Agenda una consulta para tu mascota. Te responderemos a la brevedad. Único centro de Florida dedicado exclusivamente a la radioterapia veterinaria.',
  },
  '/contact-referrers': {
    title: `Derivar un paciente: contacto para veterinarios | ${SITE_NAME}`,
    description:
      'Deriva un paciente al único centro de Florida dedicado exclusivamente a la radioterapia veterinaria. Nos comunicamos contigo en cuanto recibamos la derivación.',
  },
  '/brain-tumors': {
    title: `Radioterapia para tumores cerebrales en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para tumores cerebrales en perros y gatos en Florida. Tratamiento guiado por imagen con Varian TrueBeam. Radiooncóloga certificada.',
  },
  '/meningioma': {
    title: `Radioterapia para meningioma en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para meningiomas en perros y gatos. Protocolos SRS/SRT y de radioterapia fraccionada. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/glioma': {
    title: `Radioterapia para glioma en perros | ${SITE_NAME}`,
    description:
      'Radioterapia para gliomas en perros. Protocolos personalizados de radioterapia fraccionada y SRS. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/pituitary-tumors': {
    title: `Radioterapia para tumores de hipófisis en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para tumores de hipófisis en perros y gatos. Tratamiento guiado por imagen. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/spinal-tumors': {
    title: `Radioterapia para tumores espinales en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para tumores espinales en perros y gatos. Tratamiento guiado por imagen con Varian TrueBeam. Radiooncóloga certificada en Florida.',
  },
  '/nasal-tumors': {
    title: `Radioterapia para tumores nasales en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para tumores nasales en perros y gatos en Florida. Protocolos de radioterapia fraccionada y SRS. Atención directa de una radiooncóloga certificada.',
  },
  '/nasal-carcinoma': {
    title: `Radioterapia para carcinoma nasal en perros | ${SITE_NAME}`,
    description:
      'Radioterapia para carcinoma nasal en perros. Tratamiento guiado por imagen. Único centro de Florida dedicado exclusivamente a la radioterapia.',
  },
  '/oral-tumors': {
    title: `Radioterapia para tumores orales en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para tumores orales en perros y gatos: fibrosarcoma, melanoma, carcinoma de células escamosas, entre otros. Radiooncóloga certificada en Florida.',
  },
  '/oral-melanoma': {
    title: `Radioterapia para melanoma oral en perros | ${SITE_NAME}`,
    description:
      'Radioterapia para melanoma oral en perros. Tratamiento personalizado. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/oral-squamous-cell-carcinoma': {
    title: `Radioterapia para carcinoma de células escamosas oral | ${SITE_NAME}`,
    description:
      'Radioterapia para carcinoma de células escamosas oral en perros y gatos. Tratamiento con Varian TrueBeam. Atención directa de una radiooncóloga certificada.',
  },
  '/fibrosarcoma': {
    title: `Radioterapia para fibrosarcoma en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para fibrosarcoma en perros y gatos. Protocolos adaptados a cada caso. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/heart-base-tumors': {
    title: `Radioterapia para tumores de la base del corazón en perros | ${SITE_NAME}`,
    description:
      'Radioterapia para tumores de la base del corazón, quimiodectoma y hemangiosarcoma cardíaco en perros. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/soft-tissue-sarcomas': {
    title: `Radioterapia para sarcomas de tejidos blandos en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para sarcomas de tejidos blandos en perros y gatos en Florida. Radioterapia posquirúrgica y fraccionada. Radiooncóloga certificada.',
  },
  '/mast-cell-tumors': {
    title: `Radioterapia para mastocitomas en perros | ${SITE_NAME}`,
    description:
      'Radioterapia para mastocitomas en perros en Florida. Protocolos de radioterapia fraccionada y posquirúrgica. Atención directa de una radiooncóloga certificada.',
  },
  '/vaccine-associated-sarcoma': {
    title: `Radioterapia para sarcoma asociado al punto de inyección | ${SITE_NAME}`,
    description:
      'Radioterapia para sarcoma asociado al punto de inyección en gatos, en Florida. Radioterapia antes o después de la cirugía. Atención directa de una radiooncóloga certificada.',
  },
  '/osteosarcoma': {
    title: `Radioterapia para osteosarcoma en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para osteosarcoma en perros y gatos. Protocolos paliativos y con intención curativa. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/lymphoma': {
    title: `Radioterapia para linfoma en perros y gatos | ${SITE_NAME}`,
    description:
      'Radioterapia para linfoma en perros y gatos. Protocolos personalizados. Atención directa de una radiooncóloga certificada en Florida.',
  },
  '/bladder-cancer': {
    title: `Radioterapia para cáncer de vejiga en perros | ${SITE_NAME}`,
    description:
      'Radioterapia para cáncer de vejiga en perros en Florida. Protocolos adaptados a cada caso. Atención directa de una radiooncóloga certificada.',
  },
  '/anal-sac-carcinoma': {
    title: `Radioterapia para carcinoma de sacos anales en perros | ${SITE_NAME}`,
    description:
      'Radioterapia para carcinoma de sacos anales en perros en Florida. Protocolos personalizados. Atención directa de una radiooncóloga certificada.',
  },
  // Remaining Spanish titles/descriptions are added as each page is translated.
}

/** Absolute EN + ES URLs for an English route (no trailing slash, matching canonical style). */
function urlsFor(enPath: string): { enUrl: string; esUrl: string } {
  return { enUrl: `${SITE_URL}${enPath}`, esUrl: `${SITE_URL}${esPath(enPath)}` }
}

/**
 * hreflang alternates for a page. `lang` sets which URL is the canonical.
 * Spread directly into a page's Next `metadata.alternates`.
 */
export function i18nAlternates(enPath: string, lang: 'en' | 'es') {
  const { enUrl, esUrl } = urlsFor(enPath)
  // Spanish deactivated → emit only the self canonical, no hreflang alternates.
  if (!ES_ENABLED) {
    return { canonical: lang === 'es' ? esUrl : enUrl }
  }
  return {
    canonical: lang === 'es' ? esUrl : enUrl,
    languages: {
      'en-US': enUrl,
      es: esUrl,
      'x-default': enUrl,
    },
  }
}

/**
 * Spanish PageSeo for an English route. Title/description come from RAW_PAGES_ES
 * (falling back to English), canonical is the /es/ URL, and `alternates` carries
 * bidirectional hreflang. Use in the Spanish pages under app/es.
 */
export function getPageSeoEs(enPath: string): PageSeo & {
  alternates: ReturnType<typeof i18nAlternates>
} {
  const en = getPageSeo(enPath)
  const es = RAW_PAGES_ES[enPath]
  const title = es?.title ?? en.title
  const description = es?.description ?? en.description
  const url = `${SITE_URL}${esPath(enPath)}`
  return {
    title,
    description,
    canonical: url,
    og: { title, description, image: en.og.image, url, type: en.og.type },
    sitemap: en.sitemap,
    schema: en.schema,
    alternates: i18nAlternates(enPath, 'es'),
  }
}

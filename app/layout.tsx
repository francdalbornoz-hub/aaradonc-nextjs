import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/layout/PageTransition'
import SmoothScroll from '@/components/SmoothScroll'
import { getPageSeo, ORGANIZATION } from '@/lib/seo-config'

// ─── Default metadata (home page) ────────────────────────────────────────────
// Each page overrides this via its own generateMetadata() export.

const homeSeo = getPageSeo('/')

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aaradonc.com'),
  title: {
    default: homeSeo.title,
    // seo-config titles already include "| Animal Alliance Radiation Oncology".
    // Pass them through verbatim so the site name is not appended a second time.
    template: '%s',
  },
  description: homeSeo.description,
  openGraph: {
    type: 'website',
    siteName: 'Animal Alliance Radiation Oncology',
    locale: 'en_US',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

// ─── GTM ID ───────────────────────────────────────────────────────────────────
// Set NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX in .env.local
// Conversion events are commented inline in each page/component where they fire.

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// ─── Organization schema (site-wide) ─────────────────────────────────────────

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'VeterinaryCare'],
  name: ORGANIZATION.name,
  legalName: ORGANIZATION.legalName,
  url: ORGANIZATION.url,
  logo: ORGANIZATION.logo,
  telephone: ORGANIZATION.telephone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ORGANIZATION.address.streetAddress,
    addressLocality: ORGANIZATION.address.addressLocality,
    addressRegion: ORGANIZATION.address.addressRegion,
    postalCode: ORGANIZATION.address.postalCode,
    addressCountry: ORGANIZATION.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: ORGANIZATION.geo.latitude,
    longitude: ORGANIZATION.geo.longitude,
  },
  openingHours: ORGANIZATION.openingHours,
  description:
    'The only center 100% dedicated to Radiation Oncology in Florida. Board Certified Radiation Oncologist ON SITE. Advanced veterinary radiation therapy for dogs and cats.',
  medicalSpecialty: 'Radiation Oncology',
  sameAs: ORGANIZATION.sameAs,
}

// ─── Root layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Tag Manager — head snippet ──────────────────────────── */}
        {/* GTM_ID is injected at build time from env. Conversion events:
            - Form submit → GTM trigger: event 'form_submit', label 'consultation' | 'referral'
            - CTA click → GTM trigger: event 'cta_click', label 'request_consultation' | 'refer_patient'
            - Phone click → GTM trigger: event 'phone_click'
            Replace GTM-XXXXXXX with real ID before go-live. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}

        {/* ── Organization schema — site-wide ────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>

      <body>
        {/* ── Google Tag Manager — noscript fallback ──────────────────────── */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}

        {/* ── Smooth scroll (Lenis) ───────────────────────────────────────── */}
        <SmoothScroll />

        {/* ── Site header ─────────────────────────────────────────────────── */}
        <Header />

        {/* ── Page content ────────────────────────────────────────────────── */}
        <main id="main-content" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>

        {/* ── Site footer ─────────────────────────────────────────────────── */}
        <Footer />
      </body>
    </html>
  )
}

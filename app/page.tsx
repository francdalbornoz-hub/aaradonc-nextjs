import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPageSeo } from '@/lib/seo-config'
import { CONTACT_INFO } from '@/lib/nav-config'
import PositioningStrip from '@/components/sections/PositioningStrip'
import ProtocolCards from '@/components/sections/ProtocolCards'
import FormContact from '@/components/forms/FormContact'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const homeSeo = getPageSeo('/')

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: { canonical: homeSeo.canonical },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: homeSeo.canonical,
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero" aria-label="Hero">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__dot" aria-hidden="true" />
            <span>The Only Center 100% Dedicated to Radiation Oncology in Florida</span>
          </div>

          <h1 className="hero__h1">
            Precision radiation therapy
            <br />for animals
            <br />with cancer.
          </h1>

          <p className="hero__bajada">
            Animal Alliance Radiation Oncology is a dedicated veterinary radiation oncology center
            serving families and referring veterinarians across Florida. One specialty. One focus.
            Every treatment plan is personally designed by our on-site Board Certified Radiation Oncologist.
          </p>

          <div className="hero__acciones">
            {/* GTM: cta_click / request_consultation */}
            <Link href="/contact-pet-owners" className="cta-primario">
              Request a Consultation →
            </Link>
            <Link
              href="/contact-referrers"
              className="cta-secundario"
              style={{ borderColor: 'rgba(255,255,255,0.45)', color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}
            >
              Refer a Patient →
            </Link>
          </div>

          <div className="hero__trust-line">
            <div className="htl-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Board-Certified Radiation Oncologist on site
            </div>
            <div className="htl-sep" aria-hidden="true" />
            <div className="htl-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              Personalized Treatment Plans
            </div>
            <div className="htl-sep" aria-hidden="true" />
            <div className="htl-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              Advanced Radiation Technology
            </div>
            <div className="htl-sep" aria-hidden="true" />
            <div className="htl-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Collaborative Care
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <PositioningStrip />

      {/* ══════════════════════════════════════════════════════════════════════
          WHY ANIMAL ALLIANCE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="why-heading">
        <div className="contenedor">
          <div className="why__header">
            <div className="eyebrow">Why Animal Alliance</div>
            <h2 id="why-heading" className="titulo-seccion">
              One specialty. One focus.<br /><em>Entirely dedicated.</em>
            </h2>
            <p className="bajada why__bajada">
              <strong>The only Veterinary Radiation Oncology Center in Florida focused 100% to radiation oncology.</strong>{' '}
              For pet families, this translates to specialist care whose expertise is devoted entirely to
              radiation oncology. Referring veterinarians gain a trusted partner dedicated to providing advanced
              radiation therapy while maintaining open communication and seamlessly transitioning your
              patient&apos;s ongoing care back to your practice.
            </p>
          </div>

          <div className="why__cards why__cards--row">
            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="why-card__titulo">Precision Targeting</div>
              <p className="why-card__texto">
                Advanced radiation therapy techniques shape dose precisely around the tumor,
                protecting healthy surrounding tissue.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <div className="why-card__titulo">Personalized Plans</div>
              <p className="why-card__texto">
                No two tumors — and no two patients — are the same. Each treatment plan is carefully
                designed for the individual.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="why-card__titulo">Collaborative Care</div>
              <p className="why-card__texto">
                Clear, compassionate communication keeps pet families informed throughout treatment.
                Referring veterinarians, you will receive regular updates and a complete treatment
                summary, ensuring a seamless transition back to your care.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="why-card__titulo">Accessible</div>
              <p className="why-card__texto">
                Same-day responses for pet families and referring veterinarians — because timely
                communication matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PositioningStrip text="100% Radiation Oncology — The only Florida center dedicated exclusively to veterinary radiation oncology. Not a department, not a service line." />

      {/* ══════════════════════════════════════════════════════════════════════
          CONDITIONS WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--gris" aria-labelledby="conditions-heading">
        <div className="contenedor">
          <div className="eyebrow">Conditions We Treat</div>
          <h2 id="conditions-heading" className="titulo-seccion">
            Conditions that may benefit<br />from <em>radiation therapy.</em>
          </h2>

          <div className="condiciones__grid">
            <Link href="/brain-tumors" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.98-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.1-2.48Z"/>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.98-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.1-2.48Z"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Brain Tumors</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/nasal-tumors" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Nasal Tumors</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/osteosarcoma" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 10c.7-.7 1.69-1 2.5-1a3.5 3.5 0 0 1 0 7c-.81 0-1.8-.3-2.5-1L7 5c-.7-.7-1.69-1-2.5-1a3.5 3.5 0 0 0 0 7c.81 0 1.8-.3 2.5-1l10 10c.7.7 1.69 1 2.5 1a3.5 3.5 0 0 0 0-7c-.81 0-1.8.3-2.5 1L7 5"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Bone Cancer (OSA)</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/soft-tissue-sarcomas" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/>
                  <path d="M9 14h.01"/><path d="M9 6l.01 8"/><path d="M9 2v4"/><path d="M7 6h4"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Soft Tissue Sarcoma</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/lymphoma" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
                  <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Lymphoma</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/mast-cell-tumors" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/>
                  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Mast Cell Tumors</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/oral-tumors" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                  <path d="M8 16h8"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Oral Tumors</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/spinal-tumors" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <path d="M12 6H8a2 2 0 0 0 0 4h4"/>
                  <path d="M12 10h4a2 2 0 0 1 0 4h-4"/>
                  <path d="M12 14H9a2 2 0 0 0 0 4h3"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Spinal Tumors</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>

            <Link href="/heart-base-tumors" className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Heart Base Tumors</div>
              <span className="condicion-card__link">Learn more →</span>
            </Link>
          </div>

          <div className="condiciones__cta">
            <Link href="/pet-cancer" className="condiciones__cta-btn">
              View all conditions we treat →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TECHNOLOGY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" aria-labelledby="tech-heading">
        <div className="contenedor">
          <div className="tech__grid">
            <div className="tech__col">
              <div className="tech__header">
                <div className="eyebrow eyebrow--claro">Our Technology</div>
                <h2 id="tech-heading" className="titulo-seccion titulo-seccion--claro">
                  Varian TrueBeam —<br /><em>Human Cancer Center Technology</em><br />for Veterinary Patients.
                </h2>
                <p className="bajada bajada--claro">
                  Our center is equipped with the <strong style={{ color: '#fff' }}>Varian TrueBeam® linear accelerator</strong>,
                  an advanced radiation therapy platform used in leading human cancer centers around the world,
                  adapted for veterinary radiation oncology. Precision, safety, and shorter anesthesia times.
                </p>
              </div>

              <div className="tech__features">
                <div className="tech-feature">
                  <div className="tech-feature__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                      <line x1="7" y1="12" x2="17" y2="12"/>
                    </svg>
                  </div>
                  <div>
                    <div className="tech-feature__titulo">IGRT — Image-Guided Radiation Therapy</div>
                    <p className="tech-feature__texto">Every treatment begins with Cone Beam CT (CBCT) imaging to confirm accurate tumor positioning, allowing radiation to be delivered with exceptional precision while minimizing exposure to surrounding healthy tissue.</p>
                  </div>
                </div>

                <div className="tech-feature">
                  <div className="tech-feature__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/>
                    </svg>
                  </div>
                  <div>
                    <div className="tech-feature__titulo">VMAT / RapidArc — Shorter Anesthesia</div>
                    <p className="tech-feature__texto">The machine rotates around the patient while continuously delivering radiation — highly conformal treatments, better tissue protection, shorter treatment times, and shorter anesthesia for our patients.</p>
                  </div>
                </div>

                <div className="tech-feature">
                  <div className="tech-feature__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="tech-feature__titulo">Precision Beam Shaping — MLC</div>
                    <p className="tech-feature__texto">A high-resolution multileaf collimator (MLC) precisely shapes the radiation beam to match each tumor&apos;s unique geometry, enabling our advanced radiation therapy treatment techniques while minimizing radiation exposure to surrounding healthy tissue.</p>
                  </div>
                </div>

                <div className="tech-feature">
                  <div className="tech-feature__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <div>
                    <div className="tech-feature__titulo">Multiple Radiation Energies — Treating a Wide Range of Tumors</div>
                    <p className="tech-feature__texto">Multiple beam energies allows precise treatment of both deep-seated and superficial tumors, including brain, nasal, spinal, oral, skin, and soft tissue cancers.</p>
                  </div>
                </div>
              </div>

              <div>
                <Link href="/radiation-therapy#our-technology" className="cta-primario" style={{ display: 'inline-flex' }}>
                  Learn more about our technology →
                </Link>
              </div>
            </div>

            <div className="tech__visual-img">
              <Image
                src="/images/linac-clinical.webp"
                alt="Veterinary radiation therapy linear accelerator treatment room"
                width={720}
                height={900}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOR VETERINARIANS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--palido" id="vets" aria-labelledby="vets-heading">
        <div className="contenedor">
          <div className="eyebrow">For Referring Veterinarians</div>
          <h2 id="vets-heading" className="titulo-seccion">
            A dedicated radiation oncology<br /><em>referral partner.</em>
          </h2>

          <div className="vets__grid">
            <div className="vets__features">
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Just Radiation Oncology — A True Extension of Your Practice</strong>
                  <p>We focus exclusively on radiation therapy, providing specialized treatment while you continue managing your patient&apos;s overall care. Our goal is collaboration — complementing your practice, not competing with it.</p>
                </div>
              </div>
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Clear Communication at Every Step</strong>
                  <p>Written treatment summaries, regular updates during treatment, and direct access to our team by phone or email — we adapt to how you prefer to work.</p>
                </div>
              </div>
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Rapid Case Review</strong>
                  <p>Send records and imaging — we respond same day with a preliminary assessment and our recommendations.</p>
                </div>
              </div>
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Coordinated Treatment Planning</strong>
                  <p>We handle the radiation plan. You keep the client and patient relationship. Every plan is coordinated with your clinical notes — and the patient continues care with you at the end of treatment.</p>
                </div>
              </div>
            </div>

            <div className="vets__box">
              <h3>Ready to refer a patient?</h3>
              <p>Send us a case summary or call directly. We&apos;ll help you determine whether radiation therapy is the right option and handle the rest — so you can focus on your practice.</p>
              <div className="vets__acciones">
                <Link href="/contact-referrers" className="vets-btn vets-btn--primario">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Refer a Patient
                </Link>
                <Link href="/for-veterinarians" className="vets-btn vets-btn--secundario">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  For Veterinarians — Learn More
                </Link>
                <a href={CONTACT_INFO.phoneHref} className="vets-btn vets-btn--secundario">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RADIATION PROTOCOLS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="protos-section" aria-labelledby="protos-heading">
        <div className="protos-section__inner">
          <div className="protos-section__header">
            <div className="eyebrow eyebrow--claro">Our Radiation Protocols</div>
            <h2 id="protos-heading" className="titulo-seccion titulo-seccion--claro">
              Three protocols.<br /><em>One recommended</em> for your case.
            </h2>
            <p className="bajada bajada--claro">
              Every protocol at AARADONC is selected based on tumor type, location, and treatment
              intent — not on a fixed menu. Dr. DiBernardi reviews each case and recommends the
              right approach for that patient.
            </p>
          </div>
          <ProtocolCards showFooter={true} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          EMOTIONAL BAND
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="banda-emocional" role="img" aria-label="Veterinary oncology care">
        <div className="banda-emocional__overlay">
          <div className="banda-emocional__inner" style={{ justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right', maxWidth: 560 }}>
              <p className="banda-emocional__frase" style={{ marginLeft: 'auto' }}>
                Precision radiation therapy.<br /><em>Close to home.</em>
              </p>
              <p className="banda-emocional__texto" style={{ marginLeft: 'auto' }}>
                A cancer diagnosis affects everyone. We understand the concerns of both pet families and
                the veterinarians guiding their care. Our Palm Beach County center offers advanced radiation
                therapy delivered by a board-certified specialist focused exclusively on veterinary radiation
                oncology — providing expert, compassionate treatment close to home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="process-heading">
        <div className="contenedor">
          <div className="proceso__intro">
            <div className="eyebrow">Our Process</div>
            <h2 id="process-heading" className="titulo-seccion">
              From diagnosis<br />to <em>treatment.</em>
            </h2>
            <p className="bajada">
              From the first referral to the final treatment summary — we coordinate with pet families
              and referring veterinarians at every step. Clear communication, no gaps.
            </p>
          </div>

          <div className="proceso__pasos" role="list">
            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#7EC8E3,#5bb5d5)', color: '#0B1F44' }} aria-hidden="true">1</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7EC8E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                    <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Referral &amp; Consultation</div>
                <p className="paso__texto">We review imaging, pathology, and clinical history. Options are discussed directly with the pet family — and coordinated with the referring veterinarian.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#3B8AE8,#1A6FD4)', color: '#fff' }} aria-hidden="true">2</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B8AE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Treatment Planning</div>
                <p className="paso__texto">Planning CT, contouring, and an individualized radiation plan — designed specifically for your pet&apos;s tumor type, location, and treatment intent.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#1A4FBF,#0D3B8E)', color: '#fff' }} aria-hidden="true">3</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Radiation Treatment</div>
                <p className="paso__texto">Outpatient sessions with continuous monitoring. Side effects are actively managed throughout the course of treatment.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#0B1F44,#071232)', color: '#7EC8E3' }} aria-hidden="true">4</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B1F44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Follow-Up &amp; Communication</div>
                <p className="paso__texto">Pet families receive a clear summary of everything completed. The referring veterinarian receives a full written report — and resumes primary care of the patient from that point forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" id="contact" aria-labelledby="contact-heading">
        <div className="contenedor">
          <div className="eyebrow eyebrow--claro">Contact Us</div>
          <h2 id="contact-heading" className="titulo-seccion titulo-seccion--claro">
            Let&apos;s talk about<br /><em>your pet&apos;s care.</em>
          </h2>

          <div className="contacto__grid">
            <div className="contacto__left">
              <p className="bajada bajada--claro">
                Whether you&apos;re a pet family with questions or a veterinarian ready to refer — we
                respond same day. Dr. DiBernardi reviews every case personally.
              </p>

              <div className="contacto__info">
                <div className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    {/* GTM: phone_click */}
                    <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
                  </div>
                </div>

                <div className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Location</strong>
                    <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener">{CONTACT_INFO.address}</a>
                  </div>
                </div>
              </div>

              <div className="horario" aria-label="Hours of operation">
                <div className="horario__titulo">Hours of Operation</div>
                <div className="horario__fila">
                  <span className="horario__dia">Monday – Friday</span>
                  <span className="horario__hora">8:00 AM – 5:00 PM</span>
                </div>
                <div className="horario__fila">
                  <span className="horario__dia">Saturday</span>
                  <span className="horario__hora horario__hora--cerrado">Closed</span>
                </div>
                <div className="horario__fila">
                  <span className="horario__dia">Sunday</span>
                  <span className="horario__hora horario__hora--cerrado">Closed</span>
                </div>
              </div>
            </div>

            <div className="contacto__form-wrap">
              <div className="form__titulo">Request a Consultation</div>
              <p className="form__subtitulo">We respond same day — for pet families and referring veterinarians.</p>
              <FormContact variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

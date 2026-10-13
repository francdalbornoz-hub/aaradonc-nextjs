import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPageSeoEs } from '@/lib/seo-config'
import { CONTACT_INFO } from '@/lib/nav-config'
import { esPath } from '@/lib/i18n'
import PositioningStrip from '@/components/sections/PositioningStrip'
import ProtocolCards from '@/components/sections/ProtocolCards'
import FormContact from '@/components/forms/FormContact'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const homeSeo = getPageSeoEs('/')

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: homeSeo.alternates,
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: homeSeo.canonical,
  },
}

// ─── Page (ES) ────────────────────────────────────────────────────────────────

export default function HomePageEs() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero" aria-label="Presentación">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__dot" aria-hidden="true" />
            <span>Radioterapia veterinaria · Palm Beach</span>
          </div>

          <h1 className="hero__h1">
            Único servicio
            <br />de radioterapia veterinaria
            <br />en Florida
          </h1>

          <p className="hero__bajada">
            Centro especializado en radioterapia veterinaria en Palm Beach, con tecnología de última generación y un equipo al servicio de familias y veterinarios derivantes de toda Florida.
          </p>

          <div className="hero__acciones">
            {/* GTM: cta_click / request_consultation */}
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">
              Agendar una consulta →
            </Link>
            <Link
              href={esPath('/contact-referrers')}
              className="cta-secundario"
              style={{ borderColor: 'rgba(255,255,255,0.45)', color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}
            >
              Derivar un paciente →
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <PositioningStrip text="Único centro de Florida dedicado exclusivamente a la radioterapia veterinaria. Ofrecemos atención especializada a las familias y colaboramos con los veterinarios derivantes." />

      {/* ══════════════════════════════════════════════════════════════════════
          WHY ANIMAL ALLIANCE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="why-heading">
        <div className="contenedor">
          <div className="why__header">
            <div className="eyebrow">Por qué confiar en Animal Alliance</div>
            <h2 id="why-heading" className="titulo-seccion">
              <em>Dedicación exclusiva</em> a la radioterapia
            </h2>
            <p className="bajada why__bajada">
              Nos especializamos en radioterapia veterinaria y trabajamos en coordinación con tu veterinario de cabecera.
            </p>
          </div>

          <div className="why__cards why__cards--row">
            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="why-card__titulo">Tratamiento localizado</div>
              <p className="why-card__texto">
                Cada sesión se planifica para concentrar la dosis en el tumor y proteger los tejidos que lo rodean.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <div className="why-card__titulo">Personalizado</div>
              <p className="why-card__texto">
                Adaptamos el tratamiento al estado general y a las necesidades de tu mascota.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="why-card__titulo">Información en cada etapa</div>
              <p className="why-card__texto">
                Te mantenemos al tanto de cada etapa, con una comunicación clara y cercana.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="why-card__titulo">Comunicación constante</div>
              <p className="why-card__texto">
                Respondemos con rapidez las consultas de familias y veterinarios derivantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONDITIONS WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--gris" aria-labelledby="conditions-heading">
        <div className="contenedor">
          <div className="eyebrow">Principales indicaciones</div>
          <h2 id="conditions-heading" className="titulo-seccion">
            Tumores que pueden tratarse<br />con <em>radioterapia</em>
          </h2>

          <div className="condiciones__grid">
            <Link href={esPath('/brain-tumors')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.98-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.1-2.48Z"/>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.98-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.1-2.48Z"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Tumores cerebrales</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/nasal-tumors')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Tumores nasales</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/osteosarcoma')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 10c.7-.7 1.69-1 2.5-1a3.5 3.5 0 0 1 0 7c-.81 0-1.8-.3-2.5-1L7 5c-.7-.7-1.69-1-2.5-1a3.5 3.5 0 0 0 0 7c.81 0 1.8-.3 2.5-1l10 10c.7.7 1.69 1 2.5 1a3.5 3.5 0 0 0 0-7c-.81 0-1.8.3-2.5 1L7 5"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Cáncer de hueso (osteosarcoma)</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/soft-tissue-sarcomas')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/>
                  <path d="M9 14h.01"/><path d="M9 6l.01 8"/><path d="M9 2v4"/><path d="M7 6h4"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Sarcomas de tejidos blandos</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/lymphoma')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
                  <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Linfoma</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/mast-cell-tumors')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/>
                  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Mastocitomas</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/oral-tumors')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                  <path d="M8 16h8"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Tumores orales</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/spinal-tumors')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <path d="M12 6H8a2 2 0 0 0 0 4h4"/>
                  <path d="M12 10h4a2 2 0 0 1 0 4h-4"/>
                  <path d="M12 14H9a2 2 0 0 0 0 4h3"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Tumores espinales</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>

            <Link href={esPath('/heart-base-tumors')} className="condicion-card">
              <div className="condicion-card__icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="condicion-card__nombre">Tumores de la base del corazón</div>
              <span className="condicion-card__link">Más información →</span>
            </Link>
          </div>

          <div className="condiciones__cta">
            <Link href={esPath('/pet-cancer')} className="condiciones__cta-btn">
              Ver todos los tipos de tumores →
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
                <div className="eyebrow eyebrow--claro">Tecnología de vanguardia</div>
                <h2 id="tech-heading" className="titulo-seccion titulo-seccion--claro">
                  Tecnología avanzada<br />para un <em>tratamiento más seguro</em>
                </h2>
                <p className="bajada bajada--claro">
                  Trabajamos con el <strong style={{ color: '#fff' }}>acelerador lineal Varian TrueBeam®</strong>,
                  el mismo equipo que se utiliza en hospitales de todo el mundo.
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
                    <div className="tech-feature__titulo">Radioterapia guiada por imágenes (IGRT)</div>
                    <p className="tech-feature__texto">Antes de cada sesión hacemos una tomografía computarizada de haz cónico (CBCT) para confirmar la posición del tumor y dirigir la radiación con exactitud.</p>
                  </div>
                </div>

                <div className="tech-feature">
                  <div className="tech-feature__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/>
                    </svg>
                  </div>
                  <div>
                    <div className="tech-feature__titulo">Arcoterapia volumétrica (VMAT / RapidArc)</div>
                    <p className="tech-feature__texto">El equipo gira alrededor del paciente y emite radiación sin interrupciones. De este modo, la dosis se adapta a la forma del tumor y las sesiones son más cortas.</p>
                  </div>
                </div>

                <div className="tech-feature">
                  <div className="tech-feature__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="tech-feature__titulo">Conformación del haz (MLC)</div>
                    <p className="tech-feature__texto">Un colimador multiláminas (MLC) de alta resolución adapta el haz de radiación al contorno de cada tumor y reduce la exposición de los tejidos sanos cercanos.</p>
                  </div>
                </div>

              </div>

              <div>
                <Link href={`${esPath('/radiation-therapy')}#our-technology`} className="cta-primario" style={{ display: 'inline-flex' }}>
                  Más información sobre nuestra tecnología →
                </Link>
              </div>
            </div>

            <div className="tech__visual-img">
              <Image
                src="/images/linac-clinical.webp"
                alt="Sala de tratamiento con el acelerador lineal de radioterapia veterinaria"
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
          <div className="eyebrow">Para veterinarios derivantes</div>
          <h2 id="vets-heading" className="titulo-seccion">
            Un aliado en radioterapia<br /><em>para tu clínica</em>
          </h2>

          <div className="vets__grid">
            <div className="vets__features">
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Tú sigues a cargo de tu paciente</strong>
                  <p>Nos dedicamos exclusivamente a la radioterapia. Tú sigues a cargo de la atención general.</p>
                </div>
              </div>
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Comunicación clara en cada etapa</strong>
                  <p>Te enviamos informes y actualizaciones periódicas durante el tratamiento. Puedes comunicarte directamente con nuestro equipo por teléfono o correo electrónico.</p>
                </div>
              </div>
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Evaluación rápida del caso</strong>
                  <p>Nos envías la información del paciente y, en breve, te damos una valoración preliminar y nuestras recomendaciones.</p>
                </div>
              </div>
              <div className="vets-feature">
                <div className="vets-feature__dot" aria-hidden="true" />
                <div>
                  <strong>Planificación coordinada del tratamiento</strong>
                  <p>Colaboramos contigo en la atención de tu paciente, respetando tu vínculo con él y su familia.</p>
                </div>
              </div>
            </div>

            <div className="vets__box">
              <h3>¿Quieres derivar un paciente?</h3>
              <p>Envíanos un resumen del caso o llámanos. Evaluamos contigo si la radioterapia es una opción viable para tu paciente.</p>
              <div className="vets__acciones">
                <Link href={esPath('/contact-referrers')} className="vets-btn vets-btn--primario">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Derivar un paciente →
                </Link>
                <Link href={esPath('/for-veterinarians')} className="vets-btn vets-btn--secundario">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Información para veterinarios derivantes →
                </Link>
                <a href={CONTACT_INFO.phoneHref} className="vets-btn vets-btn--secundario">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Llámanos directamente
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
            <div className="eyebrow eyebrow--claro">Protocolos de radioterapia</div>
            <h2 id="protos-heading" className="titulo-seccion titulo-seccion--claro">
              Indicamos el protocolo<br /><em>más adecuado</em> para cada paciente
            </h2>
            <p className="bajada bajada--claro">
              La elección depende del tipo de tumor, de su localización y del objetivo del tratamiento. La Dra. DiBernardi revisa personalmente cada caso antes de recomendar un protocolo.
            </p>
          </div>
          <ProtocolCards showFooter={true} lang="es" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          EMOTIONAL BAND
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="banda-emocional" role="img" aria-label="Atención en oncología veterinaria">
        <div className="banda-emocional__overlay">
          <div className="banda-emocional__inner" style={{ justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right', maxWidth: 560 }}>
              <p className="banda-emocional__frase" style={{ marginLeft: 'auto' }}>
                Radioterapia veterinaria<br /><em>en Palm Beach</em>
              </p>
              <p className="banda-emocional__texto" style={{ marginLeft: 'auto' }}>
                Cuando tu mascota tiene cáncer, necesitas respuestas claras y acompañamiento. Nuestra radiooncóloga certificada trabaja junto a tu veterinario, atiende a tu mascota y responde tus dudas en cada etapa.
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
            <div className="eyebrow">Cómo es el proceso del tratamiento</div>
            <h2 id="process-heading" className="titulo-seccion">
              Del diagnóstico<br />al <em>tratamiento</em>
            </h2>
            <p className="bajada">
              Desde la derivación hasta el informe final, coordinamos cada paso con la familia y con el veterinario derivante.
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
                <div className="paso__titulo">Derivación y consulta</div>
                <p className="paso__texto">Revisamos la información clínica del paciente y luego conversamos sobre las opciones con la familia y el veterinario derivante.</p>
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
                <div className="paso__titulo">Planificación del tratamiento</div>
                <p className="paso__texto">Realizamos una tomografía de planificación, delimitamos el tumor y los órganos cercanos y, con esa información, diseñamos el tratamiento.</p>
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
                <div className="paso__titulo">Sesiones de radioterapia</div>
                <p className="paso__texto">Las sesiones son ambulatorias, con supervisión continua de nuestro equipo. Acompañamos a tu mascota en cada sesión y tratamos los efectos secundarios que puedan aparecer.</p>
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
                <div className="paso__titulo">Seguimiento y comunicación</div>
                <p className="paso__texto">Al finalizar, la familia recibe un resumen claro del tratamiento y el veterinario derivante, un informe completo para dar continuidad a la atención general del paciente.</p>
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
          <div className="eyebrow eyebrow--claro">Contacto</div>
          <h2 id="contact-heading" className="titulo-seccion titulo-seccion--claro">
            Ponte en contacto<br /><em>con nuestro equipo</em>
          </h2>

          <div className="contacto__grid">
            <div className="contacto__left">
              <p className="bajada bajada--claro">
                Escríbenos si tienes preguntas sobre tu mascota o si quieres derivar un paciente. La Dra. DiBernardi revisa personalmente cada caso.
              </p>

              <div className="contacto__info">
                <div className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Teléfono</strong>
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
                    <strong>Correo electrónico</strong>
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
                    <strong>Ubicación</strong>
                    <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener">{CONTACT_INFO.address}</a>
                  </div>
                </div>
              </div>

              <div className="horario" aria-label="Horario de atención">
                <div className="horario__titulo">Horario de atención</div>
                <div className="horario__fila">
                  <span className="horario__dia">Lunes a jueves</span>
                  <span className="horario__hora">8:00 a. m. a 5:00 p. m.</span>
                </div>
                <div className="horario__fila">
                  <span className="horario__dia">Viernes a domingo</span>
                  <span className="horario__hora horario__hora--cerrado">Cerrado</span>
                </div>
              </div>
            </div>

            <div className="contacto__form-wrap">
              <div className="form__titulo">Agendar una consulta</div>
              
              <FormContact variant="light" lang="es" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

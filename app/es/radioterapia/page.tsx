import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import { CONTACT_INFO } from '@/lib/nav-config'
import ProtocolCards from '@/components/sections/ProtocolCards'
import FormContact from '@/components/forms/FormContact'
import FAQAccordion from '@/components/ui/FAQAccordion'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeoEs('/radiation-therapy')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
  openGraph: {
    title: pageSeo.title,
    description: pageSeo.description,
    url: pageSeo.canonical,
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: '¿Mi mascota sentirá dolor durante la radioterapia?',
    a: <>No. Cada sesión se hace con <strong>anestesia general</strong>, así que tu mascota <strong>no siente nada durante el tratamiento.</strong> La recuperación es rápida: en general, <strong>a las pocas horas de volver a casa ya está despierta y come con normalidad.</strong></>,
  },
  {
    q: '¿Cuántas sesiones necesitará mi perro o mi gato?',
    a: <>Depende del protocolo elegido. <strong>Radioterapia paliativa: de 3 a 6 sesiones.</strong> Radioterapia fraccionada convencional (CFRT): <strong>de 10 a 20 sesiones.</strong> Radioterapia estereotáctica (SRS/SRT): <strong>de 1 a 5 sesiones.</strong> Nuestra radiooncóloga define el número de sesiones después de revisar personalmente el caso.</>,
  },
  {
    q: '¿Cómo agendo una consulta?',
    a: <>Puedes llamarnos, escribirnos por correo electrónico o completar el formulario de contacto. Para la consulta, conviene tener a mano la historia clínica reciente de tu mascota, los informes de patología y los estudios de imagen, si los tienes. Nosotros nos coordinamos con tu veterinario.</>,
  },
  {
    q: '¿Qué efectos secundarios puede tener la radioterapia en mi mascota?',
    a: <>Los efectos secundarios <strong>se limitan a la zona tratada</strong> y suelen ser leves: cambios temporales en la piel, algo de cansancio o irritación local, según dónde esté el tumor. <strong>Planificamos cada sesión para proteger los tejidos sanos.</strong> Controlamos de cerca a tu mascota durante el tratamiento y <strong>tratamos enseguida cualquier reacción.</strong></>,
  },
  {
    q: '¿Ofrecen radioterapia para perros y para gatos?',
    a: <>Sí. Tratamos <strong>perros y gatos,</strong> y la planificación tiene en cuenta la anatomía de cada especie. En los gatos, la dosis y el número de sesiones se ajustan con especial cuidado. Nuestra radiooncóloga tiene <strong>más de 20 años de experiencia en oncología.</strong></>,
  },
  {
    q: '¿Qué pasa cuando finaliza el tratamiento de radioterapia?',
    a: <>Al finalizar el tratamiento, tu mascota continúa bajo el cuidado de tu veterinario habitual. Le entregamos un <strong>informe detallado</strong> con el protocolo realizado, las reacciones observadas y las recomendaciones de seguimiento. <strong>Nos mantenemos en contacto con tu veterinario siempre que sea necesario.</strong></>,
  },
]

const CONDITIONS = [
  { label: 'Tumores cerebrales', href: esPath('/brain-tumors') },
  { label: 'Tumores espinales', href: esPath('/spinal-tumors') },
  { label: 'Tumores nasales', href: esPath('/nasal-tumors') },
  { label: 'Tumores orales', href: esPath('/oral-tumors') },
  { label: 'Sarcomas de tejidos blandos', href: esPath('/soft-tissue-sarcomas') },
  { label: 'Mastocitomas', href: esPath('/mast-cell-tumors') },
  { label: 'Osteosarcoma', href: esPath('/osteosarcoma') },
  { label: 'Linfoma', href: esPath('/lymphoma') },
  { label: 'Melanoma oral', href: esPath('/oral-melanoma') },
  { label: 'Carcinoma de los sacos anales', href: esPath('/anal-sac-carcinoma') },
  { label: 'Cáncer de vejiga', href: esPath('/bladder-cancer') },
  { label: 'Meningioma', href: esPath('/meningioma') },
  { label: 'Otros tipos de tumores: consúltanos →', href: esPath('/contact-pet-owners'), accent: true },
]

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RadiationTherapyPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero" aria-label="Presentación de la radioterapia veterinaria">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__dot" aria-hidden="true" />
            <span>Radioterapia veterinaria · Condado de Palm Beach, FL</span>
          </div>
          <h1 className="hero__h1">
            Radioterapia veterinaria<br /><em>en Palm Beach</em>
          </h1>
          <p className="hero__bajada">
            En AARADONC nos dedicamos exclusivamente a la radioterapia. Trabajamos en equipo con tu veterinario de cabecera.
          </p>
          <div className="hero__acciones">
            <a href="#contact" className="cta-primario">Agendar una consulta →</a>
            <a href="#protocols" className="cta-secundario">Ver nuestros protocolos</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT IS RADIATION THERAPY
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="what-is" className="seccion" aria-labelledby="intro-heading">
        <div className="contenedor">
          <div className="rt-intro__grid">
            <div>
              <div className="eyebrow">¿Qué es la radioterapia veterinaria?</div>
              <h2 id="intro-heading" className="titulo-seccion">
                Un tratamiento localizado<br /><em>y no invasivo</em>
              </h2>
              <p className="bajada">
                La radioterapia usa haces de radiación de alta energía para dañar las células tumorales y frenar su crecimiento. Cada tratamiento se diseña según el tipo de tumor, su ubicación, el estado general y la calidad de vida de tu mascota.
              </p>
              <div className="rt-bullets">
                {[
                  { title: 'Localizada', text: 'Actúa sobre la zona del tumor y protege los tejidos sanos cercanos.' },
                  { title: 'Ambulatoria', text: 'Cada sesión se hace con anestesia general. Tu mascota suele volver a casa a las pocas horas y retoma pronto su actividad habitual.' },
                  { title: 'Personalizada', text: 'La Dra. DiBernardi revisa personalmente cada caso antes de indicar el protocolo.' },
                  { title: 'Coordinada con tu veterinario', text: 'Trabajamos junto a tu veterinario y te mantenemos al tanto en cada etapa.' },
                ].map(({ title, text }) => (
                  <div key={title} className="rt-bullet">
                    <div className="rt-bullet__dot" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="rt-bullet__text"><strong>{title}</strong> {text}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#contact" className="cta-azul-oscuro">
                  Hablar con nuestra radiooncóloga →
                </a>
                <Link href={esPath('/for-veterinarians')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 600, color: '#1A4FBF', fontFamily: '\'Plus Jakarta Sans\', sans-serif' }}>
                  Para veterinarios derivantes →
                </Link>
              </div>
            </div>
            <div className="rt-intro__visual">
              <Image
                src="/images/linac-clinical.webp"
                alt="Sala de radioterapia veterinaria de Animal Alliance"
                width={640}
                height={500}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="rt-intro__badge">
                <div className="rt-intro__badge-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="rt-intro__badge-text">
                  <strong>Radiooncóloga certificada</strong>
                  <span>Doble certificación de especialidad · Más de 20 años de experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TECHNOLOGY — VARIAN TRUEBEAM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" id="our-technology" aria-labelledby="tech-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 60px' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Nuestra tecnología</div>
            <h2 id="tech-heading" className="titulo-seccion titulo-seccion--claro">
              Equipamiento de oncología humana,<br /><em>adaptado a perros y gatos</em>
            </h2>
            <p className="bajada bajada--claro" style={{ margin: '0 auto' }}>
              Trabajamos con el <strong style={{ color: '#fff' }}>acelerador lineal Varian TrueBeam®</strong>,
              el mismo equipo que se utiliza en hospitales de todo el mundo.
            </p>
          </div>

          <div className="tech-layout">

            {/* Equipment photo — 3:4 */}
            <div className="tech-photo">
              <Image
                src="/images/linac-room.webp"
                alt="Acelerador lineal Varian TrueBeam de Animal Alliance Radiation Oncology"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', background: 'linear-gradient(to top, rgba(7,18,50,.9) 0%, transparent 100%)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#7EC8E3', marginBottom: 2 }}>Varian TrueBeam®</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Acelerador lineal · en nuestro centro</div>
              </div>
            </div>

            {/* Tech cards 2×2 */}
            <div className="tech-cards">
              {[
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>,
                  title: 'Radioterapia guiada por imagen (IGRT)',
                  text: 'Antes de cada sesión hacemos una tomografía computarizada de haz cónico (CBCT) para confirmar la posición del tumor y dirigir la radiación con exactitud.',
                  
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
                  title: 'Arcoterapia volumétrica (VMAT / RapidArc)',
                  text: 'El equipo gira alrededor del paciente y emite radiación sin interrupciones. De este modo, la dosis se adapta a la forma del tumor y las sesiones son más cortas.',
                  
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                  title: 'Conformación del haz (MLC)',
                  text: 'Un colimador multiláminas (MLC) de alta resolución adapta el haz de radiación al contorno de cada tumor y reduce la exposición de los tejidos sanos cercanos.',
                  
                },
              ].map(({ icon, title, text }) => (
                <div key={title} style={{
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 16,
                  padding: '28px 24px',
                }}>
                  <div style={{ color: '#7EC8E3', marginBottom: 14 }}>{icon}</div>
                  <div style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{title}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONDITIONS WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="conditions" className="seccion seccion--gris" aria-labelledby="conditions-heading">
        <div className="contenedor">
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow">Tumores que tratamos</div>
            <h2 id="conditions-heading" className="titulo-seccion">
              Indicaciones más frecuentes<br /><em>de radioterapia</em>
            </h2>
            <p className="bajada">
              Se usa en tumores de piel, cerebrales, nasales y orales, entre otros. Nuestra radiooncóloga certificada revisa la historia clínica de cada paciente y evalúa si la radioterapia es una opción para su caso.
            </p>
          </div>
          <div className="rt-cond__grid">
            {CONDITIONS.map(({ label, href, accent }) => (
              <Link
                key={label}
                href={href}
                className="rt-cond-item"
                style={accent ? { borderColor: 'rgba(26,79,191,.2)', background: '#EEF2FF' } : undefined}
              >
                <div className="rt-cond-item__left">
                  <div
                    className="rt-cond-item__dot"
                    style={accent ? { background: '#1A4FBF' } : undefined}
                    aria-hidden="true"
                  />
                  <span
                    className="rt-cond-item__text"
                    style={accent ? { color: '#1A4FBF', fontWeight: 700 } : undefined}
                  >
                    {label}
                  </span>
                </div>
                <svg className="rt-cond-item__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TREATMENT INTENT
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="treatment-intent" className="seccion" aria-labelledby="intent-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Objetivo del tratamiento</div>
            <h2 id="intent-heading" className="titulo-seccion">
              Para qué se indica<br /><em>la radioterapia</em>
            </h2>
            <p className="bajada" style={{ margin: '0 auto' }}>
              La radioterapia puede tener tres objetivos: curativo, posquirúrgico o paliativo. Nuestra
              radiooncóloga define cuál corresponde según el tipo de tumor, el estadio y la calidad de
              vida de cada paciente.
            </p>
          </div>

          <div className="rt-intent__grid">

            {/* Curative */}
            <div className="rt-intent-card">
              <div className="rt-intent-card__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Intención curativa
              </div>
              <div className="rt-intent-card__title">Tratamiento principal</div>
              <p className="rt-intent-card__text">
                La radioterapia es el <strong>tratamiento principal</strong>. Suele indicarse en tumores que
                no pueden operarse o cuando la localización del tumor dificulta obtener márgenes adecuados con cirugía. El objetivo
                es <strong>controlar el tumor a largo plazo o lograr la remisión.</strong>
              </p>
              <div className="rt-intent-card__pills">
                {['Tumores cerebrales', 'Tumores nasales', 'Tumores orales'].map((p) => (
                  <span key={p} className="rt-intent-card__pill">{p}</span>
                ))}
              </div>
            </div>

            {/* Adjuvant — featured */}
            <div className="rt-intent-card rt-intent-card--featured">
              <div className="rt-intent-card__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Radioterapia posquirúrgica (adyuvante)
              </div>
              <div className="rt-intent-card__title">Después de la cirugía</div>
              <p className="rt-intent-card__text">
                Cuando la cirugía extirpa la mayor parte del tumor pero <strong>no se pueden confirmar márgenes limpios,</strong> la
                radioterapia elimina las células tumorales que pudieron haber quedado. Así <strong>ayuda a reducir el riesgo
                de recidiva local</strong> y a prolongar la sobrevida libre de enfermedad.
              </p>
              <div className="rt-intent-card__pills">
                {['Sarcoma de tejidos blandos', 'Mastocitomas', 'Casos posquirúrgicos'].map((p) => (
                  <span key={p} className="rt-intent-card__pill">{p}</span>
                ))}
              </div>
            </div>

            {/* Palliative */}
            <div className="rt-intent-card">
              <div className="rt-intent-card__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Intención paliativa
              </div>
              <div className="rt-intent-card__title">Bienestar y calidad de vida</div>
              <p className="rt-intent-card__text">
                Cuando el control del tumor a largo plazo no es el objetivo principal, la radioterapia puede
                <strong> ayudar a reducir el dolor, la compresión que causa el tumor o el sangrado</strong> y mejorar
                el bienestar y la calidad de vida de mascotas con <strong>cáncer avanzado o inoperable.</strong>
              </p>
              <div className="rt-intent-card__pills">
                {['Dolor óseo', 'Tumores inoperables', 'Cáncer en estadio avanzado'].map((p) => (
                  <span key={p} className="rt-intent-card__pill">{p}</span>
                ))}
              </div>
            </div>

          </div>

          
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROTOCOLS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" id="protocols" aria-labelledby="protocols-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Protocolos de tratamiento</div>
            <h2 id="protocols-heading" className="titulo-seccion titulo-seccion--claro">
              Indicamos el protocolo<br /><em>más adecuado</em> para tu mascota
            </h2>
            <p className="bajada bajada--claro" style={{ margin: '0 auto' }}>
              Tenemos en cuenta el tipo de tumor, su ubicación, el estadio y el objetivo del tratamiento.
            </p>
          </div>
          <div style={{ marginTop: 52 }}>
            <ProtocolCards showFooter={false} lang="es" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          THE PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="process" className="seccion seccion--gris" aria-labelledby="process-heading">
        <div className="contenedor">
          <div className="proceso__intro">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>El proceso</div>
            <h2 id="process-heading" className="titulo-seccion">
              ¿Cómo es un tratamiento<br /><em>de radioterapia?</em>
            </h2>
            <p className="bajada">
              Estos son los pasos, desde la primera consulta hasta el último control.
            </p>
          </div>
          <div className="proceso__pasos" role="list">

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#7EC8E3,#5bb5d5)', color: '#0B1F44' }} aria-hidden="true">1</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Evaluación del caso y consulta</div>
                <p className="paso__texto">Nuestra radiooncóloga revisa personalmente la información clínica de tu mascota. Recibirás una recomendación clara, sin tecnicismos.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#3B8AE8,#1A6FD4)', color: '#fff' }} aria-hidden="true">2</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Tomografía de planificación</div>
                <p className="paso__texto">Realizamos una tomografía de planificación para reconstruir en 3D el tumor y la anatomía que lo rodea. Con esas imágenes calculamos la dosis necesaria para tratar el tumor y proteger los tejidos sanos cercanos.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#1A4FBF,#0D3B8E)', color: '#fff' }} aria-hidden="true">3</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Sesiones de radioterapia</div>
                <p className="paso__texto">Las sesiones son ambulatorias y se hacen con anestesia general. La radiación se concentra en el tumor, según lo planificado en la tomografía, y tu mascota vuelve a casa el mismo día.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#0B1F44,#071232)', color: '#7EC8E3' }} aria-hidden="true">4</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Seguimiento y coordinación</div>
                <p className="paso__texto">Controlamos la evolución de tu mascota durante todo el tratamiento y mantenemos informado a tu veterinario en cada etapa. Al finalizar, entregamos un informe detallado.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DUAL AUDIENCE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" aria-labelledby="dual-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 52px' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>A quién ayudamos</div>
            <h2 id="dual-heading" className="titulo-seccion titulo-seccion--claro">
              Para familias<br />y para <em>veterinarios derivantes</em>
            </h2>
          </div>
          <div className="rt-dual__grid">
            {/* Pet Families */}
            <div className="rt-dual-card" id="pet-owners">
              <span className="rt-dual-card__tag">Para familias</span>
              <div className="rt-dual-card__title">El cuidado de tu mascota,<br />en manos especializadas</div>
              <p className="rt-dual-card__text">
                Nuestra radiooncóloga revisa personalmente cada caso y te explica con claridad las opciones.
              </p>
              <div className="rt-dual-card__list">
                {['Evaluación personalizada del caso', 'Información clara en cada etapa del tratamiento', 'Comunicación fluida', 'Atención coordinada con tu veterinario habitual'].map((item) => (
                  <div key={item} className="rt-dual-card__item">{CHECK_ICON}{item}</div>
                ))}
              </div>
              <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
            </div>

            {/* Veterinarians */}
            <div className="rt-dual-card" id="veterinarians">
              <span className="rt-dual-card__tag">Para veterinarios</span>
              <div className="rt-dual-card__title">Un aliado en radioterapia<br />para tu clínica</div>
              <p className="rt-dual-card__text">
                Nos ocupamos de la radioterapia y tú sigues a cargo de la atención general de tu paciente.
                Al terminar, el paciente vuelve a tu clínica con un informe completo.
              </p>
              <div className="rt-dual-card__list">
                {['Respuesta rápida a cada derivación', 'Informes completos', 'Contacto directo con la radiooncóloga', 'Radioterapia en coordinación con tu clínica'].map((item) => (
                  <div key={item} className="rt-dual-card__item">{CHECK_ICON}{item}</div>
                ))}
              </div>
              <Link href={esPath('/for-veterinarians')} className="cta-secundario" style={{ borderColor: 'rgba(255,255,255,.3)' }}>
                Información para veterinarios derivantes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="seccion" aria-labelledby="faq-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Preguntas frecuentes</div>
            <h2 id="faq-heading" className="titulo-seccion">
              Lo que más nos preguntan<br /><em>las familias</em>
            </h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--gris" id="contact" aria-labelledby="contact-heading">
        <div className="contenedor">
          <div className="eyebrow">Contacto</div>
          <h2 id="contact-heading" className="titulo-seccion">
            ¿Quieres saber si la radioterapia<br /><em>es una opción para tu mascota?</em>
          </h2>
          <div className="contacto__grid">
            <div>
              <p className="bajada">
                Nuestra radiooncóloga revisa personalmente cada caso. Escríbenos y te contamos cómo seguir.
              </p>
              <div className="contacto__info">
                <a href={CONTACT_INFO.phoneHref} className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div><strong>Teléfono</strong><span>{CONTACT_INFO.phone}</span></div>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div><strong>Correo electrónico</strong><span>{CONTACT_INFO.email}</span></div>
                </a>
                <div className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div><strong>Ubicación</strong><a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener">{CONTACT_INFO.address}</a></div>
                </div>
              </div>
              <div className="horario">
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

      {/* ══════════════════════════════════════════════════════════════════════
          SAME DAY ALWAYS — POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text">
            <strong>Único centro de Florida dedicado exclusivamente a la radioterapia veterinaria</strong>
          </p>
        </div>
      </div>
    </>
  )
}

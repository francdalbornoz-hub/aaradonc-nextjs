import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import { CONTACT_INFO } from '@/lib/nav-config'
import FormReferralCompact from '@/components/forms/FormReferralCompact'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ProtocolCards from '@/components/sections/ProtocolCards'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeoEs('/for-veterinarians')

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
    q: '¿Qué información incluyo en la derivación?',
    a: <>Idealmente: <strong>informe de histopatología, estudios de imagen (TC, RM, radiografías), notas clínicas recientes e información de estadiamiento.</strong> Si no tienes todo, envía lo que tengas y nosotros coordinamos el resto.</>,
  },
  {
    q: '¿Cuánto tardan en responder después de que envío una derivación?',
    a: <><strong>Te confirmamos la recepción a la brevedad.</strong> Después, la Dra. DiBernardi revisa la derivación y coordinamos la consulta con tu clínica.</>,
  },
  {
    q: '¿Recibo novedades de mi paciente durante el tratamiento?',
    a: <>Sí. Recibes un <strong>informe</strong> después de la primera consulta, <strong>novedades periódicas</strong> durante el tratamiento y un informe detallado al terminar.</>,
  },
  {
    q: '¿AARADONC se hace cargo de la atención general del paciente?',
    a: <>No. <strong>Solo hacemos radioterapia:</strong> tu paciente <strong>vuelve a tu clínica</strong> para todo lo demás.</>,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ForVeterinariansPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — split with inline form
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero hero--vet" aria-label="Portada para veterinarios">
        <div className="hero__inner hero__inner--split">

          {/* Left: text */}
          <div className="hero__split-text">
            <div className="hero__eyebrow">
              <div className="hero__dot" aria-hidden="true" />
              <span>Para veterinarios derivantes · Condado de Palm Beach, FL</span>
            </div>
            <h1 className="hero__h1">
              Un aliado en radioterapia<br /><em>para tus pacientes</em>
            </h1>
            <p className="hero__bajada">
              Nuestro único servicio es la radioterapia. Tratamos a tu paciente en nuestro centro y te mantenemos al tanto en cada etapa.
            </p>
            <div className="hero__acciones">
              <a href="#referral-form" className="cta-primario">Derivar un paciente →</a>
              <Link href={esPath('/radiation-therapy')} className="cta-secundario">Ver nuestros protocolos</Link>
            </div>
          </div>

          {/* Right: quick referral form card */}
          <div className="hero__split-form">
            <div className="vet-hero-form">
              <div className="vet-hero-form__header">
                <div className="vet-hero-form__dot" aria-hidden="true" />
                <span className="vet-hero-form__label">Derivación rápida</span>
              </div>
              <div className="vet-hero-form__title">Derivar un paciente</div>
              
              <FormReferralCompact lang="es" />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text">
            <strong>Único centro de Florida dedicado exclusivamente a la radioterapia veterinaria</strong>.
            La Dra. DiBernardi revisa personalmente cada derivación.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR APPROACH — full-bleed split (photo left, blue right)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="vet-approach" aria-labelledby="approach-heading">
        {/* Left: photo */}
        <div className="vet-approach__photo">
          <Image
            src="/images/dr-dibernardi.webp"
            alt="La Dra. DiBernardi, radiooncóloga veterinaria certificada"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        {/* Right: blue content */}
        <div className="vet-approach__content">
          <div className="eyebrow eyebrow--claro">Nuestra forma de trabajar</div>
          <h2 id="approach-heading" className="vet-approach__h2">
            Sumamos la radioterapia,<br />tú sigues <em>a cargo del paciente</em>
          </h2>
          <p className="vet-approach__text">
            Tu paciente viene a nuestro centro solo para las sesiones de radioterapia. Para todo lo demás sigue contigo, su veterinario de cabecera.
          </p>
          <div className="vet-approach__list">
            {[
              'Después del tratamiento, el seguimiento continúa en tu clínica',
              'Disponibles para comentar el caso antes de que lo derives',
            ].map((item) => (
              <div key={item} className="vet-approach__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7EC8E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
          <a href="#referral-form" className="cta-primario" style={{ marginTop: 36, display: 'inline-flex' }}>
            Derivar un paciente →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHY REFER TO US
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="why-refer-heading">
        <div className="contenedor">
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow">Por qué derivar a AARADONC</div>
            <h2 id="why-refer-heading" className="titulo-seccion">
              Un aliado especializado<br /><em>que complementa tu trabajo</em>
            </h2>
            
          </div>
          <div className="rt-why__grid" style={{ marginTop: 52 }}>
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: 'Experiencia en oncología',
                text: <><strong>Radiooncóloga certificada con más de 20 años de experiencia en oncología.</strong> La Dra. DiBernardi revisa personalmente cada derivación.</>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                title: 'Respuesta rápida',
                text: <>Confirmamos cada derivación <strong>con rapidez</strong> y coordinamos la consulta contigo.</>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                title: 'Informes completos',
                text: <>Te enviamos un <strong>informe</strong> después de la primera consulta y otro <strong>detallado</strong> al terminar el tratamiento.</>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                title: 'Radioterapia en coordinación con tu clínica',
                text: <>Al terminar la radioterapia, el paciente <strong>continúa su seguimiento en tu clínica</strong>, como siempre.</>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                title: 'Tecnología',
                text: <><strong>Acelerador lineal Varian TrueBeam®</strong>, el mismo equipo que se utiliza en hospitales de todo el mundo, con IGRT, VMAT/RapidArc y MLC de alta resolución. Las sesiones son más cortas y <strong>requieren menos tiempo de anestesia.</strong></>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                title: 'Contacto directo con la radiooncóloga',
                text: <>Puedes hablar <strong>directamente con la Dra. DiBernardi</strong> para resolver dudas en cualquier etapa del tratamiento.</>,
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="rt-why-card">
                <div className="rt-why-card__icon" aria-hidden="true">{icon}</div>
                <div className="rt-why-card__title">{title}</div>
                <p className="rt-why-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW IT WORKS — 4 steps
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--gris" aria-labelledby="vet-process-heading">
        <div className="contenedor">
          <div className="proceso__intro">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Cómo funciona</div>
            <h2 id="vet-process-heading" className="titulo-seccion">
              De la derivación al tratamiento<br /><em>en cuatro pasos</em>
            </h2>
            <p className="bajada">
              Coordinamos cada paso contigo para que tu paciente empiece el tratamiento sin demoras.
            </p>
          </div>
          <div className="proceso__pasos" role="list">

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#7EC8E3,#5bb5d5)', color: '#0B1F44' }} aria-hidden="true">1</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Envía la derivación</div>
                <p className="paso__texto">Nos envías la información clínica de tu paciente.</p>
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
                <div className="paso__titulo">Evaluación rápida del caso</div>
                <p className="paso__texto">La Dra. DiBernardi revisa la información clínica del paciente y te enviamos una valoración preliminar.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#1A4FBF,#0D3B8E)', color: '#fff' }} aria-hidden="true">3</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Consulta e indicación del protocolo</div>
                <p className="paso__texto">Nos reunimos con la familia y revisamos toda la información clínica disponible. Después te enviamos un informe completo de la consulta, con el protocolo que recomendamos y los motivos de la indicación.</p>
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
                <div className="paso__titulo">Comunicación durante todo el tratamiento</div>
                <p className="paso__texto">Te mantenemos informado sobre la evolución de tu paciente durante el tratamiento. Puedes comunicarte con nuestra radiooncóloga por teléfono o correo electrónico y, al finalizar, recibes un informe con la información necesaria para continuar el seguimiento.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TREATMENT PROTOCOLS — shared ProtocolCards component
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" aria-label="Protocolos de tratamiento">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Protocolos de tratamiento</div>
            <h2 className="titulo-seccion titulo-seccion--claro">
              Indicamos el protocolo<br /><em>más adecuado</em> para cada paciente
            </h2>
          </div>
          <div style={{ marginTop: 52 }}>
            <ProtocolCards showFooter={false} lang="es" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="vet-faq-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Preguntas frecuentes</div>
            <h2 id="vet-faq-heading" className="titulo-seccion">
              Lo que más nos preguntan<br /><em>los veterinarios</em>
            </h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          REFERRAL FORM — premium dark design
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="referral-form" className="vet-form-section" aria-labelledby="form-heading">
        <div className="vet-form-section__inner">

          {/* Left: info */}
          <div className="vet-form-section__info">
            <div className="eyebrow eyebrow--claro">Derivar un paciente</div>
            <h2 id="form-heading" className="vet-form-section__h2">
              ¿Quieres derivar<br /><em>un paciente?</em>
            </h2>
            <p className="vet-form-section__sub">
              Completa los datos básicos: nombre, clínica e información del paciente. Confirmaremos
              la recepción de tu derivación a la brevedad y coordinaremos la consulta contigo.
            </p>

            <div className="vet-form-section__contacts">
              <a href={CONTACT_INFO.phoneHref} className="vet-form-contact">
                <div className="vet-form-contact__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="vet-form-contact__label">Teléfono</div>
                  <div className="vet-form-contact__val">{CONTACT_INFO.phone}</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="vet-form-contact">
                <div className="vet-form-contact__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="vet-form-contact__label">Correo electrónico</div>
                  <div className="vet-form-contact__val">{CONTACT_INFO.email}</div>
                </div>
              </a>
            </div>

            <div className="vet-form-section__checklist">
              <div className="vet-form-section__checklist-title">Qué incluir</div>
              {[
                'Informe de histopatología o biopsia',
                'Estudios de imagen disponibles (TC, RM, radiografías)',
                'Notas clínicas recientes y estadiamiento',
                '¿No tienes todo? Envía lo que tengas.',
              ].map((item) => (
                <div key={item} className="vet-form-section__check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7EC8E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="vet-form-section__card">
            <FormReferralCompact lang="es" />
          </div>

        </div>
      </section>
    </>
  )
}

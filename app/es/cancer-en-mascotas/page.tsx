import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs, ORGANIZATION } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import { CONTACT_INFO } from '@/lib/nav-config'
import FormContact from '@/components/forms/FormContact'

const pageSeo = getPageSeoEs('/pet-cancer')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const WHY_CARDS = [
  { title: 'Radiooncóloga certificada', text: 'Nuestra radiooncóloga tiene doble certificación de especialidad y más de 20 años de experiencia en oncología.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
  { title: 'Tratamiento personalizado', text: 'Diseñamos el tratamiento de acuerdo al tumor y priorizando la calidad de vida de tu mascota.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
  { title: 'Atención coordinada', text: 'Trabajamos junto a tu veterinario y los demás especialistas que atienden a tu mascota, y les enviamos informes completos.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { title: 'La calidad de vida primero', text: 'Las sesiones son ambulatorias y no alteran la rutina de tu mascota.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
]

const CONDITIONS = [
  { title: 'Tumores cerebrales', text: 'En los tumores cerebrales, la radioterapia suele ser una de las principales opciones de tratamiento y puede mejorar los signos neurológicos.', href: esPath('/brain-tumors'), icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg> },
  { title: 'Tumores nasales', text: 'Los tumores nasales están entre los cánceres veterinarios que mejor responden a la radioterapia, que es el tratamiento de primera elección.', href: esPath('/nasal-tumors'), icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: 'Cáncer óseo (osteosarcoma)', text: 'En perros con osteosarcoma, la radioterapia paliativa ayuda a aliviar el dolor y a mejorar la calidad de vida.', href: esPath('/osteosarcoma'), icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m18 8-1.5-1.5"/><path d="m5.5 20.5 11-11"/><path d="m6 8 1.5-1.5"/><path d="m18.5 20.5-11-11"/><circle cx="5.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><circle cx="5.5" cy="18.5" r="2.5"/></svg> },
  { title: 'Sarcomas de tejidos blandos', text: 'En los sarcomas de tejidos blandos con márgenes incompletos o estrechos, la radioterapia posquirúrgica reduce el riesgo de recidiva local.', href: esPath('/soft-tissue-sarcomas'), icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/></svg> },
  { title: 'Linfoma', text: 'La radioterapia se utiliza en algunos tipos de linfoma, sobre todo cuando la enfermedad está localizada o como parte de un tratamiento combinado.', href: esPath('/lymphoma'), icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="5"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(120 12 12)"/></svg> },
  { title: 'Otros tipos de tumores', text: 'Tumores orales, espinales y de cabeza y cuello, entre otros. Escríbenos para conversar sobre el diagnóstico de tu mascota.', href: esPath('/contact-pet-owners'), icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
]

const PROTOCOLS = [
  { title: 'Radioterapia fraccionada convencional', tag: 'Intención curativa o posquirúrgica', text: 'Por lo general, de 10 a 20 sesiones con dosis más bajas, de lunes a jueves. El objetivo es lograr el mayor control posible del tumor con menos efectos secundarios a largo plazo. Se utiliza con intención curativa o después de la cirugía.', href: `${esPath('/radiation-therapy')}#cfrt`, featured: false },
  { title: 'SRS / SRT', tag: 'Estereotáctica', text: 'De 1 a 5 sesiones con dosis altas concentradas en el tumor. Suele indicarse en tumores pequeños y bien delimitados, y requiere menos anestesias.', href: `${esPath('/radiation-therapy')}#srs-srt`, featured: true },
  { title: 'Radioterapia paliativa', tag: 'Enfocada en el bienestar', text: 'Menos sesiones, con una dosis mayor en cada una, para aliviar el dolor, frenar el avance del tumor y mejorar la calidad de vida. Se utiliza sobre todo cuando el bienestar es el objetivo principal.', href: `${esPath('/radiation-therapy')}#palliative`, featured: false },
]

const STEPS = [
  { num: 1, title: 'Primer contacto', text: 'Llámanos o escríbenos y te decimos si la radioterapia es una opción para tu mascota.', tags: ['Respuesta rápida'] },
  { num: 2, title: 'Evaluación del caso y consulta', text: 'Revisamos la información clínica de tu mascota y te damos una recomendación clara, sin tecnicismos.', tags: ['Presencial'] },
  { num: 3, title: 'Tratamiento personalizado', text: 'Nuestra radiooncóloga diseña el tratamiento con estudios de imagen y cálculo de dosis, e indica el protocolo según el tipo de cáncer, la anatomía de tu mascota y los objetivos del tratamiento.', tags: ['CFRT', 'Radioterapia paliativa', 'SRS / SRT'] },
  { num: 4, title: 'Tratamiento y seguimiento', text: 'Sesiones ambulatorias y controles periódicos durante el tratamiento y después.', tags: ['De 1 a 20 sesiones', 'Ambulatorio', 'Coordinación con tu veterinario'] },
]

const phone = ORGANIZATION.telephone || CONTACT_INFO.phone
const phoneHref = `tel:${phone.replace(/\D/g, '')}`
const email = process.env.NEXT_PUBLIC_EMAIL || 'info@aaradonc.com'

export default function PetCancerPageEs() {
  return (
    <>
      <div id="no-footer-cta" style={{ display: 'none' }} aria-hidden="true" />
      {/* HERO */}
      <section className="hero" aria-label="Radioterapia para mascotas con cáncer">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__dot" />
            <span>Radioterapia veterinaria · Condado de Palm Beach, FL</span>
          </div>
          <h1 className="hero__h1">
            Radioterapia<br />para <em>mascotas con cáncer</em><br />en Florida
          </h1>
          <p className="hero__bajada">La radioterapia trata el tumor y ayuda a preservar la calidad de vida de tu perro o tu gato.</p>
          <div className="hero__acciones">
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
            <Link href={esPath('/radiation-therapy')} className="cta-secundario">Cómo funciona la radioterapia</Link>
          </div>
        </div>
      </section>

      {/* POS STRIP */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text"><strong>Único centro de Florida dedicado exclusivamente a la radioterapia veterinaria</strong>.</p>
        </div>
      </div>

      {/* WHY ALLIANCE */}
      <section className="seccion" aria-labelledby="why-heading">
        <div className="contenedor">
          <div className="pc-why__grid">
            <div>
              <div className="eyebrow">Por qué Animal Alliance</div>
              <h2 id="why-heading" className="titulo-seccion">Solo radioterapia,<br /><em>con toda la atención</em> en tu mascota</h2>
              <p className="bajada">Nuestro único servicio es la radioterapia para perros y gatos con cáncer; no hacemos oncología clínica. Todo el equipo y la tecnología del centro están dedicados a este tratamiento.</p>
              <div className="pc-why__cards">
                {WHY_CARDS.map((c) => (
                  <div key={c.title} className="pc-card">
                    <div className="pc-card__icon">{c.icon}</div>
                    <div className="pc-card__title">{c.title}</div>
                    <p className="pc-card__text">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pc-why__panel">
              <div className="pc-why__overlay">
                <div className="pc-why__badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  100 % radioterapia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="seccion seccion--gris" aria-labelledby="conditions-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Qué tratamos</div>
            <h2 id="conditions-heading" className="titulo-seccion">Radioterapia para<br /><em>muchos tipos de cáncer en mascotas</em></h2>
            <p className="bajada" style={{ margin: '0 auto' }}>La radioterapia puede ser una opción en muchos diagnósticos, desde tumores cerebrales hasta sarcomas de tejidos blandos, tanto en perros como en gatos.</p>
          </div>
          <div className="pc-cond__grid">
            {CONDITIONS.map((c) => (
              <Link key={c.title} href={c.href} className="pc-cond-card">
                <div className="pc-cond-card__icon">{c.icon}</div>
                <div className="pc-cond-card__title">{c.title}</div>
                <p className="pc-cond-card__text">{c.text}</p>
                <div className="pc-cond-card__link">Más información <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLS */}
      <section className="seccion seccion--azul" aria-labelledby="protocols-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Protocolos de tratamiento</div>
            <h2 id="protocols-heading" className="titulo-seccion titulo-seccion--claro">Indicamos <em>el protocolo más adecuado</em><br />para tu mascota</h2>
            <p className="bajada bajada--claro" style={{ margin: '0 auto' }}>La indicación depende del tipo, el tamaño y la ubicación del tumor, así como de las necesidades de tu mascota y las prioridades de tu familia.</p>
          </div>
          <div className="pc-proto__grid">
            {PROTOCOLS.map((p) => (
              <Link key={p.title} href={p.href} className={`pc-proto-card${p.featured ? ' pc-proto-card--featured' : ''}`}>
                <span className={`pc-proto-card__tag${p.featured ? ' pc-proto-card__tag--featured' : ''}`}>{p.tag}</span>
                <div className="pc-proto-card__title">{p.title}</div>
                <p className="pc-proto-card__text">{p.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="seccion" aria-labelledby="process-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Qué esperar</div>
            <h2 id="process-heading" className="titulo-seccion">Del diagnóstico<br />al <em>tratamiento</em></h2>
            <p className="bajada" style={{ margin: '0 auto', textAlign: 'center' }}>Así te acompañamos en cada paso.</p>
          </div>
          <div className="pc-timeline">
            <div className="pc-steps">
              {STEPS.map((s) => (
                <div key={s.num} className="pc-step">
                  <div className="pc-step__left">
                    <div className="pc-step__num">{s.num}</div>
                    <div className="pc-step__line" />
                  </div>
                  <div className="pc-step__body">
                    <div className="pc-step__title">{s.title}</div>
                    <p className="pc-step__text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="pc-timeline__card">
                <div className="pc-timeline__card-img">
                  <Image src="/images/team-workstation.webp" alt="Planificación de la radioterapia en Animal Alliance" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="pc-timeline__card-body">
                  <div className="pc-timeline__card-title">Cada tratamiento se <em>diseña para tu mascota</em></div>
                  <p className="pc-timeline__card-text">Nuestra radiooncóloga analiza las características del tumor y la extensión de la enfermedad antes de indicar el protocolo, y tiene en cuenta las necesidades de tu mascota y las prioridades de tu familia.</p>
                  <div className="pc-timeline__card-protos">
                    {['CFRT', 'Radioterapia paliativa', 'SRS / SRT'].map((p) => (
                      <span key={p} className="pc-timeline__card-proto">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL BAND */}
      <div className="banda-emocional" role="complementary" aria-label="Mensaje de apoyo">
        <div className="banda-emocional__overlay">
          <div className="banda-emocional__frase">
            Después de un diagnóstico de cáncer, hay opciones de tratamiento<br /><em>que vale la pena conocer</em>
          </div>
          <div className="banda-emocional__cta">
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
          </div>
        </div>
      </div>

      {/* FOR VETS + CONTACT — premium dark split */}
      <section className="pc-contact-section" id="contact" aria-labelledby="contact-heading">

        {/* Top: vet referral band */}
        <div className="pc-contact-vet">
          <div className="pc-contact-vet__inner">
            <div className="pc-contact-vet__left">
              <div className="eyebrow eyebrow--claro">Para veterinarios derivantes</div>
              <div className="pc-contact-vet__title">Un aliado en <em>radioterapia</em><br />para tu clínica</div>
              <p className="pc-contact-vet__text">Te mantenemos informado durante el tratamiento y, al terminar, el paciente vuelve a tu clínica.</p>
            </div>
            <Link href={esPath('/for-veterinarians')} className="pc-contact-vet__btn">
              Información para veterinarios derivantes →
            </Link>
          </div>
        </div>

        {/* Bottom: contact + form */}
        <div className="pc-contact-main">
          <div className="pc-contact-main__inner">

            {/* Left: info */}
            <div className="pc-contact-info">
              <div className="eyebrow eyebrow--claro">Contacto</div>
              <h2 id="contact-heading" className="pc-contact-info__h2">
                Hablemos sobre<br /><em>la atención de tu mascota</em>
              </h2>
              <p className="pc-contact-info__sub">
                ¿Quieres saber si la radioterapia es una opción para tu perro o tu gato? Nuestra radiooncóloga revisa personalmente cada caso.
              </p>

              <div className="pc-contact-info__items">
                <a href={phoneHref} className="pc-contact-info__item">
                  <div className="pc-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="pc-contact-info__label">Teléfono</div>
                    <div className="pc-contact-info__val">{phone}</div>
                  </div>
                </a>
                <a href={`mailto:${email}`} className="pc-contact-info__item">
                  <div className="pc-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="pc-contact-info__label">Correo electrónico</div>
                    <div className="pc-contact-info__val">{email}</div>
                  </div>
                </a>
                <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener" className="pc-contact-info__item">
                  <div className="pc-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="pc-contact-info__label">Ubicación</div>
                    <div className="pc-contact-info__val">{CONTACT_INFO.address}</div>
                  </div>
                </a>
              </div>

              <div className="pc-contact-hours">
                <div className="pc-contact-hours__title">Horario de atención</div>
                <div className="pc-contact-hours__row"><span>Lunes a jueves</span><span>8:00 a. m. a 5:00 p. m.</span></div>
                <div className="pc-contact-hours__row"><span>Viernes a domingo</span><span className="pc-contact-hours__closed">Cerrado</span></div>
              </div>
            </div>

            {/* Right: form card */}
            <div className="pc-contact-form">
              <div className="pc-contact-form__header">
                <div className="pc-contact-form__dot" aria-hidden="true" />
                <span className="pc-contact-form__label">Agendar una consulta</span>
              </div>
              <div className="pc-contact-form__title">Hablemos sobre<br />las opciones para tu mascota</div>
              
              <FormContact variant="light" lang="es" />
            </div>

          </div>
        </div>

      </section>

    </>
  )
}

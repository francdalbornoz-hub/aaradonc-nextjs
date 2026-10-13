import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'

const pageSeo = getPageSeoEs('/dog-cancer')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const CANCER_TYPES = [
  { num: '01', name: 'Tumores nasales', href: esPath('/nasal-tumors'), desc: 'Es uno de los tumores en los que la radioterapia tiene mayor respaldo en perros. Los carcinomas y sarcomas de la cavidad nasal responden bien a este tratamiento, que es el estándar y puede prolongar la sobrevida.', tag: 'SBRT · Intención curativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10"/><path d="M12 8v4"/><path d="M15 5l-3 3-3-3"/><circle cx="18" cy="6" r="3"/></svg> },
  { num: '02', name: 'Tumores cerebrales', href: esPath('/brain-tumors'), desc: 'Los meningiomas y los gliomas suelen tratarse con radioterapia.', tag: 'SRS/SRT · CFRT', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg> },
  { num: '03', name: 'Mastocitomas', href: esPath('/mast-cell-tumors'), desc: 'La radioterapia es muy eficaz para el control local cuando los márgenes quirúrgicos son incompletos, y reduce el riesgo de recidiva.', tag: 'CFRT · Intención curativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
  { num: '04', name: 'Sarcomas de tejidos blandos', href: esPath('/soft-tissue-sarcomas'), desc: 'Cuando la resección es incompleta, la radioterapia posquirúrgica reduce el riesgo de recidiva local.', tag: 'CFRT · Posquirúrgica', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { num: '05', name: 'Cáncer óseo (osteosarcoma)', href: esPath('/osteosarcoma'), desc: 'En el osteosarcoma, la radioterapia paliativa ayuda a aliviar el dolor y a mejorar la movilidad. Muchos perros muestran más bienestar desde las primeras sesiones.', tag: 'Paliativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a3 3 0 0 1 0 6"/><path d="M6 8a3 3 0 0 0 0 6"/><line x1="8" y1="11" x2="16" y2="11"/></svg> },
  { num: '06', name: 'Linfoma', href: esPath('/lymphoma'), desc: 'La radioterapia puede utilizarse junto con la quimioterapia, sobre todo para tratar zonas específicas o cuando el cáncer reaparece.', tag: 'CFRT · Paliativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
]

const PROTOCOLS = [
  { id: 'cfrt', eyebrow: 'Intención curativa', title: 'CFRT', sessions: 'De 10 a 20 · lunes a jueves', intent: 'Curativa', bestFor: 'Tumores cerebrales · Mastocitomas · Sarcomas de tejidos blandos', desc: 'Se utiliza en muchos tumores sólidos, con intención curativa o como radioterapia posquirúrgica. Al dividir la dosis en varias sesiones, los tejidos sanos se recuperan entre una y otra.', href: `${esPath('/radiation-therapy')}#cfrt`, featured: false },
  { id: 'srs', eyebrow: 'Estereotáctica · Dosis altas', title: 'SRS / SRT', sessions: 'De 1 a 5 en total', intent: 'Dosis altas y localizadas', bestFor: 'Tumores cerebrales · Lesiones focales', desc: 'Concentra dosis altas en el tumor, a veces en una sola sesión. Suele indicarse en tumores pequeños y bien delimitados, y requiere menos anestesias.', href: `${esPath('/radiation-therapy')}#srs-srt`, featured: true },
  { id: 'pal', eyebrow: 'Enfocada en el bienestar', title: 'Radioterapia paliativa', sessions: 'De 3 a 6 · semanales', intent: 'Alivio del dolor · Calidad de vida', bestFor: 'Osteosarcoma · Enfermedad avanzada', desc: 'Se enfoca en aliviar el dolor y mejorar la calidad de vida. Es especialmente útil en el cáncer óseo.', href: `${esPath('/radiation-therapy')}#palliative`, featured: false },
]

export default function DogCancerPageEs() {
  return (
    <>
      <div id="no-footer-cta" style={{ display: 'none' }} aria-hidden="true" />
      {/* HERO */}
      <section className="sp-hero" aria-label="Radioterapia para perros con cáncer">
        <div className="sp-hero__bg">
          <Image src="/images/dog-golden.jpg" alt="Perro en tratamiento contra el cáncer en AARADONC, Palm Beach, Florida" fill style={{ objectFit: 'cover', objectPosition: 'center 25%' }} priority />
        </div>
        <div className="sp-hero__overlay" />
        <div className="sp-hero__content">
          <div className="sp-hero__left">
            <div className="sp-hero__label">Cáncer en perros · Condado de Palm Beach, Florida</div>
            <h1 className="sp-hero__h1">
              Radioterapia<br />
              <em>para perros con cáncer</em><br />
              en Florida
            </h1>
            <p className="sp-hero__sub">Si tu perro tiene cáncer, la orientación de una especialista te ayuda a decidir cómo seguir. En AARADONC, nuestra radiooncóloga certificada evalúa su caso y planifica personalmente el tratamiento.</p>
            <div className="sp-hero__ctas">
              <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
              <Link href="#cancer-types" className="cta-secundario" style={{ color: 'rgba(255,255,255,.8)', borderColor: 'rgba(255,255,255,.2)' }}>Ver qué tratamos ↓</Link>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="sp-editorial" aria-labelledby="editorial-heading">
        <div className="sp-editorial__main">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Por qué elegir la radioterapia para tu perro</div>
          <div id="editorial-heading" className="sp-editorial__quote">
            La <em>misma tecnología que se usa en oncología humana</em>, aplicada por una especialista en radioterapia veterinaria
          </div>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>En AARADONC solo hacemos radioterapia; no hacemos oncología clínica. Por eso trabajamos junto al veterinario o al oncólogo de tu perro.</p>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>Planificamos cada tratamiento según el tipo y la ubicación del tumor, la extensión de la enfermedad y el estado general de tu perro, y las prioridades de tu familia. La Dra. DiBernardi, especialista en radioterapia y oncología médica, evalúa personalmente cada caso.</p>
          <p className="sp-editorial__body">La radioterapia no es adecuada para todos los perros, pero puede ser una buena opción en determinados casos. Desde la primera consulta, te explicamos qué podemos esperar del tratamiento y cómo te acompañaremos en cada etapa.</p>
        </div>
        <div className="sp-editorial__img">
          <div className="sp-editorial__img-wrap">
            <Image src="/images/couple-with-dog.webp" alt="Familia con su perro en Animal Alliance Radiation Oncology" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* CANCER TYPES */}
      <section className="seccion seccion--gris" id="cancer-types" aria-labelledby="types-heading">
        <div className="contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Qué tratamos</div>
              <h2 id="types-heading" className="titulo-seccion" style={{ marginBottom: 0 }}>Cánceres frecuentes en perros<br />que responden a la <em>radioterapia</em></h2>
            </div>
            <p className="bajada" style={{ marginBottom: 0 }}>La radioterapia puede formar parte del tratamiento de distintos tipos de cáncer en perros. Estos son algunos de ellos, con los protocolos que suelen utilizarse en cada caso.</p>
          </div>
          <div className="sp-grid">
            {CANCER_TYPES.map((c) => (
              <Link key={c.num} href={c.href} className="sp-card">
                <div className="sp-card__icon-wrap">{c.icon}</div>
                <div className="sp-card__num">{c.num}</div>
                <div className="sp-card__name">{c.name}</div>
                <p className="sp-card__desc">{c.desc}</p>
                <span className="sp-card__tag">{c.tag}</span>
                <div className="sp-card__link">Más información <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLS */}
      <section className="sp-proto-section" aria-labelledby="protocols-heading">
        <div className="sp-proto-section__bg">
          <Image src="/images/linac-room.webp" alt="Sala de radioterapia veterinaria de AARADONC" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="sp-proto-section__overlay" />
        <div className="sp-proto-section__inner contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow eyebrow--claro" style={{ marginBottom: 16 }}>Protocolos de tratamiento</div>
              <h2 id="protocols-heading" className="titulo-seccion" style={{ color: '#fff', marginBottom: 0 }}>El protocolo adecuado para<br /><em style={{ color: '#7EC8E3' }}>el cáncer de tu perro</em></h2>
            </div>
            <p className="bajada" style={{ color: 'rgba(255,255,255,.55)', marginBottom: 0 }}>La indicación depende del tipo, la ubicación y el estadio del tumor, así como de las necesidades de tu perro y las prioridades de tu familia.</p>
          </div>
          <div className="sp-protos">
            {PROTOCOLS.map((p) => (
              <Link key={p.id} href={p.href} className={`sp-proto${p.featured ? ' sp-proto--featured' : ''}`}>
                <div className="sp-proto__inner">
                  <div className="sp-proto__eyebrow">{p.eyebrow}</div>
                  <div className="sp-proto__title">{p.title}</div>
                  <div className="sp-proto__specs">
                    <div className="sp-proto__spec"><span className="sp-proto__spec-key">Sesiones</span><span className="sp-proto__spec-val">{p.sessions}</span></div>
                    <div className="sp-proto__spec"><span className="sp-proto__spec-key">Intención</span><span className="sp-proto__spec-val">{p.intent}</span></div>
                    <div className="sp-proto__spec"><span className="sp-proto__spec-key">Se usa en</span><span className="sp-proto__spec-val">{p.bestFor}</span></div>
                  </div>
                  <p className="sp-proto__desc">{p.desc}</p>
                  <div className="sp-proto__cta">Más información →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="sp-cta">
        <div className="sp-cta__col sp-cta__col--a">
          <div className="sp-cta__pretitle">Para familias</div>
          <div className="sp-cta__title">La <em>opinión de una especialista</em><br />para tu perro</div>
          <p className="sp-cta__text">La Dra. DiBernardi revisará personalmente el caso de tu perro y te dará una recomendación clara.</p>
          <Link href={esPath('/contact-pet-owners')} className="sp-cta__btn-light">Agendar una consulta →</Link>
        </div>
        <div className="sp-cta__col sp-cta__col--b">
          <div className="sp-cta__pretitle">Para veterinarios</div>
          <div className="sp-cta__title">Derivar un caso<br /><em>de oncología canina</em></div>
          <p className="sp-cta__text">Confirmamos cada derivación con rapidez, te mantenemos informado durante todo el tratamiento y puedes hablar directamente con la radiooncóloga.</p>
          <Link href={esPath('/contact-referrers')} className="sp-cta__btn-dark">Derivar un paciente →</Link>
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'

const pageSeo = getPageSeoEs('/cat-cancer')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const CANCER_TYPES = [
  { num: '01', name: 'Tumores nasales', href: esPath('/nasal-tumors'), desc: 'Los adenocarcinomas y linfomas de la cavidad nasal están entre los cánceres felinos que mejor responden. La radioterapia es uno de los principales tratamientos y puede prolongar la sobrevida y mejorar la calidad de vida.', tag: 'CFRT · Intención curativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { num: '02', name: 'Tumores cerebrales', href: esPath('/brain-tumors'), desc: 'Los meningiomas son frecuentes en gatos mayores. La cirugía suele ofrecer el mejor resultado a largo plazo; cuando no es posible, la radioterapia estereotáctica (SRS/SRT) es una opción eficaz.', tag: 'SRS/SRT · CFRT', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg> },
  { num: '03', name: 'Linfoma', href: esPath('/lymphoma'), desc: 'Es uno de los cánceres más frecuentes en gatos. La radioterapia, sola o junto con la quimioterapia, se utiliza sobre todo en el linfoma localizado: nasal, mediastínico y espinal.', tag: 'CFRT · Paliativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="5"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(120 12 12)"/></svg> },
  { num: '04', name: 'Sarcoma asociado al punto de inyección', href: esPath('/vaccine-associated-sarcoma'), desc: 'El sarcoma asociado al punto de inyección es agresivo y tiende a la recidiva local. Junto con la cirugía, la radioterapia es parte del tratamiento estándar y reduce el riesgo de recidiva.', tag: 'CFRT · Paliativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4"/><path d="m17 3-4 4L7 11l-4 4"/><path d="m14 14-1 1"/><path d="m3 21 6.5-1.5L18 11"/></svg> },
  { num: '05', name: 'Carcinoma de células escamosas', href: esPath('/oral-squamous-cell-carcinoma'), desc: 'El carcinoma de células escamosas del plano nasal suele responder bien a la radioterapia. El carcinoma oral es más difícil de tratar, y la radioterapia se utiliza sobre todo para aliviar el dolor y mejorar el bienestar.', tag: 'CFRT · Paliativa', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
]

const PROTOCOLS = [
  { id: 'cfrt', eyebrow: 'Intención curativa', title: 'CFRT', sessions: 'De 10 a 20 · lunes a jueves', intent: 'Curativa', bestFor: 'Tumores nasales · Linfoma · Sarcoma asociado al punto de inyección', desc: 'Se utiliza en tumores nasales, linfoma localizado y sarcomas asociados al punto de inyección. Al dividir la dosis en varias sesiones, los tejidos sanos se recuperan entre una y otra.', href: `${esPath('/radiation-therapy')}#cfrt`, featured: false },
  { id: 'srs', eyebrow: 'Estereotáctica · Dosis altas', title: 'SRS / SRT', sessions: 'De 1 a 5 en total', intent: 'Dosis altas y localizadas', bestFor: 'Tumores cerebrales cuando la cirugía no es una opción', desc: 'Concentra dosis altas en el tumor, a veces en una sola sesión. Requiere menos anestesias, algo importante en gatos mayores.', href: `${esPath('/radiation-therapy')}#srs-srt`, featured: true },
  { id: 'pal', eyebrow: 'Enfocada en el bienestar', title: 'Radioterapia paliativa', sessions: 'De 3 a 6 · semanales', intent: 'Alivio del dolor · Calidad de vida', bestFor: 'Enfermedad avanzada · Carcinoma de células escamosas', desc: 'Cuando el objetivo no es curativo, la radioterapia paliativa puede reducir el volumen tumoral, aliviar el dolor y mejorar el bienestar y la vida diaria de tu gato.', href: `${esPath('/radiation-therapy')}#palliative`, featured: false },
]

export default function CatCancerPageEs() {
  return (
    <>
      <div id="no-footer-cta" style={{ display: 'none' }} aria-hidden="true" />
      {/* HERO */}
      <section className="sp-hero" aria-label="Radioterapia para gatos con cáncer">
        <div className="sp-hero__bg">
          <Image src="/images/cat-patient.jpg" alt="Gato en tratamiento contra el cáncer en AARADONC, Palm Beach, Florida" fill style={{ objectFit: 'cover', objectPosition: 'center 25%' }} priority />
        </div>
        <div className="sp-hero__overlay" />
        <div className="sp-hero__content">
          <div className="sp-hero__left">
            <div className="sp-hero__label">Cáncer en gatos · Condado de Palm Beach, Florida</div>
            <h1 className="sp-hero__h1">
              Radioterapia<br />
              para gatos con cáncer<br />
              <em>en Florida</em>
            </h1>
            <p className="sp-hero__sub">Los gatos esconden por instinto los signos de enfermedad, por eso el cáncer suele detectarse tarde. En AARADONC, nuestra radiooncóloga certificada te acompaña y planifica el tratamiento de tu gato según el tipo de cáncer y sus necesidades.</p>
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
          <div className="eyebrow" style={{ marginBottom: 24 }}>Por qué elegir la radioterapia para tu gato</div>
          <div id="editorial-heading" className="sp-editorial__quote">
            El cáncer en gatos requiere una <em>especialista que conozca la biología felina</em> y protocolos pensados para ellos
          </div>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>Los tumores en los gatos se comportan de forma distinta que en los perros. Por eso, los protocolos para gatos tienen en cuenta su anatomía, el comportamiento del tumor y que suelen ocultar el dolor.</p>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>Planificamos cada tratamiento según el tipo y la ubicación del tumor, la extensión de la enfermedad y el estado general de tu gato, y las prioridades de tu familia. La Dra. DiBernardi, especialista en radioterapia y oncología médica, evalúa personalmente cada caso.</p>
          <p className="sp-editorial__body">Desde la primera consulta, te explicamos con claridad el pronóstico y qué podemos esperar del tratamiento. Tanto si el objetivo es curativo como si es mejorar la calidad de vida, te acompañamos para que decidas con toda la información.</p>
        </div>
        <div className="sp-editorial__img">
          <div className="sp-editorial__img-wrap">
            <Image src="/images/vet-with-animal.webp" alt="Radiooncóloga veterinaria con un gato en Animal Alliance Radiation Oncology, Florida" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* CANCER TYPES */}
      <section className="seccion seccion--gris" id="cancer-types" aria-labelledby="types-heading">
        <div className="contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Qué tratamos</div>
              <h2 id="types-heading" className="titulo-seccion" style={{ marginBottom: 0 }}>Cánceres frecuentes en gatos<br />que responden a la <em>radioterapia</em></h2>
            </div>
            <p className="bajada" style={{ marginBottom: 0 }}>La radioterapia puede formar parte del tratamiento de distintos tipos de cáncer en gatos. Estos son algunos de ellos, con los protocolos que suelen utilizarse en cada caso.</p>
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
          <Image src="/images/linac-room.webp" alt="Radioterapia veterinaria en AARADONC" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="sp-proto-section__overlay" />
        <div className="sp-proto-section__inner contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow eyebrow--claro" style={{ marginBottom: 16 }}>Protocolos de tratamiento</div>
              <h2 id="protocols-heading" className="titulo-seccion" style={{ color: '#fff', marginBottom: 0 }}>El protocolo adecuado para<br /><em style={{ color: '#7EC8E3' }}>el cáncer de tu gato</em></h2>
            </div>
            <p className="bajada" style={{ color: 'rgba(255,255,255,.55)', marginBottom: 0 }}>La indicación depende del tipo, la ubicación y el estadio del tumor, así como de las necesidades de tu gato y las prioridades de tu familia.</p>
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
          <div className="sp-cta__title">La <em>opinión de una especialista</em><br />para tu gato</div>
          <p className="sp-cta__text">La Dra. DiBernardi revisará personalmente el caso de tu gato y te dará una recomendación clara.</p>
          <Link href={esPath('/contact-pet-owners')} className="sp-cta__btn-light">Agendar una consulta →</Link>
        </div>
        <div className="sp-cta__col sp-cta__col--b">
          <div className="sp-cta__pretitle">Para veterinarios</div>
          <div className="sp-cta__title">Derivar un caso<br /><em>de oncología felina</em></div>
          <p className="sp-cta__text">Confirmamos cada derivación con rapidez, te mantenemos informado durante todo el tratamiento y puedes hablar directamente con la radiooncóloga.</p>
          <Link href={esPath('/contact-referrers')} className="sp-cta__btn-dark">Derivar un paciente →</Link>
        </div>
      </div>
    </>
  )
}

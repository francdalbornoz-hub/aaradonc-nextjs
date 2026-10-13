import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeoEs('/radiation-oncologist')

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RadiationOncologistPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — split photo / content
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="onc-hero" aria-label="Portada de la Dra. DiBernardi">
        {/* Photo */}
        <div className="onc-hero__photo">
          <Image
            src="/images/dr-dibernardi.webp"
            alt="La Dra. Lisa DiBernardi, radiooncóloga veterinaria de AARADONC en Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div className="onc-hero__name-float">
            <div className="onc-hero__name">Dra. Lisa DiBernardi</div>
            <div className="onc-hero__creds">DVM · Diplomate ACVR (Radiation Oncology) · Diplomate ACVIM (Oncology)</div>
          </div>
        </div>

        {/* Content */}
        <div className="onc-hero__content">
          <div className="onc-hero__inner">
            <div className="eyebrow eyebrow--claro" style={{ marginBottom: 24 }}>
              Nuestra radiooncóloga · Royal Palm Beach, Florida
            </div>
            <h1 className="onc-hero__tagline">
              Atención directa<br />de una <em>radiooncóloga</em><br />certificada
            </h1>
            <p className="onc-hero__intro">
              AARADONC se dedica exclusivamente a la radioterapia veterinaria. La Dra. Lisa DiBernardi tiene más de 20 años de experiencia en oncología y doble certificación de especialidad, en radioterapia oncológica y en oncología médica. Planifica personalmente el tratamiento de cada paciente.
            </p>
            <div className="onc-hero__badges">
              <div className="onc-hero__badge">
                <div className="onc-hero__badge-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="onc-hero__badge-title">DACVR-RO · Radioterapia oncológica</div>
                  <div className="onc-hero__badge-sub">Diplomada del American College of Veterinary Radiology</div>
                </div>
              </div>
              <div className="onc-hero__badge">
                <div className="onc-hero__badge-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="onc-hero__badge-title">Más de 20 años de experiencia clínica</div>
                  <div className="onc-hero__badge-sub">Hospitales de referencia especializados · Oncología en animales de zoológico y fauna silvestre</div>
                </div>
              </div>
              <div className="onc-hero__badge">
                <div className="onc-hero__badge-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <div className="onc-hero__badge-title">Certificada en oncología médica</div>
                  <div className="onc-hero__badge-sub">Diplomada del American College of Veterinary Internal Medicine</div>
                </div>
              </div>
            </div>
            <div className="onc-hero__cta-row">
              <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
              <Link href={esPath('/for-veterinarians')} className="cta-secundario" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.22)' }}>
                Derivar un paciente →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BIO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="bio-heading">
        <div className="contenedor">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Biografía</div>
          <div className="onc-bio">
            <div className="onc-bio__text">
              <p>
                La Dra. Lisa DiBernardi, DVM, es radiooncóloga veterinaria certificada y atiende a
                pacientes de toda Florida en el centro de AARADONC en Royal Palm Beach.
                Con <strong>más de 20 años de experiencia en oncología</strong>,
                dirige la planificación y las sesiones de radioterapia de cada paciente.
              </p>
              <p>
                La Dra. DiBernardi está <strong>certificada en radioterapia oncológica (DACVR-RO)</strong>, la
                especialidad veterinaria dedicada a la radioterapia. También tiene la certificación
                de especialidad en <strong>oncología médica (DACVIM)</strong>, que suma conocimiento
                en biología y tratamiento del cáncer. Esta doble especialidad le da una visión completa del caso al planificar el tratamiento y al trabajar con veterinarios derivantes y otros especialistas de toda Florida.
              </p>
              <p>
                Desarrolló su carrera en <strong>hospitales de referencia especializados</strong> y trabajó
                junto a <strong>zoológicos y organizaciones de fauna silvestre</strong>. 
              </p>
              <p>
                En cada tratamiento, cuida tanto el control del tumor como la calidad de vida del paciente.
              </p>
              <Link href={esPath('/contact-pet-owners')} className="cta-primario" style={{ display: 'inline-flex', marginTop: 24 }}>
                Agendar una consulta →
              </Link>
            </div>

            <div className="onc-bio__panel" aria-label="Certificaciones y áreas clínicas">
              <div className="onc-bio__stat">
                <div className="onc-bio__stat-val">20<span>+ años</span></div>
                <div className="onc-bio__stat-label">De experiencia en oncología</div>
              </div>
              <div className="onc-bio__stat">
                <div className="onc-bio__stat-val">2<span>x</span></div>
                <div className="onc-bio__stat-label">Doble certificación de especialidad: radioterapia oncológica y oncología médica</div>
              </div>
              <div className="onc-bio__card">
                <div className="onc-bio__card-title">Certificaciones</div>
                {[
                  { icon: 'check', text: 'DACVR-RO · Radioterapia oncológica' },
                  { icon: 'check', text: 'DACVIM · Oncología médica' },
                  { icon: 'check', text: 'DVM' },
                ].map(({ text }) => (
                  <div key={text} className="onc-bio__card-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {text}
                  </div>
                ))}
              </div>
              <div className="onc-bio__card">
                <div className="onc-bio__card-title">Áreas clínicas</div>
                {[
                  'Radioterapia fraccionada convencional (CFRT) · Radioterapia paliativa · Radioterapia estereotáctica (SRS/SBRT/SRT)',
                  'Oncología de pequeños animales · Perros y gatos',
                  'Radioterapia en animales de zoológico',
                ].map((text) => (
                  <div key={text} className="onc-bio__card-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PHILOSOPHY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="onc-philosophy" aria-labelledby="philosophy-heading">
        <div className="onc-philosophy__inner">
          <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center', marginBottom: 28 }}>
            Filosofía clínica
          </div>
          <blockquote className="onc-philosophy__quote">
            &ldquo;El tratamiento del cáncer tiene que ser siempre <em>personalizado.</em> Cada protocolo
            de radioterapia se diseña según el diagnóstico, el estado del paciente
            y los objetivos de la familia.&rdquo;
          </blockquote>
          <div className="onc-philosophy__attr">
            Dra. Lisa DiBernardi, DACVR-RO · AARADONC · Royal Palm Beach, Florida
          </div>
          <div className="onc-philosophy__pillars" role="list">
            <div className="onc-pillar" role="listitem">
              <div className="onc-pillar__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="onc-pillar__title">Planificación individual</div>
              <p className="onc-pillar__text">
                Planificamos cada tratamiento con imágenes de tomografía en 3D para tratar el tumor y proteger los tejidos sanos cercanos.
              </p>
            </div>
            <div className="onc-pillar" role="listitem">
              <div className="onc-pillar__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="onc-pillar__title">Atención cercana</div>
              <p className="onc-pillar__text">
                La Dra. DiBernardi dedica tiempo a cada familia: explica el tratamiento con claridad y
                responde todas sus preguntas, para que se sienta informada y acompañada en cada etapa.
              </p>
            </div>
            <div className="onc-pillar" role="listitem">
              <div className="onc-pillar__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="onc-pillar__title">Trabajo en coordinación</div>
              <p className="onc-pillar__text">
                La Dra. DiBernardi trabaja junto a veterinarios derivantes y especialistas de toda
                Florida para definir cada tratamiento. Tu veterinario habitual sigue a cargo del
                cuidado de tu mascota, y nosotros sumamos la radioterapia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="onc-cta">
        <div className="onc-cta__col onc-cta__col--owners">
          <div className="onc-cta__pretitle">Para familias</div>
          <div className="onc-cta__title">
            Conoce a la Dra. DiBernardi<br /><em>Agenda tu consulta</em>
          </div>
          <p className="onc-cta__text">
            La Dra. DiBernardi revisará personalmente el caso de tu mascota y te responderá a la
            brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="onc-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="onc-cta__col onc-cta__col--vets">
          <div className="onc-cta__pretitle">Para veterinarios</div>
          <div className="onc-cta__title">
            Comenta un caso<br />con la <em>Dra. DiBernardi</em>
          </div>
          <p className="onc-cta__text">
            Puedes consultarla antes de derivar y en cualquier etapa del tratamiento.
          </p>
          <Link href={esPath('/for-veterinarians')} className="onc-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}

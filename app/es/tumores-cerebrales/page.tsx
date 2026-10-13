import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (intracranial
// tumors respond to definitive/stereotactic radiation; meningioma in cats).
const REFERENCES: Reference[] = [
  { authors: 'Schwarz P, et al.', year: '2018', title: 'Comparative evaluation of a novel, moderately hypofractionated radiation protocol in 56 dogs with symptomatic intracranial neoplasia', source: 'J Vet Intern Med' },
  { authors: 'Treggiari E, et al.', year: '2016', title: 'Retrospective comparison of three-dimensional conformal radiation therapy vs. prednisolone alone in 30 cases of canine infratentorial brain tumors', source: 'Vet Radiol Ultrasound' },
  { authors: 'Kelsey KL, Gieger TL, Nolan MW', year: '2018', title: 'Single fraction stereotactic radiation therapy (stereotactic radiosurgery) is a feasible method for treating intracranial meningiomas in dogs', source: 'Vet Radiol Ultrasound' },
]

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeoEs('/brain-tumors')

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

const INFO_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrainTumorsPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="cond-hero" aria-label="Radioterapia para tumores cerebrales">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Radioterapia veterinaria para tumores cerebrales · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/pet-cancer')}>Cáncer en mascotas</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Tumores cerebrales</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para tumores cerebrales · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />tumores cerebrales<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            La radioterapia es una de las principales opciones de tratamiento para muchos tumores cerebrales. En AARADONC, está a cargo de una radiooncóloga certificada.
          </p>
          <div className="cond-hero__ctas">
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          EDITORIAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" aria-hidden="true" />
            <div className="cond-editorial__kicker-text">Tumores cerebrales en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Qué opciones de<br /><em>tratamiento existen</em>
          </h2>
          <p className="cond-editorial__lead">
            Un tumor cerebral es un diagnóstico complejo, pero existen opciones. En muchos casos la radioterapia es el tratamiento principal.
          </p>
          <p className="cond-editorial__body">
            Los tumores cerebrales más frecuentes en perros y gatos son los meningiomas, los gliomas y
            los tumores de los plexos coroideos. Como el cráneo es un espacio cerrado, incluso un
            crecimiento gradual puede causar signos neurológicos que parecen aparecer de repente y
            empeorar en poco tiempo.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>En los gatos, los meningiomas suelen poder operarse</strong>, y la cirugía ofrece
              los mejores resultados a largo plazo. Cuando no es posible operar, la radioterapia es una
              alternativa eficaz para el control local y la calidad de vida. La cirugía también puede
              indicarse para confirmar el diagnóstico, reducir el volumen del tumor o aliviar la presión
              intracraneal, aunque no siempre es posible extirparlo por completo.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Cuando aparecen signos neurológicos</h3>
          <p className="cond-editorial__body">
            Los signos de un tumor cerebral pueden incluir convulsiones, cambios de comportamiento o de
            carácter, caminar en círculos o alteraciones del estado de alerta, inclinación de la
            cabeza, pérdida de coordinación, debilidad, cambios en la visión y dificultad para caminar.
            Los signos pueden avanzar a medida que el tumor crece. Por eso conviene consultar pronto:
            una evaluación temprana ayuda a confirmar el diagnóstico e indicar el tratamiento más adecuado.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi, DACVR-RO</strong>, nuestra radiooncóloga
              certificada, revisa personalmente cada caso de tumor cerebral. Te explica el pronóstico,
              planifica el tratamiento y te mantiene informado durante todo el proceso.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RELATED TUMOR TYPES
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          BRIDGE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          HOW WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}


      <References items={REFERENCES} lang="es" />

      {/* ══════════════════════════════════════════════════════════════════════
          CTA DUAL
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">Para las familias</div>
          <div className="cond-cta__title">
            Evaluación de una especialista<br /><em>Respuesta rápida</em>
          </div>
          <p className="cond-cta__text">
            Cuéntanos sobre tu mascota y te
            responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios derivantes</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>un tumor cerebral</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Nos coordinamos
            directamente con tu clínica durante todo el tratamiento.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}

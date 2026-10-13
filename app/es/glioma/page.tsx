import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (radiation as
// primary treatment for canine gliomas; reported median survival by protocol).
const REFERENCES: Reference[] = [
  { authors: 'Debreuque M, et al.', year: '2020', title: 'Definitive-intent uniform megavoltage fractionated radiotherapy protocol for presumed canine intracranial gliomas: retrospective analysis of survival and prognostic factors in 38 cases (2013–2019)', source: 'BMC Vet Res' },
  { authors: 'Treggiari E, et al.', year: '2016', title: 'Retrospective comparison of three-dimensional conformal radiation therapy vs. prednisolone alone in 30 cases of canine infratentorial brain tumors', source: 'Vet Radiol Ultrasound' },
  { authors: 'Schwarz P, et al.', year: '2018', title: 'Comparative evaluation of a novel, moderately hypofractionated radiation protocol in 56 dogs with symptomatic intracranial neoplasia', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeoEs('/glioma')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const INFO_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

export default function GliomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para glioma">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Radioterapia para glioma en perros · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/brain-tumors')}>Tumores cerebrales</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Glioma</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para glioma · Principalmente perros · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia<br />para glioma<br /><em>en perros</em>
          </h1>
          <p className="cond-hero__sub">
            Los gliomas son tumores cerebrales que se extienden hacia el tejido que los rodea y son muy
            difíciles de extirpar por completo con cirugía. La radioterapia es el tratamiento
            principal: ayuda a controlar el crecimiento del tumor, reducir las convulsiones y mantener
            la calidad de vida.
          </p>
          <div className="cond-hero__ctas">
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" aria-hidden="true" />
            <div className="cond-editorial__kicker-text">El glioma en perros</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Un tumor que crece<br /><em>dentro del cerebro</em>
          </h2>
          <p className="cond-editorial__lead">
            Los gliomas se diferencian de los meningiomas en algo fundamental: crecen dentro del tejido
            cerebral en lugar de comprimirlo desde afuera.
          </p>
          <p className="cond-editorial__body">
            Los gliomas son más frecuentes en razas braquicéfalas, como el bóxer, el bulldog inglés, el
            Boston terrier y el bulldog francés, y suelen aparecer en perros de mediana edad o mayores.
            Si tu perro es de raza braquicéfala, tiene más de 5 años y empieza a tener convulsiones,
            conviene consultar con tu veterinario para hacer una resonancia magnética que descarte una
            masa intracraneal.
          </p>
          <h3 className="cond-editorial__h3">Qué logra la radioterapia y qué esperar</h3>
          <p className="cond-editorial__body">
            La radioterapia para el glioma ayuda a controlar la progresión local del tumor, reduce la
            presión intracraneal y puede disminuir la frecuencia de las convulsiones.
            Muchos perros muestran una mejoría neurológica después del tratamiento.
            Los estudios publicados reportan medianas de sobrevida de alrededor de 2 años en perros
            tratados con radioterapia (por ejemplo, 698 días en Debreuque et al., 2020).
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Las razas braquicéfalas tienen una predisposición conocida al glioma.</strong>{' '}
              El bóxer, el bulldog y el Boston terrier concentran una proporción alta de los casos en perros.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Cómo se indica el protocolo</h3>
          <p className="cond-editorial__body">
            El protocolo de radioterapia para el glioma depende de las características del tumor en la
            resonancia magnética: su tamaño, la definición de sus bordes y su ubicación. La Dra.
            DiBernardi indica el abordaje más adecuado después de evaluar el caso completo.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              glioma (resonancia magnética, estadiamiento y estado neurológico) antes de planificar el
              tratamiento de tu perro.
            </div>
          </div>
        </div>
      </section>



      <References items={REFERENCES} lang="es" />

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">Para las familias</div>
          <div className="cond-cta__title">
            Evaluación de una especialista<br /><em>Respuesta rápida</em>
          </div>
          <p className="cond-cta__text">
            Cuéntanos sobre tu perro y te
            responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios derivantes</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>glioma</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Nos coordinamos
            directamente con tu clínica durante todo el tratamiento y te enviamos informes completos.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}

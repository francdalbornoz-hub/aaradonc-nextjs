import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (fibrosarcoma is an
// infiltrative soft-tissue sarcoma; surgery + adjuvant radiation for control).
const REFERENCES: Reference[] = [
  { authors: 'Cronin K, et al.', year: '1998', title: 'Radiation therapy and surgery for fibrosarcoma in 33 cats', source: 'Vet Radiol Ultrasound' },
  { authors: 'Kung MBJ, et al.', year: '2014', title: 'Hypofractionated radiation therapy for the treatment of microscopic canine soft tissue sarcoma', source: 'Vet Comp Oncol' },
]

const pageSeo = getPageSeoEs('/fibrosarcoma')

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

export default function FibrosarcomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para fibrosarcoma">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Radioterapia para fibrosarcoma en perros y gatos · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/oral-tumors')}>Tumores orales</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Fibrosarcoma</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para fibrosarcoma · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />fibrosarcoma<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            Los fibrosarcomas se extienden hacia el tejido que los rodea, por lo que suele ser difícil
            lograr márgenes quirúrgicos completos. La radioterapia posquirúrgica es el tratamiento
            estándar: reduce el riesgo de recidiva local y prolonga el tiempo libre de enfermedad.
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
            <div className="cond-editorial__kicker-text">El fibrosarcoma en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Cirugía y radioterapia, en conjunto
          </h2>
          <p className="cond-editorial__lead">
            Los fibrosarcomas se caracterizan por su crecimiento infiltrativo: forman extensiones
            microscópicas que llegan mucho más allá de lo que se puede ver o palpar. Por eso, incluso
            cuando la extirpación parece completa, pueden quedar células tumorales, y suele recomendarse
            radioterapia posquirúrgica para eliminarlas.
          </p>
          <p className="cond-editorial__body">
            En perros, el fibrosarcoma aparece con más frecuencia en la boca (encía, paladar duro y maxilar), donde la cercanía al hueso hace especialmente difícil extirparlo por completo.
            También puede aparecer debajo de la piel y en las extremidades. En gatos, el fibrosarcoma
            oral es menos frecuente que el carcinoma de células escamosas, pero el sarcoma asociado al punto de inyección es un tumor agresivo cuyo
            tratamiento suele combinar cirugía y radioterapia.
          </p>
          <h3 className="cond-editorial__h3">Radioterapia posquirúrgica o con intención curativa</h3>
          <p className="cond-editorial__body">
            La radioterapia posquirúrgica es el abordaje estándar cuando se extirpa el tumor pero los
            márgenes quedan estrechos o incompletos. Es la situación más frecuente en el fibrosarcoma
            oral. La radioterapia con intención curativa se usa como tratamiento principal cuando la
            cirugía no es posible por el tamaño o la ubicación del tumor, o por el estado general de tu
            mascota.
            Ambas pueden lograr un buen control local.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>En el fibrosarcoma oral, es habitual que los márgenes quirúrgicos queden
              incompletos</strong>, y eso no es una falla de la cirugía. Por su naturaleza infiltrativa,
              se espera que el tumor tenga extensiones microscópicas más allá de la masa visible. La
              radioterapia se planifica teniendo esto en cuenta e incluye un margen alrededor del lecho
              quirúrgico para tratar las células que puedan quedar.
            </div>
          </div>
          <h3 className="cond-editorial__h3">La tomografía, antes de cualquier decisión de tratamiento</h3>
          <p className="cond-editorial__body">
            La tomografía computarizada muestra la extensión real del fibrosarcoma: compromiso óseo,
            cercanía a vasos sanguíneos, estado de los ganglios linfáticos regionales y si es viable la
            cirugía. Esta información define el campo de radiación y el tratamiento. La Dra. DiBernardi
            se coordina con el equipo quirúrgico cuando se planifica un tratamiento combinado.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              fibrosarcoma (estudios de imagen, informes de patología e informes quirúrgicos) antes de
              diseñar la radioterapia. Ofrecemos radioterapia posquirúrgica y con intención curativa.
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
            Cuéntanos sobre tu mascota y te responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>fibrosarcoma</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos la radioterapia
            con tu equipo quirúrgico durante todo el tratamiento y enviamos informes completos.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}

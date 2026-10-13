import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (definitive/
// stereotactic radiation for pituitary macroadenomas; survival and outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Rapastella S, et al.', year: '2023', title: 'Effect of pituitary-dependent hypercortisolism on the survival of dogs treated with radiotherapy for pituitary macroadenomas', source: 'J Vet Intern Med' },
  { authors: 'Mayer MN, Treuil PL', year: '2007', title: 'Radiation therapy for pituitary tumors in the dog and cat', source: 'Can Vet J. 48:316' },
  { authors: 'Wormhoudt TL, et al.', year: '2018', title: 'Stereotactic radiation therapy for the treatment of functional pituitary adenomas associated with feline acromegaly', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeoEs('/pituitary-tumors')

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

export default function PituitaryTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para tumores de hipófisis">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Radioterapia para tumores de hipófisis en perros y gatos · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/brain-tumors')}>Tumores cerebrales</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Tumores de hipófisis</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para tumores de hipófisis · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia<br />para tumores de hipófisis<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            Los macroadenomas hipofisarios comprimen estructuras del cerebro y, además, pueden producir
            un exceso de hormonas. La radioterapia actúa directamente sobre el tumor para controlar su
            crecimiento y los signos neurológicos que provoca.
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
            <div className="cond-editorial__kicker-text">Los tumores de hipófisis en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Un tumor que comprime el cerebro<br /><em>y altera las hormonas</em>
          </h2>
          <p className="cond-editorial__lead">
            La hipófisis se encuentra en la base del cerebro. Los tumores de esta glándula, ya sean
            microadenomas o macroadenomas, afectan dos sistemas a la vez: comprimen estructuras
            cerebrales a medida que crecen y producen un exceso de hormonas que altera la regulación
            del organismo.
          </p>
          <p className="cond-editorial__body">
            En los perros, los tumores de hipófisis son la causa más frecuente de la enfermedad de
            Cushing (hiperadrenocorticismo), un trastorno hormonal que se caracteriza por aumento de la
            sed y de la orina, abdomen abultado, pérdida de pelo y cambios en la piel. Cuando el tumor
            crece lo suficiente para convertirse en un macroadenoma, aparecen signos neurológicos:
            convulsiones, cambios de comportamiento, caminar en círculos, alteraciones de la visión y
            falta de coordinación.
          </p>
          <h3 className="cond-editorial__h3">Cuándo considerar la radioterapia</h3>
          <p className="cond-editorial__body">
            La radioterapia puede indicarse en perros con enfermedad de Cushing de origen hipofisario
            que presentan signos neurológicos pese a la medicación, o con un macroadenoma confirmado por
            resonancia magnética. También se considera cuando el Cushing se vuelve difícil de controlar
            porque el tumor sigue creciendo.
            Tratar antes de que se produzca un daño neurológico importante se asocia a mejores
            resultados.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Cuando la medicación ya no alcanza para controlar la enfermedad de Cushing,</strong> el tumor puede estar creciendo y comprimiendo el hipotálamo. Conviene hacer una resonancia magnética para evaluarlo y, si se confirma un macroadenoma, considerar la radioterapia.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Qué logra la radioterapia en los tumores de hipófisis</h3>
          <p className="cond-editorial__body">
            La radioterapia ayuda a controlar el crecimiento local del tumor y alivia la compresión
            intracraneal. Su efecto sobre los niveles hormonales varía de un paciente a otro, por lo que
            el tratamiento médico del Cushing suele continuar y se ajusta con el tiempo. Se han
            reportado medianas de sobrevida de 12 a 20 meses en perros tratados con radioterapia por un macroadenoma hipofisario. Muchos perros muestran una
            mejoría neurológica después del tratamiento.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> coordina la planificación de la
              radioterapia con el especialista en medicina interna de tu mascota, para que el tratamiento hormonal se
              mantenga bien ajustado durante todas las sesiones y se modifique según la respuesta del
              tumor.
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
            Cuéntanos sobre tu mascota y te
            responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios derivantes</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>un tumor de hipófisis</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos la
            radioterapia con tu equipo de medicina interna durante todo el tratamiento.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}

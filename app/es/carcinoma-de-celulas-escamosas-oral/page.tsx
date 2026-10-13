import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (definitive-intent
// radiation for canine oral/gingival SCC; local control for rostral tumors).
const REFERENCES: Reference[] = [
  { authors: 'van der Steen F, Zandvliet M', year: '2020', title: 'Treatment of canine oral papillary squamous cell carcinoma using definitive-intent radiation as a monotherapy: a case series', source: 'Vet Comp Oncol' },
  { authors: 'Mosca S, et al.', year: '2021', title: 'A possible role of coarse fractionated radiotherapy in the management of gingival squamous cell carcinoma in dogs: a retrospective study', source: 'J Vet Med Sci' },
  { authors: 'Brooks MB, et al.', year: '1988', title: 'Chemotherapy versus chemotherapy plus radiotherapy in the treatment of tonsillar squamous cell carcinoma in the dog', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeoEs('/oral-squamous-cell-carcinoma')

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

export default function OralSquamousCellCarcinomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para carcinoma de células escamosas oral">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Radioterapia para carcinoma de células escamosas oral en perros y gatos · AARADONC, Palm Beach, Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Carcinoma de células escamosas oral</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para carcinoma de células escamosas oral · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />carcinoma de células escamosas<br /><em>oral</em>
          </h1>
          <p className="cond-hero__sub">
            El carcinoma de células escamosas oral es el tumor maligno de boca más frecuente en gatos y
            un diagnóstico habitual en perros. En perros, la radioterapia, sola o junto con la cirugía,
            puede lograr el control local del tumor; en gatos, ayuda sobre todo a aliviar el dolor y
            mejorar la calidad de vida.
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
            <div className="cond-editorial__kicker-text">El carcinoma de células escamosas oral en perros y gatos</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            En perros y en gatos,<br /><em>dos enfermedades muy distintas</em>
          </h2>
          <p className="cond-editorial__lead">
            El carcinoma de células escamosas oral se comporta de forma distinta en perros y en gatos:
            en el pronóstico, en la ubicación y en la respuesta al tratamiento. 
          </p>
          <p className="cond-editorial__body">
            En perros, el carcinoma de células escamosas de encía y mandíbula, sobre todo el de la parte delantera (rostral), invade los tejidos cercanos, pero suele tardar en hacer
            metástasis. En muchos perros, la combinación de cirugía y radioterapia logra un control local
            duradero. En gatos, es uno de los cánceres más agresivos de la oncología veterinaria: suele
            diagnosticarse tarde, invade en profundidad y responde de forma limitada a casi todos los
            tratamientos.
          </p>
          <h3 className="cond-editorial__h3">El papel de la radioterapia en perros</h3>
          <p className="cond-editorial__body">
            En perros, la radioterapia se usa después de la cirugía (radioterapia posquirúrgica) cuando
            los márgenes son incompletos, o como tratamiento principal cuando no es posible extirpar el
            tumor por completo. En tumores rostrales de encía y mandíbula, la radioterapia con intención
            curativa puede lograr un control local duradero en muchos perros, con buena calidad de vida
            durante todo el proceso. El carcinoma de células escamosas de amígdala tiene un pronóstico
            mucho más reservado y suele tratarse con intención paliativa.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>En perros, la ubicación del tumor influye mucho.</strong> Los tumores de la parte
              delantera de la mandíbula responden mejor a la radioterapia que los de la parte posterior,
              la amígdala o debajo de la lengua. Antes de planificar el tratamiento se necesita una
              tomografía computarizada para conocer la profundidad de la invasión, el estado de los
              ganglios linfáticos y si es viable la cirugía o un abordaje combinado.
            </div>
          </div>
          <h3 className="cond-editorial__h3">El papel de la radioterapia en gatos</h3>
          <p className="cond-editorial__body">
            En gatos, el carcinoma de células escamosas oral suele diagnosticarse como una masa debajo de
            la lengua o en la encía que provoca babeo, dificultad para comer e hinchazón de la cara. El
            pronóstico es reservado, incluso con tratamiento. La radioterapia paliativa puede ayudar a
            controlar el dolor, reducir el volumen tumoral y mejorar la calidad de vida.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              carcinoma de células escamosas oral y explica con claridad el pronóstico antes de iniciar
              el tratamiento. Desde el principio, define junto con la familia el objetivo del
              tratamiento: buscar el control del tumor o priorizar la calidad de vida.
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
            Derivar un paciente con<br /><em>carcinoma de células escamosas oral</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos directamente
            con tu clínica durante todo el tratamiento y enviamos informes completos.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}

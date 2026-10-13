import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (nasal lymphoma in
// cats is highly radiation-responsive; survival with radiation ± chemotherapy).
const REFERENCES: Reference[] = [
  { authors: 'Haney SM, et al.', year: '2009', title: 'Survival analysis of 97 cats with nasal lymphoma: a multi-institutional retrospective study (1986–2006)', source: 'J Vet Intern Med' },
  { authors: 'Reczynska AI, LaRue SM, et al.', year: '2022', title: 'Outcome of stereotactic body radiation for treatment of nasal and nasopharyngeal lymphoma in 32 cats', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeoEs('/lymphoma')

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

export default function LymphomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para linfoma">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-patient.jpg"
            alt="Radioterapia para linfoma en perros y gatos · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/pet-cancer')}>Cáncer en mascotas</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Linfoma</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para linfoma · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />linfoma<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            El linfoma es uno de los cánceres más frecuentes en gatos y en perros. En las formas localizadas, sobre todo en el linfoma nasal, mediastínico y espinal, la radioterapia trata directamente la zona afectada.
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
            <div className="cond-editorial__kicker-text">El linfoma en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Control local<br /><em>del linfoma localizado</em>
          </h2>
          <p className="cond-editorial__lead">
            El linfoma es una enfermedad sistémica, pero algunas formas son muy localizadas. En estos
            casos, la radioterapia ofrece control local y complementa la quimioterapia. El linfoma nasal
            en gatos, las masas mediastínicas que dificultan la respiración y el linfoma espinal que
            comprime la médula son situaciones en las que la radioterapia puede modificar la evolución de la enfermedad.
          </p>
          <p className="cond-editorial__body">
            La biología del linfoma varía mucho según la ubicación anatómica, el tipo celular (B o T) y
            el grado. El linfoma multicéntrico de alto grado requiere quimioterapia como tratamiento
            principal. En cambio, el linfoma localizado, limitado a la cavidad nasal, el mediastino, la
            columna o la piel, puede responder bien a la radioterapia, sola o combinada con
            quimioterapia.
          </p>
          <h3 className="cond-editorial__h3">Linfoma nasal en gatos</h3>
          <p className="cond-editorial__body">
            El linfoma nasal es el tumor nasal más frecuente en gatos y uno de los cánceres más
            sensibles a la radiación en medicina veterinaria. Con radioterapia, sola o combinada con
            clorambucilo o con quimioterapia basada en el protocolo CHOP, se han reportado medianas de
            sobrevida de entre 1 año y 1 año y medio. Muchos gatos mantienen una muy buena calidad de vida
            durante todo el proceso.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>No todos los linfomas son iguales.</strong> Antes de recomendar cualquier
              tratamiento, la Dra. DiBernardi revisa todos los estudios (histopatología,
              inmunofenotipo, ubicación anatómica y estadiamiento) para decidir si conviene sumar la
              radioterapia al tratamiento y de qué forma.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Cuando la radioterapia es el tratamiento central</h3>
          <p className="cond-editorial__body">
            En el linfoma mediastínico que compromete la respiración, la radioterapia puede reducir
            rápidamente el volumen tumoral. En el linfoma espinal que causa paresia progresiva, la
            radioterapia puede descomprimir la médula espinal y permitir la recuperación neurológica.
            
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> tiene doble certificación de
              especialidad en radioterapia oncológica y en oncología médica, por lo que evalúa tanto la enfermedad
              local como la sistémica antes de recomendar un tratamiento.
            </div>
          </div>
        </div>
      </section>



      <References items={REFERENCES} lang="es" />

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">Para familias</div>
          <div className="cond-cta__title">
            Evaluación de una especialista<br /><em>con respuesta rápida</em>
          </div>
          <p className="cond-cta__text">
            Cuéntanos sobre tu mascota y te
            responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>linfoma</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Nos coordinamos
            directamente con tu clínica y con el equipo de oncología a cargo del tratamiento
            sistémico.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}

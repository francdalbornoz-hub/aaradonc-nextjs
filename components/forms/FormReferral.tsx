'use client'

import { useState, type FormEvent } from 'react'
import { submitForm } from '@/lib/submit-form'
import type { Lang } from '@/lib/i18n'

type Species = 'dog' | 'cat' | 'other' | ''
type YesNo = 'no' | 'yes' | ''
type Margins = 'clean' | 'narrow' | 'incomplete' | 'unknown' | ''
type PreferredContact = 'phone' | 'email' | ''

type ReferralData = {
  website: string
  clinic: string; vetName: string; clinicPhone: string; clinicEmail: string; preferredContact: PreferredContact
  ownerName: string; ownerPhone: string; ownerEmail: string
  patientName: string; species: Species; speciesOther: string; breed: string; age: string; sex: string; weight: string
  diagnosis: string; diagnosisDate: string; surgery: YesNo; surgeryDate: string; margins: Margins
  chemo: YesNo; chemoProtocol: string; medications: string; comorbidities: string
  diagnostics: { histopathology: boolean; cytology: boolean; radiographs: boolean; ultrasound: boolean; ctMri: boolean; cbcChem: boolean; other: boolean }
  diagnosticsOther: string; notes: string
}

const INITIAL: ReferralData = {
  website: '',
  clinic: '', vetName: '', clinicPhone: '', clinicEmail: '', preferredContact: '',
  ownerName: '', ownerPhone: '', ownerEmail: '',
  patientName: '', species: '', speciesOther: '', breed: '', age: '', sex: '', weight: '',
  diagnosis: '', diagnosisDate: '', surgery: '', surgeryDate: '',
  margins: '', chemo: '', chemoProtocol: '', medications: '', comorbidities: '',
  diagnostics: { histopathology: false, cytology: false, radiographs: false, ultrasound: false, ctMri: false, cbcChem: false, other: false },
  diagnosticsOther: '', notes: '',
}

const STRINGS = {
  en: {
    aria: 'Refer a patient form',
    secClinic: 'Referring Clinic', clinicName: 'Clinic Name *', referringDvm: 'Referring DVM *',
    phone: 'Phone *', email: 'Email *', preferred: 'Preferred contact', phoneOpt: 'Phone', emailOpt: 'Email',
    secClient: 'Client Information', ownerName: 'Owner Name', phonePlain: 'Phone', emailPlain: 'Email',
    secPatient: 'Patient Information', patientName: 'Patient Name', species: 'Species',
    dog: 'Dog', cat: 'Cat', other: 'Other', specifySpecies: 'Specify species',
    breed: 'Breed', age: 'Age', sex: 'Sex', weight: 'Weight',
    secDx: 'Diagnosis & Treatment History', primaryDx: 'Primary Diagnosis (confirmed or suspected)',
    primaryDxPh: 'e.g. Nasal adenocarcinoma, Mast cell tumor grade II', dxDate: 'Date of Diagnosis',
    surgery: 'Surgery performed?', yes: 'Yes', no: 'No', surgeryDateAria: 'Surgery date',
    margins: 'Margins (if applicable)', clean: 'Clean', narrow: 'Narrow', incomplete: 'Incomplete', unknown: 'Unknown',
    chemo: 'Chemotherapy given?', chemoAria: 'Chemotherapy protocol', chemoPh: 'Protocol (e.g. CHOP, vinblastine)',
    meds: 'Current medications', medsHint: '(include steroids/NSAIDs)', medsPh: 'e.g. prednisone 10mg SID, gabapentin 100mg BID...',
    como: 'Relevant comorbidities or anesthesia concerns', comoPh: 'Cardiac, renal, hepatic, brachycephalic, prior anesthesia events...',
    secDiag: 'Diagnostics Included',
    histo: 'Histopathology', cyto: 'Cytology', rads: 'Radiographs', us: 'Ultrasound', ctmri: 'CT / MRI', cbc: 'CBC / Chemistry', otherDiag: 'Other',
    specifyDiag: 'Specify other diagnostics', otherAria: 'Other diagnostics',
    secNotes: 'Additional Notes', notesAria: 'Additional notes', notesPh: 'Anything else we should know — urgency, owner concerns, prior consultations...',
    success: 'Referral received. Dr. DiBernardi will follow up promptly. Please email medical records and imaging to',
    error: 'Something went wrong. Please call us directly or email info@aaradonc.com.',
    submit: 'Submit Referral →', submitting: 'Submitting…',
    tc: 'All information is treated with full confidentiality. By submitting, you agree to be contacted regarding this referral.',
    subject: 'New Patient Referral — Veterinarian',
    phPhone: '(561) 000-0000', phClinicEmail: 'you@yourclinic.com', phOwnerEmail: 'owner@email.com',
    phClinic: 'Palm Beach Animal Clinic', phVet: 'Dr. Jane Smith', phOwner: 'John Doe', phPatient: 'e.g. Max',
    phBreed: 'e.g. Golden Retriever', phAge: 'e.g. 8y 3m', phSex: 'M / F / MN / FS', phWeight: 'e.g. 28 kg / 62 lb',
  },
  es: {
    aria: 'Formulario de derivación de paciente',
    secClinic: 'Clínica derivante', clinicName: 'Nombre de la clínica *', referringDvm: 'Veterinario derivante *',
    phone: 'Teléfono *', email: 'Correo electrónico *', preferred: 'Cómo prefieres que te contactemos', phoneOpt: 'Teléfono', emailOpt: 'Correo',
    secClient: 'Datos del tutor', ownerName: 'Nombre del tutor', phonePlain: 'Teléfono', emailPlain: 'Correo',
    secPatient: 'Datos del paciente', patientName: 'Nombre del paciente', species: 'Especie',
    dog: 'Perro', cat: 'Gato', other: 'Otro', specifySpecies: 'Especificar especie',
    breed: 'Raza', age: 'Edad', sex: 'Sexo', weight: 'Peso',
    secDx: 'Diagnóstico y tratamientos previos', primaryDx: 'Diagnóstico principal (confirmado o presuntivo)',
    primaryDxPh: 'Ej.: adenocarcinoma nasal, mastocitoma grado II', dxDate: 'Fecha del diagnóstico',
    surgery: '¿Se realizó cirugía?', yes: 'Sí', no: 'No', surgeryDateAria: 'Fecha de la cirugía',
    margins: 'Márgenes (si corresponde)', clean: 'Limpios', narrow: 'Estrechos', incomplete: 'Incompletos', unknown: 'Desconocidos',
    chemo: '¿Recibió quimioterapia?', chemoAria: 'Protocolo de quimioterapia', chemoPh: 'Protocolo (p. ej., CHOP, vinblastina)',
    meds: 'Medicación actual', medsHint: '(incluir corticoides/AINEs)', medsPh: 'Ej.: prednisona 10 mg SID, gabapentina 100 mg BID…',
    como: 'Comorbilidades o antecedentes anestésicos', comoPh: 'Cardíacas, renales, hepáticas, braquicefalia, complicaciones anestésicas previas…',
    secDiag: 'Estudios incluidos',
    histo: 'Histopatología', cyto: 'Citología', rads: 'Radiografías', us: 'Ecografía', ctmri: 'TC / RM', cbc: 'Hemograma / Bioquímica', otherDiag: 'Otro',
    specifyDiag: 'Especificar otros estudios', otherAria: 'Otros estudios',
    secNotes: 'Notas adicionales', notesAria: 'Notas adicionales', notesPh: 'Cualquier otro dato útil: urgencia, inquietudes del tutor, consultas previas…',
    success: 'Recibimos la derivación. La Dra. DiBernardi se comunicará contigo a la brevedad. Envía la historia clínica y los estudios de imagen a',
    error: 'No pudimos enviar el formulario. Llámanos o escríbenos a info@aaradonc.com.',
    submit: 'Enviar derivación →', submitting: 'Enviando…',
    tc: 'Toda la información se trata de forma confidencial. Al enviar el formulario, aceptas que te contactemos por esta derivación.',
    subject: 'New Patient Referral — Veterinarian (ES)',
    phPhone: '(561) 000-0000', phClinicEmail: 'tu@clinica.com', phOwnerEmail: 'tutor@email.com',
    phClinic: 'Clínica Veterinaria Palm Beach', phVet: 'Dra. Juana Pérez', phOwner: 'Juan Pérez', phPatient: 'Ej.: Max',
    phBreed: 'Ej.: golden retriever', phAge: 'Ej.: 8 años y 3 meses', phSex: 'Ej.: macho castrado', phWeight: 'Ej.: 28 kg / 62 lb',
  },
} as const

export default function FormReferral({ lang = 'en' }: { lang?: Lang }) {
  const t = STRINGS[lang] as typeof STRINGS['en']
  const [data, setData] = useState<ReferralData>(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function update<K extends keyof ReferralData>(key: K, value: ReferralData[K]) {
    setData((d) => ({ ...d, [key]: value }))
  }
  function toggleDiagnostic(key: keyof ReferralData['diagnostics']) {
    setData((d) => ({ ...d, diagnostics: { ...d.diagnostics, [key]: !d.diagnostics[key] } }))
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (data.website) return
    setSubmitting(true); setStatus('idle')
    try {
      await submitForm(t.subject, data)
      setStatus('success'); setData(INITIAL)
    } catch { setStatus('error') } finally { setSubmitting(false) }
  }

  return (
    <form className="aaradonc-form aaradonc-form--light" onSubmit={handleSubmit} noValidate aria-label={t.aria}>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} name="website"
        value={data.website} onChange={(e) => update('website', e.target.value)} />

      <div className="ff-section"><div className="ff-section__title">{t.secClinic}</div></div>
      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-clinic">{t.clinicName}</label></div>
          <input id="fr-clinic" type="text" name="clinic" required placeholder={t.phClinic}
            value={data.clinic} onChange={(e) => update('clinic', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-vet">{t.referringDvm}</label></div>
          <input id="fr-vet" type="text" name="vetName" autoComplete="name" required placeholder={t.phVet}
            value={data.vetName} onChange={(e) => update('vetName', e.target.value)} />
        </div>
      </div>
      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-cphone">{t.phone}</label></div>
          <input id="fr-cphone" type="tel" name="clinicPhone" autoComplete="tel" required placeholder={t.phPhone}
            value={data.clinicPhone} onChange={(e) => update('clinicPhone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-cemail">{t.email}</label></div>
          <input id="fr-cemail" type="email" name="clinicEmail" autoComplete="email" required placeholder={t.phClinicEmail}
            value={data.clinicEmail} onChange={(e) => update('clinicEmail', e.target.value)} />
        </div>
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>{t.preferred}</label></div>
        <div className="ff-el-form-check">
          {(['phone', 'email'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="preferredContact"
                value={v} checked={data.preferredContact === v} onChange={() => update('preferredContact', v)} />
              {v === 'phone' ? t.phoneOpt : t.emailOpt}
            </label>
          ))}
        </div>
      </div>

      <div className="ff-section"><div className="ff-section__title">{t.secClient}</div></div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-owner">{t.ownerName}</label></div>
        <input id="fr-owner" type="text" name="ownerName" autoComplete="name" placeholder={t.phOwner}
          value={data.ownerName} onChange={(e) => update('ownerName', e.target.value)} />
      </div>
      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-ophone">{t.phonePlain}</label></div>
          <input id="fr-ophone" type="tel" name="ownerPhone" autoComplete="tel" placeholder={t.phPhone}
            value={data.ownerPhone} onChange={(e) => update('ownerPhone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-oemail">{t.emailPlain}</label></div>
          <input id="fr-oemail" type="email" name="ownerEmail" autoComplete="email" placeholder={t.phOwnerEmail}
            value={data.ownerEmail} onChange={(e) => update('ownerEmail', e.target.value)} />
        </div>
      </div>

      <div className="ff-section"><div className="ff-section__title">{t.secPatient}</div></div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-patient">{t.patientName}</label></div>
        <input id="fr-patient" type="text" name="patientName" placeholder={t.phPatient}
          value={data.patientName} onChange={(e) => update('patientName', e.target.value)} />
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>{t.species}</label></div>
        <div className="ff-el-form-check">
          {(['dog', 'cat', 'other'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="species"
                value={v} checked={data.species === v} onChange={() => update('species', v)} />
              {v === 'dog' ? t.dog : v === 'cat' ? t.cat : t.other}
            </label>
          ))}
        </div>
        {data.species === 'other' && (
          <input type="text" style={{ marginTop: 10 }} placeholder={t.specifySpecies}
            value={data.speciesOther} onChange={(e) => update('speciesOther', e.target.value)} />
        )}
      </div>
      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-breed">{t.breed}</label></div>
          <input id="fr-breed" type="text" name="breed" placeholder={t.phBreed}
            value={data.breed} onChange={(e) => update('breed', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-age">{t.age}</label></div>
          <input id="fr-age" type="text" name="age" placeholder={t.phAge}
            value={data.age} onChange={(e) => update('age', e.target.value)} />
        </div>
      </div>
      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-sex">{t.sex}</label></div>
          <input id="fr-sex" type="text" name="sex" placeholder={t.phSex}
            value={data.sex} onChange={(e) => update('sex', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-weight">{t.weight}</label></div>
          <input id="fr-weight" type="text" name="weight" placeholder={t.phWeight}
            value={data.weight} onChange={(e) => update('weight', e.target.value)} />
        </div>
      </div>

      <div className="ff-section"><div className="ff-section__title">{t.secDx}</div></div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-dx">{t.primaryDx}</label></div>
        <input id="fr-dx" type="text" name="diagnosis" placeholder={t.primaryDxPh}
          value={data.diagnosis} onChange={(e) => update('diagnosis', e.target.value)} />
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-dxdate">{t.dxDate}</label></div>
        <input id="fr-dxdate" type="date" name="diagnosisDate"
          value={data.diagnosisDate} onChange={(e) => update('diagnosisDate', e.target.value)} />
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>{t.surgery}</label></div>
        <div className="ff-el-form-check">
          {(['no', 'yes'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="surgery"
                value={v} checked={data.surgery === v} onChange={() => update('surgery', v)} />
              {v === 'yes' ? t.yes : t.no}
            </label>
          ))}
        </div>
        {data.surgery === 'yes' && (
          <input type="date" style={{ marginTop: 10 }} aria-label={t.surgeryDateAria}
            value={data.surgeryDate} onChange={(e) => update('surgeryDate', e.target.value)} />
        )}
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>{t.margins}</label></div>
        <div className="ff-el-form-check">
          {(['clean', 'narrow', 'incomplete', 'unknown'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="margins"
                value={v} checked={data.margins === v} onChange={() => update('margins', v)} />
              {t[v]}
            </label>
          ))}
        </div>
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>{t.chemo}</label></div>
        <div className="ff-el-form-check">
          {(['no', 'yes'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="chemo"
                value={v} checked={data.chemo === v} onChange={() => update('chemo', v)} />
              {v === 'yes' ? t.yes : t.no}
            </label>
          ))}
        </div>
        {data.chemo === 'yes' && (
          <input type="text" style={{ marginTop: 10 }} aria-label={t.chemoAria} placeholder={t.chemoPh}
            value={data.chemoProtocol} onChange={(e) => update('chemoProtocol', e.target.value)} />
        )}
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-meds">{t.meds} <span style={{ opacity: 0.6 }}>{t.medsHint}</span></label></div>
        <textarea id="fr-meds" name="medications" rows={2} placeholder={t.medsPh}
          value={data.medications} onChange={(e) => update('medications', e.target.value)} />
      </div>
      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-como">{t.como}</label></div>
        <textarea id="fr-como" name="comorbidities" rows={2} placeholder={t.comoPh}
          value={data.comorbidities} onChange={(e) => update('comorbidities', e.target.value)} />
      </div>

      <div className="ff-section"><div className="ff-section__title">{t.secDiag}</div></div>
      <div className="ff-el-group">
        <div className="ff-el-form-check">
          {([
            ['histopathology', t.histo], ['cytology', t.cyto], ['radiographs', t.rads],
            ['ultrasound', t.us], ['ctMri', t.ctmri], ['cbcChem', t.cbc], ['other', t.otherDiag],
          ] as const).map(([key, label]) => (
            <label key={key} className="ff-el-form-check-label">
              <input type="checkbox" className="ff-el-form-check-input"
                checked={data.diagnostics[key as keyof ReferralData['diagnostics']]}
                onChange={() => toggleDiagnostic(key as keyof ReferralData['diagnostics'])} />
              {label}
            </label>
          ))}
        </div>
        {data.diagnostics.other && (
          <input type="text" style={{ marginTop: 10 }} aria-label={t.otherAria} placeholder={t.specifyDiag}
            value={data.diagnosticsOther} onChange={(e) => update('diagnosticsOther', e.target.value)} />
        )}
      </div>

      <div className="ff-section"><div className="ff-section__title">{t.secNotes}</div></div>
      <div className="ff-el-group">
        <textarea name="notes" rows={4} aria-label={t.notesAria} placeholder={t.notesPh}
          value={data.notes} onChange={(e) => update('notes', e.target.value)} />
      </div>

      {status === 'success' && (
        <div className="ff-response-message ff_success_response" role="status">
          {t.success} <strong>info@aaradonc.com</strong>.
        </div>
      )}
      {status === 'error' && (
        <div className="ff-response-message ff_failed_response" role="alert">
          {t.error}
        </div>
      )}

      <button type="submit" disabled={submitting}>
        {submitting ? t.submitting : t.submit}
      </button>

      <div className="ff-el-tc">{t.tc}</div>
    </form>
  )
}

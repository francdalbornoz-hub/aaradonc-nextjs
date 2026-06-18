'use client'

import { useState, type FormEvent } from 'react'
import { submitForm } from '@/lib/submit-form'

type Species = 'dog' | 'cat' | 'other' | ''
type YesNo = 'no' | 'yes' | ''
type Margins = 'clean' | 'narrow' | 'incomplete' | 'unknown' | ''
type PreferredContact = 'phone' | 'email' | ''

type ReferralData = {
  website: string  // honeypot
  // Referring Clinic
  clinic: string
  vetName: string
  clinicPhone: string
  clinicEmail: string
  preferredContact: PreferredContact
  // Client
  ownerName: string
  ownerPhone: string
  ownerEmail: string
  // Patient
  patientName: string
  species: Species
  speciesOther: string
  breed: string
  age: string
  sex: string
  weight: string
  // Diagnosis
  diagnosis: string
  diagnosisDate: string
  surgery: YesNo
  surgeryDate: string
  margins: Margins
  chemo: YesNo
  chemoProtocol: string
  medications: string
  comorbidities: string
  // Diagnostics
  diagnostics: {
    histopathology: boolean
    cytology: boolean
    radiographs: boolean
    ultrasound: boolean
    ctMri: boolean
    cbcChem: boolean
    other: boolean
  }
  diagnosticsOther: string
  // Notes
  notes: string
}

const INITIAL: ReferralData = {
  website: '',
  clinic: '', vetName: '', clinicPhone: '', clinicEmail: '', preferredContact: '',
  ownerName: '', ownerPhone: '', ownerEmail: '',
  patientName: '', species: '', speciesOther: '', breed: '', age: '', sex: '', weight: '',
  diagnosis: '', diagnosisDate: '', surgery: '', surgeryDate: '',
  margins: '', chemo: '', chemoProtocol: '', medications: '', comorbidities: '',
  diagnostics: {
    histopathology: false, cytology: false, radiographs: false,
    ultrasound: false, ctMri: false, cbcChem: false, other: false,
  },
  diagnosticsOther: '',
  notes: '',
}

export default function FormReferral() {
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
    if (data.website) return  // honeypot triggered
    setSubmitting(true)
    setStatus('idle')
    try {
      await submitForm('New Patient Referral — Veterinarian', data)
      setStatus('success')
      setData(INITIAL)
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className="aaradonc-form aaradonc-form--light"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Refer a patient form"
    >
      {/* Honeypot */}
      <input
        type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ display: 'none' }} name="website"
        value={data.website} onChange={(e) => update('website', e.target.value)}
      />

      {/* ── REFERRING CLINIC ────────────────────────────────────── */}
      <div className="ff-section"><div className="ff-section__title">Referring Clinic</div></div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-clinic">Clinic Name *</label></div>
          <input id="fr-clinic" type="text" name="clinic" required
            placeholder="Palm Beach Animal Clinic"
            value={data.clinic} onChange={(e) => update('clinic', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-vet">Referring DVM *</label></div>
          <input id="fr-vet" type="text" name="vetName" autoComplete="name" required
            placeholder="Dr. Jane Smith"
            value={data.vetName} onChange={(e) => update('vetName', e.target.value)} />
        </div>
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-cphone">Phone *</label></div>
          <input id="fr-cphone" type="tel" name="clinicPhone" autoComplete="tel" required
            placeholder="(561) 000-0000"
            value={data.clinicPhone} onChange={(e) => update('clinicPhone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-cemail">Email *</label></div>
          <input id="fr-cemail" type="email" name="clinicEmail" autoComplete="email" required
            placeholder="you@yourclinic.com"
            value={data.clinicEmail} onChange={(e) => update('clinicEmail', e.target.value)} />
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>Preferred contact</label></div>
        <div className="ff-el-form-check">
          {(['phone', 'email'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="preferredContact"
                value={v} checked={data.preferredContact === v}
                onChange={() => update('preferredContact', v)} />
              {v === 'phone' ? 'Phone' : 'Email'}
            </label>
          ))}
        </div>
      </div>

      {/* ── CLIENT INFORMATION ──────────────────────────────────── */}
      <div className="ff-section"><div className="ff-section__title">Client Information</div></div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-owner">Owner Name</label></div>
        <input id="fr-owner" type="text" name="ownerName" autoComplete="name"
          placeholder="John Doe"
          value={data.ownerName} onChange={(e) => update('ownerName', e.target.value)} />
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-ophone">Phone</label></div>
          <input id="fr-ophone" type="tel" name="ownerPhone" autoComplete="tel"
            placeholder="(561) 000-0000"
            value={data.ownerPhone} onChange={(e) => update('ownerPhone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-oemail">Email</label></div>
          <input id="fr-oemail" type="email" name="ownerEmail" autoComplete="email"
            placeholder="owner@email.com"
            value={data.ownerEmail} onChange={(e) => update('ownerEmail', e.target.value)} />
        </div>
      </div>

      {/* ── PATIENT INFORMATION ─────────────────────────────────── */}
      <div className="ff-section"><div className="ff-section__title">Patient Information</div></div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-patient">Patient Name</label></div>
        <input id="fr-patient" type="text" name="patientName"
          placeholder="e.g. Max"
          value={data.patientName} onChange={(e) => update('patientName', e.target.value)} />
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>Species</label></div>
        <div className="ff-el-form-check">
          {(['dog', 'cat', 'other'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="species"
                value={v} checked={data.species === v}
                onChange={() => update('species', v)} />
              {v === 'dog' ? 'Dog' : v === 'cat' ? 'Cat' : 'Other'}
            </label>
          ))}
        </div>
        {data.species === 'other' && (
          <input type="text" style={{ marginTop: 10 }}
            placeholder="Specify species"
            value={data.speciesOther} onChange={(e) => update('speciesOther', e.target.value)} />
        )}
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-breed">Breed</label></div>
          <input id="fr-breed" type="text" name="breed"
            placeholder="e.g. Golden Retriever"
            value={data.breed} onChange={(e) => update('breed', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-age">Age</label></div>
          <input id="fr-age" type="text" name="age"
            placeholder="e.g. 8y 3m"
            value={data.age} onChange={(e) => update('age', e.target.value)} />
        </div>
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-sex">Sex</label></div>
          <input id="fr-sex" type="text" name="sex"
            placeholder="M / F / MN / FS"
            value={data.sex} onChange={(e) => update('sex', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fr-weight">Weight</label></div>
          <input id="fr-weight" type="text" name="weight"
            placeholder="e.g. 28 kg / 62 lb"
            value={data.weight} onChange={(e) => update('weight', e.target.value)} />
        </div>
      </div>

      {/* ── DIAGNOSIS & TREATMENT HISTORY ───────────────────────── */}
      <div className="ff-section"><div className="ff-section__title">Diagnosis &amp; Treatment History</div></div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-dx">Primary Diagnosis (confirmed or suspected)</label></div>
        <input id="fr-dx" type="text" name="diagnosis"
          placeholder="e.g. Nasal adenocarcinoma, Mast cell tumor grade II"
          value={data.diagnosis} onChange={(e) => update('diagnosis', e.target.value)} />
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-dxdate">Date of Diagnosis</label></div>
        <input id="fr-dxdate" type="date" name="diagnosisDate"
          value={data.diagnosisDate} onChange={(e) => update('diagnosisDate', e.target.value)} />
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>Surgery performed?</label></div>
        <div className="ff-el-form-check">
          {(['no', 'yes'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="surgery"
                value={v} checked={data.surgery === v}
                onChange={() => update('surgery', v)} />
              {v === 'yes' ? 'Yes' : 'No'}
            </label>
          ))}
        </div>
        {data.surgery === 'yes' && (
          <input type="date" style={{ marginTop: 10 }} aria-label="Surgery date"
            value={data.surgeryDate} onChange={(e) => update('surgeryDate', e.target.value)} />
        )}
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>Margins (if applicable)</label></div>
        <div className="ff-el-form-check">
          {(['clean', 'narrow', 'incomplete', 'unknown'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="margins"
                value={v} checked={data.margins === v}
                onChange={() => update('margins', v)} />
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>Chemotherapy given?</label></div>
        <div className="ff-el-form-check">
          {(['no', 'yes'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="chemo"
                value={v} checked={data.chemo === v}
                onChange={() => update('chemo', v)} />
              {v === 'yes' ? 'Yes' : 'No'}
            </label>
          ))}
        </div>
        {data.chemo === 'yes' && (
          <input type="text" style={{ marginTop: 10 }} aria-label="Chemotherapy protocol"
            placeholder="Protocol (e.g. CHOP, vinblastine)"
            value={data.chemoProtocol} onChange={(e) => update('chemoProtocol', e.target.value)} />
        )}
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-meds">Current medications <span style={{ opacity: 0.6 }}>(include steroids/NSAIDs)</span></label></div>
        <textarea id="fr-meds" name="medications" rows={2}
          placeholder="e.g. prednisone 10mg SID, gabapentin 100mg BID..."
          value={data.medications} onChange={(e) => update('medications', e.target.value)} />
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fr-como">Relevant comorbidities or anesthesia concerns</label></div>
        <textarea id="fr-como" name="comorbidities" rows={2}
          placeholder="Cardiac, renal, hepatic, brachycephalic, prior anesthesia events..."
          value={data.comorbidities} onChange={(e) => update('comorbidities', e.target.value)} />
      </div>

      {/* ── DIAGNOSTICS INCLUDED ────────────────────────────────── */}
      <div className="ff-section"><div className="ff-section__title">Diagnostics Included</div></div>

      <div className="ff-el-group">
        <div className="ff-el-form-check">
          {([
            ['histopathology', 'Histopathology'],
            ['cytology', 'Cytology'],
            ['radiographs', 'Radiographs'],
            ['ultrasound', 'Ultrasound'],
            ['ctMri', 'CT / MRI'],
            ['cbcChem', 'CBC / Chemistry'],
            ['other', 'Other'],
          ] as const).map(([key, label]) => (
            <label key={key} className="ff-el-form-check-label">
              <input type="checkbox" className="ff-el-form-check-input"
                checked={data.diagnostics[key]}
                onChange={() => toggleDiagnostic(key)} />
              {label}
            </label>
          ))}
        </div>
        {data.diagnostics.other && (
          <input type="text" style={{ marginTop: 10 }} aria-label="Other diagnostics"
            placeholder="Specify other diagnostics"
            value={data.diagnosticsOther} onChange={(e) => update('diagnosticsOther', e.target.value)} />
        )}
      </div>

      {/* ── ADDITIONAL NOTES ────────────────────────────────────── */}
      <div className="ff-section"><div className="ff-section__title">Additional Notes</div></div>

      <div className="ff-el-group">
        <textarea name="notes" rows={4} aria-label="Additional notes"
          placeholder="Anything else we should know — urgency, owner concerns, prior consultations..."
          value={data.notes} onChange={(e) => update('notes', e.target.value)} />
      </div>

      {/* ── SUBMIT ──────────────────────────────────────────────── */}
      {status === 'success' && (
        <div className="ff-response-message ff_success_response" role="status">
          Referral received. Dr. DiBernardi will follow up the same day. Please email medical records and imaging to <strong>info@aaradonc.com</strong>.
        </div>
      )}
      {status === 'error' && (
        <div className="ff-response-message ff_failed_response" role="alert">
          Something went wrong. Please call us directly or email info@aaradonc.com.
        </div>
      )}

      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting…' : 'Submit Referral →'}
      </button>

      <div className="ff-el-tc">
        All information is treated with full confidentiality. By submitting, you agree to be contacted regarding this referral.
      </div>
    </form>
  )
}

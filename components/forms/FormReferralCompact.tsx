'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { submitForm } from '@/lib/submit-form'

type Species = 'dog' | 'cat' | 'other' | ''

type CompactData = {
  website: string  // honeypot
  vetName: string
  clinic: string
  phone: string
  email: string
  patientName: string
  species: Species
  diagnosis: string
  notes: string
}

const INITIAL: CompactData = {
  website: '', vetName: '', clinic: '', phone: '', email: '',
  patientName: '', species: '', diagnosis: '', notes: '',
}

export default function FormReferralCompact() {
  const [data, setData] = useState<CompactData>(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function update<K extends keyof CompactData>(key: K, value: CompactData[K]) {
    setData((d) => ({ ...d, [key]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (data.website) return
    setSubmitting(true)
    setStatus('idle')
    try {
      await submitForm('New Patient Referral — Veterinarian (Quick Form)', data)
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
      aria-label="Quick patient referral form"
    >
      <input
        type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ display: 'none' }} name="website"
        value={data.website} onChange={(e) => update('website', e.target.value)}
      />

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-vet">Referring DVM *</label></div>
          <input id="frc-vet" type="text" name="vetName" autoComplete="name" required
            placeholder="Dr. Jane Smith"
            value={data.vetName} onChange={(e) => update('vetName', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-clinic">Clinic *</label></div>
          <input id="frc-clinic" type="text" name="clinic" required
            placeholder="Palm Beach Animal Clinic"
            value={data.clinic} onChange={(e) => update('clinic', e.target.value)} />
        </div>
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-phone">Phone *</label></div>
          <input id="frc-phone" type="tel" name="phone" autoComplete="tel" required
            placeholder="(561) 000-0000"
            value={data.phone} onChange={(e) => update('phone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-email">Email *</label></div>
          <input id="frc-email" type="email" name="email" autoComplete="email" required
            placeholder="you@yourclinic.com"
            value={data.email} onChange={(e) => update('email', e.target.value)} />
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="frc-patient">Patient Name</label></div>
        <input id="frc-patient" type="text" name="patientName"
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
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="frc-diagnosis">Diagnosis / Tumor Type</label></div>
        <input id="frc-diagnosis" type="text" name="diagnosis"
          placeholder="e.g. Nasal adenocarcinoma, Mast cell tumor grade II"
          value={data.diagnosis} onChange={(e) => update('diagnosis', e.target.value)} />
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="frc-notes">Notes</label></div>
        <textarea id="frc-notes" name="notes" rows={3}
          placeholder="Staging, prior treatments, imaging available, urgency..."
          value={data.notes} onChange={(e) => update('notes', e.target.value)} />
      </div>

      {status === 'success' && (
        <div className="ff-response-message ff_success_response" role="status">
          Referral received. Dr. DiBernardi will follow up the same day.
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

      <div className="ff-el-tc" style={{ marginTop: 12 }}>
        Need to send full clinical history with margins, chemo protocol, and diagnostics?{' '}
        <Link href="/contact-referrers" style={{ color: '#1A4FBF', fontWeight: 600, textDecoration: 'underline' }}>
          Use the detailed referral form →
        </Link>
      </div>
    </form>
  )
}

'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import GoldRule from '@/components/ui/GoldRule'
import { siteConfig } from '@/lib/config'

const sizes = [
  'Small — 12 × 16 in',
  'Medium — 18 × 24 in',
  'Large — 24 × 32 in',
  'Grand — 36 × 48 in',
  'Custom dimensions',
]

interface FormErrors {
  name?: string
  email?: string
  size?: string
  image?: string
}

export default function QuoteForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [size, setSize] = useState('')
  const [notes, setNotes] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [showWhatsAppNote, setShowWhatsAppNote] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setErrors((prev) => ({ ...prev, image: 'Please upload a JPG, PNG, or WEBP file.' }))
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: 'File must be under 10 MB.' }))
      return
    }

    setImageFile(file)
    setErrors((prev) => ({ ...prev, image: undefined }))
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!name.trim()) errs.name = 'Your name is required.'
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'A valid email is required.'
    if (!size) errs.size = 'Please select a size.'
    if (!imageFile) errs.image = 'A reference image is required.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const msg = encodeURIComponent(
      `Hi! I'd like a custom mosaic quote.\n\nName: ${name}\nEmail: ${email}\nSize: ${size}\nNotes: ${notes || 'None'}\n\nI'll send my reference image in this chat.`
    )
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`

    setShowWhatsAppNote(true)
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 48px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mc-gold-deep)' }}>
          ◆ &nbsp;Commission
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 400, color: 'var(--mc-charcoal)', margin: '16px 0 12px', letterSpacing: '-0.01em' }}>
          Begin your commission.
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <GoldRule />
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--mc-grey-warm)', lineHeight: 1.6, margin: 0 }}>
          Tell us about your piece. We will come back with a sketch, stone selection, and a price — usually within 48 hours.
        </p>
      </div>

      {showWhatsAppNote && (
        <div style={{ padding: '16px 20px', background: '#F2EDE4', borderLeft: '3px solid var(--mc-gold)', marginBottom: 28 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--mc-charcoal)', margin: 0 }}>
            WhatsApp has opened. Please send your reference image in that chat — we look forward to hearing from you.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-row">
          <Input
            label="Your name"
            required
            value={name}
            onChange={setName}
            error={errors.name}
            placeholder="Full name"
          />
          <Input
            label="Email address"
            type="email"
            required
            value={email}
            onChange={setEmail}
            error={errors.email}
            placeholder="you@example.com"
          />
        </div>

        {/* Size selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mc-grey-warm)' }}>
            Size / Dimensions <span style={{ color: 'var(--mc-gold)' }}>*</span>
          </label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={{
              padding: '14px 16px',
              border: `1px solid ${errors.size ? 'var(--status-error)' : 'var(--mc-border-strong)'}`,
              background: '#FFFFFF',
              borderRadius: 4,
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: size ? 'var(--mc-charcoal)' : 'var(--mc-grey-soft)',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="">Select a size...</option>
            {sizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.size && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--status-error)' }}>{errors.size}</span>}
        </div>

        <Textarea
          label="Additional notes"
          rows={4}
          value={notes}
          onChange={setNotes}
          placeholder="Tell us about the room, the colour palette, the occasion — anything that will help our artisans understand your vision."
        />

        {/* Image upload */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mc-grey-warm)' }}>
            Reference image <span style={{ color: 'var(--mc-gold)' }}>*</span>
          </label>

          {imagePreview ? (
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: 8 }}>
              <Image src={imagePreview} alt="Reference image preview" fill style={{ objectFit: 'contain', background: '#F2EDE4' }} />
            </div>
          ) : null}

          <div
            onClick={() => fileInputRef.current?.click()}
            style={{
              border: `1px dashed ${errors.image ? 'var(--status-error)' : 'var(--mc-border-strong)'}`,
              padding: '28px 20px',
              textAlign: 'center',
              cursor: 'pointer',
              background: '#FFFFFF',
              borderRadius: 4,
              transition: 'border-color 200ms',
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFile}
              style={{ display: 'none' }}
            />
            {imageFile ? (
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--mc-charcoal)' }}>{imageFile.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mc-grey-warm)', marginTop: 4 }}>
                  {(imageFile.size / 1024 / 1024).toFixed(1)} MB
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setImageFile(null)
                    setImagePreview(null)
                    if (fileInputRef.current) fileInputRef.current.value = ''
                  }}
                  style={{ marginTop: 8, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mc-grey-warm)', textDecoration: 'underline', textUnderlineOffset: 3 }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--mc-charcoal)', marginBottom: 6 }}>
                  Upload your reference image
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mc-grey-warm)' }}>
                  JPG, PNG, or WEBP · Max 10 MB
                </div>
              </div>
            )}
          </div>
          {errors.image && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--status-error)' }}>{errors.image}</span>}
        </div>

        <div style={{ paddingTop: 8 }}>
          <Button variant="gold" type="submit" size="lg" style={{ width: '100%' }}>
            Send enquiry via WhatsApp
          </Button>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--mc-grey-warm)', textAlign: 'center', marginTop: 12 }}>
            WhatsApp will open. Please send your reference image in the chat.
          </p>
        </div>
      </form>

      <style>{`
        @media (max-width: 580px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

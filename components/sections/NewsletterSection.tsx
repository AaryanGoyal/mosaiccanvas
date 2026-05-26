'use client'

import { useState } from 'react'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/config'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section
      style={{
        padding: 'clamp(48px, 7vw, 72px) clamp(24px, 4vw, 48px)',
        background: '#EDE6D8',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <Eyebrow>◆ &nbsp;The Atelier Journal</Eyebrow>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 400,
            color: 'var(--mc-charcoal)',
            margin: '14px 0 14px',
          }}
        >
          Letters from {siteConfig.city}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 17,
            color: 'var(--mc-grey-warm)',
            marginBottom: 28,
            lineHeight: 1.55,
          }}
        >
          A quiet quarterly from {siteConfig.city} — new works, new materials, no noise.
        </p>

        {submitted ? (
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 18,
              color: 'var(--mc-charcoal)',
            }}
          >
            Thank you. We will be in touch from {siteConfig.city}.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'center',
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              required
              placeholder="you@atelier.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 16px',
                border: '1px solid var(--mc-border-strong)',
                background: '#FFFFFF',
                borderRadius: 4,
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                outline: 'none',
                color: 'var(--mc-charcoal)',
              }}
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

import Button from '@/components/ui/Button'
import GoldRule from '@/components/ui/GoldRule'
import Eyebrow from '@/components/ui/Eyebrow'
import { siteConfig } from '@/lib/config'

export default function ContactSection() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}`

  return (
    <section style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(64px, 8vw, 96px) clamp(24px, 4vw, 48px)', textAlign: 'center' }}>
      <Eyebrow>◆ &nbsp;Reach the atelier</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: 'var(--mc-charcoal)', margin: '16px 0 12px', letterSpacing: '-0.01em' }}>
        We respond within 24 hours.
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 28px' }}>
        <GoldRule />
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--mc-grey-warm)', lineHeight: 1.6, margin: '0 0 40px' }}>
        Questions about a piece, a commission, shipping to your country, installation — we are here.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%', maxWidth: 360 }}>
          <Button variant="gold" style={{ width: '100%' }} size="lg">
            Message us on WhatsApp
          </Button>
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'var(--mc-charcoal)',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            textDecorationThickness: 1,
            letterSpacing: '0.02em',
          }}
        >
          {siteConfig.email}
        </a>

        <div style={{ marginTop: 20, padding: '24px 32px', background: 'var(--mc-cream-warm)', borderLeft: '2px solid var(--mc-gold)', textAlign: 'left', maxWidth: 400, width: '100%' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mc-grey-warm)', marginBottom: 8 }}>
            The atelier
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--mc-charcoal)', lineHeight: 1.6 }}>
            {siteConfig.city}, {siteConfig.country}
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--mc-grey-warm)', marginTop: 4 }}>
            Mon – Sat · 10am – 6pm IST
          </div>
        </div>
      </div>
    </section>
  )
}

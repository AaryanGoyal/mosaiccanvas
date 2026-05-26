import Button from '@/components/ui/Button'
import GoldRule from '@/components/ui/GoldRule'
import Eyebrow from '@/components/ui/Eyebrow'

export default function CTABanner() {
  return (
    <section
      style={{
        padding: 'clamp(64px, 8vw, 96px) clamp(24px, 4vw, 48px)',
        background: 'var(--mc-parchment)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Eyebrow>◆ &nbsp;Commissioned for you</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            color: 'var(--mc-charcoal)',
            margin: '4px 0 0',
            letterSpacing: '-0.01em',
          }}
        >
          Something only you will own.
        </h2>
        <GoldRule />
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--mc-grey-warm)',
            lineHeight: 1.55,
            maxWidth: 520,
            margin: '0',
          }}
        >
          Send us your photograph — a portrait, a landscape, a memory — and our artisans in {' '}
          <span style={{ color: 'var(--mc-charcoal)' }}>Jaipur</span> will render it in stone.
          Four to fourteen weeks. One of one.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="gold" href="/custom-quote" size="lg">
            Begin your commission
          </Button>
          <Button variant="ghost" href="/contact" size="lg">
            Ask a question →
          </Button>
        </div>
      </div>
    </section>
  )
}

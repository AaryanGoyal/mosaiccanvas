import Eyebrow from '@/components/ui/Eyebrow'
import GoldRule from '@/components/ui/GoldRule'

const steps = [
  {
    num: '01',
    heading: 'Composition',
    detail:
      'We sketch the piece by hand, selecting stones from our library of 400+ natural materials.',
  },
  {
    num: '02',
    heading: 'Cutting',
    detail:
      'Each tessera is chiseled one by one — no lasers, no machines. 8,000 to 16,000 per composition.',
  },
  {
    num: '03',
    heading: 'Setting',
    detail:
      'Stones are laid into the canvas over 4–14 weeks, then grouted, polished, and honed.',
  },
  {
    num: '04',
    heading: 'Delivery',
    detail:
      'Crated in kiln-dried pine, insured, and shipped white-glove to your wall in 120+ countries.',
  },
]

export default function ProcessSection() {
  return (
    <section
      style={{
        padding: 'clamp(64px, 8vw, 96px) clamp(24px, 4vw, 48px)',
        background: '#1A1A1A',
        color: '#F9F7F4',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow light>◆ &nbsp;How a mosaic is made</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4.5vw, 52px)',
            fontWeight: 400,
            margin: '16px 0 12px',
            letterSpacing: '-0.01em',
            color: '#F9F7F4',
          }}
        >
          From stone to your wall.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
          <GoldRule />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
            textAlign: 'left',
          }}
          className="process-grid"
        >
          {steps.map(({ num, heading, detail }) => (
            <div key={num}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 44,
                  color: 'var(--mc-gold)',
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 22,
                  fontWeight: 500,
                  margin: '10px 0',
                  color: '#F9F7F4',
                }}
              >
                {heading}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: '#B5AFA4',
                }}
              >
                {detail}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

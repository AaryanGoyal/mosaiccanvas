const items = [
  { heading: 'Every tile, by hand', sub: 'No machines. No prints. Real stone.' },
  { heading: 'Free white-glove shipping', sub: 'On orders over CAD $5,000, worldwide.' },
  { heading: '100-year provenance', sub: 'Signed certificate with every piece.' },
  { heading: '30-day home trial', sub: 'Return, no questions asked.' },
]

export default function ValueStrip() {
  return (
    <section
      style={{
        background: 'var(--mc-cream-warm)',
        padding: '28px clamp(24px, 4vw, 48px)',
        borderTop: '1px solid #E8E4DF',
        borderBottom: '1px solid #E8E4DF',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}
        className="value-strip-grid"
      >
        {items.map(({ heading, sub }) => (
          <div key={heading} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 17,
                fontWeight: 500,
                color: 'var(--mc-charcoal)',
              }}
            >
              {heading}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: 'var(--mc-grey-warm)',
                letterSpacing: '0.02em',
              }}
            >
              {sub}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .value-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .value-strip-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

import GoldRule from '@/components/ui/GoldRule'

const testimonials = [
  {
    quote:
      '"The tiles arrive crated in pine, each one a small stone kept steady by another. Hung, they read as one breath."',
    author: 'Catherine Voss',
    role: 'Interior Architect, Amsterdam',
  },
  {
    quote:
      '"We commissioned a piece for our hotel lobby. The artisans corresponded with us at every stage — it felt like a collaboration, not a transaction. Guests ask about it every single day."',
    author: 'James Whitmore',
    role: 'Owner, The Clifton Hotel, Bristol',
  },
  {
    quote:
      '"Four months later and I still stop to look at it every morning. The light changes the whole composition. I have never owned anything quite like it."',
    author: 'Priya Sundaram',
    role: 'Collector, Vancouver',
  },
]

const pressQuotes = [
  'AD · "An ancient craft, for a modern room"',
  'Kinfolk · "Slow art, done properly"',
  'Vogue Living · "A heirloom, framed"',
]

export default function TestimonialsSection() {
  return (
    <section
      style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 4vw, 48px)',
        background: '#F9F7F4',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GoldRule />

        {/* Featured testimonial */}
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 36px)',
              lineHeight: 1.3,
              color: 'var(--mc-charcoal)',
              margin: '36px 0',
            }}
          >
            {testimonials[0].quote}
          </blockquote>

          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--mc-grey-warm)',
            }}
          >
            {testimonials[0].author} &nbsp;·&nbsp; {testimonials[0].role}
          </div>

        {/* Additional testimonials */}
        <div
          style={{
            marginTop: 64,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 32,
            textAlign: 'left',
            width: '100%',
          }}
          className="testimonials-grid"
        >
          {testimonials.slice(1).map(({ quote, author, role }) => (
              <div
              key={author}
                style={{
                  padding: '28px 32px',
                  background: 'var(--mc-cream-warm)',
                  borderLeft: '2px solid var(--mc-gold)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: 17,
                    lineHeight: 1.55,
                    color: 'var(--mc-charcoal)',
                    margin: '0 0 16px',
                  }}
                >
                  {quote}
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--mc-grey-warm)',
                  }}
                >
                  {author} · {role}
                </div>
              </div>
          ))}
        </div>

        {/* Press mentions */}
          <div
            style={{
              marginTop: 56,
              display: 'flex',
              gap: 48,
              flexWrap: 'wrap',
              justifyContent: 'center',
              color: 'var(--mc-grey-soft)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 15,
            }}
          >
            {pressQuotes.map((q) => (
              <span key={q}>{q}</span>
            ))}
          </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

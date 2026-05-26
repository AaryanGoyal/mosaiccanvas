import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import GoldRule from '@/components/ui/GoldRule'
import Eyebrow from '@/components/ui/Eyebrow'
import { siteConfig } from '@/lib/config'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l5-5" /><path d="M9 15l6-6 4 4-6 6z" /><path d="M14 4l6 6" />
      </svg>
    ),
    text: 'Hand-cut by master artisans over 4–14 weeks',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20c0-8 6-14 14-14 0 8-6 14-14 14zM5 20c0-4 2-7 5-9" />
      </svg>
    ),
    text: 'Natural marble, stone & gold leaf — never printed',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: 'Insured white-glove delivery, 120+ countries',
  },
]

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'clamp(540px, 80vh, 780px)',
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        background: '#F9F7F4',
      }}
      className="hero-section"
    >
      {/* Left: Content */}
      <div
        style={{
          padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Eyebrow>◆ &nbsp;Handcrafted in {siteConfig.city} · Shipped worldwide</Eyebrow>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 8vw, 100px)',
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            color: '#1A1A1A',
            margin: '26px 0 14px',
            fontWeight: 400,
          }}
        >
          Mosaic Art,
          <br />
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--mc-gold)',
              fontSize: '0.92em',
              letterSpacing: '-0.01em',
            }}
          >
            on Canvas.
          </span>
        </h1>

        <div style={{ margin: '8px 0 22px' }}>
          <GoldRule width={64} />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 1.8vw, 22px)',
            color: 'var(--mc-grey-warm)',
            lineHeight: 1.45,
            maxWidth: 520,
            margin: '0 0 18px',
          }}
        >
          Original wall art, composed tessera by tessera from cut marble, stone, and 22k gold leaf — then mounted, framed, and sent to your wall.
        </p>

        <ul
          style={{
            listStyle: 'none',
            margin: '0 0 38px',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {features.map(({ icon, text }) => (
            <li
              key={text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--mc-charcoal)',
              }}
            >
              <span style={{ color: 'var(--mc-gold-deep)', display: 'flex', flexShrink: 0 }}>
                {icon}
              </span>
              {text}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="gold" href="/products">
            Shop the collection
          </Button>
          <Button variant="ghost" href="/custom-quote">
            Commission your own →
          </Button>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            gap: 'clamp(20px, 3vw, 36px)',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { stat: '4.9★', label: 'from 1,200+ collectors' },
            { stat: '40+ years', label: `three generations in ${siteConfig.city}` },
            { stat: '120+', label: 'countries shipped' },
          ].map(({ stat, label }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 2.5vw, 36px)' }}>
              {i > 0 && (
                <div style={{ width: 1, height: 38, background: '#E8E4DF', flexShrink: 0 }} />
              )}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 28,
                    color: 'var(--mc-charcoal)',
                    lineHeight: 1,
                  }}
                >
                  {stat}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: 13,
                    color: 'var(--mc-grey-soft)',
                    marginTop: 4,
                  }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Featured image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/products/peacock/main.png"
          alt="Peacock, Unfurled — featured mosaic wall art"
          fill
          priority
          sizes="50vw"
          style={{ objectFit: 'cover', display: 'block' }}
        />
        {/* Featured overlay card */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: 32,
            right: 32,
            background: 'rgba(26,26,26,0.82)',
            backdropFilter: 'blur(8px)',
            color: '#F9F7F4',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <div style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
            <Image
              src="/images/products/peacock/detail.png"
              alt="Peacock detail"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#EADBAE',
              }}
            >
              Featured · Animals
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 20,
                fontWeight: 500,
                marginTop: 3,
              }}
            >
              Peacock, Unfurled
            </div>
          </div>
          <Link
            href="/products/peacock"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 26,
              color: 'var(--mc-gold)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            CAD $9,200
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
          }
          .hero-section > div:last-child {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  )
}

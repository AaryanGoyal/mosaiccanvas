'use client'

import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import Eyebrow from '@/components/ui/Eyebrow'
import { getFeaturedProducts } from '@/lib/products'

export default function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section
      style={{
        padding: 'clamp(64px, 8vw, 96px) clamp(24px, 4vw, 48px)',
        background: 'var(--mc-cream-warm)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          maxWidth: 1280,
          margin: '0 auto 44px',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <Eyebrow>◆ &nbsp;Just off the bench</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 400,
              color: 'var(--mc-charcoal)',
              margin: '14px 0 0',
              letterSpacing: '-0.01em',
            }}
          >
            Recently finished works
          </h2>
        </div>
        <Link
          href="/products"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--mc-charcoal)',
            borderBottom: '1px solid var(--mc-gold)',
            paddingBottom: 4,
            textDecoration: 'none',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--mc-gold-deep)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mc-charcoal)')}
        >
          Shop all →
        </Link>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
        className="featured-grid"
      >
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

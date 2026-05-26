'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Product } from '@/lib/types'
import { siteConfig } from '@/lib/config'
import Button from '@/components/ui/Button'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedDimension, setSelectedDimension] = useState(0)

  const selectedDim = product.dimensions[selectedDimension]

  const waMsg = encodeURIComponent(
    `Hi, I'm interested in: ${product.name}\n\nSize: ${selectedDim.label} (${selectedDim.size})\n\nCould you tell me more about this piece?`
  )
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waMsg}`

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,4vw,48px)' }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: 32, display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mc-grey-warm)', letterSpacing: '0.08em' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        <span>→</span>
        <Link href="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link>
        <span>→</span>
        <span style={{ color: 'var(--mc-charcoal)' }}>{product.name}</span>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)' }} className="pdp-grid">
        {/* Image gallery */}
        <div>
          <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', marginBottom: 12 }}>
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              priority
              sizes="50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                style={{
                  position: 'relative',
                  width: 72,
                  height: 72,
                  border: `2px solid ${activeImage === i ? 'var(--mc-gold)' : 'transparent'}`,
                  padding: 0,
                  cursor: 'pointer',
                  background: 'none',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <Image src={img} alt={`${product.name} view ${i + 1}`} fill style={{ objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mc-gold-deep)', marginBottom: 8 }}>
              {product.category}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: 'var(--mc-charcoal)', margin: 0, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              {product.name}
            </h1>
          </div>

          {product.tesserae && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 32, height: 1, background: 'var(--mc-gold)', display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--mc-grey-warm)' }}>
                {product.tesserae} hand-cut tesserae
              </span>
            </div>
          )}

          {/* Dimensions */}
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mc-grey-warm)', marginBottom: 10 }}>
              Size
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {product.dimensions.map((dim, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDimension(i)}
                  style={{
                    padding: '10px 16px',
                    border: `1px solid ${selectedDimension === i ? 'var(--mc-charcoal)' : 'var(--mc-border-strong)'}`,
                    background: selectedDimension === i ? 'var(--mc-charcoal)' : 'transparent',
                    color: selectedDimension === i ? '#F9F7F4' : 'var(--mc-charcoal)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    transition: 'all 200ms',
                    borderRadius: 2,
                  }}
                >
                  {dim.label} — {dim.size}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 42, color: 'var(--mc-gold-deep)', letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>
            {product.currency} ${selectedDim.price.toLocaleString()}
          </div>

          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--mc-grey-warm)', lineHeight: 1.7, margin: 0 }}>
            {product.description}
          </p>

          {/* Materials */}
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mc-grey-warm)', marginBottom: 10 }}>
              Materials
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {product.materials.map((mat) => (
                <span
                  key={mat}
                  style={{
                    padding: '4px 12px',
                    background: 'var(--mc-cream-warm)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12,
                    color: 'var(--mc-charcoal)',
                    borderRadius: 2,
                  }}
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="gold" style={{ width: '100%' }}>
                Enquire on WhatsApp
              </Button>
            </a>
            <Button variant="ghost" href="/custom-quote" style={{ width: '100%' }}>
              Commission a similar piece →
            </Button>
          </div>

          {/* Trust signals */}
          <div style={{ borderTop: '1px solid var(--mc-border)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Insured white-glove worldwide shipping', 'Signed certificate of provenance', '30-day return policy'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--mc-grey-warm)' }}>
                <span style={{ color: 'var(--mc-gold)', fontSize: 10 }}>◆</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pdp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

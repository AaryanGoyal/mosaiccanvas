'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Product } from '@/lib/types'
import { siteConfig } from '@/lib/config'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false)

  const waMsg = encodeURIComponent(`Hi, I'm interested in: ${product.name}`)
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waMsg}`

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        boxShadow: hovered
          ? '0 10px 28px -10px rgba(45,45,45,0.18)'
          : '0 1px 2px rgba(45,45,45,0.06)',
        transition: 'box-shadow 460ms cubic-bezier(0.22,0.61,0.36,1)',
      }}
    >
      <Link href={`/products/${product.slug}`} style={{ display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '1/1' }}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 600ms cubic-bezier(0.22,0.61,0.36,1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            background: 'rgba(249,247,244,0.92)',
            padding: '5px 10px',
            fontFamily: 'var(--font-sans)',
            fontSize: 9.5,
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--mc-gold-deep)',
          }}
        >
          {product.category}
        </div>
        <div
          className="product-card-actions"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 14,
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 300ms cubic-bezier(0.22,0.61,0.36,1)',
          }}
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'block',
              width: '100%',
              background: 'var(--mc-charcoal)',
              color: '#F9F7F4',
              border: 0,
              padding: '12px',
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            Enquire on WhatsApp
          </a>
        </div>
      </Link>
      <Link
        href={`/products/${product.slug}`}
        style={{ display: 'block', padding: '18px 20px 22px', textDecoration: 'none' }}
      >
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            fontWeight: 500,
            color: 'var(--mc-charcoal)',
            lineHeight: 1.15,
          }}
        >
          {product.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 14,
            color: 'var(--mc-grey-soft)',
            marginTop: 4,
          }}
        >
          {product.shortDescription}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginTop: 12,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: 500,
              color: 'var(--mc-charcoal)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            from {product.currency} ${product.dimensions[0].price.toLocaleString()}
          </div>
          {product.tesserae && (
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--mc-grey-soft)',
              }}
            >
              {product.tesserae} tesserae
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

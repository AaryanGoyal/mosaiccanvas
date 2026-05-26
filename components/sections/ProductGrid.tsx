'use client'

import { useState, useMemo } from 'react'
import ProductCard from '@/components/ui/ProductCard'
import type { Product } from '@/lib/types'

interface ProductGridProps {
  products: Product[]
  categories: string[]
  initialCategory?: string
}

export default function ProductGrid({ products, categories, initialCategory = 'All' }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [sort, setSort] = useState('Featured')

  const filtered = useMemo(() => {
    let list = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)
    if (sort === 'Price · Low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price · High') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [products, activeCategory, sort])

  const allCats = ['All', ...categories]

  return (
    <div>
      {/* Filters */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 20,
          borderBottom: '1px solid var(--mc-border)',
          marginBottom: 28,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {allCats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: activeCategory === cat ? 'var(--mc-gold-deep)' : 'var(--mc-grey-warm)',
                paddingBottom: 6,
                borderBottom: `1px solid ${activeCategory === cat ? 'var(--mc-gold)' : 'transparent'}`,
                transition: 'color 200ms, border-color 200ms',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--mc-grey-soft)',
            }}
          >
            Sort
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              border: '1px solid var(--mc-border-strong)',
              background: '#FFFFFF',
              padding: '8px 12px',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--mc-charcoal)',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            <option>Featured</option>
            <option>Price · Low</option>
            <option>Price · High</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
        className="product-grid"
      >
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '80px 20px',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--mc-grey-soft)',
          }}
        >
          No works found in this collection.
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

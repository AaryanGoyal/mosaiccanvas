import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import ProductGrid from '@/components/sections/ProductGrid'
import { getAllProducts, getCategories } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop Mosaic Art — Mosaic Canvas',
  description:
    'Browse all handcrafted mosaic wall art — famous artworks, floral compositions, animal portraits, and custom commissions.',
}

export default function ProductsPage() {
  const products = getAllProducts()
  const categories = getCategories()

  return (
    <section style={{ padding: 'clamp(48px, 6vw, 72px) clamp(24px, 4vw, 48px) 120px', background: '#F9F7F4' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <SectionHeader
            eyebrow="Shop"
            title="Mosaic Art on Canvas"
            subtitle="Every piece is cut by hand. Every piece is one-of-one."
          />
        </div>
        <ProductGrid products={products} categories={categories} />
      </div>
    </section>
  )
}

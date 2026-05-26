import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/sections/ProductDetail'
import { getProductBySlug, getAllProductSlugs } from '@/lib/products'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.metaTitle,
    description: product.metaDescription,
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <div style={{ background: '#F9F7F4' }}>
      <ProductDetail product={product} />
    </div>
  )
}

import productsData from '@/content/products.json'
import type { Product } from '@/lib/types'

export function getAllProducts(): Product[] {
  return productsData as Product[]
}

export function getFeaturedProducts(): Product[] {
  return (productsData as Product[]).filter((p) => p.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return (productsData as Product[]).find((p) => p.slug === slug)
}

export function getCategories(): string[] {
  const cats = (productsData as Product[]).map((p) => p.category)
  return Array.from(new Set(cats))
}

export function getProductsByCategory(category: string): Product[] {
  return (productsData as Product[]).filter((p) => p.category === category)
}

export function getAllProductSlugs(): string[] {
  return (productsData as Product[]).map((p) => p.slug)
}

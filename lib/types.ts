export interface ProductDimension {
  label: string
  size: string
  price: number
}

export interface Product {
  id: string
  name: string
  slug: string
  price: number
  currency: string
  category: string
  description: string
  shortDescription: string
  images: string[]
  dimensions: ProductDimension[]
  materials: string[]
  featured: boolean
  inStock: boolean
  tags: string[]
  metaTitle: string
  metaDescription: string
  tesserae?: string
}

export interface Post {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
  coverImage: string
  tags: string[]
  readTime: string
  metaTitle: string
  metaDescription: string
}

# lib/ — Utilities & Configuration

---

## config.ts — Site Configuration (EDIT THIS FILE)

All site-wide configuration lives here. This is the only file you need to edit for contact details.

```ts
export const siteConfig = {
  name: 'Mosaic Canvas',
  tagline: 'Handcrafted Mosaic Wall Art',
  url: 'https://mosaiccanvas.com',
  whatsappNumber: '15483336078',  // ← Replace with real number (no + or spaces)
  email: 'hello@mosaiccanvas.com',
  instagram: 'https://instagram.com/mosaiccanvas',
  currency: 'CAD',
}
```

**Never hardcode the WhatsApp number anywhere else. Always import from here.**

---

## products.ts — Product Helpers

```ts
import productsData from '@/content/products.json'
import type { Product } from '@/types'

// Get all products
export function getAllProducts(): Product[] { ... }

// Get featured products (featured: true)
export function getFeaturedProducts(): Product[] { ... }

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined { ... }

// Get all unique categories
export function getCategories(): string[] { ... }

// Get products by category
export function getProductsByCategory(category: string): Product[] { ... }

// Get all slugs (for generateStaticParams)
export function getAllProductSlugs(): string[] { ... }
```

---

## posts.ts — Post Helpers

```ts
import postsData from '@/content/posts.json'
import type { Post } from '@/types'

// Get all posts sorted by date descending
export function getAllPosts(): Post[] { ... }

// Get post by slug
export function getPostBySlug(slug: string): Post | undefined { ... }

// Get all slugs (for generateStaticParams)
export function getAllPostSlugs(): string[] { ... }

// Get posts by tag
export function getPostsByTag(tag: string): Post[] { ... }
```

---

## types.ts — TypeScript Types

Define types that mirror the JSON schemas:

```ts
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
```

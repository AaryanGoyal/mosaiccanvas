# Content Directory — Data Layer

All site content lives in JSON files here. No database, no CMS, no API calls.
Adding a product or blog post = editing a JSON file. That's it.

---

## products.json — Schema

Each product object:
```json
{
  "id": "unique-id",
  "name": "Product Display Name",
  "slug": "url-friendly-slug",
  "price": 499,
  "currency": "CAD",
  "category": "Famous Artworks",
  "description": "Full product description. Can be multiple sentences.",
  "shortDescription": "One-line summary shown on product cards.",
  "images": [
    "/images/products/slug/main.jpg",
    "/images/products/slug/lifestyle.jpg",
    "/images/products/slug/detail.jpg"
  ],
  "dimensions": [
    { "label": "Small", "size": "12\" × 16\"", "price": 299 },
    { "label": "Medium", "size": "18\" × 24\"", "price": 499 },
    { "label": "Large", "size": "24\" × 32\"", "price": 799 }
  ],
  "materials": ["Marble", "Natural Stone"],
  "featured": true,
  "inStock": true,
  "tags": ["art", "marble", "classic"],
  "metaTitle": "SEO page title (60 chars max)",
  "metaDescription": "SEO description (160 chars max)"
}
```

### Valid Categories
- `"Famous Artworks"` — reproductions of classical paintings
- `"Animals"` — wildlife and animal portraits
- `"Floral"` — flowers and botanical designs
- `"Nature"` — landscapes, trees, abstract nature
- `"Religious"` — religious scenes and iconography
- `"Custom"` — custom portrait commissions

### featured flag
Set `"featured": true` on up to 6 products. These appear in the homepage featured section.

---

## posts.json — Schema

Each blog post object:
```json
{
  "id": "unique-id",
  "title": "Blog Post Title",
  "slug": "url-friendly-slug",
  "date": "2025-03-15",
  "excerpt": "Short summary shown on blog index cards (2-3 sentences).",
  "content": "Full post content in Markdown format.\n\nSupports **bold**, *italic*, headings, and lists.",
  "coverImage": "/images/blog/slug/cover.jpg",
  "tags": ["craft", "mosaic", "art"],
  "readTime": "5 min read",
  "metaTitle": "SEO title",
  "metaDescription": "SEO description"
}
```

---

## Image Conventions
- Product images: `/public/images/products/[slug]/` — three images: main, lifestyle, detail
- Blog cover images: `/public/images/blog/[slug]/cover.jpg`
- Use placeholder images from `https://placehold.co/` during development
- Final images are generated via Gemini AI and placed in the correct folders

---

## Pre-populated Products (7 initial products)
The following slugs must exist in products.json:
1. `girl-with-a-pearl-earring` — Famous Artworks, featured
2. `lion-portrait` — Animals, featured
3. `lotus-bloom` — Floral, featured
4. `peacock` — Nature, featured
5. `rose-bouquet` — Floral
6. `sunflowers` — Famous Artworks, featured
7. `wild-garden` — Nature

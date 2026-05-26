# Mosaic Canvas — Website

Premium handcrafted mosaic wall art. mosaiccanvas.com

---

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel
1. Push to GitHub
2. Import repo on vercel.com
3. Deploy — no environment variables needed

---

## Adding a Product

Open `content/products.json` and add a new object to the array:

```json
{
  "id": "my-new-product",
  "name": "Starry Night",
  "slug": "starry-night",
  "price": 499,
  "currency": "CAD",
  "category": "Famous Artworks",
  "description": "Van Gogh's iconic masterpiece rendered in hand-cut glass mosaic...",
  "shortDescription": "Van Gogh's swirling night sky in glass mosaic.",
  "images": [
    "/images/products/starry-night/main.jpg",
    "/images/products/starry-night/lifestyle.jpg",
    "/images/products/starry-night/detail.jpg"
  ],
  "dimensions": [
    { "label": "Small", "size": "12\" × 16\"", "price": 299 },
    { "label": "Medium", "size": "18\" × 24\"", "price": 499 },
    { "label": "Large", "size": "24\" × 32\"", "price": 799 }
  ],
  "materials": ["Glass", "Grout"],
  "featured": false,
  "inStock": true,
  "tags": ["van gogh", "impressionism", "glass"],
  "metaTitle": "Starry Night Mosaic Wall Art — Mosaic Canvas",
  "metaDescription": "Hand-cut glass mosaic reproduction of Van Gogh's Starry Night. Available in 3 sizes. Made in India."
}
```

Then add product images to `/public/images/products/starry-night/`.

**No code changes required.** The site picks it up automatically.

---

## Adding a Blog Post

Open `content/posts.json` and add a new object:

```json
{
  "id": "my-post-id",
  "title": "How We Choose Our Marble",
  "slug": "how-we-choose-marble",
  "date": "2025-04-10",
  "excerpt": "Every piece of marble that enters our workshop has a story...",
  "content": "# How We Choose Our Marble\n\nEvery piece begins with...",
  "coverImage": "/images/blog/how-we-choose-marble/cover.jpg",
  "tags": ["craft", "materials", "marble"],
  "readTime": "4 min read",
  "metaTitle": "How We Choose Our Marble — Mosaic Canvas Journal",
  "metaDescription": "A behind-the-scenes look at how we source and select marble for our mosaic art."
}
```

Content supports full Markdown.

---

## Updating Contact Details

Edit `lib/config.ts`:
```ts
export const siteConfig = {
  whatsappNumber: '91XXXXXXXXXX',  // ← Your number (no + or spaces)
  email: 'hello@mosaiccanvas.com',
}
```

---

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Deployed on Vercel

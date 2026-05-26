# App Directory — Pages

Each page in the App Router. All pages must:
1. Export a `generateMetadata` function for SEO
2. Be fully server-rendered where possible (use `async` server components)
3. Compose sections from `@/components/sections/`
4. Be mobile responsive

---

## Pages

### `/` — Landing Page (`page.tsx`)
Sections in order:
1. `<Hero />` — headline, subheadline, two CTA buttons: "Explore Collection" → `/products`, "Get a Custom Quote" → `/custom-quote`
2. `<FeaturedProducts />` — reads products where `featured: true` from `products.json`
3. `<AboutSection />` — brand story, craftsmanship
4. `<TestimonialsSection />` — 3 hardcoded testimonials
5. `<CTABanner />` — gold background, drives to custom quote

SEO title: `Mosaic Canvas — Handcrafted Mosaic Wall Art`

---

### `/products` — Product Grid (`products/page.tsx`)
- Fetch all products from `products.json` using `lib/products.ts`
- Category filter tabs at top (All + each unique category)
- `<ProductGrid />` renders filtered products
- Client component for filter interactivity

SEO title: `Shop Mosaic Art — Mosaic Canvas`

---

### `/products/[slug]` — Product Detail (`products/[slug]/page.tsx`)
- `generateStaticParams` from all product slugs
- Image gallery (main image + thumbnails)
- Product name, price (show base price with "from CAD $X")
- Dimension selector (maps to price)
- Description
- "Enquire on WhatsApp" button — opens WA with product name
- Materials list
- Breadcrumb: Home → Products → [Product Name]

SEO title: `[Product Name] Mosaic Wall Art — Mosaic Canvas`

---

### `/blog` — Blog Index (`blog/page.tsx`)
- Fetch all posts from `posts.json` using `lib/posts.ts`
- `<BlogGrid />` — sorted by date descending
- Tag filter (optional, implement if straightforward)

SEO title: `Journal — Mosaic Canvas`

---

### `/blog/[slug]` — Blog Post (`blog/[slug]/page.tsx`)
- `generateStaticParams` from all post slugs
- Render `post.content` as markdown (use `react-markdown` or `next-mdx-remote`)
- Show: cover image, title, date, read time, tags
- Breadcrumb: Home → Journal → [Post Title]

SEO title: `[Post Title] — Mosaic Canvas Journal`

---

### `/contact` — Contact (`contact/page.tsx`)
Show:
- WhatsApp button (primary CTA) using `siteConfig.whatsappNumber`
- Email address from `siteConfig.email`
- Brief text: "We respond within 24 hours"
- Optional: simple contact form (name, email, message) that opens WhatsApp

SEO title: `Contact Us — Mosaic Canvas`

---

### `/custom-quote` — Custom Quote (`custom-quote/page.tsx`)
This is the key page. Build `<QuoteForm />`:

**Form fields:**
1. Name (required)
2. Email (required)
3. Size / Dimensions (dropdown or text)
4. Additional notes (textarea)
5. Reference image upload (required)

**Image upload behaviour:**
- Client-side only — no server upload, no external service
- Show image preview immediately after file selection
- Accept: JPG, PNG, WEBP (max 10MB — validate client-side)
- Show file name and size after selection
- "Remove" button to clear selection

**On submit:**
- Validate all fields
- Open WhatsApp with pre-filled message:
  ```
  Hi! I'd like a custom mosaic quote.
  
  Name: [name]
  Email: [email]
  Size: [size]
  Notes: [notes]
  
  I'll send my reference image in this chat.
  ```
- Show a note to the user: "WhatsApp will open. Please send your reference image in the chat."

SEO title: `Custom Mosaic Quote — Mosaic Canvas`

---

## Layout (`layout.tsx`)
- Wrap all pages in `<Header />` and `<Footer />`
- Import global styles
- Set root font families
- Add Google Fonts: Playfair Display + Inter (or DM Sans)

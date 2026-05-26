# Components — Design & Architecture Rules

All components must faithfully implement the design from:
```
https://api.anthropic.com/v1/design/h/pKkcM-5Sr6BjHFRtaUpKeQ?open_file=Mosaic+Canvas+Store.html
```

---

## Directory Structure

```
components/
├── ui/           ← Primitive, reusable atoms
├── layout/       ← Site-wide structural components
└── sections/     ← Full page sections (used in app/ pages)
```

---

## ui/ — Primitive Components

Build these first. All other components compose from these.

| Component     | Props                                         | Notes                                              |
|---------------|-----------------------------------------------|----------------------------------------------------|
| `Button`      | `variant`, `size`, `href`, `onClick`          | variants: `primary`, `secondary`, `ghost`, `gold`  |
| `Input`       | `label`, `type`, `error`, `required`          | Always show label above input                      |
| `Textarea`    | `label`, `rows`, `error`, `required`          | Same style as Input                                |
| `Badge`       | `label`, `color`                              | Category tags on product/blog cards                |
| `SectionHeader` | `eyebrow`, `title`, `subtitle`, `align`     | Consistent heading block for all sections          |
| `ProductCard` | `product` (from products.json schema)         | Used on product grid and homepage featured         |
| `BlogCard`    | `post` (from posts.json schema)               | Used on blog index                                 |

---

## layout/ — Structural Components

| Component  | Notes                                                                          |
|------------|--------------------------------------------------------------------------------|
| `Header`   | Logo (text-based MC ligature), nav links, mobile hamburger menu                |
| `Footer`   | Logo, nav columns, WhatsApp link, copyright                                    |
| `Nav`      | Links: Home, Products, Journal, Custom Quote, Contact                          |

**Nav links:**
- Home → `/`
- Products → `/products`
- Journal → `/blog`
- Custom Quote → `/custom-quote`
- Contact → `/contact`

---

## sections/ — Page Sections

| Component          | Used on    | Notes                                            |
|--------------------|------------|--------------------------------------------------|
| `Hero`             | `/`        | Full-width, headline, subtext, two CTAs          |
| `FeaturedProducts` | `/`        | Grid of products where `featured: true`          |
| `AboutSection`     | `/`        | Brand story, craftsmanship focus                 |
| `TestimonialsSection` | `/`     | Static testimonials (hardcode 3)                 |
| `CTABanner`        | `/`        | Gold background, CTA to custom quote page        |
| `ProductGrid`      | `/products` | All products, filter by category                |
| `ProductDetail`    | `/products/[slug]` | Image gallery, info, WhatsApp enquiry   |
| `BlogGrid`         | `/blog`    | All blog post cards                              |
| `BlogPost`         | `/blog/[slug]` | Full post content rendered from markdown    |
| `ContactSection`   | `/contact` | WhatsApp button, email, brief form               |
| `QuoteForm`        | `/custom-quote` | File upload (client-side preview), form, WhatsApp submit |

---

## WhatsApp Integration

Import config from `@/lib/config.ts`. Never hardcode the phone number.

```ts
import { siteConfig } from '@/lib/config'

// Product enquiry
const msg = encodeURIComponent(`Hi, I'm interested in: ${product.name}`)
const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`

// Custom quote submit
const msg = encodeURIComponent(
  `Hi, I'd like a custom mosaic quote!\n\nName: ${name}\nEmail: ${email}\nSize: ${size}\nNotes: ${notes}\n\n(I'll send my reference image separately)`
)
const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`
```

---

## Design Rules
1. Extract ALL styles from the design file — do not invent styles
2. Use CSS variables from `globals.css` for all brand colors
3. Never hardcode hex colors in components — always use `var(--color-name)`
4. Hover states must use gold accent (`var(--color-accent)`)
5. All images must use Next.js `<Image>` with meaningful `alt` text
6. Animate subtly — fade-in on scroll for sections, hover lifts for cards
7. Mobile-first — design for 375px, scale up to 1440px

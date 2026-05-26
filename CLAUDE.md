# Mosaic Canvas — Claude Code Context

## Project Overview
Mosaic Canvas (mosaiccanvas.com) is a premium handcrafted mosaic wall art e-commerce brand.
Products are stone, marble, and glass mosaics manufactured in India, sold globally (initial focus: Canada).
Positioning: fine art / luxury wall decor — NOT commodity tiles.

## Design System
**Always fetch and implement the design from this URL before writing any UI code:**
```
https://api.anthropic.com/v1/design/h/pKkcM-5Sr6BjHFRtaUpKeQ?open_file=Mosaic+Canvas+Store.html
```
Read the embedded README in that file. Extract all CSS variables, typography, spacing, component styles,
and layout patterns. Implement them faithfully as Tailwind CSS variables and custom classes.

### Brand Tokens (reference — the design file is authoritative)
| Token         | Value     | Usage                          |
|---------------|-----------|--------------------------------|
| Primary       | `#2D2D2D` | Charcoal — text, nav, footer   |
| Accent/Gold   | `#C9A84C` | CTAs, highlights, borders      |
| Background    | `#FFFFFF` | Page background                |
| Cream         | `#F9F7F4` | Section backgrounds            |
| Warm Grey     | `#6B6B6B` | Body text, captions            |
| Dark Slate    | `#3A3A3A` | Sub-headings                   |
| Border        | `#E8E4DF` | Cards, dividers                |

### Typography
- Headings: Didot-style high-contrast serif (use `Playfair Display` from Google Fonts as fallback)
- Body: Clean sans-serif (`Inter` or `DM Sans`)
- Tone: Luxury fine art — refined, editorial, minimal

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with CSS custom properties
- **Data**: JSON files in `/content/` — NO external CMS, NO database
- **Enquiries**: WhatsApp redirect (number configured in `/lib/config.ts`)
- **Deployment**: Vercel

## Repo Structure
```
mosaic-canvas/
├── CLAUDE.md                  ← You are here
├── app/                       ← Next.js App Router pages
│   ├── page.tsx               ← Landing page
│   ├── products/
│   │   ├── page.tsx           ← Product grid
│   │   └── [slug]/page.tsx    ← Product detail
│   ├── blog/
│   │   ├── page.tsx           ← Blog index
│   │   └── [slug]/page.tsx    ← Blog post
│   ├── contact/page.tsx       ← Contact page
│   └── custom-quote/page.tsx  ← Custom quote / image upload
├── components/
│   ├── ui/                    ← Primitives: Button, Input, Badge, etc.
│   ├── layout/                ← Header, Footer, Nav
│   └── sections/              ← Page sections: Hero, FeaturedProducts, etc.
├── content/
│   ├── products.json          ← All product data (ADD PRODUCTS HERE)
│   └── posts.json             ← All blog posts (ADD POSTS HERE)
├── lib/
│   ├── config.ts              ← WhatsApp number, site config
│   ├── products.ts            ← Product data helpers
│   └── posts.ts               ← Post data helpers
├── public/
│   └── images/                ← Static images
└── styles/
    └── globals.css            ← CSS variables from design system
```

## Key Conventions
- See `CLAUDE.md` files inside each subdirectory for detailed instructions
- All data is driven from JSON — no hardcoded product/post content in components
- WhatsApp number and contact info live ONLY in `/lib/config.ts`
- Images use Next.js `<Image>` component with proper `alt` text always
- Every page must have SEO metadata via Next.js Metadata API
- Mobile-first responsive design throughout
- No external APIs, no environment variables needed

## Adding Content (NO CODE CHANGES REQUIRED)
- **New product**: Add entry to `content/products.json` → see `content/CLAUDE.md`
- **New blog post**: Add entry to `content/posts.json` → see `content/CLAUDE.md`

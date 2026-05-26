# Claude Code — Initial Build Prompt

Paste this into Claude Code to kick off the build.

---

Fetch this design file, read its readme, and implement the relevant aspects of the design:
https://api.anthropic.com/v1/design/h/pKkcM-5Sr6BjHFRtaUpKeQ?open_file=Mosaic+Canvas+Store.html
Implement: Mosaic Canvas Store.html

This is the Mosaic Canvas e-commerce site. The repo already has CLAUDE.md files in every
directory — read them all before writing any code. They contain the full spec.

Start with this order:
1. Read CLAUDE.md (root)
2. Read app/CLAUDE.md, components/CLAUDE.md, lib/CLAUDE.md, content/CLAUDE.md
3. Fetch and parse the design file URL above
4. Set up Next.js 14 project with Tailwind CSS and TypeScript
5. Create styles/globals.css with all CSS variables from the design file
6. Create lib/config.ts, lib/types.ts, lib/products.ts, lib/posts.ts
7. Populate content/products.json with all 7 products listed in content/CLAUDE.md
8. Populate content/posts.json with 3 initial blog posts
9. Build components (ui/ → layout/ → sections/) matching the design exactly
10. Build all 7 pages in app/
11. Ensure mobile responsiveness throughout
12. Verify all WhatsApp links use lib/config.ts

Do not skip the CLAUDE.md files — they are the spec.

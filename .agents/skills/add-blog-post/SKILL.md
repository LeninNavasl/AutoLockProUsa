---
name: add-blog-post
description: Publish a new article in the AutoLock Pro USA blog using the Astro content collection (Markdown + validated frontmatter). Use when adding or editing guides/tips.
---

# Skill: Add a Blog Post

## Steps

1. **Create** `src/content/blog/<kebab-slug>.md`. The filename becomes the URL: `/blog/<kebab-slug>/`.
2. **Frontmatter** (validated by Zod in `src/content.config.ts` — the build fails if invalid):

   ```yaml
   ---
   title: 'What to do when you lose your only transponder key' # ≤ 70 chars
   description: '≤ 160 chars summary used for SEO and the card.'
   category: emergency # one of: replacement | fobs | emergency
   badge: 'Emergency Guide' # short label shown on the image
   badgeTone: primary # primary | emergency | success
   cover: ../../assets/images/blog/lost-transponder.jpg
   coverAlt: 'Describe the image for screen readers'
   publishDate: 2025-10-01
   updatedDate: 2025-10-12 # optional
   readingMinutes: 4
   draft: false
   ---
   ```

3. **Images** go in `src/assets/images/blog/`. Use JPG/PNG source ≥ 1600px wide; Astro outputs AVIF/WebP.
   Never hotlink external images.
4. **Writing rules:**
   - Short paragraphs (≤ 3 lines on mobile), `##`/`###` headings, bullet lists.
   - End with a call to action — the article layout appends the dispatch CTA automatically.
   - No raw HTML with `<script>`, `<iframe>`, `style=""` (CSP will block it).
   - External links: plain Markdown links; the layout adds `rel="noopener noreferrer"`.
5. **Categories:** if a new category is needed, add it to `BLOG_CATEGORIES` in `src/data/blog.ts`
   **and** to the Zod enum in `src/content.config.ts`.
6. **Verify:** `npm run verify`, then check `/blog/` and `/blog/<slug>/` in `npm run dev`.

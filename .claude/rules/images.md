---
paths:
  - "src/components/**"
  - "app/**"
  - "public/**"
---

# Image Rules

## Format & Location
- ALL images must be WebP format — no JPG, PNG, or GIF in production
- ALL images served from `public/` directory (flat or in subdirectories)
- Reference images with absolute paths from root: `/image-name.webp`

## Usage in Components
- Use descriptive, keyword-relevant alt text on every `<img>` tag
- Include explicit `width` and `height` attributes to prevent layout shift
- Lazy-load images below the fold (`loading="lazy"`)
- Hero/above-fold images should NOT be lazy-loaded

## Naming Convention
- Lowercase, kebab-case: `pool-deck-travertine.webp`
- Prefix with service category when relevant: `driveway-brick-pattern.webp`
- OG images: `og-[page-name].jpg` (JPG for social media compatibility)

## Optimization
- Target file sizes: hero images under 200KB, thumbnails under 50KB
- Use Sharp (already in stack) for any image processing
- When adding new images, verify the file exists in `public/` before referencing it

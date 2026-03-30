---
paths:
  - "src/components/**"
---

# Component Rules
- Functional components with hooks only — no class components
- Framer Motion for all animations — avoid x-axis transforms on mobile viewports (causes horizontal overflow)
- Use next/image for optimized image loading with WebP sources
- Keep service page content components in `src/components/service-pages/`
- Reusable UI elements (ShimmerButton, Logo) stay in `src/components/`
- Use `<Link>` from `next/link` for all internal navigation, never `<a href>`
- Mobile-first responsive design with Tailwind breakpoints

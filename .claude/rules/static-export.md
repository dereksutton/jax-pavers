---
paths:
  - "app/**"
  - "next.config.*"
---

# Static Export Rules
This site uses `output: 'export'` for static site generation deployed to Render.com.

## Prohibited Features
- No API routes (`app/api/` is not allowed)
- No server actions (`'use server'` is not allowed)
- No middleware (`middleware.js` is not allowed)
- No dynamic server-side rendering (no `cookies()`, `headers()`, `searchParams` in server components)
- No `revalidate` or ISR — everything is statically generated at build time

## Allowed Patterns
- Client-side data fetching via `fetch()` in `'use client'` components
- Static metadata exports
- `generateStaticParams` for dynamic routes
- Client-side form submissions to external API (jax-pavers-api.onrender.com)

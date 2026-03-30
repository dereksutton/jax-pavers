# Jax Pavers — jaxoutdoorspaces.com

## What This Is
Lead-generation website for Jax Pavers, a paver installation company in Jacksonville, FL.
Multi-page static site with quote request form and Meta Conversions API integration.

## Commands
```
npm run dev          # Start dev server
npm run build        # Production build (static export)
npm run start        # Serve production build
npm run lint         # ESLint
```

## Stack
- Next.js 16 (App Router, static export via `output: 'export'`)
- React 19, JSX (not TypeScript)
- Tailwind CSS v4
- Framer Motion for animations
- Sharp for image optimization
- Deployed on Render.com (static site + separate Node.js API)

## Architecture
- App Router pages in `app/` (not `src/app/`)
  - Homepage: `app/page.jsx`, `app/layout.jsx`
  - Service pages: `app/driveways/`, `app/patios/`, `app/pool-decks/`, `app/outdoor-kitchens/`, `app/pergolas/`
- Components in `src/components/` (JSX)
- Service page content in `src/components/service-pages/`
- Config: `src/config/api.js` (API base URL)
- Services: `src/services/quoteService.js`, `src/services/reviewsService.js`
- Data: `src/data/reviews.json` (Google reviews)
- Utils: `src/utils/imagePaths.js`
- Images: `public/` directory, all WebP format

## Backend API
- Separate repo/service at jax-pavers-api.onrender.com
- Handles quote form submissions and Meta Conversions API events
- Do NOT modify backend code from this repo

## Key Conventions
- Use `<Link>` from `next/link` for all internal navigation — never `<a>` tags or `window.location`
- Static export: no server-side features (no API routes, no server actions, no middleware)
- All images in WebP format, served from `/public/`
- Framer Motion: avoid x-axis animations on mobile (causes horizontal overflow)
- Canonical domain: jaxoutdoorspaces.com (no www prefix)

## SEO
- Structured data: HomeAndConstructionBusiness, WebSite, BreadcrumbList, FAQPage schemas
- Each page has unique title, description, and Open Graph metadata
- sitemap.xml and robots.txt in `public/`
- NAP consistency across all pages (name, address, phone)

## Business Details
- Phone: (904) 445-1261
- Email: info@jaxoutdoorspaces.com
- Hours: Mon-Fri 8am-6pm | Sat 9am-2pm
- $7,500 project minimum
- Service areas: Jacksonville, Ponte Vedra Beach, Nocatee, St. Augustine, and surrounding areas
- Brand partners: Tremron, Belgard, Twin Eagles, TrueFlame, StruXure, SurfaceLogix

# Jax Pavers

Marketing website for **Jax Pavers**, a paver installation company serving Jacksonville, FL and surrounding areas.

**Live site:** [jaxoutdoorspaces.com](https://jaxoutdoorspaces.com)

## Tech Stack

### Frontend
- **Next.js 16** (App Router) with static export (`output: 'export'`)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **PostCSS** with Autoprefixer

### Backend
- **Node.js / Express** API server
- **MongoDB** (via Mongoose) for data storage
- **Resend** for transactional email
- **Meta Conversions API** integration for Facebook Pixel server-side events

### Deployment
- **Render.com** Blueprint with two services:
  - `jax-pavers-web` — static site serving the Next.js export from `./out`
  - `jax-pavers-api` — Node.js web service running the Express backend

## Project Structure

```
jax-pavers/
├── app/                    # Next.js App Router
│   ├── layout.jsx          # Root layout — SEO metadata, structured data, Meta Pixel
│   ├── page.jsx            # Homepage — assembles all section components
│   └── globals.css         # Global styles + Tailwind import
├── src/
│   ├── components/         # React components (all client components)
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── AboutUs.jsx
│   │   ├── WhyUs.jsx
│   │   ├── RecentWork.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Quote.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   └── ShimmerButton.jsx
│   ├── config/
│   │   └── api.js          # API base URL configuration
│   ├── data/
│   │   └── reviews.json    # Google Reviews data
│   ├── lib/
│   ├── services/
│   │   ├── quoteService.js  # Quote form submission logic
│   │   └── reviewsService.js
│   └── utils/
│       └── imagePaths.js
├── public/                 # Static assets (images, robots.txt, sitemap.xml)
├── backend/                # Express API server
│   ├── server.js
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── services/
├── next.config.mjs         # Next.js configuration (static export, Turbopack)
├── tailwind.config.js
├── postcss.config.js
├── render.yaml             # Render Blueprint deployment config
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Frontend Development

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:3000)
npm run dev

# Production build (outputs to ./out)
npm run build
```

### Backend Development

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start dev server with hot reload (runs on http://localhost:5000)
npm run dev
```

### Environment Variables

#### Frontend (`.env.local`)
| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000/api` |

Copy `.env.example` to `.env.local` and update values as needed.

#### Backend (`backend/.env`)
See `backend/README.md` for backend environment variable configuration.

## SEO

The site is statically exported at build time, producing fully pre-rendered HTML with all SEO content baked in — no client-side JavaScript required for crawlers to index the page.

### Metadata & Structured Data
All SEO configuration lives in `app/layout.jsx`:
- Title, meta description, keywords
- Open Graph and Twitter Card meta tags
- Canonical URL (`https://jaxoutdoorspaces.com/`)
- Geo meta tags for local SEO
- **Structured data schemas:**
  - `HomeAndConstructionBusiness` — business info, services, reviews, service areas
  - `FAQPage` — 8 frequently asked questions for rich results
  - `WebSite` — site identity
  - `BreadcrumbList` — navigation breadcrumbs

### Static SEO Files
Located in `public/`:
- `robots.txt` — crawler directives and sitemap reference
- `sitemap.xml` — URL listing for search engine indexing

### Images
All images are served as WebP for optimal performance. PNG versions of the logo and hero image are retained for social media OG image compatibility.

## Deployment

Deployment is managed via a **Render Blueprint** (`render.yaml`). Both services have `autoDeploy: false` — deployments are triggered manually from the Render dashboard.

### Frontend
- Builds with `npm install && npm run build`
- Publishes the `./out` directory as a static site
- Security headers: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
- Asset caching: 1-year immutable cache for hashed assets, 24-hour cache for `sitemap.xml` and `robots.txt`

### Backend
- Builds with `cd backend && npm ci --production=false`
- Starts with `cd backend && npm start`
- Hosted in the Oregon region on Render's starter plan

## Services Offered
Paver Driveways, Paver Driveway Repair, Outdoor Kitchens, Paver Patios, Pool Decks, Pergolas, Brick Paver Installation, Walkway Pavers, Paver Sealing, Hardscape Installation, Backyard Renovation, Outdoor Living Design, Retaining Wall Installation

## Service Areas
Jacksonville, Jacksonville Beach, Ponte Vedra Beach, Nocatee, Neptune Beach, St. Augustine, St. Augustine Beach, Atlantic Beach, St. Johns, Fruit Cove, Mandarin, Riverside, Fleming Island, Orange Park, Green Cove Springs

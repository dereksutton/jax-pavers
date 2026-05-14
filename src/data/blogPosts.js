// Blog post metadata — single source of truth for the blog index,
// related-post lists, and per-post page metadata.
// Posts are rendered as static JSX pages under app/blog/<slug>/.

const blogPosts = [
  {
    slug: "cost-of-paver-patio-jacksonville",
    title: "How Much Does a Paver Patio Cost in Jacksonville? (2026 Guide)",
    excerpt:
      "A clear breakdown of paver patio pricing in Jacksonville — cost per square foot, what drives the price up or down, and realistic ranges by patio size.",
    date: "2026-05-13",
    category: "Cost Guide",
    readTime: "8 min read",
    image: "/pavers-22.webp",
    imageAlt:
      "Freeform paver patio with fire pit and in-ground lighting by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "outdoor-kitchen-cost-jacksonville",
    title: "Outdoor Kitchen Cost in Jacksonville: 2026 Price Guide",
    excerpt:
      "What an outdoor kitchen really costs in Jacksonville in 2026 — by tier, by appliance, and by how it's built. Plus where the budget actually goes.",
    date: "2026-05-12",
    category: "Cost Guide",
    readTime: "9 min read",
    image: "/pavers-17.webp",
    imageAlt:
      "Custom outdoor kitchen with grill island and bar seating by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "pergola-cost-jacksonville",
    title: "Pergola Cost in Jacksonville: 2026 Price Breakdown",
    excerpt:
      "Aluminum, cedar, and louvered pergola pricing for Jacksonville homeowners — what each tier includes and why Florida wind code affects the bottom line.",
    date: "2026-05-11",
    category: "Cost Guide",
    readTime: "8 min read",
    image: "/pavers-40.webp",
    imageAlt:
      "Custom pergola over a paver patio by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "hurricane-proof-pergola-florida",
    title: "Hurricane-Proof Pergolas in Florida: Wind Code, Materials & Engineering",
    excerpt:
      "How pergolas are engineered to survive Florida storms — wind-load ratings, footings, hardware, and material choices that hold up east of the Intracoastal.",
    date: "2026-05-09",
    category: "Outdoor Living",
    readTime: "7 min read",
    image: "/pavers-28.webp",
    imageAlt:
      "Poolside pergola and paver patio built for Florida weather by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "paver-maintenance-guide-jacksonville",
    title: "Paver Maintenance Guide for Jacksonville Homeowners",
    excerpt:
      "Sealing, joint sand, cleaning, and weed control — a simple, season-by-season plan to keep Jacksonville pavers looking new for decades.",
    date: "2026-05-07",
    category: "Maintenance",
    readTime: "7 min read",
    image: "/pavers-37.webp",
    imageAlt:
      "Sealed paver patio and fire pit with pathway lighting by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "roi-outdoor-living-jacksonville",
    title: "The ROI of Outdoor Living: Do Pavers Add Home Value in Jacksonville?",
    excerpt:
      "What paver driveways, patios, and outdoor kitchens actually return at resale in the Jacksonville market — and why outdoor space sells faster here.",
    date: "2026-05-05",
    category: "Outdoor Living",
    readTime: "7 min read",
    image: "/pavers-33.webp",
    imageAlt:
      "Aerial view of a paver driveway and walkway at a luxury Jacksonville FL home by Jax Pavers",
  },
];

export default blogPosts;

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug);

export const getOtherPosts = (slug, count = 3) =>
  blogPosts.filter((p) => p.slug !== slug).slice(0, count);

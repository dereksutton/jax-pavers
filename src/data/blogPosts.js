// Blog post metadata — single source of truth for the blog index,
// related-post lists, and per-post page metadata.
// Posts are rendered as static JSX pages under app/blog/<slug>/.

const blogPosts = [
  {
    slug: "paver-driveway-cost-jacksonville",
    title: "Paver Driveway Cost in Jacksonville, FL (2026 Guide)",
    excerpt:
      "What a paver driveway actually costs in Jacksonville in 2026 — typical $18–$32 per sq ft installed, pricing by size, comparison vs. concrete and asphalt, and the line items every quote should have.",
    date: "2026-06-02",
    category: "Cost Guide",
    readTime: "12 min read",
    image: "/pavers-48.webp",
    imageAlt:
      "Curved paver driveway installation through palm-lined landscaping by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "outdoor-kitchen-worth-it-florida",
    title: "Is an Outdoor Kitchen Worth It in Florida? (2026 Jacksonville ROI Guide)",
    excerpt:
      "Outdoor kitchen ROI in Jacksonville — 50–70% resale recoup, 9–11 months of use per year, the Florida-specific spec, and the three scenarios where the math doesn't work.",
    date: "2026-06-02",
    category: "Outdoor Living",
    readTime: "9 min read",
    image: "/pavers-29.webp",
    imageAlt:
      "Custom outdoor kitchen with grill, range hood, TV, and bar seating by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "are-pavers-good-for-driveways-florida",
    title: "Are Pavers Good for Driveways? A Coastal Florida Guide",
    excerpt:
      "How paver driveways handle coastal Florida — heat, salt air, sandy soil, and storm rainfall. The 60mm thickness rule, the base prep, and the pro install process.",
    date: "2026-06-02",
    category: "Driveways",
    readTime: "10 min read",
    image: "/pavers-4.webp",
    imageAlt:
      "Tumbled paver driveway with curved border installed by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "patio-paver-permit-jacksonville",
    title: "Do You Need a Permit for Patio Pavers in Jacksonville? (2026 Guide)",
    excerpt:
      "Standard backyard paver patios in Jacksonville usually don't need a permit, but HOA review and the right base prep are non-negotiable. Plus the full Florida install guide.",
    date: "2026-06-02",
    category: "Permits & Code",
    readTime: "9 min read",
    image: "/pavers-7.webp",
    imageAlt:
      "Backyard paver patio installation with circular fire pit by Jax Pavers in Jacksonville FL",
  },
  {
    slug: "pergola-permit-florida",
    title: "Do You Need a Permit for a Pergola in Florida? (2026 Jacksonville Guide)",
    excerpt:
      "Yes — permanent pergolas in Florida need a permit. County process, costs, timelines, HOA approval, and the real risks of skipping it in Jacksonville, Ponte Vedra, and Nocatee.",
    date: "2026-06-02",
    category: "Permits & Code",
    readTime: "8 min read",
    image: "/pavers-43.webp",
    imageAlt:
      "Permitted pergola and covered outdoor living area with paver flooring by Jax Pavers in Jacksonville FL",
  },
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

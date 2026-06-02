import PaversJacksonvilleFLContent from "../../src/components/service-pages/PaversJacksonvilleFLContent";

export const metadata = {
  title: "Pavers Jacksonville FL | 5-Star Paver Installation | Jax Pavers",
  description:
    "Premium paver installation in Jacksonville, FL — driveways, patios, pool decks, outdoor kitchens, and pergolas. Licensed and insured. Tremron & Belgard pavers. 5.0 stars on Google. Free quote — (904) 445-1261.",
  alternates: {
    canonical: "/pavers-jacksonville-fl/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/pavers-jacksonville-fl/",
    title: "Pavers Jacksonville FL | 5-Star Paver Installation | Jax Pavers",
    description:
      "Premium paver installation across Jacksonville and Northeast Florida — driveways, patios, pool decks, outdoor kitchens, pergolas. Licensed and insured. 5.0 stars on Google.",
    images: [
      {
        url: "/pavers-33.webp",
        width: 2400,
        height: 1350,
        alt: "Pavers in Jacksonville FL — aerial view of paver driveway and walkway by Jax Pavers",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavers Jacksonville FL | 5-Star Paver Installation | Jax Pavers",
    description:
      "Premium paver installation across Jacksonville and Northeast Florida — driveways, patios, pool decks, outdoor kitchens, pergolas. Licensed and insured. 5.0 stars on Google.",
    images: [
      {
        url: "/pavers-33.webp",
        alt: "Pavers in Jacksonville FL — aerial view of paver driveway and walkway by Jax Pavers",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation in Jacksonville, FL",
  description:
    "Premium paver installation across Jacksonville and Northeast Florida — paver driveways, patios, pool decks, outdoor kitchens, and pergolas. Licensed and insured. Tremron and Belgard pavers engineered for the Florida climate.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: [
    { "@type": "City", name: "Jacksonville", addressRegion: "FL" },
    { "@type": "City", name: "Jacksonville Beach", addressRegion: "FL" },
    { "@type": "City", name: "Ponte Vedra Beach", addressRegion: "FL" },
    { "@type": "City", name: "Nocatee", addressRegion: "FL" },
    { "@type": "City", name: "St. Johns", addressRegion: "FL" },
    { "@type": "City", name: "Fruit Cove", addressRegion: "FL" },
    { "@type": "City", name: "Mandarin", addressRegion: "FL" },
    { "@type": "City", name: "St. Augustine", addressRegion: "FL" },
    { "@type": "City", name: "Atlantic Beach", addressRegion: "FL" },
    { "@type": "City", name: "Neptune Beach", addressRegion: "FL" },
    { "@type": "City", name: "Fleming Island", addressRegion: "FL" },
    { "@type": "City", name: "Orange Park", addressRegion: "FL" },
  ],
  serviceType: "Paver Installation",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "7500",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "7500",
      description: "Project minimum",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jax Pavers — Jacksonville FL Paver Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paver Driveways Jacksonville",
          url: "https://jaxoutdoorspaces.com/driveways/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paver Patios & Courtyards Jacksonville",
          url: "https://jaxoutdoorspaces.com/patios/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pool Deck Pavers Jacksonville",
          url: "https://jaxoutdoorspaces.com/pool-decks/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outdoor Kitchens Jacksonville",
          url: "https://jaxoutdoorspaces.com/outdoor-kitchens/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pergola Installation Jacksonville",
          url: "https://jaxoutdoorspaces.com/pergolas/",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best paver company in Jacksonville, FL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jax Pavers consistently ranks among Jacksonville's top-rated paver contractors with a 5.0-star Google rating and 24+ reviews. We're fully licensed and insured, install only premium Tremron and Belgard pavers, handle every project end-to-end with no subcontractor handoffs, and never cut corners on the base preparation that makes a paver install last 30+ years in Florida's sandy soil. The best way to evaluate any Jacksonville paver company is to ask for license documentation, walk recent local projects, and ask specifically how they prepare the base.",
      },
    },
    {
      "@type": "Question",
      name: "How much do pavers cost in Jacksonville, FL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paver installation costs in Jacksonville depend on the surface and the materials. Typical 2026 ranges: paver patios run $15 to $30 per square foot installed; paver driveways run $18 to $32 per square foot; pool decks run $14 to $28 per square foot; outdoor kitchens run $15,000 to $50,000-plus; pergolas run $8,000 to $35,000-plus depending on material and roof system. Jax Pavers has a $7,500 project minimum and every quote is a free, written, itemized proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Are pavers better than concrete in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for most Jacksonville applications. Poured concrete cracks under Florida's heat-expansion cycles and sandy, moisture-prone soil. When concrete cracks the only fix is full removal and replacement. Pavers flex with ground movement at every joint, drain rainwater through the joints, and individual pavers can be lifted and reset if anything ever shifts. Properly installed paver surfaces routinely last 30-plus years in Jacksonville with minimal maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "What paver brands do you install in Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install premium pavers from Tremron and Belgard exclusively. Common Tremron lines we install include Stonehedge, Olde Town, Mega-Olde Towne, and Sahara. Common Belgard lines include Cambridge Cobble, Bergerac, Catalina Slate, and Mega-Arbel. Both manufacturers engineer their products specifically for Florida's heat, humidity, and UV exposure. We also install travertine pavers where cooler-underfoot performance matters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Ponte Vedra Beach, Nocatee, and St. Johns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jax Pavers serves the entire Northeast Florida region across Duval, St. Johns, and Clay counties. Coverage includes Jacksonville, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, Nocatee, St. Johns, Fruit Cove, Mandarin, Riverside, San Marco, St. Augustine, St. Augustine Beach, Fleming Island, Orange Park, and Green Cove Springs. We have dedicated neighborhood pages for our most-served communities.",
      },
    },
    {
      "@type": "Question",
      name: "Are pavers good for Florida's heat and rain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pavers are arguably the best hardscape material for the Florida climate. The joints between pavers absorb heat-expansion cycles that crack poured concrete, and those same joints let stormwater drain through the surface instead of pooling. Travertine pavers stay noticeably cooler underfoot than dark concrete, which can hit 140F-plus on a Jacksonville summer afternoon. Properly graded paver installations channel water away from your home's foundation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a paver installation take in Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential paver projects in Jacksonville take 3 to 7 days from start to final walkthrough. Paver patios and driveways are usually on the shorter end. Pool decks, outdoor kitchens, and larger backyard build-outs with multiple integrated features can run 1 to 3 weeks. We provide a clear timeline in every written proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Do pavers need permits in Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the project. Standard paver patio replacements in Duval County usually don't require a permit. Driveway replacements typically do because the work extends into the public right-of-way. Pergolas, outdoor kitchens with gas or electrical, and retaining walls above code-defined heights always require permits. HOA communities like Nocatee, Ponte Vedra Plantation, Marsh Landing, and Coastal Oaks also require Architectural Review Committee approval. Jax Pavers handles all permitting and HOA approvals as part of the project.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Jax Pavers and other Jacksonville paver companies with similar names?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jax Pavers (also known as Jax Outdoor Spaces, online at jaxoutdoorspaces.com) is an independently owned, licensed and insured paver contractor based in Jacksonville. Our phone is (904) 445-1261 and we're 5.0 stars on Google with 24+ reviews. Confirm the phone number, website, and Google profile before you hire anyone — there are sound-alike company names in the Jacksonville market.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jaxoutdoorspaces.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pavers Jacksonville FL",
      item: "https://jaxoutdoorspaces.com/pavers-jacksonville-fl/",
    },
  ],
};

export default function PaversJacksonvilleFLPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PaversJacksonvilleFLContent />
    </>
  );
}

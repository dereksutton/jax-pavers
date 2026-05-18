import PavingContractorsContent from "../../src/components/service-pages/PavingContractorsContent";

export const metadata = {
  title: "Paving Contractors Jacksonville FL | Jax Pavers",
  description:
    "Licensed & insured paving contractors in Jacksonville FL. Premium Tremron & Belgard pavers, expert base prep & drainage for driveways, patios & pool decks.",
  alternates: {
    canonical: "/paving-contractors/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/paving-contractors/",
    title: "Paving Contractors Jacksonville FL | Jax Pavers",
    description:
      "Licensed & insured paving contractors in Jacksonville FL. Premium Tremron & Belgard pavers, expert base prep & drainage for every project.",
    images: [
      {
        url: "/base.webp",
        width: 2400,
        height: 1350,
        alt: "Paver installation by Jax Pavers paving contractors in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paving Contractors Jacksonville FL | Jax Pavers",
    description:
      "Licensed & insured paving contractors in Jacksonville FL. Premium Tremron & Belgard pavers, expert base prep & drainage for every project.",
    images: [
      {
        url: "/base.webp",
        alt: "Paver installation by Jax Pavers paving contractors in Jacksonville FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Licensed and insured paving contractor services in Jacksonville FL. Premium Tremron and Belgard paver installation for driveways, patios, pool decks, outdoor kitchens, and pergolas, with expert base preparation and drainage for Florida's climate.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Jacksonville",
    addressRegion: "FL",
  },
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I look for in a paving contractor in Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hire a paving contractor who is licensed and insured, uses premium manufacturers like Tremron and Belgard, and can show you a real portfolio of completed local work. Ask how they prepare the base — proper excavation and a compacted aggregate base are what separate an installation that lasts from one that shifts and settles in Florida's sandy soil. A good contractor handles permitting when needed and gives you a written, itemized quote with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jax Pavers licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jax Pavers is fully licensed and insured for paver installation work across Jacksonville and Northeast Florida. We're happy to provide documentation before your project begins, and we handle the permitting process for you whenever a project requires it.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to hire a paving contractor in Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the size of the area, the materials you choose, and the complexity of the design. Jax Pavers has a $7,500 project minimum for all installations. Typical projects fall in these ranges: driveway replacements $12,000–$25,000+, patios and pool decks $10,000–$30,000+, outdoor kitchens $15,000–$50,000+, and full backyard build-outs $35,000–$80,000+. We provide free consultations and detailed, no-obligation written quotes so you know exactly what your project will cost before any work starts.",
      },
    },
    {
      "@type": "Question",
      name: "What paver brands do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install premium pavers from Tremron and Belgard, two of the most respected manufacturers in the Southeast. Common lines we work with include Tremron's Stonehedge, Olde Town, Mega-Plank, and Sahara series, and Belgard's Cambridge, Bergerac, Catalina, and Mega-Arbel. Both manufacturers engineer their pavers for Florida's heat, humidity, and UV exposure, in a wide range of colors, textures, and patterns rated for foot and vehicle traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Why does base preparation matter so much in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jacksonville sits on sandy, moisture-prone soil that shifts when it isn't properly prepared. A professional paving contractor excavates to the correct depth, installs and compacts an aggregate base, and grades the surface for drainage before a single paver is laid. Skipping or shortcutting that base work is the most common reason paver projects fail — which is why we never cut corners on it.",
      },
    },
    {
      "@type": "Question",
      name: "What types of paving projects do you handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're a full-service paving contractor handling driveways, patios and courtyards, pool decks, outdoor kitchens, pergola foundations, walkways, and more. Whether you're upgrading a single surface or planning a complete backyard transformation, we manage the project from design and permitting through the final walkthrough.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a paving project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential paving projects in Jacksonville take between 3 and 7 days, depending on the size of the area, the complexity of the design, and any additional features. Full backyard build-outs with pool deck, fire feature, and pergola run 1–3 weeks. We provide a clear timeline in your written proposal so you know exactly what to expect from start to finish.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Northeast Florida do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work across Duval, St. Johns, and Clay counties. Our core service area includes Jacksonville, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, Nocatee, St. Johns, Fruit Cove, Mandarin, Riverside, St. Augustine, St. Augustine Beach, Fleming Island, Orange Park, and Green Cove Springs. If your home is anywhere in Northeast Florida, contact us — we'll let you know if it falls inside our coverage area.",
      },
    },
    {
      "@type": "Question",
      name: "How are pavers different from poured concrete or stamped concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pavers are individually manufactured units installed over a compacted base. They flex with ground movement instead of cracking, drain rainwater through their joints, and can be lifted and reset if a section ever settles. Poured concrete cracks over time, especially in Florida's expansive sandy soil, and once it stains or cracks the only fix is full removal. Stamped concrete adds a decorative pattern but still cracks and discolors. Pavers cost more up front than poured concrete but typically outlast it by decades — which is why most of our customers who started with concrete are now replacing it with pavers.",
      },
    },
    {
      "@type": "Question",
      name: "What red flags should I watch for when hiring a paving contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Watch for: refusal to show license and insurance documentation, vague verbal quotes instead of written itemized proposals, large up-front cash deposits, no physical address or local references, generic stock-photo portfolios with no recognizable Jacksonville projects, unwillingness to discuss base preparation specifics, and pressure tactics or 'today only' pricing. Anyone genuinely doing this work professionally will hand over their credentials, answer base-prep questions specifically, and give you time to think about your decision.",
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
      name: "Paving Contractors",
      item: "https://jaxoutdoorspaces.com/paving-contractors/",
    },
  ],
};

export default function PavingContractorsPage() {
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
      <PavingContractorsContent />
    </>
  );
}

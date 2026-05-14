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
        text: "Cost depends on the size of the area, the materials you choose, and the complexity of the design. Jax Pavers has a $7,500 project minimum for all installations. We provide free consultations and detailed, no-obligation written quotes so you know exactly what your project will cost before any work starts.",
      },
    },
    {
      "@type": "Question",
      name: "What paver brands do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install premium pavers from Tremron and Belgard, two of the most respected manufacturers in the Southeast. Both produce pavers engineered for Florida's heat, humidity, and UV exposure, in a wide range of colors, textures, and patterns rated for foot and vehicle traffic.",
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
        text: "Most residential paving projects in Jacksonville take between 3 and 7 days, depending on the size of the area, the complexity of the design, and any additional features. We provide a clear timeline in your written proposal so you know exactly what to expect from start to finish.",
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

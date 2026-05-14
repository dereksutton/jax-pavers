import StAugustinePaversContent from "../../src/components/service-pages/StAugustinePaversContent";

export const metadata = {
  title: "St. Augustine Pavers | Paver Installation in St. Augustine FL | Jax Pavers",
  description:
    "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks & outdoor kitchens built for historic character and coastal weather. Licensed and insured.",
  alternates: {
    canonical: "/st-augustine-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/st-augustine-pavers/",
    title: "St. Augustine Pavers | Paver Installation in St. Augustine FL | Jax Pavers",
    description:
      "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks & outdoor kitchens built for historic character and coastal weather. Licensed and insured.",
    images: [
      {
        url: "/pavers-1.webp",
        width: 2400,
        height: 1350,
        alt: "Paver installation by Jax Pavers in St. Augustine FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Augustine Pavers | Paver Installation in St. Augustine FL | Jax Pavers",
    description:
      "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks & outdoor kitchens built for historic character and coastal weather. Licensed and insured.",
    images: [
      {
        url: "/pavers-1.webp",
        alt: "Paver installation by Jax Pavers in St. Augustine FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks, outdoor kitchens, and pergolas built for historic character and coastal weather. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "St. Augustine",
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
      name: "Do you install pavers in St. Augustine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St. Augustine and St. Augustine Beach are part of our core service area. We design and install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout the St. Augustine area. Our project minimum is $7,500, and every job is handled by a licensed and insured crew.",
      },
    },
    {
      "@type": "Question",
      name: "What paver styles suit St. Augustine's historic character?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "St. Augustine's architecture has a timeless, Old-World feel, and tumbled pavers like Tremron's Stonehedge and Olde Town lines complement that beautifully — their weathered edges and warm color blends echo the historic district's coquina and brick. For homes that want a classic look, we also build cobblestone-style courtyards and herringbone patios that feel right at home in the Ancient City.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle St. Augustine's coastal weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "St. Augustine gets salt air, humidity, intense sun, and heavy seasonal rain. We specify UV-stable, color-fast pavers from Tremron and Belgard, grade every project for proper drainage away from the home, and use polymeric joint sand and edge restraints so the hardscape stays put through storm season. Proper base work is what makes a paver surface last in this climate.",
      },
    },
    {
      "@type": "Question",
      name: "Do St. Augustine paver projects need permits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard paver patio and driveway installations often don't require a permit, but projects involving structures, drainage changes, or work in flood-prone or historic-overlay areas may. We handle St. Johns County permitting when your project calls for it and help navigate any additional requirements in historic districts.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a paver project take in St. Augustine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most paver driveway, patio, and pool deck installations take between 3 and 7 days depending on size and complexity. Larger projects with multiple features take longer. We provide a clear timeline in your project proposal so you know exactly what to expect.",
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
      name: "St. Augustine Pavers",
      item: "https://jaxoutdoorspaces.com/st-augustine-pavers/",
    },
  ],
};

export default function StAugustinePaversPage() {
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
      <StAugustinePaversContent />
    </>
  );
}

import OrangeParkPaversContent from "../../src/components/service-pages/OrangeParkPaversContent";

export const metadata = {
  title: "Orange Park Pavers | Paver Installation in Orange Park FL | Jax Pavers",
  description:
    "Paver installation in Orange Park, FL. Quality driveways, patios & pool decks built for heavy Clay County rain at a competitive value. Licensed and insured. Free quote!",
  alternates: {
    canonical: "/orange-park-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/orange-park-pavers/",
    title: "Orange Park Pavers | Paver Installation in Orange Park FL | Jax Pavers",
    description:
      "Paver installation in Orange Park, FL. Quality driveways, patios & pool decks built for heavy Clay County rain at a competitive value. Licensed and insured.",
    images: [
      {
        url: "/pavers-39.webp",
        width: 2400,
        height: 1350,
        alt: "Paver installation by Jax Pavers in Orange Park FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange Park Pavers | Paver Installation in Orange Park FL | Jax Pavers",
    description:
      "Paver installation in Orange Park, FL. Quality driveways, patios & pool decks built for heavy Clay County rain at a competitive value. Licensed and insured.",
    images: [
      {
        url: "/pavers-39.webp",
        alt: "Paver installation by Jax Pavers in Orange Park FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Paver installation in Orange Park, FL. Quality driveways, patios, pool decks, outdoor kitchens, and pergolas built for heavy Clay County rain at a competitive value. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Orange Park",
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
      name: "Do you install pavers in Orange Park and Clay County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Orange Park and the surrounding Clay County communities — including Fleming Island, Oakleaf, and Middleburg — are part of our regular service area. We install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout the area.",
      },
    },
    {
      "@type": "Question",
      name: "How do paver driveways handle heavy Florida rain in Orange Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very well, and that's a big reason we recommend them here. The joints between pavers let rainwater filter through instead of sheeting off the surface, and we grade every driveway to drain away from your foundation. Compared to a poured slab that pools water and eventually cracks, a properly based paver driveway manages Clay County's heavy summer storms far better.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a paver project cost in Orange Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the size of the area, the materials you choose, and project complexity. Every Jax Pavers project starts at a $7,500 minimum. We focus on quality hardscaping at a competitive value, and we provide a detailed, no-obligation quote at your free consultation so you know exactly what to expect.",
      },
    },
    {
      "@type": "Question",
      name: "Are pavers worth it compared to concrete in Clay County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most Orange Park homeowners, yes. Pavers flex with the ground instead of cracking, drain better in heavy rain, and individual units can be replaced if one ever shifts or stains. They also deliver far more curb appeal than a plain slab. We help you choose a material and pattern that hits the right balance of durability, looks, and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured to work in Orange Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jax Pavers is fully licensed and insured, and we handle any permitting your project requires. We stand behind every install we deliver and are happy to walk you through our process and references before you commit.",
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
      name: "Orange Park Pavers",
      item: "https://jaxoutdoorspaces.com/orange-park-pavers/",
    },
  ],
};

export default function OrangeParkPaversPage() {
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
      <OrangeParkPaversContent />
    </>
  );
}

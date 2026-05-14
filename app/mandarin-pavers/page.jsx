import MandarinPaversContent from "../../src/components/service-pages/MandarinPaversContent";

export const metadata = {
  title: "Mandarin Pavers | Paver Installation in Mandarin FL | Jax Pavers",
  description:
    "Paver installation in Mandarin, FL. Curb-appeal driveway upgrades, patios & pool decks replacing aging concrete in established neighborhoods. Licensed and insured.",
  alternates: {
    canonical: "/mandarin-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/mandarin-pavers/",
    title: "Mandarin Pavers | Paver Installation in Mandarin FL | Jax Pavers",
    description:
      "Paver installation in Mandarin, FL. Curb-appeal driveway upgrades, patios & pool decks replacing aging concrete in established neighborhoods. Licensed and insured.",
    images: [
      {
        url: "/pavers-26.webp",
        width: 2400,
        height: 1350,
        alt: "Paver installation by Jax Pavers in Mandarin FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandarin Pavers | Paver Installation in Mandarin FL | Jax Pavers",
    description:
      "Paver installation in Mandarin, FL. Curb-appeal driveway upgrades, patios & pool decks replacing aging concrete in established neighborhoods. Licensed and insured.",
    images: [
      {
        url: "/pavers-26.webp",
        alt: "Paver installation by Jax Pavers in Mandarin FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Paver installation in Mandarin, FL. Curb-appeal driveway upgrades, patios, pool decks, outdoor kitchens, and pergolas, including replacing aging concrete in Mandarin's established neighborhoods. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Mandarin",
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
      name: "Can you replace my old cracked concrete driveway in Mandarin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — replacing aging concrete is one of the most common projects we do in Mandarin. We remove the old slab, build a proper compacted aggregate base, and install interlocking pavers that flex with the ground instead of cracking. The result is a driveway that looks dramatically better and holds up far longer than a re-poured slab.",
      },
    },
    {
      "@type": "Question",
      name: "Will pavers work around the mature trees in my Mandarin yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can, and pavers are actually a smart choice near established trees. A poured slab cracks as roots grow under it, but individual pavers can be lifted and re-set if a root ever causes movement. We assess root location during the consultation and design the layout and base to coexist with your mature landscaping.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a paver project cost in Mandarin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the size of the area, the materials you choose, and the condition of what's there now — removing old concrete adds some demolition cost. Every Jax Pavers project starts at a $7,500 minimum. We hand-measure each property and provide a detailed, no-obligation quote at your free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What paver styles suit Mandarin's established homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mandarin's mature neighborhoods have a lot of traditional and ranch-style architecture set among big oaks, so tumbled pavers with Old-World character and warm, classic color blends tend to look right at home here. We bring physical samples to every consultation so you can see how each option reads against your home and landscaping.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured to work in Mandarin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jax Pavers is fully licensed and insured, and we handle any permitting your project requires. We stand behind every install we deliver and are happy to share our process and references before you commit.",
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
      name: "Mandarin Pavers",
      item: "https://jaxoutdoorspaces.com/mandarin-pavers/",
    },
  ],
};

export default function MandarinPaversPage() {
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
      <MandarinPaversContent />
    </>
  );
}

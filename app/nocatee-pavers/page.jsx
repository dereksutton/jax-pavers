import NocateePaversContent from "../../src/components/service-pages/NocateePaversContent";

export const metadata = {
  title: "Nocatee Pavers | Paver Installation in Nocatee FL | Jax Pavers",
  description:
    "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks & backyard build-outs for this fast-growing community. Licensed and insured.",
  alternates: {
    canonical: "/nocatee-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/nocatee-pavers/",
    title: "Nocatee Pavers | Paver Installation in Nocatee FL | Jax Pavers",
    description:
      "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks & backyard build-outs for this fast-growing community. Licensed and insured.",
    images: [
      {
        url: "/pavers-48.webp",
        width: 2400,
        height: 1350,
        alt: "Paver driveway installation by Jax Pavers in Nocatee FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocatee Pavers | Paver Installation in Nocatee FL | Jax Pavers",
    description:
      "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks & backyard build-outs for this fast-growing community. Licensed and insured.",
    images: [
      {
        url: "/pavers-48.webp",
        alt: "Paver driveway installation by Jax Pavers in Nocatee FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks, outdoor kitchens, and backyard build-outs. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Nocatee",
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
      name: "Do you install pavers in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nocatee is one of our most active service areas. As a fast-growing master-planned community, Nocatee has plenty of new construction, and we install paver driveways, patios, pool decks, outdoor kitchens, and pergolas across its neighborhoods. Our project minimum is $7,500, and every job is handled by a licensed and insured crew.",
      },
    },
    {
      "@type": "Question",
      name: "Can you upgrade a builder-grade driveway in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. Many Nocatee homes come with a standard poured-concrete driveway from the builder. Replacing it with pavers is one of the most popular upgrades we do here — it dramatically improves curb appeal, adds color and pattern options a concrete slab can't match, and gives you a driveway that flexes with the soil instead of cracking.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on new-construction backyard build-outs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's a big part of what we do in Nocatee. New homes often close with a blank backyard, and we build the whole outdoor space from scratch: paver patios, pool decks, outdoor kitchens, fire pits, seating walls, pergolas, and pathways. We can coordinate with your timeline so the hardscape goes in once the home and any pool are ready.",
      },
    },
    {
      "@type": "Question",
      name: "Are there HOA requirements for pavers in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Nocatee neighborhoods have an HOA with architectural review requirements, and paver projects typically need approval before work begins. We help you prepare the documentation the HOA expects — material, color, and layout details — so your project gets approved and stays on schedule.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a paver project take in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most paver driveway and patio installations take between 3 and 7 days depending on size and complexity. Full backyard build-outs with a pool deck, outdoor kitchen, and multiple zones take longer. We provide a clear timeline in your project proposal so you can plan around it.",
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
      name: "Nocatee Pavers",
      item: "https://jaxoutdoorspaces.com/nocatee-pavers/",
    },
  ],
};

export default function NocateePaversPage() {
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
      <NocateePaversContent />
    </>
  );
}

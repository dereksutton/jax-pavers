import StJohnsPaversContent from "../../src/components/service-pages/StJohnsPaversContent";

export const metadata = {
  title: "St. Johns Pavers | Paver Installation in St. Johns FL | Jax Pavers",
  description:
    "Paver installation in St. Johns, FL. Driveways, patios, pool decks & full backyard build-outs for Fruit Cove & Julington Creek. Licensed and insured. Free quote!",
  alternates: {
    canonical: "/st-johns-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/st-johns-pavers/",
    title: "St. Johns Pavers | Paver Installation in St. Johns FL | Jax Pavers",
    description:
      "Paver installation in St. Johns, FL. Driveways, patios, pool decks & full backyard build-outs for Fruit Cove & Julington Creek. Licensed and insured.",
    images: [
      {
        url: "/pavers-8.webp",
        width: 2400,
        height: 1350,
        alt: "Paver installation by Jax Pavers in St. Johns FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Johns Pavers | Paver Installation in St. Johns FL | Jax Pavers",
    description:
      "Paver installation in St. Johns, FL. Driveways, patios, pool decks & full backyard build-outs for Fruit Cove & Julington Creek. Licensed and insured.",
    images: [
      {
        url: "/pavers-8.webp",
        alt: "Paver installation by Jax Pavers in St. Johns FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Paver installation in St. Johns, FL. Driveways, patios, pool decks, outdoor kitchens, and full backyard build-outs for Fruit Cove, Julington Creek, and the surrounding St. Johns County communities. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "St. Johns",
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
      name: "Do you install pavers in St. Johns County communities like Fruit Cove and Julington Creek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St. Johns County is one of our core service areas, and we regularly install pavers in Fruit Cove, Julington Creek, Durbin Crossing, RiverTown, and the newer subdivisions along the County Road 210 corridor. Whether your home is brand new or a few years old, we can design a driveway, patio, pool deck, or full outdoor living space that fits the neighborhood.",
      },
    },
    {
      "@type": "Question",
      name: "We just built a new home in St. Johns — can you do the whole backyard at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. A lot of our St. Johns clients are families in new construction who want to take a blank builder-grade yard and turn it into a finished outdoor space. We can phase the work or build it all at once: driveway, walkways, patio, pool deck, outdoor kitchen, and pergola. Planning the full layout up front keeps drainage, grading, and design cohesive across the whole property.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a paver project cost in St. Johns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the size of the area, the materials you choose, and how many features are involved. Every Jax Pavers project starts at a $7,500 minimum. Because we hand-measure each property and price projects individually, the free consultation is the only way to get a number you can actually plan around.",
      },
    },
    {
      "@type": "Question",
      name: "What paver styles are popular with St. Johns homeowners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newer St. Johns construction tends to lean transitional and modern, so we install a lot of larger-format pavers and clean multi-toned blends with contrasting borders. Tumbled pavers in warm earth tones are also popular for families who want a more traditional look. We bring physical samples to every consultation so you can see how each option reads against your home.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured to work in St. Johns County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jax Pavers is fully licensed and insured, and we handle any permitting required for your project. We stand behind every install we deliver, and we are happy to walk you through our process and references before you commit.",
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
      name: "St. Johns Pavers",
      item: "https://jaxoutdoorspaces.com/st-johns-pavers/",
    },
  ],
};

export default function StJohnsPaversPage() {
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
      <StJohnsPaversContent />
    </>
  );
}

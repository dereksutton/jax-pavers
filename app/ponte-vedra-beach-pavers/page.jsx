import PonteVedraBeachPaversContent from "../../src/components/service-pages/PonteVedraBeachPaversContent";

export const metadata = {
  title: "Ponte Vedra Beach Pavers | Paver Installation in Ponte Vedra Beach FL | Jax Pavers",
  description:
    "Luxury paver installation in Ponte Vedra Beach FL. Driveways, patios, pool decks & outdoor kitchens built with salt-air-durable materials. Licensed and insured.",
  alternates: {
    canonical: "/ponte-vedra-beach-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/ponte-vedra-beach-pavers/",
    title: "Ponte Vedra Beach Pavers | Paver Installation in Ponte Vedra Beach FL | Jax Pavers",
    description:
      "Luxury paver installation in Ponte Vedra Beach FL. Driveways, patios, pool decks & outdoor kitchens built with salt-air-durable materials. Licensed and insured.",
    images: [
      {
        url: "/pavers-33.webp",
        width: 2400,
        height: 1350,
        alt: "Luxury paver installation by Jax Pavers in Ponte Vedra Beach FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ponte Vedra Beach Pavers | Paver Installation in Ponte Vedra Beach FL | Jax Pavers",
    description:
      "Luxury paver installation in Ponte Vedra Beach FL. Driveways, patios, pool decks & outdoor kitchens built with salt-air-durable materials. Licensed and insured.",
    images: [
      {
        url: "/pavers-33.webp",
        alt: "Luxury paver installation by Jax Pavers in Ponte Vedra Beach FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Luxury paver installation in Ponte Vedra Beach FL. Driveways, patios, pool decks, outdoor kitchens, and pergolas built with salt-air-durable materials. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Ponte Vedra Beach",
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
      name: "Do you install pavers in Ponte Vedra Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ponte Vedra Beach is one of our core service areas. We design and install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout Ponte Vedra Beach, Sawgrass, and the surrounding coastal communities. Our project minimum is $7,500, and every job is handled by a licensed and insured crew.",
      },
    },
    {
      "@type": "Question",
      name: "Which paver materials hold up best to Ponte Vedra's salt air?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For coastal homes we recommend sealed concrete pavers from Tremron and Belgard, both engineered for Florida's UV, humidity, and salt exposure. Travertine is also a popular choice for its natural, upscale look and its ability to stay cool underfoot near the water. During your free consultation we bring samples so you can see how each option weathers in a coastal setting.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match the upscale look of Ponte Vedra homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Much of our Ponte Vedra Beach work leans toward refined, luxury hardscaping: travertine pool decks, large-format modern pavers, circle medallion driveway accents, and integrated lighting. We tailor the color, pattern, and material to your home's architecture so the finished hardscape feels like a natural extension of the property.",
      },
    },
    {
      "@type": "Question",
      name: "Do Ponte Vedra Beach projects need permits or HOA approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many Ponte Vedra Beach neighborhoods have HOA architectural review requirements, and some projects involving structures or drainage changes require St. Johns County permits. We help you navigate both — preparing the documentation HOAs typically request and handling county permitting when your project calls for it.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a paver project take in Ponte Vedra Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most paver driveway, patio, and pool deck installations take between 3 and 7 days depending on size and complexity. Larger luxury build-outs with multiple zones, seating walls, and lighting take longer. We provide a clear timeline in your project proposal so you know exactly what to expect.",
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
      name: "Ponte Vedra Beach Pavers",
      item: "https://jaxoutdoorspaces.com/ponte-vedra-beach-pavers/",
    },
  ],
};

export default function PonteVedraBeachPaversPage() {
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
      <PonteVedraBeachPaversContent />
    </>
  );
}

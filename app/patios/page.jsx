import PatiosContent from "../../src/components/service-pages/PatiosContent";

export const metadata = {
  title: "Paver Patios Jacksonville FL | Jax Pavers",
  description:
    "Expert paver patio & courtyard installation in Jacksonville FL. Custom designs, fire pits, seating walls & more. Licensed and insured. Free consultation!",
  alternates: {
    canonical: "/patios/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/patios/",
    title: "Paver Patios Jacksonville FL | Jax Pavers",
    description:
      "Expert paver patio & courtyard installation in Jacksonville FL. Custom designs, fire pits, seating walls & more. Licensed and insured.",
    images: [
      {
        url: "/base.webp",
        width: 2400,
        height: 1350,
        alt: "Paver patio installation by Jax Pavers in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paver Patios Jacksonville FL | Jax Pavers",
    description:
      "Expert paver patio & courtyard installation in Jacksonville FL. Custom designs, fire pits, seating walls & more. Licensed and insured.",
    images: [
      {
        url: "/base.webp",
        alt: "Paver patio installation by Jax Pavers in Jacksonville FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Patio Installation",
  description:
    "Premium paver patio and courtyard installation in Jacksonville FL. Custom designs with fire pits, seating walls, lighting, and more. Licensed and insured, built for the Florida climate.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Jacksonville",
    addressRegion: "FL",
  },
  serviceType: "Paver Patio Installation",
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
      name: "How much does a paver patio cost in Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paver patio costs depend on the size of your space, materials selected, and any additional features like fire pits or seating walls. Our project minimum is $7,500. We offer free consultations where we assess your backyard and provide a detailed, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add a fire pit to my paver patio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Stone fire pits are one of our most popular patio features. We build both gas and wood-burning fire pits that integrate seamlessly into your paver patio design. Fire pits create a natural gathering spot and extend the usability of your outdoor space year-round.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a patio installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most paver patio installations in Jacksonville take between 3 to 7 days depending on the size of the patio, complexity of the design, and any additional features. We provide a clear timeline in your project proposal so you know exactly what to expect.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best paver material for a Florida patio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with premium brands like Tremron and Belgard, both excellent choices for Florida patios. Tumbled pavers are popular for a rustic, Old World look, while travertine pavers offer an elegant, natural stone feel. During your consultation, we help you choose the best material for your style and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit for a paver patio in Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard paver patio installations typically do not require a permit in Duval County. However, if your project includes structures like pergolas, outdoor kitchens, or electrical and gas work, permits may be needed. We handle the entire permitting process for you when applicable, so you never have to worry about it.",
      },
    },
    {
      "@type": "Question",
      name: "Is a paver patio better than a concrete patio in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most Jacksonville homeowners, yes. A poured concrete patio is rigid, so it tends to crack as the ground shifts and as Florida's heat drives expansion and contraction. Pavers are individual units set on a compacted base, so they flex with the ground instead of splitting, drain water through the joints instead of pooling it, and can be lifted and re-set if a section ever settles. Pavers also offer far more color and pattern options than a plain concrete slab, and a single stained or chipped paver can be swapped without redoing the whole patio.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build a paver patio over my existing concrete slab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, yes. If your existing slab is structurally sound and properly drained, we can install pavers directly over it using a thin-set or sand-set method, which saves on demolition cost. If the slab is cracked, heaving, or holds water, we recommend removing it and building a proper compacted aggregate base from scratch for a longer-lasting result. We assess the slab during your free consultation and recommend the right approach for your patio.",
      },
    },
    {
      "@type": "Question",
      name: "Does a paver patio add value to my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-built paver patio is consistently one of the higher-ROI outdoor improvements you can make. In the Jacksonville market, buyers expect usable outdoor living space, and a finished paver patio with features like a fire pit or seating wall photographs well and helps a listing stand out. Because pavers read as a permanent, premium hardscape rather than a temporary fix, they tend to hold their value better than a plain concrete slab.",
      },
    },
    {
      "@type": "Question",
      name: "What size paver patio should I budget for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on how you plan to use the space. A compact fire pit patio for a small seating group generally starts near our $7,500 project minimum. A mid-size patio sized for a dining table and a separate lounge area is a larger investment, and a sprawling outdoor living area with multiple zones, a seating wall, and lighting sits at the top end. During your free consultation we measure your yard, talk through how you want to use it, and give you a detailed, no-obligation quote so the size and budget line up.",
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
      name: "Paver Patios",
      item: "https://jaxoutdoorspaces.com/patios/",
    },
  ],
};

export default function PatiosPage() {
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
      <PatiosContent />
    </>
  );
}

import PatiosContent from "../../src/components/service-pages/PatiosContent";

export const metadata = {
  title: "Paver Patio Installation Jacksonville FL | Jax Pavers",
  description:
    "Expert paver patio & courtyard installation in Jacksonville FL. Custom designs, fire pits, seating walls & more. Licensed, insured, 10-yr warranty. Free consultation!",
  alternates: {
    canonical: "/patios",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/patios",
    title: "Paver Patio Installation Jacksonville FL | Jax Pavers",
    description:
      "Expert paver patio & courtyard installation in Jacksonville FL. Custom designs, fire pits, seating walls & more. Licensed, insured, 10-yr warranty.",
    images: [
      {
        url: "/pavers-hero.png",
        width: 1200,
        height: 630,
        alt: "Paver patio installation by Jax Pavers in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paver Patio Installation Jacksonville FL | Jax Pavers",
    description:
      "Expert paver patio & courtyard installation in Jacksonville FL. Custom designs, fire pits, seating walls & more. Licensed, insured, 10-yr warranty.",
    images: [
      {
        url: "/pavers-hero.png",
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
    "Premium paver patio and courtyard installation in Jacksonville FL. Custom designs with fire pits, seating walls, lighting, and more. Licensed, insured, 10-year workmanship warranty.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Jacksonville",
    addressRegion: "FL",
  },
  serviceType: "Paver Patio Installation",
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
        text: "Standard paver patio installations typically do not require a permit in Duval County. However, if your project includes structures like pergolas, outdoor kitchens, or electrical and gas work, permits may be required. We handle the entire permitting process for you when needed.",
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
      item: "https://jaxoutdoorspaces.com/patios",
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

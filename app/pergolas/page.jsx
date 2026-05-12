import PergolasContent from '../../src/components/service-pages/PergolasContent';

export const metadata = {
  title: 'Pergola Installation Jacksonville FL | Jax Pavers',
  description:
    'Custom pergola installation in Jacksonville FL. Aluminum, cedar & StruXure louvered pergolas. Licensed and insured. Free consultation — (904) 445-1261.',
  alternates: {
    canonical: '/pergolas/',
  },
  openGraph: {
    type: 'website',
    title: 'Pergola Installation Jacksonville FL | Jax Pavers',
    description:
      'Custom pergola installation in Jacksonville FL. Aluminum, cedar & StruXure louvered pergolas. Licensed and insured. Free consultation — (904) 445-1261.',
    url: 'https://jaxoutdoorspaces.com/pergolas/',
    images: [
      {
        url: '/base.webp',
        width: 2400,
        height: 1350,
        alt: 'Pergola installation by Jax Pavers in Jacksonville FL',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pergola Installation Jacksonville FL | Jax Pavers',
    description:
      'Custom pergola installation in Jacksonville FL. Aluminum, cedar & StruXure louvered pergolas. Licensed and insured. Free consultation.',
    images: [
      {
        url: '/base.webp',
        alt: 'Pergola installation by Jax Pavers in Jacksonville FL',
      },
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pergola Installation',
  description:
    'Custom pergola installation in Jacksonville FL. Aluminum, cedar, and StruXure louvered pergolas designed for Florida weather — shade, style, and year-round outdoor living.',
  provider: { '@id': 'https://jaxoutdoorspaces.com/#business' },
  areaServed: { '@type': 'City', name: 'Jacksonville', addressRegion: 'FL' },
  serviceType: 'Pergola Installation',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '7500',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      price: '7500',
      description: 'Project minimum',
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a pergola cost in Jacksonville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pergola costs in Jacksonville depend on material, size, attachment style, and features. A standard 12x12 aluminum pergola without a roof system typically runs $8,000 to $14,000 installed. Cedar pergolas of similar size range from $10,000 to $16,000. StruXure louvered roof systems, which offer adjustable shade and rain protection, generally start around $20,000 for a basic installation and can exceed $35,000 for larger or multi-zone setups. Our project minimum is $7,500.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a louvered pergola cost in Jacksonville FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Louvered pergolas, also called adjustable-louver pergolas or motorized pergolas, are the premium tier of pergola installations. As an authorized StruXure dealer in Jacksonville, our typical louvered pergola installations start around $20,000 and run between $25,000 and $35,000 for most residential projects, with larger or multi-zone systems going higher. The premium reflects the engineered roof system, motorized louvers, integrated gutter drainage, and the engineering required to meet Florida\'s wind code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are pergolas in Jacksonville rated for hurricanes and Florida wind code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every pergola we install in Jacksonville is engineered to meet or exceed Florida Building Code wind-load requirements, which vary by county and proximity to the coast. Homes east of the Intracoastal (Jacksonville Beach, Ponte Vedra Beach, Atlantic Beach) face stricter wind ratings than inland homes. We use marine-grade hardware, properly sized concrete footings, and engineered mounting brackets so the structure stays put through summer thunderstorms and named storms alike.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a pergola and a gazebo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A gazebo is a fully roofed, freestanding outdoor structure, usually octagonal or hexagonal, with a solid roof that completely blocks sun and rain. A pergola is more architectural — it has vertical posts and a slatted, louvered, or open roof framework that filters light and creates partial shade without fully enclosing the space. Pergolas attach to homes, anchor outdoor kitchens, and define paver patios in ways gazebos cannot. Most Jacksonville homeowners choose pergolas for outdoor living because they offer flexibility and a cleaner architectural fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a pergola over my existing paver patio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is one of the most common project combinations we handle. If your existing paver patio has the right base structure, we can mount pergola posts directly to the patio surface or install concrete footings adjacent to it. For homeowners planning both, we recommend designing the pavers and pergola together from day one — it is faster, cleaner, and almost always less expensive than retrofitting later.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pergola material is best for Florida weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Aluminum is the most popular pergola material in Florida because it won't rot, resists rust, and requires virtually no maintenance. Powder-coated aluminum stands up to Jacksonville's heat, humidity, and salt air. Cedar is a beautiful natural option but requires periodic sealing and staining to maintain its appearance in Florida's climate.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit for a pergola in Jacksonville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most pergola installations in Jacksonville require a building permit from the City of Jacksonville Building Inspection Division. As a licensed and insured contractor, we handle the entire permitting process for you — from engineering drawings to final inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a pergola be attached to my house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, attached pergolas are one of our most popular installations. They create a seamless transition from your indoor living space to the outdoors and are ideal for covering patios, outdoor kitchens, and dining areas directly off the back of the home.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does pergola installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most pergola installations in Jacksonville take between 3 to 7 days depending on size, material, and complexity. Louvered roof systems and projects requiring permitting or concrete footings may take slightly longer. We provide a clear timeline during your consultation.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://jaxoutdoorspaces.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Pergola Installation',
      item: 'https://jaxoutdoorspaces.com/pergolas/',
    },
  ],
};

export default function PergolasPage() {
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
      <PergolasContent />
    </>
  );
}

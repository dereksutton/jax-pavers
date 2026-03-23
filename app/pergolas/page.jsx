import PergolasContent from '../../src/components/service-pages/PergolasContent';

export const metadata = {
  title: 'Pergola Installation Jacksonville FL | Jax Pavers',
  description:
    'Custom pergola installation in Jacksonville FL. Aluminum, cedar & StruXure louvered pergolas. 10-year warranty, licensed & insured. Free consultation — (904) 445-1261.',
  alternates: {
    canonical: '/pergolas',
  },
  openGraph: {
    title: 'Pergola Installation Jacksonville FL | Jax Pavers',
    description:
      'Custom pergola installation in Jacksonville FL. Aluminum, cedar & StruXure louvered pergolas. 10-year warranty. Free consultation — (904) 445-1261.',
    url: 'https://jaxoutdoorspaces.com/pergolas',
    images: [
      {
        url: '/pavers-hero.png',
        width: 1200,
        height: 630,
        alt: 'Pergola installation by Jax Pavers in Jacksonville FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pergola Installation Jacksonville FL | Jax Pavers',
    description:
      'Custom pergola installation in Jacksonville FL. Aluminum, cedar & StruXure louvered pergolas. 10-year warranty. Free consultation.',
    images: [
      {
        url: '/pavers-hero.png',
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
        text: 'Pergola costs vary based on material, size, and features such as louvered roofs or integrated lighting. We have a $7,500 project minimum for all installations. Contact us for a free consultation and we will provide a custom quote tailored to your outdoor space.',
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
      item: 'https://jaxoutdoorspaces.com/pergolas',
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

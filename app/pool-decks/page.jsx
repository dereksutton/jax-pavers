import PoolDecksContent from '../../src/components/service-pages/PoolDecksContent';

export const metadata = {
  title: 'Pool Deck Pavers Jacksonville FL | 10-Year Warranty | Jax Pavers',
  description:
    'Expert pool deck paver installation in Jacksonville FL. Slip-resistant, heat-reflective travertine and brick pavers. Licensed, insured, 10-year warranty. Free estimates.',
  alternates: {
    canonical: '/pool-decks',
  },
  openGraph: {
    type: 'website',
    url: 'https://jaxoutdoorspaces.com/pool-decks',
    title: 'Pool Deck Pavers Jacksonville FL | 10-Year Warranty | Jax Pavers',
    description:
      'Expert pool deck paver installation in Jacksonville FL. Slip-resistant, heat-reflective travertine and brick pavers. Licensed, insured, 10-year warranty.',
    images: [
      {
        url: '/pavers-hero.png',
        width: 1200,
        height: 630,
        alt: 'Pool deck paver installation by Jax Pavers in Jacksonville FL',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool Deck Pavers Jacksonville FL | 10-Year Warranty | Jax Pavers',
    description:
      'Expert pool deck paver installation in Jacksonville FL. Slip-resistant, heat-reflective travertine and brick pavers. Licensed, insured, 10-year warranty.',
    images: [
      {
        url: '/pavers-hero.png',
        alt: 'Pool deck paver installation by Jax Pavers in Jacksonville FL',
      },
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pool Deck Paver Installation',
  description:
    'Professional pool deck paver installation in Jacksonville FL. Slip-resistant, heat-reflective travertine and brick pavers expertly installed around new and existing pools with proper drainage and premium coping.',
  provider: { '@id': 'https://jaxoutdoorspaces.com/#business' },
  areaServed: { '@type': 'City', name: 'Jacksonville', addressRegion: 'FL' },
  serviceType: 'Pool Deck Paver Installation',
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
      name: 'What is the best material for a pool deck in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travertine and tumbled pavers are top choices for Florida pool decks. Travertine is naturally cooler underfoot thanks to its porous surface, and both options provide excellent slip resistance when wet. They also handle Florida\'s heat cycles without cracking like poured concrete.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a paver pool deck cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pool deck paver costs vary depending on the size of your pool area, materials chosen, and site conditions. We have a $7,500 project minimum. Contact us for a free consultation and detailed quote tailored to your specific pool deck project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you install pavers around an existing pool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we regularly retrofit paver pool decks around existing pools. We carefully excavate the old deck surface, prepare a proper base, and install new pavers with appropriate slope and drainage so everything works seamlessly with your current pool.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are paver pool decks slippery when wet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Textured pavers provide excellent grip even when wet, making them much safer than polished concrete or smooth tile around a pool. We specifically recommend materials with slip-resistant finishes for pool deck installations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does pool deck installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most pool deck paver installations take between 5 to 10 days depending on the size of the pool area, complexity of the design, and whether we are working around an existing pool or building alongside new construction.',
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
      name: 'Pool Deck Pavers',
      item: 'https://jaxoutdoorspaces.com/pool-decks',
    },
  ],
};

export default function PoolDecksPage() {
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
      <PoolDecksContent />
    </>
  );
}

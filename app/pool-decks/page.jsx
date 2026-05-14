import PoolDecksContent from '../../src/components/service-pages/PoolDecksContent';

export const metadata = {
  title: 'Pool Deck Pavers Jacksonville FL | Jax Pavers',
  description:
    'Expert pool deck paver installation in Jacksonville FL. Slip-resistant, heat-reflective travertine and brick pavers. Licensed and insured. Free estimates.',
  alternates: {
    canonical: '/pool-decks/',
  },
  openGraph: {
    type: 'website',
    url: 'https://jaxoutdoorspaces.com/pool-decks/',
    title: 'Pool Deck Pavers Jacksonville FL | Jax Pavers',
    description:
      'Expert pool deck paver installation in Jacksonville FL. Slip-resistant, heat-reflective travertine and brick pavers. Licensed and insured.',
    images: [
      {
        url: '/base.webp',
        width: 2400,
        height: 1350,
        alt: 'Pool deck paver installation by Jax Pavers in Jacksonville FL',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool Deck Pavers Jacksonville FL | Jax Pavers',
    description:
      'Expert pool deck paver installation in Jacksonville FL. Slip-resistant, heat-reflective travertine and brick pavers. Licensed and insured.',
    images: [
      {
        url: '/base.webp',
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
        text: 'Most pool deck paver installations take between 5 to 10 days depending on the size of the pool area, complexity of the design, and whether we are working around an existing pool or building alongside new pool construction.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a paver pool deck cost by size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pool deck cost scales with the square footage of the deck, the material you choose, and whether we are retrofitting an existing pool. Every Jax Pavers project starts at a $7,500 minimum, which generally covers a smaller deck and walkway. A standard residential pool deck with coping and a code-compliant base is a larger investment, and a large deck with travertine, a sun shelf surround, and multiple lounge zones sits at the top end. We measure your pool area during the free consultation and give you a detailed, no-obligation quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you resurface a cracked concrete pool deck with pavers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is one of the most common pool deck projects we handle in Jacksonville. Cracked, stained, or heaved concrete decks are everywhere here because rigid concrete does not handle Florida\'s soil movement and heat cycles well. We remove the failing concrete, build a proper compacted aggregate base, and install new pavers with correct slope and drainage. The result is a deck that flexes with the ground instead of cracking, and individual pavers can be re-set later if anything ever settles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the coolest paver for a Florida pool deck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travertine is the coolest option for a Jacksonville pool deck. Its naturally porous surface absorbs less heat than concrete or porcelain, so it stays comfortable on bare feet even in peak summer sun. Within concrete pavers, lighter color blends in ivory, sand, and silver tones reflect sunlight far better than dark charcoals. We recommend the lightest material that fits your design so the deck stays usable all day, and every option we install has a slip-resistant texture for safety when wet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are travertine pool decks a good choice in Jacksonville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travertine is one of the best pool deck materials for Northeast Florida. It stays cool underfoot, provides natural slip resistance when wet, and its earthy tones blend beautifully with the coastal and tropical landscaping common around Jacksonville pools. We source premium travertine in tumbled, honed, and brushed finishes. It does benefit from periodic sealing to resist staining, and we walk you through the upkeep so you know exactly what to expect before you choose it.',
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
      item: 'https://jaxoutdoorspaces.com/pool-decks/',
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

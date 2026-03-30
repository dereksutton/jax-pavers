import DrivewaysContent from '../../src/components/service-pages/DrivewaysContent';

export const metadata = {
  title: 'Paver Driveways Jacksonville FL | 10-Year Warranty | Jax Pavers',
  description:
    'Expert paver driveway installation in Jacksonville FL. Tremron & Belgard pavers, 10-year warranty, licensed & insured. Free consultation — (904) 445-1261.',
  alternates: {
    canonical: '/driveways',
  },
  openGraph: {
    type: 'website',
    title: 'Paver Driveways Jacksonville FL | 10-Year Warranty | Jax Pavers',
    description:
      'Expert paver driveway installation in Jacksonville FL. Premium Tremron & Belgard pavers, 10-year warranty. Free consultation — (904) 445-1261.',
    url: 'https://jaxoutdoorspaces.com/driveways',
    images: [
      {
        url: '/pavers-hero.png',
        width: 1200,
        height: 630,
        alt: 'Paver driveway installation by Jax Pavers in Jacksonville FL',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Driveways Jacksonville FL | 10-Year Warranty | Jax Pavers',
    description:
      'Expert paver driveway installation in Jacksonville FL. Premium Tremron & Belgard pavers, 10-year warranty. Free consultation.',
    images: [
      {
        url: '/pavers-hero.png',
        alt: 'Paver driveway installation by Jax Pavers in Jacksonville FL',
      },
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paver Driveway Installation',
  description:
    'Custom paver driveway installation in Jacksonville FL. Durable, code-compliant driveways using premium Tremron and Belgard pavers designed for Florida heat, rain, and heavy vehicles.',
  provider: { '@id': 'https://jaxoutdoorspaces.com/#business' },
  areaServed: { '@type': 'City', name: 'Jacksonville', addressRegion: 'FL' },
  serviceType: 'Paver Driveway Installation',
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
      name: 'How much does a paver driveway cost in Jacksonville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paver driveway costs depend on the size of the area, materials selected, and project complexity. We have a $7,500 project minimum for all installations. Contact us for a free consultation and detailed, no-obligation quote tailored to your property.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a driveway installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most paver driveway installations in Jacksonville take between 3 to 7 days depending on the size and complexity of the project. During your consultation, we provide a clear timeline so you know exactly what to expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are paver driveways better than concrete in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Paver driveways offer several advantages over poured concrete in Florida's climate. They flex with the ground instead of cracking under heat expansion, provide superior drainage, and individual pavers can be replaced if damaged — making long-term maintenance simpler and more affordable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do paver driveways need maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paver driveways are low-maintenance. We recommend periodic sweeping, rinsing with a garden hose, and re-sealing every 2 to 3 years to preserve color and protect against stains. Polymeric joint sand should be topped off as needed to prevent weed growth and ant activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What paver patterns work best for driveways?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Herringbone is the strongest pattern for driveways because its interlocking layout distributes vehicle weight evenly and resists shifting. Running bond and circle medallion patterns are also popular choices that combine visual appeal with durability.',
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
      name: 'Paver Driveways',
      item: 'https://jaxoutdoorspaces.com/driveways',
    },
  ],
};

export default function DrivewaysPage() {
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
      <DrivewaysContent />
    </>
  );
}

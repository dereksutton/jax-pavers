import DrivewaysContent from '../../src/components/service-pages/DrivewaysContent';

export const metadata = {
  title: 'Paver Driveways Jacksonville FL | Jax Pavers',
  description:
    'Expert paver driveway installation in Jacksonville FL. Premium Tremron & Belgard pavers, licensed and insured. Free consultation — (904) 445-1261.',
  alternates: {
    canonical: '/driveways/',
  },
  openGraph: {
    type: 'website',
    title: 'Paver Driveways Jacksonville FL | Jax Pavers',
    description:
      'Expert paver driveway installation in Jacksonville FL. Premium Tremron & Belgard pavers, licensed and insured. Free consultation — (904) 445-1261.',
    url: 'https://jaxoutdoorspaces.com/driveways/',
    images: [
      {
        url: '/base.webp',
        width: 2400,
        height: 1350,
        alt: 'Paver driveway installation by Jax Pavers in Jacksonville FL',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Driveways Jacksonville FL | Jax Pavers',
    description:
      'Expert paver driveway installation in Jacksonville FL. Premium Tremron & Belgard pavers, licensed and insured. Free consultation.',
    images: [
      {
        url: '/base.webp',
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
      name: 'Why do you recommend Tremron pavers for Jacksonville driveways?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tremron is one of the largest paver manufacturers in the Southeast and produces pavers in Florida. That matters in two ways: their products are engineered specifically for Florida\'s heat, humidity, and UV exposure (not generic North American climate), and the local manufacturing keeps lead times short and shipping costs low. Tremron also offers one of the broadest color and texture libraries in the industry, including the popular Stonehedge, Olde Town, and Mega-Olde Towne lines that work beautifully on Jacksonville driveways.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Tremron paver styles work best for Florida driveways?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Jacksonville driveways we most often install Tremron Stonehedge (a tumbled paver with old-world character that hides minor wear naturally), Olde Town (a smaller-format tumbled paver ideal for intricate patterns and circle medallions), and Mega-Olde Towne (larger format for a more contemporary look and faster installation on bigger driveways). All three are rated for vehicular traffic, available in a wide range of color blends, and engineered for Florida\'s UV and heat conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Tremron pavers available in modern color blends in Jacksonville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tremron\'s color library includes warm sand and terracotta tones, classic earth blends, and cool gray and charcoal palettes that work well for modern homes. We bring physical samples to every consultation so you can see how Tremron colors look against your home\'s exterior, landscaping, and existing hardscape. Multi-toned blends with contrasting border pavers are increasingly popular for Jacksonville driveways looking for a contemporary edge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you install Tremron pavers over or around my existing concrete driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with the right preparation. In some cases we can overlay thin pavers on top of structurally sound concrete; in most cases we recommend removing the concrete and installing the proper aggregate base and pavers from scratch, which produces a longer-lasting result. We assess the existing concrete during the consultation and recommend the right approach for your specific driveway.',
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
      item: 'https://jaxoutdoorspaces.com/driveways/',
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

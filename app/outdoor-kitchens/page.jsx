import OutdoorKitchensContent from '../../src/components/service-pages/OutdoorKitchensContent';

export const metadata = {
  title: 'Outdoor Kitchen Builders Jacksonville FL | Jax Pavers',
  description:
    'Custom outdoor kitchen installation in Jacksonville FL. Twin Eagles & TrueFlame grills, granite countertops, 10-year warranty. Free consultation — (904) 445-1261.',
  alternates: {
    canonical: '/outdoor-kitchens',
  },
  openGraph: {
    title: 'Outdoor Kitchen Builders Jacksonville FL | Jax Pavers',
    description:
      'Custom outdoor kitchen installation in Jacksonville FL. Premium grills, granite countertops, 10-year warranty. Free consultation — (904) 445-1261.',
    url: 'https://jaxoutdoorspaces.com/outdoor-kitchens',
    images: [
      {
        url: '/pavers-hero.png',
        width: 1200,
        height: 630,
        alt: 'Outdoor kitchen installation by Jax Pavers in Jacksonville FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outdoor Kitchen Builders Jacksonville FL | Jax Pavers',
    description:
      'Custom outdoor kitchen installation in Jacksonville FL. Premium grills, granite countertops, 10-year warranty. Free consultation.',
    images: [
      {
        url: '/pavers-hero.png',
        alt: 'Outdoor kitchen installation by Jax Pavers in Jacksonville FL',
      },
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outdoor Kitchen Installation',
  description:
    'Custom outdoor kitchen design and installation in Jacksonville FL. Premium Twin Eagles and TrueFlame grills, granite countertops, stone veneer islands, and full appliance integration built for year-round Florida entertaining.',
  provider: { '@id': 'https://jaxoutdoorspaces.com/#business' },
  areaServed: { '@type': 'City', name: 'Jacksonville', addressRegion: 'FL' },
  serviceType: 'Outdoor Kitchen Installation',
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
      name: 'How much does an outdoor kitchen cost in Jacksonville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outdoor kitchen costs vary widely based on the size of the island, number and type of appliances, countertop material, and overall design complexity. We have a $7,500 project minimum for all installations. Contact us for a free consultation and we will provide a detailed, no-obligation quote tailored to your property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need permits for an outdoor kitchen in Jacksonville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, yes. Gas lines, electrical circuits, and plumbing connections typically require permits in Duval County. As a licensed and insured contractor, we handle the entire permitting process so you do not have to worry about code compliance or inspections.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an outdoor kitchen take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most outdoor kitchen installations take between 2 to 4 weeks depending on the complexity of the design, appliance lead times, and permitting timelines. During your consultation, we provide a clear project schedule so you know exactly what to expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'What countertop materials work best for outdoor kitchens in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Granite and quartz are the most popular countertop choices for outdoor kitchens in Florida. Both materials are heat-resistant, weather-resistant, and require very little maintenance. They stand up well to Jacksonville\'s intense sun, humidity, and rain while maintaining their appearance for years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you add an outdoor kitchen to my existing patio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We regularly build outdoor kitchens on existing paver patios. If additional space is needed, we can expand the patio area to accommodate your new kitchen island. During your free consultation, we will assess your current setup and recommend the best approach.',
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
      name: 'Outdoor Kitchens',
      item: 'https://jaxoutdoorspaces.com/outdoor-kitchens',
    },
  ],
};

export default function OutdoorKitchensPage() {
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
      <OutdoorKitchensContent />
    </>
  );
}

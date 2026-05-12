import OutdoorKitchensContent from '../../src/components/service-pages/OutdoorKitchensContent';

export const metadata = {
  title: 'Outdoor Kitchens Jacksonville FL | Jax Pavers',
  description:
    'Custom outdoor kitchen installation in Jacksonville FL. Twin Eagles & TrueFlame grills, granite countertops, licensed and insured. Free consultation — (904) 445-1261.',
  alternates: {
    canonical: '/outdoor-kitchens/',
  },
  openGraph: {
    type: 'website',
    title: 'Outdoor Kitchens Jacksonville FL | Jax Pavers',
    description:
      'Custom outdoor kitchen installation in Jacksonville FL. Premium grills, granite countertops, licensed and insured. Free consultation — (904) 445-1261.',
    url: 'https://jaxoutdoorspaces.com/outdoor-kitchens/',
    images: [
      {
        url: '/base.webp',
        width: 2400,
        height: 1350,
        alt: 'Outdoor kitchen installation by Jax Pavers in Jacksonville FL',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outdoor Kitchens Jacksonville FL | Jax Pavers',
    description:
      'Custom outdoor kitchen installation in Jacksonville FL. Premium grills, granite countertops, licensed and insured. Free consultation.',
    images: [
      {
        url: '/base.webp',
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
        text: 'Outdoor kitchen costs in Jacksonville typically range from around $15,000 for a compact grill station to $50,000 or more for a full L-shaped suite with premium appliances, granite countertops, stone veneer, and a covered structure. We have a $7,500 project minimum for all installations. Contact us for a free consultation and we will provide a detailed, no-obligation quote tailored to your property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical price range for outdoor kitchens in Jacksonville FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most outdoor kitchen projects we install in Jacksonville fall into three tiers. Compact builds with a built-in grill, side burner, and storage start around $15,000 to $20,000. Mid-range L-shaped or U-shaped islands with refrigeration, premium appliances, and stone veneer typically run $25,000 to $40,000. Full luxury outdoor kitchens with pizza ovens, dedicated smokers, granite or quartz counters, bar seating, weatherproof TVs, and integrated lighting can exceed $50,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are outdoor kitchens worth it in Jacksonville\'s climate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Jacksonville averages over 220 sunny days per year and mild winters that rarely drop below freezing, which means an outdoor kitchen gets serious use almost year-round. Beyond lifestyle, outdoor kitchens are consistently ranked among the highest-ROI home improvements in the Southeast, with most installations recouping 50 to 70 percent of their cost at resale and significantly increasing buyer interest in Jacksonville\'s competitive housing market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my outdoor kitchen year-round in Northeast Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. With Florida\'s mild winters and warm shoulder seasons, most of our Jacksonville clients use their outdoor kitchens 9 to 11 months of the year. Adding a pergola or covered structure extends usability during summer storms and the few cooler weeks in January. Many homeowners pair their kitchen with a paver patio, pergola, and fire pit to create a true four-season outdoor living space.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I put an outdoor kitchen in my Jacksonville backyard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best location depends on your home\'s layout, prevailing wind direction (typically east in Jacksonville), and how close you can get to existing gas, water, and electrical service. Most clients build their outdoor kitchen 10 to 20 feet from the back of the home for convenient access, with a covered structure or pergola overhead. We assess all of this during the free site consultation and design a layout that fits your space and habits.',
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
      item: 'https://jaxoutdoorspaces.com/outdoor-kitchens/',
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

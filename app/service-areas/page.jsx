import ServiceAreasContent from '../../src/components/service-pages/ServiceAreasContent';

export const metadata = {
  title: 'Paver Installation Service Areas | Jacksonville FL | Jax Pavers',
  description:
    'Jax Pavers serves Jacksonville, Ponte Vedra Beach, Nocatee, St. Augustine, Mandarin, Fleming Island & surrounding Northeast Florida communities. 10-year warranty. Free quotes — (904) 445-1261.',
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    type: 'website',
    title: 'Paver Installation Service Areas | Jacksonville FL | Jax Pavers',
    description:
      'Serving Jacksonville and all of Northeast Florida with premium paver driveways, patios, pool decks, outdoor kitchens & pergolas. Licensed, insured, 10-year warranty.',
    url: 'https://jaxoutdoorspaces.com/service-areas',
    images: [
      {
        url: '/pavers-hero.png',
        width: 1200,
        height: 630,
        alt: 'Jax Pavers service areas in Northeast Florida',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation Service Areas | Jacksonville FL | Jax Pavers',
    description:
      'Serving Jacksonville and all of Northeast Florida with premium paver installation. 10-year warranty. Free quotes.',
    images: [
      {
        url: '/pavers-hero.png',
        alt: 'Jax Pavers service areas in Northeast Florida',
      },
    ],
  },
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paver Installation',
  provider: { '@id': 'https://jaxoutdoorspaces.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Jacksonville', addressRegion: 'FL' },
    { '@type': 'City', name: 'Jacksonville Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'Ponte Vedra Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'Nocatee', addressRegion: 'FL' },
    { '@type': 'City', name: 'Neptune Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'Atlantic Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'St. Augustine', addressRegion: 'FL' },
    { '@type': 'City', name: 'St. Augustine Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'St. Johns', addressRegion: 'FL' },
    { '@type': 'City', name: 'Fruit Cove', addressRegion: 'FL' },
    { '@type': 'City', name: 'Mandarin', addressRegion: 'FL' },
    { '@type': 'City', name: 'Riverside', addressRegion: 'FL' },
    { '@type': 'City', name: 'Fleming Island', addressRegion: 'FL' },
    { '@type': 'City', name: 'Orange Park', addressRegion: 'FL' },
    { '@type': 'City', name: 'Green Cove Springs', addressRegion: 'FL' },
  ],
  serviceType: 'Paver Installation',
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
      name: 'Service Areas',
      item: 'https://jaxoutdoorspaces.com/service-areas/',
    },
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceAreasContent />
    </>
  );
}

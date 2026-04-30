import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Paver Installation Jacksonville FL | 10-Year Warranty | Jax Pavers',
  description: "Jacksonville's top-rated paver contractor. Expert driveways, patios, pool decks, outdoor kitchens & pergolas. Licensed, insured, 10-year warranty. Get your free quote — (904) 445-1261.",
  keywords: 'paver installation Jacksonville FL, paver driveways Jacksonville, paver patios Jacksonville, pool deck pavers Jacksonville, outdoor kitchen Jacksonville, pergola installation Jacksonville, hardscape contractor Jacksonville, paver contractor near me, Jacksonville pavers, North Florida pavers, Tremron pavers Jacksonville, Belgard pavers Jacksonville',
  authors: [{ name: 'Jax Pavers' }],
  metadataBase: new URL('https://jaxoutdoorspaces.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://jaxoutdoorspaces.com/',
    title: 'Paver Installation Jacksonville FL | 10-Year Warranty | Jax Pavers',
    description: 'Premium paver installation & design in Jacksonville FL. Driveways, patios, pool decks, outdoor kitchens & pergolas. Licensed, insured, 10-year warranty. 5-star Google rated.',
    images: [
      {
        url: '/base.webp',
        width: 2400,
        height: 1350,
        alt: 'Jax Pavers - Premium paver installation in Jacksonville, Florida',
      },
    ],
    locale: 'en_US',
    siteName: 'Jax Pavers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation Jacksonville FL | 10-Year Warranty | Jax Pavers',
    description: 'Premium paver installation & design in Jacksonville FL. Driveways, patios, pool decks, outdoor kitchens & pergolas. Licensed, insured, 10-year warranty.',
    images: [
      {
        url: '/base.webp',
        alt: 'Jax Pavers - Premium paver installation in Jacksonville, Florida',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Jacksonville',
    'geo.position': '30.3322;-81.6557',
    'ICBM': '30.3322, -81.6557',
    'format-detection': 'telephone=yes',
    'facebook-domain-verification': '4bgy3wxm9o52g7impidstd7ocg9wtw',
  },
  icons: {
    icon: '/jaxpavers-logo.png',
    apple: '/jaxpavers-logo.png',
  },
};

export const viewport = {
  themeColor: '#0A86C4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload hero image for Core Web Vitals — responsive by viewport */}
        <link rel="preload" as="image" href="/pavers-hero-640w.webp" type="image/webp" media="(max-width: 640px)" />
        <link rel="preload" as="image" href="/pavers-hero-1024w.webp" type="image/webp" media="(min-width: 641px) and (max-width: 1024px)" />
        <link rel="preload" as="image" href="/pavers-hero-1920w.webp" type="image/webp" media="(min-width: 1025px)" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Structured Data: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://jaxoutdoorspaces.com/#business",
              "name": "Jax Pavers",
              "alternateName": "JAX Pavers",
              "url": "https://jaxoutdoorspaces.com",
              "logo": "https://jaxoutdoorspaces.com/jaxpavers-logo.png",
              "image": "https://jaxoutdoorspaces.com/pavers-hero.png",
              "description": "Jacksonville FL's trusted paver contractor specializing in paver driveways, patios, pool decks, outdoor kitchens, and pergolas. Licensed, insured, with a 10-year workmanship warranty.",
              "telephone": "+1-904-445-1261",
              "email": "info@jaxoutdoorspaces.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jacksonville",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.3322,
                "longitude": -81.6557
              },
              "areaServed": [
                { "@type": "City", "name": "Jacksonville", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville,_Florida" },
                { "@type": "City", "name": "Jacksonville Beach" },
                { "@type": "City", "name": "Ponte Vedra Beach" },
                { "@type": "City", "name": "Nocatee" },
                { "@type": "City", "name": "Neptune Beach" },
                { "@type": "City", "name": "St. Augustine" },
                { "@type": "City", "name": "St. Augustine Beach" },
                { "@type": "City", "name": "Atlantic Beach" },
                { "@type": "City", "name": "St. Johns" },
                { "@type": "City", "name": "Fruit Cove" },
                { "@type": "City", "name": "Mandarin" },
                { "@type": "City", "name": "Riverside" },
                { "@type": "City", "name": "Fleming Island" },
                { "@type": "City", "name": "Orange Park" },
                { "@type": "City", "name": "Green Cove Springs" }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 30.3322,
                  "longitude": -81.6557
                },
                "geoRadius": "80000"
              },
              "priceRange": "$$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Check, Credit Card",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "23",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Paul Kulick" },
                  "reviewBody": "Outstanding and professional work by JAX Pavers installing pavers on our driveway. Excellent craftsmanship. Great crew. Highly recommend them for any outdoor project you have."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Nicole Marie" },
                  "reviewBody": "Aaron did an amazing job on our outdoor kitchen! He was professional, responsive, and truly listened to what we wanted. The finished space is beautiful, functional, and has completely transformed our backyard."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Jordan Cooper" },
                  "reviewBody": "I can't say enough good things about Aaron and his crew at Jax Pavers. We had a very specific idea in mind for our backyard and they made it come to life better than we could have imagined."
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Paver Installation Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Paver Driveways",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paver Driveway Installation", "description": "Durable, code-compliant paver driveways that stand up to Florida heat, rain, and heavy vehicles." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paver Driveway Repair", "description": "Professional paver driveway repair and restoration to fix settling, shifting, or damaged pavers." } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Outdoor Kitchens",
                    "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor Kitchen Installation", "description": "Fully equipped outdoor kitchens designed for Florida living and outdoor entertaining." } }]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Patios & Courtyards",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paver Patio Installation", "description": "Premium paver patio installations that transform your backyard into an elegant extension of your home." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Patio Paving", "description": "Expert patio paving services using premium materials for beautiful, long-lasting outdoor living spaces." } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Pool Decks",
                    "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paver Pool Deck Installation", "description": "Stunning paver pool decks expertly crafted with premium materials and precision." } }]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Pergolas",
                    "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pergola Installation", "description": "Custom aluminum or cedar pergolas built to withstand Florida's elements." } }]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Paver Installation",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brick Paver Installation", "description": "Expert brick paver installation for driveways, patios, walkways, and pool decks throughout Jacksonville." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paver Installation", "description": "Full-service paver installation using premium materials from Tremron and Belgard for residential and commercial projects." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Walkway Paver Installation", "description": "Custom paver walkways designed to enhance curb appeal and provide durable, slip-resistant pathways." } }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Paver Maintenance",
                    "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paver Sealing", "description": "Professional paver sealing to protect against stains, UV fading, and weed growth while enhancing color." } }]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Hardscaping & Outdoor Living",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardscape Installation", "description": "Comprehensive hardscape installation including pavers, retaining walls, fire pits, and outdoor structures." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backyard Renovation", "description": "Complete backyard renovation and transformation services to create your ideal outdoor living space." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor Living Design", "description": "Custom outdoor living space design tailored to your lifestyle, property, and the Florida climate." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retaining Wall Installation", "description": "Engineered retaining walls built for drainage management, erosion control, and landscape aesthetics." } }
                    ]
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61582980187014",
                "https://www.instagram.com/jaxpavers/",
                "https://www.google.com/maps?cid=16511254573488647252"
              ]
            }),
          }}
        />

        {/* Structured Data: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of paver projects do you handle?",
                  "acceptedAnswer": { "@type": "Answer", "text": "We specialize in paver driveways, patios and courtyards, pool decks, outdoor kitchens, and pergola installations. We work with premium brands like Tremron and Belgard to deliver durable, beautiful results designed for the Florida climate." }
                },
                {
                  "@type": "Question",
                  "name": "How much does paver installation cost?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Every project is unique, so pricing depends on the scope of work, materials selected, and site conditions. We have a $7,500 project minimum for all installations. During your free consultation, we'll assess your space and provide a detailed, transparent quote with no hidden fees." }
                },
                {
                  "@type": "Question",
                  "name": "How long does a typical paver installation take?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most residential projects take between 3 to 10 days depending on size and complexity. Driveways and patios are typically on the shorter end, while outdoor kitchens and larger pool deck projects may take longer. We'll provide a clear timeline in your proposal." }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer a warranty on your work?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. We stand behind our craftsmanship with a 10-year workmanship warranty on all installations. The paver manufacturers also provide their own product warranties. We're licensed and insured for your peace of mind." }
                },
                {
                  "@type": "Question",
                  "name": "What areas in Jacksonville do you serve?",
                  "acceptedAnswer": { "@type": "Answer", "text": "We serve Jacksonville and the surrounding communities including Jacksonville Beach, Ponte Vedra Beach, Nocatee, Neptune Beach, St. Augustine, Atlantic Beach, St. Johns, Fruit Cove, Mandarin, Riverside, Fleming Island, Orange Park, and Green Cove Springs." }
                },
                {
                  "@type": "Question",
                  "name": "How do I maintain my pavers after installation?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Pavers are low-maintenance. We recommend periodic sweeping, rinsing with a garden hose, and re-sealing every 2–3 years to maintain color and protect against stains. Polymeric sand in the joints should be topped off as needed to prevent weed growth and ant activity." }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit for paver installation?",
                  "acceptedAnswer": { "@type": "Answer", "text": "In most cases, standard paver installations like driveways and patios don't require a permit in Duval County. However, projects involving structural elements, electrical, gas, or plumbing — such as outdoor kitchens — may require permits. We handle the permitting process for you when needed." }
                },
                {
                  "@type": "Question",
                  "name": "What happens during the free consultation?",
                  "acceptedAnswer": { "@type": "Answer", "text": "We visit your property, listen to your ideas, take measurements, and discuss material options, design possibilities, and budget. You'll receive a detailed written proposal with transparent pricing and a clear project timeline — no pressure, no obligation." }
                }
              ]
            }),
          }}
        />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jax Pavers",
              "url": "https://jaxoutdoorspaces.com"
            }),
          }}
        />

        {/* Structured Data: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://jaxoutdoorspaces.com/"
              }]
            }),
          }}
        />
      </head>
      <body>
        {children}

        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1505133090590766&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1505133090590766');
            fbq('track', 'PageView');`}
        </Script>
      </body>
    </html>
  );
}

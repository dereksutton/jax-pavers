import NocateePaversContent from "../../src/components/service-pages/NocateePaversContent";

export const metadata = {
  title: "Nocatee Pavers | Paver Installation in Nocatee FL | Jax Pavers",
  description:
    "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks & backyard build-outs for this fast-growing community. Licensed and insured.",
  alternates: {
    canonical: "/nocatee-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/nocatee-pavers/",
    title: "Nocatee Pavers | Paver Installation in Nocatee FL | Jax Pavers",
    description:
      "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks & backyard build-outs for this fast-growing community. Licensed and insured.",
    images: [
      {
        url: "/pavers-48.webp",
        width: 2400,
        height: 1350,
        alt: "Paver driveway installation by Jax Pavers in Nocatee FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocatee Pavers | Paver Installation in Nocatee FL | Jax Pavers",
    description:
      "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks & backyard build-outs for this fast-growing community. Licensed and insured.",
    images: [
      {
        url: "/pavers-48.webp",
        alt: "Paver driveway installation by Jax Pavers in Nocatee FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Paver installation in Nocatee FL. New-construction driveways, patios, pool decks, outdoor kitchens, and backyard build-outs. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Nocatee",
    addressRegion: "FL",
  },
  serviceType: "Paver Installation",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "7500",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "7500",
      description: "Project minimum",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install pavers in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nocatee is one of our most active service areas. As a fast-growing master-planned community straddling the St. Johns and Duval County line, Nocatee has constant new construction and resale upgrades, and we install paver driveways, patios, pool decks, outdoor kitchens, and pergolas across its neighborhoods. Our project minimum is $7,500, and every job is handled by a licensed and insured crew.",
      },
    },
    {
      "@type": "Question",
      name: "Which Nocatee neighborhoods do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of them. We routinely work in Greenleaf Village, Coastal Oaks, Twenty Mile, Crosswater, Tidewater, Addison Park, Siena, Liberty Cove, Del Webb Ponte Vedra, Riverwood by Del Webb, and the newer build-out areas around Crosswater Hall and the Outlook. If you live anywhere inside the Nocatee POA boundary, we can quote your project.",
      },
    },
    {
      "@type": "Question",
      name: "Can you upgrade a builder-grade driveway in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. Many Nocatee homes close with a standard poured-concrete driveway from production builders like Dream Finders, Toll Brothers, Pulte, ICI, David Weekley, or Providence. Replacing it with pavers is one of the most popular upgrades we do here — it dramatically improves curb appeal, adds color and pattern options that a flat concrete slab can't match, and gives you a driveway that flexes with the soil instead of cracking.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on new-construction backyard build-outs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's a big part of what we do in Nocatee. New homes often close with a blank backyard, and we build the whole outdoor space from scratch: paver patios, pool decks, outdoor kitchens, fire pits, seating walls, pergolas, and pathways. We coordinate with your pool builder, landscaper, and general timeline so the hardscape goes in once the home and pool are ready.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need Nocatee DRB or HOA approval for a paver project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost always, yes. Most Nocatee neighborhoods fall under the Nocatee POA's Design Review Board (DRB) process, and individual sub-HOAs may have additional architectural review. Paver driveways, expanded patios, pool decks, and outdoor structures typically require submitted plans showing material, color, pattern, dimensions, and a site plan. We prepare the documentation package the DRB expects and stay involved through approval so your project doesn't stall.",
      },
    },
    {
      "@type": "Question",
      name: "Do paver projects in Nocatee need a permit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of Nocatee is in St. Johns County, with a small portion in Duval County. Paver driveways generally require a county driveway/right-of-way permit, and any structural work (pergolas, outdoor kitchens with gas/electric/plumbing, retaining walls over a certain height) requires building permits. As a licensed and insured contractor, we pull the permits, schedule the inspections, and make sure the work meets local code.",
      },
    },
    {
      "@type": "Question",
      name: "How does Nocatee's sandy fill soil affect paver installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nocatee was developed on former timber and agricultural land, and many lots include compacted fill from the original site work. New lots can continue to settle for the first couple of years. We compensate by excavating to the proper depth, installing a deeper compacted aggregate base than a typical urban-infill job, and grading carefully for drainage away from the foundation. Getting the base right on a new-construction site is the difference between a hardscape that lasts and one that shifts within a few seasons.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical paver project cost in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and scope, but for Nocatee homes our most common ranges are: paver driveway replacement $12,000–$25,000+, patio expansions and pool decks $10,000–$30,000, full backyard build-outs with patio, pool deck, fire feature, and pergola $35,000–$80,000+, and complete outdoor kitchens $15,000–$50,000+. Our project minimum is $7,500. Every project gets a detailed, no-obligation quote after a free on-site consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a paver project take in Nocatee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most paver driveway and patio installations take between 3 and 7 working days once we mobilize. Pool decks and full build-outs run 1–3 weeks depending on size, weather, and how the pool/landscaping schedule lines up. We provide a clear timeline in your project proposal so you can plan around it, and we factor in the typical Nocatee DRB review window when we schedule the start date.",
      },
    },
    {
      "@type": "Question",
      name: "Will pavers hold up to Florida hurricanes and heavy rain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Properly installed pavers actually handle severe weather better than poured concrete. The permeable joints let driving rain drain through instead of pooling, the segmented surface flexes with ground movement instead of cracking, and individual pavers can be lifted and reset if anything ever shifts. We grade every Nocatee project to move water away from the home and toward the lot's intended drainage path, which matters in a community with heavy summer rains and the occasional tropical system.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jaxoutdoorspaces.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nocatee Pavers",
      item: "https://jaxoutdoorspaces.com/nocatee-pavers/",
    },
  ],
};

export default function NocateePaversPage() {
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
      <NocateePaversContent />
    </>
  );
}

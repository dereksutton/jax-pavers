import StAugustinePaversContent from "../../src/components/service-pages/StAugustinePaversContent";

export const metadata = {
  title: "St. Augustine Pavers | Paver Installation in St. Augustine FL | Jax Pavers",
  description:
    "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks & outdoor kitchens built for historic character and coastal weather. Licensed and insured.",
  alternates: {
    canonical: "/st-augustine-pavers/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/st-augustine-pavers/",
    title: "St. Augustine Pavers | Paver Installation in St. Augustine FL | Jax Pavers",
    description:
      "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks & outdoor kitchens built for historic character and coastal weather. Licensed and insured.",
    images: [
      {
        url: "/pavers-1.webp",
        width: 2400,
        height: 1350,
        alt: "Paver installation by Jax Pavers in St. Augustine FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Augustine Pavers | Paver Installation in St. Augustine FL | Jax Pavers",
    description:
      "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks & outdoor kitchens built for historic character and coastal weather. Licensed and insured.",
    images: [
      {
        url: "/pavers-1.webp",
        alt: "Paver installation by Jax Pavers in St. Augustine FL",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paver Installation",
  description:
    "Paver installation in St. Augustine FL. Timeless driveways, patios, pool decks, outdoor kitchens, and pergolas built for historic character and coastal weather. Licensed and insured.",
  provider: { "@id": "https://jaxoutdoorspaces.com/#business" },
  areaServed: {
    "@type": "City",
    name: "St. Augustine",
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
      name: "Do you install pavers in St. Augustine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St. Augustine, St. Augustine Beach, Anastasia Island, Vilano Beach, Crescent Beach, and the World Golf Village area are all part of our core service area. We design and install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout greater St. Augustine. Our project minimum is $7,500, and every job is handled by a licensed and insured crew.",
      },
    },
    {
      "@type": "Question",
      name: "Which St. Augustine neighborhoods do you work in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of them. We routinely work in Davis Shores, Lincolnville, North City, Anastasia Island, Vilano Beach, St. Augustine Beach, Crescent Beach, Marsh Creek, Sea Colony, Treaty Park, Palencia, Murabella, Las Calinas, World Golf Village (King & Bear, Slammer & Squire), Heritage Park, and the rural lots out toward Hastings. If you're inside St. Johns County, we can quote your project.",
      },
    },
    {
      "@type": "Question",
      name: "What paver styles suit St. Augustine's historic character?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "St. Augustine's architecture has a timeless, Old-World feel rooted in coquina, brick, and Spanish-Colonial detailing. Tumbled pavers — Tremron's Stonehedge, Olde Town, and Belgard's Cambridge or Bergerac lines — complement that beautifully with weathered edges and warm color blends that echo the historic district. We build cobblestone-style courtyards, herringbone patios, and circle medallion driveways that feel authentic to the Ancient City rather than fighting against it. For newer construction in Palencia, World Golf Village, or Murabella, we can just as easily go cleaner and more contemporary.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install pavers in St. Augustine's historic district?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but with extra steps. Properties inside the City of St. Augustine's historic preservation zones (HP-1 through HP-5) fall under the Historic Architecture Review Board (HARB) and require Certificate of Appropriateness approval for visible exterior changes — including driveways, walkways, and front courtyards. We prepare HARB-ready submission packages with material samples, color, pattern, and dimensions appropriate to the district. Rear courtyards and interior-of-lot work generally have fewer restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle St. Augustine's coastal weather and flood zones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "St. Augustine gets salt air, intense UV, high humidity, heavy summer rain, and the occasional named storm — Matthew, Irma, Ian, and Nicole have all hit this stretch of coast in recent memory. We specify UV-stable, color-fast pavers from Tremron and Belgard, grade every project for positive drainage away from the home and toward the lot's intended path, and use polymeric joint sand with proper edge restraints so the hardscape stays put through storm season. For properties in FEMA AE or VE flood zones, we plan elevations and drainage so the surface drains correctly during the rainfall events that actually happen here.",
      },
    },
    {
      "@type": "Question",
      name: "Do St. Augustine paver projects need permits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what's in scope and where the property sits. Standard paver patio and driveway replacements often don't require a county building permit, but right-of-way work, drainage modifications, structural additions (pergolas, outdoor kitchens with gas/electric/plumbing), and any work in the city's historic preservation zones do. We handle St. Johns County and City of St. Augustine permitting when your project calls for it, including HARB Certificate of Appropriateness applications in the historic district.",
      },
    },
    {
      "@type": "Question",
      name: "Are pavers a good choice for coastal St. Augustine homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — better than poured concrete in this environment, in our experience. The permeable joints let driving coastal rain drain through instead of pooling, the segmented system flexes with the sandy sub-grade common near the water instead of cracking, and individual pavers can be lifted and reset if storm surge or settling ever shifts a section. UV-stable color-through pavers also hold their look in St. Augustine's intense sun far longer than dyed or stained alternatives.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical paver project cost in St. Augustine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For St. Augustine homes our most common project ranges are: paver driveway replacement $12,000–$25,000+, patio expansions and new patios $10,000–$25,000, pool decks $15,000–$30,000+, outdoor kitchens $15,000–$50,000+, and full backyard build-outs $35,000–$80,000+. Historic district projects with HARB review and historically appropriate materials can run higher. Our project minimum is $7,500. Every project gets a detailed, no-obligation quote after a free on-site consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a paver project take in St. Augustine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most paver driveway, patio, and pool deck installations take between 3 and 7 working days once we mobilize. Projects in the historic district take longer overall because of HARB review timing, which we factor into the schedule up front. Larger backyard build-outs run 1–3 weeks depending on size and weather.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on barrier islands like Anastasia and Vilano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Anastasia Island, St. Augustine Beach, Vilano Beach, and Crescent Beach are some of our most beautiful project sites. Barrier-island work calls for extra attention to drainage, salt exposure, and elevations, and we design every install around those conditions. We pair pavers with proper base prep so coastal lots get hardscape that holds up to storm season, not just calm-weather projects.",
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
      name: "St. Augustine Pavers",
      item: "https://jaxoutdoorspaces.com/st-augustine-pavers/",
    },
  ],
};

export default function StAugustinePaversPage() {
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
      <StAugustinePaversContent />
    </>
  );
}

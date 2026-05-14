import OutdoorLivingRoiPost from "../../../src/components/blog/OutdoorLivingRoiPost";

export const metadata = {
  title: "The ROI of Outdoor Living: Do Pavers Add Home Value in Jacksonville?",
  description:
    "Do paver driveways, patios, and outdoor kitchens add home value in Jacksonville? What outdoor living returns at resale — and why it sells faster here.",
  alternates: {
    canonical: "/blog/roi-outdoor-living-jacksonville/",
  },
  openGraph: {
    type: "article",
    url: "https://jaxoutdoorspaces.com/blog/roi-outdoor-living-jacksonville/",
    title: "The ROI of Outdoor Living: Do Pavers Add Home Value in Jacksonville?",
    description:
      "What paver driveways, patios, and outdoor kitchens actually return at resale in the Jacksonville market — and why outdoor space sells faster here.",
    images: [
      {
        url: "/pavers-33.webp",
        width: 1536,
        height: 1024,
        alt: "Aerial view of a paver driveway and walkway at a luxury Jacksonville FL home by Jax Pavers",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "The ROI of Outdoor Living: Do Pavers Add Home Value in Jacksonville?",
    description:
      "What paver driveways, patios, and outdoor kitchens return at resale in the Jacksonville market — and why outdoor space sells faster here.",
    images: [
      {
        url: "/pavers-33.webp",
        alt: "Aerial view of a paver driveway and walkway at a luxury Jacksonville FL home by Jax Pavers",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The ROI of Outdoor Living: Do Pavers Add Home Value in Jacksonville?",
  description:
    "What paver driveways, patios, and outdoor kitchens actually return at resale in the Jacksonville market — and why outdoor space sells faster here.",
  datePublished: "2026-05-05",
  dateModified: "2026-05-05",
  image: "https://jaxoutdoorspaces.com/pavers-33.webp",
  author: { "@type": "Organization", name: "Jax Pavers" },
  publisher: { "@id": "https://jaxoutdoorspaces.com/#business" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaxoutdoorspaces.com/blog/roi-outdoor-living-jacksonville/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jaxoutdoorspaces.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jaxoutdoorspaces.com/blog/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "The ROI of Outdoor Living: Do Pavers Add Home Value in Jacksonville?",
      item: "https://jaxoutdoorspaces.com/blog/roi-outdoor-living-jacksonville/",
    },
  ],
};

export default function OutdoorLivingRoiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <OutdoorLivingRoiPost />
    </>
  );
}

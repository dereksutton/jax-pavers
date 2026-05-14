import PaverMaintenanceGuidePost from "../../../src/components/blog/PaverMaintenanceGuidePost";

export const metadata = {
  title: "Paver Maintenance Guide for Jacksonville Homeowners",
  description:
    "How to maintain pavers in Jacksonville's climate — cleaning, polymeric joint sand, sealing every 2-3 years, weed control, and a season-by-season checklist.",
  alternates: {
    canonical: "/blog/paver-maintenance-guide-jacksonville/",
  },
  openGraph: {
    type: "article",
    url: "https://jaxoutdoorspaces.com/blog/paver-maintenance-guide-jacksonville/",
    title: "Paver Maintenance Guide for Jacksonville Homeowners",
    description:
      "Cleaning, joint sand, sealing, and weed control — a simple, season-by-season plan to keep Jacksonville pavers looking new for decades.",
    images: [
      {
        url: "/pavers-37.webp",
        width: 1536,
        height: 1024,
        alt: "Sealed paver patio and fire pit with pathway lighting by Jax Pavers in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paver Maintenance Guide for Jacksonville Homeowners",
    description:
      "Cleaning, joint sand, sealing, and weed control — a simple, season-by-season plan to keep Jacksonville pavers looking new.",
    images: [
      {
        url: "/pavers-37.webp",
        alt: "Sealed paver patio and fire pit with pathway lighting by Jax Pavers in Jacksonville FL",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Paver Maintenance Guide for Jacksonville Homeowners",
  description:
    "Cleaning, joint sand, sealing, and weed control — a simple, season-by-season plan to keep Jacksonville pavers looking new for decades.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  image: "https://jaxoutdoorspaces.com/pavers-37.webp",
  author: { "@type": "Organization", name: "Jax Pavers" },
  publisher: { "@id": "https://jaxoutdoorspaces.com/#business" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaxoutdoorspaces.com/blog/paver-maintenance-guide-jacksonville/",
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
      name: "Paver Maintenance Guide for Jacksonville Homeowners",
      item: "https://jaxoutdoorspaces.com/blog/paver-maintenance-guide-jacksonville/",
    },
  ],
};

export default function PaverMaintenanceGuidePage() {
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
      <PaverMaintenanceGuidePost />
    </>
  );
}

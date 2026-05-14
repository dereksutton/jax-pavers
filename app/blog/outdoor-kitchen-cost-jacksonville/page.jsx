import OutdoorKitchenCostPost from "../../../src/components/blog/OutdoorKitchenCostPost";

export const metadata = {
  title: "Outdoor Kitchen Cost in Jacksonville: 2026 Price Guide",
  description:
    "2026 outdoor kitchen cost guide for Jacksonville FL — pricing by tier, appliances, countertops, and utilities. Plan your build budget with confidence.",
  alternates: {
    canonical: "/blog/outdoor-kitchen-cost-jacksonville/",
  },
  openGraph: {
    type: "article",
    url: "https://jaxoutdoorspaces.com/blog/outdoor-kitchen-cost-jacksonville/",
    title: "Outdoor Kitchen Cost in Jacksonville: 2026 Price Guide",
    description:
      "2026 outdoor kitchen cost guide for Jacksonville FL — pricing by tier, appliances, countertops, and utilities.",
    images: [
      {
        url: "/pavers-17.webp",
        width: 1536,
        height: 1024,
        alt: "Custom outdoor kitchen with grill island and bar seating by Jax Pavers in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outdoor Kitchen Cost in Jacksonville: 2026 Price Guide",
    description:
      "2026 outdoor kitchen cost guide for Jacksonville FL — pricing by tier, appliances, countertops, and utilities.",
    images: [
      {
        url: "/pavers-17.webp",
        alt: "Custom outdoor kitchen with grill island and bar seating by Jax Pavers in Jacksonville FL",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Outdoor Kitchen Cost in Jacksonville: 2026 Price Guide",
  description:
    "2026 outdoor kitchen cost guide for Jacksonville FL — pricing by tier, appliances, countertops, and utilities.",
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  image: "https://jaxoutdoorspaces.com/pavers-17.webp",
  author: { "@type": "Organization", name: "Jax Pavers" },
  publisher: { "@id": "https://jaxoutdoorspaces.com/#business" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaxoutdoorspaces.com/blog/outdoor-kitchen-cost-jacksonville/",
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
      name: "Outdoor Kitchen Cost in Jacksonville: 2026 Price Guide",
      item: "https://jaxoutdoorspaces.com/blog/outdoor-kitchen-cost-jacksonville/",
    },
  ],
};

export default function OutdoorKitchenCostPage() {
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
      <OutdoorKitchenCostPost />
    </>
  );
}

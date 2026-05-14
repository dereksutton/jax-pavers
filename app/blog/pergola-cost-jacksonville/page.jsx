import PergolaCostPost from "../../../src/components/blog/PergolaCostPost";

export const metadata = {
  title: "Pergola Cost in Jacksonville: 2026 Price Breakdown",
  description:
    "2026 pergola cost guide for Jacksonville FL — aluminum, cedar, and StruXure louvered pricing, plus how Florida wind code affects the bottom line.",
  alternates: {
    canonical: "/blog/pergola-cost-jacksonville/",
  },
  openGraph: {
    type: "article",
    url: "https://jaxoutdoorspaces.com/blog/pergola-cost-jacksonville/",
    title: "Pergola Cost in Jacksonville: 2026 Price Breakdown",
    description:
      "2026 pergola cost guide for Jacksonville FL — aluminum, cedar, and StruXure louvered pricing, plus Florida wind code.",
    images: [
      {
        url: "/pavers-40.webp",
        width: 1536,
        height: 1024,
        alt: "Custom pergola over a paver patio by Jax Pavers in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pergola Cost in Jacksonville: 2026 Price Breakdown",
    description:
      "2026 pergola cost guide for Jacksonville FL — aluminum, cedar, and StruXure louvered pricing, plus Florida wind code.",
    images: [
      {
        url: "/pavers-40.webp",
        alt: "Custom pergola over a paver patio by Jax Pavers in Jacksonville FL",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pergola Cost in Jacksonville: 2026 Price Breakdown",
  description:
    "2026 pergola cost guide for Jacksonville FL — aluminum, cedar, and StruXure louvered pricing, plus Florida wind code.",
  datePublished: "2026-05-11",
  dateModified: "2026-05-11",
  image: "https://jaxoutdoorspaces.com/pavers-40.webp",
  author: { "@type": "Organization", name: "Jax Pavers" },
  publisher: { "@id": "https://jaxoutdoorspaces.com/#business" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaxoutdoorspaces.com/blog/pergola-cost-jacksonville/",
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
      name: "Pergola Cost in Jacksonville: 2026 Price Breakdown",
      item: "https://jaxoutdoorspaces.com/blog/pergola-cost-jacksonville/",
    },
  ],
};

export default function PergolaCostPage() {
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
      <PergolaCostPost />
    </>
  );
}

import PaverPatioCostPost from "../../../src/components/blog/PaverPatioCostPost";

export const metadata = {
  title: "How Much Does a Paver Patio Cost in Jacksonville? (2026 Guide)",
  description:
    "2026 paver patio cost guide for Jacksonville FL — price per square foot, cost by patio size, and what drives pricing. Plan your project budget with confidence.",
  alternates: {
    canonical: "/blog/cost-of-paver-patio-jacksonville/",
  },
  openGraph: {
    type: "article",
    url: "https://jaxoutdoorspaces.com/blog/cost-of-paver-patio-jacksonville/",
    title: "How Much Does a Paver Patio Cost in Jacksonville? (2026 Guide)",
    description:
      "2026 paver patio cost guide for Jacksonville FL — price per square foot, cost by patio size, and what drives pricing.",
    images: [
      {
        url: "/pavers-22.webp",
        width: 1536,
        height: 1024,
        alt: "Freeform paver patio with fire pit by Jax Pavers in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does a Paver Patio Cost in Jacksonville? (2026 Guide)",
    description:
      "2026 paver patio cost guide for Jacksonville FL — price per square foot, cost by patio size, and what drives pricing.",
    images: [
      {
        url: "/pavers-22.webp",
        alt: "Freeform paver patio with fire pit by Jax Pavers in Jacksonville FL",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a Paver Patio Cost in Jacksonville? (2026 Guide)",
  description:
    "2026 paver patio cost guide for Jacksonville FL — price per square foot, cost by patio size, and what drives pricing.",
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  image: "https://jaxoutdoorspaces.com/pavers-22.webp",
  author: { "@type": "Organization", name: "Jax Pavers" },
  publisher: { "@id": "https://jaxoutdoorspaces.com/#business" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaxoutdoorspaces.com/blog/cost-of-paver-patio-jacksonville/",
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
      name: "How Much Does a Paver Patio Cost in Jacksonville?",
      item: "https://jaxoutdoorspaces.com/blog/cost-of-paver-patio-jacksonville/",
    },
  ],
};

export default function PaverPatioCostPage() {
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
      <PaverPatioCostPost />
    </>
  );
}

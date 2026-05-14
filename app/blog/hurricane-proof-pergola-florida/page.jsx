import HurricaneProofPergolaPost from "../../../src/components/blog/HurricaneProofPergolaPost";

export const metadata = {
  title: "Hurricane-Proof Pergolas in Florida: Wind Code, Materials & Engineering",
  description:
    "How pergolas are engineered to survive Florida storms — wind-load ratings, concrete footings, rated hardware, and the materials that hold up in Northeast FL.",
  alternates: {
    canonical: "/blog/hurricane-proof-pergola-florida/",
  },
  openGraph: {
    type: "article",
    url: "https://jaxoutdoorspaces.com/blog/hurricane-proof-pergola-florida/",
    title: "Hurricane-Proof Pergolas in Florida: Wind Code, Materials & Engineering",
    description:
      "How pergolas are engineered to survive Florida storms — wind-load ratings, footings, hardware, and material choices.",
    images: [
      {
        url: "/pavers-28.webp",
        width: 1536,
        height: 1024,
        alt: "Poolside pergola and paver patio built for Florida weather by Jax Pavers in Jacksonville FL",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hurricane-Proof Pergolas in Florida: Wind Code, Materials & Engineering",
    description:
      "How pergolas are engineered to survive Florida storms — wind-load ratings, footings, hardware, and material choices.",
    images: [
      {
        url: "/pavers-28.webp",
        alt: "Poolside pergola and paver patio built for Florida weather by Jax Pavers in Jacksonville FL",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hurricane-Proof Pergolas in Florida: Wind Code, Materials & Engineering",
  description:
    "How pergolas are engineered to survive Florida storms — wind-load ratings, footings, hardware, and material choices.",
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  image: "https://jaxoutdoorspaces.com/pavers-28.webp",
  author: { "@type": "Organization", name: "Jax Pavers" },
  publisher: { "@id": "https://jaxoutdoorspaces.com/#business" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaxoutdoorspaces.com/blog/hurricane-proof-pergola-florida/",
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
      name: "Hurricane-Proof Pergolas in Florida: Wind Code, Materials & Engineering",
      item: "https://jaxoutdoorspaces.com/blog/hurricane-proof-pergola-florida/",
    },
  ],
};

export default function HurricaneProofPergolaPage() {
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
      <HurricaneProofPergolaPost />
    </>
  );
}

import BlogIndexContent from "../../src/components/BlogIndexContent";
import blogPosts from "../../src/data/blogPosts";

export const metadata = {
  title: "Jacksonville Outdoor Living Blog | Paver Cost Guides | Jax Pavers",
  description:
    "Paver cost guides, material comparisons, and outdoor living tips for Jacksonville FL homeowners. Patio, driveway, pool deck, pergola & outdoor kitchen advice from Jax Pavers.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    type: "website",
    url: "https://jaxoutdoorspaces.com/blog/",
    title: "Jacksonville Outdoor Living Blog | Paver Cost Guides | Jax Pavers",
    description:
      "Paver cost guides, material comparisons, and outdoor living tips for Jacksonville FL homeowners from Jax Pavers.",
    images: [
      {
        url: "/base.webp",
        width: 2400,
        height: 1350,
        alt: "Jax Pavers Jacksonville outdoor living blog",
      },
    ],
    locale: "en_US",
    siteName: "Jax Pavers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacksonville Outdoor Living Blog | Paver Cost Guides | Jax Pavers",
    description:
      "Paver cost guides, material comparisons, and outdoor living tips for Jacksonville FL homeowners from Jax Pavers.",
    images: [
      {
        url: "/base.webp",
        alt: "Jax Pavers Jacksonville outdoor living blog",
      },
    ],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Jacksonville Outdoor Living Blog",
  description:
    "Paver cost guides, material comparisons, and outdoor living tips for Jacksonville FL homeowners.",
  url: "https://jaxoutdoorspaces.com/blog/",
  publisher: { "@id": "https://jaxoutdoorspaces.com/#business" },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://jaxoutdoorspaces.com/blog/${post.slug}/`,
    image: `https://jaxoutdoorspaces.com${post.image}`,
    author: { "@type": "Organization", name: "Jax Pavers" },
  })),
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
      name: "Blog",
      item: "https://jaxoutdoorspaces.com/blog/",
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogIndexContent />
    </>
  );
}

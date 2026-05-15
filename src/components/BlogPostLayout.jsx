"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShimmerButton from "./ShimmerButton";
import getImagePath from "../utils/imagePaths";
import { getOtherPosts } from "../data/blogPosts";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  // `amount: "some"` triggers as soon as any pixel is visible. Using a numeric
  // amount like 0.3 breaks on mobile when the element is taller than the
  // viewport (e.g. the long blog article body) — IntersectionObserver can
  // never satisfy "30% visible" so the element stays stuck at opacity: 0.
  viewport: { once: true, amount: "some" },
  transition: { duration: 0.5 },
};

// The article body is always above the fold on mount (right under the hero)
// and is taller than the mobile viewport, so animate it on mount instead of
// relying on whileInView at all.
const fadeUpOnMount = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPostLayout = ({
  title,
  date,
  category,
  readTime,
  heroImage,
  heroAlt,
  currentSlug,
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const relatedPosts = getOtherPosts(currentSlug, 3);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <header
        className="relative h-[45vh] min-h-[380px] w-full overflow-hidden"
        role="banner"
      >
        <picture className="absolute inset-0 w-full h-full">
          <img
            src={getImagePath(heroImage)}
            alt={heroAlt}
            className="w-full h-full object-cover"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
        </picture>

        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.55)", mixBlendMode: "multiply" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-semibold text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="rounded-full bg-[#0A86C4] px-3 py-1 uppercase tracking-wide">
              {category}
            </span>
            <span>{formatDate(date)}</span>
            <span aria-hidden="true">·</span>
            <span>{readTime}</span>
          </motion.div>
          <motion.h1
            className="max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {title}
          </motion.h1>
        </div>
      </header>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0A86C4]/20 to-transparent" />

      <main>
        {/* Breadcrumb */}
        <div className="mx-auto max-w-3xl px-4 pt-8 md:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0A86C4]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-[#0A86C4]">
              Blog
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-700">{title}</span>
          </nav>
        </div>

        {/* Article body */}
        <motion.article
          {...fadeUpOnMount}
          className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-12"
        >
          {children}
        </motion.article>

        {/* Mid/Bottom CTA */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          <motion.div
            {...fadeUp}
            className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-center md:flex-row md:px-8 md:text-left"
          >
            <div>
              <p className="mb-1 text-xl font-semibold text-white">
                Planning a project in Jacksonville?
              </p>
              <p className="text-base text-gray-300">
                Get a free, no-obligation consultation and a detailed written quote.
              </p>
            </div>
            <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
          </motion.div>
        </section>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100" />
            <div className="absolute inset-0 -z-10 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(10,134,196,0.08),transparent_70%)]" />
            <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
              <motion.div {...fadeUp} className="mb-10">
                <div className="mb-2 flex items-center gap-3">
                  <span className="block h-px w-8 bg-[#0A86C4]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#0A86C4]">
                    Keep Reading
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
                  More from the Jax Pavers Blog
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={getImagePath(post.image)}
                        alt={post.imageAlt}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#0A86C4]">
                        {post.category}
                      </span>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-[#0A86C4]">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostLayout;

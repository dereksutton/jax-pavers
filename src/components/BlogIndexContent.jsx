"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import getImagePath from "../utils/imagePaths";
import blogPosts from "../data/blogPosts";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogIndexContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <header
        className="relative h-[45vh] min-h-[360px] w-full overflow-hidden"
        role="banner"
      >
        <picture className="absolute inset-0 w-full h-full">
          <source
            type="image/webp"
            srcSet={`${getImagePath("/pavers-hero-640w.webp")} 640w, ${getImagePath("/pavers-hero-1024w.webp")} 1024w, ${getImagePath("/pavers-hero-1920w.webp")} 1920w`}
            sizes="100vw"
          />
          <img
            src={getImagePath("/pavers-hero-1920w.webp")}
            alt="Jacksonville outdoor living and paver project inspiration from Jax Pavers"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
        </picture>

        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.50)", mixBlendMode: "multiply" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jacksonville Outdoor Living Blog
          </motion.p>
          <motion.h1
            className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Paver Cost Guides, Design Ideas &amp; Florida Outdoor Living Tips
          </motion.h1>
        </div>
      </header>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0A86C4]/20 to-transparent" />

      <main>
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
          <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
            <motion.div {...fadeUp} className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
                The Blog
              </p>
              <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                Plan Your Project with Confidence
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Straightforward cost guides, material comparisons, and outdoor living
                advice written for Jacksonville and Northeast Florida homeowners by the
                team at Jax Pavers.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              // `amount: "some"` triggers as soon as any pixel of the grid is
              // visible. A numeric amount (e.g. 0.15) breaks on mobile once the
              // single-column grid is taller than the viewport can fit —
              // IntersectionObserver can never satisfy "15% visible" so the
              // parent stays at `hidden` and the child cards never cascade in.
              viewport={{ once: true, amount: "some" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {blogPosts.map((post) => (
                <motion.article key={post.slug} variants={item}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={getImagePath(post.image)}
                        alt={post.imageAlt}
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                        <span className="rounded-full bg-[#0A86C4]/10 px-2.5 py-1 uppercase tracking-wide text-[#0A86C4]">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 group-hover:text-[#0A86C4]">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0A86C4]">
                        Read article
                        <svg
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndexContent;

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ServicePageLayout from "../ServicePageLayout";
import ServiceGallery from "../ServiceGallery";
import ServiceFAQ from "../ServiceFAQ";

/* ── Animation presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ── Data ── */
const galleryImages = [
  { src: "/pavers-48.webp", alt: "Curved paver driveway installation through palm-lined landscaping by Jax Pavers in Nocatee FL" },
  { src: "/pavers-8.webp", alt: "Multi-toned paver driveway installation with charcoal border by Jax Pavers in Nocatee FL" },
  { src: "/pavers-16.webp", alt: "New-construction paver patio and backyard build-out by Jax Pavers in Nocatee FL" },
  { src: "/pavers-39.webp", alt: "Running bond paver driveway installation in gray tones by Jax Pavers in Nocatee FL" },
  { src: "/pavers-7.webp", alt: "Backyard paver patio installation with circular fire pit by Jax Pavers in Nocatee FL" },
];

const faqs = [
  { q: "Do you install pavers in Nocatee?", a: "Yes. Nocatee is one of our most active service areas. As a fast-growing master-planned community, Nocatee has plenty of new construction, and we install paver driveways, patios, pool decks, outdoor kitchens, and pergolas across its neighborhoods. Our project minimum is $7,500, and every job is handled by a licensed and insured crew." },
  { q: "Can you upgrade a builder-grade driveway in Nocatee?", a: "Definitely. Many Nocatee homes come with a standard poured-concrete driveway from the builder. Replacing it with pavers is one of the most popular upgrades we do here — it dramatically improves curb appeal, adds color and pattern options a concrete slab can't match, and gives you a driveway that flexes with the soil instead of cracking." },
  { q: "Do you work on new-construction backyard build-outs?", a: "Yes — that's a big part of what we do in Nocatee. New homes often close with a blank backyard, and we build the whole outdoor space from scratch: paver patios, pool decks, outdoor kitchens, fire pits, seating walls, pergolas, and pathways. We can coordinate with your timeline so the hardscape goes in once the home and any pool are ready." },
  { q: "Are there HOA requirements for pavers in Nocatee?", a: "Most Nocatee neighborhoods have an HOA with architectural review requirements, and paver projects typically need approval before work begins. We help you prepare the documentation the HOA expects — material, color, and layout details — so your project gets approved and stays on schedule." },
  { q: "How long does a paver project take in Nocatee?", a: "Most paver driveway and patio installations take between 3 and 7 days depending on size and complexity. Full backyard build-outs with a pool deck, outdoor kitchen, and multiple zones take longer. We provide a clear timeline in your project proposal so you can plan around it." },
];

const relatedServices = [
  { href: "/driveways", title: "Paver Driveways", blurb: "Upgrade your builder-grade driveway with custom pavers.", image: "/pavers-4.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Turn a blank new-construction backyard into living space.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant pool decks for new Nocatee pools.", image: "/pavers-14.webp" },
];

const services = [
  {
    href: "/driveways",
    title: "Paver Driveways",
    text: "Replace a builder-grade concrete driveway with a custom paver driveway. Durable, code-compliant, and a major curb-appeal upgrade for new Nocatee homes.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    href: "/patios",
    title: "Paver Patios & Courtyards",
    text: "Turn a blank new-construction backyard into a finished outdoor living space with a custom paver patio, fire pit, and seating walls.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    href: "/pool-decks",
    title: "Pool Deck Pavers",
    text: "Slip-resistant, heat-reflective pool decks that pair perfectly with the new pools going in across Nocatee's neighborhoods.",
    icon: <path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />,
  },
  {
    href: "/outdoor-kitchens",
    title: "Outdoor Kitchens",
    text: "Fully equipped outdoor kitchens built on a solid paver foundation — a popular finishing touch on Nocatee backyard build-outs.",
    icon: <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />,
  },
  {
    href: "/pergolas",
    title: "Pergolas",
    text: "Add shade and structure to a new patio or pool deck with a custom pergola — a smart way to complete a Nocatee outdoor space.",
    icon: <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />,
  },
];

const NocateePaversContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-48.webp"
      heroAlt="Paver driveway installation by Jax Pavers in Nocatee FL"
      heroTitle="Paver Installation in Nocatee, FL"
      heroSubtitle="New-construction driveways and backyard build-outs for Nocatee's fast-growing master-planned community."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Nocatee is one of the fastest-growing master-planned communities in the country, and new
          homes are going up across its neighborhoods constantly. That makes it one of our busiest
          service areas. Jax Pavers designs and installs paver driveways, patios, pool decks,
          outdoor kitchens, and pergolas throughout Nocatee — whether you're upgrading a
          builder-grade concrete driveway or building out a brand-new backyard from a blank slate.
          We are fully licensed and insured, our project minimum is $7,500, and we stand behind
          every install we deliver. Explore our{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">paver driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> to see what
          we can build for your Nocatee home.
        </p>
      </motion.section>

      {/* ── Services Card Grid ── */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              What We Build
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Services We Offer in Nocatee
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              From driveway upgrades to complete new-construction backyard build-outs, Jax Pavers
              handles the full range of hardscaping for Nocatee homes.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <motion.article
                key={s.title}
                variants={item}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A86C4]/10">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0A86C4]">{s.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{s.text}</p>
                <Link href={s.href} className="text-[#0A86C4] hover:underline font-semibold">
                  Learn more →
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Local Knowledge / SEO cluster content */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Nocatee Hardscaping</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Paver Installation in Nocatee: New Construction and Backyard Build-Outs
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nocatee's rapid growth means we're often working on homes that are only a year or
                two old — sometimes brand new. That changes the kind of paver work we do here.
                Instead of replacing tired old hardscape, we're frequently upgrading builder-grade
                surfaces or building entire outdoor spaces from scratch.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Working With New-Construction Soil
              </h3>
              <p>
                Newly developed lots in Nocatee often have fill soil that's still settling, so base
                preparation matters more than ever. We excavate to the proper depth, install and
                compact a quality aggregate base, and grade for drainage away from the foundation —
                the steps that keep a driveway or patio stable even as a new lot continues to settle.
                Getting the base right on a new-construction site is the difference between a
                hardscape that lasts and one that shifts within a few seasons.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Upgrading Builder-Grade Driveways
              </h3>
              <p>
                Most Nocatee homes close with a standard poured-concrete driveway. Replacing it with
                pavers is our single most-requested project in the community. Pavers flex with the
                soil instead of cracking, drain rainwater through the joints, and offer color and
                pattern options — herringbone, running bond, contrasting borders, circle medallions
                — that a flat gray slab simply can't match. It's the upgrade that makes a
                production-built home feel custom.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Complete Backyard Build-Outs
              </h3>
              <p>
                New homes in Nocatee often close with a blank backyard, and we build the whole space:
                paver patios, pool decks around newly installed pools, outdoor kitchens, fire pits,
                seating walls, pergolas, and pathways that tie it all together. Because nearly every
                Nocatee neighborhood has an HOA with architectural review, we also help prepare the
                material, color, and layout documentation needed to get your project approved and
                keep it on schedule.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Paver Projects in Nocatee" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default NocateePaversContent;

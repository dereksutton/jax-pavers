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
  { src: "/pavers-1.webp", alt: "Paver patio installation with stone fire pit and covered lanai by Jax Pavers in St. Augustine FL" },
  { src: "/pavers-4.webp", alt: "Tumbled paver driveway installation with curved border by Jax Pavers in St. Augustine FL" },
  { src: "/pavers-20.webp", alt: "Paver patio installation with fire pit and covered lanai by Jax Pavers in St. Augustine FL" },
  { src: "/pavers-26.webp", alt: "Old-world style paver courtyard and walkway installation by Jax Pavers in St. Augustine FL" },
  { src: "/pavers-47.webp", alt: "Circle medallion paver driveway installation by Jax Pavers in St. Augustine FL" },
];

const faqs = [
  { q: "Do you install pavers in St. Augustine?", a: "Yes. St. Augustine and St. Augustine Beach are part of our core service area. We design and install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout the St. Augustine area. Our project minimum is $7,500, and every job is handled by a licensed and insured crew." },
  { q: "What paver styles suit St. Augustine's historic character?", a: "St. Augustine's architecture has a timeless, Old-World feel, and tumbled pavers like Tremron's Stonehedge and Olde Town lines complement that beautifully — their weathered edges and warm color blends echo the historic district's coquina and brick. For homes that want a classic look, we also build cobblestone-style courtyards and herringbone patios that feel right at home in the Ancient City." },
  { q: "How do you handle St. Augustine's coastal weather?", a: "St. Augustine gets salt air, humidity, intense sun, and heavy seasonal rain. We specify UV-stable, color-fast pavers from Tremron and Belgard, grade every project for proper drainage away from the home, and use polymeric joint sand and edge restraints so the hardscape stays put through storm season. Proper base work is what makes a paver surface last in this climate." },
  { q: "Do St. Augustine paver projects need permits?", a: "Standard paver patio and driveway installations often don't require a permit, but projects involving structures, drainage changes, or work in flood-prone or historic-overlay areas may. We handle St. Johns County permitting when your project calls for it and help navigate any additional requirements in historic districts." },
  { q: "How long does a paver project take in St. Augustine?", a: "Most paver driveway, patio, and pool deck installations take between 3 and 7 days depending on size and complexity. Larger projects with multiple features take longer. We provide a clear timeline in your project proposal so you know exactly what to expect." },
];

const relatedServices = [
  { href: "/driveways", title: "Paver Driveways", blurb: "Timeless tumbled-paver driveways for St. Augustine homes.", image: "/pavers-4.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Old-world courtyards and patios built for Florida living.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, coastal-ready pool decks.", image: "/pavers-14.webp" },
];

const services = [
  {
    href: "/driveways",
    title: "Paver Driveways",
    text: "Timeless paver driveways in tumbled, Old-World styles that complement St. Augustine's historic character — durable, code-compliant, and built for the coast.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    href: "/patios",
    title: "Paver Patios & Courtyards",
    text: "Classic paver courtyards and patios with fire pits and seating walls — a natural fit for St. Augustine's Old-World architectural style.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    href: "/pool-decks",
    title: "Pool Deck Pavers",
    text: "Slip-resistant, heat-reflective pool decks built with UV-stable pavers that stand up to St. Augustine's coastal sun and humidity.",
    icon: <path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />,
  },
  {
    href: "/outdoor-kitchens",
    title: "Outdoor Kitchens",
    text: "Fully equipped outdoor kitchens built on a solid paver foundation — perfect for entertaining in St. Augustine's year-round outdoor climate.",
    icon: <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />,
  },
  {
    href: "/pergolas",
    title: "Pergolas",
    text: "Add shade and timeless architectural detail with a custom pergola over your patio or pool deck — a classic touch for St. Augustine outdoor spaces.",
    icon: <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />,
  },
];

const StAugustinePaversContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-1.webp"
      heroAlt="Paver installation by Jax Pavers in St. Augustine FL"
      heroTitle="Paver Installation in St. Augustine, FL"
      heroSubtitle="Timeless paver styles built for St. Augustine's historic character and coastal weather."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          St. Augustine is the oldest city in the country, and its homes carry a distinctive,
          Old-World character that deserves hardscaping with the same timeless quality. Jax Pavers
          designs and installs paver driveways, patios, pool decks, outdoor kitchens, and pergolas
          throughout St. Augustine and St. Augustine Beach. We specialize in classic, tumbled paver
          styles that complement the Ancient City's architecture while standing up to coastal salt
          air, humidity, and Florida sun. We are fully licensed and insured, our project minimum is
          $7,500, and we stand behind every install we deliver. Explore our{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">paver driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> to see what
          we can build for your St. Augustine home.
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
              Services We Offer in St. Augustine
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              From timeless tumbled-paver driveways to coastal pool decks, Jax Pavers handles the
              full range of hardscaping for St. Augustine homes.
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">St. Augustine Hardscaping</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Paver Installation in St. Augustine: Timeless Style for the Ancient City
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                St. Augustine is unlike anywhere else we work. Centuries of coquina, brick, and
                Spanish-Colonial architecture set a tone, and the hardscaping we install here is
                chosen to honor that character while performing in a demanding coastal climate.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Coastal Weather and Sandy Soil
              </h3>
              <p>
                The St. Augustine area gets salt air, high humidity, strong sun, and heavy seasonal
                rain — often all in the same week. The soil near the coast is sandy and drains fast,
                which suits pavers well, but only with a properly compacted aggregate base and solid
                edge restraints to keep everything in place. We grade every project for positive
                drainage away from the home and use polymeric joint sand so the hardscape holds up
                through storm season after storm season.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Paver Styles That Fit Historic Character
              </h3>
              <p>
                St. Augustine homes lean Old-World, and the paver styles we install reflect that.
                Tumbled pavers — Tremron's Stonehedge and Olde Town lines especially — have weathered
                edges and warm, blended color tones that echo the historic district's coquina and
                brick. We build cobblestone-style courtyards, herringbone patios, and circle
                medallion driveway accents that feel authentic to the Ancient City rather than
                fighting against it. For newer construction in the surrounding area, we can just as
                easily go cleaner and more contemporary.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                What's Popular in St. Augustine
              </h3>
              <p>
                The projects we see most around St. Augustine are tumbled-paver driveways that lift
                curb appeal, classic courtyards and patios with fire pits, and pool decks built to
                stay cool and slip-resistant near the water. Pergolas are a frequent addition for
                shade. When a project touches a structure, a drainage change, or a historic-overlay
                area, we handle St. Johns County permitting and help navigate the extra requirements
                so the work stays on track.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Paver Projects in St. Augustine" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default StAugustinePaversContent;

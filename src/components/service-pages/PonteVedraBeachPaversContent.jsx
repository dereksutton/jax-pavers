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
  { src: "/pavers-33.webp", alt: "Aerial view of luxury paver driveway and walkway installation by Jax Pavers in Ponte Vedra Beach FL" },
  { src: "/pavers-22.webp", alt: "Freeform paver patio with fire pit and in-ground lighting by Jax Pavers in Ponte Vedra Beach FL" },
  { src: "/pavers-26.webp", alt: "Elegant paver courtyard and walkway installation by Jax Pavers in Ponte Vedra Beach FL" },
  { src: "/pavers-30.webp", alt: "Coastal paver pool deck installation by Jax Pavers in Ponte Vedra Beach FL" },
  { src: "/pavers-40.webp", alt: "Custom paver patio and outdoor living area by Jax Pavers in Ponte Vedra Beach FL" },
];

const faqs = [
  { q: "Do you install pavers in Ponte Vedra Beach?", a: "Yes. Ponte Vedra Beach is one of our core service areas. We design and install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout Ponte Vedra Beach, Sawgrass, and the surrounding coastal communities. Our project minimum is $7,500, and every job is handled by a licensed and insured crew." },
  { q: "Which paver materials hold up best to Ponte Vedra's salt air?", a: "For coastal homes we recommend sealed concrete pavers from Tremron and Belgard, both engineered for Florida's UV, humidity, and salt exposure. Travertine is also a popular choice for its natural, upscale look and its ability to stay cool underfoot near the water. During your free consultation we bring samples so you can see how each option weathers in a coastal setting." },
  { q: "Can you match the upscale look of Ponte Vedra homes?", a: "Absolutely. Much of our Ponte Vedra Beach work leans toward refined, luxury hardscaping: travertine pool decks, large-format modern pavers, circle medallion driveway accents, and integrated lighting. We tailor the color, pattern, and material to your home's architecture so the finished hardscape feels like a natural extension of the property." },
  { q: "Do Ponte Vedra Beach projects need permits or HOA approval?", a: "Many Ponte Vedra Beach neighborhoods have HOA architectural review requirements, and some projects involving structures or drainage changes require St. Johns County permits. We help you navigate both — preparing the documentation HOAs typically request and handling county permitting when your project calls for it." },
  { q: "How long does a paver project take in Ponte Vedra Beach?", a: "Most paver driveway, patio, and pool deck installations take between 3 and 7 days depending on size and complexity. Larger luxury build-outs with multiple zones, seating walls, and lighting take longer. We provide a clear timeline in your project proposal so you know exactly what to expect." },
];

const relatedServices = [
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks for coastal homes.", image: "/pavers-14.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Elegant outdoor living spaces built for Florida living.", image: "/pavers-26.webp" },
  { href: "/outdoor-kitchens", title: "Outdoor Kitchens", blurb: "Fully equipped kitchens built for entertaining.", image: "/pavers-20.webp" },
];

const services = [
  {
    href: "/driveways",
    title: "Paver Driveways",
    text: "Make a statement at the curb with a custom paver driveway. We build durable, code-compliant driveways with luxury patterns and color blends that suit Ponte Vedra Beach architecture.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    href: "/patios",
    title: "Paver Patios & Courtyards",
    text: "Extend your living space with a custom patio or courtyard. Fire pits, seating walls, and lighting turn a Ponte Vedra backyard into a true outdoor living room.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    href: "/pool-decks",
    title: "Pool Deck Pavers",
    text: "Slip-resistant, heat-reflective pool decks in travertine and premium pavers — ideal for coastal homes where comfort and elegance matter near the water.",
    icon: <path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />,
  },
  {
    href: "/outdoor-kitchens",
    title: "Outdoor Kitchens",
    text: "Fully equipped outdoor kitchens built on a solid paver foundation. Perfect for entertaining in Ponte Vedra Beach's year-round outdoor climate.",
    icon: <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />,
  },
  {
    href: "/pergolas",
    title: "Pergolas",
    text: "Add shade and architectural detail with a custom pergola over your patio or pool deck. A natural fit for Ponte Vedra's upscale outdoor spaces.",
    icon: <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />,
  },
];

const PonteVedraBeachPaversContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-33.webp"
      heroAlt="Luxury paver installation by Jax Pavers in Ponte Vedra Beach FL"
      heroTitle="Paver Installation in Ponte Vedra Beach, FL"
      heroSubtitle="Luxury hardscaping and salt-air-durable paver work for Ponte Vedra Beach's coastal homes."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Ponte Vedra Beach is one of Northeast Florida's most desirable coastal communities, and
          its homes deserve hardscaping that matches. Jax Pavers designs and installs luxury paver
          driveways, patios, pool decks, outdoor kitchens, and pergolas throughout Ponte Vedra
          Beach and the surrounding area. Living near the ocean means salt air, sandy soil, and
          intense sun, so we specify materials that are built to last in that environment: sealed
          concrete pavers and travertine engineered for Florida's coastal climate. We are fully
          licensed and insured, our project minimum is $7,500, and we stand behind every install we
          deliver. Explore our{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">paver driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> to see what
          we can build for your Ponte Vedra Beach home.
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
              Services We Offer in Ponte Vedra Beach
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              From luxury driveways to coastal pool decks, Jax Pavers handles the full range of
              hardscaping for Ponte Vedra Beach homes.
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Ponte Vedra Beach Hardscaping</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Paver Installation in Ponte Vedra Beach: What Coastal Homes Need
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ponte Vedra Beach sits right on the Atlantic, and that location shapes every paver
                project we take on here. Salt air, blowing sand, and unfiltered coastal sun are hard
                on outdoor surfaces, so the material choices that work inland aren't always the right
                call near the water. We focus on hardscaping that looks refined and holds up for
                decades in that environment.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Salt Air and Sandy Coastal Soil
              </h3>
              <p>
                The soil along the Ponte Vedra coast is sandy and drains quickly, which is actually
                an advantage for pavers — but it also means a properly compacted aggregate base and
                solid edge restraints are essential so the field doesn't migrate over time. For salt
                exposure we recommend sealed concrete pavers and travertine, both color-stable and
                UV-resistant. We also grade carefully around pools and lanais so wind-driven rain and
                irrigation overspray drain away from the home rather than pooling.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                A Neighborhood Built for Luxury Hardscaping
              </h3>
              <p>
                Ponte Vedra Beach homes — from Sawgrass to the oceanfront estates — tend toward
                upscale, architecturally distinct design, and the hardscaping should match. Much of
                our work here is travertine pool decks that stay cool underfoot, large-format modern
                pavers, circle medallion driveway accents, and integrated low-voltage lighting. We
                tailor the color palette and pattern to each home so the driveway, patio, and pool
                deck read as one cohesive, high-end outdoor space.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                What's Popular in Ponte Vedra Beach
              </h3>
              <p>
                The most-requested projects we see in Ponte Vedra Beach are travertine pool decks,
                full outdoor kitchens for entertaining, and elegant paver courtyards that connect the
                home to the backyard. Pergolas are a frequent add-on for shade near the pool. Whatever
                the project, we help homeowners navigate HOA architectural review and St. Johns County
                permitting so the process stays smooth from design to final walkthrough.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Paver Projects in Ponte Vedra Beach" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default PonteVedraBeachPaversContent;

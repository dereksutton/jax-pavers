"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ServicePageLayout from "../ServicePageLayout";
import ServiceGallery from "../ServiceGallery";
import ServiceFAQ from "../ServiceFAQ";
import ShimmerButton from "../ShimmerButton";

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
  { src: "/pavers-4.webp", alt: "Tumbled paver driveway with curved border installed by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-8.webp", alt: "Multi-toned paver driveway with charcoal border installed by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-33.webp", alt: "Aerial view of paver driveway and walkway at a luxury home by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-39.webp", alt: "Running bond gray paver driveway installation by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-47.webp", alt: "Circle medallion paver driveway at a three-car garage home by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-48.webp", alt: "Curved paver driveway through palm-lined landscaping by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  { q: "What should I look for in a paving contractor in Jacksonville?", a: "Hire a paving contractor who is licensed and insured, uses premium manufacturers like Tremron and Belgard, and can show you a real portfolio of completed local work. Ask how they prepare the base — proper excavation and a compacted aggregate base are what separate an installation that lasts from one that shifts and settles in Florida's sandy soil. A good contractor handles permitting when needed and gives you a written, itemized quote with no hidden fees." },
  { q: "Is Jax Pavers licensed and insured?", a: "Yes. Jax Pavers is fully licensed and insured for paver installation work across Jacksonville and Northeast Florida. We're happy to provide documentation before your project begins, and we handle the permitting process for you whenever a project requires it." },
  { q: "How much does it cost to hire a paving contractor in Jacksonville?", a: "Cost depends on the size of the area, the materials you choose, and the complexity of the design. Jax Pavers has a $7,500 project minimum for all installations. We provide free consultations and detailed, no-obligation written quotes so you know exactly what your project will cost before any work starts." },
  { q: "What paver brands do you install?", a: "We install premium pavers from Tremron and Belgard, two of the most respected manufacturers in the Southeast. Both produce pavers engineered for Florida's heat, humidity, and UV exposure, in a wide range of colors, textures, and patterns rated for foot and vehicle traffic." },
  { q: "Why does base preparation matter so much in Florida?", a: "Jacksonville sits on sandy, moisture-prone soil that shifts when it isn't properly prepared. A professional paving contractor excavates to the correct depth, installs and compacts an aggregate base, and grades the surface for drainage before a single paver is laid. Skipping or shortcutting that base work is the most common reason paver projects fail — which is why we never cut corners on it." },
  { q: "What types of paving projects do you handle?", a: "We're a full-service paving contractor handling driveways, patios and courtyards, pool decks, outdoor kitchens, pergola foundations, walkways, and more. Whether you're upgrading a single surface or planning a complete backyard transformation, we manage the project from design and permitting through the final walkthrough." },
  { q: "How long does a paving project take?", a: "Most residential paving projects in Jacksonville take between 3 and 7 days, depending on the size of the area, the complexity of the design, and any additional features. We provide a clear timeline in your written proposal so you know exactly what to expect from start to finish." },
];

const relatedServices = [
  { href: "/driveways", title: "Paver Driveways", blurb: "Durable, code-compliant driveways built for Florida.", image: "/pavers-8.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Extend your living space with a custom patio.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks.", image: "/pavers-22.webp" },
];

const benefits = [
  {
    title: "Licensed & Insured",
    text: "Jax Pavers is fully licensed and insured for hardscape installation across Northeast Florida. You're protected from the first measurement to the final walkthrough — and we handle permitting whenever your project requires it.",
    icon: <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />,
  },
  {
    title: "Premium Materials",
    text: "We install Tremron and Belgard pavers exclusively — manufacturers engineered for Florida's heat, humidity, and UV. No generic product, no bargain substitutes that fade or fail early.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    title: "Proper Base Preparation",
    text: "Florida's sandy soil punishes shortcuts. We excavate to the correct depth, install and compact an aggregate base, and grade for drainage — the foundation that keeps your pavers level for decades.",
    icon: <path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />,
  },
  {
    title: "Built-In Drainage",
    text: "Permeable joints let Jacksonville's heavy afternoon rain filter through instead of pooling. We grade every surface to move water away from your home's foundation and outdoor living areas.",
    icon: <path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />,
  },
  {
    title: "Full-Service Contractor",
    text: "From the first design sketch through permitting, excavation, installation, and the final walkthrough — one accountable team manages your entire project. No subcontractor handoffs, no finger-pointing.",
    icon: <path fill="currentColor" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />,
  },
  {
    title: "Transparent Pricing",
    text: "Every Jax Pavers proposal is written and itemized — materials, labor, and timeline laid out clearly. Our project minimum is $7,500, with no hidden fees and no high-pressure sales tactics.",
    icon: <path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
  },
];

const processSteps = [
  { title: "Free consultation and site assessment", text: "We visit your property, discuss your goals, take precise measurements, and evaluate your soil and drainage conditions. You leave with a detailed written proposal and transparent pricing — no hidden fees, no pressure." },
  { title: "Custom design and material selection", text: "We design a layout tailored to your home's architecture and help you choose the right Tremron or Belgard product, color palette, and pattern — balancing the look you want with the structural requirements for your surface." },
  { title: "Permitting", text: "When your project requires a permit in Duval County or the surrounding municipalities, we handle the paperwork and inspections for you. As a full-service paving contractor, that's our job, not yours." },
  { title: "Excavation and base preparation", text: "We excavate to the correct depth, install a compacted aggregate base, and grade the surface for proper drainage. In Jacksonville's sandy soil, this is the single most important step for a paving project that lasts." },
  { title: "Paver installation", text: "Our experienced crew lays each paver by hand, following the approved design with tight, consistent joints. Border pavers and edge restraints lock the field in place to prevent shifting and lateral movement." },
  { title: "Final inspection and walkthrough", text: "We fill the joints with polymeric sand, clean the surface, and walk you through the finished project. We stand behind every install — if anything isn't right, we make it right before we call the job done." },
];

const PavingContractorsContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-33.webp"
      heroAlt="Paving contractors installing a paver driveway and walkway at a Jacksonville FL home"
      heroTitle="Paving Contractors in Jacksonville, FL"
      heroSubtitle="Licensed and insured paver installation built for Florida's heat, rain, and sandy soil."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Choosing the right paving contractor in Jacksonville is the difference
          between a hardscape that looks sharp for decades and one that shifts,
          settles, and stains within a few seasons. Florida's intense heat,
          heavy afternoon storms, and sandy soil punish shortcuts — which is why
          the base prep, drainage, and materials matter as much as the design.
          Jax Pavers is a licensed and insured paving contractor serving
          Jacksonville and Northeast Florida, installing premium paver{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link>{" "}
          with the craftsmanship and accountability your home deserves. Our
          project minimum is $7,500, and every proposal comes written, itemized,
          and pressure-free.
        </p>
      </motion.section>

      {/* ── Benefits Card Grid ── */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              Why Choose Jax Pavers
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              What Sets a Great Paving Contractor Apart
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Anyone can lay pavers. A professional paving contractor builds them
              to last in Florida's climate — with the right license, the right
              materials, and the base preparation that keeps a surface level for
              decades. Here's what you get with Jax Pavers.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((b) => (
              <motion.article
                key={b.title}
                variants={item}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A86C4]/10">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0A86C4]">{b.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="relative bg-white [background:radial-gradient(900px_500px_at_50%_-10%,rgba(10,134,196,0.06),transparent_60%)]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              How It Works
            </p>
            <div className="mx-auto mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Our Paving Process
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every Jax Pavers project follows a proven, six-step process
              engineered for the conditions here in Northeast Florida.
            </p>
          </motion.div>

          <div className="relative space-y-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex gap-5"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0A86C4] to-[#0875B1] text-white font-bold shadow-md text-sm">
                    {i + 1}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-[#0A86C4]/15" />
                  )}
                </div>

                <div className="pb-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-4 py-10 text-center md:flex-row md:px-8 md:text-left"
        >
          <div>
            <p className="text-xl mb-1 font-semibold text-white">
              Looking for a paving contractor you can trust?
            </p>
            <p className="text-base text-gray-300">
              Get a free, no-obligation consultation and a detailed written quote.
            </p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* ── Local Knowledge ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Why Jax Pavers</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              How to Choose a Paving Contractor in Jacksonville
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Jacksonville has no shortage of crews willing to lay pavers, but
                the quality gap between contractors is wide — and it usually
                shows up two or three years after the job is done. Start by
                confirming the contractor is genuinely{" "}
                <strong className="text-gray-900">licensed and insured</strong>.
                A licensed paving contractor carries the credentials to pull
                permits in Duval County and the surrounding municipalities, and
                proper insurance protects you if something goes wrong on your
                property. Ask for documentation before any work begins — a
                reputable contractor will hand it over without hesitation.
              </p>
              <p>
                Next, ask about{" "}
                <strong className="text-gray-900">materials</strong>. The best
                paving contractors in Jacksonville install premium pavers from
                manufacturers like{" "}
                <strong className="text-gray-900">Tremron and Belgard</strong>,
                both engineered specifically for Florida's heat, humidity, and
                UV exposure. Bargain or generic pavers fade, spall, and lose
                their color stability fast in our climate. Premium product
                costs more up front and saves you a teardown later.
              </p>
              <p>
                The most important question, though, is about{" "}
                <strong className="text-gray-900">base preparation</strong>.
                Jacksonville sits on sandy, moisture-prone soil that shifts
                under any surface that isn't properly supported. A professional
                paving contractor excavates to the correct depth, installs and
                compacts an aggregate base, and grades the surface so water
                drains away from your home rather than pooling on it. Skipping
                or shortcutting that base work is the number-one reason paver
                projects fail — and it's invisible once the pavers are down, so
                you have to ask before you sign.
              </p>
              <p>
                Finally, look for a{" "}
                <strong className="text-gray-900">full-service contractor</strong>{" "}
                who manages the entire project — design, permitting, excavation,
                installation, and a final walkthrough — under one accountable
                team. That's exactly how Jax Pavers works. Whether you need a
                new paver{" "}
                <Link href="/driveways" className="text-[#0A86C4] hover:underline">driveway</Link>, a backyard{" "}
                <Link href="/patios" className="text-[#0A86C4] hover:underline">patio</Link>, a{" "}
                <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool deck</Link>, an{" "}
                <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchen</Link>, or a{" "}
                <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergola</Link>, you'll
                work with one team from the first measurement to the final
                walkthrough — no subcontractor handoffs, no finger-pointing. Our
                project minimum is $7,500, every proposal is written and
                itemized, and we stand behind every install we complete across
                Jacksonville and Northeast Florida.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Our Paving Work in Jacksonville" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default PavingContractorsContent;

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
  { src: "/pavers-39.webp", alt: "Running bond paver driveway built for heavy Florida rain by Jax Pavers in Orange Park FL" },
  { src: "/pavers-7.webp", alt: "Backyard paver patio with circular fire pit by Jax Pavers in Orange Park FL" },
  { src: "/pavers-20.webp", alt: "Paver patio with fire pit and covered lanai by Jax Pavers in Orange Park FL" },
  { src: "/pavers-47.webp", alt: "Circle medallion paver driveway at a Clay County home by Jax Pavers in Orange Park FL" },
  { src: "/pavers-40.webp", alt: "Paver walkway and driveway installation at an Orange Park home by Jax Pavers in Orange Park FL" },
];

const faqs = [
  { q: "Do you install pavers in Orange Park and Clay County?", a: "Yes. Orange Park and the surrounding Clay County communities — including Fleming Island, Oakleaf, and Middleburg — are part of our regular service area. We install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout the area." },
  { q: "How do paver driveways handle heavy Florida rain in Orange Park?", a: "Very well, and that's a big reason we recommend them here. The joints between pavers let rainwater filter through instead of sheeting off the surface, and we grade every driveway to drain away from your foundation. Compared to a poured slab that pools water and eventually cracks, a properly based paver driveway manages Clay County's heavy summer storms far better." },
  { q: "How much does a paver project cost in Orange Park?", a: "Cost depends on the size of the area, the materials you choose, and project complexity. Every Jax Pavers project starts at a $7,500 minimum. We focus on quality hardscaping at a competitive value, and we provide a detailed, no-obligation quote at your free consultation so you know exactly what to expect." },
  { q: "Are pavers worth it compared to concrete in Clay County?", a: "For most Orange Park homeowners, yes. Pavers flex with the ground instead of cracking, drain better in heavy rain, and individual units can be replaced if one ever shifts or stains. They also deliver far more curb appeal than a plain slab. We help you choose a material and pattern that hits the right balance of durability, looks, and budget." },
  { q: "Are you licensed and insured to work in Orange Park?", a: "Yes. Jax Pavers is fully licensed and insured, and we handle any permitting your project requires. We stand behind every install we deliver and are happy to walk you through our process and references before you commit." },
];

const relatedServices = [
  { href: "/driveways", title: "Paver Driveways", blurb: "Driveways built to drain heavy Florida rain.", image: "/pavers-4.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Extend your living space with a custom patio.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks.", image: "/pavers-14.webp" },
];

const services = [
  {
    title: "Paver Driveways",
    href: "/driveways",
    text: "Quality paver driveways built on a deep, compacted base to drain Clay County's heavy summer rain and resist the cracking that plagues poured concrete.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    title: "Paver Patios & Courtyards",
    href: "/patios",
    text: "Custom patios and courtyards that give your Orange Park backyard a durable, good-looking foundation for entertaining — at a competitive value.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    title: "Pool Decks",
    href: "/pool-decks",
    text: "Slip-resistant, heat-reflective paver pool decks that stay cooler underfoot and drain quickly after an afternoon Clay County storm.",
    icon: <path fill="currentColor" d="M2 15c.83 0 1.58-.34 2.12-.88C4.66 13.66 5.41 13.32 6.24 13.32s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88v-2c-.83 0-1.58.34-2.12.88-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88c-.54-.54-1.29-.88-2.12-.88s-1.58.34-2.12.88c-.54.54-1.29.88-2.12.88v-9H6.24v9c-.83 0-1.58-.34-2.12-.88C3.58 11.34 2.83 11 2 11v2c.83 0 1.58.34 2.12.88M2 19c.83 0 1.58-.34 2.12-.88.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88v2c-.83 0-1.58.34-2.12.88-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88c-.54-.54-1.29-.88-2.12-.88s-1.58.34-2.12.88c-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88C7.82 17.34 7.07 17 6.24 17s-1.58.34-2.12.88C3.58 18.34 2.83 18.66 2 18.66" />,
  },
  {
    title: "Outdoor Kitchens",
    href: "/outdoor-kitchens",
    text: "Fully equipped outdoor kitchens that turn an Orange Park backyard into a year-round entertaining space, built to last in Florida's climate.",
    icon: <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />,
  },
  {
    title: "Pergolas",
    href: "/pergolas",
    text: "Pergolas and shade structures that make an Orange Park patio or pool deck usable through the hottest, wettest part of a Florida afternoon.",
    icon: <path fill="currentColor" d="M3 3v18h2V3H3zm16 0v18h2V3h-2zM6 5v2h12V5H6zm0 4v2h12V9H6z" />,
  },
];

const OrangeParkPaversContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-39.webp"
      heroAlt="Paver driveway built for heavy Florida rain by Jax Pavers in Orange Park FL"
      heroTitle="Paver Installation in Orange Park, FL"
      heroSubtitle="Quality hardscaping at a competitive value for Orange Park and Clay County — built to handle heavy Florida rain."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Orange Park and the surrounding Clay County communities want the same thing
          most homeowners do: quality hardscaping that lasts, without overpaying for it.
          Jax Pavers designs and installs paver{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> throughout
          Orange Park, with a special focus on driveways built to drain the heavy summer
          rain Clay County is known for. We are fully licensed and insured, every project
          starts at a $7,500 minimum, and we serve Orange Park and the surrounding
          communities. We stand behind every install we deliver — quality work at a price
          that makes sense.
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
              Services We Offer in Orange Park
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              From a rain-ready driveway at the curb to a finished pool deck out back, we
              handle every hardscape surface on your Orange Park property. Click any
              service to learn more.
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
                <Link href={s.href} className="text-sm font-semibold text-[#0A86C4] hover:underline">
                  Learn more about {s.title} &rarr;
                </Link>
              </motion.article>
            ))}
          </motion.div>
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
              Ready for hardscaping that holds up in Clay County?
            </p>
            <p className="text-base text-gray-300">
              Get quality paver work at a competitive value — book your free quote today.
            </p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* ── Local Knowledge / SEO cluster content ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Orange Park Hardscaping</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Paver Work in Orange Park: Built for Clay County Conditions
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Orange Park homeowners tend to be practical. They want hardscaping that
                looks good and lasts, but they're not interested in paying a premium for a
                name. That fits how we work: quality materials, a base built to do its job,
                and honest pricing. Across Orange Park, Fleming Island, Oakleaf, and
                Middleburg, the projects we see most are driveways, patios, and pool decks
                where the homeowner wants real durability at a competitive value.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Driveways Built for Heavy Florida Rain
              </h3>
              <p>
                Clay County gets hammered by afternoon thunderstorms through the summer, and
                drainage is where a lot of cheaper driveways fail. A poured concrete slab
                sheets all that water toward the lowest point — often the garage or the
                foundation — and eventually cracks under the heat and moisture cycles. A
                paver driveway is the opposite: rainwater filters down through the joints,
                and we grade the surface to carry runoff away from the house. The deep,
                compacted aggregate base we install under every driveway is what makes it
                hold up storm after storm.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Sandy Clay County Soil
              </h3>
              <p>
                Soil around Orange Park ranges from sandy to a heavier clay mix, and both
                move with moisture and heat. Pavers handle that movement because each unit
                is independent — the surface flexes instead of cracking, and any section
                that settles can be lifted and re-set. Getting the base right for the
                specific soil on your lot is the single most important step, and it's where
                we spend the most care.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Quality Hardscaping at a Competitive Value
              </h3>
              <p>
                Orange Park is a value-conscious market, and we lean into that. We carry
                durable paver lines in a wide range of colors and patterns, so you can get a
                driveway or patio that genuinely upgrades your home without specifying the
                most expensive product on the shelf. During your free consultation we bring
                samples, talk through what makes sense for your budget, and give you a
                detailed, no-obligation quote. The goal is straightforward: quality work
                that lasts, at a price that makes sense for Clay County.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Paver Projects in Orange Park" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default OrangeParkPaversContent;

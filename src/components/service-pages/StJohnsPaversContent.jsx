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
  { src: "/pavers-8.webp", alt: "Multi-toned paver driveway installation at a new construction home by Jax Pavers in St. Johns FL" },
  { src: "/pavers-1.webp", alt: "Backyard paver patio with stone fire pit and covered lanai by Jax Pavers in St. Johns FL" },
  { src: "/pavers-16.webp", alt: "Paver pool deck installation with travertine surround by Jax Pavers in St. Johns FL" },
  { src: "/pavers-30.webp", alt: "Full backyard paver build-out with outdoor living space by Jax Pavers in St. Johns FL" },
  { src: "/pavers-40.webp", alt: "Paver walkway and entry installation at a Fruit Cove family home by Jax Pavers in St. Johns FL" },
];

const faqs = [
  { q: "Do you install pavers in St. Johns County communities like Fruit Cove and Julington Creek?", a: "Yes. St. Johns County is one of our core service areas, and we regularly install pavers in Fruit Cove, Julington Creek, Durbin Crossing, RiverTown, and the newer subdivisions along the County Road 210 corridor. Whether your home is brand new or a few years old, we can design a driveway, patio, pool deck, or full outdoor living space that fits the neighborhood." },
  { q: "We just built a new home in St. Johns — can you do the whole backyard at once?", a: "Absolutely. A lot of our St. Johns clients are families in new construction who want to take a blank builder-grade yard and turn it into a finished outdoor space. We can phase the work or build it all at once: driveway, walkways, patio, pool deck, outdoor kitchen, and pergola. Planning the full layout up front keeps drainage, grading, and design cohesive across the whole property." },
  { q: "How much does a paver project cost in St. Johns?", a: "Cost depends on the size of the area, the materials you choose, and how many features are involved. Every Jax Pavers project starts at a $7,500 minimum. Because we hand-measure each property and price projects individually, the free consultation is the only way to get a number you can actually plan around." },
  { q: "What paver styles are popular with St. Johns homeowners?", a: "Newer St. Johns construction tends to lean transitional and modern, so we install a lot of larger-format pavers and clean multi-toned blends with contrasting borders. Tumbled pavers in warm earth tones are also popular for families who want a more traditional look. We bring physical samples to every consultation so you can see how each option reads against your home." },
  { q: "Are you licensed and insured to work in St. Johns County?", a: "Yes. Jax Pavers is fully licensed and insured, and we handle any permitting required for your project. We stand behind every install we deliver, and we are happy to walk you through our process and references before you commit." },
];

const relatedServices = [
  { href: "/driveways", title: "Paver Driveways", blurb: "Durable, code-compliant driveways built for Florida.", image: "/pavers-4.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Extend your living space with a custom patio.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks.", image: "/pavers-14.webp" },
];

const services = [
  {
    title: "Paver Driveways",
    href: "/driveways",
    text: "Durable, code-compliant paver driveways that give a new St. Johns home instant curb appeal and flex with the sandy soil instead of cracking like poured concrete.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    title: "Paver Patios & Courtyards",
    href: "/patios",
    text: "Custom patios and courtyards built for Florida outdoor living, from cozy fire pit areas to sprawling entertaining spaces sized for a growing family.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    title: "Pool Decks",
    href: "/pool-decks",
    text: "Slip-resistant, heat-reflective paver pool decks that stay cooler underfoot through a St. Johns summer and tie the whole backyard together.",
    icon: <path fill="currentColor" d="M2 15c.83 0 1.58-.34 2.12-.88C4.66 13.66 5.41 13.32 6.24 13.32s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88v-2c-.83 0-1.58.34-2.12.88-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88c-.54-.54-1.29-.88-2.12-.88s-1.58.34-2.12.88c-.54.54-1.29.88-2.12.88v-9H6.24v9c-.83 0-1.58-.34-2.12-.88C3.58 11.34 2.83 11 2 11v2c.83 0 1.58.34 2.12.88M2 19c.83 0 1.58-.34 2.12-.88.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88v2c-.83 0-1.58.34-2.12.88-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88c-.54-.54-1.29-.88-2.12-.88s-1.58.34-2.12.88c-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88C7.82 17.34 7.07 17 6.24 17s-1.58.34-2.12.88C3.58 18.34 2.83 18.66 2 18.66" />,
  },
  {
    title: "Outdoor Kitchens",
    href: "/outdoor-kitchens",
    text: "Fully equipped outdoor kitchens built for entertaining, anchoring a finished backyard for families who like to host year-round.",
    icon: <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />,
  },
  {
    title: "Pergolas",
    href: "/pergolas",
    text: "Pergolas and shade structures that make a wide-open new-construction backyard usable through the hottest part of a Florida afternoon.",
    icon: <path fill="currentColor" d="M3 3v18h2V3H3zm16 0v18h2V3h-2zM6 5v2h12V5H6zm0 4v2h12V9H6z" />,
  },
];

const StJohnsPaversContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-8.webp"
      heroAlt="Paver installation at a new construction home by Jax Pavers in St. Johns FL"
      heroTitle="Paver Installation in St. Johns, FL"
      heroSubtitle="Driveways, patios, pool decks, and full outdoor build-outs for St. Johns County's fast-growing neighborhoods."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          St. Johns is one of the fastest-growing corners of Northeast Florida, and the
          County Road 210 corridor through Fruit Cove and Julington Creek is full of new
          homes and young families building their forever backyards. Jax Pavers designs
          and installs paver{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> throughout
          St. Johns County, and we specialize in taking a blank builder-grade yard and
          turning it into a finished outdoor living space. We are fully licensed and
          insured, every project starts at a $7,500 minimum, and we serve St. Johns,
          Fruit Cove, Julington Creek, and the surrounding communities. Whether you want
          to phase the work or build the whole backyard at once, we stand behind every
          install we deliver.
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
              Services We Offer in St. Johns
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              From the driveway at the curb to the back fence, we handle every hardscape
              surface on your St. Johns property. Click any service to learn more.
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
              Building your forever home in St. Johns?
            </p>
            <p className="text-base text-gray-300">
              Let us turn that builder-grade backyard into a finished outdoor living space.
            </p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* ── Local Knowledge / SEO cluster content ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">St. Johns Hardscaping</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Installing Pavers in St. Johns County: What We've Learned
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                St. Johns County has grown faster than almost anywhere in Florida over the
                last decade, and that growth shows up in the work. Most of the homes we
                touch in Fruit Cove, Julington Creek, Durbin Crossing, and RiverTown are
                newer construction with builder-grade landscaping and a backyard that is
                essentially a blank slate. That is actually an advantage: we get to plan
                drainage, grading, and the full hardscape layout from scratch instead of
                working around someone else's mistakes.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Sandy Soil and Fresh Fill Dirt
              </h3>
              <p>
                Newer St. Johns subdivisions are often built on fill, and that ground keeps
                settling for the first few years after the house goes up. Pavers handle this
                far better than poured concrete. Because each paver is an individual unit set
                on a deep, compacted aggregate base, the surface flexes with minor settlement
                instead of cracking, and any section that does move can be lifted and re-set.
                We over-build the base on new-construction lots specifically because the soil
                underneath is still finding its level.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Designing for Heavy Florida Rain
              </h3>
              <p>
                St. Johns gets the same intense afternoon storms as the rest of Northeast
                Florida, and a new home with a big open backyard needs that water moved
                deliberately. We grade every surface to drain away from the foundation, and
                the joints between pavers let rainwater filter through instead of sheeting
                across the yard. Getting drainage right on the first build saves homeowners
                from standing water and erosion down the road.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Full Backyard Build-Outs for Growing Families
              </h3>
              <p>
                The St. Johns homeowner we see most often is a family that just moved into a
                new build and wants the whole outdoor space finished: a paver driveway with
                real curb appeal, a patio with a fire pit, a pool deck, maybe an outdoor
                kitchen and a pergola for shade. Planning all of it together keeps the design
                cohesive and the drainage correct, and we can phase the work to match your
                budget. Newer St. Johns architecture tends to lean transitional and modern,
                so larger-format pavers and clean multi-toned blends are especially popular
                here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Paver Projects in St. Johns" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default StJohnsPaversContent;

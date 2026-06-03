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
  // `amount: "some"` triggers on first visible pixel. A numeric amount like
  // 0.3 breaks on mobile when this preset wraps a section taller than the
  // viewport (the Local Knowledge SEO block) — IntersectionObserver can't
  // satisfy "30% visible" so the section stays at opacity: 0.
  viewport: { once: true, amount: "some" },
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
  { src: "/pavers-26.webp", alt: "Curb-appeal paver driveway upgrade replacing aging concrete by Jax Pavers in Mandarin FL" },
  { src: "/pavers-4.webp", alt: "Tumbled paver driveway with curved border at a mature Mandarin home by Jax Pavers in Mandarin FL" },
  { src: "/pavers-22.webp", alt: "Freeform paver patio with fire pit and in-ground lighting by Jax Pavers in Mandarin FL" },
  { src: "/pavers-33.webp", alt: "Aerial view of paver driveway and walkway at an established Mandarin home by Jax Pavers in Mandarin FL" },
  { src: "/pavers-48.webp", alt: "Curved paver driveway through mature oak landscaping by Jax Pavers in Mandarin FL" },
];

const faqs = [
  { q: "Can you replace my old cracked concrete driveway in Mandarin?", a: "Yes — replacing aging concrete is one of the most common projects we do in Mandarin. We remove the old slab, build a proper compacted aggregate base, and install interlocking pavers that flex with the ground instead of cracking. The result is a driveway that looks dramatically better and holds up far longer than a re-poured slab." },
  { q: "Will pavers work around the mature trees in my Mandarin yard?", a: "They can, and pavers are actually a smart choice near established trees. A poured slab cracks as roots grow under it, but individual pavers can be lifted and re-set if a root ever causes movement. We assess root location during the consultation and design the layout and base to coexist with your mature landscaping." },
  { q: "How much does a paver project cost in Mandarin?", a: "Cost depends on the size of the area, the materials you choose, and the condition of what's there now — removing old concrete adds some demolition cost. Every Jax Pavers project starts at a $7,500 minimum. We hand-measure each property and provide a detailed, no-obligation quote at your free consultation." },
  { q: "What paver styles suit Mandarin's established homes?", a: "Mandarin's mature neighborhoods have a lot of traditional and ranch-style architecture set among big oaks, so tumbled pavers with Old-World character and warm, classic color blends tend to look right at home here. We bring physical samples to every consultation so you can see how each option reads against your home and landscaping." },
  { q: "Are you licensed and insured to work in Mandarin?", a: "Yes. Jax Pavers is fully licensed and insured, and we handle any permitting your project requires. We stand behind every install we deliver and are happy to share our process and references before you commit." },
];

const relatedServices = [
  { href: "/driveways", title: "Paver Driveways", blurb: "Replace aging concrete with a driveway that lasts.", image: "/pavers-4.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Extend your living space with a custom patio.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks.", image: "/pavers-14.webp" },
];

const services = [
  {
    title: "Paver Driveways",
    href: "/driveways",
    text: "Replace that aging, cracked concrete driveway with interlocking pavers that transform your Mandarin home's curb appeal and flex with the ground instead of splitting.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    title: "Paver Patios & Courtyards",
    href: "/patios",
    text: "Custom patios and courtyards that bring an established Mandarin backyard up to date, from fire pit areas to shaded entertaining spaces under the oaks.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    title: "Pool Decks",
    href: "/pool-decks",
    text: "Slip-resistant, heat-reflective paver pool decks that replace tired pool surrounds and stay cooler underfoot through a Mandarin summer.",
    icon: <path fill="currentColor" d="M2 15c.83 0 1.58-.34 2.12-.88C4.66 13.66 5.41 13.32 6.24 13.32s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88v-2c-.83 0-1.58.34-2.12.88-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88c-.54-.54-1.29-.88-2.12-.88s-1.58.34-2.12.88c-.54.54-1.29.88-2.12.88v-9H6.24v9c-.83 0-1.58-.34-2.12-.88C3.58 11.34 2.83 11 2 11v2c.83 0 1.58.34 2.12.88M2 19c.83 0 1.58-.34 2.12-.88.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88s1.58.34 2.12.88c.54.54 1.29.88 2.12.88s1.58-.34 2.12-.88c.54-.54 1.29-.88 2.12-.88v2c-.83 0-1.58.34-2.12.88-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88c-.54-.54-1.29-.88-2.12-.88s-1.58.34-2.12.88c-.54.54-1.29.88-2.12.88s-1.58-.34-2.12-.88C7.82 17.34 7.07 17 6.24 17s-1.58.34-2.12.88C3.58 18.34 2.83 18.66 2 18.66" />,
  },
  {
    title: "Outdoor Kitchens",
    href: "/outdoor-kitchens",
    text: "Fully equipped outdoor kitchens that turn a roomy, established Mandarin backyard into a true entertaining space for family and friends.",
    icon: <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />,
  },
  {
    title: "Pergolas",
    href: "/pergolas",
    text: "Pergolas and shade structures that add architectural character and comfortable shade to a mature Mandarin yard.",
    icon: <path fill="currentColor" d="M3 3v18h2V3H3zm16 0v18h2V3h-2zM6 5v2h12V5H6zm0 4v2h12V9H6z" />,
  },
];

const MandarinPaversContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-26.webp"
      heroAlt="Curb-appeal paver driveway upgrade by Jax Pavers in Mandarin FL"
      heroTitle="Paver Installation in Mandarin, FL"
      heroSubtitle="Curb-appeal upgrades and aging-concrete replacement for Mandarin's established, beautiful neighborhoods."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Mandarin is one of Jacksonville's most established and beautiful areas:
          mature neighborhoods, big oak canopies, and homes with real character along
          the St. Johns River. Many of those homes still have the original concrete
          driveways and pool decks, and after decades of Florida heat and rain they're
          cracked, stained, and tired. Jax Pavers helps Mandarin homeowners upgrade with
          paver{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> that
          transform curb appeal and outlast poured concrete. We are fully licensed and
          insured, every project starts at a $7,500 minimum, and we serve Mandarin and
          the surrounding communities. We stand behind every install we deliver — see
          all of our{" "}
          <Link href="/pavers-jacksonville-fl" className="text-[#0A86C4] hover:underline">
            Jacksonville pavers services
          </Link>{" "}
          for the full lineup.
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
              Services We Offer in Mandarin
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              From replacing the cracked concrete at the curb to rebuilding a dated pool
              surround, we handle every hardscape surface on your Mandarin property. Click
              any service to learn more.
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
              Tired of that cracked Mandarin driveway?
            </p>
            <p className="text-base text-gray-300">
              Let us replace it with pavers that lift your home's curb appeal for decades.
            </p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* ── Local Knowledge / SEO cluster content ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Mandarin Hardscaping</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Paver Work in Mandarin: Upgrading Established Homes
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mandarin is a different kind of project than the new subdivisions farther
                south. These are mature, well-loved neighborhoods with homes that were
                built decades ago, set among some of the biggest oak canopies in
                Jacksonville. The bones are beautiful — but the original concrete
                driveways, walkways, and pool decks have usually reached the end of their
                life. Most of our Mandarin work is curb-appeal-driven: replacing aging
                hardscape with pavers that match the character of the home.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Replacing Aging Concrete the Right Way
              </h3>
              <p>
                A re-poured concrete slab in Mandarin will crack again, often within a few
                years, because the underlying issues — settling soil, root pressure, and
                Florida's heat cycles — never went away. We remove the old slab, excavate
                to proper depth, and build a fully compacted aggregate base before setting
                a single paver. Because pavers are individual interlocking units, the
                finished surface flexes with the ground, drains through the joints, and any
                section can be lifted and re-set instead of jackhammered out.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Working Around Mature Trees and Roots
              </h3>
              <p>
                Those gorgeous Mandarin oaks are exactly what cracks concrete. Roots grow,
                the slab heaves, and you get trip hazards and standing water. Pavers handle
                tree-heavy lots far better — we assess root location during the
                consultation and design the layout, base depth, and edge restraints to
                coexist with the landscaping. If a root ever causes a high spot years later,
                we can lift those pavers and re-set them without disturbing the rest.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Choosing Pavers That Fit Mandarin's Character
              </h3>
              <p>
                Mandarin leans traditional — ranch homes, two-story brick, and riverfront
                properties with established landscaping. Tumbled pavers with Old-World
                edges and warm, classic color blends tend to look like they belong, where a
                stark modern format might feel out of place. We bring physical samples to
                every consultation so you can see how each color and texture reads against
                your home's exterior and the canopy overhead. The goal is an upgrade that
                looks like it was always meant to be there.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Paver Projects in Mandarin" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default MandarinPaversContent;

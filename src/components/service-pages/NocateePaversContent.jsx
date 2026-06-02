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
  { q: "Do you install pavers in Nocatee?", a: "Yes. Nocatee is one of our most active service areas. As a fast-growing master-planned community straddling the St. Johns and Duval County line, Nocatee has constant new construction and resale upgrades, and we install paver driveways, patios, pool decks, outdoor kitchens, and pergolas across its neighborhoods. Our project minimum is $7,500, and every job is handled by a licensed and insured crew." },
  { q: "Which Nocatee neighborhoods do you serve?", a: "All of them. We routinely work in Greenleaf Village, Coastal Oaks, Twenty Mile, Crosswater, Tidewater, Addison Park, Siena, Liberty Cove, Del Webb Ponte Vedra, Riverwood by Del Webb, and the newer build-out areas around Crosswater Hall and the Outlook. If you live anywhere inside the Nocatee POA boundary, we can quote your project." },
  { q: "Can you upgrade a builder-grade driveway in Nocatee?", a: "Definitely. Many Nocatee homes close with a standard poured-concrete driveway from production builders like Dream Finders, Toll Brothers, Pulte, ICI, David Weekley, or Providence. Replacing it with pavers is one of the most popular upgrades we do here — it dramatically improves curb appeal, adds color and pattern options that a flat concrete slab can't match, and gives you a driveway that flexes with the soil instead of cracking." },
  { q: "Do you work on new-construction backyard build-outs?", a: "Yes — that's a big part of what we do in Nocatee. New homes often close with a blank backyard, and we build the whole outdoor space from scratch: paver patios, pool decks, outdoor kitchens, fire pits, seating walls, pergolas, and pathways. We coordinate with your pool builder, landscaper, and general timeline so the hardscape goes in once the home and pool are ready." },
  { q: "Do I need Nocatee DRB or HOA approval for a paver project?", a: "Almost always, yes. Most Nocatee neighborhoods fall under the Nocatee POA's Design Review Board (DRB) process, and individual sub-HOAs may have additional architectural review. Paver driveways, expanded patios, pool decks, and outdoor structures typically require submitted plans showing material, color, pattern, dimensions, and a site plan. We prepare the documentation package the DRB expects and stay involved through approval so your project doesn't stall." },
  { q: "Do paver projects in Nocatee need a permit?", a: "Most of Nocatee is in St. Johns County, with a small portion in Duval County. Paver driveways generally require a county driveway/right-of-way permit, and any structural work (pergolas, outdoor kitchens with gas/electric/plumbing, retaining walls over a certain height) requires building permits. As a licensed and insured contractor, we pull the permits, schedule the inspections, and make sure the work meets local code." },
  { q: "How does Nocatee's sandy fill soil affect paver installation?", a: "Nocatee was developed on former timber and agricultural land, and many lots include compacted fill from the original site work. New lots can continue to settle for the first couple of years. We compensate by excavating to the proper depth, installing a deeper compacted aggregate base than a typical urban-infill job, and grading carefully for drainage away from the foundation. Getting the base right on a new-construction site is the difference between a hardscape that lasts and one that shifts within a few seasons." },
  { q: "What does a typical paver project cost in Nocatee?", a: "It depends on size and scope, but for Nocatee homes our most common ranges are: paver driveway replacement $12,000–$25,000+, patio expansions and pool decks $10,000–$30,000, full backyard build-outs with patio, pool deck, fire feature, and pergola $35,000–$80,000+, and complete outdoor kitchens $15,000–$50,000+. Our project minimum is $7,500. Every project gets a detailed, no-obligation quote after a free on-site consultation." },
  { q: "How long does a paver project take in Nocatee?", a: "Most paver driveway and patio installations take between 3 and 7 working days once we mobilize. Pool decks and full build-outs run 1–3 weeks depending on size, weather, and how the pool/landscaping schedule lines up. We provide a clear timeline in your project proposal so you can plan around it, and we factor in the typical Nocatee DRB review window when we schedule the start date." },
  { q: "Will pavers hold up to Florida hurricanes and heavy rain?", a: "Yes. Properly installed pavers actually handle severe weather better than poured concrete. The permeable joints let driving rain drain through instead of pooling, the segmented surface flexes with ground movement instead of cracking, and individual pavers can be lifted and reset if anything ever shifts. We grade every Nocatee project to move water away from the home and toward the lot's intended drainage path, which matters in a community with heavy summer rains and the occasional tropical system." },
];

const neighborhoods = [
  "Greenleaf Village",
  "Coastal Oaks at Nocatee",
  "Twenty Mile at Nocatee",
  "Crosswater",
  "Tidewater at Nocatee",
  "Addison Park",
  "Siena at Town Center",
  "Liberty Cove",
  "Del Webb Ponte Vedra",
  "Riverwood by Del Webb",
  "Austin Park",
  "Kelly Pointe",
  "Lakeside at Town Center",
  "Settlers Landing",
  "The Palms at Nocatee",
  "Willowcove",
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

const processSteps = [
  {
    title: "Free On-Site Consultation",
    text: "We walk your Nocatee property, listen to how you actually want to use the space, measure, and identify drainage paths, utility lines, and any HOA constraints specific to your neighborhood.",
  },
  {
    title: "Design & DRB-Ready Documentation",
    text: "We prepare a layout, material and color selection, and the site plan / specification package your Nocatee POA Design Review Board (and sub-HOA, if applicable) needs to approve the project on the first submission.",
  },
  {
    title: "Detailed, No-Obligation Quote",
    text: "Itemized pricing for materials, base preparation, edge restraint, polymeric joint sand, drainage features, and any add-ons. No vague allowances or surprise change orders.",
  },
  {
    title: "Permits, Locates & Scheduling",
    text: "We pull St. Johns County (or Duval, depending on your lot) permits, schedule the 811 utility locate, and lock in a mobilization date that lines up with your pool builder, landscaper, and DRB approval timing.",
  },
  {
    title: "Excavation & Compacted Base",
    text: "Proper sub-base preparation for Nocatee's sandy fill soil — full-depth excavation, geotextile fabric where appropriate, a deep compacted aggregate base, and grading that pulls water away from the foundation.",
  },
  {
    title: "Paver Installation & Finish",
    text: "Tremron or Belgard pavers laid in your chosen pattern, edge-restrained, screeded with bedding sand, swept with polymeric joint sand, plate-compacted, and cleaned. Final walkthrough before we leave the site.",
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
          homes are going up across Greenleaf, Coastal Oaks, Twenty Mile, Crosswater, Tidewater,
          Addison Park, Del Webb Ponte Vedra, and the build-out areas around Town Center
          constantly. That makes it one of our busiest service areas. Jax Pavers designs and
          installs paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout
          Nocatee — whether you're upgrading a builder-grade concrete driveway, finishing a brand-new
          backyard from a blank slate, or coordinating hardscape around a newly installed pool. We
          are fully licensed and insured, our project minimum is $7,500, and we prepare every
          submission the Nocatee POA Design Review Board expects so your project gets approved and
          stays on schedule. Explore our{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">paver driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> to see what
          we can build for your Nocatee home — or browse all of our{" "}
          <Link href="/pavers-jacksonville-fl" className="text-[#0A86C4] hover:underline">
            Jacksonville pavers services
          </Link>
          .
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

      {/* ── Neighborhoods Served ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Service Coverage</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Nocatee Neighborhoods We Serve
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              We work in every village and sub-community inside the Nocatee POA. A few of the
              neighborhoods we're in most often:
            </p>
          </motion.div>

          <motion.ul
            {...fadeUp}
            className="grid grid-cols-1 gap-x-6 gap-y-2 text-gray-700 sm:grid-cols-2 lg:grid-cols-3"
          >
            {neighborhoods.map((n) => (
              <li key={n} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0A86C4]" />
                <span>{n}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p {...fadeUp} className="mt-6 text-gray-600 leading-relaxed">
            Don't see your village listed? We still cover it — Nocatee is constantly adding new
            sub-communities and we serve all of them. We also work across the rest of{" "}
            <Link href="/ponte-vedra-beach-pavers" className="text-[#0A86C4] hover:underline">Ponte Vedra Beach</Link>,{" "}
            <Link href="/st-johns-pavers" className="text-[#0A86C4] hover:underline">St. Johns</Link>, and{" "}
            <Link href="/st-augustine-pavers" className="text-[#0A86C4] hover:underline">St. Augustine</Link>.
          </motion.p>
        </div>
      </section>

      {/* ── Local Knowledge / SEO cluster content ── */}
      <section className="relative bg-[#f7f9fc]">
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
                surfaces or building entire outdoor spaces from scratch on lots that are still
                settling.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Working With Nocatee's Sandy Fill Soil
              </h3>
              <p>
                Nocatee was developed on former timber and agricultural land, and many lots include
                compacted fill from the original site work. Newly graded lots in particular can
                continue to settle for the first couple of years. Base preparation matters more
                here than on an established urban lot — we excavate to the proper depth, use
                geotextile fabric where the sub-grade calls for it, install and compact a deeper
                aggregate base than a typical job, and grade carefully for drainage away from the
                foundation. The steps that keep a driveway or patio stable even as a new lot
                continues to settle are exactly the steps Florida summer storms expose if they get
                skipped.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Upgrading Builder-Grade Driveways
              </h3>
              <p>
                Most Nocatee homes close with a standard poured-concrete driveway from production
                builders — Dream Finders, Toll Brothers, Pulte, ICI, David Weekley, Providence,
                Mattamy, and a handful of others. Replacing that slab with pavers is our single
                most-requested project in the community. Pavers flex with the soil instead of
                cracking, drain rainwater through the joints, and offer color and pattern options —
                herringbone, running bond, contrasting borders, circle medallions — that a flat
                gray slab simply can't match. It's the upgrade that makes a production-built home
                feel custom and noticeably lifts curb appeal in resale comps.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Complete Backyard Build-Outs
              </h3>
              <p>
                New homes in Nocatee often close with a blank backyard, and we build the whole
                space: paver patios, pool decks around newly installed pools, outdoor kitchens with
                Twin Eagles or TrueFlame grills, fire pits, seating walls, pergolas, and pathways
                that tie it all together. We coordinate with your pool builder and landscape designer
                so the hardscape goes in at the right point in the sequence and nothing has to be
                cut, lifted, or redone later. Because nearly every Nocatee neighborhood has a sub-HOA
                in addition to the POA-level DRB, we plan the submission package up front rather than
                discovering it mid-project.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                The Nocatee DRB & HOA Approval Process
              </h3>
              <p>
                The Nocatee POA's Design Review Board reviews exterior modifications across the
                entire community, and most individual villages — Coastal Oaks, Greenleaf, Twenty
                Mile, Crosswater, Tidewater, and others — layer their own sub-HOA architectural
                requirements on top. For paver projects, that typically means submitting a site
                plan with dimensions, material and color selection from an approved palette, the
                paver manufacturer (Tremron and Belgard are commonly accepted), pattern, and a
                clear description of any structures going in. We prepare the full submission
                package for you and stay involved through the review window so your project doesn't
                get held up on a missing detail.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Permits in St. Johns County (and Duval)
              </h3>
              <p>
                Most of Nocatee sits in St. Johns County, with a small portion crossing into Duval
                County. Paver driveways generally require a county driveway / right-of-way permit,
                especially when the apron meets a county-maintained road. Any structural work —
                pergolas with footings, outdoor kitchens with gas or electric or plumbing, retaining
                walls above a code-defined height — requires building permits and inspections. As a
                licensed and insured contractor, we pull the permits, coordinate the 811 utility
                locate, schedule the inspections, and make sure the finished work meets county code.
                That keeps your project on the right side of the inspector and your homeowner's
                insurance.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                What Paver Projects Typically Cost in Nocatee
              </h3>
              <p>
                Pricing depends on size, paver selection, base depth, drainage requirements, and
                add-ons, but for Nocatee homes our most common project ranges look like this:
              </p>
              <ul className="mt-2 space-y-2 pl-5 list-disc">
                <li><span className="font-semibold text-gray-900">Paver driveway replacement:</span> $12,000–$25,000+ depending on driveway size, paver line, and pattern.</li>
                <li><span className="font-semibold text-gray-900">Patio expansion or new patio:</span> $10,000–$25,000 for typical Nocatee lot sizes.</li>
                <li><span className="font-semibold text-gray-900">Pool deck (around a new pool):</span> $15,000–$30,000+ depending on deck size, coping, and drainage.</li>
                <li><span className="font-semibold text-gray-900">Outdoor kitchen:</span> $15,000–$50,000+ depending on appliances, counter material, and structure.</li>
                <li><span className="font-semibold text-gray-900">Full backyard build-out:</span> $35,000–$80,000+ for patio + pool deck + fire feature + pergola packages.</li>
              </ul>
              <p>
                Our project minimum is $7,500. Every project gets a detailed, no-obligation quote
                after a free on-site consultation — no vague allowances, no surprise change orders.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Built for Florida Storms and Summer Rain
              </h3>
              <p>
                Properly installed pavers handle severe weather better than poured concrete. The
                permeable joints let driving rain drain through instead of pooling on the surface,
                the segmented system flexes with ground movement instead of cracking under stress,
                and individual pavers can be lifted and reset if a section ever needs adjusting.
                We grade every Nocatee project to move water away from the home and toward the lot's
                intended drainage path — which matters in a community with heavy summer rains, an
                active tropical season, and the occasional named storm rolling up the I-95 corridor.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">How We Work</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Our Process for Nocatee Projects
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              A clear, step-by-step process built around how Nocatee actually works — DRB
              submissions, sub-HOA approvals, county permits, and the pool/landscape sequencing
              that keeps a build-out on schedule.
            </p>
          </motion.div>

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {processSteps.map((step, idx) => (
              <motion.li
                key={step.title}
                variants={item}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A86C4] text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </motion.li>
            ))}
          </motion.ol>
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

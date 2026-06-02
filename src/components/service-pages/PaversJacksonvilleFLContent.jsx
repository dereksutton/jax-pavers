"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ServicePageLayout from "../ServicePageLayout";
import ServiceGallery from "../ServiceGallery";
import ServiceFAQ from "../ServiceFAQ";
import ShimmerButton from "../ShimmerButton";
import getImagePath from "../../utils/imagePaths";

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

const galleryImages = [
  { src: "/pavers-33.webp", alt: "Aerial view of paver driveway and walkway installation at a luxury Jacksonville FL home by Jax Pavers" },
  { src: "/pavers-22.webp", alt: "Freeform paver patio installation with fire pit and in-ground lighting by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-14.webp", alt: "Travertine paver pool deck installation by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-29.webp", alt: "Custom outdoor kitchen installation with grill, range hood, TV, and bar seating by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-40.webp", alt: "Custom pergola over a paver patio installation by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-47.webp", alt: "Circle medallion paver driveway installation at a three-car garage home by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-8.webp", alt: "Multi-toned paver driveway with charcoal border installed by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-37.webp", alt: "Sealed paver patio and fire pit with pathway lighting by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  {
    q: "Who is the best paver company in Jacksonville, FL?",
    a: "We're biased, but Jax Pavers consistently ranks among Jacksonville's top-rated paver contractors with a 5.0-star Google rating and 24+ reviews. What sets us apart: we're fully licensed and insured, we install only premium Tremron and Belgard pavers (no bargain materials), we handle every project end-to-end with no subcontractor handoffs, and we never cut corners on the base preparation that makes a paver install last 30+ years in Florida's sandy soil. The best way to evaluate any Jacksonville paver company is to ask for license documentation, walk recent local projects, and ask specifically how they prepare the base — we welcome those questions.",
  },
  {
    q: "How much do pavers cost in Jacksonville, FL?",
    a: "Paver installation costs in Jacksonville depend on the surface and the materials. Typical 2026 ranges: paver patios run $15–$30 per square foot installed ($10,000–$25,000 for most projects); paver driveways run $18–$32 per square foot ($10,800–$28,800 for typical two-car driveways); pool decks run $14–$28 per square foot; outdoor kitchens run $15,000–$50,000+; pergolas run $8,000–$35,000+ depending on material and roof system. Jax Pavers has a $7,500 project minimum. Every quote is a free, written, itemized proposal — no high-pressure sales tactics.",
  },
  {
    q: "Are pavers better than concrete in Florida?",
    a: "Yes, for most Jacksonville applications. Poured concrete cracks under Florida's heat-expansion cycles and sandy, moisture-prone soil. When concrete cracks, the only fix is full removal and replacement. Pavers flex with ground movement at every joint, drain rainwater through the joints, and individual pavers can be lifted and reset if anything ever shifts. Properly installed paver surfaces routinely last 30+ years in Jacksonville with minimal maintenance — concrete typically needs replacement within 15–25 years. Pavers cost more up front but consistently win on total cost of ownership.",
  },
  {
    q: "What paver brands do you install in Jacksonville?",
    a: "We install premium pavers from Tremron and Belgard exclusively — two of the largest, most warranty-backed paver manufacturers in the Southeast. Common Tremron lines we install include Stonehedge (tumbled old-world look), Olde Town (smaller-format tumbled), Mega-Olde Towne (large-format), and Sahara (sand-toned blends). Common Belgard lines include Cambridge Cobble (classic tumbled), Bergerac (French-quarter tumbled), Catalina Slate (textured slate look), and Mega-Arbel (large random-shape natural stone look). Both manufacturers engineer their products specifically for Florida's heat, humidity, and UV exposure.",
  },
  {
    q: "Do you serve Ponte Vedra Beach, Nocatee, and St. Johns?",
    a: "Yes. Jax Pavers serves the entire Northeast Florida region across Duval, St. Johns, and Clay counties. Our active coverage area includes Jacksonville, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, Nocatee, St. Johns, Fruit Cove, Mandarin, Riverside, San Marco, St. Augustine, St. Augustine Beach, Fleming Island, Orange Park, and Green Cove Springs. We have dedicated neighborhood pages for our most-served communities that cover local HOA review requirements, soil conditions, and recent projects.",
  },
  {
    q: "Are pavers good for Florida's heat and rain?",
    a: "Pavers are arguably the best hardscape material for the Florida climate. The joints between pavers absorb heat-expansion cycles that crack poured concrete, and those same joints let stormwater drain through the surface instead of pooling — critical during Jacksonville's afternoon summer downpours. Travertine pavers in particular stay noticeably cooler underfoot than dark concrete, which can hit 140°F+ on a Florida summer afternoon. Properly graded paver installations channel water away from your home's foundation, which matters for both flood resilience and termite prevention.",
  },
  {
    q: "How long does a paver installation take in Jacksonville?",
    a: "Most residential paver projects in Jacksonville take 3 to 7 days from start to final walkthrough. Paver patios and driveways are usually on the shorter end. Pool decks, outdoor kitchens, and larger backyard build-outs with multiple integrated features can run 1 to 3 weeks. We provide a clear timeline in every written proposal so you know exactly what to expect before any work begins.",
  },
  {
    q: "Do pavers need permits in Jacksonville?",
    a: "It depends on the project. Standard paver patio replacements in Duval County usually don't require a permit. Driveway replacements typically do require a permit because the work extends into the public right-of-way at the street apron. Pergolas, outdoor kitchens with gas or electrical, and retaining walls above code-defined heights always require permits. HOA communities like Nocatee, Ponte Vedra Plantation, Marsh Landing, and Coastal Oaks also require Architectural Review Committee approval. Jax Pavers handles all permitting and HOA approvals as part of the project — that's our job, not yours.",
  },
  {
    q: "What's the difference between Jax Pavers and other Jacksonville paver companies with similar names?",
    a: "Jax Pavers (also known as Jax Outdoor Spaces, online at jaxoutdoorspaces.com) is an independently owned, licensed and insured paver contractor based in Jacksonville. Our phone is (904) 445-1261 and we're 5.0 stars on Google with 24+ reviews. Make sure you're contacting the right company — confirm the phone number, the website, and the Google profile before you hire anyone. We're happy to provide license, insurance, and customer references on request.",
  },
];

const relatedServices = [
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Custom paver patios built for Florida outdoor living.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks for Jacksonville pools.", image: "/pavers-14.webp" },
  { href: "/outdoor-kitchens", title: "Outdoor Kitchens", blurb: "Full outdoor kitchens designed for Florida entertaining.", image: "/pavers-20.webp" },
];

const services = [
  {
    href: "/driveways",
    title: "Paver Driveways",
    blurb: "Durable, code-compliant driveways using 60mm Tremron and Belgard pavers — built to handle Florida heat, heavy rain, and decades of vehicle traffic.",
    image: "/pavers-8.webp",
    keyword: "Driveways",
  },
  {
    href: "/patios",
    title: "Paver Patios & Courtyards",
    blurb: "Custom paver patios that turn a Jacksonville backyard into a real outdoor living room — fire pits, seating walls, freeform layouts, the works.",
    image: "/pavers-22.webp",
    keyword: "Patios",
  },
  {
    href: "/pool-decks",
    title: "Pool Deck Pavers",
    blurb: "Slip-resistant, heat-reflective pool deck pavers and resurfacing for Jacksonville pools. Travertine, textured concrete pavers, and coastal-grade installation.",
    image: "/pavers-14.webp",
    keyword: "Pool Decks",
  },
  {
    href: "/outdoor-kitchens",
    title: "Outdoor Kitchens",
    blurb: "Full outdoor kitchens with Twin Eagles, TrueFlame, and SurfaceLogix components — built for Florida heat, salt air, and how you actually use the space.",
    image: "/pavers-20.webp",
    keyword: "Outdoor Kitchens",
  },
  {
    href: "/pergolas",
    title: "Pergolas",
    blurb: "Aluminum, cedar, and StruXure louvered pergolas — engineered to Florida wind code with sealed drawings, permits, and proper footings.",
    image: "/pavers-40.webp",
    keyword: "Pergolas",
  },
  {
    href: "/paving-contractors",
    title: "Paving Contractors",
    blurb: "Licensed and insured paving contractor services across Northeast Florida — base prep, drainage, and craftsmanship that lasts.",
    image: "/pavers-33.webp",
    keyword: "Paving",
  },
];

const neighborhoods = [
  { label: "Ponte Vedra Beach", href: "/ponte-vedra-beach-pavers" },
  { label: "Nocatee", href: "/nocatee-pavers" },
  { label: "St. Johns / Fruit Cove", href: "/st-johns-pavers" },
  { label: "Mandarin", href: "/mandarin-pavers" },
  { label: "St. Augustine", href: "/st-augustine-pavers" },
  { label: "Orange Park", href: "/orange-park-pavers" },
  { label: "All service areas", href: "/service-areas" },
];

const featuredReviews = [
  {
    quote:
      "Outstanding and professional work by JAX Pavers installing pavers on our driveway. Excellent craftsmanship. Great crew. Highly recommend them for any outdoor project you have.",
    author: "Paul Kulick",
    project: "Paver driveway",
  },
  {
    quote:
      "They widened our driveway, did landscaping and lighting in our front yard, and it turned out beautiful! We had a few cracked pavers and they came back after the job was finished to fix them. An overall wonderful experience.",
    author: "Vicky Cole",
    project: "Driveway expansion + landscape",
  },
  {
    quote:
      "Aaron was amazing to work with and very helpful. Showed him an inspiration picture for the patio we were wanting and they brought it to life. It's perfect!",
    author: "Olivia Zumwalde",
    project: "Paver patio",
  },
];

const PaversJacksonvilleFLContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-33.webp"
      heroAlt="Pavers in Jacksonville FL — aerial view of paver driveway and walkway by Jax Pavers"
      heroTitle="Pavers in Jacksonville, FL"
      heroSubtitle="Premium paver driveways, patios, pool decks, outdoor kitchens, and pergolas — licensed, insured, and built for the Florida climate."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Jax Pavers is Jacksonville&apos;s 5-star, licensed and insured paver
          contractor — installing premium pavers across the city and the
          surrounding Northeast Florida communities. Whether you&apos;re
          replacing a cracked concrete{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">driveway</Link>,
          building a backyard{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">paver patio</Link>,
          resurfacing a{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool deck</Link>,
          designing a full{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchen</Link>,
          or adding a{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergola</Link>{" "}
          for shade — we install only premium Tremron and Belgard pavers,
          handle every project end-to-end, and never cut corners on the base
          prep that makes a Jacksonville paver install last 30+ years.
          Our project minimum is $7,500, every proposal is written and
          itemized, and we&apos;re reachable directly at{" "}
          <a
            href="tel:+19044451261"
            className="font-semibold text-[#0A86C4] hover:underline"
          >
            (904) 445-1261
          </a>
          .
        </p>
      </motion.section>

      {/* ── What We Install (Service Grid) ── */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              Paver Services
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Paver Services in Jacksonville
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Every Jax Pavers project is designed and built around how Florida
              weather, soil, and lifestyle actually work. Six core services,
              one accountable team:
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((svc) => (
              <motion.div key={svc.href} variants={item}>
                <Link
                  href={svc.href}
                  className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getImagePath(svc.image)}
                      alt={`${svc.title} installation by Jax Pavers in Jacksonville FL`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={640}
                      height={400}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#0A86C4]">
                      {svc.keyword}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-[#0A86C4]">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {svc.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#0A86C4]">
                      Explore
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Pavers in Jacksonville (category-level argument) ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              Built for Florida
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Why Pavers Outperform Concrete in Jacksonville
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Jacksonville sits on sandy, moisture-prone soil that punishes
                rigid surfaces. Poured concrete looks fine for a few seasons,
                then the heat-expansion cycles, the shifting soil, and the
                relentless summer rain start finding cracks. Once concrete
                cracks here — and it always does — the only fix is jackhammering
                the slab and re-pouring.
              </p>
              <p>
                Pavers solve this at every joint. The joints absorb expansion
                and contraction, drain stormwater straight through the surface,
                and let us lift and reset a single paver if a tree root or
                settled section ever shifts. That&apos;s why a properly
                installed Jacksonville paver{" "}
                <Link href="/driveways" className="text-[#0A86C4] hover:underline">
                  driveway
                </Link>{" "}
                or{" "}
                <Link href="/patios" className="text-[#0A86C4] hover:underline">
                  patio
                </Link>{" "}
                lasts 30+ years where concrete typically taps out at 15–25.
                For deeper cost comparisons, see our{" "}
                <Link
                  href="/blog/paver-driveway-cost-jacksonville"
                  className="text-[#0A86C4] hover:underline"
                >
                  paver driveway cost guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/cost-of-paver-patio-jacksonville"
                  className="text-[#0A86C4] hover:underline"
                >
                  paver patio cost guide
                </Link>
                .
              </p>
              <p>
                On the coastal side — Ponte Vedra Beach, Jacksonville Beach,
                Atlantic Beach, Neptune Beach — salt air, higher wind ratings,
                and louder UV all change what a properly built install looks
                like. We use marine-grade hardware on coastal projects, deeper
                bases on Nocatee&apos;s soft fill soil, and Florida-engineered
                pavers from Tremron and Belgard on every job regardless of
                location.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mid CTA ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-4 py-10 text-center md:flex-row md:px-8 md:text-left"
        >
          <div>
            <p className="text-xl mb-1 font-semibold text-white">
              Ready to upgrade your Jacksonville home with pavers?
            </p>
            <p className="text-base text-gray-300">
              Free, written, itemized quote — no pressure, no surprise fees.
            </p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* ── Materials We Install ── */}
      <section className="relative bg-[#f7f9fc]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              Paver Brands
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Tremron and Belgard Pavers in Jacksonville
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              We install premium pavers from Tremron and Belgard exclusively —
              two of the largest, most warranty-backed paver manufacturers in
              the Southeast. Both engineer their products for Florida heat,
              humidity, UV, and rainfall. A short list of the lines we install
              most often in Jacksonville:
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <motion.div
              variants={item}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tremron</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900">Stonehedge:</span>{" "}
                  tumbled, old-world character — driveways and courtyards.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Olde Town:</span>{" "}
                  smaller-format tumbled paver — ideal for medallions and
                  intricate patterns.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Mega-Olde Towne:</span>{" "}
                  large-format for modern looks and faster installation on big
                  surfaces.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Sahara:</span>{" "}
                  sand-toned blends that pair beautifully with stucco and
                  Mediterranean architecture.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={item}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Belgard</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900">Cambridge Cobble:</span>{" "}
                  classic tumbled cobble — driveways, courtyards, transitional
                  spaces.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Bergerac:</span>{" "}
                  French-quarter inspired tumbled paver — historic-feel patios
                  and walkways.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Catalina Slate:</span>{" "}
                  textured slate look for modern patios and pool decks.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Mega-Arbel:</span>{" "}
                  large random-shape pavers for natural-stone-look patios.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-6 text-sm text-gray-500 leading-relaxed"
          >
            Want a specific Tremron or Belgard line that isn&apos;t listed
            here? Just ask — both manufacturers offer dozens more options and
            we&apos;ll source what you want. We also install travertine pavers
            for pool decks and patios where cooler-underfoot performance
            matters in Jacksonville&apos;s summer heat.
          </motion.p>
        </div>
      </section>

      {/* ── Why Jax Pavers (differentiation) ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              Why Jax Pavers
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Why Homeowners Choose Jax Pavers in Jacksonville
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Jacksonville has a lot of paver companies — and several with
                similar-sounding names that get confused for one another
                online. Here&apos;s what makes Jax Pavers (
                <Link href="/" className="text-[#0A86C4] hover:underline">
                  jaxoutdoorspaces.com
                </Link>
                , (904) 445-1261) the right call:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-gray-900">5.0 stars on Google with 24+ reviews.</strong>{" "}
                  Real Jacksonville homeowners, real projects, no astroturfed
                  reviews.
                </li>
                <li>
                  <strong className="text-gray-900">Licensed and insured</strong>{" "}
                  for paver installation across Duval, St. Johns, and Clay
                  counties. We hand over license and insurance documentation
                  on request — every time.
                </li>
                <li>
                  <strong className="text-gray-900">Premium materials only.</strong>{" "}
                  Tremron and Belgard pavers — no bargain product that fades,
                  spalls, or loses color in Florida UV.
                </li>
                <li>
                  <strong className="text-gray-900">Base prep done right.</strong>{" "}
                  We excavate to proper depth, install and compact the right
                  aggregate base for each surface, and grade for drainage.
                  The base is invisible once the pavers are down — and it&apos;s
                  exactly where lesser contractors cut corners.
                </li>
                <li>
                  <strong className="text-gray-900">One accountable team.</strong>{" "}
                  Design, permitting, excavation, installation, and final
                  walkthrough — all managed by Jax Pavers. No subcontractor
                  handoffs, no finger-pointing.
                </li>
                <li>
                  <strong className="text-gray-900">Transparent pricing.</strong>{" "}
                  Every proposal is written, itemized, and pressure-free.
                  $7,500 project minimum. No hidden fees and no &ldquo;today
                  only&rdquo; sales tactics.
                </li>
                <li>
                  <strong className="text-gray-900">Brand partners.</strong>{" "}
                  Tremron, Belgard, Twin Eagles and TrueFlame (outdoor
                  kitchens), StruXure (louvered pergolas), and SurfaceLogix —
                  all premium product lines we&apos;re trained and authorized
                  to install.
                </li>
              </ul>
              <p>
                <strong className="text-gray-900">Brand note:</strong> if
                you&apos;re researching paver companies in Jacksonville and
                want to make sure you&apos;re talking to us, confirm three
                things — phone number{" "}
                <a
                  href="tel:+19044451261"
                  className="text-[#0A86C4] hover:underline"
                >
                  (904) 445-1261
                </a>
                , website{" "}
                <Link href="/" className="text-[#0A86C4] hover:underline">
                  jaxoutdoorspaces.com
                </Link>
                , and our Google Business profile under &ldquo;Jax Pavers /
                Jax Outdoor Spaces&rdquo; with 24+ five-star reviews. There
                are sound-alike company names in the Jacksonville market;
                we&apos;d hate for you to call the wrong one.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Reviews / Social Proof ── */}
      <section className="relative bg-[#f7f9fc]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              From Our Customers
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40 md:mx-0 mx-auto" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              5.0 Stars on Google · 24+ Reviews
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              A few words from real Jacksonville homeowners we&apos;ve worked
              with:
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {featuredReviews.map((r) => (
              <motion.figure
                key={r.author}
                variants={item}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-1 text-[#F5A524]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-gray-700 leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-gray-100 pt-3">
                  <p className="font-semibold text-gray-900">{r.author}</p>
                  <p className="text-sm text-gray-500">{r.project}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Service Area Grid ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              Service Coverage
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Paver Installation Across Northeast Florida
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Jax Pavers serves Jacksonville and the surrounding Northeast
              Florida communities across Duval, St. Johns, and Clay counties.
              Tap any community below for local information including soil
              conditions, HOA review requirements, and recent projects:
            </p>
          </motion.div>

          <motion.ul
            {...fadeUp}
            className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700 sm:grid-cols-3 lg:grid-cols-4"
          >
            {neighborhoods.map((city) => (
              <li key={city.label} className="flex items-start gap-2">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0A86C4]"
                />
                <Link href={city.href} className="text-[#0A86C4] hover:underline">
                  {city.label}
                </Link>
              </li>
            ))}
          </motion.ul>

          <motion.p {...fadeUp} className="mt-6 text-gray-600 leading-relaxed">
            We also serve Jacksonville Beach, Atlantic Beach, Neptune Beach,
            Fruit Cove, Riverside, San Marco, Avondale, Fleming Island, and
            Green Cove Springs. If your home is anywhere in Northeast Florida,{" "}
            <Link href="/#quote" className="text-[#0A86C4] hover:underline">
              request a quote
            </Link>{" "}
            and we&apos;ll let you know if it falls inside our coverage area.
          </motion.p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery
        images={galleryImages}
        title="Recent Paver Projects in Jacksonville"
      />

      {/* ── FAQ ── */}
      <ServiceFAQ
        faqs={faqs}
        title="Pavers in Jacksonville, FL — Frequently Asked Questions"
      />
    </ServicePageLayout>
  );
};

export default PaversJacksonvilleFLContent;

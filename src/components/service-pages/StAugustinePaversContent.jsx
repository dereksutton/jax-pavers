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
  { q: "Do you install pavers in St. Augustine?", a: "Yes. St. Augustine, St. Augustine Beach, Anastasia Island, Vilano Beach, Crescent Beach, and the World Golf Village area are all part of our core service area. We design and install paver driveways, patios, pool decks, outdoor kitchens, and pergolas throughout greater St. Augustine. Our project minimum is $7,500, and every job is handled by a licensed and insured crew." },
  { q: "Which St. Augustine neighborhoods do you work in?", a: "All of them. We routinely work in Davis Shores, Lincolnville, North City, Anastasia Island, Vilano Beach, St. Augustine Beach, Crescent Beach, Marsh Creek, Sea Colony, Treaty Park, Palencia, Murabella, Las Calinas, World Golf Village (King & Bear, Slammer & Squire), Heritage Park, and the rural lots out toward Hastings. If you're inside St. Johns County, we can quote your project." },
  { q: "What paver styles suit St. Augustine's historic character?", a: "St. Augustine's architecture has a timeless, Old-World feel rooted in coquina, brick, and Spanish-Colonial detailing. Tumbled pavers — Tremron's Stonehedge, Olde Town, and Belgard's Cambridge or Bergerac lines — complement that beautifully with weathered edges and warm color blends that echo the historic district. We build cobblestone-style courtyards, herringbone patios, and circle medallion driveways that feel authentic to the Ancient City rather than fighting against it. For newer construction in Palencia, World Golf Village, or Murabella, we can just as easily go cleaner and more contemporary." },
  { q: "Can you install pavers in St. Augustine's historic district?", a: "Yes, but with extra steps. Properties inside the City of St. Augustine's historic preservation zones (HP-1 through HP-5) fall under the Historic Architecture Review Board (HARB) and require Certificate of Appropriateness approval for visible exterior changes — including driveways, walkways, and front courtyards. We prepare HARB-ready submission packages with material samples, color, pattern, and dimensions appropriate to the district. Rear courtyards and interior-of-lot work generally have fewer restrictions." },
  { q: "How do you handle St. Augustine's coastal weather and flood zones?", a: "St. Augustine gets salt air, intense UV, high humidity, heavy summer rain, and the occasional named storm — Matthew, Irma, Ian, and Nicole have all hit this stretch of coast in recent memory. We specify UV-stable, color-fast pavers from Tremron and Belgard, grade every project for positive drainage away from the home and toward the lot's intended path, and use polymeric joint sand with proper edge restraints so the hardscape stays put through storm season. For properties in FEMA AE or VE flood zones, we plan elevations and drainage so the surface drains correctly during the rainfall events that actually happen here." },
  { q: "Do St. Augustine paver projects need permits?", a: "It depends on what's in scope and where the property sits. Standard paver patio and driveway replacements often don't require a county building permit, but right-of-way work, drainage modifications, structural additions (pergolas, outdoor kitchens with gas/electric/plumbing), and any work in the city's historic preservation zones do. We handle St. Johns County and City of St. Augustine permitting when your project calls for it, including HARB Certificate of Appropriateness applications in the historic district." },
  { q: "Are pavers a good choice for coastal St. Augustine homes?", a: "Yes — better than poured concrete in this environment, in our experience. The permeable joints let driving coastal rain drain through instead of pooling, the segmented system flexes with the sandy sub-grade common near the water instead of cracking, and individual pavers can be lifted and reset if storm surge or settling ever shifts a section. UV-stable color-through pavers also hold their look in St. Augustine's intense sun far longer than dyed or stained alternatives." },
  { q: "What does a typical paver project cost in St. Augustine?", a: "For St. Augustine homes our most common project ranges are: paver driveway replacement $12,000–$25,000+, patio expansions and new patios $10,000–$25,000, pool decks $15,000–$30,000+, outdoor kitchens $15,000–$50,000+, and full backyard build-outs $35,000–$80,000+. Historic district projects with HARB review and historically appropriate materials can run higher. Our project minimum is $7,500. Every project gets a detailed, no-obligation quote after a free on-site consultation." },
  { q: "How long does a paver project take in St. Augustine?", a: "Most paver driveway, patio, and pool deck installations take between 3 and 7 working days once we mobilize. Projects in the historic district take longer overall because of HARB review timing, which we factor into the schedule up front. Larger backyard build-outs run 1–3 weeks depending on size and weather." },
  { q: "Do you work on barrier islands like Anastasia and Vilano?", a: "Yes. Anastasia Island, St. Augustine Beach, Vilano Beach, and Crescent Beach are some of our most beautiful project sites. Barrier-island work calls for extra attention to drainage, salt exposure, and elevations, and we design every install around those conditions. We pair pavers with proper base prep so coastal lots get hardscape that holds up to storm season, not just calm-weather projects." },
];

const neighborhoods = [
  "Historic District (HP zones)",
  "Lincolnville",
  "Davis Shores",
  "North City",
  "Anastasia Island",
  "St. Augustine Beach",
  "Crescent Beach",
  "Vilano Beach",
  "Marsh Creek",
  "Sea Colony",
  "Treaty Park area",
  "Palencia",
  "Murabella",
  "Las Calinas",
  "World Golf Village",
  "Heritage Park",
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

const processSteps = [
  {
    title: "Free On-Site Consultation",
    text: "We walk your St. Augustine property, listen to how you'll use the space, measure, and identify drainage paths, flood-zone considerations, utility lines, and any historic-overlay or HOA constraints specific to your neighborhood.",
  },
  {
    title: "Design & Approval-Ready Documentation",
    text: "We prepare a layout, material and color selection appropriate to the area, and the documentation needed for HARB (in historic zones), your HOA, or any other reviewer — so the project gets approved without revision cycles.",
  },
  {
    title: "Detailed, No-Obligation Quote",
    text: "Itemized pricing for materials, base preparation, edge restraint, polymeric joint sand, drainage features, and any add-ons. No vague allowances or surprise change orders.",
  },
  {
    title: "Permits, Locates & Scheduling",
    text: "We handle St. Johns County or City of St. Augustine permitting, schedule the 811 utility locate, and lock in a mobilization date that lines up with any pool builder, landscaper, or HARB approval timing.",
  },
  {
    title: "Excavation & Compacted Base",
    text: "Proper sub-base preparation for coastal sandy soil — full-depth excavation, geotextile fabric where appropriate, a compacted aggregate base sized for the project, and grading that pulls water away from the foundation.",
  },
  {
    title: "Paver Installation & Finish",
    text: "Tremron or Belgard pavers laid in your chosen pattern, edge-restrained, screeded with bedding sand, swept with polymeric joint sand, plate-compacted, and cleaned. Final walkthrough before we leave the site.",
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
          St. Augustine is the oldest continuously occupied city in the country, and its homes
          carry a distinctive, Old-World character that deserves hardscaping with the same timeless
          quality. Jax Pavers designs and installs paver driveways, patios, pool decks, outdoor
          kitchens, and pergolas throughout greater St. Augustine — from the historic preservation
          zones downtown to Davis Shores, Lincolnville, Anastasia Island, St. Augustine Beach,
          Vilano Beach, World Golf Village, Palencia, Murabella, and Las Calinas. We specialize in
          classic, tumbled paver styles that complement the Ancient City's architecture while
          standing up to coastal salt air, humidity, Florida sun, and storm season. We are fully
          licensed and insured, our project minimum is $7,500, and we prepare every HARB or HOA
          submission your property needs so the project gets approved cleanly. Explore our{" "}
          <Link href="/driveways" className="text-[#0A86C4] hover:underline">paver driveways</Link>,{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> to see what
          we can build for your St. Augustine home — or browse all of our{" "}
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

      {/* ── Neighborhoods Served ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Service Coverage</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              St. Augustine Neighborhoods We Serve
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              From the historic preservation zones downtown to the barrier islands and the
              master-planned communities along US-1, we work across greater St. Augustine and
              St. Johns County:
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
            We also serve the rest of our region:{" "}
            <Link href="/nocatee-pavers" className="text-[#0A86C4] hover:underline">Nocatee</Link>,{" "}
            <Link href="/ponte-vedra-beach-pavers" className="text-[#0A86C4] hover:underline">Ponte Vedra Beach</Link>, and{" "}
            <Link href="/st-johns-pavers" className="text-[#0A86C4] hover:underline">St. Johns</Link>.
          </motion.p>
        </div>
      </section>

      {/* ── Local Knowledge / SEO cluster content ── */}
      <section className="relative bg-[#f7f9fc]">
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
                Layer in barrier islands, FEMA flood zones, an active historic preservation board,
                and a season of named storms most years, and St. Augustine paver work calls for a
                different planning approach than inland Jacksonville.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Coastal Weather, Sandy Soil, and Storm Season
              </h3>
              <p>
                The St. Augustine area gets salt air, high humidity, intense sun, and heavy
                seasonal rain — often all in the same week. The soil near the coast is sandy and
                drains fast, which suits pavers well, but only with a properly compacted aggregate
                base and solid edge restraints to keep everything in place. We grade every project
                for positive drainage away from the home and use polymeric joint sand so the
                hardscape holds up through storm season. Properties in FEMA AE or VE flood zones
                — common on Anastasia Island, Davis Shores, Vilano Beach, and the riverfront — get
                extra attention to elevations and drainage paths so heavy rain or surge events
                move water the right direction.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Paver Styles That Fit Historic Character
              </h3>
              <p>
                St. Augustine homes lean Old-World, and the paver styles we install reflect that.
                Tumbled pavers — Tremron's Stonehedge and Olde Town lines, Belgard's Cambridge and
                Bergerac — have weathered edges and warm, blended color tones that echo the
                historic district's coquina and brick. We build cobblestone-style courtyards,
                herringbone patios, and circle-medallion driveway accents that feel authentic to
                the Ancient City rather than fighting against it. For newer construction in
                Palencia, World Golf Village, Murabella, or Las Calinas, we can just as easily
                pivot to cleaner, more contemporary pavers in larger formats and quieter palettes.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                The Historic District: HARB and Certificate of Appropriateness
              </h3>
              <p>
                Properties inside the City of St. Augustine's historic preservation zones
                (HP-1 through HP-5) fall under the Historic Architecture Review Board, and any
                visible exterior change — including driveways, walkways, and front courtyards —
                requires a Certificate of Appropriateness before work can begin. The board cares
                about material, color, scale, and historical appropriateness. We prepare HARB-ready
                submission packages with material samples, color, pattern, dimensions, and
                photography, and we choose paver lines that meet the district's expectations. Rear
                courtyards and interior-of-lot work generally have fewer restrictions, but we
                confirm the property's overlay before scoping.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Permits in St. Johns County and the City of St. Augustine
              </h3>
              <p>
                Standard paver patio and driveway replacements often don't require a county
                building permit, but right-of-way work, drainage modifications, structural
                additions (pergolas, outdoor kitchens with gas or electric or plumbing), and any
                work in the city's HP zones do. As a licensed and insured contractor, we pull the
                St. Johns County or City of St. Augustine permits your project needs, coordinate
                the 811 utility locate, schedule the inspections, and make sure the finished work
                meets local code — including HARB approval where the property requires it.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                What Paver Projects Typically Cost in St. Augustine
              </h3>
              <p>
                Pricing depends on size, paver selection, base depth, drainage requirements, HARB
                or HOA review scope, and add-ons. For St. Augustine homes our most common project
                ranges look like this:
              </p>
              <ul className="mt-2 space-y-2 pl-5 list-disc">
                <li><span className="font-semibold text-gray-900">Paver driveway replacement:</span> $12,000–$25,000+ depending on driveway size, paver line, and pattern.</li>
                <li><span className="font-semibold text-gray-900">Patio expansion or new courtyard:</span> $10,000–$25,000 for typical lot sizes.</li>
                <li><span className="font-semibold text-gray-900">Pool deck:</span> $15,000–$30,000+ depending on deck size, coping, and drainage.</li>
                <li><span className="font-semibold text-gray-900">Outdoor kitchen:</span> $15,000–$50,000+ depending on appliances, counter material, and structure.</li>
                <li><span className="font-semibold text-gray-900">Full backyard build-out:</span> $35,000–$80,000+ for patio + pool deck + fire feature + pergola packages.</li>
              </ul>
              <p>
                Historic district projects requiring HARB review and historically appropriate
                materials can run higher. Our project minimum is $7,500. Every project gets a
                detailed, no-obligation quote after a free on-site consultation — no vague
                allowances, no surprise change orders.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Barrier Islands: Anastasia, Vilano, Crescent Beach
              </h3>
              <p>
                Anastasia Island, St. Augustine Beach, Vilano Beach, and Crescent Beach are some
                of our most beautiful project sites — and the most demanding from a construction
                standpoint. Barrier-island lots see salt air directly off the Atlantic, sandy
                sub-grade that drains differently than mainland soil, and storm surge potential
                during named events. We design every coastal install around those conditions: UV-
                and salt-tolerant paver lines, deeper compacted base where the soil calls for it,
                drainage that anticipates heavy-rain events, and edge restraints that hold up to
                long-term ground movement. The investment pays off — properly built paver hardscape
                on a barrier-island lot lasts decades and recovers from storms far better than
                poured concrete.
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
              Our Process for St. Augustine Projects
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              A clear, step-by-step process built around how St. Augustine actually works — HARB
              submissions, county permits, flood-zone planning, and coastal base preparation that
              keeps the project on schedule and the hardscape in service for the long haul.
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
      <ServiceGallery images={galleryImages} title="Paver Projects in St. Augustine" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default StAugustinePaversContent;

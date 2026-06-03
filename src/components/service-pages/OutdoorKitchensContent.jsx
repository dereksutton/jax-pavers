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

const galleryImages = [
  { src: "/pavers-2.webp", alt: "Custom outdoor kitchen installation with wood-plank ceiling and paver flooring by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-17.webp", alt: "Outdoor kitchen and pergola installation with grill and kamado smoker by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-21.webp", alt: "L-shaped outdoor kitchen installation with pergola, grill, and smoker by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-29.webp", alt: "Custom outdoor kitchen installation with grill, range hood, TV, and bar seating by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-41.webp", alt: "Elevated paver patio installation with fire pit, outdoor kitchen, built-in seating, and accent lighting by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-53.webp", alt: "Outdoor kitchen island installation with grill, side burner, and pergola by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  { q: "How much does an outdoor kitchen cost in Jacksonville?", a: "Outdoor kitchen costs in Jacksonville typically range from around $15,000 for a compact grill station to $50,000 or more for a full L-shaped suite with premium appliances, granite countertops, stone veneer, and a covered structure. We have a $7,500 project minimum for all installations. Contact us for a free consultation and we'll provide a detailed, no-obligation quote tailored to your property." },
  { q: "What's the typical price range for outdoor kitchens in Jacksonville FL?", a: "Most outdoor kitchen projects we install in Jacksonville fall into three tiers. Compact builds with a built-in grill, side burner, and storage start around $15,000 to $20,000. Mid-range L-shaped or U-shaped islands with refrigeration, premium appliances, and stone veneer typically run $25,000 to $40,000. Full luxury outdoor kitchens with pizza ovens, dedicated smokers, granite or quartz counters, bar seating, weatherproof TVs, and integrated lighting can exceed $50,000." },
  { q: "Are outdoor kitchens worth it in Jacksonville's climate?", a: "Yes. Jacksonville averages over 220 sunny days per year and mild winters that rarely drop below freezing, which means an outdoor kitchen gets serious use almost year-round. Beyond lifestyle, outdoor kitchens are consistently ranked among the highest-ROI home improvements in the Southeast, with most installations recouping 50 to 70 percent of their cost at resale and significantly increasing buyer interest in Jacksonville's competitive housing market." },
  { q: "Can I use my outdoor kitchen year-round in Northeast Florida?", a: "Absolutely. With Florida's mild winters and warm shoulder seasons, most of our Jacksonville clients use their outdoor kitchens 9 to 11 months of the year. Adding a pergola or covered structure extends usability during summer storms and the few cooler weeks in January. Many homeowners pair their kitchen with a paver patio, pergola, and fire pit to create a true four-season outdoor living space." },
  { q: "Where should I put an outdoor kitchen in my Jacksonville backyard?", a: "The best location depends on your home's layout, prevailing wind direction (typically east in Jacksonville), and how close you can get to existing gas, water, and electrical service. Most clients build their outdoor kitchen 10 to 20 feet from the back of the home for convenient access, with a covered structure or pergola overhead. We assess all of this during the free site consultation and design a layout that fits your space and habits." },
  { q: "Do I need permits for an outdoor kitchen in Jacksonville?", a: "In most cases, yes. Gas lines, electrical circuits, and plumbing connections typically require permits in Duval County. As a licensed and insured contractor, we handle the entire permitting process so you don't have to worry about code compliance or inspections." },
  { q: "How long does an outdoor kitchen take to build?", a: "Most outdoor kitchen installations take between 2 to 4 weeks depending on the complexity of the design, appliance lead times, and permitting timelines. During your consultation, we'll provide a clear project schedule so you know exactly what to expect." },
  { q: "What countertop materials work best for outdoor kitchens in Florida?", a: "Granite and quartz are the most popular countertop choices for outdoor kitchens in Florida. Both materials are heat-resistant, weather-resistant, and require very little maintenance. They stand up well to Jacksonville's intense sun, humidity, and rain while maintaining their appearance for years." },
  { q: "Can you add an outdoor kitchen to my existing patio?", a: "Yes. We regularly build outdoor kitchens on existing paver patios. If additional space is needed, we can expand the patio area to accommodate your new kitchen island. During your free consultation, we'll assess your current setup and recommend the best approach." },
  { q: "Twin Eagles vs TrueFlame — which grill should I choose?", a: "Both are premium outdoor cooking brands we install regularly. Twin Eagles is the higher-end of the two — heavier 304-grade stainless construction, infrared burners, and a price tag that reflects the build (typically $5,000–$10,000+ for the grill alone). TrueFlame is excellent value for performance — slightly lighter stainless, fewer specialty features, and a $2,000–$4,500 range that hits the sweet spot for most mid-range outdoor kitchens. We'll walk you through both during your consultation; you can also pair either with a Big Green Egg or similar kamado for smoking and slow-cooking versatility." },
  { q: "What paver brands do you use under the outdoor kitchen?", a: "We use premium Tremron and Belgard pavers for the flooring under and around every outdoor kitchen we build in Jacksonville. Both manufacturers engineer their pavers for Florida heat, UV, humidity, and the foot traffic an outdoor kitchen sees. On coastal projects, we pair the pavers with SurfaceLogix treatments where slip resistance matters. The same base prep that goes under our paver patios — proper excavation, compacted aggregate base, drainage grading — goes under the kitchen island so the surface stays flat for decades." },
];

const relatedServices = [
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Extend your living space with a custom patio.", image: "/pavers-26.webp" },
  { href: "/pergolas", title: "Pergolas", blurb: "Shade and style for your outdoor kitchen area.", image: "/pavers-20.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks.", image: "/pavers-14.webp" },
];

const benefits = [
  {
    title: "Premium Appliance Options",
    text: "Built-in gas grills, kamado smokers like the Big Green Egg, side burners, power burners, outdoor refrigerators, ice makers, sinks with hot and cold water, warming drawers, and even dedicated pizza ovens.",
    icon: <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />,
  },
  {
    title: "Durable Countertop Materials",
    text: "Granite and quartz countertops that resist heat, stains, and Florida's relentless UV exposure. Both materials are low maintenance and available in a wide range of colors and edge profiles.",
    icon: <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z" />,
  },
  {
    title: "Custom Island Construction",
    text: "Durable stone veneer or stacked stone island bases that withstand moisture, heat, and the wear and tear of daily outdoor use. Steel or aluminum framing for lasting structural integrity.",
    icon: <path fill="currentColor" d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z" />,
  },
  {
    title: "Entertainment Features",
    text: "Weatherproof TV mounts, sound systems, and bar-height seating so your outdoor kitchen doubles as the ultimate gathering space for game days and dinner parties.",
    icon: <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />,
  },
  {
    title: "Accent Lighting",
    text: "Integrated LED lighting rounds out the design, letting you grill and entertain well after the sun goes down. Under-counter, task, and ambient lighting options available.",
    icon: <path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />,
  },
];

const processSteps = [
  { title: "Design consultation and site assessment", text: "We visit your property, discuss your vision, evaluate the existing space, and take precise measurements. You will receive a detailed proposal with transparent pricing. No hidden fees, no pressure. This consultation is always free." },
  { title: "3D rendering and planning", text: "Our design team creates a detailed rendering so you can see exactly how your outdoor kitchen will look before a single paver is laid. We finalize appliance selections, countertop materials, stone veneer, and the overall layout during this phase." },
  { title: "Permitting", text: "Most outdoor kitchens in Jacksonville require permits for gas lines, electrical circuits, and plumbing. We handle the entire permitting process with Duval County so everything is code-compliant and inspection-ready." },
  { title: "Foundation and paver base", text: "A solid foundation is critical. We prepare a compacted aggregate base, install the paver surface, and ensure proper grading for drainage. We apply the same base preparation standards to every hardscape project." },
  { title: "Island construction and appliance installation", text: "The kitchen island is built with a steel or aluminum frame, wrapped in your chosen stone veneer, and topped with precision-cut countertops. Appliances, gas lines, electrical, and plumbing are installed and tested by licensed professionals." },
  { title: "Finishing touches and walkthrough", text: "We install backsplash details, bar seating, lighting, and any remaining accessories. Before we consider the job complete, we walk you through every feature and make sure the finished kitchen meets our standards and yours. We stand behind every install — if anything isn't right, we make it right." },
];

const OutdoorKitchensContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-2.webp"
      heroAlt="Custom outdoor kitchen installation by Jax Pavers in Jacksonville FL"
      heroTitle="Outdoor Kitchen Installation in Jacksonville, FL"
      heroSubtitle="Custom outdoor kitchens designed for Florida living, from compact grill stations to full island suites."
      relatedServices={relatedServices}
    >
      {/* Intro */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          Living in Jacksonville means enjoying sunshine nearly year-round. There is no better way to take advantage of Florida's outdoor lifestyle
          than with a custom outdoor kitchen. From weekend cookouts to Tuesday evening grilling to
          game-day entertaining, an outdoor kitchen transforms your backyard into
          the heart of your home. No more running back and forth between the indoor
          kitchen and the grill. Everything you need is right where the action is.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          At Jax Pavers, we design and build fully custom outdoor kitchens
          throughout Jacksonville and Northeast Florida. From compact grilling
          stations to expansive L-shaped islands with full appliance suites, every
          project we deliver is engineered for Florida's heat, humidity, and
          afternoon storms, using materials and methods built for the coastal climate. We also build the{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">paver patios</Link>{" "}
          and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link>{" "}
          that complete your outdoor living space — see all of our{" "}
          <Link href="/pavers-jacksonville-fl" className="text-[#0A86C4] hover:underline">
            Jacksonville paver services
          </Link>
          . As a licensed and insured contractor, we handle every detail from
          design consultation through final inspection so you can focus on
          choosing your favorite recipes.
        </p>
      </motion.section>

      {/* Benefits Card Grid */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Fully Custom</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Design Your Dream Outdoor Kitchen</h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              No two outdoor kitchens are alike. We
              work with you to create a layout and feature set that matches your
              cooking style, entertaining habits, and backyard footprint.
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <motion.article key={b.title} variants={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
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

      {/* Process Timeline */}
      <section className="relative bg-white [background:radial-gradient(900px_500px_at_50%_-10%,rgba(10,134,196,0.06),transparent_60%)]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">How It Works</p>
            <div className="mx-auto mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Our Outdoor Kitchen Installation Process</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Building an outdoor kitchen involves coordinating multiple trades and materials, which is why a structured process matters.
            </p>
          </motion.div>

          <div className="relative space-y-10">
            {processSteps.map((step, i) => (
              <motion.div key={step.title} className="relative flex gap-5" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0A86C4] to-[#0875B1] text-white font-bold shadow-md text-sm">{i + 1}</div>
                  {i < processSteps.length - 1 && <div className="mt-2 w-0.5 flex-1 bg-[#0A86C4]/15" />}
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

      {/* Mid-page CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        <motion.div {...fadeUp} className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-4 py-10 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <p className="text-xl mb-1 font-semibold text-white">Ready to build your dream outdoor kitchen?</p>
            <p className="text-base text-gray-300">From compact grill stations to full island suites. We handle every detail.</p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative bg-[#f7f9fc]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">2026 Pricing</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Outdoor Kitchen Cost in Jacksonville by Tier
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Most outdoor kitchens we build in Jacksonville fall into three
              clear tiers. Use these ranges as a starting point, then read our
              full{" "}
              <Link
                href="/blog/outdoor-kitchen-cost-jacksonville"
                className="text-[#0A86C4] hover:underline"
              >
                outdoor kitchen cost guide
              </Link>{" "}
              for line-item detail.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            <motion.div
              variants={item}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0A86C4]">
                Compact
              </p>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                $15,000 – $20,000
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Built-in gas grill, single side burner, storage drawers,
                granite top, stone veneer island base. Perfect for a single
                cook and a compact patio footprint.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col rounded-2xl border-2 border-[#0A86C4]/30 bg-white p-6 shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0A86C4]">
                Mid-Range (Most Popular)
              </p>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                $25,000 – $40,000
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                L-shaped or U-shaped island, outdoor refrigerator, premium
                Twin Eagles or TrueFlame grill, bar seating for 4–6, granite
                or quartz countertops, stone veneer wrap, integrated LED
                lighting.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0A86C4]">
                Luxury
              </p>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                $50,000+
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Full appliance suite with pizza oven, dedicated kamado
                smoker, sink with hot/cold water, weatherproof TV, custom
                lighting, premium quartz counters, and a covered structure
                or louvered pergola overhead.
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-6 text-sm text-gray-500 leading-relaxed"
          >
            Ranges are installed costs for 2026 Jacksonville-market projects
            and include the paver flooring directly under the island. Jax
            Pavers has a $7,500 project minimum, and every quote is written
            and itemized.
          </motion.p>
        </div>
      </section>

      {/* Partners Split Layout */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Built to Last</p>
              <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Premium Appliance Partners</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The grill is the centerpiece of any outdoor kitchen, and we only install
                  brands that are built to last in Florida's demanding environment. We are
                  proud partners with <strong className="text-gray-900">Twin Eagles</strong> and{" "}
                  <strong className="text-gray-900">TrueFlame</strong>, two of the most respected names in outdoor
                  cooking. Both manufacturers produce commercial-grade stainless steel
                  grills and accessories engineered for years of heavy use in heat and
                  humidity.
                </p>
                <p>
                  For homeowners who love low-and-slow cooking, we integrate kamado-style
                  smokers including the <strong className="text-gray-900">Big Green Egg</strong>. These ceramic cookers excel at
                  smoking, grilling, roasting, and even baking, making them the perfect
                  complement to a traditional gas grill. Many of our Jacksonville clients
                  choose a dual setup with a gas grill for quick weeknight meals and a
                  kamado for weekend smoking sessions.
                </p>
                <p>
                  Every stainless steel component we install (from access doors and
                  storage drawers to side burners and refrigerators) is rated for outdoor
                  use and backed by manufacturer warranties. Combined with the workmanship
                  of a licensed and insured Jacksonville crew, your investment is built
                  to last.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl shadow-xl">
              <img src={getImagePath("/pavers-29.webp")} alt="Custom outdoor kitchen with grill, range hood, TV, and bar seating by Jax Pavers" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Knowledge / SEO cluster content */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Local Knowledge</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Outdoor Kitchens in Jacksonville, FL: Cost, Climate &amp; Local Considerations
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Outdoor kitchens in Jacksonville are different from outdoor kitchens almost anywhere else
                in the country. The Florida climate is hot, humid, salt-laden along the coast, and prone
                to dramatic afternoon thunderstorms — all of which place demands on materials, appliances,
                and structural protection that builders in milder climates simply don't have to plan for.
                After hundreds of completed projects across Duval, St. Johns, and Clay counties, we've
                learned what holds up here and what doesn't.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                What Does an Outdoor Kitchen Cost in Jacksonville?
              </h3>
              <p>
                Pricing for outdoor kitchens in Jacksonville FL varies more than almost any other
                hardscape category we install. The biggest cost drivers are the size and shape of the
                island, the appliances you select, the countertop material, whether the kitchen is
                covered, and how far it sits from existing gas, water, and electrical service.
              </p>
              <p>
                Compact outdoor kitchens with a built-in gas grill, single side burner, storage drawers,
                and a granite top usually fall between $15,000 and $20,000 installed. Mid-range L-shaped
                islands with an outdoor refrigerator, bar seating, dedicated power burner, and premium
                stone veneer typically run $25,000 to $40,000. Full luxury outdoor kitchens — the kind
                that include a kamado smoker, pizza oven, weatherproof TV, sink with hot and cold water,
                custom lighting, and a covering overhead — can exceed $50,000. Our project minimum is
                $7,500, and every quote we provide is itemized so there are no surprises later. For a
                full line-item breakdown, see our{" "}
                <Link
                  href="/blog/outdoor-kitchen-cost-jacksonville"
                  className="text-[#0A86C4] hover:underline"
                >
                  Jacksonville outdoor kitchen cost guide
                </Link>
                .
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Building Outdoor Kitchens for the Florida Climate
              </h3>
              <p>
                Jacksonville sees over 220 days of sun per year, daily summer highs in the low 90s, and
                summer humidity that routinely cracks 80 percent. Materials that work fine in drier
                climates rust, fade, swell, or warp here within a season or two. That's why every
                outdoor kitchen we build uses 304-grade stainless steel for all metal components,
                weather-rated electrical boxes and gas connectors, sealed granite or quartz
                countertops, and stone veneer or stacked-stone island bases that won't degrade in
                humidity or salt spray. For homes east of the Intracoastal — Jacksonville Beach,
                Atlantic Beach, Neptune Beach, Ponte Vedra Beach — we specify marine-grade hardware
                throughout to handle salt air exposure.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Paver Flooring Under the Outdoor Kitchen
              </h3>
              <p>
                The kitchen island only works as well as the paver surface
                it sits on. We install premium{" "}
                <strong className="text-gray-900">Tremron</strong> and{" "}
                <strong className="text-gray-900">Belgard</strong> pavers
                under and around every outdoor kitchen we build — engineered
                for Florida heat, UV, and the kind of foot and chair traffic
                that wears down lesser surfaces fast. For coastal projects
                we also pair{" "}
                <strong className="text-gray-900">SurfaceLogix</strong>{" "}
                texture and slip-resistance treatments where the kitchen
                wraps a pool deck. The base prep under the kitchen is the
                same exacting work we put under any{" "}
                <Link href="/patios" className="text-[#0A86C4] hover:underline">
                  paver patio
                </Link>{" "}
                — proper excavation, a compacted aggregate base, and grading
                that moves water away from the island and the home.
              </p>
              <p>
                We also account for Florida's wind and storm load. Any covering, pergola, or attached
                structure over an outdoor kitchen we build is engineered to meet or exceed Florida
                Building Code wind requirements. The same{" "}
                <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergola installation</Link>{" "}
                that gives you shade during August also protects your appliances when an afternoon
                thunderstorm rolls in unannounced.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Outdoor Kitchen Locations We Serve Around Jacksonville
              </h3>
              <p>
                We design and install custom outdoor kitchens throughout Jacksonville and the
                surrounding communities, including Ponte Vedra Beach, Nocatee, St. Johns, Fruit Cove,
                Mandarin, Riverside, Atlantic Beach, Neptune Beach, Jacksonville Beach, St. Augustine,
                Fleming Island, Orange Park, and Green Cove Springs. Every neighborhood has its own
                character and code considerations, and we work with each county's permitting offices so
                your project moves cleanly from design to inspection without surprises.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">
                Pairing an Outdoor Kitchen with the Rest of Your Backyard
              </h3>
              <p>
                Most of our Jacksonville clients don't build an outdoor kitchen in isolation. The
                kitchen anchors a larger outdoor living space that typically includes a custom{" "}
                <Link href="/patios" className="text-[#0A86C4] hover:underline">paver patio</Link>, a{" "}
                <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergola</Link>{" "}
                overhead, and often a{" "}
                <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">paver pool deck</Link>{" "}
                if the home has a pool. Designing all of these together from day one produces a
                cohesive look, simplifies permitting, and almost always costs less than phasing the
                work over multiple years.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceGallery images={galleryImages} title="Outdoor Kitchen Gallery" />

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default OutdoorKitchensContent;

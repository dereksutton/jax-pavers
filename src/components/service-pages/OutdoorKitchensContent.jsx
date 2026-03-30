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
  { src: "/pavers-2.webp", alt: "Custom outdoor kitchen installation with wood-plank ceiling and paver flooring by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-17.webp", alt: "Outdoor kitchen and pergola installation with grill and kamado smoker by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-21.webp", alt: "L-shaped outdoor kitchen installation with pergola, grill, and smoker by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-29.webp", alt: "Custom outdoor kitchen installation with grill, range hood, TV, and bar seating by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-41.webp", alt: "Elevated paver patio installation with fire pit, outdoor kitchen, built-in seating, and accent lighting by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-53.webp", alt: "Outdoor kitchen island installation with grill, side burner, and pergola by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  { q: "How much does an outdoor kitchen cost in Jacksonville?", a: "Outdoor kitchen costs vary widely based on the size of the island, number and type of appliances, countertop material, and overall design complexity. We have a $7,500 project minimum for all installations. Contact us for a free consultation and we'll provide a detailed, no-obligation quote tailored to your property." },
  { q: "Do I need permits for an outdoor kitchen in Jacksonville?", a: "In most cases, yes. Gas lines, electrical circuits, and plumbing connections typically require permits in Duval County. As a licensed and insured contractor, we handle the entire permitting process so you don't have to worry about code compliance or inspections." },
  { q: "How long does an outdoor kitchen take to build?", a: "Most outdoor kitchen installations take between 2 to 4 weeks depending on the complexity of the design, appliance lead times, and permitting timelines. During your consultation, we'll provide a clear project schedule so you know exactly what to expect." },
  { q: "What countertop materials work best for outdoor kitchens in Florida?", a: "Granite and quartz are the most popular countertop choices for outdoor kitchens in Florida. Both materials are heat-resistant, weather-resistant, and require very little maintenance. They stand up well to Jacksonville's intense sun, humidity, and rain while maintaining their appearance for years." },
  { q: "Can you add an outdoor kitchen to my existing patio?", a: "Yes. We regularly build outdoor kitchens on existing paver patios. If additional space is needed, we can expand the patio area to accommodate your new kitchen island. During your free consultation, we'll assess your current setup and recommend the best approach." },
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
  { title: "Finishing touches and walkthrough", text: "We install backsplash details, bar seating, lighting, and any remaining accessories. Before we consider the job complete, we walk you through every feature and make sure the finished kitchen meets our standards and yours. Your 10-year workmanship warranty begins the moment you sign off." },
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
          afternoon storms, backed by our 10-year workmanship warranty. We also build the{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">paver patios</Link> and{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link> that complete your outdoor living space. As a
          licensed and insured contractor, we handle every detail from design
          consultation through final inspection so you can focus on choosing your
          favorite recipes.
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
                  use and backed by manufacturer warranties. Combined with our own 10-year
                  workmanship guarantee, your investment is protected from day one.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl shadow-xl">
              <img src={getImagePath("/pavers-29.webp")} alt="Custom outdoor kitchen with grill, range hood, TV, and bar seating by Jax Pavers" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
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

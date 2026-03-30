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
  { src: "/pavers-16.webp", alt: "Travertine pool deck installation with geometric spa surround by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-23.webp", alt: "Paver pool deck installation surrounding a freeform pool with covered living area by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-30.webp", alt: "Travertine pool deck and spa installation by Jax Pavers in North Florida" },
  { src: "/pavers-31.webp", alt: "Paver pool deck installation with covered lanai and outdoor kitchen by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-46.webp", alt: "Paver pool deck installation with sun shelf and tropical landscaping by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  { q: "What is the best material for a pool deck in Florida?", a: "Travertine and tumbled pavers are top choices for Florida pool decks. Travertine is naturally cooler underfoot thanks to its porous surface, and both options provide excellent slip resistance when wet. They also handle Florida's heat cycles without cracking like poured concrete often does." },
  { q: "How much does a paver pool deck cost?", a: "Pool deck paver costs vary depending on the size of your pool area, the materials you choose, and site conditions. We have a $7,500 project minimum. Contact us for a free consultation and we'll provide a detailed, no-obligation quote tailored to your specific pool deck project." },
  { q: "Can you install pavers around an existing pool?", a: "Yes, we regularly retrofit paver pool decks around existing pools. We carefully remove the old deck surface, prepare a proper compacted base, and install new pavers with appropriate slope and drainage so everything integrates seamlessly with your current pool." },
  { q: "Are paver pool decks slippery when wet?", a: "No. Textured pavers provide excellent grip even when wet, making them much safer than polished concrete or smooth tile around a pool. We specifically recommend materials with slip-resistant finishes for every pool deck installation we complete." },
  { q: "How long does pool deck installation take?", a: "Most pool deck paver installations take between 5 to 10 days depending on the size of the pool area, complexity of the design, and whether we are working around an existing pool or building alongside new pool construction." },
];

const relatedServices = [
  { href: "/patios", title: "Patios & Courtyards", image: "/pavers-11.webp", blurb: "Extend your outdoor living space with a custom paver patio." },
  { href: "/outdoor-kitchens", title: "Outdoor Kitchens", image: "/pavers-18.webp", blurb: "Complete your poolside setup with a fully equipped outdoor kitchen." },
  { href: "/pergolas", title: "Pergolas", image: "/pavers-40.webp", blurb: "Add shade and style next to your pool with a custom pergola." },
];

const benefits = [
  {
    title: "Slip-Resistant Safety",
    text: "Textured paver surfaces provide natural slip resistance, even when splashed with pool water. Far safer than polished concrete or smooth tile around a pool.",
    icon: <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />,
  },
  {
    title: "Cooler Underfoot",
    text: "Light-colored materials like travertine reflect heat instead of absorbing it, keeping the deck comfortable on bare feet even during Jacksonville's hottest months.",
    icon: <path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />,
  },
  {
    title: "No Cracking or Shifting",
    text: "Because pavers are individual units set on a compacted base, they flex with the ground rather than cracking. Unlike rigid concrete, they handle Florida's expansion and contraction cycles with ease.",
    icon: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />,
  },
  {
    title: "Superior Drainage",
    text: "The joints between pavers allow water to drain rather than puddle, reducing standing water and improving safety around the pool during Jacksonville's heavy afternoon storms.",
    icon: <path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />,
  },
  {
    title: "Unlimited Design Options",
    text: "Choose from a wide range of colors, textures, patterns, and edge treatments to create a pool deck that complements your home, landscaping, and personal style.",
    icon: <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />,
  },
];

const processSteps = [
  { title: "Free consultation and site assessment", text: "We visit your property, take measurements around your pool, discuss your vision, and walk you through material options and layout possibilities. If you have an existing pool, we assess the current deck condition and plan the most efficient approach for removal and replacement." },
  { title: "Excavation and base preparation", text: "Our crew excavates the work area and removes any existing concrete or surface material. We then build a compacted aggregate base engineered for the load requirements and soil conditions specific to your property. Proper base preparation is the most critical step." },
  { title: "Paver installation with precision grading", text: "We install your pavers with careful attention to slope and drainage. Water must flow away from the pool and away from your home, so we grade the deck surface with precise fall to ensure proper runoff." },
  { title: "Coping installation", text: "Around the pool edge, we install coping or bullnose pavers that provide a finished, rounded lip. These are comfortable underfoot and designed to channel water into the pool's overflow system rather than onto the deck." },
  { title: "Sealing and finishing", text: "After the pavers are set and the joints are filled with polymeric sand, we compact the entire surface and apply a professional-grade sealer. The sealer locks in the sand, enhances the color of your pavers, and provides lasting protection against stains, UV fading, and weed growth." },
];

const PoolDecksContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-30.webp"
      heroAlt="Paver pool deck installation by Jax Pavers in Jacksonville FL"
      heroTitle="Pool Deck Paver Installation in Jacksonville, FL"
      heroSubtitle="Slip-resistant, heat-reflective pool decks built for Florida's sun and storms."
      relatedServices={relatedServices}
    >
      {/* Intro */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          In Northeast Florida, a pool is the center of outdoor living. Whether you are building a new pool or refreshing a tired
          concrete deck, the surface surrounding your pool matters just as much as
          the water inside it. At Jax Pavers, we specialize in paver pool deck
          installations that are beautiful, slip-resistant, and built to handle
          Jacksonville&apos;s intense sun, heavy summer rains, and year-round humidity.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          As a licensed and insured paver contractor serving Jacksonville, Ponte
          Vedra Beach, Nocatee, St. Augustine, and communities throughout North
          Florida, we bring decades of combined hardscaping experience to every
          pool deck project. Many clients pair their new pool deck with a{" "}
          <Link href="/patios" className="text-[#0A86C4] hover:underline">paver patio</Link>,{" "}
          <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchen</Link>, or{" "}
          <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergola</Link> to create a complete outdoor living space. Every installation is backed by our 10-year
          workmanship warranty and a commitment to precision craftsmanship that our
          clients rely on.
        </p>
      </motion.section>

      {/* Benefits Card Grid */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Pavers vs. Concrete</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Why Pavers Are the Best Choice for Pool Decks</h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Traditional poured concrete pool decks are common across Florida, but they come with significant drawbacks. Pavers solve every one of these problems.
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
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Our Pool Deck Installation Process</h2>
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
            <p className="text-xl mb-1 font-semibold text-white">Ready to upgrade your pool deck?</p>
            <p className="text-base text-gray-300">Beautiful, slip-resistant pavers that stay cool in the Florida sun.</p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* Materials Split Layout */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Premium Materials</p>
              <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Pool Deck Materials & Options</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Travertine pavers are one of the most popular choices for pool decks in
                  Jacksonville and across Florida. Their naturally porous surface stays
                  noticeably cooler than concrete or porcelain, and their earthy tones
                  blend beautifully with tropical and coastal landscapes. We source
                  premium travertine in a range of finishes including tumbled, honed, and
                  brushed to suit your design preferences.
                </p>
                <p>
                  We also install pool decks using products from <strong className="text-gray-900">Tremron</strong> and <strong className="text-gray-900">Belgard</strong>, two
                  of the most respected paver manufacturers in the Southeast. Both brands
                  offer extensive color palettes, surface textures, and paver shapes
                  purpose-built for pool applications.
                </p>
                <p>
                  Coping selection is an important detail that ties the entire pool deck
                  together. We offer bullnose, square-edge, and drop-face coping profiles.
                  Lighter color selections (ivory, cream, silver, and sand tones) are especially popular in
                  Jacksonville because they reflect sunlight and keep the pool edge
                  comfortable throughout the day.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl shadow-xl">
              <img src={getImagePath("/pavers-16.webp")} alt="Travertine pool deck with geometric spa surround by Jax Pavers" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceGallery images={galleryImages} title="Pool Deck Projects by Jax Pavers" />

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default PoolDecksContent;

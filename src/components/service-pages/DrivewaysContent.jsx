"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ServicePageLayout from "../ServicePageLayout";
import ServiceGallery from "../ServiceGallery";
import ServiceFAQ from "../ServiceFAQ";
import ShimmerButton from "../ShimmerButton";
import getImagePath from "../../utils/imagePaths";

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
  { src: "/pavers-4.webp", alt: "Tumbled paver driveway installation with curved border by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-8.webp", alt: "Multi-toned paver driveway installation with charcoal border by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-33.webp", alt: "Aerial view of paver driveway and walkway installation at a luxury Jacksonville FL home by Jax Pavers" },
  { src: "/pavers-39.webp", alt: "Running bond paver driveway installation in gray tones by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-47.webp", alt: "Circle medallion paver driveway installation at a three-car garage home by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-48.webp", alt: "Curved paver driveway installation through palm-lined landscaping by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  { q: "How much does a paver driveway cost in Jacksonville?", a: "Paver driveway costs depend on the size of the area, materials selected, and project complexity. We have a $7,500 project minimum for all installations. Contact us for a free consultation and we'll provide a detailed, no-obligation quote tailored to your property." },
  { q: "How long does a driveway installation take?", a: "Most paver driveway installations take between 3 to 7 days depending on the size and complexity of the project. Larger driveways or designs with intricate patterns may take a bit longer. During your consultation, we'll provide a clear timeline so you know exactly what to expect." },
  { q: "Are paver driveways better than concrete in Florida?", a: "Yes. Paver driveways offer several advantages over poured concrete in Florida's climate. They flex with the ground instead of cracking under heat expansion, provide superior drainage through the joints, and individual pavers can be replaced if damaged. That makes long-term maintenance simpler and more affordable than tearing out and re-pouring an entire concrete slab." },
  { q: "Do paver driveways need maintenance?", a: "Paver driveways are low-maintenance. We recommend periodic sweeping, rinsing with a garden hose, and re-sealing every 2 to 3 years to preserve color and protect against stains. Polymeric joint sand should be topped off as needed to prevent weed growth and ant activity." },
  { q: "What paver patterns work best for driveways?", a: "Herringbone is the strongest pattern for driveways because its interlocking layout distributes vehicle weight evenly and resists shifting. Running bond is another popular choice that offers a clean, classic look. Circle medallion patterns work beautifully as accent features at the entrance or center of the driveway." },
];

const relatedServices = [
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Extend your living space with a custom patio.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks.", image: "/pavers-14.webp" },
  { href: "/outdoor-kitchens", title: "Outdoor Kitchens", blurb: "Fully equipped kitchens built for Florida living.", image: "/pavers-20.webp" },
];

const benefits = [
  {
    title: "Built for Florida Heat & Rain",
    text: "Interlocking pavers flex with the ground as temperatures swing. Unlike rigid concrete, they resist cracking and shifting caused by thermal expansion and Jacksonville's sandy, moisture-prone soil.",
    icon: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />,
  },
  {
    title: "Instant Curb Appeal",
    text: "With dozens of colors, textures, and patterns, a paver driveway transforms the entire look of your home's exterior, from classic tumbled finishes to sleek modern profiles.",
    icon: <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
  },
  {
    title: "Increased Property Value",
    text: "A well-installed paver driveway is one of the highest-ROI hardscape improvements. Buyers recognize the quality and durability of pavers, making your home more attractive on the market.",
    icon: <path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
  },
  {
    title: "Easy to Repair",
    text: "If a paver becomes damaged or stained, you can replace that single unit without disturbing the rest of the driveway. Try doing that with poured concrete.",
    icon: <path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />,
  },
  {
    title: "Superior Drainage",
    text: "Joints between pavers allow rainwater to filter through rather than pooling on the surface. This reduces runoff and protects your foundation during Jacksonville's heavy afternoon storms.",
    icon: <path fill="currentColor" d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />,
  },
];

const processSteps = [
  { title: "Free consultation and site assessment", text: "We visit your property, discuss your vision, take precise measurements, and evaluate soil and drainage conditions. You'll receive a detailed proposal with transparent pricing: no hidden fees, no pressure." },
  { title: "Custom design", text: "Our team creates a layout tailored to your home's architecture and personal style. We help you select the right paver material, color palette, and pattern to achieve the look you want while meeting structural requirements for vehicle traffic." },
  { title: "Excavation and base preparation", text: "Proper base work is the foundation of a driveway that lasts. We excavate to the correct depth, install a compacted aggregate base layer, and ensure proper grading for drainage. These are the steps that separate a professional installation from a DIY job." },
  { title: "Paver laying", text: "Our experienced crew installs each paver by hand, following the approved design and maintaining tight, consistent joints throughout. Border pavers and edge restraints are set to lock the field in place and prevent lateral movement." },
  { title: "Joint sand and sealing", text: "We fill the joints with high-quality polymeric sand that hardens to resist weeds, ants, and washout. A professional-grade sealer is then applied to protect the surface, enhance color, and extend the life of your new driveway." },
  { title: "Final inspection and walkthrough", text: "Before we consider the job complete, we conduct a thorough inspection and walk you through the finished project. We make sure every detail meets our standards and yours. Your 10-year workmanship warranty begins the moment you sign off." },
];

const DrivewaysContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-hero-1920w.webp"
      heroAlt="Paver driveway installation by Jax Pavers in Jacksonville FL"
      heroTitle="Paver Driveway Installation in Jacksonville, FL"
      heroSubtitle="Durable, code-compliant paver driveways built for Florida's heat, rain, and heavy vehicles."
      relatedServices={relatedServices}
    >
      {/* ── Intro ── */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Your driveway is the first thing visitors and potential buyers notice when they
          pull up to your home. In Jacksonville, where intense summer heat, heavy
          afternoon rain, and sandy soil put constant stress on outdoor surfaces, a
          professionally installed paver driveway is one of the smartest investments you
          can make. Unlike poured concrete that cracks and stains over time, interlocking
          pavers deliver lasting beauty, superior strength, and the kind of curb appeal
          that sets your property apart. At Jax Pavers, we design and install custom
          paver driveways, <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link>,{" "}
          <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>, and more
          throughout Jacksonville and Northeast Florida, backed by a
          10-year workmanship warranty and the craftsmanship your home deserves.
        </p>
      </motion.section>

      {/* ── Benefits Card Grid ── */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              Why Choose Pavers
            </p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Why Choose Paver Driveways?
            </h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Homeowners across Jacksonville are replacing aging concrete and asphalt with
              interlocking pavers. Paver driveways offer a combination
              of performance and aesthetics that no other driveway material can match in
              Florida's demanding climate.
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
              Our Driveway Installation Process
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every Jax Pavers driveway project follows a proven, six-step process
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
                {/* Number badge + connecting line */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0A86C4] to-[#0875B1] text-white font-bold shadow-md text-sm">
                    {i + 1}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-[#0A86C4]/15" />
                  )}
                </div>

                {/* Step content */}
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
              Ready to upgrade your driveway?
            </p>
            <p className="text-base text-gray-300">
              We'll build the paver driveway of your dreams with lasting beauty and durability.
            </p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* Materials Split Layout */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
                Premium Materials
              </p>
              <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Materials We Use
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We partner with two of the most respected paver manufacturers in the
                  Southeast: <strong className="text-gray-900">Tremron</strong> and <strong className="text-gray-900">Belgard</strong>. Both brands
                  produce pavers that are specifically engineered for the Florida climate:
                  UV-resistant, color-stable, and rated for vehicular traffic.
                </p>
                <p>
                  Popular driveway patterns include <strong className="text-gray-900">herringbone</strong>, which provides
                  the strongest interlock for areas with heavy vehicle traffic;{" "}
                  <strong className="text-gray-900">running bond</strong>, which offers a clean, timeless appearance; and{" "}
                  <strong className="text-gray-900">circle medallion</strong> designs that create a striking focal point
                  at the entrance of your driveway or in front of the garage.
                </p>
                <p>
                  Color options range from warm sand and terracotta tones to cool grays and
                  charcoals. We also offer multi-toned blends and contrasting border colors to
                  add depth and definition. During your free consultation, we'll bring samples
                  so you can see how different materials look against your home's exterior.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={getImagePath("/pavers-47.webp")}
                alt="Circle medallion paver driveway by Jax Pavers in Jacksonville FL"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <ServiceGallery images={galleryImages} title="Paver Driveway Gallery" />

      {/* ── FAQ ── */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default DrivewaysContent;

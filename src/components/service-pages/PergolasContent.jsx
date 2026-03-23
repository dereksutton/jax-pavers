"use client";

import React from "react";
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
  { src: "/pavers-6.webp", alt: "Outdoor kitchen and pergola installation with stone veneer base and poolside dining by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-17.webp", alt: "Outdoor kitchen and pergola installation with grill and kamado smoker by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-21.webp", alt: "L-shaped outdoor kitchen installation with pergola, grill, and smoker by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-43.webp", alt: "Covered outdoor living area installation with paver flooring and grill station by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-13.webp", alt: "Covered paver patio installation with fireplace and poolside access by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  { q: "How much does a pergola cost in Jacksonville?", a: "Pergola costs vary based on material, size, and features such as louvered roofs or integrated lighting. We have a $7,500 project minimum for all installations. Contact us for a free consultation and we'll provide a custom quote tailored to your outdoor space." },
  { q: "What pergola material is best for Florida weather?", a: "Aluminum is the most popular pergola material in Florida because it won't rot, resists rust, and requires virtually no maintenance. Powder-coated aluminum stands up to Jacksonville's heat, humidity, and salt air. Cedar is a beautiful natural option but requires periodic sealing and staining to maintain its appearance in Florida's climate." },
  { q: "Do I need a permit for a pergola in Jacksonville?", a: "Yes, most pergola installations in Jacksonville require a building permit. As a licensed and insured contractor, we handle the entire permitting process for you, from engineering drawings to final inspection, so you don't have to worry about the paperwork." },
  { q: "Can a pergola be attached to my house?", a: "Yes, attached pergolas are one of our most popular installations. They create a seamless transition from your indoor living space to the outdoors and are ideal for covering patios, outdoor kitchens, and dining areas directly off the back of the home." },
  { q: "How long does pergola installation take?", a: "Most pergola installations take between 3 to 7 days depending on size, material, and complexity. Louvered roof systems and projects requiring concrete footings may take slightly longer. We provide a clear timeline during your consultation so you know exactly what to expect." },
];

const relatedServices = [
  { href: "/outdoor-kitchens", title: "Outdoor Kitchens", blurb: "Fully equipped kitchens built for Florida living.", image: "/pavers-20.webp" },
  { href: "/patios", title: "Paver Patios & Courtyards", blurb: "Extend your living space with a custom patio.", image: "/pavers-26.webp" },
  { href: "/pool-decks", title: "Pool Deck Pavers", blurb: "Slip-resistant, heat-reflective pool decks.", image: "/pavers-14.webp" },
];

const benefits = [
  {
    title: "Shade from the Florida Sun",
    text: "Jacksonville averages over 220 sunny days per year. A pergola provides targeted shade that makes your patio, pool deck, or outdoor kitchen comfortable even during the hottest months without blocking airflow the way a fully enclosed structure does.",
    icon: <path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />,
  },
  {
    title: "Define Outdoor Rooms",
    text: "A pergola creates a visual boundary that turns an open backyard into distinct living zones: a dining area here, a lounge space there. It adds architectural interest and gives your outdoor layout a sense of purpose and design.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    title: "Increase Property Value",
    text: "Outdoor living improvements are among the highest-ROI home upgrades in the Jacksonville market. Buyers love move-in-ready pergola spaces, especially when paired with a paver patio or outdoor kitchen.",
    icon: <path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
  },
  {
    title: "Protect Your Outdoor Investments",
    text: "A pergola shields your grill, countertops, seating, and electronics from direct sun exposure and light rain, extending the life of your outdoor kitchen and furniture.",
    icon: <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />,
  },
  {
    title: "Year-Round Outdoor Living",
    text: "With the right material and roof style, a pergola lets you enjoy your backyard through every season, from mild Jacksonville winters to humid summer evenings. Add ceiling fans, string lights, or privacy screens to make the space truly yours.",
    icon: <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />,
  },
];

const processSteps = [
  { title: "Design consultation", text: "We visit your property, discuss your vision, evaluate the site, and take precise measurements. You'll receive a detailed proposal with material options, layout drawings, and transparent pricing with no hidden fees and no pressure." },
  { title: "Material selection", text: "Together we choose the pergola material, finish color, roof style, and any add-ons such as ceiling fans, LED lighting, or privacy screens. We bring samples so you can see and feel the materials before committing." },
  { title: "Engineering and permitting", text: "Most pergola installations in Jacksonville require a building permit. We prepare the necessary engineering documents and submit the permit application on your behalf, handling the entire process from start to approval." },
  { title: "Foundation and post installation", text: "Depending on the design, we install concrete footings or mount the pergola posts directly to an existing paver patio or concrete slab. Proper foundation work is critical to a structure that stands straight and stays solid for decades in Florida's soil conditions." },
  { title: "Structure assembly", text: "Our crew assembles the pergola frame, installs the rafters or louvered roof panels, and ensures every connection is secure and level. Attached pergolas are fastened to the home's structure using engineered mounting hardware rated for Florida wind loads." },
  { title: "Finishing touches", text: "We install any finishing elements (ceiling fans, integrated LED lighting, privacy screens, or decorative trim) and conduct a thorough final inspection. We walk you through the completed project and make sure every detail meets our standards and yours. Your 10-year workmanship warranty begins the moment you sign off." },
];

const PergolasContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-6.webp"
      heroAlt="Custom pergola and outdoor kitchen installation by Jax Pavers in Jacksonville FL"
      heroTitle="Pergola Installation in Jacksonville, FL"
      heroSubtitle="Custom aluminum and cedar pergolas built to withstand Florida's elements."
      relatedServices={relatedServices}
    >
      {/* Intro */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          A pergola does more than add shade. It transforms how you use your
          outdoor space. In Jacksonville, where the Florida sun is relentless and
          afternoon storms roll in without warning, a well-built pergola creates a
          sheltered outdoor room where you can cook, dine, relax, and entertain
          year-round. At Jax Pavers, we design and install custom pergolas
          throughout Jacksonville and Northeast Florida using premium materials
          that stand up to Florida's heat, humidity, and coastal conditions. Every
          project is backed by our 10-year workmanship warranty and the attention
          to detail that comes from a licensed and insured contractor who takes
          pride in the finished product.
        </p>
      </motion.section>

      {/* Benefits Card Grid */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Why a Pergola</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Why Add a Pergola to Your Outdoor Space?</h2>
            <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
              Pergolas are one of the most versatile outdoor structures you can add to
              a Jacksonville home. Whether you want to shade a patio, protect an
              outdoor kitchen, or create a defined lounge area by the pool, a pergola
              delivers function and style in equal measure.
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
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Our Pergola Installation Process</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every Jax Pavers pergola project follows a structured process from initial concept to final walkthrough.
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
            <p className="text-xl mb-1 font-semibold text-white">Ready to add shade and style to your outdoor space?</p>
            <p className="text-base text-gray-300">Custom pergolas engineered for Florida's sun, rain, and wind.</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Materials & Styles</p>
              <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Pergola Materials & Styles</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Aluminum pergolas</strong> are the most popular choice for
                  Jacksonville homeowners. Aluminum is
                  maintenance-free, won't rot or warp, and comes in a wide range of
                  powder-coated finishes. It resists rust and holds up beautifully in
                  Florida's salt air and humidity.
                </p>
                <p>
                  <strong className="text-gray-900">Cedar pergolas</strong> deliver a warm, natural
                  aesthetic that blends beautifully with tropical and traditional
                  landscaping. Cedar is naturally resistant to insects and can be stained or
                  sealed in any color, though it does require periodic maintenance, typically
                  re-staining every two to three years.
                </p>
                <p>
                  As an authorized <strong className="text-gray-900">StruXure</strong> dealer, we install their industry-leading
                  louvered roof systems. StruXure pergolas feature adjustable louvers
                  that rotate with the touch of a button. Open them to let sunlight
                  through, close them to block rain completely. Integrated gutters
                  channel water away from the living area. It's the ultimate solution
                  for homeowners who want full control over sun, shade, and rain
                  protection.
                </p>
                <p>
                  We build both <strong className="text-gray-900">attached pergolas</strong> that connect directly
                  to your home for a seamless indoor-outdoor transition, and{" "}
                  <strong className="text-gray-900">freestanding pergolas</strong> that can be positioned anywhere
                  in your yard, over a fire pit, beside the pool, or in the center of a
                  paver patio.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl shadow-xl">
              <img src={getImagePath("/pavers-21.webp")} alt="L-shaped outdoor kitchen with pergola installation by Jax Pavers in Jacksonville FL" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceGallery images={galleryImages} title="Pergola Installation Gallery" />

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default PergolasContent;

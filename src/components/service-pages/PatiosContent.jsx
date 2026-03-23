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
  { src: "/pavers-1.webp", alt: "Paver patio installation with stone fire pit and covered lanai by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-7.webp", alt: "Backyard paver patio installation with circular fire pit by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-22.webp", alt: "Freeform paver patio installation with fire pit and in-ground lighting by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-28.webp", alt: "Paver patio installation with fire pit and poolside pergola by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-37.webp", alt: "Paver patio and fire pit installation with pathway lighting by Jax Pavers in Jacksonville FL" },
  { src: "/pavers-20.webp", alt: "Paver patio installation with fire pit and covered lanai by Jax Pavers in Jacksonville FL" },
];

const faqs = [
  { q: "How much does a paver patio cost in Jacksonville?", a: "Paver patio costs depend on the size of your space, the materials you choose, and any additional features like fire pits or seating walls. Our project minimum is $7,500. We offer free consultations where we assess your backyard and provide a detailed, no-obligation quote so you know exactly what to expect." },
  { q: "Can you add a fire pit to my paver patio?", a: "Absolutely! Stone fire pits are one of our most popular patio features here in Jacksonville. We build both gas and wood-burning fire pits that integrate seamlessly into your paver patio design. A fire pit creates a natural gathering spot and extends the usability of your outdoor space well into the cooler months." },
  { q: "How long does a patio installation take?", a: "Most paver patio installations take between 3 to 7 days, depending on the size of the patio, the complexity of the design, and any additional features like fire pits or seating walls. During your consultation, we provide a clear project timeline so you can plan accordingly." },
  { q: "What's the best paver material for a Florida patio?", a: "We work with premium brands like Tremron and Belgard, both excellent choices for Florida patios. Tumbled pavers are popular for a rustic, Old World look, while travertine pavers offer an elegant natural stone feel. During your free consultation, we help you choose the best material for your style, budget, and how you plan to use the space." },
  { q: "Do I need a permit for a paver patio in Jacksonville?", a: "Standard paver patio installations typically do not require a permit in Duval County. However, if your project includes structures like pergolas, outdoor kitchens, or electrical and gas work, permits may be needed. We handle the entire permitting process for you when applicable, so you never have to worry about it." },
];

const relatedServices = [
  { href: "/driveways", image: "/pavers-4.webp", title: "Paver Driveways", blurb: "Durable, stunning driveways built to last." },
  { href: "/pool-decks", image: "/pavers-11.webp", title: "Pool Deck Pavers", blurb: "Slip-resistant pool decks for safety and style." },
  { href: "/outdoor-kitchens", image: "/pavers-17.webp", title: "Outdoor Kitchens", blurb: "Fully equipped outdoor kitchens for entertaining." },
];

const benefits = [
  {
    title: "Outdoor Living Extension",
    text: "A paver patio is more than just a flat surface in your yard. It is an extension of your home: an outdoor living room where you can gather around a fire pit on a cool evening, host a barbecue with friends, or simply unwind after a long day.",
    icon: <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    title: "Endless Design Flexibility",
    text: "Unlike poured concrete, pavers offer a wide range of colors, textures, and patterns that allow you to create a space that truly reflects your personal style. Choose from classic tumbled cobblestone to sleek modern formats.",
    icon: <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />,
  },
  {
    title: "Increased Property Value",
    text: "Outdoor living spaces consistently rank among the top home improvements for return on investment, and a well-built paver patio is one of the most practical and attractive upgrades you can make.",
    icon: <path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
  },
  {
    title: "Built for Florida's Climate",
    text: "Pavers are incredibly durable, resist cracking in Florida's heat, and can be easily repaired if a single unit ever shifts or chips. They flex with the ground rather than splitting under thermal expansion.",
    icon: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />,
  },
  {
    title: "Low Maintenance",
    text: "A paver patio requires minimal upkeep: periodic sweeping, rinsing with a garden hose, and re-sealing every few years keeps your outdoor space looking beautiful for decades.",
    icon: <path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />,
  },
];

const processSteps = [
  { title: "Free consultation and site visit", text: "We visit your home, listen to your ideas, take measurements, and discuss how you want to use the space. Whether you have a detailed plan in mind or just a rough idea, our team helps you refine the design so it fits your property, your lifestyle, and your budget." },
  { title: "Material selection", text: "We partner with industry-leading manufacturers like Tremron and Belgard to offer a wide selection of paver styles, from classic brick and tumbled cobblestone to sleek modern formats and natural travertine. We bring samples to your home so you can see how each option looks against your exterior." },
  { title: "Site preparation and grading", text: "Our crew excavates to the proper depth, installs a compacted aggregate base, and grades the surface to ensure proper drainage away from your home. In Florida's heavy rain environment, getting the drainage right is one of the most important steps in the entire process." },
  { title: "Paver installation", text: "Each unit is hand-placed according to your chosen pattern. Whether it is a herringbone layout for added interlock strength or a running bond for a clean, contemporary look, our installers pay close attention to alignment, spacing, and consistency." },
  { title: "Finishing touches", text: "We fill joints with polymeric sand to lock the pavers in place and prevent weed growth, install edge restraints for long-term stability, and apply sealant when desired to enhance color and protect the surface. The result is a patio that looks beautiful on day one and stays that way for years." },
];

const features = [
  { title: "Fire Pits", text: "Custom-built stone fire pits in gas or wood-burning configurations. A fire pit instantly becomes the centerpiece of your patio and a favorite gathering spot for family and friends." },
  { title: "Seating Walls", text: "Low paver or stone walls that provide built-in seating around your patio, eliminating the need for extra furniture while adding architectural detail." },
  { title: "Retaining Walls", text: "Functional and attractive retaining walls that manage grade changes, prevent erosion, and create defined levels in your outdoor space." },
  { title: "Stepping Stone Paths", text: "Paver walkways and stepping stone paths that connect your patio to your pool, garden, or other areas of your yard." },
  { title: "Lighting Integration", text: "In-ground paver lights, pathway lighting, and accent lighting that extend the usability of your patio into the evening hours and add ambiance." },
];

const PatiosContent = () => {
  return (
    <ServicePageLayout
      heroImage="/pavers-1.webp"
      heroAlt="Paver patio installation with fire pit by Jax Pavers in Jacksonville FL"
      heroTitle="Paver Patio Installation in Jacksonville, FL"
      heroSubtitle="Custom patios and courtyards built for Florida outdoor living, backed by a 10-year warranty."
      relatedServices={relatedServices}
    >
      {/* Intro */}
      <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          Jacksonville homeowners enjoy one of the best climates in the country for outdoor living.
          With mild winters, warm springs, and long summer evenings, your backyard has the potential
          to become one of the most used spaces in your home. A professionally installed paver patio
          gives you a beautiful, durable foundation for entertaining, relaxing, and spending time
          with family and friends right in your own backyard.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          At Jax Pavers, we specialize in custom paver patio and courtyard installations throughout
          Jacksonville, Ponte Vedra Beach, Nocatee, St. Augustine, and the surrounding communities.
          Whether you are looking for a cozy fire pit patio, a sprawling outdoor living area, or an
          elegant courtyard, our team designs and builds patios that stand up to Florida&apos;s
          weather while looking stunning for years to come. Every project is backed by our 10-year
          workmanship warranty, and we are fully licensed and insured.
        </p>
      </motion.section>

      {/* Benefits Card Grid */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Why Choose a Paver Patio</p>
            <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Transform Your Backyard with a Custom Paver Patio
            </h2>
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
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Our Patio Design & Installation Process</h2>
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
            <p className="text-xl mb-1 font-semibold text-white">Ready to transform your backyard?</p>
            <p className="text-base text-gray-300">Let us design and build the patio you&apos;ve always wanted.</p>
          </div>
          <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
        </motion.div>
      </section>

      {/* Features Split Layout */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">Custom Features</p>
              <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Patio Features We Build</h2>
              <p className="mt-4 text-gray-600 leading-relaxed mb-6">
                A great paver patio goes beyond the pavers themselves. We design and build a range of
                features that make your outdoor space more functional, comfortable, and visually striking:
              </p>
              <ul className="space-y-4">
                {features.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0A86C4]/10">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0A86C4]"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    </span>
                    <div>
                      <strong className="text-gray-900">{f.title}</strong>
                      <span className="text-gray-600">: {f.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 leading-relaxed">
                We can incorporate any of these features into a new patio design or add them to an
                existing paver patio. During your free consultation, we will discuss which options make
                the most sense for your space and how you plan to use it.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl shadow-xl">
              <img src={getImagePath("/pavers-22.webp")} alt="Freeform paver patio with fire pit and in-ground lighting by Jax Pavers" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceGallery images={galleryImages} title="Paver Patio Projects in Jacksonville" />

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} title="Frequently Asked Questions" />
    </ServicePageLayout>
  );
};

export default PatiosContent;

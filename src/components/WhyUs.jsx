// src/components/WhyUs.jsx
import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ShimmerButton";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-24"
      aria-labelledby="whyus-heading"
    >
      {/* Enhanced background with multiple layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="whyus-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            Why Homeowners Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Jacksonville climate is unique. We build paver systems that drain, breathe,
            and last—without the shifting, pooling, or fading you dread.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Left: value pillars */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Pillar cards */}
            {[
              {
                title: "Engineered Base, Not Just Pretty Pavers",
                copy:
                  "We overbuild the foundation: proper excavation, geotextile (where needed), compaction, and drainage-minded grading for Florida’s sand and rain.",
                bullets: [
                  "98% compaction targets",
                  "Open-graded or dense-graded base as appropriate",
                  "Laser-level set elevations",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4 20h16v-2H4v2Zm0-4h16v-2H4v2Zm0-4h16V10H4v2Zm0-6v2h16V6H4Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Detail-Driven Finishes",
                copy:
                  "Crisp borders, tight joints, and clean soldier courses. Edges restrained properly so your lines stay true over time.",
                bullets: [
                  "Coping & mitered corners dialed in",
                  "Consistent joint spacing",
                  "Polymeric sand installed correctly",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M3 5h18v2H3V5Zm0 6h12v2H3v-2Zm0 6h18v2H3v-2Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Climate-Smart Materials",
                copy:
                  "We spec pavers and sealers that play nice with salt pools, UV exposure, and coastal humidity—cool underfoot and color-stable.",
                bullets: [
                  "Travertine & porcelain specialists",
                  "Matte & enhanced sealers",
                  "Salt-safe components",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2C8 6 6 9 6 12a6 6 0 1 0 12 0c0-3-2-6-6-10Z"
                    />
                  </svg>
                ),
              },
            ].map((card) => (
              <motion.article
                key={card.title}
                variants={item}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gray-300 p-3 text-[#0A86C4] group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                    <p className="mt-2 text-gray-600">{card.copy}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-700">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none">
                        <path
                          fill="currentColor"
                          d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}

            {/* Mini process */}
            <motion.div
              variants={item}
              className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <p className="text-sm font-semibold tracking-wide text-[#0A86C4] uppercase">
                Our 3-Step Process
              </p>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Site & Design",
                    desc: "Measure, drainage check, pattern selection, HOA-ready plan.",
                  },
                  {
                    step: "2",
                    title: "Build & Detail",
                    desc: "Excavate, base prep, set lines, sanding, edge restraint.",
                  },
                  {
                    step: "3",
                    title: "Protect & Handover",
                    desc: "Clean, seal (optional), care guide, warranty activation.",
                  },
                ].map((s) => (
                  <div key={s.step} className="rounded-xl bg-black p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A86C4] text-white font-bold">
                        {s.step}
                      </div>
                      <h4 className="font-semibold text-white">{s.title}</h4>
                    </div>
                    <p className="mt-2 text-[#0A86C4] font-semibold">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: proof / sticky card */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-28 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "250+", v: "Projects in Jax" },
                  { k: "5.0★", v: "Avg. homeowner rating" },
                  { k: "10-yr", v: "Workmanship warranty" },
                  { k: "2-3 wk", v: "Typical lead time" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-gray-300 p-4 text-center">
                    <div className="text-2xl font-extrabold text-gray-900">{s.k}</div>
                    <div className="text-sm text-gray-600">{s.v}</div>
                  </div>
                ))}
              </div>

              {/* Warranty / badge row */}
              <div className="mt-6 flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0A86C4]" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M12 2 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-3Zm0 17.5A8.6 8.6 0 0 1 5 11V6.3l7-2.3 7 2.3V11a8.6 8.6 0 0 1-7 8.5Z"
                  />
                </svg>
                <p className="text-sm text-gray-700">
                  Licensed & Insured • Manufacturer-approved install methods
                </p>
              </div>

              {/* Trust checklist */}
              <ul className="mt-4 space-y-2 text-gray-700">
                {[
                  "HOA-friendly designs & documentation",
                  "Drainage-first layouts to prevent pooling",
                  "Clean job sites — we protect landscaping",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none">
                      <path
                        fill="currentColor"
                        d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                      />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <ShimmerButton href="#quote">Get a Same-Day Estimate</ShimmerButton>
              </div>

              {/* Microcopy */}
              <p className="mt-2 text-center text-xs text-gray-500">
                Share your project details and dimensions — we'll provide a quick estimate.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

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
            Jacksonville climate is unique. We put happy customers over profits—every decision,
            from pricing to project timelines, is guided by what's best for you, not our bottom line.
            That means transparent quotes, no hidden fees, and solutions tailored to your needs—even
            if it means going the extra mile.
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
                title: "Our Craftsmanship: Built To Last, Backed By Neighbors.",
                copy:
                  "Master craftsmanship in every detail. We treat your project like our own home—using premium materials, time-tested techniques, and never cutting corners.",
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
                  "Professional grade edge restraints",
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

              {/* Call to action */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-gray-900">
                  Ready to transform your outdoor space?
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
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

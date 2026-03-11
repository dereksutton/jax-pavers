// src/components/WhyUs.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ShimmerButton from "./ShimmerButton";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ── Counting stat component ── */
const CountingStat = ({ value, suffix = "", label, icon, isInView, delay = 0 }) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const numericValue = parseFloat(value);
      const isDecimal = value.includes(".");
      const duration = 1600;
      const steps = 40;
      const stepTime = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        const progress = Math.min(current / steps, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = eased * numericValue;

        if (isDecimal) {
          setDisplay(currentValue.toFixed(1));
        } else {
          setDisplay(Math.round(currentValue).toString());
        }

        if (current >= steps) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className="flex-shrink-0 rounded-lg bg-[#0A86C4]/10 p-2.5 text-[#0A86C4]">
        {icon}
      </div>
      <div>
        <div className="text-xl font-extrabold text-gray-900">
          {display}{suffix}
        </div>
        <div className="text-xs font-medium text-gray-500">{label}</div>
      </div>
    </motion.div>
  );
};

const stats = [
  {
    value: "250",
    suffix: "+",
    label: "Projects in Jax",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: "5.0",
    suffix: "★",
    label: "Avg. homeowner rating",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    value: "10",
    suffix: "-yr",
    label: "Workmanship warranty",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    value: "2",
    suffix: "-3 wk",
    label: "Typical lead time",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.8 });

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
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Animated stat boxes */}
              <div ref={statsRef} className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <CountingStat
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    icon={stat.icon}
                    isInView={statsInView}
                    delay={i * 150}
                  />
                ))}
              </div>

              {/* Call to action card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-center">
                <p className="text-lg font-semibold text-gray-900">
                  Ready to transform your outdoor space?
                </p>

                <div className="mt-6 flex justify-center">
                  <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
                </div>

                {/* Microcopy */}
                <p className="mt-2 text-center text-xs text-gray-500">
                  Share your project details and dimensions — we'll provide a quick estimate.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

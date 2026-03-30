"use client";

// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";

const faqs = [
  {
    q: "What types of paver projects do you handle?",
    a: "We specialize in paver driveways, patios and courtyards, pool decks, outdoor kitchens, and pergola installations. We work with premium brands like Tremron and Belgard to deliver durable, beautiful results designed for the Florida climate.",
  },
  {
    q: "How much does paver installation cost?",
    a: "Every project is unique, so pricing depends on the scope of work, materials selected, and site conditions. We have a $7,500 project minimum for all installations. During your free consultation, we'll assess your space and provide a detailed, transparent quote with no hidden fees.",
  },
  {
    q: "How long does a typical paver installation take?",
    a: "Most residential projects take between 3 to 10 days depending on size and complexity. Driveways and patios are typically on the shorter end, while outdoor kitchens and larger pool deck projects may take longer. We'll provide a clear timeline in your proposal.",
  },
  {
    q: "Do you offer a warranty on your work?",
    a: "Yes. We stand behind our craftsmanship with a 10-year workmanship warranty on all installations. The paver manufacturers also provide their own product warranties. We're licensed and insured for your peace of mind.",
  },
  {
    q: "What areas in Jacksonville do you serve?",
    a: "We serve Jacksonville and the surrounding communities including Jacksonville Beach, Ponte Vedra Beach, Nocatee, Neptune Beach, St. Augustine, Atlantic Beach, St. Johns, Fruit Cove, Mandarin, Riverside, Fleming Island, Orange Park, and Green Cove Springs.",
  },
  {
    q: "How do I maintain my pavers after installation?",
    a: "Pavers are low-maintenance. We recommend periodic sweeping, rinsing with a garden hose, and re-sealing every 2 to 3 years to maintain color and protect against stains. Polymeric sand in the joints should be topped off as needed to prevent weed growth and ant activity.",
  },
  {
    q: "Do I need a permit for paver installation?",
    a: "In most cases, standard paver installations like driveways and patios don't require a permit in Duval County. However, projects involving structural elements, electrical, gas, or plumbing (such as outdoor kitchens) may require permits. We handle the permitting process for you when needed.",
  },
  {
    q: "What happens during the free consultation?",
    a: "We visit your property, listen to your ideas, take measurements, and discuss material options, design possibilities, and budget. You'll receive a detailed written proposal with transparent pricing and a clear project timeline. No pressure, no obligation.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden" aria-labelledby="faq-heading">
      {/* Rich background */}
      <div className="absolute inset-0 -z-10 bg-[#eef1f6]" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(800px_400px_at_30%_20%,rgba(10,134,196,0.12),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(600px_300px_at_80%_80%,rgba(0,51,102,0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="mx-auto max-w-3xl px-4 py-20 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
            Got Questions?
          </p>
          <div className="mx-auto mt-2 h-px w-12 bg-[#0A86C4]/40" />
          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Common questions about our paver installation services in Jacksonville.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "bg-white border-[#0A86C4]/20 shadow-md"
                    : "bg-white/70 border-gray-200/80 shadow-sm hover:bg-white hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900 md:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-[#0A86C4] text-white" : "bg-[#0A86C4]/10 text-[#0A86C4]"
                    }`}
                  >
                    <motion.svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-14 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-8 text-center md:flex-row md:text-left"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          <div>
            <p className="text-xl mb-1 font-semibold text-white">
              Still have questions?
            </p>
            <p className="text-base text-gray-300">
              We're happy to answer them. Book a free consultation or give us a call.
            </p>
          </div>
          <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

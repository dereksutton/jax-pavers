// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';

const services = [
  {
    title: "Summer Kitchens",
    blurb:
      "Create the ultimate outdoor entertaining space with fully equipped summer kitchens designed for Florida living.",
    backgroundImage: getImagePath("/services-card1.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8 5h2v5H8V5Zm0 7h2v7H8v-7Zm4-7h2v5h-2V5Zm0 7h2v7h-2v-7Zm4-7h2v5h-2V5Zm0 7h2v7h-2v-7ZM4 3v18h16V3H4ZM2 3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3Z"
        />
      </svg>
    ),
  },
  {
    title: "Driveways",
    blurb:
      "Durable, code-compliant paver driveways that stand up to Florida heat, rain, and heavy vehicles.",
    backgroundImage: getImagePath("/services-card2.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 20h18v-2H3v2Zm2-4h14l-2.2-9.4A2 2 0 0 0 14.85 5H9.15a2 2 0 0 0-1.95 1.6L5 16Zm6-7h2v2h-2V9Zm0 4h2v2h-2v-2Z"
        />
      </svg>
    ),
  },
  {
    title: "Patios & Courtyards",
    blurb:
      "Transform your backyard into an elegant extension of your home with premium paver installations built to last.",
    backgroundImage: getImagePath("/services-card3.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z"
        />
      </svg>
    ),
  },
  {
    title: "Pool Decks",
    blurb:
      "Cool-underfoot leathered marble and porcelain paver systems with slip resistance and expansion joints dialed in.",
    backgroundImage: getImagePath("/services-card4.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 6h16v2H4V6Zm0 10h16v2H4v-2Zm0-5h16v2H4v-2Z"
        />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative scroll-mt-24"
      aria-labelledby="services-heading"
    >
      {/* Enhanced background with gradient layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(10,134,196,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Built for Jacksonville Living
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Climate-ready paver solutions designed for North Florida—installed with
            precision, proper base prep, and clean finishing details.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((svc) => (
            <motion.article
              key={svc.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#0A86C4]/50 hover:scale-[1.02] min-h-[320px] sm:min-h-[300px] lg:min-h-[320px]"
              style={{
                backgroundImage: `url(${svc.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/45" />
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Top section with icon and title - centered */}
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-xl bg-[#0A86C4] p-3 text-black transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0875B1]">
                    {svc.icon}
                  </div>
                  <h3 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-white mt-3">
                    {svc.title}
                  </h3>
                </div>

                {/* Middle section with description - centered with max-width */}
                <div className="flex-1 flex items-center justify-center mt-6">
                  <p className="text-gray-100 font-medium leading-relaxed text-base text-center max-w-[250px] sm:max-w-none">
                    {svc.blurb}
                  </p>
                </div>
              </div>

              {/* Hover edge highlight */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-white via-blue-200 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-12 flex flex-col items-center text-lg justify-between gap-4 rounded-2xl p-6 text-center md:flex-row md:text-left overflow-hidden"
        >
          {/* Background gradients matching RecentWork component */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          
          <div>
            <p className="text-lg mb-2 font-semibold text-white">
              Ready to transform your outdoor living space?
            </p>
            <p className="text-gray-300">
              Get expert design advice and a detailed quote for your dream project.
            </p>
          </div>
          <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';

const services = [
  {
    title: "Driveways",
    blurb:
      "Durable, code-compliant paver driveways that stand up to Florida heat, rain, and heavy vehicles.",
    points: ["Concrete & clay pavers", "Drainage-smart base prep", "HOA-friendly designs"],
    backgroundImage: getImagePath("/services-card1.png"),
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
    title: "Pool Decks",
    blurb:
      "Cool-underfoot leathered marble and porcelain paver systems with slip resistance and expansion joints dialed in.",
    points: ["Leathered marble & porcelain", "Coping & mitered edges", "Salt-pool safe"],
    backgroundImage: getImagePath("/services-card2.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 6h16v2H4V6Zm0 10h16v2H4v-2Zm0-5h16v2H4v-2Z"
        />
      </svg>
    ),
  },
  {
    title: "Patios & Courtyards",
    blurb:
      "Transform your backyard into an elegant extension of your home with premium paver installations built to last.",
    points: ["Herringbone & ashlar patterns", "Integrated lighting", "Drainage & grading"],
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
    title: "Fire Pits",
    blurb:
      "Custom fire pit installations that create the perfect gathering spot for cool Florida evenings and year-round entertainment.",
    points: ["Natural gas & wood-burning", "Integrated seating walls", "Heat-resistant paver surrounds"],
    backgroundImage: getImagePath("/services-card4.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Walkways & Steps",
    blurb:
      "Utilize all sections of your property with beautifully crafted pathways and steps that connect your spaces seamlessly.",
    points: ["Code-true risers", "Border soldier course", "Curves & garden ties"],
    backgroundImage: getImagePath("/services-card5.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 18h16v2H4v-2Zm0-5h12v2H4v-2Zm0-5h8v2H4V8Z"
        />
      </svg>
    ),
  },
  {
    title: "Sealing & Restoration",
    blurb:
      "Clean, sand, and seal with breathable, UV-stable sealers that enrich color without making surfaces slick.",
    points: ["Efflorescence removal", "Polymeric re-sand", "Matte & wet-look options"],
    backgroundImage: getImagePath("/services-card6.png"),
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10Z"
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

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
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
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((svc) => (
            <motion.article
              key={svc.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#0A86C4]/50 hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${svc.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/45" />
              
              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#0A86C4] p-3 text-black transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0875B1]">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-gray-100 font-medium">{svc.blurb}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {svc.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-200">
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 flex-none text-[#0A86C4]"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                        />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
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
              Not sure which service fits your project?
            </p>
            <p className="text-gray-300">
              We'll assess drainage, soil, and usage to recommend the right system.
            </p>
          </div>
          <ShimmerButton href="#quote">Get My Free Assessment</ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

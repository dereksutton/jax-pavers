// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';

const services = [
  {
    title: "Outdoor Kitchens",
    blurb:
      "Create the ultimate outdoor entertaining space with fully equipped outdoor kitchens designed for Florida living.",
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
      "Elevate your poolside with stunning paver decks, expertly crafted with premium materials and precision.",
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

// Brand logos
const brandLogos = [
  { name: "Tremron", src: getImagePath("/tremron-logo.png") },
  { name: "Belgard", src: getImagePath("/belgard-logo.png") },
  { name: "TrueFlame", src: getImagePath("/trueflame-logo.png") },
  { name: "SurfaceLogix", src: getImagePath("/surfacelogix-logo.png") },
  { name: "Trident", src: getImagePath("/trident-logo.png") },
];

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

        {/* Brand Logos Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-semibold uppercase tracking-widest text-gray-500 mb-8">
            Premium Materials From Trusted Brands
          </p>

          {/* Carousel Container */}
          <div className="relative overflow-hidden py-4">
            {/* Logo grid with stagger animations */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center gap-6 sm:gap-8"
            >

              {/* Mobile: First two logos side by side */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex sm:hidden justify-center items-center gap-8 w-full px-8"
              >
                <motion.img
                  whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={brandLogos[0].src}
                  alt={`${brandLogos[0].name} logo`}
                  className="h-20 w-auto max-w-[140px] object-contain grayscale"
                />
                <motion.img
                  whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={brandLogos[1].src}
                  alt={`${brandLogos[1].name} logo`}
                  className="h-20 w-auto max-w-[140px] object-contain grayscale"
                />
              </motion.div>

              {/* Mobile: Wide logos - one per row */}
              {[brandLogos[2], brandLogos[3], brandLogos[4]].map((logo) => (
                <motion.div
                  key={logo.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex sm:hidden justify-center items-center w-full px-8"
                >
                  <motion.img
                    whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                    transition={{ duration: 0.3 }}
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="h-16 w-auto max-w-full object-contain grayscale"
                  />
                </motion.div>
              ))}

              {/* Desktop: Row 1 - 2 larger logos */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="hidden sm:flex justify-center items-center gap-16"
              >
                <motion.img
                  whileHover={{ scale: 1.08, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={brandLogos[0].src}
                  alt={`${brandLogos[0].name} logo`}
                  className="h-24 md:h-28 w-auto object-contain grayscale"
                />
                <motion.img
                  whileHover={{ scale: 1.08, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={brandLogos[1].src}
                  alt={`${brandLogos[1].name} logo`}
                  className="h-24 md:h-28 w-auto object-contain grayscale"
                />
              </motion.div>

              {/* Desktop: Row 2 - 3 logos */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="hidden sm:flex justify-center items-center gap-8 md:gap-12"
              >
                <motion.img
                  whileHover={{ scale: 1.08, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={brandLogos[2].src}
                  alt={`${brandLogos[2].name} logo`}
                  className="h-18 md:h-20 w-auto object-contain grayscale"
                />
                <motion.img
                  whileHover={{ scale: 1.08, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={brandLogos[3].src}
                  alt={`${brandLogos[3].name} logo`}
                  className="h-18 md:h-20 w-auto object-contain grayscale"
                />
                <motion.img
                  whileHover={{ scale: 1.08, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src={brandLogos[4].src}
                  alt={`${brandLogos[4].name} logo`}
                  className="h-18 md:h-20 w-auto object-contain grayscale"
                />
              </motion.div>
            </motion.div>
          </div>
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
              Ready to elevate your curb appeal?
            </p>
            <p className="text-gray-300">
              We'll build the paver driveway of your dreams with lasting beauty and durability.
            </p>
          </div>
          <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

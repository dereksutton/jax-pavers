"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShimmerButton from "./ShimmerButton";
import getImagePath from "../utils/imagePaths";

const relatedContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const relatedItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const ServicePageLayout = ({
  heroImage,
  heroAlt,
  heroTitle,
  heroSubtitle,
  children,
  relatedServices = [],
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Hero Banner */}
      <header
        className="relative h-[55vh] min-h-[420px] w-full overflow-hidden"
        role="banner"
      >
        <picture className="absolute inset-0 w-full h-full">
          <img
            src={getImagePath(heroImage)}
            alt={heroAlt}
            className="w-full h-full object-cover"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
        </picture>

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Bottom gradient fade for text legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Animated hero text overlay */}
        {heroTitle && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {heroTitle}
            </motion.h1>

            {heroSubtitle && (
              <motion.p
                className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                {heroSubtitle}
              </motion.p>
            )}
          </div>
        )}
      </header>

      {/* Thin visual connector line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0A86C4]/20 to-transparent" />

      {/* Main Content — full-bleed, children manage their own widths */}
      <main>
        {children}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100" />
            <div className="absolute inset-0 -z-10 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(10,134,196,0.08),transparent_70%)]" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="block h-px w-8 bg-[#0A86C4]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#0A86C4]">
                    Related Services
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                  Explore More Solutions
                </h2>
              </motion.div>

              {/* Staggered cards */}
              <motion.div
                variants={relatedContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {relatedServices.map((svc) => (
                  <motion.div key={svc.href} variants={relatedItem}>
                    <Link
                      href={svc.href}
                      className="group relative block overflow-hidden rounded-2xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#0A86C4]/50 hover:scale-[1.02] min-h-[280px]"
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${getImagePath(svc.image)})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/45 transition-all duration-300 group-hover:from-black/40 group-hover:via-black/30 group-hover:to-black/35" />

                      <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {svc.title}
                        </h3>
                        <p className="text-sm text-gray-200 leading-relaxed mb-4">
                          {svc.blurb}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A86C4] bg-white/90 rounded-full px-4 py-1.5 self-start transition-colors group-hover:bg-white">
                          Learn More
                          <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>

                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-white via-blue-200 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Bottom CTA Bar — full-bleed */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-4 py-10 text-center md:flex-row md:px-8 md:text-left"
          >
            <div>
              <p className="text-xl mb-1 font-semibold text-white">
                Ready to get started?
              </p>
              <p className="text-base text-gray-300">
                Book a free consultation and get a detailed, no-obligation quote.
              </p>
            </div>
            <ShimmerButton href="/#quote">Book a Consultation</ShimmerButton>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicePageLayout;

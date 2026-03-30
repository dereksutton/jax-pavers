"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ShimmerButton from "../ShimmerButton";
import getImagePath from "../../utils/imagePaths";

const areas = [
  {
    name: "Jacksonville",
    description:
      "As Jacksonville's premier paver contractor, we serve homeowners across Duval County with expert driveway, patio, pool deck, outdoor kitchen, and pergola installations. From the Southside to the Northside, Arlington to the Westside, our team delivers precision craftsmanship backed by a 10-year workmanship warranty.",
  },
  {
    name: "Ponte Vedra Beach",
    description:
      "Ponte Vedra Beach homeowners trust Jax Pavers for luxury hardscaping that matches the community's upscale aesthetic. We design and install custom paver driveways, elegant patios, and resort-style pool decks using premium Tremron and Belgard materials built to withstand the coastal climate.",
  },
  {
    name: "Nocatee",
    description:
      "Nocatee's master-planned community is one of the fastest-growing in Northeast Florida, and we're proud to help homeowners personalize their outdoor spaces. From new-construction driveway installations to backyard patio retreats, our work complements Nocatee's modern Florida lifestyle.",
  },
  {
    name: "St. Augustine & St. Augustine Beach",
    description:
      "In the nation's oldest city, we install pavers that honor the area's timeless character while standing up to salt air and coastal weather. Whether you're upgrading a historic district driveway or building a beachside patio, Jax Pavers has the expertise for St. Augustine's unique environment.",
  },
  {
    name: "Jacksonville Beach, Neptune Beach & Atlantic Beach",
    description:
      "The Jacksonville Beaches communities demand hardscaping that can handle salt spray, sand, and heavy foot traffic. We specialize in slip-resistant pool decks, durable beach-style driveways, and outdoor kitchens perfect for the coastal entertaining lifestyle.",
  },
  {
    name: "Mandarin",
    description:
      "Mandarin's established neighborhoods feature some of Jacksonville's most beautiful homes, and our paver installations help homeowners elevate their curb appeal and outdoor living spaces. We frequently install driveways, patios, and pool decks throughout Mandarin and the surrounding St. Johns corridor.",
  },
  {
    name: "St. Johns & Fruit Cove",
    description:
      "The St. Johns County corridor — including Fruit Cove, Julington Creek, and Switzerland — is booming with new homes and families looking to create their perfect outdoor space. We install everything from paver driveways to complete outdoor kitchen and pergola packages throughout this growing area.",
  },
  {
    name: "Fleming Island & Orange Park",
    description:
      "Clay County homeowners in Fleming Island and Orange Park rely on Jax Pavers for quality hardscaping at competitive prices. Our installations include paver driveways that handle Florida's heavy rains, patios designed for year-round entertaining, and pool decks built for safety and style.",
  },
  {
    name: "Riverside & San Marco",
    description:
      "Jacksonville's historic urban neighborhoods present unique hardscaping challenges that our experienced team handles with care. We work with homeowners in Riverside, Avondale, San Marco, and Springfield to install pavers that complement the architectural character of these beloved communities.",
  },
  {
    name: "Green Cove Springs",
    description:
      "Serving homeowners in Green Cove Springs and surrounding Clay County with the same premium paver installation we bring to every project. Our team travels throughout the greater Jacksonville area to deliver quality craftsmanship, no matter where you call home.",
  },
];

const ServiceAreasContent = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            type="image/webp"
            srcSet={`${getImagePath("/pavers-hero-640w.webp")} 640w, ${getImagePath("/pavers-hero-1024w.webp")} 1024w, ${getImagePath("/pavers-hero-1920w.webp")} 1920w`}
            sizes="100vw"
          />
          <img
            src={getImagePath("/pavers-hero.png")}
            alt="Jax Pavers service areas across Northeast Florida"
            className="w-full h-full object-cover"
            width={1536}
            height={1024}
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.50)",
            mixBlendMode: "multiply",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.p
            className="text-lg uppercase text-white font-semibold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proudly Serving Northeast Florida
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our Service Areas
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Premium paver installation across Jacksonville and surrounding
            communities. Licensed, insured, and backed by our 10-year warranty.
          </motion.p>
        </div>
      </header>

      <main className="overflow-x-hidden">
        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Jacksonville&apos;s Trusted Paver Contractor — Serving All of Northeast Florida
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Jax Pavers provides expert paver installation throughout Jacksonville and the greater Northeast Florida region. From{" "}
                <Link href="/driveways" className="text-[#0A86C4] hover:underline">paver driveways</Link> and{" "}
                <Link href="/patios" className="text-[#0A86C4] hover:underline">patios</Link> to{" "}
                <Link href="/pool-decks" className="text-[#0A86C4] hover:underline">pool decks</Link>,{" "}
                <Link href="/outdoor-kitchens" className="text-[#0A86C4] hover:underline">outdoor kitchens</Link>, and{" "}
                <Link href="/pergolas" className="text-[#0A86C4] hover:underline">pergolas</Link>, we bring the same
                premium craftsmanship and 10-year workmanship warranty to every project, no matter
                which community you call home.
              </p>
              <p className="text-lg text-gray-700">
                Whether you&apos;re in the heart of Jacksonville, along the beaches, or in the
                growing communities of St. Johns and Clay County, our team is ready to transform
                your outdoor living space with premium Tremron and Belgard pavers engineered for
                Florida&apos;s climate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {areas.map((area, index) => (
                <motion.div
                  key={area.name}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A86C4]/10">
                      <svg
                        className="w-5 h-5 text-[#0A86C4]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#003366] to-[#0A86C4]">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Outdoor Space?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                No matter where you are in Northeast Florida, our team is ready to bring your
                vision to life. Get a free consultation and quote today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ShimmerButton href="/#quote">Get My Free Quote</ShimmerButton>
                <a
                  href="tel:19044451261"
                  className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-gray-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (904) 445-1261
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceAreasContent;

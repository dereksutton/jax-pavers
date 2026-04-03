"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ShimmerButton from "./ShimmerButton";
import getImagePath from "../utils/imagePaths";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We come to your property, walk the space with you, take measurements, and talk through what you have in mind. No sales pitch, no pressure. Just an honest conversation about what's possible and what it will take to get there.",
  },
  {
    number: "02",
    title: "Design & Estimate",
    description:
      "You'll get a detailed proposal with material options, a layout tailored to your home, and straightforward pricing. We work with Tremron and Belgard pavers because they're built for Florida and they look incredible for years.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Our crew handles it all: excavation, base prep, paver laying, and finishing. We follow manufacturer specs and local codes to the letter. The base work is where most contractors cut corners. We don't.",
  },
  {
    number: "04",
    title: "Walkthrough & Warranty",
    description:
      "Before we pack up, we walk every inch of the project with you. If something isn't right, we fix it on the spot. Once you sign off, your 10-year workmanship warranty kicks in.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden" id="process">
      {/* Desktop: CSS bg-fixed parallax (broken on mobile browsers) */}
      <div
        className="absolute inset-0 -top-[20%] -bottom-[20%] bg-cover bg-center bg-fixed hidden md:block"
        style={{ backgroundImage: `url(${getImagePath("/pavers-33.webp")})` }}
        aria-hidden="true"
      />
      {/* Mobile: Framer Motion scroll-based parallax */}
      <motion.div
        className="absolute inset-0 -top-[10%] -bottom-[10%] md:hidden"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <img
          src={getImagePath("/pavers-33.webp")}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003366]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,134,196,0.3),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-3">
            How We Work
          </p>
          <div className="mx-auto h-px w-12 bg-white/30 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            From First Call to Finished Project
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Every Jax Pavers project follows the same four steps. No surprises, no hidden costs,
            and no guessing about what comes next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 hover:bg-white/[0.16] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-extrabold text-white/20 mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/75 leading-relaxed text-[0.95rem]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Local relevance content */}
        <motion.div
          className="mt-16 md:mt-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-6">
            Built for Jacksonville, Backed by a Decade
          </h2>
          <div className="space-y-4 text-white/80 text-[1.05rem] leading-relaxed">
            <p>
              Anyone can lay pavers. The difference is whether they'll still look great five
              years from now. Jacksonville's combination of summer heat, sandy soil, and
              afternoon downpours will expose every shortcut in a hardscape installation. We
              know this because we live here, we work here, and we've seen what happens when
              the base prep gets rushed or the wrong materials get spec'd for our climate.
            </p>
            <p>
              That's why we only install pavers from{" "}
              <strong className="text-white">Tremron</strong> and{" "}
              <strong className="text-white">Belgard</strong>. Both companies manufacture
              products tested for Florida conditions: UV-stable color, rated for vehicular
              traffic, and designed to flex with the ground instead of cracking under thermal
              expansion. Paired with proper compaction, drainage grading, and polymeric joint
              sand, our installations hold up to everything Northeast Florida throws at them.
            </p>
            <p>
              We build{" "}
              <Link href="/driveways" className="text-white underline decoration-white/40 hover:decoration-white transition-colors">
                paver driveways
              </Link>,{" "}
              <Link href="/patios" className="text-white underline decoration-white/40 hover:decoration-white transition-colors">
                patios
              </Link>,{" "}
              <Link href="/pool-decks" className="text-white underline decoration-white/40 hover:decoration-white transition-colors">
                pool decks
              </Link>,{" "}
              <Link href="/outdoor-kitchens" className="text-white underline decoration-white/40 hover:decoration-white transition-colors">
                outdoor kitchens
              </Link>, and{" "}
              <Link href="/pergolas" className="text-white underline decoration-white/40 hover:decoration-white transition-colors">
                pergolas
              </Link>{" "}
              across{" "}
              <Link href="/service-areas" className="text-white underline decoration-white/40 hover:decoration-white transition-colors">
                Jacksonville and all of Northeast Florida
              </Link>. Every project starts with a free consultation and comes with our
              10-year workmanship warranty.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-8 text-center md:flex-row md:text-left"
        >
          <div>
            <p className="text-xl mb-1 font-semibold text-white">
              Ready to get started?
            </p>
            <p className="text-base text-white/70">
              Tell us about your project and we'll bring the plan to you. Free estimates, no obligation.
            </p>
          </div>
          <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

"use client";

// src/components/AboutUs.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from "../utils/imagePaths";

const AboutUs = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about-us"
      className="relative scroll-mt-24 overflow-hidden"
      aria-labelledby="aboutus-heading"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#eef1f6]" />
      {/* Cross-hatch texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      {/* Soft radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(800px_400px_at_30%_50%,rgba(10,134,196,0.04),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
            About Us
          </p>
          <div className="mt-2 h-px w-12 bg-[#0A86C4]/40" />
        </motion.div>

        {/* Split layout: text left, image right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <h2
              id="aboutus-heading"
              className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-[2.65rem] lg:leading-tight"
            >
              We Build Outdoor Spaces
              <span className="block text-[#0A86C4]">That Speak for Themselves</span>
            </h2>

            <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-gray-600">
              <p>
                Jax Pavers was built on a straightforward idea: Jacksonville homeowners
                deserve outdoor spaces done right — no shortcuts, no guesswork, no
                settling. What started as a small crew with a passion for precision
                hardscaping has grown into one of North Florida's most trusted paver
                installation companies.
              </p>
              <p>
                Every project we take on gets the same level of attention — from the
                base prep to the final joint sand. We're hands-on from day one, working
                directly with you from the initial walkthrough to the finished product.
                That personal accountability isn't just how we work — it's why our
                clients keep coming back and referring their neighbors.
              </p>
              <p>
                Whether it's a paver driveway that sets the tone for your entire
                property, a backyard patio built for weekend gatherings, or a full
                outdoor kitchen designed for Florida living — we approach every job
                with the same standard: build it like it's our own home.
              </p>
            </div>

            {/* CTA — visible only on desktop, stays under text */}
            <div className="relative mt-10 hidden lg:flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 text-center md:flex-row md:text-left">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
              <div>
                <p className="text-xl mb-1 font-semibold text-white">
                  Let's bring your vision to life.
                </p>
                <p className="text-base text-gray-300">
                  Tell us what you have in mind — we'll handle the rest.
                </p>
              </div>
              <div className="flex-shrink-0">
                <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
              </div>
            </div>
          </motion.div>

          {/* Right: image with animated frame */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-2 mx-auto mt-3 max-w-[calc(100%-2rem)] lg:mx-0 lg:mt-0 lg:max-w-none"
          >
            {/* Self-drawing offset border */}
            <motion.div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl">
              <svg className="absolute inset-0 h-full w-full overflow-visible" fill="none">
                <motion.rect
                  x="1" y="1"
                  width="calc(100% - 2px)"
                  height="calc(100% - 2px)"
                  rx="16"
                  stroke="#0A86C4"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 1.8, delay: 0.3, ease: "easeInOut" },
                    },
                  }}
                />
              </svg>
            </motion.div>

            {/* Self-drawing corner accent */}
            <svg
              className="absolute -top-4 -left-4 h-20 w-20"
              viewBox="0 0 80 80"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M0 80 L0 8 Q0 0 8 0 L80 0"
                stroke="#0A86C4"
                strokeWidth="3.5"
                strokeOpacity="0.3"
                fill="none"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 1.2, delay: 0.6, ease: "easeOut" },
                  },
                }}
              />
            </svg>

            {/* Image with 3D tilt entrance */}
            <motion.div
              ref={imageRef}
              className="relative overflow-hidden rounded-2xl shadow-xl"
              style={{ perspective: 800 }}
              variants={{
                hidden: {
                  opacity: 0,
                  rotateX: 12,
                  rotateY: -6,
                  scale: 0.92,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1,
                  transition: { duration: 1, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <img
                src={getImagePath("/pavers-1.webp")}
                alt="Completed paver installation project by Jax Pavers in Jacksonville, FL"
                className="h-full w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
                loading="lazy"
                width={1536}
                height={1024}
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* CTA — visible only on mobile, positioned below image */}
          <div className="relative flex lg:hidden order-3 flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 text-center md:flex-row md:text-left">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            <div>
              <p className="text-xl mb-1 font-semibold text-white">
                Let's bring your vision to life.
              </p>
              <p className="text-base text-gray-300">
                Tell us what you have in mind — we'll handle the rest.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

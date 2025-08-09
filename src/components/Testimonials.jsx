// src/components/Testimonials.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';

const STARS = 5;

const reviews = [
  {
    id: "r1",
    name: "Melissa R.",
    location: "Mandarin, Jacksonville",
    rating: 5,
    headline: "Flawless pool deck — cool underfoot and gorgeous.",
    body:
      "They handled drainage, coping, and sealing like pros. We hosted the next weekend with zero puddling after a storm.",
    avatar: null,
    media: { type: "image", src: getImagePath("/work-pooldeck.jpg"), alt: "Travertine pool deck after install" },
    date: "2025-05-12",
  },
  {
    id: "r2",
    name: "David P.",
    location: "Ponte Vedra",
    rating: 5,
    headline: "Driveway transformed our curb appeal.",
    body:
      "Herringbone with a crisp border — laser-straight lines. Crew protected the landscaping and left everything spotless.",
    avatar: null,
    media: { type: "image", src: getImagePath("/work-driveway1.jpg"), alt: "Herringbone driveway with border" },
    date: "2025-04-03",
  },
  {
    id: "r3",
    name: "Lauren T.",
    location: "Nocatee",
    rating: 5,
    headline: "Walkway & steps feel safe and solid.",
    body:
      "Even risers, no wobble, and they matched our existing pavers perfectly. Communication was excellent throughout.",
    avatar: null,
    media: { type: "image", src: getImagePath("/work-walkway.jpg"), alt: "Curved walkway with soldier course" },
    date: "2025-03-18",
  },
  {
    id: "r4",
    name: "Jorge M.",
    location: "Riverside",
    rating: 5,
    headline: "Patio is now our favorite room in the house.",
    body:
      "They suggested an ashlar pattern that made the space feel bigger. Sealer enhanced the color without getting slick.",
    avatar: null,
    media: { type: "image", src: getImagePath("/work-patio1.jpg"), alt: "Ashlar patio with seating" },
    date: "2025-02-09",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const StarRow = ({ rating }) => (
  <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: STARS }).map((_, i) => {
      const filled = i < rating;
      return (
        <svg
          key={i}
          className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.379-1.81.588-1.81H7.03a1 1 0 0 0 .95-.69l1.07-3.292Z" />
        </svg>
      );
    })}
  </div>
);

const Testimonials = () => {
  const [modal, setModal] = useState(null); // { src, alt }
  const close = useCallback(() => setModal(null), []);

  // Allow ESC to close modal
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    if (modal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal, close]);

  return (
    <section id="testimonials" className="relative scroll-mt-24" aria-labelledby="testimonials-heading">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(1000px_550px_at_50%_-10%,rgba(10,134,196,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Jacksonville Homeowners Love Their New Spaces
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real feedback from recent driveway, patio, and pool deck projects across North Florida.
          </p>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-gray-900 p-4 shadow-sm"
        >
          <StarRow rating={5} />
          <p className="text-md text-gray-200">
            <span className="font-semibold">Proudly maintaining a Google 5-star rating</span>
          </p>
        </motion.div>

        {/* Featured + grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured card (spans 2 cols on desktop) */}
          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <button
                className="group relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden"
                onClick={() =>
                  setModal({ src: reviews[0].media.src, alt: reviews[0].media.alt })
                }
                aria-label="Open full-size testimonial image"
              >
                <img
                  src={reviews[0].media.src}
                  alt={reviews[0].media.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0A86C4] via-sky-400 to-[#0A86C4] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center ring-2 ring-white">
                    <span className="text-gray-600 font-semibold text-lg">
                      {reviews[0].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{reviews[0].name}</p>
                    <p className="text-sm text-gray-600">{reviews[0].location}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <StarRow rating={reviews[0].rating} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{reviews[0].headline}</h3>
                <p className="mt-2 text-gray-700">{reviews[0].body}</p>
                <p className="mt-3 text-xs text-gray-500">Completed on {new Date(reviews[0].date).toLocaleDateString()}</p>
                <div className="mt-6">
                  <ShimmerButton href="#quote">Get a Same-Day Estimate</ShimmerButton>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Supporting review cards */}
          <div className="space-y-6">
            {reviews.slice(1).map((r) => (
              <motion.article
                key={r.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center ring-2 ring-white">
                    <span className="text-gray-600 font-semibold text-sm">
                      {r.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{r.name}</p>
                    <p className="text-sm text-gray-600">{r.location}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <StarRow rating={r.rating} />
                </div>
                <h4 className="mt-3 font-semibold text-gray-900">{r.headline}</h4>
                <p className="mt-2 text-gray-700">{r.body}</p>

                {/* Media thumb */}
                {r.media?.src && (
                  <button
                    onClick={() => setModal({ src: r.media.src, alt: r.media.alt })}
                    className="mt-4 block overflow-hidden rounded-xl"
                    aria-label={`Open image for ${r.name}'s review`}
                  >
                    <img
                      src={r.media.src}
                      alt={r.media.alt}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA bar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl p-6 text-center text-xl md:flex-row md:text-left overflow-hidden"
        >
          {/* Background gradients matching other CTAs */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          
          <div>
            <p className="text-2xl font-semibold text-white">Ready to love your outdoor space?</p>
            <p className="text-gray-300">We'll review photos and dimensions, then share a clear plan & estimate.</p>
          </div>
          <ShimmerButton href="#quote">Get My Quote</ShimmerButton>
        </motion.div>
      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Review media preview"
            onClick={close}
          >
            <div className="relative mx-4 w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={close}
                className="absolute -top-10 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Close"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
                <div className="aspect-[16/9]">
                  <img src={modal.src} alt={modal.alt} className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;

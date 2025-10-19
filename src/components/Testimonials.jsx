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
            <span className="font-semibold">Proudly maintaining a 5-star Google rating</span>
          </p>
        </motion.div>

        {/* Bento Box Grid Layout */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Featured large card - spans 2 cols and 2 rows */}
          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-2 lg:row-span-2 group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl"
          >
            <button
              className="group relative aspect-[16/9] w-full overflow-hidden bg-gray-100"
              onClick={() =>
                setModal({ src: reviews[0].media.src, alt: reviews[0].media.alt })
              }
              aria-label="Open full-size testimonial image"
            >
              <img
                src={reviews[0].media.src}
                alt={reviews[0].media.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0A86C4] to-sky-400 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {reviews[0].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{reviews[0].name}</p>
                    <p className="text-sm text-gray-600">{reviews[0].location}</p>
                  </div>
                </div>
                <StarRow rating={reviews[0].rating} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{reviews[0].headline}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{reviews[0].body}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-gray-500">Completed {new Date(reviews[0].date).toLocaleDateString()}</p>
                <ShimmerButton href="#quote">Get Quote</ShimmerButton>
              </div>
            </div>
          </motion.article>

          {/* Second testimonial - horizontal card */}
          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-2 group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row">
              <button
                className="relative aspect-video sm:aspect-square sm:w-48 flex-shrink-0 overflow-hidden bg-gray-100"
                onClick={() =>
                  setModal({ src: reviews[1].media.src, alt: reviews[1].media.alt })
                }
                aria-label={`Open image for ${reviews[1].name}'s review`}
              >
                <img
                  src={reviews[1].media.src}
                  alt={reviews[1].media.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <div className="flex-1 p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {reviews[1].name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{reviews[1].name}</p>
                    <p className="text-sm text-gray-600">{reviews[1].location}</p>
                  </div>
                </div>
                <StarRow rating={reviews[1].rating} />
                <h4 className="mt-3 font-bold text-gray-900">{reviews[1].headline}</h4>
                <p className="mt-2 text-sm text-gray-700">{reviews[1].body}</p>
              </div>
            </div>
          </motion.article>

          {/* Third testimonial - vertical card */}
          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
          >
            <button
              className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100"
              onClick={() =>
                setModal({ src: reviews[2].media.src, alt: reviews[2].media.alt })
              }
              aria-label={`Open image for ${reviews[2].name}'s review`}
            >
              <img
                src={reviews[2].media.src}
                alt={reviews[2].media.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </button>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {reviews[2].name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{reviews[2].name}</p>
                  <p className="text-xs text-gray-600">{reviews[2].location}</p>
                </div>
              </div>
              <StarRow rating={reviews[2].rating} />
              <h4 className="mt-2 font-bold text-gray-900 text-sm">{reviews[2].headline}</h4>
              <p className="mt-2 text-xs text-gray-700 line-clamp-3">{reviews[2].body}</p>
            </div>
          </motion.article>

          {/* Fourth testimonial - vertical card */}
          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
          >
            <button
              className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100"
              onClick={() =>
                setModal({ src: reviews[3].media.src, alt: reviews[3].media.alt })
              }
              aria-label={`Open image for ${reviews[3].name}'s review`}
            >
              <img
                src={reviews[3].media.src}
                alt={reviews[3].media.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </button>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {reviews[3].name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{reviews[3].name}</p>
                  <p className="text-xs text-gray-600">{reviews[3].location}</p>
                </div>
              </div>
              <StarRow rating={reviews[3].rating} />
              <h4 className="mt-2 font-bold text-gray-900 text-sm">{reviews[3].headline}</h4>
              <p className="mt-2 text-xs text-gray-700 line-clamp-3">{reviews[3].body}</p>
            </div>
          </motion.article>
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
            <p className="text-gray-300">We'll review your project details, then share a clear plan & estimate.</p>
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

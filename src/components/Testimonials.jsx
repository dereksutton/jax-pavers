// src/components/Testimonials.jsx
import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import { getAllReviews } from "../lib/reviews";

const TOTAL_REVIEWS = 20;
const AUTO_PLAY_MS = 6000;
const SWIPE_THRESHOLD = 10000;

function getReviewerImage(name) {
  const parts = name.split(" ");
  const camelCase =
    parts[0].toLowerCase() +
    parts
      .slice(1)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("");
  return `/reviewer-${camelCase}.png`;
}

const GoogleLogo = () => (
  <svg className="pointer-events-none h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 0 1-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.379-1.81.588-1.81H7.03a1 1 0 0 0 .95-.69l1.07-3.292Z" />
  </svg>
);

const StarRow = ({ rating }) => (
  <div
    className="flex items-center gap-0.5"
    aria-label={`${rating} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
};

const Testimonials = () => {
  const reviews = getAllReviews();
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const activeIndex =
    ((page % reviews.length) + reviews.length) % reviews.length;
  const review = reviews[activeIndex];

  // 3D perspective tilt driven by cursor position
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 20,
  });

  const paginate = useCallback((dir) => {
    setPage(([prev]) => [prev + dir, dir]);
    setProgressKey((k) => k + 1);
  }, []);

  const goTo = useCallback(
    (index) => {
      setPage(([prev]) => {
        const current =
          ((prev % reviews.length) + reviews.length) % reviews.length;
        if (index === current) return [prev, 0];
        return [prev + (index - current), index > current ? 1 : -1];
      });
      setProgressKey((k) => k + 1);
    },
    [reviews.length],
  );

  // Auto-advance resets whenever the card changes or pause state toggles
  useEffect(() => {
    if (isPaused) return;
    const id = setTimeout(() => paginate(1), AUTO_PLAY_MS);
    return () => clearTimeout(id);
  }, [isPaused, paginate, progressKey]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
    setIsPaused(false);
  }

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(1000px_550px_at_50%_0%,rgba(10,134,196,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="testimonials-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
          >
            Jacksonville Homeowners Love Their New Spaces
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real feedback from recent driveway, patio, and pool deck projects
            across North Florida.
          </p>
        </motion.div>

        {/* ── Trust badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-3 shadow-md md:gap-3 md:px-6"
        >
          <StarRow rating={5} />
          <span className="text-sm font-semibold text-gray-800">5.0</span>
          <span className="h-4 w-px bg-gray-300" aria-hidden="true" />
          <span className="text-sm text-gray-600">
            {TOTAL_REVIEWS} Reviews
          </span>
          <span className="h-4 w-px bg-gray-300" aria-hidden="true" />
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJW5hkwX-QcokRVKzV4I3CI-U&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 -my-3 flex items-center gap-1.5 py-3 pl-1 pr-2 text-sm font-medium text-[#0A86C4] transition-colors hover:text-[#0875B1]"
          >
            <GoogleLogo />
            <span className="pointer-events-none">See All</span>
          </a>
        </motion.div>

        {/* ── Carousel ── */}
        <div className="relative mt-14">
          {/* Prev / Next arrows (desktop) */}
          {[
            {
              dir: -1,
              side: "left-0",
              icon: "M15.75 19.5L8.25 12l7.5-7.5",
              label: "Previous review",
            },
            {
              dir: 1,
              side: "right-0",
              icon: "M8.25 4.5l7.5 7.5-7.5 7.5",
              label: "Next review",
            },
          ].map(({ dir, side, icon, label }) => (
            <button
              key={dir}
              onClick={() => paginate(dir)}
              className={`absolute ${side} top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-colors hover:border-[#0A86C4]/30 hover:text-[#0A86C4] md:flex`}
              aria-label={label}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={icon}
                />
              </svg>
            </button>
          ))}

          {/* Card wrapper — tilt + swipe */}
          <div
            className="mx-auto max-w-2xl px-4 md:px-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -SWIPE_THRESHOLD) paginate(1);
                    else if (swipe > SWIPE_THRESHOLD) paginate(-1);
                  }}
                  className="cursor-grab select-none active:cursor-grabbing"
                >
                  <article className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-xl md:p-10">
                    {/* Quote icon */}
                    <svg
                      className="h-10 w-10 text-[#0A86C4]/15"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Review text */}
                    <p className="mt-2 text-lg leading-relaxed text-gray-700 italic md:text-xl">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Stars */}
                    <div className="mt-6">
                      <StarRow rating={review.rating} />
                    </div>

                    {/* Reviewer */}
                    <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
                      <img
                        src={getReviewerImage(review.name)}
                        alt={review.name}
                        className="h-14 w-14 rounded-full object-cover shadow-md ring-2 ring-[#0A86C4]/20"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {review.name}
                        </p>
                        <div className="mt-0.5 flex items-center gap-1.5">
                          <GoogleLogo />
                          <span className="text-sm text-gray-500">
                            Google Review
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Progress bar */}
            <div className="mx-auto mt-6 h-1 overflow-hidden rounded-full bg-gray-200">
              <motion.div
                key={progressKey}
                className="h-full rounded-full bg-gradient-to-r from-[#0A86C4] to-[#0875B1]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: AUTO_PLAY_MS / 1000,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {reviews.map((r, i) => (
              <motion.button
                key={r.id}
                onClick={() => goTo(i)}
                aria-label={`View ${r.name}'s review`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`h-10 w-10 overflow-hidden rounded-full ring-2 transition-all duration-300 md:h-12 md:w-12 ${
                    i === activeIndex
                      ? "scale-110 opacity-100 ring-[#0A86C4] ring-offset-2"
                      : "opacity-50 ring-gray-200 hover:opacity-80 hover:ring-gray-400"
                  }`}
                >
                  <img
                    src={getReviewerImage(r.name)}
                    alt={r.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── CTA bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-16 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-8 text-center md:flex-row md:text-left"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          <div>
            <p className="text-2xl font-semibold text-white">
              Ready to love your outdoor space?
            </p>
            <p className="mt-1 text-gray-300">
              Transform your vision into reality with expert design and flawless
              execution.
            </p>
          </div>
          <ShimmerButton href="#quote">Book Your Consultation</ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

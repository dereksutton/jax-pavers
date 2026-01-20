// src/components/Testimonials.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import { fetchGoogleReviews, getAvatarGradient } from "../services/reviewsService";
import getImagePath from '../utils/imagePaths';

const STARS = 5;

// Fallback reviews when Google API is unavailable
const fallbackReviews = [
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
    isGoogleReview: false,
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
    isGoogleReview: false,
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
    media: { type: "image", src: getImagePath("/work-staircase.jpg"), alt: "Curved walkway with soldier course" },
    date: "2025-03-18",
    isGoogleReview: false,
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
    isGoogleReview: false,
  },
];

// Project images to pair with Google reviews
const projectImages = [
  { src: getImagePath("/work-pooldeck.jpg"), alt: "Beautiful pool deck installation" },
  { src: getImagePath("/work-driveway1.jpg"), alt: "Elegant driveway pavers" },
  { src: getImagePath("/work-staircase.jpg"), alt: "Professional walkway and steps" },
  { src: getImagePath("/work-patio1.jpg"), alt: "Stunning patio design" },
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

// Google logo SVG for attribution
const GoogleLogo = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
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

/**
 * Extract a headline from review text
 */
function extractHeadline(text) {
  if (!text) return 'Great experience!';
  if (text.length <= 60) return text;

  const firstSentenceMatch = text.match(/^[^.!?]+[.!?]/);
  if (firstSentenceMatch && firstSentenceMatch[0].length <= 80) {
    return firstSentenceMatch[0].trim();
  }

  const truncated = text.substring(0, 57);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 30 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Transform Google review to display format
 */
function transformReview(googleReview, index) {
  return {
    id: googleReview.id || `google-${index}`,
    name: googleReview.authorName || 'Customer',
    location: googleReview.relativeTime || 'Google Review',
    rating: googleReview.rating || 5,
    headline: extractHeadline(googleReview.text),
    body: googleReview.text || '',
    avatar: googleReview.authorPhotoUrl || null,
    media: projectImages[index % projectImages.length],
    isGoogleReview: true,
  };
}

const Testimonials = () => {
  const [modal, setModal] = useState(null);
  const [reviews, setReviews] = useState(fallbackReviews);
  const [businessRating, setBusinessRating] = useState(5);
  const [totalReviews, setTotalReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGoogleData, setIsGoogleData] = useState(false);

  const close = useCallback(() => setModal(null), []);

  // Fetch Google reviews on mount
  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await fetchGoogleReviews();

        if (data.reviews && data.reviews.length > 0) {
          // Select specific review indices (skip index 3)
          const desiredIndices = [0, 1, 2, 4];
          const transformedReviews = desiredIndices
            .filter(i => i < data.reviews.length) // Ensure index exists
            .map((originalIndex, displayIndex) =>
              transformReview(data.reviews[originalIndex], displayIndex)
            );

          setReviews(transformedReviews);
          setBusinessRating(data.rating || 5);
          setTotalReviews(data.totalReviews || null);
          setIsGoogleData(true);
        }
      } catch (error) {
        console.warn('Using fallback reviews:', error.message);
        // Keep using fallback reviews (already set as initial state)
      } finally {
        setIsLoading(false);
      }
    }

    loadReviews();
  }, []);

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

        {/* Trust bar with Google rating */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-gray-900 p-4 shadow-sm"
        >
          <StarRow rating={Math.round(businessRating)} />
          <div className="flex items-center gap-2">
            <p className="text-md text-gray-200">
              <span className="font-semibold">
                {businessRating.toFixed(1)} stars
                {totalReviews && ` from ${totalReviews} reviews`}
              </span>
            </p>
            {isGoogleData && (
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1">
                <GoogleLogo />
                <span className="text-xs text-gray-300">Google</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Loading skeleton or reviews grid */}
        {isLoading ? (
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`animate-pulse rounded-2xl bg-gray-100 ${
                  i === 0 ? 'md:col-span-2 lg:row-span-2 h-96' :
                  i === 1 ? 'md:col-span-2 h-48' : 'h-64'
                }`}
              />
            ))}
          </div>
        ) : (
          /* Bento Box Grid Layout */
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Featured large card - spans 2 cols and 2 rows */}
            <motion.article
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-2 lg:row-span-2 group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              {reviews[0]?.media && (
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
              )}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {reviews[0]?.avatar ? (
                      <img
                        src={reviews[0].avatar}
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${getAvatarGradient(0)} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">
                          {reviews[0]?.name?.charAt(0) || 'C'}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900">{reviews[0]?.name}</p>
                        {reviews[0]?.isGoogleReview && <GoogleLogo />}
                      </div>
                      <p className="text-sm text-gray-600">{reviews[0]?.location}</p>
                    </div>
                  </div>
                  <StarRow rating={reviews[0]?.rating || 5} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{reviews[0]?.headline}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed line-clamp-4">{reviews[0]?.body}</p>
                <div className="mt-4 flex items-center justify-between">
                  {reviews[0]?.date && !reviews[0]?.isGoogleReview && (
                    <p className="text-xs text-gray-500">Completed {new Date(reviews[0].date).toLocaleDateString()}</p>
                  )}
                  {reviews[0]?.isGoogleReview && (
                    <p className="text-xs text-gray-500">{reviews[0]?.location}</p>
                  )}
                  <ShimmerButton href="#quote">Get Quote</ShimmerButton>
                </div>
              </div>
            </motion.article>

            {/* Second testimonial - horizontal card */}
            {reviews[1] && (
              <motion.article
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-2 group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  {reviews[1]?.media && (
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
                  )}
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-3">
                      {reviews[1]?.avatar ? (
                        <img
                          src={reviews[1].avatar}
                          alt=""
                          className="h-10 w-10 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${getAvatarGradient(1)} flex items-center justify-center`}>
                          <span className="text-white font-bold">
                            {reviews[1]?.name?.charAt(0) || 'C'}
                          </span>
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900">{reviews[1]?.name}</p>
                          {reviews[1]?.isGoogleReview && <GoogleLogo />}
                        </div>
                        <p className="text-sm text-gray-600">{reviews[1]?.location}</p>
                      </div>
                    </div>
                    <StarRow rating={reviews[1]?.rating || 5} />
                    <h4 className="mt-3 font-bold text-gray-900">{reviews[1]?.headline}</h4>
                    <p className="mt-2 text-sm text-gray-700 line-clamp-3">{reviews[1]?.body}</p>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Third testimonial - vertical card */}
            {reviews[2] && (
              <motion.article
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                {reviews[2]?.media && (
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
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    {reviews[2]?.avatar ? (
                      <img
                        src={reviews[2].avatar}
                        alt=""
                        className="h-9 w-9 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${getAvatarGradient(2)} flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">
                          {reviews[2]?.name?.charAt(0) || 'C'}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <p className="font-semibold text-gray-900 text-sm">{reviews[2]?.name}</p>
                        {reviews[2]?.isGoogleReview && <GoogleLogo />}
                      </div>
                      <p className="text-xs text-gray-600">{reviews[2]?.location}</p>
                    </div>
                  </div>
                  <StarRow rating={reviews[2]?.rating || 5} />
                  <h4 className="mt-2 font-bold text-gray-900 text-sm">{reviews[2]?.headline}</h4>
                  <p className="mt-2 text-xs text-gray-700 line-clamp-3">{reviews[2]?.body}</p>
                </div>
              </motion.article>
            )}

            {/* Fourth testimonial - vertical card */}
            {reviews[3] && (
              <motion.article
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                {reviews[3]?.media && (
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
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    {reviews[3]?.avatar ? (
                      <img
                        src={reviews[3].avatar}
                        alt=""
                        className="h-9 w-9 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${getAvatarGradient(3)} flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">
                          {reviews[3]?.name?.charAt(0) || 'C'}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <p className="font-semibold text-gray-900 text-sm">{reviews[3]?.name}</p>
                        {reviews[3]?.isGoogleReview && <GoogleLogo />}
                      </div>
                      <p className="text-xs text-gray-600">{reviews[3]?.location}</p>
                    </div>
                  </div>
                  <StarRow rating={reviews[3]?.rating || 5} />
                  <h4 className="mt-2 font-bold text-gray-900 text-sm">{reviews[3]?.headline}</h4>
                  <p className="mt-2 text-xs text-gray-700 line-clamp-3">{reviews[3]?.body}</p>
                </div>
              </motion.article>
            )}
          </div>
        )}

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
            <p className="text-gray-300">Transform your vision into reality with expert design and flawless execution.</p>
          </div>
          <ShimmerButton href="#quote">Book Your Consultation</ShimmerButton>
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
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

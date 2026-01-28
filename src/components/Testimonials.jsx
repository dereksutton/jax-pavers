// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import { fetchGoogleReviews, getAvatarGradient } from "../services/reviewsService";

const STARS = 5;

// Fallback reviews when Google API is unavailable
const fallbackReviews = [
  {
    id: "r1",
    name: "Melissa R.",
    rating: 5,
    body: "They handled drainage, coping, and sealing like pros. We hosted the next weekend with zero puddling after a storm. Flawless pool deck — cool underfoot and gorgeous.",
    isGoogleReview: false,
  },
  {
    id: "r2",
    name: "David P.",
    rating: 5,
    body: "Herringbone with a crisp border — laser-straight lines. Crew protected the landscaping and left everything spotless. Driveway transformed our curb appeal.",
    isGoogleReview: false,
  },
  {
    id: "r3",
    name: "Lauren T.",
    rating: 5,
    body: "Even risers, no wobble, and they matched our existing pavers perfectly. Communication was excellent throughout. Walkway & steps feel safe and solid.",
    isGoogleReview: false,
  },
  {
    id: "r4",
    name: "Jorge M.",
    rating: 5,
    body: "They suggested an ashlar pattern that made the space feel bigger. Sealer enhanced the color without getting slick. Patio is now our favorite room in the house.",
    isGoogleReview: false,
  },
];

// Names to exclude from reviews
const excludedNames = ["Kathy Halleran", "Kathy R Halleran", "Kathy R. Halleran"];

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
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

// Quote icon
const QuoteIcon = () => (
  <svg className="h-8 w-8 text-[#0A86C4]/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

/**
 * Transform Google review to display format
 */
function transformReview(googleReview, index) {
  return {
    id: googleReview.id || `google-${index}`,
    name: googleReview.authorName || 'Customer',
    rating: googleReview.rating || 5,
    body: googleReview.text || '',
    avatar: googleReview.authorPhotoUrl || null,
    relativeTime: googleReview.relativeTime || '',
    isGoogleReview: true,
  };
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Testimonials = () => {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [businessRating, setBusinessRating] = useState(5);
  const [totalReviews, setTotalReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGoogleData, setIsGoogleData] = useState(false);

  // Fetch Google reviews on mount
  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await fetchGoogleReviews();

        if (data.reviews && data.reviews.length > 0) {
          // Filter out excluded names and transform reviews
          const filteredReviews = data.reviews
            .filter(review => !excludedNames.some(name =>
              review.authorName?.toLowerCase().includes(name.toLowerCase())
            ))
            .slice(0, 6) // Take up to 6 reviews
            .map((review, index) => transformReview(review, index));

          if (filteredReviews.length > 0) {
            setReviews(filteredReviews);
            setBusinessRating(data.rating || 5);
            setTotalReviews(data.totalReviews || null);
            setIsGoogleData(true);
          }
        }
      } catch (error) {
        console.warn('Using fallback reviews:', error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadReviews();
  }, []);

  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(1000px_550px_at_50%_0%,rgba(10,134,196,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-gray-900 p-4 shadow-lg"
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

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl bg-gray-100 h-64" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {reviews.map((review, index) => (
              <motion.article
                key={review.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Decorative gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0A86C4]/0 via-transparent to-[#0A86C4]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-[1px] rounded-2xl bg-white" />

                {/* Content */}
                <div className="relative">
                  {/* Quote icon */}
                  <div className="absolute -top-1 -left-1">
                    <QuoteIcon />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-end mb-4">
                    <StarRow rating={review.rating} />
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 leading-relaxed line-clamp-4 min-h-[96px]">
                    "{review.body}"
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                    {review.avatar ? (
                      <img
                        src={review.avatar}
                        alt=""
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <motion.div
                        className={`h-12 w-12 rounded-full bg-gradient-to-br ${getAvatarGradient(index)} flex items-center justify-center ring-2 ring-white shadow-md`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="text-white font-bold text-lg">
                          {review.name?.charAt(0) || 'C'}
                        </span>
                      </motion.div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 truncate">{review.name}</p>
                        {review.isGoogleReview && <GoogleLogo />}
                      </div>
                      {review.relativeTime && (
                        <p className="text-sm text-gray-500">{review.relativeTime}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl p-8 text-center md:flex-row md:text-left overflow-hidden"
        >
          {/* Background gradients */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          <div>
            <p className="text-2xl font-semibold text-white">Ready to love your outdoor space?</p>
            <p className="mt-1 text-gray-300">Transform your vision into reality with expert design and flawless execution.</p>
          </div>
          <ShimmerButton href="#quote">Book Your Consultation</ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

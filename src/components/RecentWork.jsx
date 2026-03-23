"use client";

// src/components/RecentWork.jsx
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';

// Descriptive alt text for each portfolio image
// Descriptive, business-focused alt text for each portfolio image
const IMAGE_ALT = {
  1: "Paver patio installation with stone fire pit and covered lanai by Jax Pavers in Jacksonville FL",
  2: "Custom outdoor kitchen installation with wood-plank ceiling and paver flooring by Jax Pavers in Jacksonville FL",
  4: "Tumbled paver driveway installation with curved border by Jax Pavers in Jacksonville FL",
  5: "Paver patio and retaining wall installation with built-in accent lighting by Jax Pavers in Jacksonville FL",
  6: "Outdoor kitchen and pergola installation with stone veneer base and poolside dining by Jax Pavers in Jacksonville FL",
  7: "Backyard paver patio installation with circular fire pit by Jax Pavers in Jacksonville FL",
  8: "Multi-toned paver driveway installation with charcoal border by Jax Pavers in Jacksonville FL",
  9: "Paver pool deck and retaining wall installation with tropical landscaping by Jax Pavers in Jacksonville FL",
  12: "Covered patio installation with outdoor fireplace and paver flooring by Jax Pavers in Jacksonville FL",
  13: "Covered paver patio installation with fireplace and poolside access by Jax Pavers in Jacksonville FL",
  14: "Built-in grill island installation on stone veneer base with paver patio by Jax Pavers in Jacksonville FL",
  15: "Retaining wall installation with landscape accent lighting by Jax Pavers in Jacksonville FL",
  16: "Travertine pool deck installation with geometric spa surround by Jax Pavers in Jacksonville FL",
  17: "Outdoor kitchen and pergola installation with grill and kamado smoker by Jax Pavers in Jacksonville FL",
  18: "Backyard putting green and paver retaining wall installation by Jax Pavers in Jacksonville FL",
  20: "Paver patio installation with fire pit and covered lanai by Jax Pavers in Jacksonville FL",
  21: "L-shaped outdoor kitchen installation with pergola, grill, and smoker by Jax Pavers in Jacksonville FL",
  22: "Freeform paver patio installation with fire pit and in-ground lighting by Jax Pavers in Jacksonville FL",
  23: "Paver pool deck installation surrounding a freeform pool with covered living area by Jax Pavers in Jacksonville FL",
  25: "Straight-lay paver driveway installation in natural earth tones by Jax Pavers in Jacksonville FL",
  26: "Paver fire pit pad and walkway installation with charcoal border by Jax Pavers in Jacksonville FL",
  28: "Paver patio installation with fire pit and poolside pergola by Jax Pavers in Jacksonville FL",
  29: "Custom outdoor kitchen installation with grill, range hood, TV, and bar seating by Jax Pavers in Jacksonville FL",
  30: "Travertine pool deck and spa installation by Jax Pavers in North Florida",
  31: "Paver pool deck installation with covered lanai and outdoor kitchen by Jax Pavers in Jacksonville FL",
  32: "Block retaining wall and iron fence installation by Jax Pavers in Jacksonville FL",
  33: "Aerial view of paver driveway and walkway installation at a luxury Jacksonville FL home by Jax Pavers",
  37: "Paver patio and fire pit installation with pathway lighting by Jax Pavers in Jacksonville FL",
  39: "Running bond paver driveway installation in gray tones by Jax Pavers in Jacksonville FL",
  40: "Paver walkway and entry step installation with multi-toned pavers by Jax Pavers in Jacksonville FL",
  41: "Elevated paver patio installation with fire pit, outdoor kitchen, and accent lighting by Jax Pavers in Jacksonville FL",
  42: "Paver driveway installation at a Jacksonville FL home with mature oak tree by Jax Pavers",
  43: "Covered outdoor living area installation with paver flooring and grill station by Jax Pavers in Jacksonville FL",
  44: "Outdoor kitchen installation with kamado smoker, grill, and refrigerator by Jax Pavers in Jacksonville FL",
  46: "Paver pool deck installation with sun shelf and tropical landscaping by Jax Pavers in Jacksonville FL",
  47: "Circle medallion paver driveway installation at a three-car garage home by Jax Pavers in Jacksonville FL",
  48: "Curved paver driveway installation through palm-lined landscaping by Jax Pavers in Jacksonville FL",
  49: "Paver driveway and garage pad installation in a North Florida community by Jax Pavers",
  50: "Paver driveway installation curving through a wooded estate lot by Jax Pavers in Jacksonville FL",
  52: "Artificial turf and paver border installation by Jax Pavers in Jacksonville FL",
  53: "Outdoor kitchen island installation with grill, side burner, and pergola by Jax Pavers in Jacksonville FL",
  54: "Natural stone veneer outdoor kitchen installation with dual grills by Jax Pavers in Jacksonville FL",
};

// Images grouped by job category
const DRIVEWAYS_WALKWAYS = [4, 8, 25, 26, 33, 39, 40, 42, 47, 48, 49, 50].map(n => ({
  src: getImagePath(`/pavers-${n}.webp`),
  alt: IMAGE_ALT[n],
}));
const PATIOS_POOL_DECKS = [1, 7, 28, 5, 9, 15, 18, 32, 12, 13, 16, 20, 22, 23, 30, 31, 37, 43, 46, 52].map(n => ({
  src: getImagePath(`/pavers-${n}.webp`),
  alt: IMAGE_ALT[n],
}));
const OUTDOOR_KITCHENS_PERGOLAS = [2, 6, 14, 17, 21, 29, 41, 44, 53, 54].map(n => ({
  src: getImagePath(`/pavers-${n}.webp`),
  alt: IMAGE_ALT[n],
}));

const RecentWork = () => {
  const [lightbox, setLightbox] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const openLightbox = useCallback((image) => {
    setLightbox(image);
    setIsPaused(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setIsPaused(false);
    document.body.style.overflow = 'unset';
  }, []);

  // Handle ESC key to close lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightbox, closeLightbox]);

  // ScrollingRow component for reusability
  const ScrollingRow = ({ images, direction, speed = 40, category = "paver" }) => {
    // Duplicate images for seamless infinite scroll
    const duplicatedImages = [...images, ...images, ...images];

    return (
      <div className="relative overflow-hidden w-full h-[200px] md:h-[250px] lg:h-[300px]">
        <div
          className="flex gap-4 absolute"
          style={{
            animation: `scroll-${direction} ${speed}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'max-content'
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${direction}-${index}`}
              className="flex-shrink-0 h-[200px] md:h-[250px] lg:h-[300px] w-[300px] md:w-[400px] lg:w-[500px] cursor-pointer group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={500}
                height={300}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Magnifying glass icon */}
              <div className="absolute top-3 right-3 rounded-full bg-black/60 p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="recent-work" className="relative scroll-mt-24 overflow-x-hidden" aria-labelledby="recentwork-heading">
      {/* Background wash */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(900px_500px_at_50%_-10%,rgba(10,134,196,0.10),transparent_60%)]" />

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="mx-auto max-w-[100vw] px-0 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center px-4 mb-10"
        >
          <h2 id="recentwork-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Recent Work Around Jacksonville
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Transforming Jacksonville homes with stunning driveways, patios, pool decks, outdoor kitchens, and pergolas—each project crafted to elevate your outdoor living.
          </p>
        </motion.div>

        {/* Scrolling Rows by Category */}
        <div className="space-y-10">
          {/* Row 1: Driveways & Walkways */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 px-4 md:px-8 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-gray-500">Driveways &amp; Walkways</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>
            <ScrollingRow images={DRIVEWAYS_WALKWAYS} direction="right" speed={85} category="Paver driveway and walkway" />
          </motion.div>

          {/* Row 2: Patios & Pool Decks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 px-4 md:px-8 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-gray-500">Patios &amp; Pool Decks</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>
            <ScrollingRow images={PATIOS_POOL_DECKS} direction="left" speed={155} category="Patio and pool deck paver" />
          </motion.div>

          {/* Row 3: Outdoor Kitchens & Pergolas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 px-4 md:px-8 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-gray-500">Outdoor Kitchens &amp; Pergolas</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>
            <ScrollingRow images={OUTDOOR_KITCHENS_PERGOLAS} direction="right" speed={60} category="Outdoor kitchen and pergola" />
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl p-6 text-center md:flex-row md:text-left overflow-hidden"
          >
          {/* Background gradients matching WhyUs component */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-[#0A86C4]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          <div>
            <p className="text-xl mb-1 font-semibold text-white">Want to see something similar at your home?</p>
            <p className="text-base text-gray-300">Share your project details and dimensions—we'll provide a quick estimate.</p>
          </div>
          <ShimmerButton href="#quote">Book a Consultation</ShimmerButton>
          </motion.div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Full-size work gallery"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm transition-all duration-200"
              aria-label="Close full-size view"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Full-size image container */}
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw] w-full h-full flex items-center justify-center p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                loading="eager"
                decoding="async"
                width={1536}
                height={1024}
              />
            </motion.div>

            {/* Click to close instruction */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              Click anywhere or press ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecentWork;

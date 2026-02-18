// src/components/RecentWork.jsx
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';

// Generate array of all 26 paver images
const WORK_IMAGES = Array.from({ length: 26 }, (_, i) =>
  getImagePath(`/pavers-${i + 1}.png`)
);

// Split images into three rows (roughly equal distribution)
const ROW_1_IMAGES = WORK_IMAGES.slice(0, 9);   // Images 1-9
const ROW_2_IMAGES = WORK_IMAGES.slice(9, 18);  // Images 10-18
const ROW_3_IMAGES = WORK_IMAGES.slice(18);      // Images 19-26

const RecentWork = () => {
  const [lightbox, setLightbox] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const openLightbox = useCallback((imageSrc) => {
    setLightbox(imageSrc);
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
  const ScrollingRow = ({ images, direction, speed = 40 }) => {
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
                src={image}
                alt={`Paver work example ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
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

        {/* Scrolling Rows */}
        <div className="space-y-6">
          {/* Row 1: Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <ScrollingRow images={ROW_1_IMAGES} direction="left" speed={50} />
          </motion.div>

          {/* Row 2: Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ScrollingRow images={ROW_2_IMAGES} direction="right" speed={55} />
          </motion.div>

          {/* Row 3: Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ScrollingRow images={ROW_3_IMAGES} direction="left" speed={45} />
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
            <p className="text-lg font-semibold mb-2 text-white">Want to see something similar at your home?</p>
            <p className="text-gray-300 text-lg">Share your project details and dimensions—we'll provide a quick estimate.</p>
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
                src={lightbox}
                alt="Full-size paving work showcase"
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                loading="eager"
                decoding="async"
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

// src/components/RecentWork.jsx
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';

const WORK_IMAGES = [
  "/work-driveway1.jpg",
  "/work-driveway2.jpg",
  "/work-driveway3.jpg",
  "/work-fireplace.jpg",
  "/work-patio1.jpg",
  "/work-patio2.jpg",
  "/work-patio3.jpg",
  "/work-patio4.jpg",
  "/work-pooldeck.jpg",
  "/work-staircase.jpg",
].map(path => getImagePath(path));

const gridItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const RecentWork = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((imageIndex) => {
    setLightbox(imageIndex);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
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

  return (
    <section id="recent-work" className="relative scroll-mt-24" aria-labelledby="recentwork-heading">
      {/* Background wash */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(900px_500px_at_50%_-10%,rgba(10,134,196,0.10),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 id="recentwork-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Recent Work Around Jacksonville
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A look at driveways, patios, and pool decks we've built—engineered for Florida rain, heat, and salt air.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-6 grid-rows-3 gap-4 h-[900px] md:h-[600px] lg:h-[700px]"
        >
          {/* Row 1: Large hero + 2 medium images */}
          
          {/* Large featured image - spans 2x2 */}
          <motion.div
            variants={gridItem}
            className="col-span-6 row-span-2 md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img
              src={WORK_IMAGES[0]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-3 right-3 rounded-full bg-black/60 p-2 backdrop-blur-sm">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Right column: 2 medium images stacked */}
          <motion.div
            variants={gridItem}
            className="col-span-3 row-span-1 md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(1)}
          >
            <img
              src={WORK_IMAGES[1]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-2 backdrop-blur-sm">
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Tall medium image */}
          <motion.div
            variants={gridItem}
            className="col-span-3 row-span-1 md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(2)}
          >
            <img
              src={WORK_IMAGES[2]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-2 backdrop-blur-sm">
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Second medium on right */}
          <motion.div
            variants={gridItem}
            className="col-span-6 row-span-1 md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(3)}
          >
            <img
              src={WORK_IMAGES[3]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-2 backdrop-blur-sm">
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Row 3: 7 smaller images in a balanced layout */}
          
          {/* First group of 3 small images */}
          <motion.div
            variants={gridItem}
            className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(4)}
          >
            <img
              src={WORK_IMAGES[4]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={gridItem}
            className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(5)}
          >
            <img
              src={WORK_IMAGES[5]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={gridItem}
            className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(6)}
          >
            <img
              src={WORK_IMAGES[6]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={gridItem}
            className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(7)}
          >
            <img
              src={WORK_IMAGES[7]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={gridItem}
            className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(8)}
          >
            <img
              src={WORK_IMAGES[8]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            variants={gridItem}
            className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openLightbox(9)}
          >
            <img
              src={WORK_IMAGES[9]}
              alt="Recent paving work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
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
          <ShimmerButton href="#quote">Get My Quote</ShimmerButton>
        </motion.div>
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
                src={WORK_IMAGES[lightbox]}
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

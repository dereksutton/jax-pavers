"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getImagePath from "../utils/imagePaths";

const ServiceGallery = ({ images, title }) => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="relative bg-white [background:radial-gradient(900px_500px_at_50%_-10%,rgba(10,134,196,0.08),transparent_60%)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
        {/* Section heading */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
            Our Work
          </p>
          <div className="mx-auto mt-2 h-px w-12 bg-[#0A86C4]/40" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            {title}
          </h2>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={getImagePath(img.src)}
                alt={img.alt}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
                loading="lazy"
                width={500}
                height={300}
              />

              {/* Hover gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Magnifying glass icon overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  className="h-10 w-10 text-white drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-10 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 backdrop-blur-sm transition-all"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.img
              src={getImagePath(lightbox.src)}
              alt={lightbox.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              width={1536}
              height={1024}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceGallery;

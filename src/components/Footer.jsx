"use client";

// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import getImagePath from '../utils/imagePaths';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0A86C4] to-[#003366] text-white">
      {/* Background accent gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A86C4] to-[#003366]" />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          {/* Logo + Social */}
          <div className="flex flex-col items-center">
            <motion.img
              src={getImagePath("/jaxpavers-logo.webp")}
              alt="Jax Pavers - Jacksonville FL Paver Installation"
              className="h-48 w-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            {/* Social icons - centered under logo */}
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61582980187014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.517c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jaxpavers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps?cid=16511254573488647252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gray-300 transition-colors"
                aria-label="Google Business Profile"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 0 1-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center" aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li>
                <a href="#services" className="text-white/90 hover:text-gray-300 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/90 hover:text-gray-300 transition-colors">
                  Why Us?
                </a>
              </li>
              <li>
                <a href="#recent-work" className="text-white/90 hover:text-gray-300 transition-colors">
                  Recent Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/90 hover:text-gray-300 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#quote" className="text-white/90 hover:text-gray-300 transition-colors">
                  Get My Quote
                </a>
              </li>
            </ul>
          </nav>

          {/* Catalogs */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white">Catalogs</h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li>
                <a href="https://www.tremron.com/flipbook/south_hardscape_book/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-gray-300 transition-colors">
                  Tremron Catalog
                </a>
              </li>
              <li>
                <a href="https://www.belgard.com/wp-content/uploads/2021/03/Coastal-2026-Catalog_WEB_Single-Pages_BEL25-D-577275.pdf" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-gray-300 transition-colors">
                  Belgard Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li>
                <a href="tel:19044451261" className="text-white/90 hover:text-gray-300 transition-colors">
                  (904) 445-1261
                </a>
              </li>
              <li>
                <a href="mailto:info@jaxoutdoorspaces.com" className="text-white/90 hover:text-gray-300 transition-colors">
                  info@jaxoutdoorspaces.com
                </a>
              </li>
              <li className="text-white/90">Jacksonville, FL</li>
              <li className="text-white/70 text-sm">Mon–Fri 8am–6pm | Sat 9am–2pm</li>
            </ul>
          </div>
        </div>

        {/* Service Areas + Map */}
        <div className="mt-10 border-t border-white/15 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Service Areas</h3>
              </div>
              <ul className="mt-4 inline-grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-white/80 mx-auto text-left">
                {[
                  "Jacksonville", "Jacksonville Beach",
                  "Ponte Vedra Beach", "Nocatee",
                  "Neptune Beach", "St. Augustine",
                  "St. Augustine Beach", "Atlantic Beach",
                  "St. Johns", "Fruit Cove",
                  "Mandarin", "Riverside",
                  "Fleming Island", "Orange Park",
                  "Green Cove Springs"
                ].map((city) => (
                  <li key={city} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-white/50 shrink-0" aria-hidden="true" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Jax Pavers service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441369.5942155257!2d-81.6558305!3d30.20284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8972907fc164985b%3A0xe523c28de0d5ac54!2sJax%20Pavers!5e0!3m2!1sen!2sus!4v1773969187742!5m2!1sen!2sus"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Jax Pavers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

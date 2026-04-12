"use client";

import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from "../utils/imagePaths";

// Analytics event helper — replace with real analytics when available
const trackEvent = (eventName) => {
  // TODO: Wire up to analytics provider (GA4, Meta Pixel, etc.)
  if (typeof window !== "undefined") {
    console.log(`[ContactCard] ${eventName}`);
  }
};

const OWNER_NAME = "Aaron Locke";
const OWNER_TITLE = "Owner";

const ContactCard = () => {
  React.useEffect(() => {
    trackEvent("contact_card_view");
  }, []);

  return (
    <div className="h-dvh grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">

      {/* Left / Top: Image */}
      <div className="relative h-[35dvh] sm:h-[40dvh] lg:h-full">
        <img
          src={getImagePath("/pavers-56.webp")}
          alt="L-shaped outdoor kitchen with stainless steel grill, refrigerator drawers, and travertine flooring by Jax Pavers in Jacksonville FL"
          className="w-full h-full object-cover"
          width={800}
          height={600}
          loading="eager"
        />
      </div>

      {/* Right / Bottom: Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center px-8 py-4 sm:px-10 sm:py-6 lg:px-14 lg:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md mx-auto lg:mx-0 w-full">

          {/* Identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img
              src={getImagePath("/jaxpavers-logo.webp")}
              alt="Jax Pavers logo"
              className="h-20 sm:h-24 lg:h-28 w-auto"
              width={140}
              height={112}
              loading="eager"
            />
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mt-1.5">
              {OWNER_NAME}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A86C4]">
              {OWNER_TITLE}
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center lg:text-left mt-4">
            <p className="text-base lg:text-lg font-medium text-gray-700 leading-snug">
              Jacksonville&apos;s Trusted Paver &amp; Outdoor Living Contractor
            </p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Driveways, patios, pool decks, outdoor kitchens &amp; pergolas — built to last in the Florida climate.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-400">Licensed &amp; Insured &bull; 10-Year Warranty</span>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto lg:mx-0 h-px w-16 bg-gray-200 my-5 lg:my-6" />

          {/* Call Now */}
          <a
            href="tel:+19044451261"
            onClick={() => trackEvent("contact_card_call_click")}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[1em] w-[1em]"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            Call Now
          </a>

          {/* CTA */}
          <div className="mt-3" onClick={() => trackEvent("contact_card_quote_click")}>
            <ShimmerButton href="/#quote" className="w-full text-base py-3.5">
              Book a Consultation
            </ShimmerButton>
          </div>

          {/* Footer */}
          <p className="text-[0.65rem] text-gray-400 text-center lg:text-left mt-5 lg:mt-6">
            Serving Jacksonville, Ponte Vedra, St. Augustine &amp; Orange Park<br className="sm:hidden" />
            {" "}&bull; &copy; {new Date().getFullYear()} Jax Pavers
          </p>

        </div>
      </motion.div>

    </div>
  );
};

export default ContactCard;

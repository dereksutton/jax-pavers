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
const PHONE = "(904) 445-1261";
const PHONE_HREF = "tel:+19044451261";
const EMAIL = "info@jaxoutdoorspaces.com";

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EnvelopeIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              onClick={() => trackEvent("contact_card_call_click")}
              className="flex items-center justify-center gap-2 flex-1 py-3.5 px-6 rounded-lg bg-[#003366] font-semibold text-white text-base hover:bg-[#002244] active:scale-[0.97] transition-all duration-200 shadow-md"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
            <div className="flex-1" onClick={() => trackEvent("contact_card_quote_click")}>
              <ShimmerButton href="/#quote" className="w-full text-base py-3.5">
                Book a Consultation
              </ShimmerButton>
            </div>
          </div>

          {/* Contact links */}
          <div className="mt-4 flex flex-col items-center lg:items-start gap-2">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-gray-600 hover:text-[#0A86C4] transition-colors">
              <div className="rounded-lg bg-[#0A86C4]/10 p-1.5">
                <PhoneIcon className="h-3.5 w-3.5 text-[#0A86C4]" />
              </div>
              <span className="text-sm font-medium">{PHONE}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-600 hover:text-[#0A86C4] transition-colors">
              <div className="rounded-lg bg-[#0A86C4]/10 p-1.5">
                <EnvelopeIcon className="h-3.5 w-3.5 text-[#0A86C4]" />
              </div>
              <span className="text-sm font-medium">{EMAIL}</span>
            </a>
            <a href="https://jaxoutdoorspaces.com" onClick={() => trackEvent("contact_card_website_click")} className="flex items-center gap-2 text-gray-600 hover:text-[#0A86C4] transition-colors">
              <div className="rounded-lg bg-[#0A86C4]/10 p-1.5">
                <GlobeIcon className="h-3.5 w-3.5 text-[#0A86C4]" />
              </div>
              <span className="text-sm font-medium">jaxoutdoorspaces.com</span>
            </a>
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

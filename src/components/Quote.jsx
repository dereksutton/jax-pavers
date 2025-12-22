// src/components/QuoteUpdated.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";
import getImagePath from '../utils/imagePaths';
import { submitQuoteRequest } from '../services/quoteService';

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  projectType: "",
  projectDetails: "",
  budget: "",
  timeline: "",
  howHeard: "",
  honeypot: "", // spam trap
};

const PROJECT_TYPES = [
  "Driveway",
  "Patio",
  "Pool Deck",
  "Outdoor Kitchen",
  "Other"
];

const BUDGET_OPTIONS = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000",
  "Not sure yet"
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "Within 3 months",
  "Within 6 months",
  "Planning for next year",
  "Just exploring options"
];

const HOW_HEARD_OPTIONS = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Referral",
  "Previous Customer",
  "Yard Sign",
  "Other"
];

const variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Quote = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null); // { ok: boolean, msg: string }
  const [messageCount, setMessageCount] = useState(0);

  const remaining = useMemo(() => Math.max(0, 2000 - messageCount), [messageCount]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (name === "projectDetails") setMessageCount(value.length);
  };

  const validate = () => {
    if (form.honeypot) return { ok: false, msg: "Spam detected." };
    if (!form.fullName.trim()) return { ok: false, msg: "Please enter your name." };
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return { ok: false, msg: "Enter a valid email." };
    if (!form.phone.trim()) return { ok: false, msg: "Please enter your phone number." };
    if (!form.address.trim()) return { ok: false, msg: "Please enter your address." };
    if (!form.projectType) return { ok: false, msg: "Please select a project type." };
    if (!form.projectDetails.trim() || form.projectDetails.trim().length < 10)
      return { ok: false, msg: "Please describe your project (at least 10 characters)." };
    return { ok: true };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      setResult({ ok: false, msg: v.msg });
      return;
    }
    setSubmitting(true);
    setResult(null);

    try {
      // Remove honeypot field before sending
      const { honeypot, ...submitData } = form;

      const response = await submitQuoteRequest(submitData);

      if (response.success) {
        setResult({
          ok: true,
          msg: "Thanks! We'll contact you shortly to schedule your consultation."
        });
        setForm(initialState);
        setMessageCount(0);
      } else {
        throw new Error(response.message || "Submission failed");
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setResult({
        ok: false,
        msg: "Something went wrong submitting your request. Please try again or call us at (904) 445-1261.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" className="relative scroll-mt-24" aria-labelledby="quote-heading">
      {/* Background wash */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(1100px_600px_at_50%_-10%,rgba(10,134,196,0.10),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <img
            src={getImagePath("/jaxpavers-logo.png")}
            alt="Jax Pavers Logo"
            className="h-36 sm:h-38 md:h-40 lg:h-44 w-auto"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 id="quote-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Book a Consultation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your dream project starts here. Book a consultation, and our team will meet you at your home to
            listen to your ideas, offer creative solutions, and guide you every step of the way.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            noValidate
          >
            {/* honeypot */}
            <input
              type="text"
              name="honeypot"
              className="hidden"
              value={form.honeypot}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  placeholder="(904) 555-1234"
                  value={form.phone}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  placeholder="Street address, City, State ZIP"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Project Type *</label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                >
                  <option value="">Please select</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Briefly Describe Your Project *
              </label>
              <textarea
                name="projectDetails"
                rows={4}
                maxLength={2000}
                value={form.projectDetails}
                onChange={onChange}
                required
                placeholder="Please describe your project, including type of work needed, approximate size, and any specific requirements or concerns."
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
              />
              <div className="mt-1 text-right text-xs text-gray-500">{remaining} characters left</div>
            </div>

            {/* Optional fields in two columns */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget Range</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                >
                  <option value="">Please select</option>
                  {BUDGET_OPTIONS.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Timeline</label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                >
                  <option value="">Please select</option>
                  {TIMELINE_OPTIONS.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* How did you hear about us */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                How did you hear about us?
              </label>
              <select
                name="howHeard"
                value={form.howHeard}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
              >
                <option value="">Please select</option>
                {HOW_HEARD_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Project Minimum Notice */}
            <div className="mt-6 rounded-lg bg-blue-50 border border-blue-200 p-4">
              <p className="text-sm font-medium text-blue-900">
                Please Note: We have a $7,500 project minimum for all installations.
              </p>
            </div>

            {/* Submit */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted about your project. We don't share your info.
              </p>
              <ShimmerButton
                as="button"
                type="submit"
                disabled={submitting}
                className={`min-w-[180px] text-center text-xl ${submitting ? "opacity-70" : ""}`}
              >
                {submitting ? "Sending…" : "Book Consultation"}
              </ShimmerButton>
            </div>

            {/* Result banner */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
                    result.ok
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-rose-200 bg-rose-50 text-rose-800"
                  }`}
                  role="status"
                >
                  {result.msg}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Sidebar: what happens next */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-sm"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-sm font-semibold tracking-wide text-[#0A86C4] uppercase"
            >
              What to Expect
            </motion.p>

            <ol className="mt-5 space-y-5">
              {[
                {
                  t: "We Reach Out Promptly",
                  d: "Expect a call within 24 hours to learn about your vision and schedule a convenient time to meet.",
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  t: "We Visit Your Property",
                  d: "Our team assesses your space, listens to your ideas, and shares expert design recommendations tailored to your home.",
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                },
                {
                  t: "You Receive a Clear Proposal",
                  d: "Get a detailed quote with material options, project timeline, and transparent pricing—no surprises, no hidden fees.",
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <motion.li
                  key={s.t}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0A86C4] to-[#0875B1] text-white font-bold shadow-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {s.icon}
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{s.t}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            {/* Trust Badges */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase mb-3 text-center">
                Why Homeowners Trust Us
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    label: "Licensed & Insured",
                    detail: "FL Contractor"
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    ),
                    label: "10-Year Warranty",
                    detail: "Workmanship"
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Locally Owned",
                    detail: "Jacksonville, FL"
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ),
                    label: "5-Star Rated",
                    detail: "Google Reviews"
                  },
                ].map((badge, i) => (
                  <motion.div
                    key={badge.label}
                    className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-3 text-center border border-gray-100 hover:border-[#0A86C4]/30 transition-colors"
                    whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(10, 134, 196, 0.15)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex justify-center text-[#0A86C4] mb-1">
                      {badge.icon}
                    </div>
                    <div className="text-xs font-bold text-gray-900">{badge.label}</div>
                    <div className="text-[10px] text-gray-500">{badge.detail}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Minimum */}
            <motion.div
              className="mt-6 rounded-xl border border-[#0A86C4]/30 bg-gradient-to-r from-blue-50 to-cyan-50 p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-[#0A86C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-semibold text-gray-900">Project Minimum</p>
              </div>
              <p className="text-sm text-gray-700">$7,500 for all installations</p>
            </motion.div>

            {/* Call CTA */}
            <motion.div
              className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              <p className="text-gray-600 mb-2">Prefer to talk with us directly?</p>
              <motion.a
                href="tel:19044451261"
                className="inline-flex items-center gap-2 font-semibold text-[#0A86C4] hover:text-[#0875B1] transition-colors"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (904) 445-1261
              </motion.a>
              <p className="text-xs text-gray-500 mt-1">Mon–Fri, 8am–6pm</p>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Quote;
// src/components/Quote.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  howHeard: "",
  honeypot: "", // spam trap
};

const HOW_HEARD_OPTIONS = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Referral from friend/family",
  "Saw your work in neighborhood",
  "Other",
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

  const remaining = useMemo(() => Math.max(0, 600 - messageCount), [messageCount]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (name === "message") setMessageCount(value.length);
  };

  const validate = () => {
    if (form.honeypot) return { ok: false, msg: "Spam detected." };
    if (!form.name.trim()) return { ok: false, msg: "Please enter your name." };
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return { ok: false, msg: "Enter a valid email." };
    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(form.phone))
      return { ok: false, msg: "Enter a valid 10-digit phone." };
    if (!form.address.trim()) return { ok: false, msg: "Please enter your address." };
    if (!form.message.trim()) return { ok: false, msg: "Please describe your project." };
    if (!form.howHeard) return { ok: false, msg: "Please let us know how you heard about us." };
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
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));

      // Adjust endpoint as needed for your backend
      const res = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setResult({ ok: true, msg: "Thanks! We'll contact you shortly to schedule your consultation." });
      setForm(initialState);
      setMessageCount(0);
    } catch (err) {
      setResult({
        ok: false,
        msg: "Something went wrong submitting your request. Please try again or call us.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" className="relative scroll-mt-24" aria-labelledby="quote-heading">
      {/* Background wash */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(1100px_600px_at_50%_-10%,rgba(10,134,196,0.10),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
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
            Schedule your free consultation today. We'll discuss your vision, assess your space,
            and provide expert recommendations for your project.
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
                  name="name"
                  value={form.name}
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
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Brief Describe Your Project *
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={600}
                value={form.message}
                onChange={onChange}
                required
                placeholder="Please describe your project, including type of work needed, approximate size, and any specific requirements or concerns."
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
              />
              <div className="mt-1 text-right text-xs text-gray-500">{remaining} characters left</div>
            </div>

            {/* How did you hear about us */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                How did you hear about us? *
              </label>
              <select
                name="howHeard"
                value={form.howHeard}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
              >
                <option value="">Please select</option>
                {HOW_HEARD_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted about your project. We don’t share your info.
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
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold tracking-wide text-[#0A86C4] uppercase">
              What happens next
            </p>

            <ol className="mt-4 space-y-4">
              {[
                {
                  t: "Quick Response",
                  d: "We'll contact you within 24 hours to discuss your project and schedule your consultation.",
                },
                {
                  t: "On-Site Consultation",
                  d: "We visit your property to assess the space, discuss design options, and understand your vision.",
                },
                {
                  t: "Custom Proposal",
                  d: "Receive a detailed proposal with design recommendations, materials, timeline, and transparent pricing.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A86C4] text-white font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{s.t}</p>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Trust bits */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { k: "Licensed", v: "FL contractor" },
                { k: "Insured", v: "$2M coverage" },
                { k: "Warranty", v: "10-yr workmanship" },
                { k: "Local", v: "Jacksonville" },
              ].map((x) => (
                <div key={x.k} className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-base font-extrabold text-gray-900">{x.k}</div>
                  <div className="text-xs text-gray-600">{x.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
              Prefer to talk? Call{" "}
              <a href="tel:19044451261" className="font-semibold text-[#0A86C4] underline underline-offset-2">
                (904) 445-1261
              </a>{" "}
              Mon–Fri, 8–6.
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Quote;

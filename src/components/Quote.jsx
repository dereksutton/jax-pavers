// src/components/Quote.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "./ShimmerButton";

const initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  zip: "",
  service: "",
  sizeApprox: "",
  timeline: "",
  budget: "",
  message: "",
  honeypot: "", // spam trap
};

const SERVICES = [
  "Driveway",
  "Pool Deck",
  "Patio / Courtyard",
  "Walkway / Steps",
  "Sealing & Restoration",
  "Repairs / Lift-Level",
];

const TIMELINES = ["ASAP", "2–4 weeks", "1–3 months", "Just planning"];

const BUDGETS = ["Under $5k", "$5k–$10k", "$10k–$20k", "$20k+"];

const variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const MAX_FILES = 8;
const MAX_MB = 12;

const Quote = () => {
  const [form, setForm] = useState(initialState);
  const [files, setFiles] = useState([]); // File[]
  const [previews, setPreviews] = useState([]); // object URLs
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null); // { ok: boolean, msg: string }
  const [messageCount, setMessageCount] = useState(0);
  const inputRef = useRef(null);
  const dropRef = useRef(null);

  const remaining = useMemo(() => Math.max(0, 600 - messageCount), [messageCount]);

  useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

  const onDrop = useCallback((ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    const list = ev.dataTransfer.files;
    addFiles(list);
    dropRef.current?.classList.remove("ring-2", "ring-[#0A86C4]");
  }, []);

  const onDragOver = useCallback((ev) => {
    ev.preventDefault();
    dropRef.current?.classList.add("ring-2", "ring-[#0A86C4]");
  }, []);

  const onDragLeave = useCallback(() => {
    dropRef.current?.classList.remove("ring-2", "ring-[#0A86C4]");
  }, []);

  const addFiles = (fileList) => {
    const arr = Array.from(fileList || []);
    const current = [...files];
    for (const f of arr) {
      if (!f.type.startsWith("image/")) continue;
      const sizeMb = f.size / (1024 * 1024);
      if (sizeMb > MAX_MB) continue;
      if (current.length >= MAX_FILES) break;
      current.push(f);
    }
    setFiles(current);
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

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
    if (!form.service) return { ok: false, msg: "Select a service." };
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
      files.forEach((f, i) => data.append("photos", f, f.name || `photo-${i}.jpg`));

      // Adjust endpoint as needed for your backend
      const res = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setResult({ ok: true, msg: "Thanks! We’ll follow up shortly with a ballpark estimate." });
      setForm(initialState);
      setFiles([]);
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
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Share a few details (and photos if you have them). We’ll assess drainage, base, and layout
            and reply with a clear plan and ballpark.
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

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                <label className="block text-sm font-medium text-gray-700">Phone *</label>
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP</label>
                  <input
                    type="text"
                    name="zip"
                    inputMode="numeric"
                    value={form.zip}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Service *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Approximate Size (sq ft)
                </label>
                <input
                  type="text"
                  name="sizeApprox"
                  placeholder="e.g., 600"
                  value={form.sizeApprox}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Timeline</label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                >
                  <option value="">Select</option>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
                >
                  <option value="">Select</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Photos */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Photos (optional) — up to {MAX_FILES} images, {MAX_MB}MB each
              </label>

              <div
                ref={dropRef}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                className="mt-2 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4"
                aria-label="Drag and drop project photos here"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-gray-600">
                    Drop images here, or{" "}
                    <button
                      type="button"
                      onClick={() => inputRef.current?.click()}
                      className="font-semibold text-[#0A86C4] underline underline-offset-2"
                    >
                      browse
                    </button>
                  </p>
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={(e) => addFiles(e.target.files)}
                  />
                </div>

                {/* Previews */}
                {files.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {files.map((f, i) => (
                      <div
                        key={`${f.name}-${i}`}
                        className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white"
                      >
                        <img
                          src={previews[i]}
                          alt=""
                          className="h-28 w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="absolute right-1 top-1 rounded-full bg-black/50 p-1 text-white opacity-0 transition group-hover:opacity-100"
                          aria-label={`Remove ${f.name}`}
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-2 py-1">
                          <p className="truncate text-[11px] text-white">{f.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={600}
                value={form.message}
                onChange={onChange}
                placeholder="e.g., Existing concrete pool deck needs travertine with new coping. Slight pooling near the steps after heavy rain."
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-[#0A86C4] focus:ring-2 focus:ring-[#0A86C4]/20"
              />
              <div className="mt-1 text-right text-xs text-gray-500">{remaining} characters left</div>
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
                {submitting ? "Sending…" : "Get My Quote"}
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
                  t: "Quick review",
                  d: "We review your details, photos, and site constraints (drainage, access, base).",
                },
                {
                  t: "Ballpark & plan",
                  d: "We send a rough range with pattern/material ideas. If you like it, we schedule a site visit.",
                },
                {
                  t: "Site visit & firm quote",
                  d: "Measurements, layout, and any utility/HOA checks for a firm price.",
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
              <a href="tel:19045551234" className="font-semibold text-[#0A86C4] underline underline-offset-2">
                (904) 553-4221
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-neutral-950 overflow-hidden" id="testimonials-section">
      {/* Background Grid Accent overlay */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <div className="text-red-500 font-mono text-xs uppercase tracking-wider">
            Verified Customer Reviews
          </div>
          <h3 className="text-3xl sm:text-4.5xl font-extrabold font-display tracking-tight text-white">
            What Our Verified <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 via-red-500 to-red-400">
              Investors Are Saying
            </span>
          </h3>
          <p className="text-neutral-450 text-sm font-light leading-relaxed">
            Discover the real stories of landlords, diaspora clients, and corporate business developers who secured their land with absolute clarity and peace of mind.
          </p>
        </div>

        {/* Testimonials Grid Layout with Motion Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-layout">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col justify-between rounded-2xl border border-white/5 bg-neutral-900/30 p-6 sm:p-8 hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300 group"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Premium red top accent beam on card hover */}
              <span className="absolute top-0 inset-x-0 h-[2px] bg-red-650 opacity-0 group-hover:opacity-100 transition-opacity duration-350 rounded-t-2xl" />

              {/* Quote Mark Floating Element */}
              <div className="absolute top-6 right-6 text-neutral-850 opacity-40 group-hover:text-red-650/10 group-hover:scale-110 transition-transform duration-350">
                <Quote className="w-12 h-12" />
              </div>

              {/* Star Rating Row */}
              <div className="flex gap-1 mb-6 text-red-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-500" />
                ))}
              </div>

              {/* Blockquote Body text */}
              <p className="text-neutral-300 text-sm sm:text-base font-light italic leading-relaxed mb-8 relative z-10 flex-1">
                "{testimonial.quote}"
              </p>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-13 h-13 rounded-full object-cover border-2 border-white/10 shadow-md group-hover:border-red-500/50 transition-colors shrink-0"
                />
                <div className="truncate">
                  <h5 className="text-sm font-bold font-display text-white truncate">{testimonial.name}</h5>
                  <div className="text-[10px] sm:text-xs text-neutral-400 font-mono flex items-center gap-1.5 mt-0.5 truncate">
                    <span className="truncate">{testimonial.role}</span>
                    <span className="inline-flex items-center gap-0.5 text-emerald-400 font-bold font-sans text-[10px] bg-emerald-500/15 px-1.5 py-0.5 rounded uppercase shrink-0">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Banner footer on testimonials */}
        <div className="border border-white/5 rounded-2xl bg-black/40 p-6 sm:p-8 mt-16 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-red-650/15 flex items-center justify-center text-red-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">Zero Litigation Guarantee</h4>
              <p className="text-xs text-neutral-400 mt-0.5">We represent 100% trouble-free properties with fully resolved local claims.</p>
            </div>
          </div>
          <div className="text-[11px] font-mono text-neutral-500 text-center sm:text-right max-w-xs">
            Corporate ID Registered • Certified Surveyor Audited • Safe Haven Assets
          </div>
        </div>

      </div>
    </section>
  );
}

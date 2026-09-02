/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Instagram, Facebook, ArrowUp, Send, ShieldCheck, Mail, Phone, ExternalLink, Globe, MapPin } from "lucide-react";
import { ESTATES_DATA } from "../data";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/RtXTWeK7vZ9ED5439";

interface FooterProps {
  onScrollToTop: () => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenBooking: () => void;
  activePage?: "real-estate" | "plantations";
}

export default function Footer({ onScrollToTop, onScrollToSection, onOpenBooking, activePage = "real-estate" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed! You will now receive LandSeeds newsletter updates directly.");
  };

  const isPlantations = activePage === "plantations";
  const brandAccent = isPlantations ? "bg-[#0B6B2E]" : "bg-red-600";
  const brandAccentHover = isPlantations ? "hover:text-[#F5B700]" : "hover:text-red-500";
  const textAccent = isPlantations ? "text-[#0B6B2E]" : "text-red-500";
  const textAccentHover = isPlantations ? "hover:text-[#F5B700]" : "hover:text-red-450";

  return (
    <footer className="bg-black text-white relative border-t border-white/10" id="footer-section">
      {/* Decorative vertical bounds flare */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-${isPlantations ? "[#0B6B2E]" : "red-650"} to-transparent pointer-events-none`} />

      {/* Main Footer Links Block */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Pitch & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.imgur.com/GoyFPK6.png" 
                alt="LandSeeds Logo" 
                referrerPolicy="no-referrer"
                className="h-9 w-9 object-contain rounded-lg"
              />
              <div>
                <span className="text-base font-extrabold font-display tracking-tight text-white block">
                  LandSeeds
                </span>
                <span className="text-[10px] text-neutral-400 font-mono block uppercase">
                  {isPlantations ? "Plantations Agro-Equity" : "Integrated Services Ltd"}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              {isPlantations 
                ? "Securing commercial agricultural yield and high property value appreciation. We manage elite plantation blocks of Oil Palm and Melina hardwoods to cultivate inflation-proof generational asset portfolios."
                : "\"Affordable Lands, Secure Investments, Endless Possibilities.\" We acquire, map, survey, and process authentic real estate investments to fuel generational wealth with 100% legal integrity."
              }
            </p>

            {/* Newsletter form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 max-w-sm pt-2">
              <label className="block text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                Subscribe to Land Newsletters
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="yourname@gmail.com"
                  className={`w-full rounded-lg border border-white/10 bg-neutral-900 px-3.5 py-2 pr-10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-${isPlantations ? "[#0B6B2E]" : "red-650"}`}
                />
                <button
                  type="submit"
                  className={`absolute inset-y-1.5 right-1.5 px-2 ${brandAccent} hover:opacity-90 text-white rounded text-[10px] transition-colors`}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display border-b border-white/5 pb-2">
              Corporate Desk
            </h5>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              {!isPlantations ? (
                <>
                  <li>
                    <button onClick={() => onScrollToSection("hero-section")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Corporate Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("about-section")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Our Mission
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("gallery-section")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Project Gallery
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("testimonials-section")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Client Reviews
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenBooking} className="text-red-500 hover:text-red-450 transition-colors cursor-pointer font-semibold text-left">
                      Book VIP Inspection
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button onClick={onScrollToTop} className="hover:text-white transition-colors cursor-pointer text-left">
                      Plantantions Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("about-plantations")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Our Vision
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("oil-palm-pricing")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Oil Palm Blocks
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("melina-pricing")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Melina wood stands
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("gallery-plantations")} className="hover:text-white transition-colors cursor-pointer text-left">
                      Project Gallery
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onScrollToSection("plantation-reservation-form")} className="text-emerald-500 hover:text-[#F5B700] transition-colors cursor-pointer font-semibold text-left">
                      Book Agro Consult
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Properties list overview */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display border-b border-white/5 pb-2">
              {isPlantations ? "Plantation locations" : "Our Locations"}
            </h5>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              {!isPlantations ? (
                ESTATES_DATA.map((est) => (
                  <li key={est.id} className="group flex items-center justify-between text-[11px]">
                    <span className="group-hover:text-white transition-colors truncate block max-w-[170px]">
                      {est.title.replace("The Seeds Estate – ", "")}
                    </span>
                    <span className="text-[9px] font-mono font-medium text-neutral-500 bg-neutral-900 px-1 py-0.5 rounded uppercase">
                      ₦{(est.prices[250] / 1000).toFixed(0)}k+
                    </span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-center justify-between text-[11.2px]">
                    <span className="text-neutral-300">Ijebu Ogbere Hub</span>
                    <span className="text-[9.2px] font-mono font-semibold text-emerald-450">Ogun State</span>
                  </li>
                  <li className="flex items-center justify-between text-[11.2px]">
                    <span className="text-neutral-300">Ilaro Corridor</span>
                    <span className="text-[9.2px] font-mono font-semibold text-emerald-450">Ogun State</span>
                  </li>
                  <li className="flex items-center justify-between text-[11.2px]">
                    <span className="text-neutral-300">Ilishan Dev Node</span>
                    <span className="text-[9.2px] font-mono font-semibold text-emerald-450">Ogun State</span>
                  </li>
                  <li className="flex items-center justify-between text-[11.2px]">
                    <span className="text-neutral-300">Jekasale Plot Block</span>
                    <span className="text-[9.2px] font-mono font-semibold text-emerald-450">Ogun State</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Column 4: Support Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display border-b border-white/5 pb-2">
              Contact Desk
            </h5>
            <div className="space-y-3 text-xs text-neutral-450 font-light">
              <div className="flex gap-2">
                <Mail className={`w-4 h-4 ${textAccent} flex-shrink-0`} />
                <span className="select-all">info@landseedsnigeria.com</span>
              </div>
              <div className="flex gap-2">
                <Globe className={`w-4 h-4 ${textAccent} flex-shrink-0`} />
                <a href="https://landseedsnigeria.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline flex items-center gap-0.5 select-all">
                  landseedsnigeria.com
                  <ExternalLink className="w-3 h-3 text-neutral-600 inline" />
                </a>
              </div>
              <div className="flex gap-2">
                <Instagram className={`w-4 h-4 ${textAccent} flex-shrink-0`} />
                <a href="https://instagram.com/land_seeds" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline text-emerald-400 font-semibold font-mono">
                  @land_seeds
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin className={`w-4 h-4 ${textAccent} flex-shrink-0`} />
                <a 
                  href={GOOGLE_MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white hover:underline flex items-center gap-1 text-neutral-300"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500 inline" />
                </a>
              </div>
              <div className="pt-2 border-t border-white/5 space-y-1 text-[11px] text-neutral-500">
                <p>Support Hour Desk:</p>
                <p>Monday - Friday: 8 AM - 6 PM</p>
                <p>Saturday: 9 AM - 4 PM (Inspections)</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Extreme Bottom Level (Copyright info, signature and back-to-top buttons) */}
      <div className="bg-[#0b0b0b] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Legal statement & Signature */}
          <div className="text-xs text-neutral-500 font-light space-y-1.5">
            <p>© {currentYear} LandSeeds Integrated Services Ltd. All Rights Reserved.</p>
            <p className="text-[11px] text-neutral-400">
              Designed & Developed by <span className="text-white font-medium tracking-wide">Quotients Digital Horizon Ltd</span>
            </p>
            <p className="text-[10px] text-neutral-600 max-w-2xl">
              Disclaimer: Lands offered are fully surveyed. Final acquisition receipt and immediate physical land assignment is guaranteed upon successful clearing of purchase parameters.
            </p>
          </div>

          {/* Back to top index shortcut */}
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 cursor-pointer rounded-xl bg-neutral-900 border border-white/5 px-4 py-2.5 text-xs text-neutral-400 hover:text-white hover:bg-neutral-850 hover:border-white/15 transition-all active:scale-95 shadow shrink-0"
            id="back-to-top-btn"
          >
            Back To Top <ArrowUp className={`w-4 h-4 ${textAccent}`} />
          </button>
        </div>
      </div>
    </footer>
  );
}

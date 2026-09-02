/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, MapPin, Globe, Instagram, Mail, Phone, Clock, Send, MessageSquare, Check, Sparkles, ChevronRight, ExternalLink, Navigation, Layers
} from "lucide-react";
import { ESTATES_DATA } from "../data";
import { Estate } from "../types";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/RtXTWeK7vZ9ED5439";
const GOOGLE_MAPS_EMBED_URL = "https://maps.google.com/maps?q=6.6278571,3.984016&hl=en&z=13&output=embed";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSent, setIsSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [activeMapEstate, setActiveMapEstate] = useState<Estate>(ESTATES_DATA[4]); // default to Epe Marina

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Name, phone, and message are required parameters.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1200);
  };

  const triggerWhatsAppSupport = () => {
    const text = "Hello LandSeeds Team, I would like to get in touch regarding available estate plots in Lagos State - Epe. Please connect me with an investment counselor.";
    window.open(`https://wa.me/2348108640108?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="contact-section">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glassmorphic red glow bottom center */}
      <div className="absolute -bottom-64 left-1/3 w-[600px] h-[300px] bg-red-650/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          
          {/* LEFT COLUMN: CONTACT CHANNELS & FORM */}
          <div className="lg:col-span-6 space-y-10">
            
            <div className="space-y-4">
              <div className="text-red-500 font-mono text-xs uppercase tracking-wider">
                Elite Client Support
              </div>
              <h3 className="text-3xl sm:text-4.5xl font-extrabold font-display leading-tight text-white mb-2">
                Let’s Discuss Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-660 to-red-400">
                  Land Portfolio Goals
                </span>
              </h3>
              <p className="text-neutral-400 text-sm font-light">
                Secure investments start with a simple conversation. Connect with our dedicated sales counselors in Nigeria or diaspora liaison representatives.
              </p>
            </div>

            {/* Support Quick Icons List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
              <div className="flex gap-3 bg-neutral-900/35 border border-white/5 rounded-xl p-4">
                <div className="p-2.5 rounded-lg bg-red-650/10 text-red-500 h-10 w-10 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-300 font-display uppercase tracking-wide">Corporate HQ</h5>
                  <p className="text-xs text-neutral-450 mt-1 select-all">
                    2, Iperu Akesan, Iyana - Ipaja, Lagos.
                  </p>
                  <a 
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-red-500 hover:text-red-400 font-medium mt-1.5 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex gap-3 bg-neutral-900/35 border border-white/5 rounded-xl p-4">
                <div className="p-2.5 rounded-lg bg-red-650/10 text-red-500 h-10 w-10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-300 font-display uppercase tracking-wide">Digital Desk</h5>
                  <div className="text-xs text-neutral-450 mt-1 space-y-0.5">
                    <p className="hover:text-white transition-colors cursor-pointer select-all">info@landseedsnigeria.com</p>
                    <p className="hover:text-white transition-colors cursor-pointer text-[11px] select-all">landseedsnigeria.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 bg-neutral-900/35 border border-white/5 rounded-xl p-4">
                <div className="p-2.5 rounded-lg bg-red-650/10 text-red-500 h-10 w-10 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-300 font-display uppercase tracking-wide">Social Connect</h5>
                  <p className="text-xs text-neutral-450 mt-1">
                    Instagram: <a href="https://instagram.com/land_seeds" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline font-semibold font-mono">@land_seeds</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-neutral-900/35 border border-white/5 rounded-xl p-4">
                <div className="p-2.5 rounded-lg bg-[#121212] border border-emerald-500/10 text-emerald-400 h-10 w-10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-355 font-display uppercase tracking-wide">Hotline Chat</h5>
                  <p className="font-mono text-xs text-white mt-1">0810 864 0108</p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">Available 24/7 for support &amp; chat</p>
                  <button 
                    onClick={triggerWhatsAppSupport}
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold mt-1 flex items-center gap-1 cursor-pointer"
                  >
                    Open Live Link
                  </button>
                </div>
              </div>
            </div>

            {/* Interaction Direct Inquiry Form */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900/45 p-6 backdrop-blur-md">
              <h4 className="text-base sm:text-lg font-bold font-display text-white mb-6">
                Transmit Immediate Inquiry
              </h4>

              {isSent ? (
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-6 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-450">
                    <Check className="w-6 h-6" />
                  </div>
                  <h5 className="text-base font-bold text-white">Transmission Successful!</h5>
                  <p className="text-xs text-neutral-400">
                    Thank you. A LandSeeds investment representative will call or write you shortly within 24 working hours.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-xs text-red-500 font-bold hover:underline pt-2"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">
                      Message Inquiry *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us which estate you are eyeing, or describe your budget schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-xs sm:text-sm text-white placeholder-neutral-605 focus:border-red-650 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-750 py-3 text-xs sm:text-sm font-semibold text-white transition-all disabled:opacity-55 active:scale-[0.98]"
                  >
                    <span>{sending ? "Processing Transmission..." : "Submit Secure Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: GOOGLE MAPS INTEGRATION */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 sm:p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
                      <span>Interactive Location Map</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-650/20 text-red-400 border border-red-500/20">
                        Live GPS
                      </span>
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      Explore LandSeeds project hubs and headquarters on Google Maps
                    </p>
                  </div>
                  
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-650/15 hover:bg-red-650/30 text-red-400 border border-red-500/20 text-xs font-semibold transition-all shrink-0 active:scale-95"
                    id="open-google-maps-btn"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Embedded Live Google Maps */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black/60 rounded-xl overflow-hidden border border-white/10 shadow-2xl" id="google-maps-container">
                  <iframe
                    title="LandSeeds Google Map"
                    src={GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter contrast-[1.05] brightness-[0.95]"
                  />

                  {/* Overlay quick directions button */}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 hover:bg-black text-white text-xs font-medium border border-white/20 shadow-lg backdrop-blur-md transition-all active:scale-95"
                  >
                    <Navigation className="w-3.5 h-3.5 text-red-500" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Estate Location Quick Selectors */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Quick Estate Details
                  </span>
                  <span className="text-[10px] text-neutral-500">
                    Select to view details
                  </span>
                </div>

                {/* Quick pill selector */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {ESTATES_DATA.map((est) => {
                    const isSelected = activeMapEstate?.id === est.id;
                    return (
                      <button
                        key={est.id}
                        onClick={() => setActiveMapEstate(est)}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-red-650 text-white border-red-500 shadow-sm"
                            : "bg-black/40 text-neutral-400 border-white/5 hover:text-white hover:border-white/15"
                        }`}
                      >
                        {est.title.replace("The Seeds Estate – ", "")}
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Info Card matching selected Map Mark */}
                <AnimatePresence mode="wait">
                  {activeMapEstate && (
                    <motion.div
                      key={activeMapEstate.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl border border-white/5 bg-black/40 p-4 space-y-3"
                    >
                      <div className="flex justify-between items-start border-b border-white/5 pb-2">
                        <div>
                          <h5 className="text-xs font-semibold text-white font-display">
                            {activeMapEstate.title}
                          </h5>
                          <p className="text-[10px] text-neutral-400 mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-red-500" /> {activeMapEstate.location}
                          </p>
                        </div>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-red-650/10 text-red-400 hover:text-red-300 rounded border border-red-650/20 inline-flex items-center gap-1"
                        >
                          <span>View on Map</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[10px] text-neutral-500 block">Documentation Status:</span>
                          <span className="text-neutral-300 font-medium">{activeMapEstate.documentation}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-neutral-500 block">Entry Pricing:</span>
                          <span className="text-white font-bold block">250 sqm - ₦{activeMapEstate.prices[250].toLocaleString()}</span>
                          <span className="text-white font-bold block">500 sqm - ₦{activeMapEstate.prices[500].toLocaleString()}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

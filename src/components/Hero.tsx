/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Trees, MapPin, Sparkles, MessageCircle, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToGallery: () => void;
}

export default function Hero({ onOpenBooking, onScrollToGallery }: HeroProps) {
  const handleWhatsAppChat = () => {
    const text = "Hello LandSeeds Team, I am visiting your premium real estate platform and would like to inquire about genuine lands in Lagos State - Epe.";
    window.open(`https://wa.me/2348108640108?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  // SVGs for birds with custom paths representing wing flaps
  const birdVariants = {
    animate1: {
      x: ["-10vw", "110vw"],
      y: ["25vh", "15vh", "22vh"],
      transition: {
        x: { repeat: Infinity, duration: 25, ease: "linear" },
        y: { repeat: Infinity, duration: 8, ease: "easeInOut" }
      }
    },
    animate2: {
      x: ["110vw", "-10vw"],
      y: ["35vh", "40vh", "30vh"],
      transition: {
        x: { repeat: Infinity, duration: 32, ease: "linear" },
        y: { repeat: Infinity, duration: 10, ease: "easeInOut" }
      }
    },
    flap: {
      d: [
        "M 0 0 C 3 -6, 7 -6, 10 0 C 13 -6, 17 -6, 20 0 C 16 2, 4 2, 0 0 Z", // Up flap
        "M 0 0 C 3 -1, 7 2, 10 0 C 13 -1, 17 2, 20 0 C 14 -1, 6 -1, 0 0 Z"   // Down flap
      ],
      transition: {
        repeat: Infinity,
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20" id="hero-section">
      {/* 1. Underlying Premium Image Layer with Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      {/* Black Radial Gradient Frame */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#000000_100%] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-neutral-950 pointer-events-none" />

      {/* 2. Floating Animated Particles Layer */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.4 + 0.1, 
              y: "100vh", 
              x: `${Math.random() * 100}vw`,
              scale: Math.random() * 3 + 1
            }}
            animate={{ 
              y: "-10vh",
              transition: {
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* 3. Moving Clouds (Infinite loop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
        {/* Cloud A */}
        <motion.div
          initial={{ x: "-40%" }}
          animate={{ x: "120%" }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="absolute top-[12%] left-0 w-80 h-20 opacity-[0.25] pointer-events-none filter blur-lg"
        >
          <div className="bg-white rounded-full w-48 h-16 absolute top-0 left-0" />
          <div className="bg-white rounded-full w-36 h-20 absolute top-[-10px] left-12" />
          <div className="bg-white rounded-full w-40 h-14 absolute top-2 left-28" />
        </motion.div>

        {/* Cloud B */}
        <motion.div
          initial={{ x: "120%" }}
          animate={{ x: "-40%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-[28%] left-0 w-96 h-24 opacity-[0.18] pointer-events-none filter blur-xl"
        >
          <div className="bg-white rounded-full w-56 h-20 absolute top-0 left-4" />
          <div className="bg-white rounded-full w-48 h-16 absolute top-2 left-24" />
        </motion.div>
      </div>

      {/* 4. Flying Birds (Framer Motion sequences) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Bird Flight Path 1 */}
        <motion.div variants={birdVariants} animate="animate1" className="absolute w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 20 10" className="w-5 h-5 fill-white/60">
            <motion.path variants={birdVariants} animate="flap" />
          </svg>
        </motion.div>

        {/* Bird Flight Path 2 */}
        <motion.div variants={birdVariants} animate="animate2" className="absolute w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 20 10" className="w-4 h-4 fill-white/40 rotate-180">
            <motion.path variants={birdVariants} animate="flap" />
          </svg>
        </motion.div>
      </div>

      {/* 5. Main Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center z-20">
        
        {/* Brand Pulse Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md mb-8 inline-block select-select"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-650"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-neutral-350 uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-red-500" /> Genuine Lands • Guaranteed Peace of Mind
          </span>
        </motion.div>

        {/* Hero Headlines */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400"
          >
            Own Genuine Land in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-450">
              Fast-Growing Locations
            </span> <br className="hidden sm:inline" /> Across Lagos State - Epe
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed font-sans"
          >
            Invest in secure, affordable, and strategically located lands with verified documentation and flexible purchase options.
          </motion.p>
        </div>

        {/* Hero CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 max-w-md mx-auto"
        >
          <button
            onClick={onScrollToGallery}
            className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 bg-red-650 hover:bg-red-750 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-650/20 hover:shadow-red-650/40 hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            Explore Project Gallery
          </button>
          <button
            onClick={handleWhatsAppChat}
            className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 bg-[#121212]/80 hover:bg-neutral-900 text-white border border-white/10 hover:border-white/20 font-semibold px-8 py-4 rounded-xl backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-450/10" />
            Contact WhatsApp
          </button>
        </motion.div>

        {/* Feature Highlights on Hero Margin */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white/10 mt-16 pt-8 text-left"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full p-1 bg-red-650/10 text-red-500">
              <Trees className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white font-display">100% Secure Dry Land</h4>
              <p className="text-xs text-neutral-400 mt-1">Free from flooding risk and structural layout delays.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full p-1 bg-red-650/10 text-red-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white font-display">Rapid Appreciation Hubs</h4>
              <p className="text-xs text-neutral-400 mt-1">Surrounded by university nodes, cement plants, and international corridors.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full p-1 bg-red-650/10 text-red-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white font-display">Verified Documentation</h4>
              <p className="text-xs text-neutral-400 mt-1">Proper legal land survey deeds and allocation stamps.</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-25 text-neutral-500 animate-bounce cursor-pointer flex flex-col items-center gap-1.5 hover:text-white transition-all" onClick={onScrollToGallery}>
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore LandSeeds</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}

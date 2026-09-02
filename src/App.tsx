/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare, ShieldCheck, ArrowRight, Sun, Award } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import PlantationsPage from "./components/PlantationsPage";
import { ESTATES_DATA } from "./data";
import { Estate } from "./types";

export default function App() {
  const [activePage, setActivePage] = useState<"real-estate" | "plantations">("real-estate");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingEstate, setBookingEstate] = useState<Estate | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenBooking = (estate?: Estate) => {
    setBookingEstate(estate);
    setIsBookingOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToGallery = () => {
    handleScrollToSection("gallery-section");
  };

  const triggerDirectWhatsApp = () => {
    const text = activePage === "plantations" 
      ? "Hello LandSeeds Plantations Team, I am interested in agribusiness investments and would like to connect with an advisor."
      : "Hello LandSeeds Team, I am looking to invest in genuine layouts. Please hook me up with a sales partner.";
    window.open(`https://wa.me/2348108640108?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`bg-black text-white relative min-h-screen font-sans ${activePage === "plantations" ? "selection:bg-[#0B6B2E] selection:text-white" : "selection:bg-[#E30613] selection:text-white"}`} id="main-landing-scroller">
      
      {/* ========================================== */}
      {/* 1. ELITE STICKY NAVIGATION BAR            */}
      {/* ========================================== */}
      <header className="sticky top-0 left-0 right-0 z-40 backdrop-blur-lg bg-black/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo brand configuration */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={handleScrollToTop}>
            <img 
              src="https://i.imgur.com/GoyFPK6.png" 
              alt="LandSeeds Logo" 
              referrerPolicy="no-referrer"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-lg"
            />
            <div className="hidden sm:block">
              <span className="text-xs sm:text-sm font-extrabold font-display tracking-tight text-white block uppercase leading-none">
                LandSeeds
              </span>
              <span className="text-[8px] sm:text-[9px] text-neutral-400 font-mono tracking-wider block uppercase mt-0.5">
                {activePage === "plantations" ? "Agro Plantations" : "Integrated Services Ltd"}
              </span>
            </div>
          </div>

          {/* Premium Center Page Switcher Pills */}
          <div className="flex bg-neutral-900/90 rounded-full p-0.5 border border-white/10 font-display">
            <button 
              onClick={() => { setActivePage("real-estate"); setIsMobileMenuOpen(false); handleScrollToTop(); }}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${activePage === "real-estate" ? "bg-[#E30613] text-white shadow-md shadow-red-650/40" : "text-neutral-400 hover:text-white"}`}
            >
              Real Estate
            </button>
            <button 
              onClick={() => { setActivePage("plantations"); setIsMobileMenuOpen(false); handleScrollToTop(); }}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${activePage === "plantations" ? "bg-[#0B6B2E] text-white shadow-md shadow-emerald-850/40" : "text-neutral-400 hover:text-white"}`}
            >
              Plantations
            </button>
          </div>

            {/* Desktop link sets */}
          {activePage === "real-estate" ? (
            <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-neutral-355 tracking-wider uppercase">
              <button 
                onClick={() => handleScrollToSection("about-section")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Mission
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => handleScrollToSection("gallery-section")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Project Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => handleScrollToSection("testimonials-section")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => handleScrollToSection("contact-section")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Contact Desk
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </button>
            </nav>
          ) : (
            <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-neutral-355 tracking-wider uppercase">
              <button 
                onClick={() => handleScrollToSection("about-plantations")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Vision
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0B6B2E] transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => handleScrollToSection("oil-palm-pricing")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Oil Palm
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0B6B2E] transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => handleScrollToSection("melina-pricing")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Melina wood
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0B6B2E] transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => handleScrollToSection("gallery-plantations")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0B6B2E] transition-all duration-300 group-hover:w-full" />
              </button>
              <button 
                onClick={() => handleScrollToSection("faq-plantations")} 
                className="hover:text-white transition-colors cursor-pointer relative py-2 group"
              >
                FAQs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0B6B2E] transition-all duration-300 group-hover:w-full" />
              </button>
            </nav>
          )}

          {/* Action CTAs Desk */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              onClick={triggerDirectWhatsApp}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-emerald-450 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp
            </button>
            {activePage === "real-estate" ? (
              <button
                onClick={() => handleOpenBooking()}
                className="cursor-pointer inline-flex items-center justify-center gap-1.5 bg-red-620 hover:bg-red-720 text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-lg transition-all shadow shadow-red-650/15 text-center"
                id="header-booking-btn"
              >
                Book Inspection
              </button>
            ) : (
              <button
                onClick={() => handleScrollToSection("plantation-reservation-form")}
                className="cursor-pointer inline-flex items-center justify-center gap-1.5 bg-[#0B6B2E] hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-lg transition-all shadow shadow-emerald-650/15 text-center"
                id="header-invest-btn"
              >
                Invest Now
              </button>
            )}
          </div>

          {/* Mobile responsive toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer flex-shrink-0"
            aria-label="Toggle navigation menu"
            id="mobile-menu-hamburger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Dynamic Mobile slide drawer sheet */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden block border-t border-white/5 bg-black/95 backdrop-blur-xl overflow-hidden"
              id="mobile-drawer-panel"
            >
              <div className="px-6 py-6 space-y-4 text-sm font-semibold tracking-wider text-neutral-350 uppercase">
                {activePage === "real-estate" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("about-section")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Our Mission
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("gallery-section")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Project Gallery
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("testimonials-section")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Client Reviews
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("contact-section")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Contact Desk
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("about-plantations")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Our Vision
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("oil-palm-pricing")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Oil Palm
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("melina-pricing")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Melina wood
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("gallery-plantations")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      Project Gallery
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection("faq-plantations")}
                      className="w-full text-left py-2 border-b border-white/5 hover:text-white"
                    >
                      FAQs
                    </button>
                  </>
                )}

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button
                    onClick={triggerDirectWhatsApp}
                    className="w-full text-center py-2.5 rounded-lg bg-neutral-900 border border-white/5 text-xs text-emerald-450 hover:bg-neutral-850"
                  >
                    WhatsApp Chat
                  </button>
                  {activePage === "real-estate" ? (
                    <button
                      onClick={() => { setIsMobileMenuOpen(false); handleOpenBooking(); }}
                      className="w-full text-center py-2.5 rounded-lg bg-[#E30613] text-xs text-white hover:bg-red-700"
                    >
                      Book Inspection
                    </button>
                  ) : (
                    <button
                      onClick={() => { setIsMobileMenuOpen(false); handleScrollToSection("plantation-reservation-form"); }}
                      className="w-full text-center py-2.5 rounded-lg bg-[#0B6B2E] text-xs text-white hover:bg-emerald-700"
                    >
                      Invest Now
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================== */}
      {/* 2. MAIN WORKSPACE CONTENT BODY             */}
      {/* ========================================== */}
      {activePage === "real-estate" ? (
        <main>
          {/* HERO SECTION */}
          <Hero 
            onOpenBooking={() => handleOpenBooking()} 
            onScrollToGallery={handleScrollToGallery} 
          />

          {/* ABOUT & WHY CHOOSE LANDSEEDS SECTION */}
          <About onOpenBooking={() => handleOpenBooking()} />

          {/* BOLD PROJECT & SITE GALLERY */}
          <Gallery onOpenBooking={() => handleOpenBooking()} />

          {/* TESTIMONIAL REVIEWS SECTION */}
          <Testimonials />

          {/* PARALLAX LUXURY CTA BACKGROUND SECTION */}
          <section className="relative py-28 bg-black overflow-hidden flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center brightness-[0.3] scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500')` }}
            />
            {/* Black Vignette Frame Layout */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_20%,_#000000_100%] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-4"
              >
                <div className="text-red-500 font-mono text-xs uppercase tracking-wider">
                  Limited Estate Allocation Windows
                </div>
                <h3 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                  Secure Your Future Through <br />Smart Land Investments
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto font-light">
                  Take advantage of today's price indices before the values of fast-developing regions double or expand again.
                </p>
              </motion.div>

              {/* CTA Option splits */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-md mx-auto">
                <button
                  onClick={() => handleOpenBooking()}
                  className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-1.5 bg-[#E30613] hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Book Free Inspection
                </button>
                <button
                  onClick={triggerDirectWhatsApp}
                  className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-1.5 bg-black/80 border border-white/10 hover:border-white/20 text-white font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-xl backdrop-blur-md transition-all hover:bg-neutral-900"
                >
                  Contact Sales Team
                </button>
              </div>
            </div>
          </section>

          {/* SECURE CONTACT FORM & DYNAMIC OGUN STATE INTERACTIVE MAP */}
          <Contact />
        </main>
      ) : (
        <main>
          <PlantationsPage />
        </main>
      )}

      {/* ========================================== */}
      {/* 3. CORPORATE DOCUMENTATION FOOTER         */}
      {/* ========================================== */}
      <Footer 
        onScrollToTop={handleScrollToTop}
        onScrollToSection={handleScrollToSection}
        onOpenBooking={() => handleOpenBooking()}
        activePage={activePage}
      />

      {/* ========================================== */}
      {/* 4. SEED TRANSACTION RESERVATION WINDOW    */}
      {/* ========================================== */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        selectedEstate={bookingEstate}
        estatesList={ESTATES_DATA}
      />

    </div>
  );
}

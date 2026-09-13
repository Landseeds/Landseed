/**
 * LANDSEEDS INTEGRATED SERVICES - BOLD PROJECT & SITE GALLERY
 * Showcases verified estate developments, physical layout surveys, and site allocations.
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Maximize2, X, ChevronLeft, ChevronRight, Eye, Sparkles, 
  MapPin, CheckCircle2, Layers, Download, Share2, LayoutGrid, Grid2X2, Play, Video
} from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Estates & Layouts" | "Site Inspections" | "Development Hubs" | "Plantations";
  location: string;
  imageUrl: string;
  videoUrl?: string;
  isVideo?: boolean;
  fallbackUrl?: string;
  description: string;
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Estate Layout & Land Survey Allocation",
    category: "Estates & Layouts",
    location: "The Seeds Estate Phase 1, Epe",
    imageUrl: "https://i.imgur.com/SYzLoC1.png",
    description: "Architectural master layout and physical plot zoning with standard perimeter boundary markers.",
    tag: "Verified Layout"
  },
  {
    id: "gal-2",
    title: "Prime Dry Topography Inspection",
    category: "Site Inspections",
    location: "Ketu-Epe Expressway Hub",
    imageUrl: "https://i.imgur.com/75XSfmA.png",
    description: "100% dry tableland ready for immediate construction without expensive sandfilling or reclamation.",
    tag: "Dry Land"
  },
  {
    id: "gal-3",
    title: "Commercial & Residential Gateway",
    category: "Development Hubs",
    location: "Alaro City Corridor Node",
    imageUrl: "https://i.imgur.com/5gOvQqf.png",
    description: "Rapidly appreciating highway corridor with direct connectivity to the new Lekki-Epe International Airport.",
    tag: "Prime Access"
  },
  {
    id: "gal-4",
    title: "Perimeter Security & Gatehouse Framework",
    category: "Estates & Layouts",
    location: "The Seeds Estate, Itokin-Epe",
    imageUrl: "https://i.imgur.com/l6P2s3V.png",
    description: "Gated estate infrastructure with dedicated access control points and central security command.",
    tag: "Infrastructure"
  },
  {
    id: "gal-5",
    title: "Physical Land Assignment & Allocation Day",
    category: "Site Inspections",
    location: "Temu-Epe Fast Track Hub",
    imageUrl: "https://i.imgur.com/hiSe9yU.png",
    description: "Real-time client allocations, deed handovers, and beacon erection for verified subscribers.",
    tag: "Instant Allocation"
  },
  {
    id: "gal-6",
    title: "Dual Carriageway & Access Road Network",
    category: "Development Hubs",
    location: "Epe Lagoon Front Marina",
    imageUrl: "https://i.imgur.com/lAj8mTE.png",
    description: "Paved arterial road connections connecting investors directly to prime metropolitan hubs.",
    tag: "High ROI"
  },
  {
    id: "gal-7",
    title: "Oil Palm Plantation & Agro Investment Zone",
    category: "Plantations",
    location: "LandSeeds Agricultural Corridor",
    imageUrl: "https://i.imgur.com/X88mOoV.png",
    description: "High-yield commercial hybrid oil palm nursery and managed plantation plots producing recurring passive income.",
    tag: "Agro Asset"
  },
  {
    id: "gal-8",
    title: "Topographic Top-Soil Surveying",
    category: "Site Inspections",
    location: "Epe Central Expansion Node",
    imageUrl: "https://i.imgur.com/mMs7F6Y.png",
    description: "Registered surveyor beacons placed accurately with Lagos State digital cadastral references.",
    tag: "Registered Survey"
  },
  {
    id: "gal-9",
    title: "Masterplanned Green Zones & Buffer Parks",
    category: "Estates & Layouts",
    location: "The Seeds Estate Phase 2",
    imageUrl: "https://i.imgur.com/xzXHuHF.png",
    description: "Eco-conscious urban design incorporating expansive green lung buffers and leisure reservations.",
    tag: "Eco Planned"
  },
  {
    id: "gal-10",
    title: "Investor Site Tour & Due Diligence",
    category: "Site Inspections",
    location: "Ketu-Omu Highway Hub",
    imageUrl: "https://i.imgur.com/FcWJiaH.png",
    description: "Complimentary weekend inspection tours providing transparent physical verification before commitment.",
    tag: "Free Inspection"
  },
  {
    id: "gal-11",
    title: "Industrial Commercial Frontage Plots",
    category: "Development Hubs",
    location: "Dangote Logistics Transit Belt",
    imageUrl: "https://i.imgur.com/nZXB9N0.png",
    description: "Heavy-duty commercial parcels suited for logistics yards, warehousing, and corporate headquarters.",
    tag: "Commercial"
  },
  {
    id: "gal-12",
    title: "Deed of Assignment & Registered Title Delivery",
    category: "Estates & Layouts",
    location: "LandSeeds Corporate Center",
    imageUrl: "https://i.imgur.com/unQRgoH.png",
    description: "Complete unencumbered freehold title documentation handover ensuring 100% legal ownership peace.",
    tag: "Freehold Title"
  },
  {
    id: "gal-13",
    title: "Commercial Agro Plantation Field Operations",
    category: "Plantations",
    location: "Ijebu Ogbere Hub, Ogun State",
    imageUrl: "https://i.imgur.com/CpbH6oj.png",
    description: "Active on-ground development, surveyed plantation boundaries, and intensive soil cultivation at LandSeeds agro corridor.",
    tag: "Agro Farmland"
  },
  {
    id: "gal-14",
    title: "LandSeeds Agro-Forestry & Crop Plantation Block",
    category: "Plantations",
    location: "Ogun Agricultural Corridor",
    imageUrl: "https://i.imgur.com/e5gn3xb.png",
    description: "Thriving commercial agricultural plantation block prepared for high-yield oil palm and cash crop cultivation.",
    tag: "Plantation Site"
  },
  {
    id: "gal-15",
    title: "Site Inspection & Client Field Walkthrough",
    category: "Site Inspections",
    location: "Lagos State - Epe Corridor",
    imageUrl: "https://i.imgur.com/smunVOx.png",
    description: "Prospective investors and clients verifying estate topography, accessibility, and survey pegs on-site.",
    tag: "Site Inspection"
  },
  {
    id: "gal-16",
    title: "Site Inspection & Ground Topography Review",
    category: "Site Inspections",
    location: "The Seeds Estate, Epe",
    imageUrl: "https://i.imgur.com/XVoL45t.png",
    description: "Physical inspection of 100% dry tableland topography, boundary beacons, and estate access corridors.",
    tag: "Site Inspection"
  },
  {
    id: "gal-17",
    title: "Site Inspection & Plot Allocation Verification",
    category: "Site Inspections",
    location: "Epe Development Node, Lagos",
    imageUrl: "https://i.imgur.com/hpszQab.png",
    description: "On-ground investor delegation inspecting land perimeter boundaries and confirmed layout allocations.",
    tag: "Site Inspection"
  },
  {
    id: "gal-18",
    title: "Site Inspection & Investor Ground Briefing",
    category: "Site Inspections",
    location: "The Seeds Estate, Epe",
    imageUrl: "https://i.imgur.com/fbv2YOU.png",
    description: "Prospective investors and clients receiving on-site layout explanations and boundary peg confirmations during weekend site inspection.",
    tag: "Site Inspection"
  },
  {
    id: "gal-19",
    title: "Live Site Inspection & On-Ground Video Tour",
    category: "Site Inspections",
    location: "LandSeeds Estate Corridor, Epe",
    imageUrl: "https://i.imgur.com/fbv2YOU.png",
    videoUrl: "https://i.imgur.com/mHjL8zM.mp4",
    isVideo: true,
    description: "Watch live footage from our scheduled client site inspection tour verifying access roads, boundary markers, and dry tableland topography.",
    tag: "Video Tour"
  }
];

const CATEGORIES = ["All Showcase", "Estates & Layouts", "Site Inspections", "Development Hubs", "Plantations"] as const;

export default function Gallery({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string>("All Showcase");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [gridDensity, setGridDensity] = useState<"extra-large" | "standard">("extra-large");

  const filteredItems = activeCategory === "All Showcase"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : 0
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : 0
    );
  };

  const activeItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section className="relative py-28 bg-[#0a0a0a] text-white overflow-hidden" id="gallery-section">
      {/* Background Ambience & Grid Accent */}
      <div className="absolute inset-0 bg-radial-[circle_at_top,_#1f0a0d_0%,_#0a0a0a_70%] opacity-70 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-650/15 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Project & Site Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
              Bold Estate <span className="text-red-500">Gallery</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Explore authentic high-resolution snapshots of our verified development corridors, physical layout surveying, transparent title handovers, and active agro plantations across Lagos State & Epe.
            </p>
          </div>

          {/* Quick Stat Pill & Grid Sizing Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Grid Size Switcher */}
            <div className="flex items-center p-1 rounded-2xl bg-neutral-900 border border-white/10 shadow-lg">
              <button
                type="button"
                onClick={() => setGridDensity("extra-large")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  gridDensity === "extra-large"
                    ? "bg-red-650 text-white shadow-md shadow-red-650/30"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="Extra Large (2-Column Immersive View)"
              >
                <Grid2X2 className="w-4 h-4" />
                <span className="hidden sm:inline">Extra Large</span>
              </button>
              <button
                type="button"
                onClick={() => setGridDensity("standard")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  gridDensity === "standard"
                    ? "bg-red-650 text-white shadow-md shadow-red-650/30"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="Grid View (3-Column View)"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">3-Col Grid</span>
              </button>
            </div>

            {/* Quick Stat Pill */}
            <div className="flex items-center gap-3 bg-neutral-900/80 border border-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md shrink-0 shadow-lg">
              <div className="w-9 h-9 rounded-xl bg-red-650/20 border border-red-500/30 flex items-center justify-center text-red-500 font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-black font-mono text-white leading-none">{GALLERY_ITEMS.length}+ Live Assets</div>
                <div className="text-[10px] text-neutral-400 mt-1 font-medium">100% Surveyed & Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-red-650 text-white border-red-500 shadow-lg shadow-red-650/30 scale-[1.02]"
                    : "bg-neutral-900/90 text-neutral-400 border-white/10 hover:text-white hover:border-white/20 hover:bg-neutral-850"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* BOLD IMAGE GRID (HIGH IMPACT EXPANDED SIZE) */}
        <div className={`grid gap-8 ${
          gridDensity === "extra-large"
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}>
          {filteredItems.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => setSelectedImageIndex(idx)}
                className={`group relative rounded-3xl overflow-hidden bg-neutral-950 border-2 border-white/15 hover:border-red-500 transition-all duration-300 shadow-2xl hover:shadow-red-650/25 cursor-pointer flex flex-col ${
                  gridDensity === "extra-large" ? "hover:-translate-y-1.5" : "hover:-translate-y-1"
                }`}
              >
                {/* Image Container with bold zoom & framing */}
                <div className={`relative w-full overflow-hidden bg-neutral-900 ${
                  gridDensity === "extra-large" ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.94] contrast-[1.08] group-hover:brightness-105"
                    onError={(e) => {
                      // Fallback if image fails to load direct png extension
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = "true";
                        target.src = item.imageUrl.replace(/\.png$/, "");
                      }
                    }}
                  />

                  {/* Deep Gradient Overlays for High Contrast Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Video Play Overlay Indicator if item is video */}
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl border-2 border-white/90 group-hover:scale-110 group-hover:bg-red-600 transition-transform duration-300">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Top Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-xs font-mono font-bold tracking-wide uppercase text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Top Right Quick Enlarge Action Icon */}
                  <div className="absolute top-4 right-4 z-10 opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="w-10 h-10 rounded-xl bg-red-650 text-white flex items-center justify-center shadow-xl border border-red-400">
                      {item.isVideo ? <Play className="w-5 h-5 fill-white" /> : <Maximize2 className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Location & Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-1.5 text-xs text-red-400 font-bold font-mono mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <h3 className={`font-black text-white font-display leading-tight group-hover:text-red-400 transition-colors ${
                      gridDensity === "extra-large" ? "text-lg sm:text-2xl" : "text-base sm:text-lg"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Detail Strip */}
                <div className="p-5 sm:p-6 bg-neutral-900/95 border-t border-white/10 flex-1 flex flex-col justify-between">
                  <p className={`text-neutral-300 font-light leading-relaxed ${
                    gridDensity === "extra-large" ? "text-sm sm:text-base line-clamp-3" : "text-xs sm:text-sm line-clamp-2"
                  }`}>
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-neutral-400">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-neutral-300 font-mono text-[11px] uppercase">{item.category}</span>
                    <span className="text-white group-hover:text-red-400 font-bold inline-flex items-center gap-1.5 transition-colors text-xs uppercase tracking-wider">
                      {item.isVideo ? (
                        <>Watch Site Video <Play className="w-4 h-4 text-red-500 fill-red-500" /></>
                      ) : (
                        <>Inspect High-Res Photo <Eye className="w-4 h-4 text-red-500" /></>
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-red-650/10 blur-2xl pointer-events-none" />
          
          <div className="space-y-2 max-w-xl z-10">
            <h4 className="text-xl sm:text-2xl font-black font-display text-white">
              Ready for a Physical Weekend Site Inspection?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Join our weekly free corporate inspection buses departing from Lagos mainland & island to all featured estate hubs.
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenBooking) {
                onOpenBooking();
              } else {
                const el = document.getElementById("contact-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-3.5 rounded-xl bg-red-650 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-650/30 transition-all cursor-pointer active:scale-95 shrink-0 z-10"
            id="book-inspection-from-gallery-btn"
          >
            Book Free Site Inspection
          </button>
        </div>

      </div>

      {/* ============================================================ */}
      {/* FULL-RESOLUTION BOLD LIGHTBOX MODAL                         */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Dedicated Top-Right Floating Mobile Close Button (Always visible on mobile) */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="fixed top-3 right-3 sm:hidden z-[10000] w-11 h-11 rounded-full bg-red-650 text-white flex items-center justify-center shadow-2xl border-2 border-white/30 active:scale-90 cursor-pointer"
              aria-label="Close modal"
              title="Close image view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Container */}
            <div 
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-neutral-950 border-2 border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-neutral-900/90 backdrop-blur-md gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-red-650 text-white text-[11px] sm:text-xs font-mono font-bold shrink-0">
                    {selectedImageIndex + 1} / {filteredItems.length}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-base font-bold text-white font-display truncate">
                      {activeItem.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-red-400 font-mono flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 shrink-0" /> <span className="truncate">{activeItem.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeItem.isVideo && activeItem.videoUrl ? activeItem.videoUrl : activeItem.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors border border-white/10"
                    title={activeItem.isVideo ? "Open video in full view" : "Open original high-resolution"}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedImageIndex(null)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-650 hover:bg-red-600 text-white transition-all border border-red-500 cursor-pointer text-xs font-bold shadow-md active:scale-95"
                    title="Close"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">Close</span>
                  </button>
                </div>
              </div>

              {/* Main Media Stage with bold high-contrast framing */}
              <div className="relative flex-1 min-h-[260px] max-h-[60vh] sm:max-h-[65vh] bg-black flex items-center justify-center overflow-hidden p-2">
                {activeItem.isVideo && activeItem.videoUrl ? (
                  <video
                    src={activeItem.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    poster={activeItem.imageUrl}
                    className="max-h-[58vh] sm:max-h-[62vh] w-auto max-w-full rounded-xl shadow-2xl object-contain bg-black"
                  >
                    <source src={activeItem.videoUrl} type="video/mp4" />
                    Your browser does not support HTML5 video playback.
                  </video>
                ) : (
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[58vh] sm:max-h-[62vh] w-auto max-w-full object-contain rounded-xl shadow-2xl filter contrast-[1.08] brightness-[0.98]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = "true";
                        target.src = activeItem.imageUrl.replace(/\.png$/, "");
                      }
                    }}
                  />
                )}

                {/* Left navigation arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/75 hover:bg-red-650 text-white border border-white/20 transition-all active:scale-90 cursor-pointer shadow-xl backdrop-blur-md z-20"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Right navigation arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/75 hover:bg-red-650 text-white border border-white/20 transition-all active:scale-90 cursor-pointer shadow-xl backdrop-blur-md z-20"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Footer Information Box */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-neutral-900/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="space-y-1 max-w-2xl min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-neutral-300 font-semibold">
                      {activeItem.category}
                    </span>
                    {activeItem.isVideo && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-red-600/30 text-red-400 border border-red-500/30 font-semibold flex items-center gap-1">
                        <Video className="w-3 h-3" /> Live Video
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" /> Fully Surveyed Plot
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                    {activeItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-between sm:justify-end pt-1 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <button
                    onClick={() => setSelectedImageIndex(null)}
                    className="sm:hidden px-3.5 py-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white font-bold text-xs uppercase border border-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setSelectedImageIndex(null);
                      if (onOpenBooking) onOpenBooking();
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-red-650 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md text-center"
                  >
                    Inquire on This Plot
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

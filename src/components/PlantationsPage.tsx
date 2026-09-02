import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { 
  Sprout, 
  Leaf, 
  TrendingUp, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Maximize2, 
  CheckCircle, 
  ChevronDown, 
  MessageSquare, 
  PhoneCall, 
  Calendar, 
  ChevronRight, 
  X, 
  Trees, 
  Coins, 
  ClipboardCheck, 
  Compass, 
  ExternalLink 
} from "lucide-react";

// Hook/component helper for numeric count up animation with viewport detection
function PlantationCountUp({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const end = value;
      if (end === 0) return;
      
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * end);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={containerRef} className="tabular-nums font-extrabold font-display">
      {prefix}{count}{suffix}
    </div>
  );
}

// Falling leaf floating effect element configuration
interface LeafConfig {
  id: number;
  left: string;
  delay: number;
  duration: number;
  scale: number;
  rotateEnd: number;
}

// Photos in the Premium Gallery
const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Rich Oil Palm Nursery",
    category: "Oil Palm Farms",
    url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1200",
    description: "Carefully selected premium high-yield hybrid Dura/Pisifera oil palm sprouts on our nurturing soils."
  },
  {
    id: 2,
    title: "Swaying Palm Plantation",
    category: "Oil Palm Farms",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    description: "Expansive layout of advanced-growth palms engineered to maximize space and high solar assimilation."
  },
  {
    id: 3,
    title: "Melina Timber Stand",
    category: "Melina Plantations",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200",
    description: "Precision-planted Melina hardwoods showcasing consistent diameter maturation and robust health."
  },
  {
    id: 4,
    title: "Advanced Farm Machinery",
    category: "Farm Machinery",
    url: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1200",
    description: "Modern soil preparation and asset security fleets deployed across all agricultural layouts."
  },
  {
    id: 5,
    title: "Irrigation & Maintenance",
    category: "Plantation Maintenance",
    url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200",
    description: "Dedicated agronomy and water conservation mechanisms checking tree vitality and growth daily."
  },
  {
    id: 6,
    title: "Rich Harvest Yields",
    category: "Harvest Activities",
    url: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1200",
    description: "Heavy clusters of fresh fruit bunches collected and ready for premium oil formulation."
  }
];

export default function PlantationsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "palm" | "melina">("all");
  const [lightboxImage, setLightboxImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Custom Lead form state
  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Oil Palm Plot",
    size: "1 Plot",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Floating leaves creation (re-generate state once or hold persistently)
  const [leaves, setLeaves] = useState<LeafConfig[]>([]);
  useEffect(() => {
    const freshLeaves: LeafConfig[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 15,
      scale: 0.5 + Math.random() * 0.8,
      rotateEnd: 180 + Math.random() * 360
    }));
    setLeaves(freshLeaves);
  }, []);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) {
      alert("Please provide your Name and Phone number.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const finalizeWhatsAppBooking = () => {
    const text = `Hello LandSeeds Plantations Team, I am interested in agricultural investment on your platform!
    
*Name*: ${leadForm.name}
*Phone*: ${leadForm.phone}
*Email*: ${leadForm.email || "Not Provided"}
*Investment of Interest*: ${leadForm.interest}
*Desired Scale/Size*: ${leadForm.size}
*Customer Note*: ${leadForm.message || "None"}`;

    window.open(`https://wa.me/2348108640108?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const triggerDirectWhatsApp = (subject: string) => {
    const text = `Hello LandSeeds Team, I would like to speak with an agricultural counselor regarding: ${subject}`;
    window.open(`https://wa.me/2348108640108?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const openPhoneCall = () => {
    window.location.href = "tel:+2348108640108";
  };

  return (
    <div className="bg-black text-white relative min-h-screen selection:bg-[#0B6B2E] selection:text-white pb-16">
      
      {/* ========================================== */}
      {/* LUXURY GREEN PARALLAX HERO CONTAINER       */}
      {/* ========================================== */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        
        {/* Parallax Background Frame */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-in-out scale-105 pointer-events-none"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.85) 70%, rgba(0, 0, 0, 1.0) 100%), url('https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1600')` 
          }}
        />

        {/* Diagonal Wave & Subtle Grid Accent overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b6b2e0c_1px,transparent_1px),linear-gradient(to_bottom,#0b6b2e0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

        {/* 1. ANIMATION: Flying birds across background (Subtle, elegant) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
          <motion.div 
            initial={{ x: "-10%", y: "25%", scale: 0.6, opacity: 0 }}
            animate={{ 
              x: "110%", 
              y: "15%",
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear",
              delay: 2 
            }}
            className="absolute flex gap-6"
          >
            {/* Custom SVG premium crane/bird vector */}
            {[1, 2, 3].map((b) => (
              <svg 
                key={b} 
                className={`w-6 h-6 text-[#F5B700]/30 transform ${b === 2 ? "translate-y-4 -translate-x-3 scale-75" : b === 3 ? "-translate-y-3 -translate-x-6 scale-50" : ""}`}
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2L9 9H15L12 2ZM3 13L10 11V14L3 13ZM21 13L14 11V14L21 13Z" />
              </svg>
            ))}
          </motion.div>
        </div>

        {/* 2. ANIMATION: Beautiful Floating/Drifting Autumn and Spring Leaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
          {leaves.map((leaf) => (
            <motion.div
              key={leaf.id}
              initial={{ y: -50, x: leaf.left, rotation: 0, opacity: 0 }}
              animate={{
                y: "110vh",
                x: `calc(${leaf.left} + ${Math.sin(leaf.id) * 60}px)`,
                rotate: leaf.rotateEnd,
                opacity: [0, 0.7, 0.5, 0]
              }}
              transition={{
                duration: leaf.duration,
                repeat: Infinity,
                delay: leaf.delay,
                ease: "linear"
              }}
              className="absolute text-[#0B6B2E]/25 select-none"
              style={{ scale: leaf.scale }}
            >
              <Leaf className="w-8 h-8 fill-current stroke-0" />
            </motion.div>
          ))}
        </div>

        {/* Content Panel */}
        <div className="relative max-w-7xl mx-auto px-6 z-10 w-full text-center">
          
          {/* Gold Badge Category Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B6B2E]/10 border border-[#0B6B2E]/30 text-[#F5B700] text-xs font-semibold tracking-wider uppercase mb-8"
          >
            <Sprout className="w-3.5 h-3.5 animate-pulse" />
            <span>LandSeeds Plantations Agricultural Desk</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display leading-[1.1] text-white tracking-tight"
          >
            Grow Wealth Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B6B2E] via-green-500 to-[#F5B700]">
              Agricultural Investments
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto mt-6 font-light leading-relaxed"
          >
            Own productive plantation assets and secure long-term value through LandSeeds Plantations. Rich estate management, high passive returns, and absolute legal backing.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 max-w-md mx-auto"
          >
            <a
              href="#oil-palm-pricing"
              className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 bg-[#0B6B2E] hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#0B6B2E]/20"
            >
              Invest Now <ChevronRight className="w-4 h-4 text-[#F5B700]" />
            </a>
            <button
              onClick={() => triggerDirectWhatsApp("Agricultural Advisory & Inquiry")}
              className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 bg-black/80 border border-neutral-800 hover:border-[#0B6B2E] text-neutral-300 hover:text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> Speak With Advisor
            </button>
          </motion.div>

          {/* 3. ANIMATED STATISTICS MATRIX */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-20 border-t border-white/5 pt-12 text-left"
          >
            {/* Stat Component 1 */}
            <div className="bg-neutral-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#0B6B2E]/30 transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B6B2E] group-hover:text-emerald-450 transition-colors flex items-baseline">
                <PlantationCountUp value={100} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wide">Acres Managed</div>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-light">Fertile agricultural spreads fully operational under premium oversight</p>
            </div>

            {/* Stat Component 2 */}
            <div className="bg-neutral-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#0B6B2E]/30 transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F5B700] flex items-baseline">
                <PlantationCountUp value={10} suffix="K+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wide">Flowering Trees</div>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-light">Thousands of meticulously nurtured crop strains in constant growth cycle</p>
            </div>

            {/* Stat Component 3 */}
            <div className="bg-neutral-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#0B6B2E]/30 transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B6B2E] flex items-baseline">
                <PlantationCountUp value={100} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wide">Ownership Model</div>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-light">Full land registry structure and physical farm allocation guarantees</p>
            </div>

            {/* Stat Component 4 */}
            <div className="bg-neutral-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#0B6B2E]/30 transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline">
                <PlantationCountUp value={25} suffix="%+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wide">Annual Target Yield</div>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-light">High performance biomass growth indexes outpacing common systems</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================== */}
      {/* ABOUT PLANTATIONS SECTION                  */}
      {/* ========================================== */}
      <section id="about-plantations" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-radial-[circle_at_bottom_left,_var(--color-[#0b6b2e15])_0%,_transparent_55%]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Graphics Grid Block */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden border border-[#0B6B2E]/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800" 
                  alt="Laying out farm plantations" 
                  className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Floating Gold Overlay Badge inside Graphic */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/90 border border-white/10 rounded-2xl backdrop-blur-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B6B2E]/10 flex items-center justify-center border border-[#0B6B2E]/20 text-[#0B6B2E]">
                      <Award className="w-5 h-5 text-[#F5B700]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Guaranteed Agro-Equity</h4>
                      <p className="text-[11px] text-neutral-400">Insured physical layouts and titled deeds</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0B6B2E]/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Right Story & Content Block */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#0B6B2E] font-mono text-xs uppercase tracking-wider block font-semibold">
                Strategic Agro-Slick Portfolios
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white tracking-tight">
                Why Invest In Plantations?
              </h2>

              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base font-light">
                <strong>LandSeeds Plantations</strong> offers smart investors the golden opportunity to own productive, tangible agricultural assets through systematically managed premium plantation projects across high-yield axes. 
              </p>
              
              <p className="text-neutral-400 leading-relaxed text-sm font-light">
                Unlike complex financial derivatives or volatile assets, plantations represent physical real estate assets that multiply in value as trees grow, mature, and supply high-demand consumer and industrial products like palm oil and premium timber forests.
              </p>

              {/* Benefits checklist with custom luxury icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
                {[
                  {
                    title: "Tangible Asset Ownership",
                    desc: "Genuine physical deeds of layouts plus assigned mature tree indexes."
                  },
                  {
                    title: "Long-Term Value Growth",
                    desc: "Witness your valuation double as the plantation matures into harvest."
                  },
                  {
                    title: "Agricultural Wealth Creation",
                    desc: "An organic compound engine securing your capital against inflation."
                  },
                  {
                    title: "Professional Farm Management",
                    desc: "Under strict supervision of top agronomists, freeing you of physical labor."
                  },
                  {
                    title: "Secure Investment Structure",
                    desc: "Zero debt liabilities. Solid equity ownership structures for long term."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0B6B2E]/20 flex items-center justify-center text-[#F5B700] mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#F5B700]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{benefit.title}</h4>
                      <p className="text-[11px] text-neutral-450 mt-0.5 leading-snug">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* OIL PALM PLANTATIONS SECTION               */}
      {/* ========================================== */}
      <section id="oil-palm-pricing" className="relative py-24 sm:py-32 bg-neutral-950/40 border-t border-b border-white/5">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right,_var(--color-[#0b6b2e12])_0%,_transparent_60%]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#F5B700] font-mono text-xs uppercase tracking-wider block font-semibold">
              Liquid Gold of Agribusiness
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
              LandSeeds Oil Palm Plantation
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Nourished by rain and premium tropical soil layout profiles, our Oil Palm assets deliver continuous compound appreciation. Explore pricing options below.
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: 1 Plot Pack */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-black/80 rounded-3xl border border-white/10 hover:border-[#0B6B2E] transition-all duration-300 overflow-hidden relative group"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-[#0B6B2E]" />
              <div className="p-8 sm:p-10 space-y-6">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-[#0B6B2E]/20 text-[#0B6B2E]">
                      Individual Portfolio
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-3">
                      1 Plot Package
                    </h3>
                  </div>
                  <div className="p-3 bg-neutral-900 rounded-xl text-[#0B6B2E] border border-white/5">
                    <Sprout className="w-6 h-6" />
                  </div>
                </div>

                <div className="border-t border-b border-white/5 py-5 flex items-baseline gap-2">
                  <span className="text-neutral-400 text-sm font-medium">Cost:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#F5B700] font-display">
                    ₦1,000,000
                  </span>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Excellent entry-level parcel designed for long-term secure wealth storage. Insulates cash from devaluation.
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Package Inclusions:</h4>
                  {[
                    "10 High-Yield Hybrid Oil Palm Trees",
                    "Complete crop monitoring & soil nutrition cycles",
                    "Standard Registered Layout Survey Allocation",
                    "Secure digital title deeds with physical survey logs"
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-[#0B6B2E] mt-0.5">✔</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="# plantation-reservation-form"
                    onClick={() => {
                      setLeadForm(prev => ({ ...prev, interest: "Oil Palm Plot", size: "1 Plot" }));
                      document.getElementById("plantation-reservation-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full text-center block cursor-pointer bg-neutral-900 hover:bg-[#0B6B2E] text-white font-bold text-xs tracking-wider uppercase py-4 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent"
                  >
                    Reserve Your Plot
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2: 1 Acre Pack (Premium Choice) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-black/80 rounded-3xl border-2 border-[#0B6B2E] hover:shadow-xl hover:shadow-[#0B6B2E]/5 transition-all duration-300 overflow-hidden relative group"
            >
              {/* Hot Accent gold ribbon */}
              <div className="absolute top-0 right-0 p-1 px-4 bg-[#F5B700] text-black text-[9px] font-extrabold tracking-widest uppercase rounded-bl-xl font-display z-10">
                Most Preferred Strategy
              </div>
              <div className="p-8 sm:p-10 space-y-6">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-[#F5B700]/10 text-[#F5B700]">
                      Commercial Block Allocation
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-3">
                      1 Acre Package
                    </h3>
                  </div>
                  <div className="p-3 bg-[#0B6B2E]/10 rounded-xl text-[#F5B700] border border-[#0B6B2E]/20">
                    <Trees className="w-6 h-6" />
                  </div>
                </div>

                <div className="border-t border-b border-white/5 py-5 flex items-baseline gap-2">
                  <span className="text-neutral-400 text-sm font-medium">Cost:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#F5B700] font-display">
                    ₦5,500,000
                  </span>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Bulk commercial acreage tailored to investors aiming for substantial biomass yield and high capital appreciation.
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Package Inclusions:</h4>
                  {[
                    "60 Elite Dura/Pisifera High-Yield Trees",
                    "Priority professional harvesting and off-take channels",
                    "Custom block survey assignment under corporate supervision",
                    "100% equity land deed assignment of layout"
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-[#F5B700] mt-0.5">✔</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#plantation-reservation-form"
                    onClick={() => {
                      setLeadForm(prev => ({ ...prev, interest: "Oil Palm Acre", size: "1 Acre" }));
                      document.getElementById("plantation-reservation-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full text-center block cursor-pointer bg-[#0B6B2E] hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase py-4 rounded-xl transition-all duration-300"
                  >
                    Reserve Your Plot
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Interactive tagged locations of Ogun State */}
          <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-neutral-900/50 border border-white/5 text-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Strategic Farmland Locations (all across Ogun State corridors)
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {["Ijebu Ogbere Hub", "Ilaro Corridor", "Ilishan Development Node", "Jekasale Plot Block"].map((loc, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-neutral-100 bg-neutral-950 border border-white/10 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-[#0B6B2E]" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* MELINA PLANTATIONS SECTION                 */}
      {/* ========================================== */}
      <section id="melina-pricing" className="relative py-24 sm:py-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-radial-[circle_at_bottom_right,_var(--color-[#0b6b2e10])_0%,_transparent_55%]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#0B6B2E] font-mono text-xs uppercase tracking-wider block font-semibold">
              Rooted In Value. Growing In Excellence.
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
              LandSeeds Melina Plantations
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Melina trees produce highly valued wood used worldwide for wood, paper pulp, and luxury furniture. Our model maps real timber value indices directly back to your secure estate portfolio.
            </p>
          </div>

          {/* Card-based layout for mobile screens */}
          <div className="max-w-5xl mx-auto space-y-4 md:hidden">
            {[
              {
                title: "1 Plot Standard",
                desc: "Perfect entry portfolio",
                density: "100 Trees",
                mv: "₦2,000,000",
                cost: "₦1,000,000"
              },
              {
                title: "1 Acre Block",
                desc: "Most Recommended for Families",
                density: "600 Trees",
                mv: "₦12,000,000",
                cost: "₦5,505,000",
                highlight: true
              },
              {
                title: "5 Acres Commercial",
                desc: "High yields commercial arbitrage",
                density: "3000 Trees",
                mv: "₦60,000,000",
                cost: "₦25,000,000"
              },
              {
                title: "10 Acres Industrial Forest",
                desc: "Ultimate HN-Wealth Strategy",
                density: "6000 Trees",
                mv: "₦120,000,000",
                cost: "₦50,000,000",
                highlightGold: true
              }
            ].map((pkg, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border bg-neutral-900/40 backdrop-blur-lg space-y-4 ${
                  pkg.highlight 
                    ? "border-[#0B6B2E]" 
                    : pkg.highlightGold 
                    ? "border-[#F5B700]/40" 
                    : "border-white/10"
                }`}
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="text-base font-bold text-white font-display">{pkg.title}</h4>
                    <span className={`text-[10px] block mt-0.5 ${pkg.highlight ? "text-[#F5B700] font-semibold" : pkg.highlightGold ? "text-emerald-450 font-semibold" : "text-neutral-400"}`}>
                      {pkg.desc}
                    </span>
                  </div>
                  <span className="text-[10px] bg-neutral-950 border border-white/5 text-neutral-300 px-2.5 py-1 rounded-full font-mono font-medium shrink-0">
                    {pkg.density}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs">
                  <div>
                    <span className="text-neutral-500 block text-[9px] uppercase tracking-wider font-sans font-medium mb-1">Market Value</span>
                    <span className="text-[#F5B700] font-mono font-semibold">{pkg.mv}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-500 block text-[9px] uppercase tracking-wider font-sans font-medium mb-1">Investment Cost</span>
                    <span className="text-[#0B6B2E] font-mono font-extrabold">{pkg.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium modern pricing table design */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 backdrop-blur-lg hidden md:block">
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-900/90 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider border-b border-white/10">
                    <th className="py-5 px-6">Package Breakdown</th>
                    <th className="py-5 px-4 text-center">Tree Density</th>
                    <th className="py-5 px-4 text-[#F5B700] text-center">Current Wood Market Value</th>
                    <th className="py-5 px-6 text-[#0B6B2E] text-right">Exclusive Agro Investment Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      1 Plot Standard
                      <span className="block text-[10px] text-neutral-400 font-normal mt-0.5">Perfect entry portfolio</span>
                    </td>
                    <td className="py-5 px-4 text-center text-neutral-300">100 Trees</td>
                    <td className="py-5 px-4 text-center text-[#F5B700] font-mono font-medium">₦2,000,000</td>
                    <td className="py-5 px-6 text-right text-white font-mono font-extrabold">
                      <span className="text-[#0B6B2E]">₦1,000,000</span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-neutral-900/30 transition-colors bg-white/[0.01]">
                    <td className="py-5 px-6 font-semibold text-white">
                      1 Acre Block
                      <span className="block text-[10px] text-[#F5B700] font-semibold mt-0.5">Most Recommended for Families</span>
                    </td>
                    <td className="py-5 px-4 text-center text-neutral-300">600 Trees</td>
                    <td className="py-5 px-4 text-center text-[#F5B700] font-mono font-medium">₦12,000,000</td>
                    <td className="py-5 px-6 text-right text-white font-mono font-extrabold">
                      <span className="text-[#0B6B2E]">₦5,500,000</span>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      5 Acres Commercial
                      <span className="block text-[10px] text-neutral-400 font-normal mt-0.5">High yields commercial arbitrage</span>
                    </td>
                    <td className="py-5 px-4 text-center text-neutral-300">3000 Trees</td>
                    <td className="py-5 px-4 text-center text-[#F5B700] font-mono font-medium">₦60,000,000</td>
                    <td className="py-5 px-6 text-right text-white font-mono font-extrabold">
                      <span className="text-[#0B6B2E]">₦25,000,000</span>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-neutral-900/30 transition-colors bg-white/[0.01]">
                    <td className="py-5 px-6 font-semibold text-white">
                      10 Acres Industrial Forest
                      <span className="block text-[10px] text-emerald-400 font-semibold mt-0.5">Ultimate HN-Wealth Strategy</span>
                    </td>
                    <td className="py-5 px-4 text-center text-neutral-300">6000 Trees</td>
                    <td className="py-5 px-4 text-center text-[#F5B700] font-mono font-medium">₦120,000,000</td>
                    <td className="py-5 px-6 text-right text-white font-mono font-extrabold">
                      <span className="text-[#0B6B2E]">₦50,000,000</span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Disclaimer block */}
            <div className="p-5 bg-[#0B6B2E]/5 border-t border-white/10 text-center">
              <p className="text-[11px] sm:text-xs text-neutral-400 italic">
                <span className="text-[#F5B700] font-bold uppercase not-italic mr-2">Advisory Disclaimer:</span>
                "LandSeeds Melina Plantations is not a debt model. It is 100% ownership (equity-based investment)."
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="#plantation-reservation-form"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs uppercase font-bold tracking-wider border border-white/10 transition-colors"
            >
              Consult Pricing Tables in Detail
            </a>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* INVESTMENT BENEFITS CARD GRID              */}
      {/* ========================================== */}
      <section id="benefits-plantations" className="relative py-24 sm:py-32 bg-neutral-950/20 border-b border-white/5">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#0B6B2E] font-mono text-xs uppercase tracking-wider block font-semibold">
              Engineered Safety & Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white tracking-tight">
              Premium Investment Benefits
            </h2>
            <p className="text-sm font-light text-neutral-400">
              Every crop node represents structured micro-economic excellence. We secure your future on soil with top parameters.
            </p>
          </div>

          {/* Animated Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#0B6B2E]" />,
                title: "Asset Ownership",
                desc: "Legally registered layout deed allocation map values representing continuous wealth security bounds."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-[#F5B700]" />,
                title: "Agricultural Growth",
                desc: "Leverage standard high solar assimilation indexing speeds for quick plant growth and wood formation."
              },
              {
                icon: <ClipboardCheck className="w-6 h-6 text-[#0B6B2E]" />,
                title: "Professional Farm Management",
                desc: "Expert agronomy specialists, routine inspection reviews, security bounds, and ongoing maintenance schedules."
              },
              {
                icon: <Maximize2 className="w-6 h-6 text-[#F5B700]" />,
                title: "Scalable Investment Opportunities",
                desc: "Add multiple plots easily as your portfolios mature over the commercial farming timeframe."
              },
              {
                icon: <Coins className="w-6 h-6 text-[#0B6B2E]" />,
                title: "Long-Term Value Appreciation",
                desc: "As demand for palm oil and processed timber forest products grows, physical equity indexes increase linearly."
              },
              {
                icon: <Award className="w-6 h-6 text-[#F5B700]" />,
                title: "Trusted Investment Structure",
                desc: "Protected under strict Nigerian Corporate Laws and corporate governance standard protocols."
              }
            ].map((btn, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-black/95 p-6 rounded-2xl border border-white/5 hover:border-[#0B6B2E]/30 text-left space-y-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-neutral-900 rounded-xl border border-white/5">
                    {btn.icon}
                  </div>
                  <h3 className="font-bold text-white text-base font-display">{btn.title}</h3>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  {btn.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* PHOTO GALLERY SECTION & LIGHTBOX OPTION    */}
      {/* ========================================== */}
      <section id="gallery-plantations" className="relative py-24 sm:py-32 bg-black overflow-hidden border-b border-white/5">
        <div className="realative max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
            <div className="text-center sm:text-left space-y-2">
              <span className="text-[#F5B700] font-mono text-xs uppercase tracking-wider block font-semibold">
                Captured On Ground
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white tracking-tight">
                LandSeeds Plantation Gallery
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { label: "All Photos", id: "all" },
                { label: "Oil Palm", id: "palm" },
                { label: "Melina Stands", id: "melina" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveTab(btn.id as any)}
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                    activeTab === btn.id 
                      ? "bg-[#0B6B2E] border-transparent text-white" 
                      : "bg-neutral-900 border-white/5 text-neutral-400 hover:text-white"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.filter(img => {
              if (activeTab === "all") return true;
              if (activeTab === "palm") return img.category === "Oil Palm Farms";
              if (activeTab === "melina") return img.category === "Melina Plantations";
              return true;
            }).map((img) => (
              <motion.div
                layout
                key={img.id}
                whileHover={{ y: -5 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-lg bg-neutral-900 cursor-pointer"
                onClick={() => setLightboxImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
                
                {/* Static Text details on hover */}
                <div className="absolute bottom-5 left-5 right-5 z-10 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] font-bold text-[#F5B700] uppercase tracking-wider block">
                    {img.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1 flex items-center justify-between">
                    <span>{img.title}</span>
                    <Maximize2 className="w-4 h-4 text-[#0B6B2E]" />
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={() => setLightboxImage(null)}
              />

              {/* Floating Mobile Top-Right Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="fixed top-3 right-3 sm:hidden z-[60] w-11 h-11 rounded-full bg-[#0B6B2E] text-white flex items-center justify-center shadow-2xl border-2 border-white/30 active:scale-90 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 z-10 max-h-[92vh] flex flex-col"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-black/80 text-white rounded-full p-2.5 sm:p-2.5 hover:bg-[#0B6B2E] transition-colors cursor-pointer border border-white/15"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[4/3] sm:aspect-[16/10] max-h-[55vh] sm:max-h-[65vh] w-full overflow-hidden bg-black flex items-center justify-center p-2">
                  <img 
                    src={lightboxImage.url} 
                    alt={lightboxImage.title} 
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                </div>

                <div className="p-4 sm:p-8 space-y-2 bg-neutral-950 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-bold text-[#F5B700] uppercase tracking-wider block">
                      {lightboxImage.category}
                    </span>
                    <h3 className="text-base sm:text-2xl font-bold font-display text-white">
                      {lightboxImage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      {lightboxImage.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="sm:hidden w-full py-2.5 rounded-xl bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider border border-white/10"
                  >
                    Close Image
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* ========================================== */}
      {/* faq SECTION                                */}
      {/* ========================================== */}
      <section id="faq-plantations" className="relative py-24 sm:py-32 bg-neutral-950/40 border-b border-white/5">
        <div className="relative max-w-4xl mx-auto px-6">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#0B6B2E] font-mono text-xs uppercase tracking-wider block font-semibold">
              Get Instant Clarified Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm font-light text-neutral-400 max-w-xl mx-auto">
              Find transparent info regarding administrative bounds, ownership allocations, harvests, and agricultural passive growth structures.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {[
              {
                q: "How does plantation ownership work?",
                a: "Investors acquire deeds mapping directly to actual plot segments within our managed plantations. We physically plant, nurture, and log your asset trees under premium agroforestry conditions. Since it represents a 100% equity model, you retain complete physical equity parameters corresponding to the assets."
              },
              {
                q: "What happens after purchase?",
                a: "Upon complete purchase, LandSeeds processes your corporate deed allocation, Registered Layout plans, and assigns you tree indices. The agronomist management team provides ongoing maintenance, land clearing, biological security, and periodic report updates."
              },
              {
                q: "Can I buy multiple plots?",
                a: "Absolutely. We encourage smart investors to stack plots. You can transition from a single plot into dynamic multi-acre holdings of Oil Palm or Melina hardwoods to maximize compound capital gains."
              },
              {
                q: "Do I receive ownership documents?",
                a: "Yes. Every investor is legally handed over a registered deed of assignment, physical survey map layout coordinates, and a certified agro-equity allocation contract under stamp seals of corporate attorneys."
              },
              {
                q: "How are plantations managed?",
                a: "We deploy expert agronomists, custom heavy farm tractors, advanced irrigation cycles, and persistent secure physical barriers. All labor is fully outsourced via our corporate maintenance desk structure, so you can enjoy high asset growth with zero local operational stress."
              }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-white/5 hover:border-[#0B6B2E]/20 rounded-xl bg-black/90 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-sm sm:text-base font-bold text-white uppercase tracking-wide cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#F5B700] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-neutral-900/40 text-xs sm:text-sm text-neutral-400 px-6 pb-6 leading-relaxed font-light border-t border-white/5 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* RESERVATION LEAD FORM & DIRECT CONTACT     */}
      {/* ========================================== */}
      <section id="plantation-reservation-form" className="relative py-24 sm:py-32 bg-black overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--color-[#0b6b2e15])_0%,_transparent_65%]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Description panel */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="text-[#F5B700] font-mono text-xs uppercase tracking-wider block font-semibold">
                Start Growing Real Value Now
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] text-white tracking-tight">
                Start Your Agricultural Investment Journey
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                Connect deeply with land assets. Secure high appreciation variables today before physical slots sell out across our Ogun State sectors.
              </p>

              {/* Instant Action buttons */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <button
                  onClick={() => triggerDirectWhatsApp("General Planting Project Inquiry")}
                  className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl bg-[#0B6B2E]/10 hover:bg-[#0B6B2E]/20 border border-[#0B6B2E]/30 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Planting Desk
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#F5B700]" />
                </button>

                <button
                  onClick={openPhoneCall}
                  className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-white/5 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <PhoneCall className="w-4 h-4 text-[#F5B700]" /> Call Planting Advisor Directly
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
              </div>

              {/* Dynamic stamp/policy label */}
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0B6B2E]/10 flex items-center justify-center border border-[#0B6B2E]/20 text-[#0B6B2E]">
                  ✔
                </div>
                <p className="text-[11px] text-neutral-400 font-light leading-tight">
                  Tours are fully scheduled. Registered investors receive prioritized premium access plots.
                </p>
              </div>
            </div>

            {/* Right Form Interactive Panel */}
            <div className="lg:col-span-7 bg-neutral-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative">
              
              <div className="absolute top-0 right-10 -translate-y-1/2 px-3 py-1 bg-[#0B6B2E] text-white text-[10px] uppercase font-bold tracking-wider rounded-md">
                Secure Agricultural Booking Portal
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleLeadSubmit} className="space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-white">Plantation Pre-Reservation</h3>
                    <p className="text-xs text-neutral-400">Secure prioritised farm allocation logs securely online</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider block">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Samuel Kolawood"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full text-xs font-medium px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-[#0B6B2E] text-white placeholder-neutral-600 outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider block">Phone Number *</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="e.g. +234 812 345 6789"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="w-full text-xs font-medium px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-[#0B6B2E] text-white placeholder-neutral-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider block">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="e.g. samuel@example.com"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="w-full text-xs font-medium px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-[#0B6B2E] text-white placeholder-neutral-600 outline-none transition-all"
                      />
                    </div>

                    {/* Interest type */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider block">Plantation Choice</label>
                      <select 
                        value={leadForm.interest}
                        onChange={(e) => setLeadForm({ ...leadForm, interest: e.target.value })}
                        className="w-full text-xs font-medium px-4 py-3.5 bg-black border border-white/10 rounded-xl focus:border-[#0B6B2E] text-white outline-none transition-all"
                      >
                        <option value="Oil Palm Plot">LandSeeds Oil Palm: 1 Plot Pack</option>
                        <option value="Oil Palm Acre">LandSeeds Oil Palm: 1 Acre Pack</option>
                        <option value="Melina Plot">LandSeeds Melina Wood: 1 Plot Pack</option>
                        <option value="Melina Acre">LandSeeds Melina Wood: 1 Acre Pack</option>
                        <option value="Melina Bulk">LandSeeds Melina Wood: 5+ Acres Commercial</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Size scale */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider block">Investment Scale</label>
                      <select 
                        value={leadForm.size}
                        onChange={(e) => setLeadForm({ ...leadForm, size: e.target.value })}
                        className="w-full text-xs font-medium px-4 py-3.5 bg-black border border-white/10 rounded-xl focus:border-[#0B6B2E] text-white outline-none transition-all"
                      >
                        <option value="1 Plot">1 Plot</option>
                        <option value="1 Acre">1 Acre Block</option>
                        <option value="5 Acres">5 Acres Commercial Block</option>
                        <option value="10 Acres">10+ Acres Industrial Forest</option>
                      </select>
                    </div>

                    {/* Booking Date */}
                    <div className="space-y-1.5 font-sans">
                      <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider block">Inspection Schedule Date</label>
                      <input 
                        type="date"
                        className="w-full text-xs font-medium px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-[#0B6B2E] text-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider block">Add Custom Inquiry Parameters</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Nurturing timeline, legal deed structure questions, or customized bulk payment terms"
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      className="w-full text-xs font-medium px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-[#0B6B2E] text-white placeholder-neutral-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-[#0B6B2E] hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-[#0B6B2E]/20 text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? "Processing Agro Record..." : "Book Plantation Consultation"}
                    </button>
                  </div>

                </form>
              ) : (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-[#0B6B2E]/20 border border-[#0B6B2E]/40 text-[#0B6B2E] rounded-full flex items-center justify-center mx-auto text-2xl font-bold animate-bounce">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-display">Reservation Initiated</h3>
                    <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                      Thank you for submitting your profile. Your agricultural asset advisor will connect to verify your slot allocations right away.
                    </p>
                  </div>

                  <div className="p-4 bg-[#0B6B2E]/10 rounded-2xl border border-[#0B6B2E]/20 max-w-sm mx-auto text-left space-y-2">
                    <h4 className="text-[11px] font-bold text-[#F5B700] uppercase tracking-wider">Recommended Next Step</h4>
                    <p className="text-xs text-neutral-300 leading-snug">
                      Instantly submit your parameters via WhatsApp to priority support for instant confirmation.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={finalizeWhatsAppBooking}
                      className="px-6 py-3.5 bg-[#0B6B2E] hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" /> Dispatch via WhatsApp
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-white/5 cursor-pointer"
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

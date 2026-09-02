/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Estate, WhyChooseItem, CounterStat, Testimonial } from "./types";

export const ESTATES_DATA: Estate[] = [
  {
    id: "epe-phase-1",
    title: "The Seeds Estate – Epe Phase 1",
    location: "Mojoda, Epe, Lagos State",
    prices: {
      250: 500000,
      500: 800000
    },
    features: [
      "100% dry and level tableland",
      "Perimeter fencing completed",
      "Access road directly from major highway",
      "Rapid capital appreciation zone"
    ],
    documentation: "Deed of Assignment & Registered Survey",
    status: "Selling Fast",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
    highlights: "Nestled in the robust commercial landscape of Epe, Phase 1 offers immediate gateway positioning with incredible convenience and value."
  },
  {
    id: "ketu-epe",
    title: "The Seeds Estate – Ketu Epe",
    location: "Ketu-Epe, Epe, Lagos State",
    prices: {
      250: 500000,
      500: 800000
    },
    features: [
      "Free from government acquisition",
      "Immediate physical allocation",
      "Proximity to Lekki-Epe expressway corridor",
      "Excellent commercial warehouse potential"
    ],
    documentation: "Registered Survey & Family Receipt",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    highlights: "Unlock high-yield land appreciation advantages. Perfect for smart housing, agriculture, or merchant-resident hubs in Ketu, Epe."
  },
  {
    id: "itokin-epe",
    title: "The Seeds Estate – Itokin Epe",
    location: "Itokin, Epe, Lagos State",
    prices: {
      250: 500000,
      500: 800000
    },
    features: [
      "Close to major expressways and logistics hubs",
      "Gated community with standard layouts",
      "Perfect for residential and commercial development",
      "Electricity grid connection ongoing"
    ],
    documentation: "Approved Land Layout & C of O in Progress",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1200",
    highlights: "Positioned next to the industrial powerhouse and key expressways of Lagos. Invest where workers and subcontractors are constantly looking for housing."
  },
  {
    id: "alaro-corridor",
    title: "The Seeds Estate – Alaro Axis",
    location: "Alaro City Area, Epe, Lagos State",
    prices: {
      250: 1300000,
      500: 2000000
    },
    features: [
      "Densely populated neighborhood",
      "15 minutes drive to Alaro City industrial grid",
      "Ready for instant residential construction",
      "Accessible during any wet or dry season"
    ],
    documentation: "Excision & Survey Map",
    status: "Limited Slots",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    highlights: "Suburban living at its absolute finest. Located along the critical link between Lekki Free Trade Zone and Epe's historic centers."
  },
  {
    id: "epe-marina",
    title: "The Seeds Estate – Epe Marina",
    location: "Marina Road Axis, Epe, Lagos State",
    prices: {
      250: 2500000,
      500: 4000000
    },
    features: [
      "Secured master-planned layout",
      "Direct transit paths to industrial estates",
      "Modern drainage and solar street lighting",
      "Maximum double-digit annual appreciation"
    ],
    documentation: "Registered Survey (Fully Verified)",
    status: "Selling Fast",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    highlights: "Premium standard ecosystem located in the Epe Industrial Corridor. The ultimate sanctuary for long-term high net-worth investors."
  },
  {
    id: "temu-epe",
    title: "The Seeds Estate – Temu Epe",
    location: "Temu, Epe, Lagos State",
    prices: {
      250: 650000,
      500: 1000000
    },
    features: [
      "Direct proximity to Augustine University Epe",
      "High Student Hostel development potential",
      "Beautiful scenic environment",
      "Lagos State - Epe growth corridor"
    ],
    documentation: "Government Registered Survey",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    highlights: "Capitalize on high educational rental demand. Tap into the rapid outward growth of Lagos State's fastest growing hub."
  }
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: "verified-properties",
    title: "Verified Properties",
    description: "All land acquisitions are backed by 100% genuine legal title searches and official survey mapping.",
    iconName: "ShieldCheck"
  },
  {
    id: "strategic-locations",
    title: "Strategic Locations",
    description: "Sited inside high-growth areas, near academic nodes, highways, and heavy manufacturing corridors.",
    iconName: "MapPin"
  },
  {
    id: "affordable-pricing",
    title: "Affordable Pricing",
    description: "Tailored to investors and individuals with flexible, structured purchase installments over months.",
    iconName: "BadgePercent"
  },
  {
    id: "secure-investment",
    title: "Secure Investment",
    description: "Bulletproof documentation guarantees you peace of mind and complete protection from trespassers.",
    iconName: "Lock"
  },
  {
    id: "trusted-brand",
    title: "Trusted Brand",
    description: "A legally incorporated industry standard governed by transparency, reliability, and local success.",
    iconName: "Award"
  },
  {
    id: "customer-service",
    title: "Excellent Customer Service",
    description: "Dedicated real estate professionals guide you smoothly from the first inspection through physical allocation.",
    iconName: "Headphones"
  }
];

export const COUNTERS_DATA: CounterStat[] = [
  {
    id: "locations",
    title: "Multiple Locations",
    value: 6,
    suffix: "+",
    description: "Estates across major Lagos State - Epe development nodes"
  },
  {
    id: "properties",
    title: "Verified Lands",
    value: 1200,
    suffix: "+",
    description: "Acres of fully exhaustively surveyed dry land"
  },
  {
    id: "appreciation",
    title: "Avg. Appreciation Rate",
    value: 35,
    suffix: "%",
    description: "Compounded historical value growth year-over-year"
  },
  {
    id: "clients",
    title: "Happy Investors",
    value: 850,
    suffix: "+",
    description: "Households and corporate clients securely allocated"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Dr. Olumide Adeleke",
    role: "Lecturer / Diaspora Investor",
    quote: "Acquiring premium plots from abroad is typically fraught with risk, but LandSeeds was a complete game changer. Their prompt dispatch of my Registered Survey and video proof of physical allocation set a level of transparency I haven't seen elsewhere.",
    avatarUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Mrs. Funmilayo Sowemimo",
    role: "Merchant & Epe Business Owner",
    quote: "I bought two plots in Epe for hostel projects. The appreciate value has already grown beyond my initial projections. LandSeeds made my land acquisition process seamless and stress-free. Their honesty gave me absolute confidence.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Engr. Paul Nwosu",
    role: "Real Estate Arbitrage Consultant",
    quote: "LandSeeds has built a rare brand of trust in the Nigerian real estate space. Their selection of locations near Ketu Epe and Alaro Axis are brilliant. No land grabbers (Omo-onile) issues, no hidden parameters. Just genuine development.",
    avatarUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=300&auto=format&fit=crop",
    rating: 5
  }
];

// Appreciation projections for the custom interactive SVG chart
export interface ChartTimelineData {
  year: number;
  averageValuePerSqm: number; // in naira (thousands)
  roiMultiplier: number;
}

export const APPRECIATION_TIMELINE: ChartTimelineData[] = [
  { year: 2022, averageValuePerSqm: 1.2, roiMultiplier: 1.0 },
  { year: 2023, averageValuePerSqm: 1.8, roiMultiplier: 1.5 },
  { year: 2024, averageValuePerSqm: 2.7, roiMultiplier: 2.25 },
  { year: 2025, averageValuePerSqm: 4.1, roiMultiplier: 3.4 },
  { year: 2026, averageValuePerSqm: 6.2, roiMultiplier: 5.1 },
  { year: 2028, averageValuePerSqm: 10.5, roiMultiplier: 8.7 },
  { year: 2030, averageValuePerSqm: 16.8, roiMultiplier: 14.0 }
];

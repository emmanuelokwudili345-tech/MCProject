import type { Package, AddOn } from '../types';

export const packagesData: Package[] = [
  {
    id: "half-day-corporate",
    title: "Keynote Host & Panel Moderator",
    tagline: "High-impact precision for half-day conferences, executive summits, and fireside chat sessions.",
    duration: "Up to 4 Hours",
    price: 3200,
    popular: false,
    badge: "Half-Day Focus",
    features: [
      "Up to 4 hours of professional on-stage hosting",
      "Executive keynote introductions & speaker bios",
      "Up to 2 panel moderation / fireside discussions",
      "Live audience Q&A coordination",
      "1x Pre-event agenda alignment call",
      "Name phonetics & script pronunciation check"
    ]
  },
  {
    id: "full-day-summit",
    title: "Full-Day Summit & Mainstage Emcee",
    tagline: "Comprehensive stage direction from morning opening keynote to evening executive networking.",
    duration: "Up to 8 Hours",
    price: 5200,
    popular: true,
    badge: "Most Requested",
    features: [
      "Full 8-hour stage direction, pacing & flow",
      "Opening welcome address & dynamic closing remarks",
      "Sponsor acknowledgments & house housekeeping cues",
      "Seamless multi-speaker schedule recovery",
      "2x Pre-production technical walkthrough calls",
      "Direct coordination with Stage Producer & AV crew",
      "Emergency stage padding & live improvisation"
    ]
  },
  {
    id: "gala-auction",
    title: "Gala Dinner & Live Auctioneer",
    tagline: "Elegance, charm, and electrifying donor motivation for high-profile fundraising galas.",
    duration: "Evening (5 Hours)",
    price: 4600,
    popular: false,
    badge: "Black-Tie Protocol",
    features: [
      "Formal ballroom protocol & entrance announcing",
      "High-energy live charity auction direction",
      "Pledge drive & paddle-raise momentum building",
      "VIP honoree awards presentation",
      "Speech pacing management (keeping toasts brisk)",
      "Auction lot copywriting consultation"
    ]
  },
  {
    id: "bespoke-multiday",
    title: "Multi-Day Festival or Global Tour",
    tagline: "Bespoke hosting for multi-day conventions, international brand tours, or televised broadcasts.",
    duration: "Multi-Day / Custom",
    price: 9200,
    popular: false,
    badge: "Flagship Production",
    features: [
      "Comprehensive multi-day stage stewardship",
      "Mainstage & breakout stage crossover curation",
      "Full technical rehearsal day attendance included",
      "VIP green-room speaker briefings & coaching",
      "Daily recap monologues & social video standups",
      "Priority worldwide travel scheduling"
    ]
  }
];

export const addOnsData: AddOn[] = [
  {
    id: "teleprompter-scripting",
    title: "Custom Script & Teleprompter Writing",
    price: 850,
    description: "Professional stage monologue, humor punches, and speaker introduction scripting tailored to your event tone."
  },
  {
    id: "rehearsal-day",
    title: "Day-Before Technical Rehearsal Attendance",
    price: 1200,
    description: "On-site presence for tech dry-runs, lighting cues, teleprompter checks, and timing calibrations."
  },
  {
    id: "speaker-coaching",
    title: "Executive Speaker Stage Coaching",
    price: 650,
    description: "30-minute 1-on-1 green room vocal warmup and stage presence coaching for executive presenters."
  },
  {
    id: "interactive-trivia",
    title: "Crowd Gamification & Live Trivia Module",
    price: 500,
    description: "High-energy interactive smartphone or show-of-hands audience game segment to re-energize afternoon sessions."
  }
];


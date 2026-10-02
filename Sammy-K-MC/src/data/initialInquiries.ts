import type { Inquiry } from '../types';

export const initialInquiries: Inquiry[] = [
  {
    id: "INQ-2026-904",
    clientName: "Claire DeWitt",
    organization: "Global FinTech Leaders Forum",
    email: "cdewitt@fintechleaders.org",
    phone: "+1 (415) 890-3412",
    eventType: "Corporate Conference",
    eventDate: "2026-11-18",
    eventLocation: "The Westin St. Francis, San Francisco, CA",
    guestCount: "1,200",
    packageId: "full-day-summit",
    packageName: "Full-Day Summit & Mainstage Emcee",
    addOns: ["rehearsal-day", "teleprompter-scripting"],
    estimatedTotal: 7250,
    status: "new",
    submittedAt: "2026-10-01T14:20:00Z",
    notes: "We have 14 C-level keynote speakers. Timing is paramount as we have an active CNBC live stream broadcast window at 11:30 AM."
  },
  {
    id: "INQ-2026-855",
    clientName: "Dr. Marcus O'Reilly",
    organization: "British Neuroscience Foundation",
    email: "marcus.oreilly@neurofoundation.uk",
    phone: "+44 20 7946 0912",
    eventType: "Charity Gala & Auction",
    eventDate: "2026-12-05",
    eventLocation: "The Savoy Ballroom, London, UK",
    guestCount: "650",
    packageId: "gala-auction",
    packageName: "Gala Dinner & Live Auctioneer",
    addOns: ["teleprompter-scripting"],
    estimatedTotal: 5450,
    status: "in_review",
    submittedAt: "2026-09-28T09:45:00Z",
    notes: "Targeting £1.8M in our paddle pledge drive. We loved your showreel from the Hope Foundation Gala."
  },
  {
    id: "INQ-2026-810",
    clientName: "Valerie & Andre Fontaine",
    organization: "Private Wedding",
    email: "valerie.fontaine@gmail.com",
    phone: "+33 6 12 34 56 78",
    eventType: "Luxury Wedding",
    eventDate: "2026-10-24",
    eventLocation: "Château de Chantilly, France",
    guestCount: "220",
    packageId: "full-day-summit",
    packageName: "Full-Day Summit & Mainstage Emcee",
    addOns: [],
    estimatedTotal: 5200,
    status: "confirmed",
    submittedAt: "2026-09-12T16:10:00Z",
    notes: "Bilingual English & French ceremony and reception hosting. Deposit confirmed, run-of-show finalized."
  }
];

export const initialBlackoutDates: string[] = [
  "2026-10-24", // Fontaine Wedding
  "2026-10-25",
  "2026-11-04", // Private Corporate Booking
  "2026-11-05",
  "2026-12-24", // Holiday Blackout
  "2026-12-25",
  "2026-12-31"
];


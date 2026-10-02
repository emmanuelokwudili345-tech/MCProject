import type { CompereProfile } from '../types';

export const compereProfile: CompereProfile = {
  name: "Sammy K",
  title: "Master of Ceremonies & Live Host",
  tagline: "Commanding the stage with poise, razor-sharp timing, and magnetic energy.",
  location: "London • New York • Dubai • Global Availability",
  languages: ["English (Native)", "French (Conversational)"],
  yearsExperience: "10+",
  eventsHosted: "600+",
  countriesVisited: "24",
  clientSatisfaction: "99.2%",

  bio: {
    lead: "Over a decade on premier global stages, transforming standard agendas into electric, seamless live experiences.",
    paragraphs: [
      "Sammy K is a world-class Master of Ceremonies trusted by international brands, high-profile technology summits, and charity galas. Combining rapid comedic instincts with refined event choreography, Sammy ensures every transition is effortless and every audience remains captivated.",
      "Whether introducing Silicon Valley founders before an audience of 3,000, rallying a ballroom to milestone pledges during a high-stakes charity auction, or steering an intimate luxury wedding celebration, Sammy's signature poise guarantees flawless execution."
    ]
  },

  stats: [
    { label: "Live Stages Hosted", value: "600+" },
    { label: "Audience Reach", value: "750K+" },
    { label: "Charity Funds Raised", value: "$35M+" },
    { label: "Client Re-booking Rate", value: "98.7%" }
  ],

  specialties: [
    {
      id: "corporate",
      title: "Global Tech Summits & Corporate Keynotes",
      icon: "mic",
      badge: "High-Stakes Precision",
      description: "Seamless transitions between VIP keynotes, fireside chats, and executive product reveals with pinpoint schedule adherence.",
      highlights: [
        "Executive Fireside & Panel Moderation",
        "Teleprompter & Ear-Prompter Mastery",
        "Contingency Schedule Recovery",
        "High-Energy Crowd Engagement"
      ]
    },
    {
      id: "galas",
      title: "Black-Tie Galas & High-Yield Auctions",
      icon: "award",
      badge: "Elegance & Momentum",
      description: "Sophisticated ballroom etiquette combined with the psychological energy needed to drive donor excitement and record fundraising.",
      highlights: [
        "Live Charity Auction Momentum",
        "Protocol & Diplomatic Etiquette",
        "Emotional Donor Storytelling",
        "Pacing Complex Multi-Stage Galas"
      ]
    },
    {
      id: "awards",
      title: "Prestigious Industry Award Ceremonies",
      icon: "trophy",
      badge: "Brisk Timing & Celebration",
      description: "Keeping multi-category award galas brisk, dynamic, and entertaining without letting acceptance speeches run off track.",
      highlights: [
        "Strict Broadcast Run-of-Show Timing",
        "Humorous & Respectful Stage Banter",
        "Seamless Stage Flow & Winners Staging",
        "Live Teleprompter Synchrony"
      ]
    },
    {
      id: "weddings",
      title: "Luxury Weddings & Private Celebrations",
      icon: "sparkles",
      badge: "Warmth & Electric Flow",
      description: "Cultivating an unforgettable celebration where families feel honored, speeches feel effortless, and the party hits its peak.",
      highlights: [
        "Coordination with Band, DJ & Banquet Team",
        "Multicultural & Bilingual Sensitivity",
        "Grand Entrance Directing & Toasts",
        "Warm, Inclusive & Joyous Vibe"
      ]
    }
  ],

  showreel: {
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    title: "Sammy K — 2026 International Showreel",
    duration: "2:30 min",
    highlightsSummary: "Highlights from World AI Summit, Forbes Leaders Dinner, and Annual Hope Foundation Gala."
  },

  gallery: [
    {
      id: 1,
      title: "World Technology Congress Keynote",
      category: "Corporate",
      location: "San Francisco, CA",
      attendees: "3,800 Attendees",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      caption: "Opening plenary with Fortune 100 leaders and 3,800+ attendees."
    },
    {
      id: 2,
      title: "Hope Foundation Annual Gala",
      category: "Gala & Auction",
      location: "London, UK",
      attendees: "750 Guests",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80",
      caption: "Directing the live paddle raise that exceeded target by £1.2M."
    },
    {
      id: 3,
      title: "International FinTech Pioneers Forum",
      category: "Moderation",
      location: "Singapore",
      attendees: "1,400 Attendees",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80",
      caption: "Moderating a high-level fireside on central banking and AI."
    },
    {
      id: 4,
      title: "Global Creative & Design Awards",
      category: "Awards Show",
      location: "Berlin, Germany",
      attendees: "950 Guests",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
      caption: "Presenting 22 awards in 75 minutes with live musical cues."
    },
    {
      id: 5,
      title: "Electric Hypercar Global Reveal",
      category: "Product Launch",
      location: "Dubai, UAE",
      attendees: "1,800 Guests",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
      caption: "Live international broadcast host for the premier vehicle unveiling."
    },
    {
      id: 6,
      title: "Villa Balbianello Grand Reception",
      category: "Luxury Wedding",
      location: "Lake Como, Italy",
      attendees: "260 Guests",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
      caption: "Conducting the 3-day wedding celebration across historic Italian villas."
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: "Sammy K is simply irreplaceable on stage. When our chief keynote speaker was delayed by 30 minutes due to bad weather, Sammy commanded the stage with impromptu humor and panel engagement so smoothly that our attendees thought it was part of the plan!",
      author: "Rachel Vance-Cole",
      role: "Director of Global Events",
      company: "Apex Cloud Enterprise",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      event: "Apex Global Summit (London)"
    },
    {
      id: 2,
      quote: "We achieved an all-time fundraising record of $2.9 million thanks to Sammy's electric auctioneering and charisma. He read the ballroom like a maestro and made every bid exciting.",
      author: "David L. Sterling",
      role: "Executive Gala Chair",
      company: "Children's Oncology Fund",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      event: "Hope Centennial Gala (New York)"
    },
    {
      id: 3,
      quote: "Booking Sammy K for our wedding was the single best decision we made. He connected with both of our families, kept the schedule moving flawlessly, and brought an infectious warmth to the entire evening.",
      author: "Maya & Tariq Al-Mansoor",
      role: "Bride & Groom",
      company: "Private Wedding",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      event: "Grand Ballroom Reception (Dubai)"
    }
  ],

  faqs: [
    {
      question: "How involved is Sammy K in pre-event scripting and schedule coordination?",
      answer: "Deeply involved. Every engagement includes pre-production alignment calls, run-of-show timing audits, phonetic pronunciations of all speaker names, and script consultation to ensure seamless delivery."
    },
    {
      question: "What happens if a speaker runs over time or an AV hiccup occurs?",
      answer: "With 10+ years on live stages and broadcast television, Sammy excels at improvisation, padding, and subtle audience engagement that completely conceals backstage delays."
    },
    {
      question: "Does Sammy K accept international bookings?",
      answer: "Yes. Sammy regularly hosts events across the UK, Europe, North America, the Middle East, and Asia. Transparent travel riders are provided based on the event location."
    },
    {
      question: "Can Sammy adapt to formal black-tie events as well as energetic tech conferences?",
      answer: "Absolutely. Tone, wardrobe, and tempo are tailored to your event's exact culture — from strict protocol black-tie galas to high-tempo, innovative startup summits."
    },
    {
      question: "How early should we secure our event date?",
      answer: "Peak conference and gala seasons (September-November and April-June) book 4 to 8 months in advance. We recommend checking availability as early as your venue or date is confirmed."
    }
  ]
};


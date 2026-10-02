export type InquiryStatus = 'new' | 'in_review' | 'confirmed' | 'completed' | 'declined';

export interface Inquiry {
  id: string;
  clientName: string;
  organization?: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  packageId: string;
  packageName: string;
  addOns: string[];
  estimatedTotal: number;
  status: InquiryStatus;
  submittedAt: string;
  notes?: string;
  internalNotes?: string;
}

export interface Package {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  price: number;
  popular?: boolean;
  badge: string;
  features: string[];
}

export interface AddOn {
  id: string;
  title: string;
  price: number;
  description: string;
}

export interface Specialty {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  location: string;
  attendees: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  event: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompereProfile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  languages: string[];
  yearsExperience: string;
  eventsHosted: string;
  countriesVisited: string;
  clientSatisfaction: string;
  bio: {
    lead: string;
    paragraphs: string[];
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  specialties: Specialty[];
  showreel: {
    videoUrl: string;
    title: string;
    duration: string;
    highlightsSummary: string;
  };
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}


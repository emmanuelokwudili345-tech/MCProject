import type { IconName } from '../components/common/Icons';

export interface Specialty {
  id: string;
  title: string;
  icon: IconName;
  badge: string;
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  caption: string;
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
  bio: {
    lead: string;
    paragraphs: string[];
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  specialties: Specialty[];
  gallery: GalleryItem[];
  faqs: FAQItem[];
}

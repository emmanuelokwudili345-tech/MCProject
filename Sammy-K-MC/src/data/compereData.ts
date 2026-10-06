import type { CompereProfile } from '../types';

export const compereProfile: CompereProfile = {
  name: 'Sammy K',
  title: 'Master of Ceremonies & Live Host',
  tagline: 'Calm authority, sharp timing, and a room that feels instantly at ease.',
  location: 'Nigeria • Ogun State • Ijebu Ode',
  languages: ['English', 'Yoruba'],
  yearsExperience: '6+',
  eventsHosted: '50+',

  bio: {
    lead: 'Bringing confident energy to live events while keeping the programme polished, warm, and well-paced.',
    paragraphs: [
      'Sammy K is a professional Master of Ceremonies focused on creating clear, engaging, and well-paced live experiences. The approach combines confident stage presence with thoughtful preparation before the event.',
      'From weddings and private celebrations to conferences, corporate gatherings, and award events, every programme is handled with attention to timing, audience engagement, and smooth transitions.'
    ]
  },

  stats: [
    { label: 'Years Experience', value: '6+' },
    { label: 'Stages Hosted', value: '50+' },
    { label: 'Languages', value: '2' },
    { label: 'Base', value: 'Nigeria' }
  ],

  specialties: [
    {
      id: 'corporate',
      title: 'Corporate Events & Conferences',
      icon: 'mic',
      badge: 'High-Stakes Precision',
      description: 'Clear transitions between keynotes, panels, presentations, and audience moments while keeping the programme on schedule.',
      highlights: [
        'Panel & Fireside Moderation',
        'Programme & Speaker Coordination',
        'Contingency Schedule Recovery',
        'Audience Engagement'
      ]
    },
    {
      id: 'galas',
      title: 'Galas & Award Ceremonies',
      icon: 'award',
      badge: 'Elegance & Momentum',
      description: 'A polished stage presence for formal events, with thoughtful pacing and audience interaction throughout the programme.',
      highlights: [
        'Award Presentation Flow',
        'Formal Event Protocol',
        'Audience Engagement',
        'Multi-Stage Programme Pacing'
      ]
    },
    {
      id: 'awards',
      title: 'Award & Recognition Events',
      icon: 'trophy',
      badge: 'Timing & Celebration',
      description: 'Keeping award programmes dynamic and easy to follow without letting transitions or acceptance moments lose momentum.',
      highlights: [
        'Run-of-Show Timing',
        'Stage Banter & Introductions',
        'Winner Staging Coordination',
        'Smooth Programme Transitions'
      ]
    },
    {
      id: 'weddings',
      title: 'Weddings & Private Celebrations',
      icon: 'sparkles',
      badge: 'Warmth & Flow',
      description: 'A warm, inclusive hosting style that respects family traditions while keeping entrances, speeches, and celebrations moving naturally.',
      highlights: [
        'Coordination with Band & DJ',
        'Multicultural Sensitivity',
        'Grand Entrance & Toasts',
        'Warm, Inclusive Atmosphere'
      ]
    }
  ],

  gallery: [
    {
      id: 1,
      title: 'Praise & Worship Energy',
      category: 'Live Event',
      location: 'Lagos, Nigeria',
      image: '/image-1.jpeg',
      caption: 'A lively room, strong audience energy, and a stage presence that keeps the moment moving without losing the atmosphere.'
    },
    {
      id: 2,
      title: 'Wedding Reception Flow',
      category: 'Wedding Celebration',
      location: 'Lagos, Nigeria',
      image: '/image-2.jpeg',
      caption: 'A refined wedding reception where heartfelt entrances, elegant transitions, and natural audience energy keep every moment feeling polished.'
    },
    {
      id: 3,
      title: 'Audience Engagement in Full Flow',
      category: 'Conference & Community',
      location: 'Abuja, Nigeria',
      image: '/image-10.jpeg',
      caption: 'A high-attention audience, confident stage direction, and smooth transitions that help the programme stay engaging.'
    }
  ],

  faqs: [
    {
      question: 'How involved is Sammy K in pre-event scripting and schedule coordination?',
      answer: 'Every engagement starts with understanding the programme, audience, speakers, and event tone so the hosting style and transitions fit the occasion.'
    },
    {
      question: 'What happens if a speaker runs over time or an AV issue occurs?',
      answer: 'Calm improvisation, clear communication, and audience engagement help keep the programme moving when timing or backstage plans change.'
    },
    {
      question: 'Does Sammy K accept international bookings?',
      answer: 'International enquiries can be considered based on the event date, location, and production requirements. Travel arrangements are discussed as part of the booking process.'
    },
    {
      question: 'Can Sammy adapt to formal events as well as energetic celebrations?',
      answer: 'Yes. Tone, pacing, and audience interaction can be adjusted to suit the event format, culture, and atmosphere.'
    },
    {
      question: 'How early should we secure our event date?',
      answer: 'It is best to enquire as soon as the event date and venue are reasonably confirmed, especially for busy conference and celebration periods.'
    }
  ]
};

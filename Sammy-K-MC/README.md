# Sammy K — MC & Event Host Website

A responsive React + TypeScript portfolio and enquiry website for Sammy K, a Nigeria-based Master of Ceremonies and live event host.

## What it includes

- Responsive landing page with event-hosting positioning
- About and event-specialty pages
- Event enquiry form powered by Formspree
- Accessible mobile navigation
- Reusable icon and content components
- Gallery of selected stage moments
- Privacy policy page
- React Router navigation

## Tech stack

- React 19
- TypeScript
- Vite
- React Router
- Formspree for enquiry submissions
- CSS

## Project structure

```text
src/
├── components/
│   ├── common/
│   └── portfolio/
├── data/
├── pages/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the enquiry form

Create a `.env` file in the project root and add your Formspree endpoint:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

The example file is available at `.env.example`.

### 3. Start development

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Run linting

```bash
npm run lint
```

## Content notes

Business claims, event history, testimonials, statistics, and media should be replaced with verified client information before the site is published. The repository intentionally avoids placeholder awards, international event claims, and third-party showreel content.

## Deployment

The site can be deployed to any static hosting platform that supports Vite builds, including Netlify or Vercel. Make sure the `VITE_FORMSPREE_ENDPOINT` environment variable is configured in the hosting provider.

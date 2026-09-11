# PCM Developers — Demo Website

A complete, multi-page luxury real-estate website built with React, Vite, Tailwind CSS and lucide-react, for client presentation purposes.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build a production bundle:

```bash
npm run build
```

The output is written to `dist/` and can be deployed to any static host (Vercel, Netlify, S3 + CloudFront, etc).

## Pages

- `/` — Home
- `/properties` — Property listing with filters (grid/list view)
- `/properties/:id` — Property detail template (try `/properties/azure-heights`)
- `/about` — Brand story, timeline, stats
- `/philosophy` — Our Philosophy
- `/lifestyle` — Lifestyle editorial page
- `/investment` — Investment page
- `/faq` — FAQ page
- `/contact` — Contact page with enquiry form

## Structure

```
src/
  components/   Reusable UI: Navbar, Footer, Hero, PropertyCard, PropertyGrid,
                PropertyFilter, SectionHeading, Testimonial, FAQAccordion,
                CTASection, ImageReveal, Stats, Button, PageHero
  pages/        One file per route
  data/         properties.js — single source of truth for all property,
                testimonial and FAQ content
  layouts/      MainLayout.jsx — shared Navbar/Footer shell
  hooks/        useReveal.js — IntersectionObserver-based fade-up reveal
```

## Notes for the client demo

- All property, pricing and content data lives in `src/data/properties.js` —
  update it in one place to change listings across the whole site.
- Images are sourced from Unsplash for demo purposes only. Replace the URLs
  in `src/data/properties.js` and the page files with the client's own
  photography before going live.
- The contact form currently only shows a confirmation state client-side —
  wire `Contact.jsx`'s `onSubmit` handler to an email or CRM endpoint for
  production use.

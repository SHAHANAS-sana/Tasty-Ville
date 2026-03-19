# Tasty Ville Restaurant — Next.js Website

A premium, conversion-focused restaurant website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🏗️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | React framework (App Router) |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^3.4 | Utility-first styling |
| Lucide React | ^0.383 | Icons |
| clsx | ^2.1 | Conditional classes |

## 📁 Project Structure

```
tasty-ville/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page (all sections)
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── Navbar.tsx          # Sticky nav, mobile drawer
│   ├── HeroSection.tsx     # Full-viewport hero
│   ├── Ticker.tsx          # Scrolling food ticker
│   ├── AboutSection.tsx    # Story + stats
│   ├── MenuSection.tsx     # Filterable menu grid
│   ├── WhySection.tsx      # Feature cards
│   ├── TestimonialsSection.tsx  # Auto-scroll reviews
│   ├── ContactSection.tsx  # Info + reservation form
│   ├── SectionReveal.tsx   # Reusable scroll-reveal wrapper
│   └── Footer.tsx          # 4-column footer
├── lib/
│   └── data.ts             # All menu items, testimonials, copy
├── types/
│   └── index.ts            # TypeScript interfaces
├── tailwind.config.ts      # Custom colours, fonts, animations
├── tsconfig.json
└── next.config.js
```

## 🎨 Design System

**Colours** (defined as Tailwind tokens):
- `amber` — #c8620a (primary CTA, accents)
- `gold` — #d4a843 (decorative highlights)
- `charcoal` — #2c2118 (dark sections)
- `cream` — #fdf6ec (light background)
- `smoke` — #f5ede0 (alternate light sections)
- `muted` — #7a6552 (body text)

**Fonts** (via Google Fonts):
- `Bebas Neue` — Display headings, numbers
- `Cormorant Garamond` — Section titles, editorial text
- `Outfit` — Body copy, UI text

## 🔧 Customisation

### Update Business Info
Edit `lib/data.ts` to change menu items, prices, testimonials, opening hours.

### Replace Placeholder Images
In `HeroSection.tsx` and `AboutSection.tsx`, replace the emoji placeholders with:
```tsx
import Image from "next/image";
// ...
<Image src="/your-image.jpg" alt="..." fill className="object-cover" />
```
Place images in the `/public` folder.

### Add Google Maps Embed
In `ContactSection.tsx`, add after the form:
```tsx
<div className="mt-8 rounded-2xl overflow-hidden h-64">
  <iframe
    src="https://maps.google.com/maps?q=Tasty+Ville+Sharjah&output=embed"
    width="100%" height="100%" loading="lazy"
  />
</div>
```

## 📱 Features
- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with scroll transparency
- ✅ Mobile hamburger drawer
- ✅ Animated hero with trust badges
- ✅ Scrolling food ticker
- ✅ Filterable menu grid (8 categories, 24 items)
- ✅ Scroll-reveal animations on all sections
- ✅ Auto-scrolling testimonials carousel
- ✅ Typed reservation form with validation
- ✅ SEO metadata in layout.tsx
- ✅ Custom Tailwind animations (ticker, falooda scroll, flicker)

# Buggy Dubai Rental — Next.js Website

## 🏜️ Overview

Production-ready Next.js 14 website for **Buggy Dubai Rental** — Dubai's premier self-drive dune buggy tour operator. Built with advanced SEO, topical map architecture, and responsive design.

**Live Site:** [buggydubairental.com](https://buggydubairental.com)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel (Recommended)
```bash
npx vercel
```

---

## 🗂️ Project Structure

```
buggy-dubai-rental/
├── public/                     # Static assets
│   ├── robots.txt             # Search engine directives
│   └── images/                # Tour images (add your own)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + JSON-LD schema
│   │   ├── page.tsx           # Homepage (11 sections)
│   │   ├── globals.css        # Global styles + animations
│   │   ├── sitemap.ts         # Dynamic XML sitemap
│   │   ├── not-found.tsx      # Custom 404 page
│   │   ├── dune-buggy-dubai/
│   │   │   └── page.tsx       # Dune Buggy main service page
│   │   ├── quad-bike-dubai/
│   │   │   └── page.tsx       # Quad Bike service page
│   │   ├── desert-safari-dubai/
│   │   │   └── page.tsx       # Desert Safari service page
│   │   ├── about/
│   │   │   └── page.tsx       # About Us page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact page with form
│   │   ├── faq/
│   │   │   └── page.tsx       # FAQ page (16 questions)
│   │   ├── gallery/
│   │   │   └── page.tsx       # Photo gallery page
│   │   └── blog/
│   │       └── page.tsx       # Blog index (10 posts)
│   ├── components/
│   │   ├── Header.tsx         # Sticky nav with mega dropdown
│   │   ├── Footer.tsx         # Full footer with sitemap links
│   │   ├── TopBar.tsx         # Scrolling announcement bar
│   │   ├── WhatsAppFloat.tsx  # Floating WhatsApp button
│   │   └── AnimateOnScroll.tsx # Intersection Observer animations
│   └── data/
│       └── siteData.ts        # All tours, FAQs, nav, site config
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎯 SEO Architecture (Topical Map)

### Content Silos

```
Homepage (Dune Buggy Dubai)
├── /dune-buggy-dubai/           ← Main hub
│   ├── /can-am-maverick-r-x-rs-26
│   ├── /can-am-maverick-xrs-26
│   ├── /stage-4-stunner-rzr-pro-r-ultimate
│   ├── /desert-combo-sharing-safari-dune-buggy
│   ├── /early-bird-buggy-tour
│   ├── /night-riders-dune-buggy-dubai
│   └── /red-dunes-afternoon-buggies
├── /quad-bike-dubai/            ← Secondary hub
│   ├── /morning
│   ├── /sunset
│   ├── /night
│   └── /safari-combo
├── /desert-safari-dubai/        ← Secondary hub
│   ├── /morning
│   ├── /evening
│   ├── /overnight
│   └── /vip-private
├── /blog/                       ← Supporting content
│   ├── 10 SEO blog posts
│   └── (expand monthly)
├── /about
├── /contact
├── /faq
└── /gallery
```

### Schema Markup
- **LocalBusiness** — Company info, address, hours, price range
- **WebSite** — Site-wide search action
- **TouristTrip** — Tour offerings with aggregate pricing
- **FAQPage** — Structured FAQ data
- **ItemList** — Tour package listings
- **BreadcrumbList** — Navigation breadcrumbs on all pages

### On-Page SEO
- Unique `<title>` and `<meta description>` per page
- Canonical URLs on every page
- Open Graph + Twitter Card meta tags
- H1 → H2 → H3 heading hierarchy
- Internal cross-linking between all service silos
- SEO-rich bottom content sections on every page
- Dynamic XML sitemap with priorities
- robots.txt with sitemap reference

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-orange` | `#E8611A` | Primary CTA, accents |
| `brand-orange-dark` | `#C74E10` | Hover states |
| `brand-gold` | `#D4A843` | Premium accents |
| `brand-dark` | `#1A1A2E` | Backgrounds, text |
| `brand-sand` | `#F5E6D3` | Section backgrounds |
| `brand-cream` | `#FEFCF6` | Page background |

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** DM Sans (sans-serif)

### Animations
- Scroll-triggered fade-up animations
- Ticker announcement bar
- Card hover transitions
- FAQ accordion
- WhatsApp float pulse

---

## 📝 TODO (For Production)

1. **Add real images** — Replace emoji placeholders with professional tour photos
2. **Add Google Maps** — Embed actual map in contact page
3. **Connect form** — Wire contact form to email service (SendGrid, Resend, etc.)
4. **Add Google Analytics** — GA4 + Google Tag Manager
5. **Create individual tour pages** — Dynamic routes for each package
6. **Write blog content** — Publish the 10 planned blog posts
7. **Add reviews section** — Google Reviews widget or testimonials
8. **Connect WhatsApp API** — Pre-filled messages with tour selection
9. **Add booking system** — Calendar integration for availability
10. **Performance** — Optimize images, add Next/Image, lazy loading

---

## 📄 License

Proprietary — Buggy Dubai Rental. All rights reserved.

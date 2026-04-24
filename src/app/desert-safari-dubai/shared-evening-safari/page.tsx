import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Shared Evening Desert Safari Dubai | AED 150 | Best Value",
  description: "Dubai's best-value evening desert safari \u2014 share a 4WD vehicle for a complete 6-hour Arabian desert experience at just AED 150 per person.",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/shared-evening-safari` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Shared Evening Desert Safari Dubai"
      breadcrumbParent={{ label: "Desert Safari Dubai", href: "/desert-safari-dubai" }}
      tagline="Dubai's best-value evening desert safari \u2014 share a 4WD vehicle with fellow adventurers for a complete 6-hour Arabian desert experience at just AED 150 per person."
      price="AED 150"
      duration="6 Hours"
      seater="Sharing 4WD"
      persons="Per Person"
      difficulty="All Levels"
      heroImage="/images/gallery/safari-1.webp"
      galleryImages={[
        "/images/gallery/safari-1.webp",
        "/images/gallery/safari-2.webp",
        "/images/gallery/safari-3.webp",
        "/images/gallery/safari-4.webp",
        "/images/gallery/gallery-4.webp"
      ]}
      highlights={[
        "Thrilling 4x4 dune bashing across the Al Badayer Red Dunes",
        "Traditional camel ride through the golden desert",
        "Sandboarding down massive dune faces",
        "Authentic Arabian BBQ buffet dinner",
        "Live cultural entertainment: Tanoura, belly dance, fire show",
        "Traditional Arabic welcome with coffee, dates, henna art"
      ]}
      overview={[
        "The Shared Evening Desert Safari is the most popular desert experience in Dubai for good reason \u2014 it delivers everything the Arabian desert has to offer at a genuinely affordable price.",
        "Sharing a 4WD vehicle with a small group, you embark on a 6-hour journey covering every highlight of the Dubai desert experience.",
        "The adventure includes 4x4 dune bashing, camel riding, sandboarding, henna art, BBQ dinner, and live cultural performances under the desert stars."
      ]}
      inclusions={[
        "4WD dune bashing session",
        "Camel ride",
        "Sandboarding",
        "Henna art",
        "Arabic coffee and dates welcome",
        "Arabian BBQ buffet dinner (veg and non-veg)",
        "Tanoura, belly dance, and fire show",
        "Complimentary water and soft drinks",
        "Return transport to meeting point"
      ]}
      exclusions={[
        "Hotel pickup (AED 300 per person)",
        "Alcoholic beverages",
        "Personal expenses",
        "Professional photography (optional add-on)"
      ]}
      importantInfo={[
        "Minimum driver age is 16 years.",
        "No driving licence required.",
        "Not recommended for pregnant women or guests with serious back/heart conditions.",
        "Closed-toe shoes are mandatory.",
        "Tours run in most weather conditions."
      ]}
      whyChoose={[
        { title: "Latest Fleet", desc: "All vehicles are recent-model, professionally maintained with certified safety equipment." },
        { title: "Expert Guides", desc: "Licensed, first-aid certified desert guides with deep knowledge of the Al Badayer region." },
        { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." },
        { title: "Flexible Booking", desc: "Morning, afternoon, and evening departures. Change your booking up to 24 hours before." }
      ]}
      perfectFor={[
        "Budget Travellers",
        "Solo Adventurers",
        "First-Time Visitors",
        "Backpackers"
      ]}
      faqs={[
        { q: "Do I need a driving licence?", a: "No driving licence is required. Our buggies are fully automatic with comprehensive safety briefing." },
        { q: "What is the minimum age?", a: "Drivers must be 16+ years old. Passengers of any age welcome with adult supervision." },
        { q: "What should I wear?", a: "Comfortable casual clothing and closed-toe shoes (mandatory). Sunglasses and sunscreen recommended." },
        { q: "Is hotel pickup included?", a: "Shared hotel transfer is available for AED 300 per person from anywhere in Dubai." },
        { q: "What is the cancellation policy?", a: "Free cancellation up to 24 hours before the tour. Weather cancellations are always rescheduled or fully refunded." },
        { q: "Can I bring a camera?", a: "Yes, cameras and GoPros are welcome. Secure all devices before riding. Multiple photo stops included." }
      ]}
      relatedTours={[
        { name: "Private Evening Safari", href: "/desert-safari-dubai/private-evening-safari", price: "AED 800", image: "/images/gallery/safari-2.webp" },
        { name: "Shared Luxury Safari", href: "/desert-safari-dubai/shared-luxury-safari", price: "AED 200", image: "/images/gallery/safari-3.webp" },
        { name: "Desert Combo Safari + Quad", href: "/quad-bike-dubai/desert-combo-safari-quad", price: "AED 199", image: "/images/quad/desert-combo-quad-card.webp" }
      ]}
      partnerAnchor="desert safari Dubai"
    />
  );
}

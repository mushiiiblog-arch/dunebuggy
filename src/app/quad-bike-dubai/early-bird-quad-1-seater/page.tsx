import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Early Bird Quad Bike 1-Seater Dubai | AED 150 | Sunrise ATV",
  description: "Most affordable quad bike experience in Dubai \u2014 solo sunrise ride across red dunes in cool morning temperatures. AED 150.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/early-bird-quad-1-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Early Bird Quad Bike Tour (1-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="The most affordable quad bike experience in Dubai \u2014 a solo sunrise ride across the red dunes for just AED 150."
      price="AED 150"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/early-bird-quad-card.webp"
      galleryImages={[
        "/images/quad/early-bird-quad-card.webp",
        "/images/quad/early-bird-quad-gallery-1.webp",
        "/images/quad/early-bird-quad-gallery-2.webp",
        "/images/quad/early-bird-quad-gallery-3.webp"
      ]}
      highlights={[
        "Most affordable legitimate quad bike tour in Dubai",
        "Sunrise departure for cool temperatures and spectacular lighting",
        "Solo 1-seater ATV \u2014 complete riding independence",
        "60-minute desert ride across Al Badayer Red Dunes",
        "Perfect for budget-conscious adventurers",
        "Licensed guide and full safety gear included"
      ]}
      overview={[
        "The Early Bird 1-Seater Quad Bike Tour is perfect for solo adventurers and budget-conscious guests who want genuine desert excitement without a large price tag.",
        "Departing at sunrise, this tour benefits from the most comfortable riding temperatures of the day \u2014 typically 10-15 degrees cooler than afternoon sessions.",
        "The early morning light creates extraordinary photography conditions, with warm golden tones that are impossible to recreate at other times."
      ]}
      inclusions={[
        "60-minute guided desert ride",
        "Certified helmet and protective goggles",
        "Licensed desert guide throughout the tour",
        "Comprehensive safety briefing and vehicle orientation",
        "Sandboarding equipment and instruction",
        "Traditional camel ride at the desert camp",
        "Complimentary water and soft drinks",
        "Scenic photo stops at panoramic desert viewpoints",
        "Backup support vehicle for safety",
        "Full insurance coverage"
      ]}
      exclusions={[
        "Hotel pickup/drop-off (available AED 300 per person)",
        "BBQ dinner (optional add-on)",
        "Personal expenses and souvenirs",
        "Professional photography service (optional add-on)"
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
        "Early Risers",
        "Photography Lovers"
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
        { name: "Early Bird Quad 2-Seater", href: "/quad-bike-dubai/early-bird-quad-2-seater", price: "AED 200", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Afternoon Quad 1-Seater", href: "/quad-bike-dubai/afternoon-quad-1-seater", price: "AED 150", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Desert Combo Safari + Quad", href: "/quad-bike-dubai/desert-combo-safari-quad", price: "AED 199", image: "/images/quad/desert-combo-quad-card.webp" }
      ]}
      partnerAnchor="quad bike ride Dubai"
    />
  );
}

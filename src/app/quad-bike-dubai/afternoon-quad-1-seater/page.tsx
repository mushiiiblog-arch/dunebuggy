import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Afternoon Quad Bike 1-Seater Dubai | AED 150 | Sunset ATV",
  description: "Solo afternoon quad biking with golden-hour sunset photography \u2014 the most visually spectacular time to ride the red dunes. AED 150.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/afternoon-quad-1-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Afternoon Quad Bike Tour (1-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Solo afternoon quad biking with golden-hour sunset photography \u2014 the most visually spectacular time to ride the red dunes of Dubai."
      price="AED 150"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/afternoon-quad-card.webp"
      galleryImages={[
        "/images/quad/afternoon-quad-card.webp",
        "/images/quad/afternoon-quad-gallery-1.webp",
        "/images/quad/afternoon-quad-gallery-2.webp",
        "/images/quad/afternoon-quad-gallery-3.webp",
        "/images/quad/afternoon-quad-gallery-4.webp"
      ]}
      highlights={[
        "Golden-hour sunset timing for extraordinary photography",
        "Solo 1-seater ATV \u2014 complete riding independence",
        "Warm afternoon light paints the red dunes in incredible colours",
        "60-minute desert adventure",
        "Exceptional value at AED 150",
        "Licensed guide and full safety gear"
      ]}
      overview={[
        "The Afternoon 1-Seater Quad Bike Tour is specifically timed to coincide with Dubai's golden hour \u2014 the magical period when the red dunes glow with extraordinary warmth.",
        "Solo riders gain complete freedom on a 1-seater ATV, exploring the desert terrain at their own pace.",
        "The Al Badayer region's varied landscape ensures the 60-minute session is consistently engaging throughout."
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
        "Photography Lovers",
        "Sunset Chasers",
        "Solo Riders",
        "Instagram Enthusiasts"
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
        { name: "Afternoon Quad 2-Seater", href: "/quad-bike-dubai/afternoon-quad-2-seater", price: "AED 200", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Early Bird Quad 1-Seater", href: "/quad-bike-dubai/early-bird-quad-1-seater", price: "AED 150", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Yamaha 700cc Raptor", href: "/quad-bike-dubai/yamaha-700cc-raptor", price: "AED 500", image: "/images/quad/yamaha-raptor-card.webp" }
      ]}
      partnerAnchor="quad biking Dubai"
    />
  );
}

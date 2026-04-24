import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Early Bird Quad Bike 2-Seater Dubai | AED 200 | Couples Sunrise",
  description: "Share the sunrise desert adventure \u2014 2-seater early morning quad bike ride for couples and friends. AED 200.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/early-bird-quad-2-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Early Bird Quad Bike Tour (2-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Share the sunrise desert adventure \u2014 a 2-seater early morning quad bike ride across Dubai's red dunes for couples and friends."
      price="AED 200"
      duration="60 Minutes"
      seater="2-Seater"
      persons="2 Persons"
      difficulty="All Levels"
      heroImage="/images/quad/early-bird-quad-card.webp"
      galleryImages={[
        "/images/quad/early-bird-quad-card.webp",
        "/images/quad/early-bird-quad-gallery-1.webp",
        "/images/quad/early-bird-quad-gallery-2.webp",
        "/images/quad/early-bird-quad-gallery-3.webp"
      ]}
      highlights={[
        "2-seater ATV perfect for couples and friends riding together",
        "Sunrise departure for cool temperatures and golden light",
        "Just AED 100 per person when shared",
        "60-minute desert ride across red dunes",
        "Great value shared experience",
        "All safety gear and guide included"
      ]}
      overview={[
        "The Early Bird 2-Seater Quad Bike Tour is ideal for couples and friends who want to share their desert adventure.",
        "Riding together on a 2-seater ATV, one person drives while the other enjoys the scenery. Morning departures offer the best temperatures and photography lighting.",
        "At AED 200 for two people, this package offers outstanding value for a shared experience."
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
        "Couples",
        "Friends (2)",
        "Budget Pairs",
        "First-Time Riders"
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
        { name: "Early Bird Quad 1-Seater", href: "/quad-bike-dubai/early-bird-quad-1-seater", price: "AED 150", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Afternoon Quad 2-Seater", href: "/quad-bike-dubai/afternoon-quad-2-seater", price: "AED 200", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Red Dunes Quad + Transfer 2-Seater", href: "/quad-bike-dubai/red-dunes-quad-transfer-2-seater", price: "AED 300", image: "/images/quad/red-dunes-quad-card.webp" }
      ]}
      partnerAnchor="quad bike tour Dubai"
    />
  );
}

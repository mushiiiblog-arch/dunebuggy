import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Red Dunes Quad 1-Seater + Transfer Dubai | AED 250",
  description: "Complete 1-seater quad bike adventure with hotel pickup and drop-off \u2014 the most convenient solo quad experience in Dubai. AED 250.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/red-dunes-quad-transfer-1-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Red Dunes Quad Tour + Shared Transfer (1-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Complete 1-seater quad bike adventure with hotel pickup and drop-off \u2014 the most convenient solo quad experience in Dubai."
      price="AED 250"
      duration="60 Minutes + Transfer"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/red-dunes-quad-card.webp"
      galleryImages={[
        "/images/quad/red-dunes-quad-card.webp",
        "/images/quad/red-dunes-quad-gallery-1.webp",
        "/images/quad/red-dunes-quad-gallery-2.webp",
        "/images/quad/red-dunes-quad-gallery-3.webp"
      ]}
      highlights={[
        "Complete all-in package \u2014 quad ride plus hotel transfer",
        "1-seater ATV for solo riding independence",
        "60-minute adventure across Al Badayer Red Dunes",
        "No transport logistics to arrange",
        "Ideal for tourists without a car",
        "AED 250 covers everything"
      ]}
      overview={[
        "The Red Dunes Quad Tour with Shared Transfer (1-Seater) is the complete all-in package for solo adventurers.",
        "The price covers both your 60-minute quad bike ride AND shared hotel transfer \u2014 pickup and drop-off from your Dubai hotel.",
        "The 1-seater configuration gives solo riders complete independence across the iconic Al Badayer Red Dunes."
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
        "Full insurance coverage",
        "Shared hotel transfer pickup and drop-off"
      ]}
      exclusions={[
        "BBQ dinner (optional)",
        "Personal expenses",
        "Private transfer (additional cost)"
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
        "Tourists Without Cars",
        "Hotel-Based Solo Travellers",
        "Convenience Seekers"
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
        { name: "Red Dunes Quad 2-Seater + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-2-seater", price: "AED 300", image: "/images/quad/red-dunes-quad-card.webp" },
        { name: "Yamaha Raptor + Transfer", href: "/quad-bike-dubai/yamaha-raptor-transfer", price: "AED 750", image: "/images/quad/yamaha-raptor-transfer-card.webp" },
        { name: "Afternoon Quad 1-Seater", href: "/quad-bike-dubai/afternoon-quad-1-seater", price: "AED 150", image: "/images/quad/afternoon-quad-card.webp" }
      ]}
      partnerAnchor="quad bike rental Dubai"
    />
  );
}

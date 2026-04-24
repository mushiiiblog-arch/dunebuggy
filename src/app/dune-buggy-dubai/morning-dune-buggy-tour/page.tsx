import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Morning Dune Buggy Tour Dubai | AED 450 | Sunrise Desert Adventure",
  description: "Beat the desert heat with a sunrise buggy adventure \u2014 the coolest and most serene way to experience Dubai's red dunes. AED 450.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/morning-dune-buggy-tour` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Morning Dune Buggy Tour Dubai"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Beat the desert heat with a sunrise buggy adventure \u2014 the coolest and most serene way to experience Dubai's red dunes."
      price="AED 450"
      duration="60 Minutes"
      seater="1, 2 & 4 Seater"
      persons="1-4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/early-bird-card.webp"
      galleryImages={[
        "/images/tours/early-bird-card.webp",
        "/images/tours/early-bird-gallery-1.webp",
        "/images/tours/early-bird-gallery-2.webp",
        "/images/tours/early-bird-gallery-3.webp",
        "/images/tours/early-bird-gallery-4.webp"
      ]}
      highlights={[
        "Sunrise departure for the coolest temperatures of the day",
        "Magical golden sunrise light across the red dunes",
        "Available in 1-seater, 2-seater, and 4-seater configurations",
        "Fully automatic transmission \u2014 perfect for beginners",
        "Includes sandboarding, camel ride, and refreshments",
        "The most peaceful time to experience the desert"
      ]}
      overview={[
        "The Morning Dune Buggy Tour is ideal for guests who want to avoid the desert heat and experience the Al Badayer Red Dunes in their most spectacular morning light.",
        "The early departure time offers cooler temperatures \u2014 often 10-15 degrees cooler than afternoon sessions \u2014 and the most dramatic photography lighting of the day.",
        "After the 60-minute ride, traditional desert activities continue at the camp including sandboarding, camel riding, and Arabic refreshments."
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
        "Early Risers",
        "Heat-Sensitive Guests",
        "Photography Lovers",
        "Couples"
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
        { name: "Early Bird Buggy Tour", href: "/dune-buggy-dubai/early-bird-buggy-tour", price: "AED 500", image: "/images/tours/early-bird-card.webp" },
        { name: "Red Dunes Afternoon", href: "/dune-buggy-dubai/red-dunes-afternoon-buggies", price: "AED 500", image: "/images/tours/red-dunes-card.webp" },
        { name: "Polaris RZR 1,2,4 Seater", href: "/dune-buggy-dubai/polaris-rzr-1-2-4-seater", price: "AED 500", image: "/images/tours/stage4-stunner-card.webp" }
      ]}
      partnerAnchor="morning desert adventure Dubai"
    />
  );
}

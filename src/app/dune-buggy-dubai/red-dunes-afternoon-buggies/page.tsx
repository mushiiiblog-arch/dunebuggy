import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Red Dunes Afternoon Buggies Dubai | AED 500 | Sunset Dune Buggy",
  description: "Chase the golden hour across Dubai's crimson red dunes with dramatic sunset photography. AED 500 per buggy. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/red-dunes-afternoon-buggies` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Red Dunes Afternoon Buggies"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Chase the golden hour across Dubai's crimson red dunes with dramatic sunset photography opportunities."
      price="AED 500"
      duration="60 Minutes"
      seater="1, 2 & 4 Seater"
      persons="1-4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/red-dunes-card.webp"
      galleryImages={[
        "/images/tours/red-dunes-card.webp",
        "/images/tours/red-dunes-gallery-1.webp",
        "/images/tours/red-dunes-gallery-2.webp",
        "/images/tours/red-dunes-gallery-3.webp",
        "/images/tours/red-dunes-gallery-4.webp"
      ]}
      highlights={[
        "Self-drive across Dubai's iconic red dunes during golden hour sunset",
        "The most visually spectacular time of day for desert photography",
        "Available in 1-seater, 2-seater, and 4-seater buggy configurations",
        "Warm afternoon colours paint the sand dunes in incredible tones",
        "Includes sandboarding, camel ride, and refreshments",
        "Fully automatic buggies \u2014 suitable for all experience levels"
      ]}
      overview={[
        "Red Dunes Afternoon Buggies is timed specifically to coincide with Dubai's magical golden hour, when the crimson sand takes on extraordinary warm tones that are impossible to recreate at other times of day.",
        "Your 60-minute ride across the Al Badayer Desert provides unmatched photography opportunities. The slanting afternoon light creates dramatic shadows across the dune formations.",
        "After the ride, the experience continues at the desert camp with sandboarding, camel riding, and refreshments as the sun sets over the desert."
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
        "Hotel pickup/drop-off (available AED 300 per car)",
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
        "Couples",
        "Sunset Chasers",
        "Instagram Enthusiasts",
        "Honeymoons",
        "Anniversary Celebrations"
      ]}
      faqs={[
        { q: "Do I need a driving licence?", a: "No driving licence is required. Our buggies are fully automatic with comprehensive safety briefing." },
        { q: "What is the minimum age?", a: "Drivers must be 16+ years old. Passengers of any age welcome with adult supervision." },
        { q: "What should I wear?", a: "Comfortable casual clothing and closed-toe shoes (mandatory). Sunglasses and sunscreen recommended." },
        { q: "Is hotel pickup included?", a: "Shared hotel transfer is available for AED 300 per car from anywhere in Dubai." },
        { q: "What is the cancellation policy?", a: "Free cancellation up to 24 hours before the tour. Weather cancellations are always rescheduled or fully refunded." },
        { q: "Can I bring a camera?", a: "Yes, cameras and GoPros are welcome. Secure all devices before riding. Multiple photo stops included." }
      ]}
      relatedTours={[
        { name: "Early Bird Buggy Tour", href: "/dune-buggy-dubai/early-bird-buggy-tour", price: "AED 500", image: "/images/tours/early-bird-card.webp" },
        { name: "Night Riders", href: "/dune-buggy-dubai/night-riders-dune-buggy-dubai", price: "AED 500", image: "/images/tours/night-riders-card.webp" },
        { name: "Red Dunes + Transfer", href: "/dune-buggy-dubai/red-dunes-buggy-shared-transfer", price: "AED 750", image: "/images/tours/red-dunes-card.webp" }
      ]}
      partnerAnchor="desert buggy ride Dubai"
    />
  );
}

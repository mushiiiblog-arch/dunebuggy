import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Can-Am Maverick XRS 26 Dune Buggy Dubai | AED 800 | Buggy Dubai Rental",
  description: "Self-drive the Can-Am Maverick XRS 26 across Dubai red dunes. 2-4 seater, 60 min, AED 800. Perfect for couples and groups. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/can-am-maverick-xrs-26` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Can-Am Maverick XRS 26 Dune Buggy Tour"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Agility meets power \u2014 the Can-Am Maverick XRS 26 is the perfect dune buggy for couples and groups who want big thrills at great value."
      price="AED 800"
      duration="60 Minutes"
      seater="2-4 Seater"
      persons="2-4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/canam-xrs-card.webp"
      galleryImages={[
        "/images/tours/canam-xrs-card.webp",
        "/images/tours/canam-xrs-gallery-1.webp",
        "/images/tours/canam-xrs-gallery-2.webp",
        "/images/tours/canam-xrs-gallery-3.webp",
        "/images/tours/canam-xrs-gallery-4.webp",
        "/images/tours/canam-xrs-gallery-5.webp"
      ]}
      highlights={[
        "Self-drive the 2026 Can-Am Maverick XRS \u2014 a high-performance sport buggy built for desert terrain",
        "Available in 2-seater and 4-seater configurations, ideal for couples and small groups",
        "1000cc+ turbocharged engine with advanced sport suspension",
        "Explore Dubai's Al Badayer Red Dunes \u2014 towering crimson dunes up to 100 metres tall",
        "Comprehensive safety briefing makes this tour perfect for riders of all experience levels",
        "Includes sandboarding, camel ride, refreshments, and professional photo stops"
      ]}
      overview={[
        "The Can-Am Maverick XRS 26 strikes the ideal balance between raw performance and accessible adventure. With a turbocharged 1000cc+ engine and sport-tuned suspension, this buggy is built to devour dunes.",
        "Your 60-minute self-drive experience takes you deep into the Al Badayer Desert, one of the most visually spectacular landscapes in the Arabian Peninsula.",
        "After the buggy ride, your desert experience continues with sandboarding, a traditional camel ride, and refreshments at the desert camp."
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
        "Friend Groups (4)",
        "Beginners",
        "Intermediate Riders",
        "Budget-Conscious Adventurers",
        "Photography Enthusiasts"
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
        { name: "Can-Am Maverick R X RS '26", href: "/dune-buggy-dubai/can-am-maverick-r-x-rs-26", price: "AED 999", image: "/images/tours/canam-rxrs-card.webp" },
        { name: "Stage 4 Stunner: RZR PRO R", href: "/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate", price: "AED 1,499", image: "/images/tours/stage4-stunner-card.webp" },
        { name: "Red Dunes Afternoon Buggies", href: "/dune-buggy-dubai/red-dunes-afternoon-buggies", price: "AED 500", image: "/images/tours/red-dunes-card.webp" }
      ]}
      partnerAnchor="buggy ride Dubai"
    />
  );
}

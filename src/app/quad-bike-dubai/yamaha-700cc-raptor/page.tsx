import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Yamaha 700cc Raptor Quad Bike Dubai | AED 500 | Buggy Dubai Rental",
  description: "Ride the legendary Yamaha 700cc Raptor \u2014 the most powerful sport ATV available for quad biking in Dubai's Al Badayer Desert. AED 500.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/yamaha-700cc-raptor` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Yamaha 700cc Raptor Quad Bike Dubai"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Ride the legendary Yamaha 700cc Raptor \u2014 the most powerful sport ATV available for quad biking in Dubai's Al Badayer Desert."
      price="AED 500"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/yamaha-raptor-card.webp"
      galleryImages={[
        "/images/quad/yamaha-raptor-card.webp",
        "/images/quad/yamaha-raptor-gallery-1.webp",
        "/images/quad/yamaha-raptor-gallery-2.webp",
        "/images/quad/yamaha-raptor-gallery-3.webp",
        "/images/quad/yamaha-raptor-gallery-4.webp"
      ]}
      highlights={[
        "Ride the iconic Yamaha 700cc Raptor \u2014 a legendary sport ATV",
        "686cc parallel-twin engine producing nearly 50 horsepower",
        "Independent double-wishbone suspension for maximum control",
        "60-minute adventure across the red dunes of Al Badayer",
        "Licensed desert guide and full safety gear included",
        "The most powerful quad bike available for tours in Dubai"
      ]}
      overview={[
        "The Yamaha 700cc Raptor is not just a quad bike \u2014 it is a purpose-built desert racing machine that has earned a legendary reputation across off-road motorsport worldwide.",
        "Your 60-minute adventure takes you across the dramatic terrain of the Al Badayer Red Dunes. Our expert guides set a pace appropriate for your skill level.",
        "Complete safety equipment, professional guidance, and scenic photography stops are all included."
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
        "Sport ATV Enthusiasts",
        "Experienced Riders",
        "Adrenaline Seekers",
        "Solo Adventurers"
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
        { name: "Yamaha Raptor + Transfer", href: "/quad-bike-dubai/yamaha-raptor-transfer", price: "AED 750", image: "/images/quad/yamaha-raptor-transfer-card.webp" },
        { name: "Afternoon Quad 1-Seater", href: "/quad-bike-dubai/afternoon-quad-1-seater", price: "AED 150", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Red Dunes Quad + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-1-seater", price: "AED 250", image: "/images/quad/red-dunes-quad-card.webp" }
      ]}
      partnerAnchor="desert quad bike tour"
    />
  );
}

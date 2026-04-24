import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Can-Am Maverick R X RS '26 | Best Dune Buggy Dubai | Buggy Dubai Rental",
  description: "Drive the 2026 Can-Am Maverick R X RS across Dubai's Al Badayer Red Dunes. Smart-Shox suspension, turbocharged 1000cc engine. AED 999 per buggy. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/can-am-maverick-r-x-rs-26` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Can-Am Maverick R X RS '26 Dune Buggy Tour"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Experience the most powerful self-drive buggy in Dubai \u2014 the 2026 Can-Am Maverick R X RS with Smart-Shox suspension."
      price="AED 999"
      duration="60 Minutes"
      seater="2-4 Seater"
      persons="2-4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/canam-rxrs-card.webp"
      galleryImages={[
        "/images/tours/canam-rxrs-card.webp",
        "/images/tours/canam-rxrs-gallery-1.webp",
        "/images/tours/canam-rxrs-gallery-2.webp",
        "/images/tours/canam-rxrs-gallery-3.webp",
        "/images/tours/canam-rxrs-gallery-4.webp",
        "/images/tours/canam-rxrs-gallery-5.webp"
      ]}
      highlights={[
        "Drive the brand-new 2026 Can-Am Maverick R X RS \u2014 the most advanced dune buggy in Dubai",
        "Smart-Shox semi-active suspension adapts in real-time to the desert terrain",
        "Turbocharged 1000cc+ engine delivers explosive acceleration across towering red dunes",
        "Suitable for complete beginners \u2014 fully automatic transmission with safety briefing",
        "Includes sandboarding, camel ride, and multiple scenic photo stops",
        "Available in morning, afternoon, and night departures"
      ]}
      overview={[
        "The Can-Am Maverick R X RS '26 represents the absolute pinnacle of dune buggy technology available in Dubai. Featuring the revolutionary Smart-Shox semi-active suspension system, this 2026 flagship model continuously monitors terrain and adjusts damping in real-time.",
        "Your 60-minute adventure begins with a comprehensive safety briefing. The Al Badayer Desert provides a spectacular backdrop of crimson sand formations. The route includes open flat sections for speed, steep dune faces for adrenaline, and ridge-top viewpoints.",
        "All participants receive certified helmets, professional goggles, and safety equipment. After the buggy ride, enjoy sandboarding, a camel ride, and Arabic coffee at our desert camp."
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
        "Friend Groups",
        "Adrenaline Seekers",
        "Photography Lovers",
        "First-Time Riders",
        "VIP Experiences",
        "Birthday Celebrations",
        "Tourists visiting Dubai"
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
        { name: "Can-Am Maverick XRS 26", href: "/dune-buggy-dubai/can-am-maverick-xrs-26", price: "AED 800", image: "/images/tours/canam-xrs-card.webp" },
        { name: "Stage 4 Stunner: RZR PRO R", href: "/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate", price: "AED 1,499", image: "/images/tours/stage4-stunner-card.webp" },
        { name: "Early Bird Buggy Tour", href: "/dune-buggy-dubai/early-bird-buggy-tour", price: "AED 500", image: "/images/tours/early-bird-card.webp" }
      ]}
      partnerAnchor="dune buggy tour Dubai"
    />
  );
}

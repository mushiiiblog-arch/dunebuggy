import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Yamaha 700cc Raptor + Transfer Dubai | AED 750 | Premium Package",
  description: "Premium package \u2014 ride the legendary Yamaha 700cc Raptor across Dubai's red dunes with hotel transfer included. AED 750.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/yamaha-raptor-transfer` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Yamaha 700cc Raptor + Shared Transfer"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="The premium complete package \u2014 ride the legendary Yamaha 700cc Raptor across Dubai's red dunes with hotel transfer included for ultimate convenience."
      price="AED 750"
      duration="60 Minutes + Transfer"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/yamaha-raptor-transfer-card.webp"
      galleryImages={[
        "/images/quad/yamaha-raptor-transfer-card.webp",
        "/images/quad/yamaha-raptor-gallery-1.webp",
        "/images/quad/yamaha-raptor-gallery-2.webp",
        "/images/quad/yamaha-raptor-gallery-3.webp",
        "/images/quad/yamaha-raptor-gallery-4.webp"
      ]}
      highlights={[
        "Premium Yamaha 700cc Raptor with all logistics included",
        "Hotel pickup and drop-off from anywhere in Dubai",
        "The most powerful quad bike available in Dubai tours",
        "60-minute adrenaline-packed desert adventure",
        "Perfect for serious sport ATV enthusiasts",
        "Door-to-door premium experience"
      ]}
      overview={[
        "The Yamaha 700cc Raptor with Shared Transfer package is designed for guests who demand the best \u2014 the most powerful quad bike available in Dubai combined with fully managed hotel logistics.",
        "The Yamaha Raptor 700cc delivers a riding experience in a completely different league from standard ATV rentals.",
        "The shared transfer eliminates every logistics challenge \u2014 pickup, drop-off, and full desert experience all handled."
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
        "Personal expenses"
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
        "Premium Experience Seekers",
        "Sport ATV Enthusiasts",
        "Convenience Lovers"
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
        { name: "Yamaha 700cc Raptor (No Transfer)", href: "/quad-bike-dubai/yamaha-700cc-raptor", price: "AED 500", image: "/images/quad/yamaha-raptor-card.webp" },
        { name: "Red Dunes Quad 1-Seater + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-1-seater", price: "AED 250", image: "/images/quad/red-dunes-quad-card.webp" },
        { name: "Can-Am Maverick R X RS", href: "/dune-buggy-dubai/can-am-maverick-r-x-rs-26", price: "AED 999", image: "/images/tours/canam-rxrs-card.webp" }
      ]}
      partnerAnchor="premium desert tour Dubai"
    />
  );
}

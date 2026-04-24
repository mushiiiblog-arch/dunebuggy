import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Early Bird Buggy Tour | Dune Buggy Dubai | Buggy Dubai Rental",
  description: "Sunrise desert adventure \u2014 experience Dubai's red dunes in cool morning light with breathtaking golden sunrise views. AED 500 per buggy.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/early-bird-buggy-tour` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Early Bird Buggy Tour"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Sunrise desert adventure \u2014 experience Dubai's red dunes in cool morning light with breathtaking golden sunrise views."
      price="AED 500"
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
        "Self-drive a high-performance dune buggy across Dubai's iconic Al Badayer Red Dunes",
        "Morning departure for the coolest temperatures and most dramatic sunrise light",
        "Available in 1-seater, 2-seater, and 4-seater configurations",
        "Fully automatic transmission \u2014 no driving licence required",
        "Includes sandboarding, camel ride, refreshments, and scenic photo stops",
        "Licensed desert guides ensure maximum safety and enjoyment"
      ]}
      overview={[
        "Early Bird Buggy Tour is one of the most popular dune buggy experiences in Dubai, offering the perfect combination of accessibility, excitement, and desert beauty.",
        "Morning departure means cooler temperatures and stunning sunrise light. The route takes you through open desert flats for exhilarating speed runs, then up and over towering dune faces.",
        "After the 60-minute buggy ride, the adventure continues with sandboarding, camel riding, and Arabic refreshments at the desert camp."
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
        "Solo Adventurers",
        "Couples",
        "Small Groups",
        "Dubai Tourists",
        "UAE Residents",
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
        { name: "Can-Am Maverick R X RS '26", href: "/dune-buggy-dubai/can-am-maverick-r-x-rs-26", price: "AED 999", image: "/images/tours/canam-rxrs-card.webp" },
        { name: "Red Dunes Afternoon", href: "/dune-buggy-dubai/red-dunes-afternoon-buggies", price: "AED 500", image: "/images/tours/red-dunes-card.webp" },
        { name: "Night Riders", href: "/dune-buggy-dubai/night-riders-dune-buggy-dubai", price: "AED 500", image: "/images/tours/night-riders-card.webp" }
      ]}
      partnerAnchor="desert buggy ride Dubai"
    />
  );
}

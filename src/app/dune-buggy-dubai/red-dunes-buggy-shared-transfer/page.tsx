import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Red Dunes Buggy + Transfer Dubai | AED 750 | Hotel Pickup Included",
  description: "Complete dune buggy package with hotel transfer. 60-min ride across red dunes plus Dubai hotel pickup and drop-off. AED 750. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/red-dunes-buggy-shared-transfer` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Red Dunes Buggy Ride + Shared Transfer"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Complete hassle-free package \u2014 60-minute self-drive dune buggy ride across the Red Dunes with hotel pickup and drop-off included."
      price="AED 750"
      duration="60 Minutes + Transfer"
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
        "Complete all-in-one package \u2014 buggy ride plus shared hotel transfer",
        "No need to arrange your own transport",
        "60-minute self-drive dune buggy ride across Al Badayer Red Dunes",
        "Available in 1-seater, 2-seater, and 4-seater configurations",
        "Includes sandboarding, camel ride, refreshments",
        "Ideal for tourists without a car"
      ]}
      overview={[
        "The Red Dunes Buggy Ride with Shared Transfer package is designed for guests who want a completely seamless desert adventure from start to finish.",
        "The shared transfer picks you up from pickup points across Dubai. The journey to the desert takes 50-60 minutes.",
        "Once at the camp, your 60-minute self-drive buggy adventure begins. After the ride, enjoy the desert camp experience before returning to your hotel."
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
        "Shared hotel transfer (pickup and drop-off)"
      ]}
      exclusions={[
        "BBQ dinner (optional add-on)",
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
        "Hotel-Based Visitors",
        "Solo Travellers",
        "Couples",
        "Groups"
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
        { name: "Red Dunes Afternoon", href: "/dune-buggy-dubai/red-dunes-afternoon-buggies", price: "AED 500", image: "/images/tours/red-dunes-card.webp" },
        { name: "Early Bird Buggy Tour", href: "/dune-buggy-dubai/early-bird-buggy-tour", price: "AED 500", image: "/images/tours/early-bird-card.webp" },
        { name: "Can-Am Maverick XRS", href: "/dune-buggy-dubai/can-am-maverick-xrs-26", price: "AED 800", image: "/images/tours/canam-xrs-card.webp" }
      ]}
      partnerAnchor="buggy ride Dubai"
    />
  );
}

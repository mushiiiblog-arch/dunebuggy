import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Desert Combo Safari + Dune Buggy Dubai | AED 399 | Best Value Package",
  description: "Best value Dubai desert combo \u2014 sharing evening safari PLUS 30-min self-drive dune buggy ride. AED 399 per person. BBQ dinner, shows, camel ride included.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/desert-combo-sharing-safari-dune-buggy` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Desert Combo: Sharing Safari + Dune Buggy"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="The ultimate Dubai desert value package \u2014 combine a full 6-hour evening safari with a 30-minute self-drive dune buggy ride, all for just AED 399 per person."
      price="AED 399"
      duration="6 Hours (30-Min Buggy Ride)"
      seater="2-Seater Buggy"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/tours/desert-combo-card.webp"
      galleryImages={[
        "/images/tours/desert-combo-card.webp",
        "/images/tours/desert-combo-gallery-1.webp",
        "/images/tours/desert-combo-gallery-2.webp",
        "/images/tours/desert-combo-gallery-3.webp",
        "/images/tours/desert-combo-gallery-4.webp"
      ]}
      highlights={[
        "The best-value combination package in Dubai \u2014 safari PLUS dune buggy for AED 399",
        "Experience both a self-drive dune buggy ride and a complete desert safari",
        "Shared 4WD vehicle for the safari portion \u2014 ideal for solo travellers",
        "Evening safari includes dune bashing, camel ride, BBQ dinner, and live shows",
        "30-minute self-drive buggy ride across the Al Badayer red dunes",
        "Perfect introduction to Dubai's desert for first-time visitors"
      ]}
      overview={[
        "The Desert Combo package is designed for guests who want to experience the full range of Dubai desert adventures without breaking the bank.",
        "The evening begins with 4x4 dune bashing, then a camel ride, sandboarding, henna art, and traditional Arabic welcome at the desert camp.",
        "The highlight is your personal 30-minute self-drive dune buggy ride. The evening concludes with Arabian BBQ dinner and live cultural entertainment."
      ]}
      inclusions={[
        "30-minute self-drive dune buggy ride",
        "Shared 4WD vehicle for safari dune bashing",
        "Camel ride at the desert camp",
        "Sandboarding session",
        "Henna art for ladies",
        "Arabic coffee and dates welcome",
        "Arabian BBQ buffet dinner",
        "Tanoura dance, belly dancing, fire show",
        "Helmet and goggles for buggy",
        "Licensed guide"
      ]}
      exclusions={[
        "Hotel pickup (AED 300 per car)",
        "Alcoholic beverages",
        "Personal expenses",
        "Shisha"
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
        "Solo Travellers",
        "Budget Travellers",
        "First-Time Dubai Visitors",
        "Backpackers"
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
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/gallery/safari-1.webp" },
        { name: "Can-Am Maverick XRS 26", href: "/dune-buggy-dubai/can-am-maverick-xrs-26", price: "AED 800", image: "/images/tours/canam-xrs-card.webp" }
      ]}
      partnerAnchor="dune buggy tour"
    />
  );
}

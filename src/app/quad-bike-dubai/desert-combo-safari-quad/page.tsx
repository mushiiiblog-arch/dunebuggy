import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Desert Combo Safari + Quad Bike Dubai | AED 199 | Best Value",
  description: "Dubai's best-value desert combo \u2014 full 6-hour evening safari including dune bashing and BBQ dinner PLUS a 60-minute quad bike ride. AED 199.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/desert-combo-safari-quad` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Desert Combo: Sharing Safari + Quad Bike"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Dubai's best-value desert combo \u2014 a full 6-hour evening safari PLUS a 60-minute quad bike ride, all for AED 199."
      price="AED 199"
      duration="6 Hours (60-Min Quad Ride)"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/desert-combo-quad-card.webp"
      galleryImages={[
        "/images/quad/desert-combo-quad-card.webp",
        "/images/quad/desert-combo-quad-gallery-1.webp",
        "/images/quad/desert-combo-quad-gallery-2.webp",
        "/images/quad/desert-combo-quad-gallery-3.webp",
        "/images/quad/desert-combo-quad-gallery-4.webp"
      ]}
      highlights={[
        "Two desert experiences bundled into one \u2014 safari AND quad bike",
        "Classic Arabian desert experience: dune bashing, camel ride, sandboarding",
        "Arabian BBQ buffet dinner with full cultural show",
        "Personal 60-minute self-navigated quad bike ride",
        "Tanoura, belly dancing, and fire show entertainment",
        "Exceptional value at AED 199 per person"
      ]}
      overview={[
        "The Desert Combo Safari and Quad package represents extraordinary value \u2014 two completely different desert experiences bundled into one evening.",
        "The evening safari covers every Dubai desert classic: 4x4 dune bashing, camel ride, sandboarding, henna painting, Arabic coffee and dates, BBQ dinner, and live show.",
        "The quad bike component adds a personal adventure dimension with a 60-minute 1-seater ATV ride under the guidance of our licensed instructor."
      ]}
      inclusions={[
        "60-minute 1-seater quad bike ride",
        "Shared 4WD dune bashing session",
        "Camel ride and sandboarding",
        "Henna art for ladies",
        "Arabic coffee and dates",
        "Arabian BBQ buffet dinner",
        "Tanoura, belly dance, fire show",
        "Helmet and goggles",
        "Licensed guide"
      ]}
      exclusions={[
        "Hotel pickup (AED 300 per person)",
        "Alcoholic beverages",
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
        "Budget Travellers",
        "Solo Travellers",
        "First-Time Dubai Visitors",
        "Value Hunters"
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
        { name: "Early Bird Quad 1-Seater", href: "/quad-bike-dubai/early-bird-quad-1-seater", price: "AED 150", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Yamaha 700cc Raptor", href: "/quad-bike-dubai/yamaha-700cc-raptor", price: "AED 500", image: "/images/quad/yamaha-raptor-card.webp" },
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/gallery/safari-1.webp" }
      ]}
      partnerAnchor="quad bike Dubai tour"
    />
  );
}

import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Polaris RZR Sport EPS Buggy Dubai | AED 500 | 1,2,4 Seater",
  description: "Drive the iconic Polaris RZR Sport EPS 1000cc across Dubai's Al Badayer Desert. 1, 2, or 4-seater configuration. AED 500.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/polaris-rzr-1-2-4-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Polaris RZR Sport EPS Buggy Tour"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Drive the iconic Polaris RZR Sport EPS 1000cc across Dubai's Al Badayer Desert in your choice of 1, 2, or 4-seater configuration."
      price="AED 500"
      duration="60 Minutes"
      seater="1, 2 & 4 Seater"
      persons="1-4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/stage4-stunner-card.webp"
      galleryImages={[
        "/images/tours/stage4-stunner-card.webp",
        "/images/tours/stage4-gallery-1.webp",
        "/images/tours/stage4-gallery-2.webp",
        "/images/tours/stage4-gallery-3.webp",
        "/images/tours/stage4-gallery-4.webp"
      ]}
      highlights={[
        "Drive the legendary Polaris RZR Sport EPS with 1000cc performance",
        "Available in 1-seater, 2-seater, or 4-seater configuration",
        "Electronic Power Steering (EPS) for effortless handling",
        "Ideal for solo riders, couples, and families",
        "Automatic transmission \u2014 suitable for all skill levels",
        "Includes sandboarding, camel ride, and refreshments"
      ]}
      overview={[
        "The Polaris RZR Sport EPS is one of the most versatile dune buggies in our fleet \u2014 offering strong 1000cc performance in configurations that suit every group size from solo to family.",
        "The Electronic Power Steering (EPS) system makes the steering light and responsive at all times, giving confidence to drivers of any experience level.",
        "Your 60-minute desert experience includes professional guidance, complete safety equipment, and all the traditional desert activities at the camp."
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
        "Solo Riders",
        "Couples",
        "Families",
        "Small Groups",
        "First-Time Riders",
        "Experienced Off-Roaders"
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
        { name: "Stage 4 Stunner RZR PRO R", href: "/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate", price: "AED 1,499", image: "/images/tours/stage4-stunner-card.webp" },
        { name: "Can-Am Maverick XRS", href: "/dune-buggy-dubai/can-am-maverick-xrs-26", price: "AED 800", image: "/images/tours/canam-xrs-card.webp" },
        { name: "Early Bird Buggy Tour", href: "/dune-buggy-dubai/early-bird-buggy-tour", price: "AED 500", image: "/images/tours/early-bird-card.webp" }
      ]}
      partnerAnchor="Polaris RZR dune buggy Dubai"
    />
  );
}

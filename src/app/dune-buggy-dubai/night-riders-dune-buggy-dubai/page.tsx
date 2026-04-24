import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Night Riders Dune Buggy Dubai | AED 500 | LED Night Adventure",
  description: "Navigate Dubai's iconic red dunes after dark in an LED-illuminated buggy under a canopy of stars. AED 500 per buggy. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/night-riders-dune-buggy-dubai` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Night Riders: Dune Buggy Dubai Adventure"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="Navigate Dubai's iconic red dunes after dark in an LED-illuminated buggy under a canopy of stars."
      price="AED 500"
      duration="60 Minutes"
      seater="1, 2 & 4 Seater"
      persons="1-4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/night-riders-card.webp"
      galleryImages={[
        "/images/tours/night-riders-card.webp",
        "/images/tours/night-riders-gallery-1.webp",
        "/images/tours/night-riders-gallery-2.webp",
        "/images/tours/night-riders-gallery-3.webp",
        "/images/tours/night-riders-gallery-4.webp"
      ]}
      highlights={[
        "LED-illuminated dune buggy ride across Dubai's Al Badayer Red Dunes after dark",
        "Completely unique desert experience \u2014 far different from daytime tours",
        "Cooler evening temperatures for maximum comfort",
        "Available in 1-seater, 2-seater, and 4-seater configurations",
        "Stargazing opportunities away from Dubai's city lights",
        "Full safety equipment and expert night-riding guides"
      ]}
      overview={[
        "The Night Riders package offers a completely unique take on Dubai's dune buggy experience. Riding across the red dunes with LED lights illuminating your path and stars overhead creates an atmosphere that simply cannot be matched during daylight hours.",
        "Evening temperatures are significantly cooler than daytime, making this one of the most comfortable times to ride. Your experienced guide leads the convoy through carefully selected routes suitable for night navigation.",
        "After the night buggy ride, enjoy refreshments at the desert camp and take in the spectacular desert sky \u2014 far from Dubai's city lights, the stars are extraordinary."
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
        "Night Adventure Seekers",
        "Couples (Romantic)",
        "Photography Enthusiasts",
        "Those Avoiding Heat",
        "Unique Experience Seekers"
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
        { name: "Early Bird Buggy Tour", href: "/dune-buggy-dubai/early-bird-buggy-tour", price: "AED 500", image: "/images/tours/early-bird-card.webp" },
        { name: "Red Dunes Afternoon", href: "/dune-buggy-dubai/red-dunes-afternoon-buggies", price: "AED 500", image: "/images/tours/red-dunes-card.webp" },
        { name: "Desert Combo Safari + Buggy", href: "/dune-buggy-dubai/desert-combo-sharing-safari-dune-buggy", price: "AED 399", image: "/images/tours/desert-combo-card.webp" }
      ]}
      partnerAnchor="desert buggy ride Dubai"
    />
  );
}

import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Stage 4 Stunner RZR PRO R | 4-Seater Family Buggy Dubai | AED 1,499",
  description: "The ultimate 4-seater family dune buggy in Dubai. Polaris RZR PRO R Ultimate EPS. 60 min, AED 1,499. Fits the whole family. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Stage 4 Stunner: RZR PRO R Ultimate EPS"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline="The most powerful 4-seater family buggy in Dubai \u2014 the Polaris RZR PRO R Ultimate EPS conquers every dune with extreme power and comfort."
      price="AED 1,499"
      duration="60 Minutes"
      seater="4 Seater"
      persons="4 Persons"
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
        "Drive the legendary Polaris RZR PRO R Ultimate EPS \u2014 the most powerful 4-seater dune buggy in Dubai",
        "Stage 4 suspension upgrade provides race-level performance",
        "EPS (Electronic Power Steering) ensures effortless, precise control",
        "Fits the entire family \u2014 four adults ride together in comfort and safety",
        "Same vehicle class used by professional off-road racing teams",
        "Available for morning, afternoon, and thrilling night rides"
      ]}
      overview={[
        "When only the best will do, the Stage 4 Stunner is your answer. The Polaris RZR PRO R Ultimate EPS with Stage 4 suspension upgrades is the most capable recreational off-road vehicle available for public tours in the UAE.",
        "This premium 4-seater package is designed for families and groups who refuse to compromise. All four passengers share a single vehicle, experiencing every dune together.",
        "Your adventure also includes traditional desert activities at the camp: sandboarding, camel riding, and refreshments as the desert sun paints the sky."
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
        "Families with Teenagers",
        "Groups of 4",
        "Corporate Team Events",
        "Birthday Celebrations",
        "VIP Experiences"
      ]}
      faqs={[
        { q: "Can children ride in the Stage 4 Stunner?", a: "Yes. Children are welcome as passengers. The minimum driver age is 16 years. All passengers must wear the provided safety harness." },
        { q: "Is AED 1,499 per person or per vehicle?", a: "AED 1,499 is per vehicle, which accommodates 4 passengers. That works out to approximately AED 375 per person." },
        { q: "What makes it a Stage 4 buggy?", a: "Stage 4 refers to the level of suspension upgrade applied to the Polaris RZR PRO R. It includes longer-travel shocks and race-level tuning." },
        { q: "Is it difficult to drive with 4 passengers?", a: "Not at all. The EPS (Electronic Power Steering) makes the steering light and responsive regardless of load." },
        { q: "Do I need a driving licence?", a: "No driving licence is required. Our buggies are fully automatic with comprehensive safety briefing." },
        { q: "What is the minimum age?", a: "Drivers must be 16+ years old. Passengers of any age welcome with adult supervision." },
        { q: "What should I wear?", a: "Comfortable casual clothing and closed-toe shoes (mandatory). Sunglasses and sunscreen recommended." }
      ]}
      relatedTours={[
        { name: "Can-Am Maverick R X RS '26", href: "/dune-buggy-dubai/can-am-maverick-r-x-rs-26", price: "AED 999", image: "/images/tours/canam-rxrs-card.webp" },
        { name: "Night Riders Adventure", href: "/dune-buggy-dubai/night-riders-dune-buggy-dubai", price: "AED 500", image: "/images/tours/night-riders-card.webp" },
        { name: "Red Dunes Afternoon", href: "/dune-buggy-dubai/red-dunes-afternoon-buggies", price: "AED 500", image: "/images/tours/red-dunes-card.webp" }
      ]}
      partnerAnchor="dune buggy tour Dubai"
    />
  );
}

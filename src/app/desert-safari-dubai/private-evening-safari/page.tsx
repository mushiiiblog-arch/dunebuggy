import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Private Evening Desert Safari Dubai | AED 800 | Family Package",
  description: "Exclusive private desert safari for families \u2014 your own dedicated 4WD vehicle, personal guide, and complete freedom. AED 800 per family (1-5 persons).",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/private-evening-safari` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Private Evening Desert Safari Dubai"
      breadcrumbParent={{ label: "Desert Safari Dubai", href: "/desert-safari-dubai" }}
      tagline="An exclusive private desert safari for families and groups \u2014 your own dedicated 4WD vehicle, personal guide, and complete freedom to enjoy the Dubai desert at your own pace."
      price="AED 800"
      duration="6 Hours"
      seater="Private 4WD"
      persons="Family (1-5 persons)"
      difficulty="All Levels"
      heroImage="/images/gallery/safari-2.webp"
      galleryImages={[
        "/images/gallery/safari-2.webp",
        "/images/gallery/safari-1.webp",
        "/images/gallery/safari-3.webp",
        "/images/gallery/safari-4.webp",
        "/images/gallery/gallery-4.webp"
      ]}
      highlights={[
        "Thrilling 4x4 dune bashing across the Al Badayer Red Dunes",
        "Traditional camel ride through the golden desert",
        "Sandboarding down massive dune faces",
        "Authentic Arabian BBQ buffet dinner",
        "Live cultural entertainment: Tanoura, belly dance, fire show",
        "Traditional Arabic welcome with coffee, dates, henna art",
        "Private dedicated 4WD vehicle for your family"
      ]}
      overview={[
        "The Private Evening Desert Safari offers everything the shared package provides, but with total exclusivity.",
        "Your family or group has its own dedicated 4WD vehicle and complete freedom to set the pace of every activity.",
        "Particularly valuable for families with young children, guests with accessibility needs, or groups who prefer privacy."
      ]}
      inclusions={[
        "4WD dune bashing session",
        "Camel ride",
        "Sandboarding",
        "Henna art",
        "Arabic coffee and dates welcome",
        "Arabian BBQ buffet dinner (veg and non-veg)",
        "Tanoura, belly dance, and fire show",
        "Complimentary water and soft drinks",
        "Private dedicated 4WD and driver",
        "Return to meeting point"
      ]}
      exclusions={[
        "Hotel pickup (AED 300 per person)",
        "Alcoholic beverages",
        "Personal expenses",
        "Professional photography (optional add-on)"
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
        "Families",
        "Private Groups",
        "Honeymoons",
        "Special Occasions"
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
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/gallery/safari-1.webp" },
        { name: "Private Luxury Safari", href: "/desert-safari-dubai/private-luxury-safari", price: "AED 1,300", image: "/images/gallery/safari-4.webp" },
        { name: "Shared Luxury Safari", href: "/desert-safari-dubai/shared-luxury-safari", price: "AED 200", image: "/images/gallery/safari-3.webp" }
      ]}
      partnerAnchor="private desert safari Dubai"
    />
  );
}

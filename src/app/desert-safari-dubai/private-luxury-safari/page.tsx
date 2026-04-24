import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Private Luxury Evening Safari Dubai | AED 1,300 | VIP Experience",
  description: "The ultimate Dubai desert experience \u2014 fully private luxury safari with dedicated vehicle, personal guide, and gourmet dinner. AED 1,300 per family.",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/private-luxury-safari` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Private Luxury Evening Safari Dubai"
      breadcrumbParent={{ label: "Desert Safari Dubai", href: "/desert-safari-dubai" }}
      tagline="The ultimate Dubai desert experience \u2014 a fully private luxury safari with dedicated vehicle, personal guide, gourmet dinner, and exclusive VIP treatment for your family."
      price="AED 1,300"
      duration="6 Hours"
      seater="Private 4WD"
      persons="Family (1-5 persons)"
      difficulty="All Levels"
      heroImage="/images/gallery/safari-4.webp"
      galleryImages={[
        "/images/gallery/safari-4.webp",
        "/images/gallery/safari-1.webp",
        "/images/gallery/safari-2.webp",
        "/images/gallery/safari-3.webp",
        "/images/gallery/gallery-4.webp"
      ]}
      highlights={[
        "Thrilling 4x4 dune bashing across the Al Badayer Red Dunes",
        "Traditional camel ride through the golden desert",
        "Sandboarding down massive dune faces",
        "Authentic Arabian BBQ buffet dinner",
        "Live cultural entertainment: Tanoura, belly dance, fire show",
        "Traditional Arabic welcome with coffee, dates, henna art",
        "Exclusive private 4WD and personal guide",
        "Gourmet Arabian BBQ dinner",
        "VIP dining area"
      ]}
      overview={[
        "The Private Luxury Evening Safari is the finest desert safari product available in Dubai \u2014 an immersive VIP desert experience for guests who accept nothing but the best.",
        "Your private guide provides a deeply personal experience, sharing stories of Bedouin culture and ensuring every family member's needs are met.",
        "The gourmet dinner exceeds anything available in standard packages, featuring premium grilled specialties and live cooking stations."
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
        "Exclusive private 4WD and personal driver",
        "Dedicated personal guide",
        "Gourmet premium BBQ",
        "Exclusive VIP dining area",
        "Priority access",
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
        "VIP Guests",
        "Celebrities",
        "Special Celebrations",
        "Luxury Families",
        "Corporate Executives"
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
        { name: "Private Evening Safari", href: "/desert-safari-dubai/private-evening-safari", price: "AED 800", image: "/images/gallery/safari-2.webp" },
        { name: "Shared Luxury Safari", href: "/desert-safari-dubai/shared-luxury-safari", price: "AED 200", image: "/images/gallery/safari-3.webp" },
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/gallery/safari-1.webp" }
      ]}
      partnerAnchor="VIP desert safari Dubai"
    />
  );
}

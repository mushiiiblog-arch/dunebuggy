import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Afternoon Quad Bike 2-Seater Dubai | AED 200 | Couples Sunset",
  description: "Share the golden-hour quad adventure \u2014 2-seater afternoon ride with breathtaking desert sunset views. AED 200 per vehicle. Book WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/afternoon-quad-2-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Afternoon Quad Bike Tour (2-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Share the golden-hour adventure \u2014 a 2-seater afternoon quad ride with breathtaking desert sunset views for couples and friends."
      price="AED 200"
      duration="60 Minutes"
      seater="2-Seater"
      persons="2 Persons"
      difficulty="All Levels"
      heroImage="/images/quad/afternoon-quad-card.webp"
      galleryImages={["/images/quad/afternoon-quad-card.webp", "/images/quad/afternoon-quad-gallery-1.webp", "/images/quad/afternoon-quad-gallery-2.webp", "/images/quad/afternoon-quad-gallery-3.webp", "/images/quad/afternoon-quad-gallery-4.webp", "/images/quad/afternoon-quad-gallery-5.webp", "/images/quad/afternoon-quad-gallery-6.webp", "/images/quad/afternoon-quad-gallery-7.webp", "/images/quad/afternoon-quad-gallery-8.webp"]}
      highlights={["2-seater ATV perfect for couples and friends sharing the experience", "Golden-hour sunset timing for spectacular photography opportunities", "60-minute desert adventure across red dunes", "Just AED 100 per person when split between two riders", "Romantic and memorable shared experience", "All safety gear, instructor, and refreshments included"]}
      overview={["The Afternoon 2-Seater Quad Bike Tour combines the beauty of the golden-hour desert with the joy of a shared adventure. Couples and friends ride together on a 2-seater ATV as the afternoon sun paints the Al Badayer dunes in shades of amber, crimson, and rose gold.", "It is one of the most romantic and visually spectacular experiences available in Dubai. At AED 200 per vehicle \u2014 AED 100 per person when shared \u2014 this tour offers exceptional value for a premium experience.", "The 2-seater ATV is intuitive to operate with automatic transmission, and the comprehensive pre-tour briefing from our guides ensures both riders feel completely confident before setting off across the dunes."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Couples", "Honeymooners", "Romantic Getaways", "Friends (2)", "Sunset Photography"]}
      faqs={[
        { q: "Can we both drive?", a: "Yes \u2014 swap at rest stops to share the driver experience." }, { q: "Is this good for a date?", a: "Absolutely \u2014 sunset desert ATV rides are one of the most romantic Dubai activities." }, { q: "Is there a weight limit?", a: "Combined rider weight should be under 200kg." }, { q: "What if it rains?", a: "Rare in Dubai. If weather impacts safety, we offer free reschedule." }, { q: "What time does sunset happen?", a: "Varies by season \u2014 typically between 5:30 PM and 6:45 PM." }
      ]}
      relatedTours={[
        { name: "Afternoon Quad 1-Seater", href: "/quad-bike-dubai/afternoon-quad-1-seater", price: "AED 150", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Early Bird Quad 2-Seater", href: "/quad-bike-dubai/early-bird-quad-2-seater", price: "AED 200", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Red Dunes Quad 2-Seater", href: "/quad-bike-dubai/red-dunes-quad-transfer-2-seater", price: "AED 300", image: "/images/quad/red-dunes-quad-card.webp" }
      ]}
    />
  );
}

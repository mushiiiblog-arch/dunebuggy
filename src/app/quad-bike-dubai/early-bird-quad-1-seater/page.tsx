import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Early Bird Quad Bike 1-Seater Dubai | AED 150 | Sunrise ATV",
  description: "Most affordable quad bike experience in Dubai \u2014 solo sunrise ride across red dunes in cool morning temperatures. AED 150 per person. Book WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/early-bird-quad-1-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Early Bird Quad Bike Tour (1-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="The most affordable quad bike experience in Dubai \u2014 a solo sunrise ride across the Al Badayer Red Dunes for just AED 150."
      price="AED 150"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/early-bird-quad-card.webp"
      galleryImages={["/images/quad/early-bird-quad-card.webp", "/images/quad/early-bird-quad-gallery-1.webp", "/images/quad/early-bird-quad-gallery-2.webp", "/images/quad/early-bird-quad-gallery-3.webp", "/images/quad/early-bird-quad-gallery-4.webp", "/images/quad/early-bird-quad-gallery-5.webp", "/images/quad/early-bird-quad-gallery-6.webp", "/images/quad/early-bird-quad-gallery-7.webp"]}
      highlights={["Most affordable legitimate quad bike tour in Dubai at AED 150", "Sunrise departure for the coolest temperatures of the day", "Solo 1-seater ATV \u2014 complete riding independence and freedom", "60-minute desert ride across the iconic Al Badayer Red Dunes", "Spectacular morning photography lighting and golden tones", "Licensed guide and full safety gear included"]}
      overview={["The Early Bird 1-Seater Quad Bike Tour is the perfect choice for solo adventurers and budget-conscious guests who want genuine desert excitement without a large price tag. Departing at sunrise, this tour benefits from the most comfortable riding temperatures of the day \u2014 typically 10\u201315 degrees cooler than afternoon sessions.", "At just AED 150 per person, this is one of the most affordable legitimate desert adventures available anywhere in Dubai. The early morning light also creates extraordinary photography conditions \u2014 the low-angle sun illuminates the red dunes with warm golden tones that are simply impossible to recreate at other times of day.", "Your 60-minute self-drive quad bike experience takes you across varied terrain that rewards both careful exploration and faster runs. Our licensed instructor leads at a pace appropriate for your comfort level."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Budget Travellers", "Solo Adventurers", "Early Risers", "Photography Lovers", "First-Time Quad Riders"]}
      faqs={[
        { q: "What time does the early bird tour start?", a: "Departure is typically around 6:00\u20137:00 AM. Exact time confirmed when booking." }, { q: "Why is this the best time to ride?", a: "Cooler temperatures, magical sunrise light, and quieter desert make morning the most pleasant time." }, { q: "Is hotel pickup included?", a: "Available as an add-on for AED 300 per car from anywhere in Dubai." }, { q: "What should I bring?", a: "Sunglasses, sunscreen, comfortable closed-toe shoes, and a camera. We provide everything else." }, { q: "Can I bring my children?", a: "Children can ride as passengers on a 2-seater quad. Drivers must be 16+. Consider our 2-seater package." }
      ]}
      relatedTours={[
        { name: "Early Bird Quad 2-Seater", href: "/quad-bike-dubai/early-bird-quad-2-seater", price: "AED 200", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Afternoon Quad 1-Seater", href: "/quad-bike-dubai/afternoon-quad-1-seater", price: "AED 150", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Desert Combo Safari + Quad", href: "/quad-bike-dubai/desert-combo-safari-quad", price: "AED 199", image: "/images/quad/desert-combo-quad-card.webp" }
      ]}
    />
  );
}

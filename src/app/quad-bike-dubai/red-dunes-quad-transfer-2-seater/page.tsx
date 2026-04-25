import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Red Dunes Quad 2-Seater + Hotel Transfer Dubai | AED 300",
  description: "Complete 2-seater quad ride for couples and friends with hotel pickup and drop-off included. AED 300 per vehicle. Book on WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/red-dunes-quad-transfer-2-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Red Dunes Quad Tour + Shared Transfer (2-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="The complete couple or friends quad package \u2014 2-seater quad ride plus hotel pickup and drop-off from anywhere in Dubai."
      price="AED 300"
      duration="60 Min + Transfer"
      seater="2-Seater"
      persons="2 Persons"
      difficulty="All Levels"
      heroImage="/images/quad/red-dunes-quad-card.webp"
      galleryImages={["/images/quad/red-dunes-quad-card.webp", "/images/quad/red-dunes-quad-gallery-1.webp", "/images/quad/red-dunes-quad-gallery-2.webp", "/images/quad/red-dunes-quad-gallery-3.webp", "/images/quad/red-dunes-quad-gallery-4.webp", "/images/quad/red-dunes-quad-gallery-5.webp", "/images/quad/red-dunes-quad-gallery-6.webp", "/images/quad/red-dunes-quad-gallery-7.webp", "/images/quad/red-dunes-quad-gallery-8.webp"]}
      highlights={["Complete all-in package for couples \u2014 quad ride plus hotel transfer", "AED 150 per person shared cost \u2014 exceptional value", "2-seater ATV for couples and friends riding together", "60-minute desert adventure across red dunes", "Hotel pickup and drop-off included", "Hassle-free complete experience door-to-door"]}
      overview={["The Red Dunes Quad Tour with Shared Transfer (2-Seater) is the ultimate hassle-free desert adventure for couples and friends. For AED 300 \u2014 just AED 150 per person \u2014 you get hotel pickup and drop-off plus a 60-minute shared 2-seater quad bike ride across the spectacular Al Badayer Red Dunes.", "Everything is arranged; all you need to do is be ready at your hotel at the scheduled time. Riding together on a 2-seater ATV creates shared memories that solo experiences simply cannot replicate.", "One person drives while the other acts as co-pilot and photographer \u2014 then switch at rest stops for a fully shared experience. This is one of the most memorable couple activities available in all of Dubai."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Couples", "Friends (2)", "Hotel-Based Pairs", "Honeymooners", "Convenient Adventurers"]}
      faqs={[
        { q: "Is the transfer private?", a: "Shared with other tour guests. Private transfer available at additional cost." }, { q: "Can both ride?", a: "Yes \u2014 share the 2-seater ATV. Switch at rest stops for both to drive." }, { q: "What's included for AED 300?", a: "Hotel transfer (both ways), 60-min ATV ride, helmet, goggles, instructor, sandboarding, camel ride, water." }, { q: "What time?", a: "Multiple departures daily \u2014 confirm preferred time when booking on WhatsApp." }, { q: "What if one person doesn't want to drive?", a: "No problem \u2014 only the driver needs to be 16+. Both can swap or one can stay as passenger." }
      ]}
      relatedTours={[
        { name: "Red Dunes Quad 1-Seater + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-1-seater", price: "AED 250", image: "/images/quad/red-dunes-quad-card.webp" },
        { name: "Afternoon Quad 2-Seater", href: "/quad-bike-dubai/afternoon-quad-2-seater", price: "AED 200", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Yamaha Raptor + Transfer", href: "/quad-bike-dubai/yamaha-raptor-transfer", price: "AED 750", image: "/images/quad/yamaha-raptor-transfer-card.webp" }
      ]}
    />
  );
}

import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Early Bird Quad Bike 2-Seater Dubai | AED 200 | Couples Sunrise",
  description: "Share the sunrise desert adventure \u2014 2-seater early morning quad bike ride for couples and friends. AED 200 per vehicle. Book WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/early-bird-quad-2-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Early Bird Quad Bike Tour (2-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Share the sunrise desert adventure \u2014 a 2-seater early morning quad bike ride across Dubai's red dunes for couples and friends."
      price="AED 200"
      duration="60 Minutes"
      seater="2-Seater"
      persons="2 Persons"
      difficulty="All Levels"
      heroImage="/images/quad/early-bird-quad-card.webp"
      galleryImages={["/images/quad/early-bird-quad-card.webp", "/images/quad/early-bird-quad-gallery-1.webp", "/images/quad/early-bird-quad-gallery-2.webp", "/images/quad/early-bird-quad-gallery-3.webp", "/images/quad/early-bird-quad-gallery-4.webp", "/images/quad/early-bird-quad-gallery-5.webp", "/images/quad/early-bird-quad-gallery-6.webp", "/images/quad/early-bird-quad-gallery-7.webp"]}
      highlights={["2-seater ATV perfect for couples and friends riding together", "Sunrise departure for cool temperatures and golden morning light", "Just AED 100 per person when shared between two riders", "60-minute desert adventure across the Al Badayer Red Dunes", "Great value shared experience for any pair", "All safety gear, instructor, and refreshments included"]}
      overview={["The Early Bird 2-Seater Quad Bike Tour is ideal for couples and friends who want to share their desert adventure. Riding together on a 2-seater ATV, one person drives while the other enjoys the scenery \u2014 then you can swap at waypoints for a shared experience.", "Morning departures offer the best temperatures and the most spectacular photography lighting of the day. The 2-seater ATV is fully automatic and easy to operate, making it perfect even for guests with no prior quad biking experience.", "At AED 200 for two people \u2014 just AED 100 per person \u2014 this package offers outstanding value. Your guide leads the way while ensuring both riders have a safe and thoroughly enjoyable desert experience."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Couples", "Friends (2)", "Budget Pairs", "First-Time Riders", "Honeymooners"]}
      faqs={[
        { q: "Can both riders take turns driving?", a: "Yes \u2014 switch at rest stops along the route so both experience the driver position." }, { q: "Is AED 200 total or per person?", a: "AED 200 is the total per vehicle (2 persons). That's just AED 100 per person." }, { q: "What's the weight limit?", a: "Combined rider weight should not exceed 200kg. Larger groups can opt for our 4-seater dune buggy options." }, { q: "What time does it start?", a: "Sunrise departure between 6:00\u20137:00 AM, exact time confirmed on booking." }, { q: "Can I add hotel pickup?", a: "Yes \u2014 shared transfer is available for AED 300 per car." }
      ]}
      relatedTours={[
        { name: "Early Bird Quad 1-Seater", href: "/quad-bike-dubai/early-bird-quad-1-seater", price: "AED 150", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Afternoon Quad 2-Seater", href: "/quad-bike-dubai/afternoon-quad-2-seater", price: "AED 200", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Red Dunes Quad 2-Seater + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-2-seater", price: "AED 300", image: "/images/quad/red-dunes-quad-card.webp" }
      ]}
    />
  );
}

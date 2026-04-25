import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Desert Combo Safari + Quad Bike Dubai | AED 199 | Best Value Package",
  description: "Dubai's best-value desert combo \u2014 6-hour evening safari PLUS 60-minute quad bike ride for AED 199. Includes BBQ dinner, dune bashing, camel ride, shows.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/desert-combo-safari-quad` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Desert Combo: Sharing Safari + Quad Bike"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Dubai's best-value desert combo \u2014 a full 6-hour evening safari PLUS a 60-minute quad bike ride, all for AED 199 per person."
      price="AED 199"
      duration="6 Hours (60-Min Quad)"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/desert-combo-quad-card.webp"
      galleryImages={["/images/quad/desert-combo-quad-card.webp", "/images/quad/desert-combo-quad-gallery-1.webp", "/images/quad/desert-combo-quad-gallery-2.webp", "/images/quad/desert-combo-quad-gallery-3.webp", "/images/quad/desert-combo-quad-gallery-4.webp", "/images/quad/desert-combo-quad-gallery-5.webp", "/images/quad/desert-combo-quad-gallery-6.webp", "/images/quad/desert-combo-quad-gallery-7.webp", "/images/quad/desert-combo-quad-gallery-8.webp"]}
      highlights={["Two complete desert experiences in one evening \u2014 safari AND quad bike", "Classic Arabian desert: dune bashing, camel ride, sandboarding, henna art", "Arabian BBQ buffet dinner with full cultural show", "Personal 60-minute self-drive quad bike adventure", "Tanoura, belly dancing, and fire show entertainment under the stars", "Outstanding value at AED 199 per person"]}
      overview={["The Desert Combo Safari and Quad package represents extraordinary value \u2014 two completely different desert experiences bundled into one evening for a single price. The evening safari covers every Dubai desert classic: 4x4 dune bashing with a professional driver, camel ride, sandboarding, henna painting, Arabic coffee and dates, BBQ dinner, and live cultural show.", "The quad bike component adds a personal adventure dimension that sets this package apart from a standard safari. You take control of a 1-seater quad bike and self-navigate a 60-minute desert route under the guidance of our licensed instructor.", "For solo travellers and budget-conscious guests who want to experience everything Dubai's desert has to offer, this is the definitive package."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Solo Travellers", "Budget Travellers", "First-Time Dubai Visitors", "Backpackers", "Value Hunters"]}
      faqs={[
        { q: "Is the 60-minute quad bike ride enough?", a: "Yes \u2014 60 minutes provides plenty of time to explore the dunes and have a complete quad biking experience." }, { q: "How many people share the safari vehicle?", a: "The safari vehicle typically carries 4\u20136 passengers depending on the 4WD model used." }, { q: "What is the AED 199 cost per person?", a: "Yes \u2014 AED 199 covers one person for both the evening safari and 60-minute quad ride." }, { q: "What time does this tour run?", a: "Evening safari typically starts 3:30\u20134:00 PM and concludes around 9:30\u201310:00 PM." }, { q: "Are vegetarian meals available?", a: "Yes \u2014 the Arabian BBQ buffet includes a full selection of vegetarian options." }
      ]}
      relatedTours={[
        { name: "Early Bird Quad 1-Seater", href: "/quad-bike-dubai/early-bird-quad-1-seater", price: "AED 150", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Yamaha 700cc Raptor", href: "/quad-bike-dubai/yamaha-700cc-raptor", price: "AED 500", image: "/images/quad/yamaha-raptor-card.webp" },
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/safari/shared-evening-safari-card.webp" }
      ]}
    />
  );
}

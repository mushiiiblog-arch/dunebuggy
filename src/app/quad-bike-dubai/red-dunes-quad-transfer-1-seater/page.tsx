import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Red Dunes Quad 1-Seater + Hotel Transfer Dubai | AED 250",
  description: "Complete 1-seater quad bike adventure with Dubai hotel pickup and drop-off included. The most convenient solo quad experience. AED 250.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/red-dunes-quad-transfer-1-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Red Dunes Quad Tour + Shared Transfer (1-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Complete 1-seater quad bike adventure with hotel pickup and drop-off included \u2014 the most convenient solo quad experience in Dubai."
      price="AED 250"
      duration="60 Min + Transfer"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/red-dunes-quad-card.webp"
      galleryImages={["/images/quad/red-dunes-quad-card.webp", "/images/quad/red-dunes-quad-gallery-1.webp", "/images/quad/red-dunes-quad-gallery-2.webp", "/images/quad/red-dunes-quad-gallery-3.webp", "/images/quad/red-dunes-quad-gallery-4.webp", "/images/quad/red-dunes-quad-gallery-5.webp", "/images/quad/red-dunes-quad-gallery-6.webp", "/images/quad/red-dunes-quad-gallery-7.webp", "/images/quad/red-dunes-quad-gallery-8.webp"]}
      highlights={["Complete all-in package \u2014 quad ride PLUS hotel transfer", "1-seater ATV for solo riding independence and freedom", "60-minute adventure across iconic Al Badayer Red Dunes", "No transport logistics to arrange \u2014 door-to-door service", "Ideal for tourists without a car or rental", "AED 250 covers everything \u2014 no hidden charges"]}
      overview={["The Red Dunes Quad Tour with Shared Transfer (1-Seater) is the complete all-in package for solo adventurers. The price covers both your 60-minute quad bike ride AND shared hotel transfer \u2014 pickup and drop-off from your Dubai hotel.", "No logistics to arrange, no GPS navigation to figure out, no parking stress to worry about. The 1-seater configuration gives solo riders complete independence and the full solo adventure experience.", "The shared transfer vehicle ensures you arrive at the desert camp along with other guests, creating a social pre-ride atmosphere before the solo adventure begins. Perfect for hotel-based tourists who want a hassle-free desert experience."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Tourists Without Cars", "Hotel-Based Solo Travellers", "Convenience Seekers", "First-Time Visitors"]}
      faqs={[
        { q: "Where does pickup happen?", a: "From your Dubai hotel. Confirm exact pickup time when booking." }, { q: "How long is the transfer?", a: "Approximately 50\u201360 minutes from central Dubai to the Al Badayer Desert." }, { q: "Is the transfer private?", a: "It is a shared transfer with other tour guests. Private transfer is available at additional cost." }, { q: "What hotels do you cover?", a: "All major Dubai hotels \u2014 Marina, Downtown, JBR, Palm Jumeirah, Deira, Bur Dubai, etc." }, { q: "Can I extend the ride?", a: "Standard package is 60 minutes. Contact us on WhatsApp for extended packages." }
      ]}
      relatedTours={[
        { name: "Red Dunes Quad 2-Seater + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-2-seater", price: "AED 300", image: "/images/quad/red-dunes-quad-card.webp" },
        { name: "Yamaha Raptor + Transfer", href: "/quad-bike-dubai/yamaha-raptor-transfer", price: "AED 750", image: "/images/quad/yamaha-raptor-transfer-card.webp" },
        { name: "Afternoon Quad 1-Seater", href: "/quad-bike-dubai/afternoon-quad-1-seater", price: "AED 150", image: "/images/quad/afternoon-quad-card.webp" }
      ]}
    />
  );
}

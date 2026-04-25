import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Yamaha 700cc Raptor + Hotel Transfer Dubai | AED 750 | Premium",
  description: "Premium quad package \u2014 ride the legendary Yamaha 700cc Raptor across Dubai's red dunes with hotel transfer included. AED 750. Book WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/yamaha-raptor-transfer` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Yamaha 700cc Raptor + Shared Transfer"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="The premium complete package \u2014 ride the legendary Yamaha 700cc Raptor across Dubai's red dunes with hotel transfer included for ultimate convenience."
      price="AED 750"
      duration="60 Min + Transfer"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/yamaha-raptor-transfer-card.webp"
      galleryImages={["/images/quad/yamaha-raptor-transfer-card.webp", "/images/quad/yamaha-raptor-transfer-gallery-1.webp", "/images/quad/yamaha-raptor-transfer-gallery-2.webp", "/images/quad/yamaha-raptor-transfer-gallery-3.webp", "/images/quad/yamaha-raptor-transfer-gallery-4.webp", "/images/quad/yamaha-raptor-transfer-gallery-5.webp", "/images/quad/yamaha-raptor-transfer-gallery-6.webp", "/images/quad/yamaha-raptor-transfer-gallery-7.webp", "/images/quad/yamaha-raptor-transfer-gallery-8.webp"]}
      highlights={["Premium Yamaha 700cc Raptor with all logistics included", "Hotel pickup and drop-off from anywhere in Dubai", "The most powerful quad bike available for tours in Dubai", "60-minute adrenaline-packed desert adventure", "Perfect for serious sport ATV enthusiasts", "Door-to-door premium experience for AED 750"]}
      overview={["The Yamaha 700cc Raptor with Shared Transfer package is designed for guests who demand the best \u2014 the most powerful quad bike available in Dubai combined with fully managed hotel logistics. The Yamaha Raptor 700cc is a legendary off-road machine that delivers a riding experience in a completely different league from standard ATV rentals.", "The shared transfer service picks you up from your Dubai hotel and delivers you to the Al Badayer Desert camp, then returns you at tour completion. This eliminates every logistics challenge associated with visiting the desert independently.", "Combine the Raptor's race-grade performance with the convenience of door-to-door service, and you have the finest quad biking experience available anywhere in Dubai."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Premium Experience Seekers", "Sport ATV Enthusiasts", "Convenience Lovers", "Serious Riders"]}
      faqs={[
        { q: "What makes the Raptor special?", a: "Its 686cc parallel-twin engine, race-grade suspension, and aluminium frame deliver performance no other rental ATV can match." }, { q: "Is hotel transfer included?", a: "Yes \u2014 that is the difference between this and the standard Raptor package. AED 750 includes everything." }, { q: "Where do you pick up from?", a: "All major Dubai hotels \u2014 Marina, Downtown, JBR, Palm Jumeirah, Deira, Bur Dubai." }, { q: "Is this safe for beginners?", a: "The Raptor is powerful but our instructors set the pace. Beginners can absolutely enjoy it safely." }, { q: "Can I extend the ride?", a: "Standard 60 minutes. Custom extended packages available \u2014 contact us on WhatsApp." }
      ]}
      relatedTours={[
        { name: "Yamaha 700cc Raptor (No Transfer)", href: "/quad-bike-dubai/yamaha-700cc-raptor", price: "AED 500", image: "/images/quad/yamaha-raptor-card.webp" },
        { name: "Red Dunes Quad 1-Seater + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-1-seater", price: "AED 250", image: "/images/quad/red-dunes-quad-card.webp" },
        { name: "Can-Am Maverick R X RS", href: "/dune-buggy-dubai/can-am-maverick-r-x-rs-26", price: "AED 999", image: "/images/tours/canam-rxrs-card.webp" }
      ]}
    />
  );
}

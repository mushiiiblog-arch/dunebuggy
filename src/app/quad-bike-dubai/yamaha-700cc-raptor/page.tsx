import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Yamaha 700cc Raptor Quad Bike Dubai | AED 500 | 1-Seater",
  description: "Ride the legendary Yamaha 700cc Raptor sport ATV across Dubai's Al Badayer Red Dunes. 60-minute self-drive quad bike adventure for AED 500. Book on WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/yamaha-700cc-raptor` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Yamaha 700cc Raptor Quad Bike Tour"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Ride the legendary Yamaha 700cc Raptor \u2014 the most powerful sport ATV available for quad biking in Dubai's Al Badayer Desert."
      price="AED 500"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/yamaha-raptor-card.webp"
      galleryImages={["/images/quad/yamaha-raptor-card.webp", "/images/quad/yamaha-raptor-gallery-1.webp", "/images/quad/yamaha-raptor-gallery-2.webp", "/images/quad/yamaha-raptor-gallery-3.webp", "/images/quad/yamaha-raptor-gallery-4.webp", "/images/quad/yamaha-raptor-gallery-5.webp", "/images/quad/yamaha-raptor-gallery-6.webp", "/images/quad/yamaha-raptor-gallery-7.webp", "/images/quad/yamaha-raptor-gallery-8.webp"]}
      highlights={["Ride the iconic Yamaha 700cc Raptor \u2014 a legendary sport ATV used in professional desert racing", "686cc parallel-twin engine producing nearly 50 horsepower for extreme desert performance", "Independent double-wishbone suspension delivers maximum control on dune terrain", "60-minute self-drive adventure across the iconic Al Badayer Red Dunes", "Licensed instructor accompanies your group throughout the desert ride", "Helmet, goggles, and full safety gear included for every rider"]}
      overview={["The Yamaha 700cc Raptor is not just a quad bike \u2014 it is a purpose-built desert racing machine that has earned a legendary reputation across off-road motorsport worldwide. With a 686cc parallel-twin engine producing nearly 50 horsepower, independent double-wishbone suspension, and ultralight aluminium frame construction, the Raptor delivers a riding experience that is genuinely unlike anything else available in Dubai.", "Your 60-minute adventure takes you across the dramatic terrain of the Al Badayer Red Dunes \u2014 a landscape of towering crimson sand formations, open desert flats, and narrow ridgelines that challenge and reward in equal measure. Our expert guides set a pace appropriate for your skill level, whether you prefer a controlled exploration or a maximum-intensity desert blast.", "Complete safety equipment, professional guidance, and scenic photography stops are all included. This is the definitive quad bike Dubai experience for serious sport ATV enthusiasts."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Sport ATV Enthusiasts", "Experienced Riders", "Adrenaline Seekers", "Solo Adventurers", "Desert Racing Fans"]}
      faqs={[
        { q: "Do I need a driving licence?", a: "No. The Yamaha Raptor is operated with intuitive controls; our briefing prepares any beginner." }, { q: "Is this quad bike too powerful for beginners?", a: "Our instructors set the pace to match your comfort level. The Raptor is fast when you want, but easily managed at any speed." }, { q: "What is included in the AED 500 price?", a: "The 60-minute Yamaha Raptor ride, helmet, goggles, instructor, sandboarding, camel ride, water, and photo stops." }, { q: "Where does the tour depart from?", a: "All quad bike tours depart from our Al Badayer Desert camp. Hotel transfer is available as an add-on for AED 300." }, { q: "What is the cancellation policy?", a: "Free cancellation up to 24 hours before the tour. Weather cancellations are always rescheduled or fully refunded." }
      ]}
      relatedTours={[
        { name: "Yamaha Raptor + Transfer", href: "/quad-bike-dubai/yamaha-raptor-transfer", price: "AED 750", image: "/images/quad/yamaha-raptor-transfer-card.webp" },
        { name: "Afternoon Quad 1-Seater", href: "/quad-bike-dubai/afternoon-quad-1-seater", price: "AED 150", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Red Dunes Quad + Transfer", href: "/quad-bike-dubai/red-dunes-quad-transfer-1-seater", price: "AED 250", image: "/images/quad/red-dunes-quad-card.webp" }
      ]}
    />
  );
}

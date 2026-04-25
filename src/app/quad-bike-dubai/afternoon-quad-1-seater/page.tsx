import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Afternoon Quad Bike 1-Seater Dubai | AED 150 | Sunset ATV",
  description: "Solo afternoon quad biking with golden-hour sunset photography \u2014 most visually spectacular time to ride red dunes. AED 150. Book WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/afternoon-quad-1-seater` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Afternoon Quad Bike Tour (1-Seater)"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline="Solo afternoon quad biking with golden-hour sunset photography \u2014 the most visually spectacular time to ride the red dunes of Dubai."
      price="AED 150"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/afternoon-quad-card.webp"
      galleryImages={["/images/quad/afternoon-quad-card.webp", "/images/quad/afternoon-quad-gallery-1.webp", "/images/quad/afternoon-quad-gallery-2.webp", "/images/quad/afternoon-quad-gallery-3.webp", "/images/quad/afternoon-quad-gallery-4.webp", "/images/quad/afternoon-quad-gallery-5.webp", "/images/quad/afternoon-quad-gallery-6.webp", "/images/quad/afternoon-quad-gallery-7.webp", "/images/quad/afternoon-quad-gallery-8.webp"]}
      highlights={["Golden-hour sunset timing for extraordinary desert photography", "Solo 1-seater ATV \u2014 complete riding independence at your own pace", "Warm afternoon light paints red dunes in incredible amber tones", "60-minute desert adventure across the Al Badayer landscape", "Outstanding value at AED 150 per rider", "Licensed guide and complete safety gear included"]}
      overview={["The Afternoon 1-Seater Quad Bike Tour is specifically timed to coincide with Dubai's golden hour \u2014 the magical period between 4 PM and sunset when the red dunes glow with extraordinary warmth and colour. For photography enthusiasts and sunset lovers, this is the definitive quad biking experience.", "The slanting afternoon light creates dramatic shadows across the dune formations that simply do not exist at other times. Solo riders gain complete freedom on a 1-seater ATV, exploring the desert terrain at their own pace under the guidance of our licensed instructor.", "The Al Badayer region's varied landscape \u2014 from open flats perfect for speed to technical dune climbs and descents \u2014 ensures the 60-minute session is consistently engaging throughout. This is one of the most affordable legitimate desert adventures available in Dubai."]}
      inclusions={["Private Transfer (Optional)", "1-hour Quad Driving with Guide Assistance", "Self Drive Quad Bike", "Private Tour: No Other Customers", "Climate-Controlled Comfort Lounge", "Open area for exploration", "Experienced instructor", "Free sandboarding", "Free camel ride (5-10 mins)", "Free bottled water", "Memorable Stop For Photos", "Safety Gear: Helmet & Goggles"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age: 12 years for quad bike (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Latest Quad Fleet", desc: "Modern, well-maintained ATVs with certified safety equipment for every rider." }, { title: "Expert Local Guides", desc: "Licensed instructors who know every dune, ridge, and viewpoint in Al Badayer." }, { title: "No Advance Payment", desc: "Reserve via WhatsApp with no upfront payment. Pay cash or card at the desert camp." }, { title: "Full Safety Standards", desc: "Helmet, goggles, briefing, backup vehicle, and full insurance for every guest." }
      ]}
      perfectFor={["Photography Lovers", "Sunset Chasers", "Solo Riders", "Instagram Enthusiasts", "Adventure Seekers"]}
      faqs={[
        { q: "When does the tour start?", a: "Afternoon departure typically between 3:30\u20134:30 PM to maximise golden-hour light." }, { q: "Will I see the sunset?", a: "Yes \u2014 the route is timed so you experience the sun setting over the red dunes." }, { q: "Is it hot in the afternoon?", a: "The desert is warmer in the afternoon, but the dry heat is comfortable at speed. We provide water." }, { q: "Can I take photos while riding?", a: "Photo stops are scheduled. For safety, photography while riding is not permitted." }, { q: "What's the difference between this and the early bird?", a: "Same activity, different lighting \u2014 sunset vs sunrise. Both are fantastic in their own way." }
      ]}
      relatedTours={[
        { name: "Afternoon Quad 2-Seater", href: "/quad-bike-dubai/afternoon-quad-2-seater", price: "AED 200", image: "/images/quad/afternoon-quad-card.webp" },
        { name: "Early Bird Quad 1-Seater", href: "/quad-bike-dubai/early-bird-quad-1-seater", price: "AED 150", image: "/images/quad/early-bird-quad-card.webp" },
        { name: "Yamaha 700cc Raptor", href: "/quad-bike-dubai/yamaha-700cc-raptor", price: "AED 500", image: "/images/quad/yamaha-raptor-card.webp" }
      ]}
    />
  );
}

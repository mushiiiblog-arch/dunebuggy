import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Shared Evening Desert Safari Dubai | AED 150 | Best Value Safari",
  description: "Dubai's best-value evening desert safari \u2014 shared 4WD vehicle, dune bashing, camel ride, BBQ buffet dinner, live shows. AED 150 per person. WhatsApp.",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/shared-evening-safari` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Shared Evening Desert Safari Dubai"
      breadcrumbParent={{ label: "Desert Safari Dubai", href: "/desert-safari-dubai" }}
      tagline="Dubai's best-value evening desert safari \u2014 share a 4WD vehicle with fellow adventurers for a complete 6-hour Arabian desert experience at just AED 150 per person."
      price="AED 150"
      duration="6 Hours"
      seater="Sharing 4WD"
      persons="Per Person"
      difficulty="All Levels"
      heroImage="/images/safari/shared-evening-safari-card.webp"
      galleryImages={["/images/safari/shared-evening-safari-card.webp", "/images/safari/shared-evening-safari-gallery-1.webp", "/images/safari/shared-evening-safari-gallery-2.webp", "/images/safari/shared-evening-safari-gallery-3.webp", "/images/safari/shared-evening-safari-gallery-4.webp", "/images/safari/shared-evening-safari-gallery-5.webp", "/images/safari/shared-evening-safari-gallery-6.webp", "/images/safari/shared-evening-safari-gallery-7.webp"]}
      highlights={["Pickup at 14:30 from your Dubai hotel \u2014 no transport stress", "Thrilling Red Dune Bashing with professional 4WD driver (30 minutes)", "Camel ride at the desert camp (5\u201310 minutes, extendable)", "Sandboarding down towering crimson dune faces", "Henna Tattoo for ladies \u2014 authentic Arabian art", "BBQ Buffet Dinner with full vegetarian and non-vegetarian options", "Live entertainment: Fireshow, Tanoura, Belly Dancing, Yowla", "Shisha corner, complimentary water and soft drinks throughout"]}
      overview={["The Shared Evening Desert Safari is Dubai's most popular desert experience for good reason \u2014 it delivers everything the Arabian desert has to offer at a genuinely affordable price. Pickup at 14:30 from your hotel begins your evening of authentic Arabian adventure.", "Sharing a 4WD vehicle with a small group of fellow travellers, you embark on a 6-hour journey covering every highlight of the Dubai desert. The adventure begins with heart-pounding 30-minute red dune bashing as your expert driver tackles the towering Al Badayer Red Dunes at thrilling angles, with photo stops at the highest dune.", "At the desert camp, traditional Arabic welcome with coffee and dates greets you. Activities include camel riding, sandboarding, henna art for ladies, and shisha at the camp's corner area. The evening culminates with an Arabian BBQ buffet dinner and spectacular live performances \u2014 Fireshow, Tanoura whirling dance, Belly Dancing, and traditional Yowla."]}
      inclusions={["14:30 Pick up time", "Private Car 4WD", "Hotel Pickup and Drop-Off", "Air-conditioned vehicle for comfort", "Licensed Desert Guide", "Sand Boarding", "Red - Dune Bashing 30 minutes", "Drive to reaching the high Dune for photo stop", "Camel ride: 5-10 minutes, with option to extend freely.", "Henna Tattoo (For Ladies Only)", "Complimentary Water & Soft Drinks", "Shisha (In the corner)", "BBQ With Buffet Dinner", "Shows (Fireshow-Tanoura-Belly Dancing-Yowla)"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age requirement: 16 years for self-drive (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Authentic Arabian Experience", desc: "Genuine cultural authenticity from Bedouin-style hospitality to authentic food and entertainment." }, { title: "Best Value in Dubai", desc: "AED 150 covers transfer, dune bashing, camel ride, sandboarding, BBQ dinner, and shows \u2014 unbeatable price." }, { title: "Expert Desert Drivers", desc: "Licensed professionals with years of experience navigating Al Badayer terrain safely." }, { title: "All-Inclusive", desc: "Hotel transfer, all activities, dinner, and entertainment in one price. No hidden charges." }, { title: "Convenient Hotel Pickup", desc: "14:30 pickup from your Dubai hotel \u2014 no logistics, no parking, no GPS needed." }
      ]}
      perfectFor={["Budget Travellers", "Solo Adventurers", "First-Time Dubai Visitors", "Backpackers", "Groups", "Families"]}
      faqs={[
        { q: "What time is pickup?", a: "14:30 (2:30 PM) from your Dubai hotel." }, { q: "What time do we return?", a: "Approximately 21:30\u201322:00 (9:30\u201310:00 PM) \u2014 drop-off at your hotel." }, { q: "Is the BBQ vegetarian-friendly?", a: "Yes \u2014 full vegetarian and non-vegetarian buffet options." }, { q: "Are alcoholic drinks available?", a: "Soft drinks, water, and Arabic coffee included. Alcoholic beverages can be purchased separately at the camp." }, { q: "Is dune bashing safe?", a: "Yes \u2014 our drivers are licensed and the 4WD vehicles have full safety equipment. Pregnant women and those with serious health conditions should not participate." }, { q: "Can children join?", a: "Yes, families with children are very welcome. Dune bashing intensity is adjustable." }
      ]}
      relatedTours={[
        { name: "Private Evening Safari", href: "/desert-safari-dubai/private-evening-safari", price: "AED 800", image: "/images/safari/private-evening-safari-card.webp" },
        { name: "Shared Luxury Safari", href: "/desert-safari-dubai/shared-luxury-safari", price: "AED 200", image: "/images/safari/shared-luxury-safari-card.webp" },
        { name: "Desert Combo Safari + Quad", href: "/quad-bike-dubai/desert-combo-safari-quad", price: "AED 199", image: "/images/quad/desert-combo-quad-card.webp" }
      ]}
    />
  );
}

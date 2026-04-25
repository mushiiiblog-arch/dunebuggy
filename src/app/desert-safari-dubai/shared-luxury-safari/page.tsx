import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Shared Luxury Evening Desert Safari Dubai | AED 200 | Premium",
  description: "Enhanced shared desert safari with premium BBQ dinner, VIP seating, and superior service. AED 200 per person. Hotel pickup at 14:30. Book WhatsApp.",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/shared-luxury-safari` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Shared Luxury Evening Desert Safari"
      breadcrumbParent={{ label: "Desert Safari Dubai", href: "/desert-safari-dubai" }}
      tagline="Step up to luxury \u2014 an enhanced shared desert safari experience with premium BBQ dinner, VIP seating area, and superior service for just AED 200 per person."
      price="AED 200"
      duration="6 Hours"
      seater="Sharing 4WD"
      persons="Per Person"
      difficulty="All Levels"
      heroImage="/images/safari/shared-luxury-safari-card.webp"
      galleryImages={["/images/safari/shared-luxury-safari-card.webp", "/images/safari/shared-luxury-safari-gallery-1.webp", "/images/safari/shared-luxury-safari-gallery-2.webp", "/images/safari/shared-luxury-safari-gallery-3.webp", "/images/safari/shared-luxury-safari-gallery-4.webp", "/images/safari/shared-luxury-safari-gallery-5.webp", "/images/safari/shared-luxury-safari-gallery-6.webp", "/images/safari/shared-luxury-safari-gallery-7.webp"]}
      highlights={["Premium tier of shared desert safari \u2014 everything upgraded", "Pickup at 14:30 from your Dubai hotel", "Red dune bashing with high-dune photo stop", "Premium BBQ buffet with extended menu", "VIP seating area at the desert camp", "Camel ride, sandboarding, and henna tattoo for ladies", "Live shows: Fireshow, Tanoura, Belly Dancing, Yowla", "Priority service throughout the evening"]}
      overview={["The Shared Luxury Evening Safari is the premium tier of shared desert experience \u2014 everything in the standard evening safari, upgraded. The difference lies in the details: a higher-quality BBQ dinner with additional dishes and premium cuts, a dedicated VIP seating section within the desert camp, priority service, and enhanced entertainment options.", "For guests who want a superior experience without the full cost of a private booking, the Luxury Shared package strikes the ideal balance. You still benefit from meeting fellow travellers and enjoying the social atmosphere of a shared desert camp, while experiencing noticeably better food, service, and seating compared to the standard package.", "At AED 200 per person, it represents exceptional value for the upgraded experience. The 14:30 hotel pickup, 30-minute dune bashing, traditional camp activities, and full evening of cultural entertainment are all included."]}
      inclusions={["14:30 Pick up time", "Private Car 4WD", "Hotel Pickup and Drop-Off", "Air-conditioned vehicle for comfort", "Licensed Desert Guide", "Sand Boarding", "Red - Dune Bashing 30 minutes", "Drive to reaching the high Dune for photo stop", "Camel ride: 5-10 minutes, with option to extend freely.", "Henna Tattoo (For Ladies Only)", "Complimentary Water & Soft Drinks", "Shisha (In the corner)", "BBQ With Buffet Dinner", "Shows (Fireshow-Tanoura-Belly Dancing-Yowla)"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age requirement: 16 years for self-drive (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Upgraded Dining", desc: "Premium BBQ buffet menu \u2014 more dishes, better cuts, finer presentation than the standard package." }, { title: "VIP Seating Area", desc: "Reserved section at the camp gives you a better view of shows and quieter dining environment." }, { title: "Priority Service", desc: "Faster service for food, drinks, and activity queues." }, { title: "Same Great Activities", desc: "All the dune bashing, camel rides, sandboarding, and shows of the standard package." }, { title: "Better Value Than Private", desc: "Get the luxury feel at a fraction of the private safari price." }
      ]}
      perfectFor={["Luxury Seekers", "Couples", "Friends Groups", "Foodies", "Value-Luxury Seekers"]}
      faqs={[
        { q: "What's different from the AED 150 package?", a: "Upgraded BBQ menu, VIP seating area, priority service. Same core activities." }, { q: "Is the pickup the same time?", a: "Yes \u2014 14:30 from your Dubai hotel." }, { q: "Can I add private transfer?", a: "Yes \u2014 private transfer available at additional cost." }, { q: "Is there an age limit?", a: "Children very welcome. No upper age limit." }, { q: "Can I swap to private?", a: "Yes \u2014 contact us on WhatsApp to upgrade to the private luxury safari (AED 1,300 family)." }
      ]}
      relatedTours={[
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/safari/shared-evening-safari-card.webp" },
        { name: "Private Luxury Safari", href: "/desert-safari-dubai/private-luxury-safari", price: "AED 1,300", image: "/images/safari/private-luxury-safari-card.webp" },
        { name: "Private Evening Safari", href: "/desert-safari-dubai/private-evening-safari", price: "AED 800", image: "/images/safari/private-evening-safari-card.webp" }
      ]}
    />
  );
}

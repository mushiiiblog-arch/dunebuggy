import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Private Luxury Evening Desert Safari Dubai | AED 1,300 | VIP",
  description: "The ultimate Dubai desert experience \u2014 fully private luxury safari with dedicated 4WD, personal guide, gourmet dinner, and exclusive VIP treatment. AED 1,300.",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/private-luxury-safari` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Private Luxury Evening Desert Safari"
      breadcrumbParent={{ label: "Desert Safari Dubai", href: "/desert-safari-dubai" }}
      tagline="The ultimate Dubai desert experience \u2014 a fully private luxury safari with dedicated vehicle, personal guide, gourmet dinner, and exclusive VIP treatment for your family."
      price="AED 1,300"
      duration="6 Hours"
      seater="Private 4WD"
      persons="Family (1-5)"
      difficulty="All Levels"
      heroImage="/images/safari/private-luxury-safari-card.webp"
      galleryImages={["/images/safari/private-luxury-safari-card.webp", "/images/safari/private-luxury-safari-gallery-1.webp", "/images/safari/private-luxury-safari-gallery-2.webp", "/images/safari/private-luxury-safari-gallery-3.webp", "/images/safari/private-luxury-safari-gallery-4.webp", "/images/safari/private-luxury-safari-gallery-5.webp", "/images/safari/private-luxury-safari-gallery-6.webp"]}
      highlights={["Dedicated private 4WD vehicle exclusively for your group", "14:30 pickup from your Dubai hotel \u2014 VIP service", "Personal desert guide throughout the experience", "VIP private 30-minute dune bashing session", "Gourmet Arabian BBQ dinner \u2014 premium menu", "Exclusive private dining area at the camp", "Camel ride, sandboarding, henna art for ladies", "Premium entertainment access: Fireshow, Tanoura, Belly Dance, Yowla"]}
      overview={["The Private Luxury Evening Desert Safari is the finest desert safari product available in Dubai. This is not just a tour \u2014 it is an immersive VIP desert experience designed for guests who accept nothing but the best. From the moment your private 4WD vehicle arrives at your hotel at 14:30 to the final moments of the cultural show under the stars, every detail is curated for maximum luxury and exclusivity.", "Your private guide provides a deeply personal experience \u2014 sharing stories of Bedouin culture, identifying desert flora and fauna, and ensuring every family member has their individual needs met throughout the evening. The gourmet dinner exceeds anything available in the standard packages, featuring premium grilled specialties, live cooking stations, and a wide selection of international and Arabian dishes.", "AED 1,300 covers up to 5 persons \u2014 exceptional value when calculated per person for the highest-tier desert experience in Dubai."]}
      inclusions={["14:30 Pick up time", "Private Car 4WD", "Hotel Pickup and Drop-Off", "Air-conditioned vehicle for comfort", "Licensed Desert Guide", "Sand Boarding", "Red - Dune Bashing 30 minutes", "Drive to reaching the high Dune for photo stop", "Camel ride: 5-10 minutes, with option to extend freely.", "Henna Tattoo (For Ladies Only)", "Complimentary Water & Soft Drinks", "Shisha (In the corner)", "BBQ With Buffet Dinner", "Shows (Fireshow-Tanoura-Belly Dancing-Yowla)"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age requirement: 16 years for self-drive (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Highest-Tier Experience", desc: "Dubai's best desert safari product \u2014 nothing more luxurious available." }, { title: "Private Everything", desc: "Private 4WD, private guide, private dining area, private dune bashing." }, { title: "Gourmet Dining", desc: "Premium Arabian BBQ menu with live cooking stations \u2014 restaurant-quality." }, { title: "Personal Guide", desc: "Dedicated guide shares insights, takes photos, customises your experience." }, { title: "Up to 5 People", desc: "AED 260 per person when fully shared \u2014 luxury for the family." }
      ]}
      perfectFor={["VIP Guests", "Special Celebrations", "Luxury Families", "Corporate Executives", "Anniversary Trips"]}
      faqs={[
        { q: "How is this different from the AED 800 private safari?", a: "Gourmet menu (vs standard buffet), private dining area (vs general camp), and personal guide (vs driver only)." }, { q: "Is dietary customisation available?", a: "Yes \u2014 please specify dietary requirements when booking. Halal, vegetarian, gluten-free all accommodated." }, { q: "Can we extend the tour?", a: "Yes \u2014 additional time and activities available. Please discuss when booking." }, { q: "Is wedding/birthday decoration available?", a: "Yes \u2014 special occasion setup available at additional cost. Tell us when booking." }, { q: "What time do we return?", a: "Approximately 21:30\u201322:00, but private bookings have flexibility on timing." }
      ]}
      relatedTours={[
        { name: "Private Evening Safari", href: "/desert-safari-dubai/private-evening-safari", price: "AED 800", image: "/images/safari/private-evening-safari-card.webp" },
        { name: "Shared Luxury Safari", href: "/desert-safari-dubai/shared-luxury-safari", price: "AED 200", image: "/images/safari/shared-luxury-safari-card.webp" },
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/safari/shared-evening-safari-card.webp" }
      ]}
    />
  );
}

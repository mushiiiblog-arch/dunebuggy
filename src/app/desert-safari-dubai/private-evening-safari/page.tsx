import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Private Evening Desert Safari Dubai | AED 800 | Family Package",
  description: "Exclusive private desert safari for families \u2014 your own dedicated 4WD vehicle, personal guide, and complete freedom. AED 800 per family (1-5 persons).",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/private-evening-safari` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Private Evening Desert Safari Dubai"
      breadcrumbParent={{ label: "Desert Safari Dubai", href: "/desert-safari-dubai" }}
      tagline="An exclusive private desert safari for families and groups \u2014 your own dedicated 4WD vehicle, personal guide, and complete freedom to enjoy the Dubai desert at your own pace."
      price="AED 800"
      duration="6 Hours"
      seater="Private 4WD"
      persons="Family (1-5)"
      difficulty="All Levels"
      heroImage="/images/safari/private-evening-safari-card.webp"
      galleryImages={["/images/safari/private-evening-safari-card.webp", "/images/safari/private-evening-safari-gallery-1.webp", "/images/safari/private-evening-safari-gallery-2.webp", "/images/safari/private-evening-safari-gallery-3.webp", "/images/safari/private-evening-safari-gallery-4.webp", "/images/safari/private-evening-safari-gallery-5.webp", "/images/safari/private-evening-safari-gallery-6.webp"]}
      highlights={["Dedicated private 4WD vehicle exclusively for your family", "Pickup at 14:30 from your Dubai hotel \u2014 direct to camp", "Private 30-minute red dune bashing experience", "Camel ride, sandboarding, and henna tattoo (for ladies)", "BBQ Buffet Dinner with vegetarian options", "Live shows: Fireshow, Tanoura, Belly Dancing, Yowla", "Shisha corner and complimentary refreshments", "Total flexibility on timing and pace"]}
      overview={["The Private Evening Desert Safari offers everything the shared package provides, but with total exclusivity. Your family or group has its own dedicated 4WD vehicle, your own driver, and complete freedom to set the pace of every activity.", "No waiting for other guests, no sharing photo spots, no compromising on timing \u2014 this is your desert adventure, designed entirely around you. Particularly valuable for families with young children, guests with accessibility needs, or groups who simply prefer the intimacy of a private experience.", "Your dedicated driver can adjust the intensity of dune bashing to suit your preferences, linger at particularly beautiful spots for longer photography sessions, and ensure every family member has an experience tailored to their enjoyment. AED 800 covers up to 5 persons \u2014 outstanding value for a fully private safari."]}
      inclusions={["14:30 Pick up time", "Private Car 4WD", "Hotel Pickup and Drop-Off", "Air-conditioned vehicle for comfort", "Licensed Desert Guide", "Sand Boarding", "Red - Dune Bashing 30 minutes", "Drive to reaching the high Dune for photo stop", "Camel ride: 5-10 minutes, with option to extend freely.", "Henna Tattoo (For Ladies Only)", "Complimentary Water & Soft Drinks", "Shisha (In the corner)", "BBQ With Buffet Dinner", "Shows (Fireshow-Tanoura-Belly Dancing-Yowla)"]}
      exclusions={["Personal expenses and souvenirs", "Alcoholic beverages", "Gratuities (optional)", "Travel insurance"]}
      importantInfo={["Minimum age requirement: 16 years for self-drive (passengers any age with adult).", "Not recommended for pregnant women or guests with serious back/heart conditions.", "Closed-toe shoes are mandatory.", "Confirm hotel pickup details when booking via WhatsApp.", "Free cancellation up to 24 hours before the tour.", "Tours operate in most weather conditions; severe weather may result in free reschedule."]}
      whyChoose={[
        { title: "Total Privacy", desc: "Your own 4WD, your own driver, your own pace \u2014 no sharing with strangers." }, { title: "Family-Friendly", desc: "Perfect for families with kids \u2014 intensity adjustable, schedule flexible." }, { title: "AED 800 for 5 People", desc: "Just AED 160 per person when fully shared \u2014 better value than 5 separate shared bookings." }, { title: "Personal Guide", desc: "Your driver shares insights about Bedouin culture, wildlife, and local landmarks." }, { title: "Unlimited Flexibility", desc: "Stay longer at viewpoints, swap activities, customise your day." }
      ]}
      perfectFor={["Families with Children", "Private Groups", "Honeymoons", "Special Celebrations", "Accessibility Needs"]}
      faqs={[
        { q: "How many people for AED 800?", a: "Up to 5 persons \u2014 that is the family/group maximum for the private vehicle." }, { q: "What time is pickup?", a: "14:30 from your hotel, direct to the desert camp." }, { q: "Can we stay longer at the camp?", a: "Yes \u2014 your private driver gives you flexibility on timing within the 6-hour window." }, { q: "Is the BBQ included?", a: "Yes \u2014 full Arabian BBQ buffet with vegetarian options is included." }, { q: "What about accessibility?", a: "We can accommodate special needs in private 4WDs \u2014 please tell us on booking." }
      ]}
      relatedTours={[
        { name: "Shared Evening Safari", href: "/desert-safari-dubai/shared-evening-safari", price: "AED 150", image: "/images/safari/shared-evening-safari-card.webp" },
        { name: "Private Luxury Safari", href: "/desert-safari-dubai/private-luxury-safari", price: "AED 1,300", image: "/images/safari/private-luxury-safari-card.webp" },
        { name: "Shared Luxury Safari", href: "/desert-safari-dubai/shared-luxury-safari", price: "AED 200", image: "/images/safari/shared-luxury-safari-card.webp" }
      ]}
    />
  );
}

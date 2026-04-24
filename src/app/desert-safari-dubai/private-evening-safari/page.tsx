import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: "Private Evening Desert Safari Dubai | Desert Safari Dubai | Buggy Dubai Rental",
  description: "An exclusive private desert safari for families and groups — your own dedicated 4WD vehicle, personal guide, and complete freedom to enjoy the Dubai desert at your own pace. Book via WhatsApp today.",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/private-evening-safari` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Private Evening Desert Safari Dubai"
      breadcrumbParent={{ label: 'Desert Safari Dubai', href: '/desert-safari-dubai' }}
      tagline="An exclusive private desert safari for families and groups — your own dedicated 4WD vehicle, personal guide, and complete freedom to enjoy the Dubai desert at your own pace."
      price="AED 800 per family (1-5 persons)"
      duration="6 Hours"
      seater="Private 4WD"
      persons="Family (1-5 persons)"
      difficulty="All Levels"
      heroImage="/images/gallery/safari-2.webp"
      galleryImages={['/images/gallery/safari-2.webp', '/images/gallery/safari-1.webp', '/images/gallery/safari-3.webp', '/images/gallery/safari-4.webp', '/images/gallery/gallery-4.webp']}
      highlights={[
        'Thrilling 4x4 dune bashing across the towering Al Badayer Red Dunes of Dubai',
        'Traditional camel ride through the golden desert landscape',
        'Sandboarding down massive dune faces with equipment provided',
        'Authentic Arabian BBQ buffet dinner with vegetarian and non-vegetarian options',
        'Live cultural entertainment: Tanoura dance, belly dancing, and fire show',
        'Traditional Arabic welcome with coffee, dates, and henna art',
      ]}
      overview={[
        'The Private Evening Desert Safari offers everything the shared package provides, but with total exclusivity. Your family or group has its own dedicated 4WD vehicle, your own driver, and complete freedom to set the pace of every activity. No waiting for other guests, no sharing photo spots, no compromising on timing — this is your desert adventure, designed entirely around you.',
        'The private format is particularly valuable for families with young children, guests with accessibility needs, or groups who simply prefer the intimacy of a private experience. Your dedicated driver can adjust the intensity of dune bashing to suit your preferences, linger at particularly beautiful spots for longer photography sessions, and ensure every family member has an experience tailored to their enjoyment.',
        "Every guest at Buggy Dubai Rental's desert safaris receives personal attention from our experienced team. Safety, enjoyment, and cultural authenticity are the three pillars of every experience we deliver. For guests interested in combining a desert safari with self-drive adventure, explore our dune buggy tours and quad bike packages (links available in the sidebar).",
      ]}
      inclusions={['Private dedicated 4WD vehicle and driver', '6-hour exclusive desert experience', 'Dune bashing at preferred intensity', 'Camel ride', 'Sandboarding', 'Henna art', 'Arabic coffee and dates', 'Arabian BBQ dinner', 'Live cultural shows (Tanoura, belly dance, fire)', 'Complimentary refreshments', 'Return to meeting point']}
      exclusions={['Hotel pickup (available AED 300 per person)', 'Alcoholic beverages', 'Personal expenses']}
      importantInfo={[
        'Tours operate rain or shine — extreme weather may result in free reschedule.',
        'Not suitable for pregnant women or guests with serious back/heart conditions.',
        'Vegetarian and dietary options available for the BBQ dinner — inform us when booking.',
        'Minimum group size of 2 persons for most packages.',
        'Photography encouraged — the desert provides extraordinary photo opportunities.',
      ]}
      whyChoose={[
        { title: 'Authentic Arabian Experience', desc: 'Our safaris are carefully designed to deliver genuine cultural authenticity alongside desert adventure. From traditional Bedouin-style hospitality to authentic food and entertainment, this is the real Dubai desert.' },
        { title: 'Expert Desert Drivers', desc: 'Our 4x4 dune bashing drivers are fully licensed professionals with years of experience navigating the Al Badayer terrain safely and thrillingly.' },
        { title: 'Complete Evening Package', desc: 'Everything is included in a single price — dune bashing, camel ride, sandboarding, dinner, and entertainment. No hidden charges, no surprise extras.' },
        { title: 'No Advance Payment', desc: 'Book your safari on WhatsApp with no upfront payment. Pay cash or card at the camp before your experience begins.' },
      ]}
      perfectFor={['Families', 'Couples', 'Friends Groups', 'Corporate Events', 'First-Time Dubai Visitors', 'Honeymoons', 'Birthday Celebrations', 'Cultural Enthusiasts']}
      faqs={[
        { q: 'What time does the evening safari start?', a: 'Evening safaris typically depart around 3:30–4:00 PM and conclude around 9:30–10:00 PM. Exact times vary by season and are confirmed on booking.' },
        { q: 'Is the BBQ dinner included?', a: 'Yes — a full Arabian BBQ buffet dinner is included in the price. Vegetarian and non-vegetarian options are available.' },
        { q: 'How far is the desert from Dubai?', a: 'The Al Badayer Desert is approximately 50 km from Dubai city centre — around 50–60 minutes by road.' },
        { q: 'Is this suitable for children?', a: 'Yes — families with children are very welcome. Dune bashing intensity can be adjusted for younger passengers. Children under 12 must be supervised by an adult.' },
        { q: 'What should I wear?', a: 'Comfortable, casual clothing. Closed-toe shoes recommended. Light jacket for the cool desert evening. Modest dress is respectful in the cultural entertainment area.' },
        { q: 'Is hotel pickup available?', a: 'Shared hotel transfer is available for AED 300 per person from anywhere in Dubai. Confirm when booking.' },
      ]}
      relatedTours={[
        { name: 'Shared Evening Safari', href: '/desert-safari-dubai/shared-evening-safari', price: 'AED 150', image: '/images/gallery/safari-1.webp' },
        { name: 'Private Luxury Safari', href: '/desert-safari-dubai/private-luxury-safari', price: 'AED 1,300', image: '/images/gallery/safari-3.webp' },
        { name: 'Early Morning Private Safari', href: 'early-morning-private-safari', price: 'AED 699', image: '/images/tours/early-bird-card.webp' },
      ]}
      partnerAnchor="private desert safari Dubai"
    />
  );
}

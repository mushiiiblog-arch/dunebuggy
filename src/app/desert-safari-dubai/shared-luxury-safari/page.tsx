import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: "Shared Luxury Evening Safari Dubai | Desert Safari Dubai | Buggy Dubai Rental",
  description: "Step up to luxury — an enhanced shared desert safari experience with premium BBQ dinner, VIP seating area, and superior service for just AED 200 per person. Book via WhatsApp today.",
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/shared-luxury-safari` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Shared Luxury Evening Safari Dubai"
      breadcrumbParent={{ label: 'Desert Safari Dubai', href: '/desert-safari-dubai' }}
      tagline="Step up to luxury — an enhanced shared desert safari experience with premium BBQ dinner, VIP seating area, and superior service for just AED 200 per person."
      price="AED 200 per person"
      duration="6 Hours"
      seater="Sharing 4WD"
      persons="Person"
      difficulty="All Levels"
      heroImage="/images/gallery/safari-3.webp"
      galleryImages={['/images/gallery/safari-3.webp', '/images/gallery/safari-1.webp', '/images/gallery/safari-2.webp', '/images/gallery/safari-4.webp', '/images/gallery/gallery-5.webp']}
      highlights={[
        'Thrilling 4x4 dune bashing across the towering Al Badayer Red Dunes of Dubai',
        'Traditional camel ride through the golden desert landscape',
        'Sandboarding down massive dune faces with equipment provided',
        'Authentic Arabian BBQ buffet dinner with vegetarian and non-vegetarian options',
        'Live cultural entertainment: Tanoura dance, belly dancing, and fire show',
        'Traditional Arabic welcome with coffee, dates, and henna art',
      ]}
      overview={[
        'The Shared Luxury Evening Safari is the premium tier of shared desert experience — everything in the standard evening safari, upgraded. The difference lies in the details: a higher-quality BBQ dinner with additional dishes and premium cuts, a dedicated VIP seating section within the desert camp, priority service, and enhanced entertainment options.',
        'For guests who want a superior experience without the full cost of a private booking, the Luxury Shared package strikes the ideal balance. You still benefit from meeting fellow travellers and enjoying the social atmosphere of a shared desert camp, while experiencing noticeably better food, service, and seating compared to the standard package. At AED 200 per person, it represents exceptional value.',
        "Every guest at Buggy Dubai Rental's desert safaris receives personal attention from our experienced team. Safety, enjoyment, and cultural authenticity are the three pillars of every experience we deliver. For guests interested in combining a desert safari with self-drive adventure, explore our dune buggy tours and quad bike packages (links available in the sidebar).",
      ]}
      inclusions={['Shared 4WD dune bashing', 'Camel ride', 'Sandboarding', 'Henna art', 'Premium Arabian BBQ buffet (extended menu)', 'VIP seating area at the desert camp', 'Priority service throughout', 'Live cultural performances', 'Arabic coffee and dates', 'Complimentary refreshments', 'Return to meeting point']}
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
        { name: 'Private Evening Safari', href: 'private-evening-safari', price: 'AED 800', image: '/images/gallery/safari-2.webp' },
      ]}
      partnerAnchor="luxury desert safari Dubai"
    />
  );
}

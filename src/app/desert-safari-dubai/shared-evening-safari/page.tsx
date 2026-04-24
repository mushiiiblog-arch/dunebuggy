import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Shared Evening Desert Safari Dubai | Desert Safari Dubai | Buggy Dubai Rental',
  description: 'Dubai's best-value evening desert safari — share a 4WD vehicle with fellow adventurers for a complete 6-hour Arabian desert experience at just AED 150 per person. Book via WhatsApp today.',
  alternates: { canonical: `${SITE.url}/desert-safari-dubai/shared-evening-safari` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Shared Evening Desert Safari Dubai"
      breadcrumbParent={{ label: 'Desert Safari Dubai', href: '/desert-safari-dubai' }}
      tagline="Dubai's best-value evening desert safari — share a 4WD vehicle with fellow adventurers for a complete 6-hour Arabian desert experience at just AED 150 per person."
      price="AED 150 per person"
      duration="6 Hours"
      seater="Sharing 4WD"
      persons="Person"
      difficulty="All Levels"
      heroImage="/images/gallery/safari-1.webp"
      galleryImages={['/images/gallery/safari-1.webp', '/images/gallery/safari-2.webp', '/images/gallery/safari-3.webp', '/images/gallery/safari-4.webp', '/images/gallery/gallery-4.webp']}
      highlights={[
        'Thrilling 4x4 dune bashing across the towering Al Badayer Red Dunes of Dubai',
        'Traditional camel ride through the golden desert landscape',
        'Sandboarding down massive dune faces with equipment provided',
        'Authentic Arabian BBQ buffet dinner with vegetarian and non-vegetarian options',
        'Live cultural entertainment: Tanoura dance, belly dancing, and fire show',
        'Traditional Arabic welcome with coffee, dates, and henna art',
      ]}
      overview={[
        'The Shared Evening Desert Safari is the most popular desert experience in Dubai for good reason — it delivers everything the Arabian desert has to offer at a genuinely affordable price. Sharing a 4WD vehicle with a small group of fellow travellers, you embark on a 6-hour journey that covers every highlight of the Dubai desert experience.',
        'The adventure begins with heart-pounding 4x4 dune bashing as your expert driver tackles the towering Al Badayer Red Dunes at thrilling angles. This is followed by a traditional desert camp welcome with Arabic coffee and dates, camel riding through the golden landscape, sandboarding, henna art, and a spectacular Arabian BBQ buffet dinner. The evening concludes with live cultural performances — Tanoura whirling dance, belly dancing, and a mesmerising fire show under a blanket of desert stars.',
        'Every guest at Buggy Dubai Rental's desert safaris receives personal attention from our experienced team. Safety, enjoyment, and cultural authenticity are the three pillars of every experience we deliver. For guests interested in combining a desert safari with self-drive adventure, explore our <a href="/dune-buggy-dubai" style={color: "#e8611a"}>dune buggy tours</a> and <a href="/quad-bike-dubai" style={color: "#e8611a"}>quad bike packages</a>.',
      ]}
      inclusions={['Shared 4WD dune bashing session', 'Camel ride at the desert camp', 'Sandboarding (equipment provided)', 'Henna art for guests', 'Traditional Arabic coffee and dates welcome', 'Arabian BBQ buffet dinner (vegetarian and non-vegetarian)', 'Tanoura dance, belly dancing, and fire show', 'Complimentary water and soft drinks', 'Return transport back to Dubai (drop-off at meeting point)']}
      exclusions={['Hotel pickup (available AED 300 per person)', 'Alcoholic beverages', 'Personal expenses', 'Shisha (available to purchase)', 'Professional photography (optional add-on)']}
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
        { name: 'Private Evening Safari', href: '/desert-safari-dubai/private-evening-safari', price: 'AED 800', image: '/images/gallery/safari-2.webp' },
        { name: 'Shared Luxury Safari', href: '/desert-safari-dubai/shared-luxury-safari', price: 'AED 200', image: '/images/gallery/safari-3.webp' },
        { name: 'Desert Combo Safari + Quad', href: 'desert-combo-safari', price: 'AED 199', image: '/images/quad/desert-combo-quad-card.webp' },
      ]}
      partnerAnchor="desert safari Dubai"
    />
  );
}

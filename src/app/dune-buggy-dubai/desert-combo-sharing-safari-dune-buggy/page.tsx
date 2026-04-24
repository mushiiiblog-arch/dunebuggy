import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: "Desert Combo Safari + Dune Buggy Dubai | AED 399 | Best Value Package",
  description: "Best value Dubai desert combo — sharing evening safari PLUS 30-min self-drive dune buggy ride. AED 399 per person. BBQ dinner, shows, camel ride included.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/desert-combo-sharing-safari-dune-buggy` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Desert Combo: Sharing Safari + Dune Buggy"
      breadcrumbParent={{ label: 'Dune Buggy Dubai', href: '/dune-buggy-dubai' }}
      tagline="The ultimate Dubai desert value package — combine a full 6-hour evening safari with a 30-minute self-drive dune buggy ride, all for just AED 399 per person."
      price="AED 399"
      duration="6 Hours (30-Min Buggy Ride)"
      seater="2-Seater Buggy"
      persons="1 Person"
      difficulty="Beginner Friendly"
      heroImage="/images/tours/desert-combo-card.webp"
      galleryImages={['/images/tours/desert-combo-card.webp','/images/tours/desert-combo-gallery-1.webp','/images/tours/desert-combo-gallery-2.webp','/images/tours/desert-combo-gallery-3.webp','/images/tours/desert-combo-gallery-4.webp']}
      highlights={[
        'The best-value combination package in Dubai — full evening safari PLUS dune buggy ride for AED 399',
        'Experience both a thrilling self-drive dune buggy ride and a complete desert safari in a single booking',
        'Shared 4WD vehicle for the desert safari portion — ideal for solo travellers and budget-conscious guests',
        'Evening safari includes dune bashing, camel ride, sandboarding, henna art, BBQ dinner, and live shows',
        '30-minute self-drive buggy ride across the iconic Al Badayer red dunes',
        'Perfect introduction to Dubai\'s desert for first-time visitors',
      ]}
      overview={[
        'The Desert Combo package is designed for guests who want to experience the full range of Dubai desert adventures without breaking the bank. By combining a sharing evening desert safari with a self-drive dune buggy ride into a single booking, you get two completely different desert experiences for one exceptional price.',
        'The evening begins with a thrilling 4x4 dune bashing session — your driver tackles the towering red dunes at exciting angles while guests experience the classic Dubai desert safari thrill. This is followed by a camel ride, sandboarding, henna art, and a traditional Arabic welcome with dates and coffee at the desert camp.',
        'The highlight is your personal dune buggy adventure — a 30-minute self-drive session in a 2-seater buggy, where you take full control and navigate the desert terrain at your own pace. The evening concludes with a magnificent Arabian BBQ dinner and live cultural entertainment including Tanoura dancing, belly dancing, and a fire show under the stars.',
      ]}
      inclusions={[
        '30-minute self-drive dune buggy ride (2-seater)',
        'Shared 4WD vehicle for evening safari dune bashing',
        'Camel ride at the desert camp',
        'Sandboarding session',
        'Henna art for ladies',
        'Traditional Arabic coffee and dates welcome',
        'Arabian BBQ buffet dinner',
        'Tanoura dance, belly dancing, and fire show',
        'Certified helmet and goggles for buggy ride',
        'Licensed desert guide',
        'Complimentary water and soft drinks',
      ]}
      exclusions={[
        'Hotel pickup (available for AED 300 per person)',
        'Alcoholic beverages',
        'Personal expenses',
        'Shisha (available to purchase at camp)',
      ]}
      importantInfo={[
        'Price is per person sharing the safari vehicle.',
        'Buggy ride is 30 minutes — for 60-minute buggy rides, see our other packages.',
        'Minimum driver age for buggy: 16 years.',
        'BBQ dinner is vegetarian and non-vegetarian options available.',
        'Evening safari duration is approximately 6 hours including all activities.',
      ]}
      whyChoose={[
        { title: 'Unbeatable Value', desc: 'At AED 399 per person, this combo package gives you more desert experience per dirham than any other tour in Dubai. You get both a dune buggy ride and a complete safari evening.' },
        { title: 'Two Experiences in One', desc: 'The safari and buggy ride complement each other perfectly — the safari gives you the cultural and culinary experience of Arabia while the buggy ride delivers pure adrenaline.' },
        { title: 'Perfect First Desert Experience', desc: 'For visitors to Dubai who have never experienced the desert before, this combo provides the ideal introduction — broad enough to cover all the highlights in a single unforgettable evening.' },
        { title: 'Ideal for Solo Travellers', desc: 'The shared safari vehicle means solo travellers meet other guests and enjoy the experience in a social atmosphere rather than alone.' },
      ]}
      perfectFor={['Solo Travellers', 'Budget Travellers', 'First-Time Dubai Visitors', 'Backpackers', 'Those Who Want Everything', 'Groups on Different Budgets']}
      faqs={[
        { q: 'Is the 30-minute buggy ride enough?', a: 'For most guests, especially first-timers, 30 minutes is a fantastic introduction to self-drive desert buggying. If you want more, our 60-minute packages are available separately.' },
        { q: 'How many people share the safari vehicle?', a: 'The safari vehicle typically carries 4–6 passengers depending on the 4WD model used. You may share with other guests who booked the same departure.' },
        { q: 'Is there vegetarian food at the BBQ dinner?', a: 'Yes — the Arabian BBQ buffet includes a full selection of vegetarian dishes, salads, bread, rice, and desserts alongside grilled meats.' },
        { q: 'What time does this tour start and end?', a: 'The evening safari typically starts around 3:30–4:00 PM and concludes around 9:30–10:00 PM. Exact times vary by season and are confirmed on booking.' },
      ]}
      relatedTours={[
        { name: 'Early Bird Buggy Tour', href: '/dune-buggy-dubai/early-bird-buggy-tour', price: 'AED 500', image: '/images/tours/early-bird-card.webp' },
        { name: 'Shared Evening Safari', href: '/desert-safari-dubai/shared-evening-safari', price: 'AED 150', image: '/images/gallery/safari-1.webp' },
        { name: 'Can-Am Maverick XRS 26', href: '/dune-buggy-dubai/can-am-maverick-xrs-26', price: 'AED 800', image: '/images/tours/canam-xrs-card.webp' },
      ]}
      partnerAnchor="dune buggy tour"
    />
  );
}

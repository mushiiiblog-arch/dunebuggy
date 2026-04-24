import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Desert Combo: Sharing Safari + Quad Bike | Quad Bike Dubai | Buggy Dubai Rental',
  description: 'Dubai's best-value desert combo — a full 6-hour evening safari including dune bashing and BBQ dinner PLUS a 60-minute quad bike ride, all for AED 199. AED 199. Safety gear included. Book via WhatsApp.',
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/desert-combo-safari-quad` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Desert Combo: Sharing Safari + Quad Bike"
      breadcrumbParent={{ label: 'Quad Bike Dubai', href: '/quad-bike-dubai' }}
      tagline="Dubai's best-value desert combo — a full 6-hour evening safari including dune bashing and BBQ dinner PLUS a 60-minute quad bike ride, all for AED 199."
      price="AED 199"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/desert-combo-quad-card.webp"
      galleryImages={['/images/quad/desert-combo-quad-gallery-1.webp', '/images/quad/desert-combo-quad-gallery-2.webp', '/images/quad/desert-combo-quad-gallery-3.webp', '/images/quad/desert-combo-quad-gallery-4.webp']}
      highlights={[
        'Self-drive a high-performance quad bike across the iconic Al Badayer Red Dunes of Dubai',
        '1-Seater ATV configuration — 1 Person adventure across the crimson desert landscape',
        'Yamaha and specialist ATVs with automatic or semi-automatic transmission for all skill levels',
        'Licensed desert guides lead small groups ensuring maximum safety and excitement',
        'Includes refreshments and scenic photo stops at panoramic desert viewpoints',
        'Easy WhatsApp booking with no advance payment — pay at the desert camp',
      ]}
      overview={[
        'The Desert Combo Safari and Quad package represents extraordinary value — two completely different desert experiences bundled into one evening for a single price. The evening safari portion covers all the classic Dubai desert experiences: thrilling 4x4 dune bashing with a professional driver, a traditional camel ride, sandboarding, henna painting, Arabic coffee and dates, BBQ dinner, and a spectacular cultural show.',
        'The quad bike component adds a personal adventure dimension that sets this package apart from a standard safari. You take control of a 1-seater quad bike and self-navigate a 60-minute desert route under the guidance of our licensed instructor. For solo travellers and budget-conscious guests who want to experience everything Dubai's desert has to offer, this is the definitive package.',
        'As with all our tours, the experience extends beyond just the ride. Complimentary refreshments at the desert camp, scenic photography stops across the most photogenic dune formations in the Al Badayer region, and the guidance of experienced desert professionals ensure your quad bike adventure is a complete experience from start to finish.',
      ]}
      inclusions={[
        '60-minute quad bike ride',
        'Certified helmet and goggles',
        'Licensed desert guide',
        'Safety briefing and vehicle orientation',
        'Complimentary water and soft drinks',
        'Scenic photo stops',
        'Backup safety vehicle',
        'Full insurance coverage',
      ]}
      exclusions={[
        'Hotel pickup (available for AED 300 per person)',
        'BBQ dinner (optional add-on)',
        'Personal expenses',
        'Professional photography (optional add-on)',
      ]}
      importantInfo={[
        'Minimum rider age: 16 years.',
        'Not suitable for pregnant women or those with serious back or heart conditions.',
        'Closed-toe shoes are mandatory.',
        'Arrive 15 minutes before departure.',
        'Tours operate in most weather conditions — severe weather may result in free reschedule.',
      ]}
      whyChoose={[
        { title: 'Authentic Desert Experience', desc: 'The Al Badayer Red Dunes offer one of the most spectacular desert landscapes in the world. Our carefully planned routes showcase the very best of this iconic terrain.' },
        { title: 'Professional Safety Standards', desc: 'All equipment is certified, all guides are licensed and first-aid trained, and every tour includes a backup safety vehicle. Your safety is our absolute priority.' },
        { title: 'No Advance Payment', desc: 'Reserve your slot with a WhatsApp message. Zero payment upfront — pay cash or card at the desert camp before the tour starts.' },
        { title: 'Flexible Booking', desc: 'Morning, afternoon, and evening departures available. Change your booking up to 24 hours before with no penalty.' },
      ]}
      perfectFor={['Solo Riders', 'Couples', 'Friend Groups', 'Adventure Seekers', 'Photography Enthusiasts', 'Dubai Visitors', 'UAE Residents']}
      faqs={[
        { q: 'Do I need experience to ride a quad bike?', a: 'No prior experience is needed. Our ATVs are easy to operate and our guides provide thorough instruction before the tour begins.' },
        { q: 'What should I wear?', a: 'Comfortable, casual clothing and closed-toe shoes (mandatory). Sunglasses and sunscreen recommended. Light jacket for cooler departures.' },
        { q: 'How do I get to the desert?', a: 'Shared hotel transfer available for AED 300 per person. Or drive yourself — we send GPS coordinates on booking confirmation.' },
        { q: 'Can I bring a camera?', a: 'Yes — cameras and GoPros are welcome. Ensure all devices are securely mounted before riding. Multiple photo stops included.' },
        { q: 'What is the cancellation policy?', a: 'Free cancellation up to 24 hours before the tour. Weather cancellations are always rescheduled or fully refunded.' },
      ]}
      relatedTours={[
        { name: 'Early Bird Quad 1-Seater', href: '/quad-bike-dubai/early-bird-quad-1-seater', price: 'AED 150', image: '/images/quad/early-bird-quad-card.webp' },
        { name: 'Yamaha 700cc Raptor', href: '/quad-bike-dubai/yamaha-700cc-raptor', price: 'AED 500', image: '/images/quad/yamaha-raptor-card.webp' },
        { name: 'Shared Evening Safari', href: '/desert-safari-dubai/shared-evening-safari', price: 'AED 150', image: '/images/gallery/safari-1.webp' },
      ]}
      partnerAnchor="quad bike Dubai tour"
    />
  );
}

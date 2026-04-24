import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Red Dunes Quad Tour + Shared Transfer (2-Seater) | Quad Bike Dubai | Buggy Dubai Rental',
  description: 'The complete couple or friends quad package — 2-seater quad ride plus hotel pickup and drop-off from anywhere in Dubai included. AED 300. Safety gear included. Book via WhatsApp.',
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/red-dunes-quad-transfer-2-seater` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Red Dunes Quad Tour + Shared Transfer (2-Seater)"
      breadcrumbParent={{ label: 'Quad Bike Dubai', href: '/quad-bike-dubai' }}
      tagline="The complete couple or friends quad package — 2-seater quad ride plus hotel pickup and drop-off from anywhere in Dubai included."
      price="AED 300"
      duration="60 Minutes"
      seater="2-Seater"
      persons="2 Persons"
      difficulty="All Levels"
      heroImage="/images/quad/red-dunes-quad-card.webp"
      galleryImages={['/images/quad/red-dunes-quad-gallery-1.webp', '/images/quad/red-dunes-quad-gallery-2.webp', '/images/quad/red-dunes-quad-gallery-3.webp']}
      highlights={[
        'Self-drive a high-performance quad bike across the iconic Al Badayer Red Dunes of Dubai',
        '2-Seater ATV configuration — 2 Persons adventure across the crimson desert landscape',
        'Yamaha and specialist ATVs with automatic or semi-automatic transmission for all skill levels',
        'Licensed desert guides lead small groups ensuring maximum safety and excitement',
        'Includes refreshments and scenic photo stops at panoramic desert viewpoints',
        'Easy WhatsApp booking with no advance payment — pay at the desert camp',
      ]}
      overview={[
        'The Red Dunes Quad Tour with Shared Transfer (2-Seater) is the ultimate hassle-free desert adventure for couples and friends. For AED 300 — just AED 150 per person — you get hotel pickup and drop-off plus a 60-minute shared 2-seater quad bike ride across the spectacular Al Badayer Red Dunes. Everything is arranged; all you need to do is be ready at your hotel at the scheduled time.',
        'Riding together on a 2-seater ATV creates shared memories that solo experiences simply cannot replicate. One person drives while the other acts as co-pilot and photographer — then switch at rest stops for a fully shared experience. The desert scenery, the physical sensation of riding across dunes, and the achievement of conquering challenging terrain together makes this one of the most memorable couple activities available in all of Dubai.',
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
        { name: 'Red Dunes Quad + Transfer 1-Seater', href: '/quad-bike-dubai/red-dunes-quad-transfer-1-seater', price: 'AED 250', image: '/images/quad/red-dunes-quad-card.webp' },
        { name: 'Afternoon Quad 2-Seater', href: '/quad-bike-dubai/afternoon-quad-2-seater', price: 'AED 200', image: '/images/quad/afternoon-quad-card.webp' },
        { name: 'Yamaha Raptor + Transfer', href: '/quad-bike-dubai/yamaha-raptor-transfer', price: 'AED 750', image: '/images/yamaha-raptor-transfer-card.webp' },
      ]}
      partnerAnchor="desert adventure Dubai"
    />
  );
}

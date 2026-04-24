import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: "Early Bird Quad Bike Tour (1-Seater) | Quad Bike Dubai | Buggy Dubai Rental",
  description: "The most affordable quad bike experience in Dubai — a solo sunrise ride across the red dunes in cool morning temperatures for just AED 150. AED 150. Safety gear included. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/early-bird-quad-1-seater` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Early Bird Quad Bike Tour (1-Seater)"
      breadcrumbParent={{ label: 'Quad Bike Dubai', href: '/quad-bike-dubai' }}
      tagline="The most affordable quad bike experience in Dubai — a solo sunrise ride across the red dunes in cool morning temperatures for just AED 150."
      price="AED 150"
      duration="60 Minutes"
      seater="1-Seater"
      persons="1 Person"
      difficulty="All Levels"
      heroImage="/images/quad/early-bird-quad-card.webp"
      galleryImages={['/images/quad/early-bird-quad-gallery-1.webp', '/images/quad/early-bird-quad-gallery-2.webp', '/images/quad/early-bird-quad-gallery-3.webp']}
      highlights={[
        'Self-drive a high-performance quad bike across the iconic Al Badayer Red Dunes of Dubai',
        '1-Seater ATV configuration — 1 Person adventure across the crimson desert landscape',
        'Yamaha and specialist ATVs with automatic or semi-automatic transmission for all skill levels',
        'Licensed desert guides lead small groups ensuring maximum safety and excitement',
        'Includes refreshments and scenic photo stops at panoramic desert viewpoints',
        'Easy WhatsApp booking with no advance payment — pay at the desert camp',
      ]}
      overview={[
        'The Early Bird 1-Seater Quad Bike Tour is the perfect option for solo adventurers and budget-conscious guests who want genuine desert excitement without a large price tag. Departing at sunrise or early morning, this tour benefits from the most comfortable riding temperatures of the day — typically 10–15 degrees cooler than afternoon sessions.',
        'At just AED 150 per person, this is one of the most affordable legitimate desert adventures available in Dubai. The early morning light also creates extraordinary photography conditions — the low-angle sun illuminates the red dunes with warm golden tones that are simply impossible to recreate at other times of day. An absolute bargain for the experience it delivers.',
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
        { name: 'Early Bird Quad 2-Seater', href: '/quad-bike-dubai/early-bird-quad-2-seater', price: 'AED 200', image: '/images/quad/early-bird-quad-card.webp' },
        { name: 'Afternoon Quad 1-Seater', href: '/quad-bike-dubai/afternoon-quad-1-seater', price: 'AED 150', image: '/images/quad/afternoon-quad-card.webp' },
        { name: 'Desert Combo Safari + Quad', href: '/quad-bike-dubai/desert-combo-safari-quad', price: 'AED 199', image: '/images/desert-combo-quad-card.webp' },
      ]}
      partnerAnchor="quad bike ride Dubai"
    />
  );
}

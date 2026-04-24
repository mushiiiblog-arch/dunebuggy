import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: "Yamaha 700cc Raptor Quad Bike Dubai | Quad Bike Dubai | Buggy Dubai Rental",
  description: "Ride the legendary Yamaha 700cc Raptor — the most powerful sport ATV available for quad biking in Dubai's Al Badayer Desert. AED 500. Safety gear included. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/yamaha-700cc-raptor` },
};
export default function Page() {
  return (
    <TourPageLayout
      name=\"Yamaha 700cc Raptor Quad Bike Dubai\"
      breadcrumbParent={{ label: "Quad Bike Dubai", href: "/quad-bike-dubai" }}
      tagline=\"Ride the legendary Yamaha 700cc Raptor — the most powerful sport ATV available for quad biking in Dubai's Al Badayer Desert.\"
      price=\"AED 500\"
      duration=\"60 Minutes\"
      seater=\"1-Seater\"
      persons=\"1 Person\"
      difficulty=\"All Levels\"
      heroImage=\"/images/quad/yamaha-raptor-card.webp\"
      galleryImages={["/images/quad/yamaha-raptor-gallery-1.webp', '/images/quad/yamaha-raptor-gallery-2.webp', '/images/quad/yamaha-raptor-gallery-3.webp', '/images/quad/yamaha-raptor-gallery-4.webp']}
      highlights={[
        'Self-drive a high-performance quad bike across the iconic Al Badayer Red Dunes of Dubai',
        '1-Seater ATV configuration — 1 Person adventure across the crimson desert landscape',
        'Yamaha and specialist ATVs with automatic or semi-automatic transmission for all skill levels',
        'Licensed desert guides lead small groups ensuring maximum safety and excitement',
        'Includes refreshments and scenic photo stops at panoramic desert viewpoints',
        'Easy WhatsApp booking with no advance payment — pay at the desert camp',
      ]}
      overview={[
        'The Yamaha 700cc Raptor is not just a quad bike — it is a purpose-built desert racing machine that has earned a legendary reputation across off-road motorsport worldwide. With a 686cc parallel-twin engine producing nearly 50 horsepower, independent double-wishbone suspension, and ultralight aluminium frame construction, the Raptor delivers a riding experience that is genuinely unlike anything else available in Dubai.',
        'Your 60-minute adventure takes you across the dramatic terrain of the Al Badayer Red Dunes — a landscape of towering crimson sand formations, open desert flats, and narrow ridgelines that challenge and reward in equal measure. Our expert guides set a pace appropriate for your skill level, whether you prefer a controlled exploration or a maximum-intensity desert blast.',
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
        { name: 'Yamaha Raptor + Transfer', href: '/quad-bike-dubai/yamaha-raptor-transfer', price: 'AED 750', image: '/images/quad/yamaha-raptor-transfer-card.webp' },
        { name: 'Afternoon Quad 1-Seater', href: '/quad-bike-dubai/afternoon-quad-1-seater', price: 'AED 150', image: '/images/quad/afternoon-quad-card.webp' },
        { name: 'Red Dunes Quad + Transfer', href: '/quad-bike-dubai/red-dunes-quad-transfer-1-seater', price: 'AED 250', image: '/images/red-dunes-quad-card.webp' },
      ]}
      partnerAnchor="desert quad bike tour"
    />
  );
}

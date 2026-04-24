import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Yamaha 700cc Raptor + Shared Transfer | Quad Bike Dubai | Buggy Dubai Rental",
  description: \"The premium complete package — ride the legendary Yamaha 700cc Raptor across Dubai's red dunes with hotel transfer included for ultimate convenience. AED 750. Safety gear included. Book via WhatsApp.\",,
  alternates: { canonical: `${SITE.url}/quad-bike-dubai/yamaha-raptor-transfer` },
};
export default function Page() {
  return (
    <TourPageLayout
      name=\"Yamaha 700cc Raptor + Shared Transfer\"
      breadcrumbParent={{ label: "Quad Bike Dubai', href: '/quad-bike-dubai" }}
      tagline=\"The premium complete package — ride the legendary Yamaha 700cc Raptor across Dubai's red dunes with hotel transfer included for ultimate convenience.\"
      price=\"AED 750\"
      duration=\"60 Minutes\"
      seater=\"1-Seater\"
      persons=\"1 Person\"
      difficulty=\"All Levels\"
      heroImage=\"/images/quad/yamaha-raptor-transfer-card.webp\"
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
        'The Yamaha 700cc Raptor with Shared Transfer package is designed for guests who demand the best — the most powerful quad bike available in Dubai combined with fully managed hotel logistics. The Yamaha Raptor 700cc is a legendary off-road machine that delivers a riding experience in a completely different league from standard ATV rentals.',
        'The shared transfer service picks you up from your Dubai hotel and delivers you to the Al Badayer Desert camp, then returns you at tour completion. This eliminates every logistics challenge associated with visiting the desert independently. Combine the Raptor's performance with the convenience of door-to-door service, and you have the finest quad biking experience in Dubai.',
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
        { name: 'Yamaha 700cc Raptor (No Transfer)', href: '/quad-bike-dubai/yamaha-700cc-raptor', price: 'AED 500', image: '/images/quad/yamaha-raptor-card.webp' },
        { name: 'Red Dunes Quad + Transfer 1-Seater', href: '/quad-bike-dubai/red-dunes-quad-transfer-1-seater', price: 'AED 250', image: '/images/quad/red-dunes-quad-card.webp' },
        { name: 'Can-Am Maverick R X RS', href: '/dune-buggy-dubai/can-am-maverick-r-x-rs-26', price: 'AED 999', image: '/images/tours/canam-rxrs-card.webp' },
      ]}
      partnerAnchor="premium desert tour Dubai"
    />
  );
}

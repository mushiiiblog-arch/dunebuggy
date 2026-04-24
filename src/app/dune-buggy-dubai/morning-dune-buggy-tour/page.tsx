import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Morning Dune Buggy Tour Dubai | Dune Buggy Dubai | Buggy Dubai Rental",
  description: \"Beat the desert heat with a sunrise buggy adventure — the coolest and most serene way to experience Dubai's red dunes. AED 450. All safety gear included. Book via WhatsApp.\",,
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/morning-dune-buggy-tour` },
};
export default function Page() {
  return (
    <TourPageLayout
      name=\"Morning Dune Buggy Tour Dubai\"
      breadcrumbParent={{ label: "Dune Buggy Dubai', href: '/dune-buggy-dubai" }}
      tagline=\"Beat the desert heat with a sunrise buggy adventure — the coolest and most serene way to experience Dubai's red dunes.\"
      price=\"AED 450\"
      duration=\"60 Minutes\"
      seater=\"1, 2 & 4 Seater\"
      persons=\"1–4 Persons\"
      difficulty=\"All Levels\"
      heroImage=\"/images/tours/early-bird-card.webp\"
      galleryImages={["/images/tours/early-bird-card.webp','/images/tours/early-bird-gallery-1.webp','/images/tours/early-bird-gallery-2.webp','/images/tours/early-bird-gallery-3.webp','/images/tours/early-bird-gallery-4.webp']}
      highlights={[
        'Self-drive a high-performance dune buggy across the iconic Al Badayer Red Dunes of Dubai',
        'Available in 1-seater, 2-seater, and 4-seater configurations for any group size',
        'Automatic transmission — no driving licence required, suitable for complete beginners',
        'Professional licensed guides ensure maximum safety and maximum enjoyment',
        'Includes sandboarding, camel ride, refreshments, and scenic photography stops',
        'Easy WhatsApp booking with no advance payment — pay at the desert camp',
      ]}
      overview={[
        'Morning Dune Buggy Tour Dubai offers one of the most exciting self-drive desert adventures available in Dubai. Whether you are visiting for the first time or are a seasoned UAE adventurer, our buggy tours across the Al Badayer Red Dunes deliver an experience that is simultaneously accessible and unforgettable.',
        'Our fleet of high-performance dune buggies features automatic transmission and intuitive controls, meaning no prior off-road driving experience is required. After a comprehensive safety briefing by our licensed desert guides, you take the wheel and explore the crimson dunes at your own pace — with your guide leading the way and ensuring every guest has the experience of a lifetime.',
        'The tour concludes with traditional Arabian desert activities at the camp. Sandboarding down pristine dune faces, riding a camel through the golden landscape, and enjoying refreshments with spectacular desert views — this is Dubai\'s desert adventure at its finest.',
      ]}
      inclusions={[
        '60-minute self-drive dune buggy ride',
        'Certified helmet and protective goggles',
        'Licensed desert guide',
        'Full safety briefing and vehicle orientation',
        'Sandboarding equipment and instruction',
        'Camel ride',
        'Complimentary water and refreshments',
        'Photo stops at panoramic desert viewpoints',
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
        'Minimum driver age: 16 years.',
        'No driving licence required.',
        'Not recommended for pregnant women or guests with serious back/heart conditions.',
        'Closed-toe shoes are mandatory.',
        'Comfortable, casual clothing recommended.',
      ]}
      whyChoose={[
        { title: 'No Advance Payment', desc: 'Reserve your slot on WhatsApp with zero payment upfront. Simply confirm your date and pay at the camp — cash or card accepted.' },
        { title: 'Latest Fleet', desc: 'All vehicles are recent-model, professionally maintained dune buggies with certified safety equipment. Your adventure starts in a top-condition machine.' },
        { title: 'Expert Guides', desc: 'Our desert guides are licensed, first-aid certified, and intimately familiar with every route across the Al Badayer Desert. You are in expert hands.' },
        { title: 'Flexible Departures', desc: 'Morning, afternoon, and evening departures available to suit any schedule. Each time of day offers a completely different desert atmosphere.' },
      ]}
      perfectFor={['Solo Riders', 'Couples', 'Groups', 'First-Time Visitors', 'Adventure Seekers', 'Photography Enthusiasts']}
      faqs={[
        { q: 'Do I need experience to drive a dune buggy?', a: 'No experience is needed. Our buggies have automatic transmission and our guides provide thorough instruction before departure.' },
        { q: 'Is hotel pickup included?', a: 'Hotel pickup is available as an add-on for AED 300 per person from anywhere in Dubai. Or drive yourself using the coordinates we send on confirmation.' },
        { q: 'Can I bring a camera?', a: 'Yes — cameras and GoPros are welcome. Secure them before the ride. Multiple photo stops are included in every tour.' },
        { q: 'What is the cancellation policy?', a: 'Free cancellation up to 24 hours before your tour. Cancellations within 24 hours may incur a fee. Weather cancellations are always fully refunded or rescheduled.' },
      ]}
      relatedTours={[
        { name: "Can-Am Maverick R X RS '26", href: '/dune-buggy-dubai/can-am-maverick-r-x-rs-26', price: 'AED 999', image: '/images/tours/canam-rxrs-card.webp' },
        { name: 'Can-Am Maverick XRS 26', href: '/dune-buggy-dubai/can-am-maverick-xrs-26', price: 'AED 800', image: '/images/tours/canam-xrs-card.webp' },
        { name: 'Desert Combo Safari + Buggy', href: '/dune-buggy-dubai/desert-combo-sharing-safari-dune-buggy', price: 'AED 399', image: '/images/tours/desert-combo-card.webp' },
      ]}
      partnerAnchor="buggy ride Dubai"
    />
  );
}

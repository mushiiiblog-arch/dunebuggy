import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Can-Am Maverick XRS 26 Dune Buggy Dubai | AED 800 | Buggy Dubai Rental',
  description: 'Self-drive the Can-Am Maverick XRS 26 across Dubai red dunes. 2-4 seater, 60 min, AED 800. Perfect for couples and groups. Book via WhatsApp today.',
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/can-am-maverick-xrs-26` },
};

export default function Page() {
  return (
    <TourPageLayout
      name="Can-Am Maverick XRS 26 Dune Buggy Tour"
      breadcrumbParent={{ label: 'Dune Buggy Dubai', href: '/dune-buggy-dubai' }}
      tagline="Agility meets power — the Can-Am Maverick XRS 26 is the perfect dune buggy for couples and groups who want big thrills at great value."
      price="AED 800"
      duration="60 Minutes"
      seater="2–4 Seater"
      persons="2–4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/canam-xrs-card.webp"
      galleryImages={[
        '/images/tours/canam-xrs-card.webp',
        '/images/tours/canam-xrs-gallery-1.webp',
        '/images/tours/canam-xrs-gallery-2.webp',
        '/images/tours/canam-xrs-gallery-3.webp',
        '/images/tours/canam-xrs-gallery-4.webp',
        '/images/tours/canam-xrs-gallery-5.webp',
      ]}
      highlights={[
        'Self-drive the 2026 Can-Am Maverick XRS — a high-performance sport buggy built for desert terrain',
        'Available in 2-seater and 4-seater configurations, ideal for couples and small groups',
        '1000cc+ turbocharged engine with advanced sport suspension for maximum desert performance',
        'Explore Dubai\'s Al Badayer Red Dunes — towering crimson dunes up to 100 metres tall',
        'Comprehensive safety briefing makes this tour perfect for riders of all experience levels',
        'Includes sandboarding, camel ride, refreshments, and professional photo stops',
      ]}
      overview={[
        'The Can-Am Maverick XRS 26 strikes the ideal balance between raw performance and accessible adventure. With a turbocharged 1000cc+ engine and sport-tuned suspension, this buggy is built to devour dunes — yet its automatic transmission and intuitive controls mean first-time drivers feel confident from the very first minute.',
        'Your 60-minute self-drive experience takes you deep into the Al Badayer Desert, one of the most visually spectacular landscapes in the entire Arabian Peninsula. Known locally as the Red Dunes of Lahbab, this region features vivid crimson sand formations sculpted by centuries of desert winds. Your guide leads a small convoy through open valleys, up steep dune faces, and along ridge-tops offering breathtaking 360-degree views.',
        'After the buggy ride, your desert experience continues with sandboarding down the dunes, a traditional camel ride, and refreshments at the desert camp. This tour offers outstanding value for couples, friends, and small groups looking for an authentic Dubai desert buggy experience.',
      ]}
      inclusions={[
        '60-minute self-drive Can-Am Maverick XRS 26 buggy ride',
        'Certified helmet and goggles for all riders',
        'Licensed, experienced desert guide',
        'Full safety and vehicle operation briefing',
        'Sandboarding (board and instruction included)',
        'Traditional camel ride at the camp',
        'Complimentary water and soft drinks',
        'Panoramic photo stops across the red dunes',
        'Backup safety vehicle',
        'Full insurance coverage for all participants',
      ]}
      exclusions={[
        'Hotel pickup/drop-off (available for AED 300 per person)',
        'BBQ dinner (optional add-on)',
        'Personal expenses',
        'Professional photography (optional add-on)',
      ]}
      importantInfo={[
        'Minimum driver age: 16 years. Passengers of all ages welcome.',
        'No driving licence required — automatic transmission.',
        'Not suitable for pregnant women or those with back, neck, or heart conditions.',
        'Closed-toe shoes are mandatory for all riders.',
        'Tours depart morning, afternoon, and evening. Confirm preferred time when booking.',
        'Pick-up available from all major Dubai areas for AED 300.',
      ]}
      whyChoose={[
        { title: 'Outstanding Value for Groups', desc: 'At AED 800 per buggy for up to 4 people, the Can-Am Maverick XRS 26 offers some of the best value dune buggy riding in Dubai. Split the cost and each person enjoys a world-class desert adventure.' },
        { title: 'Sport-Performance Handling', desc: 'The XRS model features sport-tuned suspension and a more aggressive power delivery than entry-level buggies, giving experienced riders genuine excitement without overwhelming beginners.' },
        { title: 'Flexible Group Sizes', desc: 'Whether it is a couple seeking romance in the desert or a group of four friends on holiday, the 2-seater and 4-seater configurations ensure everyone rides together.' },
        { title: 'Expert Local Guides', desc: 'Our certified desert guides know every dune, ridge, and viewpoint in the Al Badayer region. They tailor the experience to your skill level and ensure maximum enjoyment.' },
      ]}
      perfectFor={['Couples', 'Friend Groups (4)', 'Beginners', 'Intermediate Riders', 'Budget-Conscious Adventurers', 'Photography Enthusiasts', 'Holiday Visitors', 'UAE Residents']}
      faqs={[
        { q: 'What is the difference between the Maverick XRS and R X RS?', a: 'The R X RS is the flagship model with Smart-Shox semi-active suspension and slightly higher performance. The XRS is a sport model with fixed suspension — still extremely capable and exciting, at a better price point.' },
        { q: 'Can I book one buggy for 4 people?', a: 'Yes. The 4-seater configuration accommodates four adults comfortably. The driver steers while passengers enjoy the ride. All four share the AED 800 price per buggy.' },
        { q: 'Is the route the same for all tours?', a: 'The main route covers the iconic red dunes of Al Badayer. Guides adjust the difficulty based on the group\'s experience — beginners get smoother terrain while experienced riders tackle steeper dunes.' },
        { q: 'How do I pay?', a: 'No advance payment needed. Book your slot on WhatsApp, and pay by cash or card when you arrive at the desert camp before the tour.' },
        { q: 'Can I bring my phone to take videos?', a: 'Absolutely — phones and cameras are welcome. Mount them securely before riding. Our guides identify the best photo locations throughout the route.' },
      ]}
      relatedTours={[
        { name: "Can-Am Maverick R X RS '26", href: '/dune-buggy-dubai/can-am-maverick-r-x-rs-26', price: 'AED 999', image: '/images/tours/canam-rxrs-card.webp' },
        { name: 'Stage 4 Stunner: RZR PRO R', href: '/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate', price: 'AED 1,499', image: '/images/tours/stage4-stunner-card.webp' },
        { name: 'Red Dunes Afternoon Buggies', href: '/dune-buggy-dubai/red-dunes-afternoon-buggies', price: 'AED 500', image: '/images/tours/red-dunes-card.webp' },
      ]}
      partnerAnchor="buggy ride Dubai"
    />
  );
}

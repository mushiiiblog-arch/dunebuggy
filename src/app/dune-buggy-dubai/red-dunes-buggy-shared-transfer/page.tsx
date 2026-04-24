import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: "Red Dunes Buggy Ride + Shared Transfer Dubai | AED 750 | Buggy Dubai Rental",
  description: "Complete dune buggy package with hotel transfer included. 60-min self-drive across red dunes plus pickup from your Dubai hotel. AED 750. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/red-dunes-buggy-shared-transfer` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Red Dunes Buggy Ride + Shared Transfer"
      breadcrumbParent={{ label: 'Dune Buggy Dubai', href: '/dune-buggy-dubai' }}
      tagline="Complete hassle-free package — 60-minute self-drive dune buggy ride across the Red Dunes with hotel pickup and drop-off from anywhere in Dubai included."
      price="AED 750"
      duration="60 Minutes + Transfer"
      seater="1, 2 & 4 Seater"
      persons="1–4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/red-dunes-card.webp"
      galleryImages={['/images/tours/red-dunes-card.webp','/images/tours/red-dunes-gallery-1.webp','/images/tours/red-dunes-gallery-2.webp','/images/tours/red-dunes-gallery-3.webp','/images/tours/red-dunes-gallery-4.webp']}
      highlights={[
        'Complete all-in-one package — buggy ride plus shared hotel transfer from anywhere in Dubai',
        'No need to arrange your own transport — we pick you up from your hotel and drop you back',
        '60-minute self-drive dune buggy ride across the iconic Al Badayer Red Dunes',
        'Available in 1-seater, 2-seater, and 4-seater configurations',
        'Includes sandboarding, camel ride, refreshments, and desert photo stops',
        'Ideal for tourists without a car or those unfamiliar with the desert location',
      ]}
      overview={[
        'The Red Dunes Buggy Ride with Shared Transfer package is designed for guests who want a completely seamless desert adventure from start to finish. No rental car, no GPS confusion, no parking worries — our shared transfer vehicle picks you up directly from your Dubai hotel and returns you safely at the end of the evening.',
        'The shared transfer departs from centrally located pickup points across Dubai including the Marina, Downtown, Palm Jumeirah, Deira, Bur Dubai, and JBR areas. The journey to the Al Badayer Desert takes approximately 50–60 minutes and is a great opportunity to chat with fellow adventurers who are equally excited for what lies ahead.',
        'Once at the desert camp, your 60-minute self-drive buggy adventure begins — navigating the dramatic red dunes in your chosen buggy configuration. After the ride, enjoy the full desert camp experience: sandboarding, camel riding, photo sessions, and refreshments before the return transfer to your hotel.',
      ]}
      inclusions={[
        '60-minute self-drive dune buggy ride',
        'Shared hotel transfer (pickup and drop-off)',
        'Certified helmet and goggles',
        'Licensed desert guide',
        'Sandboarding',
        'Camel ride',
        'Complimentary refreshments',
        'Photo stops',
        'Full insurance',
      ]}
      exclusions={[
        'BBQ dinner (optional add-on)',
        'Personal expenses',
        'Private transfer (available at additional cost)',
      ]}
      importantInfo={[
        'Shared transfer departs from fixed pickup points — exact location confirmed on booking.',
        'Minimum driver age: 16 years.',
        'Please be at the pickup point 10 minutes before the scheduled departure.',
        'Transfer covers major Dubai areas including Marina, Downtown, Palm Jumeirah, Deira, JBR.',
      ]}
      whyChoose={[
        { title: 'Truly Hassle-Free', desc: 'From hotel lobby to desert dunes to hotel lobby — we handle all logistics. This is the most convenient way to experience dune bugging in Dubai.' },
        { title: 'Great Value All-In Package', desc: 'The AED 750 price includes both the buggy ride and return transfer — saving you the cost and effort of arranging your own transport to the desert.' },
        { title: 'Meet Fellow Adventurers', desc: 'The shared transfer is a social experience — you arrive at the desert camp already excited alongside other guests who share your sense of adventure.' },
        { title: 'No Desert Navigation Needed', desc: 'The Al Badayer Desert is 50km from Dubai city. Without GPS knowledge and an off-road capable vehicle, reaching it alone can be tricky. We solve that completely.' },
      ]}
      perfectFor={['Tourists Without Cars', 'Hotel-Based Visitors', 'Solo Travellers', 'Couples', 'Groups of 4', 'Those Wanting Hassle-Free Experience']}
      faqs={[
        { q: 'Where exactly is the pickup point?', a: 'We confirm the exact pickup location when you book via WhatsApp. Pickup points cover all major Dubai areas — Marina, Downtown, JBR, Palm Jumeirah, Deira, Bur Dubai.' },
        { q: 'What if I miss the transfer?', a: 'Please be at the pickup point 10 minutes early. If you miss the vehicle, contact us immediately and we will do our best to arrange alternative transport, though this may incur additional cost.' },
        { q: 'Can I book private transfer instead?', a: 'Yes — private transfer is available at additional cost. Contact us on WhatsApp for pricing and availability.' },
        { q: 'How long is the transfer journey?', a: 'The journey from central Dubai to the Al Badayer Desert is approximately 50–60 minutes depending on traffic and your pickup location.' },
      ]}
      relatedTours={[
        { name: 'Red Dunes Afternoon Buggies', href: '/dune-buggy-dubai/red-dunes-afternoon-buggies', price: 'AED 500', image: '/images/tours/red-dunes-card.webp' },
        { name: 'Early Bird Buggy Tour', href: '/dune-buggy-dubai/early-bird-buggy-tour', price: 'AED 500', image: '/images/tours/early-bird-card.webp' },
        { name: 'Can-Am Maverick XRS 26', href: '/dune-buggy-dubai/can-am-maverick-xrs-26', price: 'AED 800', image: '/images/tours/canam-xrs-card.webp' },
      ]}
      partnerAnchor="buggy ride Dubai"
    />
  );
}

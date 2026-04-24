import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: "Red Dunes Afternoon Buggies | Dune Buggy Dubai | Buggy Dubai Rental",
  description: "Chase the golden hour across Dubai's crimson red dunes with dramatic sunset photography opportunities. AED 500 per buggy. All safety gear included. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/red-dunes-afternoon-buggies` },
};
export default function Page() {
  return (
    <TourPageLayout
      name=\"Red Dunes Afternoon Buggies\"
      breadcrumbParent={{ label: "Dune Buggy Dubai", href: "/dune-buggy-dubai" }}
      tagline=\"Chase the golden hour across Dubai's crimson red dunes with dramatic sunset photography opportunities.\"
      price=\"AED 500\"
      duration=\"60 Minutes\"
      seater=\"1, 2 & 4 Seater\"
      persons=\"1–4 Persons\"
      difficulty=\"All Levels\"
      heroImage=\"/images/tours/red-dunes-card.webp\"
      galleryImages={["/images/tours/red-dunes-card.webp','/images/tours/red-dunes-gallery-1.webp','/images/tours/red-dunes-gallery-2.webp','/images/tours/red-dunes-gallery-3.webp','/images/tours/red-dunes-gallery-4.webp']}
      highlights={[
        'Self-drive a high-performance dune buggy across Dubai\'s iconic Al Badayer Red Dunes',
        'Available in 1-seater, 2-seater, and 4-seater configurations to suit any group size',
        'Fully automatic transmission — no driving licence required, perfect for all skill levels',
        'Sunset departure for the best desert lighting and temperatures',
        'Includes sandboarding, camel ride, refreshments, and multiple scenic photo stops',
        'Licensed desert guides ensure safety while maximising the thrill of your adventure',
      ]}
      overview={[
        'Red Dunes Afternoon Buggies is one of the most popular dune buggy experiences in Dubai, offering the perfect combination of accessibility, excitement, and desert beauty. Departing at Sunset time, guests benefit from ideal conditions across the stunning Al Badayer landscape — a region of towering red sand dunes located just 50 kilometres from Dubai city centre.',
        'The route takes you through open desert flats for exhilarating speed runs, then up and over towering dune faces for heart-pounding descents. Your licensed guide leads a small convoy, ensuring every guest feels confident while experiencing genuine off-road thrills. Suitable for complete beginners through to experienced riders, the automatic buggy is incredibly intuitive to drive.',
        'After the 60-minute buggy ride, the desert adventure continues with traditional activities including sandboarding, camel riding, and Arabic refreshments. This tour is an excellent choice for solo visitors, couples, and small groups seeking an authentic and affordable Dubai desert experience.',
      ]}
      inclusions={[
        '60-minute self-drive dune buggy ride',
        'Certified helmet and goggles',
        'Licensed desert guide',
        'Safety briefing and vehicle orientation',
        'Sandboarding equipment',
        'Camel ride at the camp',
        'Complimentary water and soft drinks',
        'Scenic photo stops',
        'Backup safety vehicle',
        'Full insurance coverage',
      ]}
      exclusions={[
        'Hotel pickup (available AED 300 per person)',
        'BBQ dinner (optional add-on)',
        'Personal expenses and souvenirs',
        'Professional photography (optional add-on)',
      ]}
      importantInfo={[
        'Minimum driver age: 16 years. Passengers welcome at any age.',
        'No driving licence required — buggies are fully automatic.',
        'Not suitable for pregnant women or those with serious back or heart conditions.',
        'Closed-toe shoes are mandatory for all riders.',
        'Arrive 15 minutes before your scheduled departure.',
      ]}
      whyChoose={[
        { title: 'Best Value Desert Adventure', desc: 'At AED 500 per buggy — not per person — this tour offers exceptional value for money. Split between 2 or 4 riders and enjoy a world-class desert experience for an affordable price.' },
        { title: 'Sunset Timing Advantage', desc: 'Sunset departures offer unique advantages — whether it is cooler temperatures, stunning photography light, or the magic of the desert under stars, this timing creates a truly special experience.' },
        { title: 'Flexible Seating Options', desc: 'Solo riders, couples, and groups of 4 are all catered for with multiple buggy configurations. Everyone can join the adventure regardless of group size.' },
        { title: 'Zero Advance Payment', desc: 'Book your slot with a simple WhatsApp message. No credit card details, no deposits. Just confirm your date and pay cash or card at the desert camp.' },
      ]}
      perfectFor={['Solo Adventurers', 'Couples', 'Small Groups', 'Dubai Tourists', 'UAE Residents', 'Adventure Seekers', 'Photography Lovers']}
      faqs={[
        { q: 'Is this tour suitable for beginners?', a: 'Absolutely. The automatic transmission and comprehensive safety briefing ensure complete beginners feel confident and in control from the very start.' },
        { q: 'How many people fit per buggy?', a: 'Available in 1-seater, 2-seater, and 4-seater options. The price is per buggy, so groups can share the cost for great value.' },
        { q: 'What should I wear?', a: 'Comfortable casual clothing and closed-toe shoes (mandatory). Sunglasses, sunscreen, and a light jacket for cooler departures are recommended.' },
        { q: 'How far is the desert from Dubai?', a: 'The Al Badayer Desert is approximately 50 kilometres from Dubai city centre — around 45–60 minutes by car depending on traffic.' },
        { q: 'Can I book for the same day?', a: 'Yes, subject to availability. We recommend booking at least 24 hours in advance to guarantee your preferred time slot.' },
      ]}
      relatedTours={[
        { name: "Can-Am Maverick R X RS '26", href: '/dune-buggy-dubai/can-am-maverick-r-x-rs-26', price: 'AED 999', image: '/images/tours/canam-rxrs-card.webp' },
        { name: 'Can-Am Maverick XRS 26', href: '/dune-buggy-dubai/can-am-maverick-xrs-26', price: 'AED 800', image: '/images/tours/canam-xrs-card.webp' },
        { name: 'Stage 4 Stunner', href: '/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate', price: 'AED 1,499', image: '/images/tours/stage4-stunner-card.webp' },
      ]}
      partnerAnchor="desert buggy ride Dubai"
    />
  );
}

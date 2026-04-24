import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Stage 4 Stunner RZR PRO R | 4-Seater Family Buggy Dubai | AED 1,499',
  description: 'The ultimate 4-seater family dune buggy in Dubai. Polaris RZR PRO R Ultimate EPS. 60 min, AED 1,499. Fits the whole family. Book via WhatsApp.',
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate` },
};
export default function Page() {
  return (
    <TourPageLayout
      name="Stage 4 Stunner: RZR PRO R Ultimate EPS"
      breadcrumbParent={{ label: 'Dune Buggy Dubai', href: '/dune-buggy-dubai' }}
      tagline="The most powerful 4-seater family buggy in Dubai — the Polaris RZR PRO R Ultimate EPS conquers every dune with extreme power and comfort."
      price="AED 1,499"
      duration="60 Minutes"
      seater="4 Seater"
      persons="4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/stage4-stunner-card.webp"
      galleryImages={['/images/tours/stage4-stunner-card.webp','/images/tours/stage4-gallery-1.webp','/images/tours/stage4-gallery-2.webp','/images/tours/stage4-gallery-3.webp','/images/tours/stage4-gallery-4.webp']}
      highlights={[
        'Drive the legendary Polaris RZR PRO R Ultimate EPS — the most powerful 4-seater dune buggy available in Dubai',
        'Stage 4 suspension upgrade provides race-level performance suitable for the most demanding desert terrain',
        'EPS (Electronic Power Steering) ensures effortless, precise control even on the steepest dunes',
        'Fits the entire family — four adults ride together in maximum comfort and safety',
        'The same vehicle class used by professional off-road racing teams across North America and the Middle East',
        'Available for morning, afternoon, and thrilling night rides across the Al Badayer Red Dunes',
      ]}
      overview={[
        'When only the best will do, the Stage 4 Stunner is your answer. The Polaris RZR PRO R Ultimate EPS with Stage 4 suspension upgrades is the most capable recreational off-road vehicle available for public tours in the UAE. Featuring a high-output engine, long-travel suspension, electronic power steering, and reinforced roll-cage construction, this machine makes even the most challenging desert terrain feel completely manageable.',
        'This premium 4-seater package is designed for families and groups who refuse to compromise. All four passengers share a single vehicle, experiencing every dune, every ridge, and every valley together. The EPS system means even first-time drivers maintain confident steering control at all speeds — from a leisurely cruise through desert flats to full-speed ascents of 80-metre dune faces.',
        'Your adventure also includes traditional desert activities at the camp: sandboarding down pristine red dunes, camel riding through the golden landscape, and refreshments as the desert sun paints the sky in extraordinary colours. For families visiting Dubai, this is an experience that will be talked about for years.',
      ]}
      inclusions={[
        '60-minute self-drive Polaris RZR PRO R Ultimate EPS (4-seater)',
        'Helmets and goggles for all 4 passengers',
        'Licensed desert guide',
        'Comprehensive safety briefing',
        'Sandboarding for all guests',
        'Camel ride',
        'Complimentary refreshments',
        'Photo stops at scenic desert viewpoints',
        'Backup safety vehicle',
        'Full insurance coverage',
      ]}
      exclusions={[
        'Hotel pickup (available AED 300 per person)',
        'BBQ dinner (optional add-on)',
        'Personal expenses',
      ]}
      importantInfo={[
        'Minimum driver age: 16 years. All 4 passengers must wear seatbelts at all times.',
        'Maximum combined passenger weight limits apply — please enquire when booking.',
        'Not recommended for pregnant women or guests with serious back/heart conditions.',
        'Closed-toe shoes mandatory for all 4 passengers.',
        'This is the most expensive package — book early, especially for weekend slots.',
      ]}
      whyChoose={[
        { title: 'Perfect for Families', desc: 'The whole family rides together. Parents drive while children experience the thrills of the desert safely in a fully certified, roll-cage protected vehicle.' },
        { title: 'Race-Grade Performance', desc: 'Stage 4 suspension upgrades take this buggy beyond standard stock performance. The result is a ride quality that is both more exciting and more controlled than any standard dune buggy.' },
        { title: 'All-Inclusive Pricing', desc: 'At AED 1,499 for four people, this works out to just AED 375 per person — excellent value for the flagship desert experience in Dubai.' },
        { title: 'Memorable Group Experience', desc: 'Shared vehicles create shared memories. Friends and families who ride together leave with a collective adventure story they will never forget.' },
      ]}
      perfectFor={['Families with Teenagers', 'Groups of 4', 'Corporate Team Events', 'Birthday Celebrations', 'VIP Experiences', 'Adventure Seekers', 'Holiday Groups']}
      faqs={[
        { q: 'Can children ride in the Stage 4 Stunner?', a: 'Yes — children are welcome as passengers. The minimum driver age is 16 years. All passengers must wear the provided safety harness throughout the tour.' },
        { q: 'Is AED 1,499 per person or per vehicle?', a: 'AED 1,499 is per vehicle, which accommodates 4 passengers. That works out to approximately AED 375 per person — outstanding value for the flagship 4-seater experience.' },
        { q: 'What makes it a "Stage 4" buggy?', a: 'Stage 4 refers to the level of suspension upgrade applied to the Polaris RZR PRO R. It includes longer-travel shocks, upgraded components, and tuning that provides race-level performance for desert conditions.' },
        { q: 'Is it difficult to drive with 4 passengers?', a: 'Not at all. The EPS (Electronic Power Steering) makes the steering light and responsive regardless of load. Our pre-tour briefing prepares any driver within minutes.' },
      ]}
      relatedTours={[
        { name: "Can-Am Maverick R X RS '26", href: '/dune-buggy-dubai/can-am-maverick-r-x-rs-26', price: 'AED 999', image: '/images/tours/canam-rxrs-card.webp' },
        { name: 'Night Riders Adventure', href: '/dune-buggy-dubai/night-riders-dune-buggy-dubai', price: 'AED 500', image: '/images/tours/night-riders-card.webp' },
        { name: 'Red Dunes Afternoon', href: '/dune-buggy-dubai/red-dunes-afternoon-buggies', price: 'AED 500', image: '/images/tours/red-dunes-card.webp' },
      ]}
      partnerAnchor="dune buggy tour Dubai"
    />
  );
}

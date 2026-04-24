import type { Metadata } from 'next';
import TourPageLayout from '@/components/TourPageLayout';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Can-Am Maverick R X RS '26 | Best Dune Buggy Dubai | Buggy Dubai Rental",
  description: "Drive the 2026 Can-Am Maverick R X RS across Dubai's Al Badayer Red Dunes. Smart-Shox suspension, turbocharged 1000cc engine. AED 999 per buggy. Book via WhatsApp.",
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/can-am-maverick-r-x-rs-26` },
};

export default function Page() {
  return (
    <TourPageLayout
      name=\"Can-Am Maverick R X RS "26 Dune Buggy Tour"
      breadcrumbParent={{ label: 'Dune Buggy Dubai', href: '/dune-buggy-dubai' }}
      tagline="Experience the most powerful self-drive buggy in Dubai — the 2026 Can-Am Maverick R X RS with Smart-Shox suspension."
      price="AED 999"
      duration="60 Minutes"
      seater="2–4 Seater"
      persons="2–4 Persons"
      difficulty="All Levels"
      heroImage="/images/tours/canam-rxrs-card.webp"
      galleryImages={[
        '/images/tours/canam-rxrs-card.webp',
        '/images/tours/canam-rxrs-gallery-1.webp',
        '/images/tours/canam-rxrs-gallery-2.webp',
        '/images/tours/canam-rxrs-gallery-3.webp',
        '/images/tours/canam-rxrs-gallery-4.webp',
        '/images/tours/canam-rxrs-gallery-5.webp",
      ]}
      highlights={[
        \"Drive the brand-new 2026 Can-Am Maverick R X RS — the most advanced dune buggy in Dubai's fleet\",
        "Smart-Shox semi-active suspension adapts in real-time to the desert terrain for the smoothest possible ride',
        'Turbocharged 1000cc+ engine delivers explosive acceleration across towering Al Badayer red sand dunes',
        'Suitable for complete beginners — fully automatic transmission with comprehensive safety briefing',
        'Includes sandboarding, camel ride, and multiple scenic photo stops in the Arabian desert',
        'Available in morning, afternoon, and night departures to suit every schedule and preference',
      ]}
      overview={[
        "The Can-Am Maverick R X RS "26 represents the absolute pinnacle of dune buggy technology available in Dubai. Featuring the revolutionary Smart-Shox semi-active suspension system, this 2026 flagship model continuously monitors terrain and adjusts damping in real-time, delivering a ride quality that is simultaneously thrilling and controlled. Whether you are attacking a 100-metre dune face or cruising through a desert wadi, the Maverick R X RS responds with precision.\",
        \"Your 60-minute adventure begins with a comprehensive safety and vehicle briefing from our licensed desert guides. The Al Badayer Desert — Dubai's iconic Red Dunes region, located approximately 50 kilometres from the city centre — provides a spectacular backdrop of crimson sand formations unlike anywhere else on Earth. The route includes a mix of open flat sections for speed, steep dune faces for adrenaline, and ridge-top viewpoints for unforgettable panoramic photographs.\",
        \"All participants receive certified helmets, professional goggles, and any other protective equipment necessary. After your buggy ride, enjoy traditional Arabian desert activities including sandboarding down the dunes, a short camel ride, and Arabic coffee and dates at our desert camp. This tour is the finest 1-seater or 2-seater dune buggy experience available in the UAE.\",
      ]}
      inclusions={[
        "60-minute self-drive Can-Am Maverick R X RS 2026 buggy ride',
        'Certified helmet and professional goggles',
        'Licensed desert guide throughout the tour',
        'Comprehensive safety briefing and vehicle orientation',
        'Sandboarding equipment and instruction',
        'Camel ride at the desert camp',
        'Complimentary water and soft drinks',
        'Scenic photo stops with panoramic desert views',
        'Backup support vehicle for safety',
        'Full insurance coverage',
      ]}
      exclusions={[
        'Hotel pickup/drop-off (available as add-on for AED 300)',
        'BBQ dinner (available as optional add-on)',
        'Personal expenses and souvenirs',
        'Professional photography service (available as add-on)',
      ]}
      importantInfo={[
        'Minimum driver age is 16 years. Passengers of any age are welcome with adult supervision.',
        'No driving licence required — our buggies are fully automatic.',
        'Pregnant women and guests with serious back, neck, or heart conditions are advised not to participate.',
        'Wear comfortable, closed-toe shoes (mandatory). Loose scarves and jewellery should be avoided.',
        'Bring sunglasses, sunscreen, and a light jacket for evening tours.',
        'Tours operate in most weather conditions. In severe sandstorms, a free reschedule is offered.',
        'Hotel pickup is available from Dubai Marina, Downtown, Palm Jumeirah, Deira, JBR, and all major areas.',
      ]}
      whyChoose={[
        { title: 'The Newest 2026 Fleet', desc: "The Can-Am Maverick R X RS '26 is the latest model available anywhere in Dubai. No competitor offers this level of vehicle technology — you are driving the same buggy used in professional off-road racing worldwide." },
        { title: 'Smart-Shox Technology', desc: 'No other dune buggy in Dubai features Smart-Shox semi-active suspension. This system reads the terrain 100 times per second and adjusts damping instantly, giving you maximum control on every dune.' },
        { title: 'Safety First, Always', desc: 'Every vehicle is equipped with a reinforced roll cage, four-point harness, fire extinguisher, and GPS tracker. Our guides hold desert-driving certifications and first-aid qualifications.' },
        { title: 'No Advance Payment', desc: 'We are one of the only operators in Dubai that requires zero advance payment. Book via WhatsApp, confirm your date, and simply pay when you arrive at the desert camp.' },
        { title: 'Licensed & Insured', desc: 'Buggy Dubai Rental operates with full Dubai Tourism Authority licensing, public liability insurance, and vehicle insurance covering all guests throughout the tour.' },
      ]}
      perfectFor={['Couples', 'Friends Groups', 'Adrenaline Seekers', 'Photography Lovers', 'First-Time Riders', 'VIP Experiences', 'Birthday Celebrations', 'Tourists visiting Dubai']}
      faqs={[
        { q: "Do I need a driving licence to drive the Can-Am Maverick?", a: 'No driving licence is required. The Can-Am Maverick R X RS features fully automatic transmission. Our safety briefing prepares complete beginners within minutes.' },
        { q: 'How many people can ride in one buggy?', a: 'The Can-Am Maverick R X RS is available in 2-seater and 4-seater configurations. Two passengers maximum for the 2-seater; four passengers for the 4-seater variant. Price is per buggy, not per person.' },
        { q: 'What time of day is best for this tour?', a: 'Morning tours (6–9 AM) offer cooler temperatures and magical sunrise lighting. Afternoon tours (3–6 PM) provide golden-hour photography and dramatic sunset colours. Night tours offer a unique LED-lit desert experience.' },
        { q: 'Is this suitable for children?', a: 'Children are welcome as passengers in the 4-seater model. Child drivers must be 16+ years old. Our guides ensure all guests feel safe and comfortable throughout.' },
        { q: 'How do I get to the desert camp?', a: 'Shared hotel transfer is available for AED 300 from anywhere in Dubai. Alternatively, you can drive yourself — we send GPS coordinates upon booking confirmation.' },
        { q: 'What happens if the weather is bad?', a: 'Tours run in the vast majority of weather conditions. In rare cases of severe sandstorms, we offer a free reschedule or full refund. You will be notified as early as possible.' },
        { q: 'What is included in the AED 999 price?', a: 'The price includes the 60-minute buggy ride, all safety equipment, licensed guide, sandboarding, camel ride, refreshments, and photo stops. Hotel transfer is an optional AED 300 add-on.' },
      ]}
      relatedTours={[
        { name: "Can-Am Maverick XRS 26", href: '/dune-buggy-dubai/can-am-maverick-xrs-26', price: 'AED 800', image: '/images/tours/canam-xrs-card.webp' },
        { name: 'Stage 4 Stunner: RZR PRO R', href: '/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate', price: 'AED 1,499', image: '/images/tours/stage4-stunner-card.webp' },
        { name: 'Early Bird Buggy Tour', href: '/dune-buggy-dubai/early-bird-buggy-tour', price: 'AED 500', image: '/images/tours/early-bird-card.webp' },
      ]}
      partnerAnchor="dune buggy tour Dubai"
    />
  );
}

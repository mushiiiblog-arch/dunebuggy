import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Desert Safari Dubai | Evening, Morning & VIP Safari Tours',
  description: 'Book the best desert safari in Dubai. Evening safari with BBQ dinner & live shows, morning safari, overnight camping & VIP private experiences. Dune bashing, camel rides, sandboarding included. From AED 199.',
  alternates: { canonical: `${SITE.url}/desert-safari-dubai` },
};

const safariPackages = [
  {
    name: 'Morning Desert Safari', duration: '3–4 Hours', price: 'AED 199',
    desc: 'Experience the desert in cool morning light with 4x4 dune bashing, camel ride, sandboarding, and refreshments. Perfect for those with limited time who still want the full desert thrill.',
    badge: 'MORNING', img: '/images/tours/early-bird-card.webp',
    features: ['4x4 Dune Bashing', 'Camel Ride', 'Sandboarding', 'Refreshments', 'Photo Stops'],
  },
  {
    name: 'Evening Desert Safari with BBQ Dinner', duration: '6–7 Hours', price: 'AED 299',
    desc: 'Our most popular package. Thrilling dune bashing, stunning sunset views, camel rides, sandboarding, henna art, BBQ buffet dinner, and live entertainment shows including Tanoura, Belly Dance, and Fire Show.',
    badge: 'BESTSELLER', img: '/images/tours/red-dunes-card.webp',
    features: ['4x4 Dune Bashing', 'Sunset Views', 'Camel Ride', 'Sandboarding', 'BBQ Dinner', 'Live Shows', 'Henna Art', 'Shisha'],
  },
  {
    name: 'Overnight Desert Safari', duration: '14–16 Hours', price: 'AED 499',
    desc: 'The complete desert immersion. Everything in the evening safari plus overnight camping under the stars with breakfast. Sleep in a traditional Bedouin-style tent and wake up to a stunning desert sunrise.',
    badge: 'PREMIUM', img: '/images/tours/night-riders-card.webp',
    features: ['Everything in Evening Safari', 'Overnight Camping', 'Bedouin Tent', 'Desert Sunrise', 'Breakfast'],
  },
  {
    name: 'VIP Private Desert Safari', duration: '6–7 Hours', price: 'AED 899',
    desc: 'An exclusive, fully private desert safari experience. Private 4x4 vehicle, personal guide, VIP seating area, premium BBQ dinner, and uninterrupted cultural performances for your group only.',
    badge: 'VIP', img: '/images/tours/canam-rxrs-card.webp',
    features: ['Private 4x4 Vehicle', 'Personal Guide', 'VIP Seating', 'Premium Dinner', 'Exclusive Shows', 'Priority Service'],
  },
];

const includedItems = [
  { icon: '🚙', title: '4x4 Dune Bashing', desc: 'Heart-pounding ride across towering sand dunes in a powerful SUV' },
  { icon: '🐫', title: 'Camel Ride', desc: 'Traditional Arabian camel ride through the golden desert sands' },
  { icon: '🏂', title: 'Sandboarding', desc: 'Slide down towering dunes — equipment provided' },
  { icon: '📸', title: 'Sunset Photo Stop', desc: 'Pause at stunning vantage points to capture desert sunset views' },
  { icon: '🍖', title: 'BBQ Buffet Dinner', desc: 'Authentic Arabian feast with grilled meats, salads, and desserts' },
  { icon: '💃', title: 'Live Entertainment', desc: 'Tanoura Dance, Belly Dancing, Fire Show & traditional Yowla' },
  { icon: '☕', title: 'Arabic Coffee & Dates', desc: 'Welcome drinks with traditional Arabian coffee and sweet dates' },
  { icon: '🚐', title: 'Hotel Transfers', desc: 'Complimentary pick-up and drop-off from your Dubai hotel' },
];

export default function DesertSafariDubaiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460]" />
        <img src="/images/gallery/gallery-4.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-gold">Desert Safari Dubai</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Desert Safari Dubai — The Complete Arabian Desert Experience
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            From heart-pounding 4x4 dune bashing and camel rides to BBQ dinners under the stars and mesmerising cultural performances.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Desert Safari</a>
            <Link href="/dune-buggy-dubai" className="btn-secondary">See Dune Buggy Tours</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-brand-cream sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Safari Packages</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5">Desert Safari Tour Packages &amp; Pricing</h2>
              <p className="text-gray-600 text-lg">Choose from morning, evening, overnight, and VIP private safari experiences.</p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            {safariPackages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-72 h-52 lg:h-auto bg-brand-dark shrink-0 overflow-hidden relative">
                      <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover" loading="lazy" width={800} height={500} />
                      <span className="absolute top-3 left-3 bg-brand-orange/90 text-white text-xs font-bold tracking-wider rounded-full px-3 py-1">{pkg.badge}</span>
                    </div>
                    <div className="flex-1 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-brand-dark mb-2">{pkg.name}</h3>
                        <div className="flex gap-3 mb-3 text-sm text-gray-500">
                          <span>⏱️ {pkg.duration}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{pkg.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.features.map((f) => (
                            <span key={f} className="text-[11px] font-medium text-brand-orange bg-brand-orange/5 rounded-full px-2.5 py-1">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 text-center lg:text-right">
                        <div className="text-3xl font-heading font-bold text-brand-orange mb-1">{pkg.price}</div>
                        <div className="text-gray-500 text-xs mb-4">per person</div>
                        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !py-3 !px-6">Book This Safari</a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5">
                What&apos;s Included in Your Desert Safari
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {includedItems.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 60}>
                <div className="bg-brand-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Want More Desert Adventure?</h2>
            <p className="text-white/50 text-lg mb-8">Combine your desert safari with a self-drive dune buggy or quad bike experience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dune-buggy-dubai" className="btn-primary">Dune Buggy Tours →</Link>
              <Link href="/quad-bike-dubai" className="btn-secondary">Quad Bike Tours →</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-6">About Desert Safari Dubai</h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>A desert safari in Dubai is the quintessential Arabian adventure. The experience combines the thrill of 4x4 dune bashing across the Al Badayer Red Dunes with the cultural richness of traditional Bedouin hospitality, including camel riding, sandboarding, henna art, Arabic coffee ceremonies, and authentic Arabian cuisine.</p>
              <p>For guests seeking even more adventure, we recommend combining a desert safari with one of our <Link href="/dune-buggy-dubai" className="text-brand-orange font-semibold hover:underline">self-drive dune buggy tours</Link> or <Link href="/quad-bike-dubai" className="text-brand-orange font-semibold hover:underline">quad bike experiences</Link>.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, TOURS } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Dune Buggy Dubai Tours | Self-Drive Desert Buggy Rides from AED 399',
  description: 'Book the best dune buggy tours in Dubai. Self-drive Can-Am Maverick & Polaris RZR buggies across Al Badayer Red Dunes. 7 tour packages from AED 399. Morning, afternoon & night rides. Free sandboarding, camel ride & safety gear.',
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai` },
};

const tourSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dune Buggy Dubai Tour Packages',
  itemListElement: TOURS.map((tour, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'TouristTrip',
      name: tour.name,
      description: tour.description,
      offers: { '@type': 'Offer', price: tour.price, priceCurrency: 'AED' },
    },
  })),
};

const badgeColors: Record<string, string> = {
  orange: 'bg-brand-orange text-white',
  gold: 'bg-brand-gold text-white',
  dark: 'bg-brand-dark text-white',
  green: 'bg-green-500 text-white',
  sunrise: 'bg-amber-400 text-brand-dark',
  night: 'bg-indigo-600 text-white',
  sunset: 'bg-gradient-to-r from-orange-500 to-rose-500 text-white',
};

export default function DuneBuggyDubaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460]" />
        <img src="/images/gallery/gallery-2.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">Dune Buggy Dubai</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Dune Buggy Dubai — Self-Drive Desert Buggy Tours &amp; Rentals
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Take full control of a high-performance Can-Am Maverick or Polaris RZR and explore the golden-red dunes of Al Badayer at your own pace. 7 tour packages from AED 399.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Now on WhatsApp
            </a>
            <Link href="#packages" className="btn-secondary">View All Packages ↓</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      {/* All Packages */}
      <section id="packages" className="py-20 md:py-28 bg-brand-cream sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">All Tour Packages</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
                Choose Your Dune Buggy Adventure
              </h2>
              <p className="text-gray-600 text-lg">
                Every package includes safety gear, licensed guide, refreshments, sandboarding, camel ride, and photo stops.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            {TOURS.map((tour, i) => (
              <AnimateOnScroll key={tour.id} delay={Math.min(i * 80, 400)}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-80 h-52 lg:h-auto bg-brand-dark shrink-0 overflow-hidden relative">
                      <img
                        src={tour.image}
                        alt={`${tour.name} - Dune Buggy Dubai`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={500}
                      />
                      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${badgeColors[tour.badgeColor] || 'bg-brand-orange text-white'}`}>
                        {tour.badge}
                      </div>
                    </div>
                    <div className="flex-1 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-brand-dark mb-2">{tour.name}</h3>
                        <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-500">
                          <span>⏱️ {tour.duration}</span>
                          <span>👥 {tour.persons}</span>
                          <span>🪑 {tour.seater}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{tour.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tour.features.map((f) => (
                            <span key={f} className="text-[11px] font-medium text-brand-orange bg-brand-orange/5 rounded-full px-2.5 py-1">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 text-center lg:text-right">
                        <div className="text-3xl font-heading font-bold text-brand-orange mb-1">{tour.priceDisplay}</div>
                        <div className="text-gray-500 text-xs mb-4">per buggy</div>
                        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !py-3 !px-6">
                          Book This Tour
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Galleries */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Photo Gallery</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5">See Our Tours in Action</h2>
            </div>
          </AnimateOnScroll>
          <div className="space-y-12">
            {TOURS.map((tour) => (
              <AnimateOnScroll key={tour.id}>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-4">{tour.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {(tour.gallery || []).map((src: string, gi: number) => (
                      <div key={gi} className="rounded-xl overflow-hidden h-36 group">
                        <img
                          src={src}
                          alt={`${tour.name} photo ${gi + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          width={800}
                          height={500}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-6">About Dune Buggy Tours in Dubai</h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>Dune buggy Dubai is one of the most sought-after outdoor adventure experiences in the United Arab Emirates. Located in the Al Badayer Desert — also known as the Lahbab Desert or Red Dunes — our self-drive dune buggy tours offer visitors and residents an unparalleled opportunity to explore one of the most visually stunning desert landscapes on Earth.</p>
              <p>Our fleet of 2026-model dune buggies includes the Can-Am Maverick R X RS, Can-Am Maverick XRS, and Polaris RZR PRO R Ultimate (Stage 4 Stunner), each equipped with turbocharged engines, Smart-Shox suspension technology, reinforced roll cages, and automatic transmission. These vehicles deliver an exhilarating off-road experience that is both thrilling for experienced riders and fully accessible to complete beginners.</p>
              <p>In addition to our dune buggy tours, we offer <Link href="/quad-bike-dubai" className="text-brand-orange font-semibold hover:underline">Quad Bike Dubai</Link> adventures and comprehensive <Link href="/desert-safari-dubai" className="text-brand-orange font-semibold hover:underline">Desert Safari Dubai</Link> packages.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

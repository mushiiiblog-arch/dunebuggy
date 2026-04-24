import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Quad Bike Dubai | ATV Desert Rides & Tours from AED 350",
  description: "Book the best quad bike tours in Dubai. High-performance ATV rides across Al Badayer Red Dunes. Solo, couple & group packages. Professional guides, safety gear & refreshments included.",
  alternates: { canonical: `${SITE.url}/quad-bike-dubai` },
};

const quadPackages = [
  { name: 'Morning Quad Bike Tour', duration: '60 Min', price: 'AED 350', desc: 'Beat the heat with a sunrise quad bike ride across the red dunes. Cooler temperatures, stunning morning light, and exclusive early-bird routes.', badge: 'MORNING', img: '/images/tours/early-bird-card.webp' },
  { name: 'Sunset Quad Bike Tour', duration: '60 Min', price: 'AED 400', desc: 'Chase the golden hour on a high-performance ATV. The most photogenic quad bike experience with dramatic sunset views over the desert.', badge: 'POPULAR', img: '/images/tours/red-dunes-card.webp' },
  { name: 'Night Quad Bike Tour', duration: '60 Min', price: 'AED 400', desc: 'Navigate the dunes after dark with LED-illuminated quad bikes under a canopy of stars. A truly unique nocturnal desert adventure.', badge: 'ADVENTURE', img: '/images/tours/night-riders-card.webp' },
  { name: 'Quad Bike + Desert Safari Combo', duration: '3–4 Hours', price: 'AED 599', desc: 'Combine a thrilling quad bike ride with a full desert safari experience including dune bashing, BBQ dinner, and live entertainment.', badge: 'VALUE', img: '/images/tours/desert-combo-card.webp' },
];

export default function QuadBikeDubaiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460]" />
        <img src="/images/gallery/gallery-5.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-gold">Quad Bike Dubai</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Quad Bike Dubai — ATV Desert Rides &amp; Tours
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Experience the raw power and freedom of riding a high-performance quad bike across Dubai&apos;s open desert terrain. Professional guides, full safety gear, and flexible packages for every skill level.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Quad Bike Tour</a>
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
              <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Tour Packages</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5">Quad Bike Tour Packages &amp; Pricing</h2>
              <p className="text-gray-600 text-lg">All packages include safety gear, professional ATV guide, refreshments, and backup support vehicle.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quadPackages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-500 h-full flex flex-col">
                  <div className="h-52 overflow-hidden relative">
                    <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover" loading="lazy" width={800} height={500} />
                    <span className="absolute top-4 left-4 bg-brand-orange/90 text-white text-xs font-bold tracking-wider rounded-full px-3 py-1">{pkg.badge}</span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-2xl font-bold text-brand-dark mb-2">{pkg.name}</h3>
                    <div className="flex gap-3 mb-3 text-sm text-gray-500">
                      <span>⏱️ {pkg.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{pkg.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-heading font-bold text-brand-orange">{pkg.price}</div>
                      <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !py-2.5 !px-5">Book Now</a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-6">About Quad Biking in Dubai</h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>Quad biking in Dubai offers one of the most accessible and exhilarating ways to experience the Arabian desert. Our high-performance ATVs are suitable for both beginners and experienced riders, delivering an unforgettable combination of speed, terrain control, and open-air desert exploration.</p>
              <p>All quad bike tours take place in the Al Badayer Red Dunes region, guided by licensed professionals who ensure your safety and maximise your enjoyment. Each tour includes a detailed safety briefing, certified helmet, protective eyewear, and complimentary refreshments.</p>
              <p>Looking for more? Combine your quad bike experience with our <Link href="/dune-buggy-dubai" className="text-brand-orange font-semibold hover:underline">Dune Buggy Dubai</Link> tours or explore our complete <Link href="/desert-safari-dubai" className="text-brand-orange font-semibold hover:underline">Desert Safari Dubai</Link> packages.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

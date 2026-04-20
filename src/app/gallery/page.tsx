import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, GALLERY_IMAGES, TOURS } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Gallery | Dune Buggy Dubai Photos & Videos | Buggy Dubai Rental',
  description: 'Browse photos and videos from our dune buggy tours, quad bike rides, and desert safari experiences in Dubai. See what awaits you in the Al Badayer Red Dunes.',
  alternates: { canonical: `${SITE.url}/gallery` },
};

type GalleryItem = { src: string; alt: string; title: string; category: string };

const heroImages: GalleryItem[] = GALLERY_IMAGES.map((img) => ({
  src: img.src,
  alt: img.alt,
  title: img.title,
  category: 'Dune Buggy',
}));

const tourImages: GalleryItem[] = TOURS.flatMap((tour) =>
  (tour.gallery ?? []).slice(0, 2).map((src: string, i: number) => ({
    src,
    alt: `${tour.name} dune buggy tour Dubai photo ${i + 1}`,
    title: tour.shortName,
    category: tour.badge === 'MORNING' || tour.badge === 'SUNSET' ? 'Scenic' : tour.badge === 'ADVENTURE' ? 'Night Tour' : 'Dune Buggy',
  }))
);

const allGalleryImages: GalleryItem[] = [...heroImages, ...tourImages];
const heights = ['h-64', 'h-72', 'h-56', 'h-80', 'h-64', 'h-72'];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460]" />
        <img src="/images/hero-bg.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">Gallery</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Photo &amp; Video Gallery
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
            Real moments from our dune buggy tours, desert safaris, and quad bike experiences across the Al Badayer Red Dunes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-brand-cream sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {allGalleryImages.map((item, i) => (
              <AnimateOnScroll key={`${item.src}-${i}`} delay={Math.min(i * 40, 300)}>
                <div className={`relative ${heights[i % heights.length]} rounded-2xl overflow-hidden group cursor-pointer`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="text-brand-orange text-xs font-semibold tracking-wider uppercase">{item.category}</span>
                    <h3 className="text-white font-bold mt-1">{item.title}</h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* CTA */}
          <AnimateOnScroll>
            <div className="mt-16 bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 30% 40%, rgba(232,97,26,0.4), transparent 40%)` }} />
              <div className="relative z-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">Ready to Create Your Own Desert Moments?</h2>
                <p className="text-white/50 text-lg mb-6 max-w-lg mx-auto">Book your dune buggy adventure and come back with photos even better than these.</p>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">Book Now on WhatsApp</a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

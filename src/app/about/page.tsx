import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us | Buggy Dubai Rental — Desert Adventure Specialists',
  description: "Learn about Buggy Dubai Rental — Dubai's premier dune buggy tour operator. Our mission, team, fleet, safety standards, and commitment to unforgettable desert adventures.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">About Us</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">About Buggy Dubai Rental</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
            Dubai&apos;s desert adventure specialists — delivering the most thrilling, safest, and most memorable self-drive dune buggy experiences.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-cream sand-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="space-y-16">
              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-dark mb-5">Who We Are</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>Buggy Dubai Rental is a professional dune buggy tour operator based in Dubai, UAE, specialising in self-drive desert buggy adventures, quad bike tours, and comprehensive desert safari experiences in the Al Badayer Red Dunes.</p>
                  <p>With a fleet of over 26 late-model dune buggies from leading manufacturers including Can-Am and Polaris, a team of certified and licensed desert guides, and thousands of satisfied guests from around the world, we have established ourselves as one of Dubai&apos;s most trusted names in off-road desert tourism.</p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-dark mb-5">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">Deliver the most thrilling, safest, and most memorable desert adventure in Dubai through an unwavering commitment to vehicle quality, guide expertise, customer experience, and genuine Arabian hospitality. Every guest should leave with a smile, stunning photos, and a story they will tell for years.</p>
              </div>

              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-dark mb-5">Our Fleet</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { img: '/images/tours/canam-rxrs-card.webp', name: "Can-Am Maverick R X RS '26", desc: 'Turbocharged engine with Smart-Shox suspension. The flagship of our desert fleet.' },
                    { img: '/images/tours/canam-xrs-card.webp', name: 'Can-Am Maverick XRS 26', desc: 'Agility meets power. Perfect for couples and small groups at all skill levels.' },
                    { img: '/images/tours/stage4-stunner-card.webp', name: 'Stage 4 Stunner: RZR PRO R', desc: '4-seater powerhouse with EPS power steering. The ultimate family adventure machine.' },
                  ].map((v) => (
                    <div key={v.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <div className="h-40 overflow-hidden">
                        <img src={v.img} alt={v.name} className="w-full h-full object-cover" loading="lazy" width={800} height={500} />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-brand-dark mb-2 text-sm">{v.name}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-dark mb-5">Safety First</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>Safety is the foundation of everything we do. Every dune buggy in our fleet features reinforced roll cages, four-point racing harnesses, fire extinguishers, and GPS tracking. All guests receive certified helmets and protective goggles that meet international off-road standards.</p>
                  <p>Our licensed desert guides undergo rigorous training in off-road vehicle operation, first aid, emergency response, and desert navigation. A dedicated backup support vehicle accompanies every tour convoy for complete peace of mind.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Ride?</h2>
                <p className="text-white/60 mb-6">Book your desert adventure today and join thousands of happy guests.</p>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
                  Book Now on WhatsApp
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

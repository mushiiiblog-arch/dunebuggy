import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Can-Am Maverick R X RS '26 | Dune Buggy Dubai Tour | Buggy Dubai Rental",
  description: 'Experience raw power with the 2026 Can-Am Maverick R X RS featuring Smart-Shox suspension technology. Book now for AED 999. Professional guides, safety gear included.',
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/can-am-maverick-r-x-rs-26` },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460]" />
        <img src="/images/tours/canam-rxrs-card.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <Link href="/dune-buggy-dubai">Dune Buggy Dubai</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">Can-Am Maverick R X RS '26</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Can-Am Maverick R X RS '26</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Experience raw power with the 2026 Can-Am Maverick R X RS featuring Smart-Shox suspension technology. Experience the ultimate self-drive dune buggy adventure in Dubai.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Now - AED 999</a>
            <Link href="/prices" className="btn-secondary">View All Prices</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      {/* Tour Intro */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                Experience the ultimate <a href={SITE.partnerLink} className="text-brand-orange font-semibold hover:underline">dune buggy tour</a> in Dubai with our Can-Am Maverick R X RS '26 package. This 2-4 Seater self-drive adventure takes you across the breathtaking Al Badayer Red Dunes, offering an unforgettable desert experience that combines adrenaline, stunning scenery, and professional guidance.
              </p>
              <p className="leading-relaxed mb-6">
                Our Can-Am Maverick R X RS '26 tour is designed for adventure seekers who want to explore Dubai's desert landscape in a high-performance buggy. Whether you're a first-time rider or an experienced off-roader, our professional guides ensure a safe and thrilling experience across the towering sand dunes.
              </p>
              <p className="leading-relaxed">
                Every tour includes comprehensive safety equipment, professional instruction, refreshments, and opportunities for stunning desert photography. This is more than just a <a href={SITE.partnerLink} className="text-brand-orange font-semibold hover:underline">buggy ride Dubai</a> — it's a complete desert adventure showcasing the natural beauty of Dubai's iconic red dunes.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tour Details Card */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="font-heading text-3xl font-bold mb-8">Tour Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-brand-orange text-sm font-semibold mb-2">DURATION</div>
                  <div className="text-2xl font-bold">60 Minutes</div>
                </div>
                <div>
                  <div className="text-brand-orange text-sm font-semibold mb-2">SEATING</div>
                  <div className="text-2xl font-bold">2-4 Seater</div>
                </div>
                <div>
                  <div className="text-brand-orange text-sm font-semibold mb-2">PRICE</div>
                  <div className="text-2xl font-bold">AED 999</div>
                </div>
                <div>
                  <div className="text-brand-orange text-sm font-semibold mb-2">DIFFICULTY</div>
                  <div className="text-2xl font-bold">All Levels</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-bold text-xl mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Professional Desert Guide', 'Safety Gear (Helmet, Goggles)', 'Refreshments', 'Sandboarding Activity', 'Camel Ride', 'Photo Stops'].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-10 text-center">Tour Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4].map((n) => (
                <div key={n} className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={`/images/tours/canam-rxrs-card.webp`} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-10 text-center">Why Choose This Tour</h2>
            <div className="space-y-6">
              {[
                { title: 'Latest 2026 Fleet', desc: 'Experience the newest Can-Am Maverick and Polaris RZR models with cutting-edge technology and performance.' },
                { title: 'Professional Guides', desc: 'Licensed desert guides with years of experience ensure your safety and maximize your enjoyment.' },
                { title: 'Stunning Red Dunes', desc: 'Ride across the iconic Al Badayer Desert - home to Dubai\'s most dramatic and photogenic sand dunes.' },
                { title: 'Complete Package', desc: 'Everything included - safety gear, guide, refreshments, sandboarding, camel ride, and photo stops.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-cream rounded-xl p-6">
                  <h3 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-6 text-center">Perfect For</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Solo Adventurers', 'Couples', 'Friends & Groups', 'Families', 'First-Time Riders', 'Experienced Off-Roaders', 'Photography Enthusiasts', 'Adventure Seekers'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-brand-orange shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Do I need a driving license?', a: 'No driving license required. Our buggies are fully automatic and easy to operate with a comprehensive safety briefing provided.' },
                { q: 'What is the minimum age?', a: 'Drivers must be 16+ years old. Passengers can be any age with adult supervision.' },
                { q: 'What should I wear?', a: 'Comfortable casual clothing and closed-toe shoes (mandatory). Sunglasses and sunscreen recommended.' },
                { q: 'Is hotel pickup included?', a: 'Shared hotel pickup available for AED 300 from anywhere in Dubai, or drive directly to camp.' },
                { q: 'Can I bring a camera?', a: 'Yes! Cameras and GoPros welcome. Secure all devices before riding. Multiple photo stops included.' },
                { q: 'What if the weather is bad?', a: 'Tours run in most conditions. In severe weather, we offer free rescheduling or full refund.' },
              ].map((faq) => (
                <div key={faq.q} className="bg-brand-cream rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand-dark mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-dark to-brand-dark-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Ride?</h2>
            <p className="text-white/60 text-lg mb-8">Book now via WhatsApp. No advance payment required. Pay at the camp before your tour.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">Book on WhatsApp</a>
              <Link href="/how-to-book" className="btn-secondary text-lg">How to Book</Link>
              <Link href="/prices" className="btn-secondary text-lg">View Prices</Link>
            </div>
            <div className="text-white/40 text-sm">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
              <span className="mx-2">•</span>
              <Link href="/dune-buggy-dubai" className="hover:text-brand-orange transition-colors">Dune Buggy Dubai</Link>
              <span className="mx-2">•</span>
              <Link href="/quad-bike-dubai" className="hover:text-brand-orange transition-colors">Quad Bike Tours</Link>
              <span className="mx-2">•</span>
              <Link href="/desert-safari-dubai" className="hover:text-brand-orange transition-colors">Desert Safari</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

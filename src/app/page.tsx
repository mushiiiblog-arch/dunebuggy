'use client';
import { useState } from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import EnquiryForm from '@/components/EnquiryForm';
import { SITE, TOURS, INCLUSIONS, ADD_ONS, FAQS, SERVICES, GALLERY_IMAGES } from '@/data/siteData';

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460]" />
      <img
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
      {/* Desert dunes silhouette */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" className="w-full h-24 md:h-48">
          <path d="M0 200V120C80 80 160 60 280 70C400 80 500 120 640 110C780 100 880 60 1020 50C1160 40 1300 70 1380 85L1440 100V200H0Z" fill="#FEFCF6" fillOpacity="0.05"/>
          <path d="M0 200V140C120 110 240 90 380 100C520 110 620 140 760 135C900 130 1020 100 1160 95C1300 90 1380 105 1440 115V200H0Z" fill="#FEFCF6"/>
        </svg>
      </div>
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Dubai&apos;s #1 Rated Desert Adventure — Open 24/7</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Self-Drive{' '}
            <span className="gradient-text">Dune Buggy</span>{' '}
            Tours in Dubai
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
            Conquer the legendary red dunes of Al Badayer behind the wheel of a high-performance Can-Am Maverick or Polaris RZR. Professional guides, full safety gear, and unforgettable memories — from{' '}
            <span className="text-brand-orange font-bold">AED 399</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href={SITE.whatsapp} target="_blank" className="btn-primary text-lg !py-4 !px-8">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.604-1.467A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.332-.726-6.033-1.96l-.424-.314-2.732.87.907-2.647-.346-.448A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Book Now on WhatsApp
            </Link>
            <Link href="#tours" className="btn-secondary text-lg !py-4 !px-8">
              View Tour Packages
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 items-center">
            {[
              { num: '2026', label: 'Model Fleet' },
              { num: '5,000+', label: 'Happy Guests' },
              { num: '4.9★', label: 'Google Rating' },
              { num: '24/7', label: 'Availability' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-white">{stat.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════════════ */
function WhyChooseUs() {
  const reasons = [
    { icon: '🏎️', title: 'Latest 2026-Model Fleet', desc: 'Can-Am Maverick R X RS, Polaris RZR PRO R Ultimate with Smart-Shox suspension, turbocharged engines, and daily maintenance checks.' },
    { icon: '🛡️', title: 'Certified Desert Guides', desc: 'Government-licensed guides who know every trail in the Al Badayer and Lahbab Desert regions. Comprehensive safety briefings before every ride.' },
    { icon: '✅', title: 'All-Inclusive Packages', desc: 'Zero hidden costs. Safety gear, instruction, refreshments, sandboarding, camel ride, photo stops, and backup support — all included.' },
    { icon: '💰', title: 'Best Price Guarantee', desc: 'Premium desert experiences starting from AED 399. Transparent pricing with no surprise charges. Group discounts available.' },
    { icon: '📱', title: 'Flexible Booking', desc: 'Instant WhatsApp confirmation, secure online payments, and free cancellation up to 24 hours before departure.' },
    { icon: '📍', title: 'Iconic Red Dunes Location', desc: 'Al Badayer Desert — the most visually stunning and adventurous desert landscape in Dubai with towering crimson-orange dunes.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-cream sand-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              Dubai&apos;s Most Trusted Dune Buggy Tour Operator
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From our latest 2026-model fleet to our certified desert guides, every detail is designed to deliver the most thrilling and safest desert adventure in Dubai.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-500 border border-gray-100 group h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TOUR PACKAGES
   ═══════════════════════════════════════════════════ */
function TourPackages() {
  const badgeColors: Record<string, string> = {
    orange: 'bg-brand-orange text-white',
    gold: 'bg-brand-gold text-white',
    dark: 'bg-brand-dark text-white',
    green: 'bg-green-500 text-white',
    sunrise: 'bg-amber-400 text-brand-dark',
    night: 'bg-indigo-600 text-white',
    sunset: 'bg-gradient-to-r from-orange-500 to-rose-500 text-white',
    blue: 'bg-blue-600 text-white',
    teal: 'bg-teal-500 text-white',
    red: 'bg-red-500 text-white',
  };

  return (
    <section id="tours" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Tour Packages</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              Dune Buggy Dubai Tour Packages & Pricing
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose from our range of self-drive dune buggy tours. Every package includes safety gear, professional guide, refreshments, sandboarding, camel ride, and photo stops.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TOURS.map((tour, i) => (
            <AnimateOnScroll key={tour.id} delay={i * 80}>
              <div className="tour-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 bg-gradient-to-br from-brand-dark to-brand-dark-2 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.imageAlt || tour.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${badgeColors[tour.badgeColor]}`}>
                    {tour.badge}
                  </div>
                  {/* Price overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-brand-orange font-heading font-bold text-xl">{tour.priceDisplay}</div>
                    <div className="text-white/60 text-xs">per buggy</div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-2 leading-tight">{tour.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 rounded-full px-2.5 py-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      {tour.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 rounded-full px-2.5 py-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {tour.persons}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-2.5 py-1">{tour.seater}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{tour.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tour.features.map((f) => (
                      <span key={f} className="text-[11px] font-medium text-brand-orange bg-brand-orange/5 rounded-full px-2.5 py-1">{f}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/dune-buggy-dubai/${tour.slug}`}
                      className="flex-1 text-center border-2 border-brand-orange text-brand-orange font-semibold text-sm py-2.5 px-3 rounded-xl hover:bg-brand-orange hover:text-white transition-all duration-200"
                    >
                      Tour Details
                    </Link>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary justify-center text-sm !py-2.5"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <p className="text-center text-gray-500 text-sm mt-10">
            All prices are per buggy (not per person). Group discounts and corporate packages available.{' '}
            <Link href={SITE.whatsapp} target="_blank" className="text-brand-orange font-semibold hover:underline">Contact us for custom quotes →</Link>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   WHAT'S INCLUDED
   ═══════════════════════════════════════════════════ */
function WhatsIncluded() {
  const iconMap: Record<string, string> = {
    Truck: '🏎️', Clock: '⏱️', Shield: '🛡️', HardHat: '⛑️', ClipboardCheck: '📋',
    GlassWater: '🥤', Snowflake: '🏂', Camel: '🐫', Camera: '📸', Car: '🚗', ParkingCircle: '🅿️',
  };

  return (
    <section className="py-20 md:py-28 bg-brand-cream sand-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">What&apos;s Included</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              Everything Included in Your Tour
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              World-class inclusions at no additional cost. What you see in our pricing is what you pay — guaranteed.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INCLUSIONS.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 60}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-orange/20 hover:shadow-lg transition-all duration-400 group h-full">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{iconMap[item.icon] || '✅'}</div>
                <h3 className="font-bold text-brand-dark text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TOUR HIGHLIGHTS (How It Works)
   ═══════════════════════════════════════════════════ */
function TourHighlights() {
  const steps = [
    { num: '01', title: 'Arrival & Welcome', desc: 'Arrive at our Al Badayer Desert base. Our team greets you with chilled refreshments and walks you through the tour itinerary.', icon: '👋' },
    { num: '02', title: 'Safety Briefing & Gear Up', desc: 'Certified instructor conducts a thorough safety briefing. Helmet fitting, harness adjustment, and vehicle orientation for all skill levels.', icon: '⛑️' },
    { num: '03', title: 'Hit the Dunes', desc: 'Your convoy rolls out into the vast desert. Navigate steep climbs, dramatic drops, sweeping high-speed runs, and tight technical turns.', icon: '🏜️' },
    { num: '04', title: 'Sandboarding & Camel Ride', desc: 'Pause for free sandboarding down towering dunes and a traditional Arabian camel ride through the golden sands.', icon: '🏂' },
    { num: '05', title: 'Photo Stops & Sunset', desc: 'Capture breathtaking panoramic shots at the most photogenic vantage points. Afternoon tours include stunning sunset views.', icon: '📸' },
    { num: '06', title: 'Return & Optional Dinner', desc: 'Freshen up at our facilities with complimentary refreshments. Optional BBQ dinner and live entertainment at the desert camp.', icon: '🍽️' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Tour Highlights</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              Your Desert Adventure — Step by Step
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From the moment you arrive to the final photo stop, every element is designed to exceed expectations.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 100}>
              <div className="relative bg-gradient-to-br from-brand-cream to-white rounded-2xl p-7 border border-gray-100 hover:border-brand-orange/30 transition-all duration-400 group h-full">
                <div className="absolute top-5 right-5 font-heading text-5xl font-bold text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors">{step.num}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   OPTIONAL ADD-ONS
   ═══════════════════════════════════════════════════ */
function OptionalAddOns() {
  const addOns = [
    { icon: '🚐', title: 'Paid Transfer', desc: 'Shared hotel pickup & drop-off from anywhere in Dubai. AED 300 per car.' },
    { icon: '🍖', title: 'BBQ Dinner', desc: 'Authentic Arabian BBQ buffet with grilled meats, salads, bread, and desserts.' },
    { icon: '👨‍🏫', title: 'Private Guide', desc: 'Dedicated personal guide exclusively for your group throughout the tour.' },
    { icon: '📸', title: 'Professional Photos', desc: 'Professional photographer captures every thrilling moment of your adventure.' },
    { icon: '🏍️', title: 'ATV Rides', desc: 'Add a high-performance quad bike ATV ride to your desert adventure package.' },
    { icon: '🚙', title: 'Dune Bashing', desc: 'Heart-pounding 4x4 dune bashing across the towering Al Badayer Red Dunes.' },
    { icon: '🏁', title: 'Dirt Bikes', desc: 'Off-road dirt bike experience for thrill-seekers who want ultimate terrain control.' },
    { icon: '🛍️', title: 'Desert Shopping', desc: 'Browse authentic Arabian souvenirs, handicrafts, and keepsakes at the desert camp.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(232,97,26,0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,168,67,0.2), transparent 50%)`
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">Enhance Your Experience</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Optional Add-Ons
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Customise your desert adventure with premium extras. Ask us when booking.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {addOns.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 60}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-orange/40 hover:bg-white/10 transition-all duration-400 h-full group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Ask About Add-Ons on WhatsApp
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   HOMEPAGE GALLERY
   ═══════════════════════════════════════════════════ */
function HomepageGallery() {
  const galleryImages = [
    { src: '/images/gallery/gallery-1.webp', alt: 'Can-Am Maverick dune buggy on red dunes Dubai', title: 'Can-Am Maverick Action' },
    { src: '/images/gallery/gallery-2.webp', alt: 'Dune buggy convoy Al Badayer Desert Dubai', title: 'Desert Convoy' },
    { src: '/images/gallery/gallery-3.webp', alt: 'Self-drive dune buggy experience Dubai', title: 'Self-Drive Experience' },
    { src: '/images/gallery/gallery-4.webp', alt: 'Desert safari dune bashing Dubai', title: 'Desert Safari' },
    { src: '/images/gallery/gallery-5.webp', alt: 'Dune buggy sunset golden dunes Dubai', title: 'Golden Dunes Ride' },
    { src: '/images/gallery/gallery-6.webp', alt: 'Stage 4 Stunner RZR PRO R dune buggy', title: 'Stage 4 Stunner' },
    { src: '/images/gallery/gallery-7.webp', alt: 'Can-Am dune buggy desert tour Dubai', title: 'Can-Am Desert Tour' },
    { src: '/images/gallery/gallery-8.webp', alt: 'Night dune buggy LED adventure Dubai desert', title: 'Night Riders' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Gallery</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              See the Adventure That Awaits
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Real moments from our dune buggy tours, quad bike rides, and desert safaris across the Al Badayer Red Dunes.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <AnimateOnScroll key={img.src} delay={i * 60}>
              <div className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-white font-bold text-xs md:text-sm">{img.title}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-secondary text-base">
              View Full Gallery →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════
   SERVICES OVERVIEW (Topical Map / Silo)
   ═══════════════════════════════════════════════════ */
function ServicesOverview() {
  const icons: Record<string, string> = { Truck: '🏎️', Bike: '🏍️', Tent: '⛺' };
  return (
    <section className="py-20 md:py-28 bg-brand-cream sand-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              Explore All Dubai Desert Adventures
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your one-stop destination for every desert adventure in Dubai. Dune buggies, quad bikes, and complete desert safari experiences.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((svc, i) => (
            <AnimateOnScroll key={svc.slug} delay={i * 150}>
              <Link href={`/${svc.slug}`} className="block group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-2xl group-hover:shadow-brand-orange/10 transition-all duration-500 h-full">
                  <div className="h-48 bg-gradient-to-br from-brand-dark to-brand-dark-2 flex items-center justify-center relative overflow-hidden">
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-500">{icons[svc.icon]}</div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-brand-orange font-bold text-lg">{svc.price}</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading text-2xl font-bold text-brand-dark mb-1 group-hover:text-brand-orange transition-colors">{svc.title}</h3>
                    <p className="text-brand-orange text-sm font-medium mb-3">{svc.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm group-hover:gap-3 transition-all">
                      Explore Packages
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   BOOKING INFO / CTA
   ═══════════════════════════════════════════════════ */
function BookingCTA() {
  const steps = [
    { num: '1', title: 'Choose Your Package', desc: 'Browse our tours and select the experience that fits your group and schedule.' },
    { num: '2', title: 'Book via WhatsApp', desc: 'Reserve instantly with WhatsApp or online. E-ticket confirmed within minutes.' },
    { num: '3', title: 'Arrive & Ride', desc: 'Show up at our desert base or use our private transfer. Gear up and conquer the dunes!' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">How to Book</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              Book Your Desert Adventure in 3 Simple Steps
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 150}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white font-heading text-2xl font-bold flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand-orange/30">
                  {step.num}
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Big CTA Banner */}
        <AnimateOnScroll>
          <div className="bg-gradient-to-br from-brand-dark via-brand-dark-2 to-brand-dark rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(232,97,26,0.4), transparent 40%), radial-gradient(circle at 70% 60%, rgba(212,168,67,0.3), transparent 40%)`
            }} />
            <div className="relative z-10">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Conquer the Dunes?</h3>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Book your self-drive dune buggy adventure today. Instant confirmation, free cancellation, and memories that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={SITE.whatsapp} target="_blank" className="btn-primary text-lg !py-4 !px-10 animate-pulse-glow">
                  Book Now — WhatsApp
                </Link>
                <Link href={`tel:${SITE.phone}`} className="btn-secondary text-lg !py-4 !px-10">
                  Call {SITE.phoneDisplay}
                </Link>
              </div>
              <p className="text-white/40 text-sm mt-5">No upfront payment required · Free cancellation 24h · Open 24/7</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Key booking info bullets */}
        <AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'No driving licence required — all buggies are automatic',
              'Minimum age: 16 to self-drive, 5+ as passenger',
              'Private hotel transfers available for AED 300',
              'Wear closed-toe shoes and comfortable clothing',
            ].map((info) => (
              <div key={info} className="flex items-start gap-3 bg-brand-cream rounded-xl p-4">
                <span className="text-brand-orange font-bold text-lg mt-0.5">ℹ</span>
                <p className="text-gray-700 text-sm leading-relaxed">{info}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FAQ SECTION
   ═══════════════════════════════════════════════════ */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <section className="py-20 md:py-28 bg-brand-cream sand-pattern relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Everything you need to know about our dune buggy tours in Dubai.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 50}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-bold text-brand-dark text-base pr-6 leading-snug">{faq.q}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-brand-orange text-white rotate-180' : 'bg-brand-cream text-brand-dark'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>
                <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CONTACT / GET IN TOUCH
   ═══════════════════════════════════════════════════ */
function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimateOnScroll>
            <div>
              <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5">
                Contact Buggy Dubai Rental
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our team is available around the clock to help you choose the perfect package and confirm your booking.
              </p>
              <div className="space-y-5">
                {[
                  { icon: '📍', label: 'Office Location', value: 'Palm Jumeirah, Dubai, UAE' },
                  { icon: '📱', label: 'WhatsApp & Phone', value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
                  { icon: '✉️', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: '🌐', label: 'Website', value: 'buggydubairental.com', href: SITE.url },
                  { icon: '🕐', label: 'Operating Hours', value: '24/7 — Monday to Sunday' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-brand-cream rounded-xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-sm text-gray-500 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-bold text-brand-dark hover:text-brand-orange transition-colors">{item.value}</a>
                      ) : (
                        <div className="font-bold text-brand-dark">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-3xl p-8 md:p-10 text-white">
              <h3 className="font-heading text-2xl font-bold mb-2">Quick Enquiry</h3>
              <p className="text-white/50 text-sm mb-6">Fill in your details and we&apos;ll get back to you within minutes.</p>
              <EnquiryForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SEO RICH CONTENT (INTRO WITH IMAGE)
   ═══════════════════════════════════════════════════ */
function SEOContent() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: Image */}
          <AnimateOnScroll>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/images/intro-buggy.webp"
                alt="dune buggy dubai"
                className="w-full h-[400px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                width={1200}
                height={800}
              />
              <div className="absolute top-5 left-5 bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ #1 Rated in Dubai
              </div>
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                <div className="text-xs text-gray-500 font-semibold">FROM</div>
                <div className="text-2xl font-heading font-bold text-brand-orange">AED 399</div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* RIGHT: Content */}
          <AnimateOnScroll delay={150}>
            <div>
              <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                Welcome to Buggy Dubai Rental
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                Dune Buggy Dubai — The Ultimate Self-Drive Desert Adventure
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  A <strong>dune buggy tour in Dubai</strong> is one of the most immersive and visually spectacular outdoor adventures available in the world. The Al Badayer Desert, with its iconic red sand dunes rising to heights of over 100 metres, provides a natural arena for off-road exploration unmatched in the entire Middle East.
                </p>
                <p>
                  At Buggy Dubai Rental, we bring this extraordinary landscape to life through professionally guided, <strong>self-drive dune buggy tours</strong> that combine high-performance off-road vehicles — 1-seater, 2-seater, and 4-seater family buggies — with the stunning beauty of the Arabian desert.
                </p>
                <p>
                  Our fleet includes the legendary <strong>Can-Am Maverick</strong>, the high-performance <strong>Polaris RZR</strong>, and the formidable Stage 4 Stunner — the same models used by professional off-road racers worldwide. With turbocharged engines, Smart-Shox suspension, and automatic transmission, these vehicles deliver an exhilarating desert buggy ride accessible to complete beginners.
                </p>
                <p>
                  For curated travel packages and group bookings, visit our partner site <a href="https://bnbtravelandtours.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange font-semibold hover:underline">BnB Travel and Tours</a> — your gateway to complete Dubai desert tour experiences.
                </p>
              </div>

              {/* Feature badges */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: '✅', text: 'No advance payment' },
                  { icon: '🚐', text: 'Hotel transfer available' },
                  { icon: '🛡️', text: 'Licensed & insured' },
                  { icon: '⭐', text: '5-star guest reviews' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-gray-700">
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book on WhatsApp
                </a>
                <Link href="/prices" className="btn-secondary">View Prices</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   HOW TO BOOK (Homepage Section)
   ═══════════════════════════════════════════════════ */
function HowToBookSection() {
  const steps = [
    { n: '1', icon: '💬', title: 'Message Us on WhatsApp', desc: 'Send a quick message with your preferred tour, date, and number of guests.' },
    { n: '2', icon: '📅', title: 'Choose Tour & Time', desc: 'Pick your buggy, quad, or safari — and your preferred morning, afternoon, or night slot.' },
    { n: '3', icon: '✅', title: 'Get Instant Confirmation', desc: 'We confirm within minutes and send you pickup details and camp location.' },
    { n: '4', icon: '🚐', title: 'We Pick You Up', desc: 'Optional Hotel transfer AED 300 per car — we collect you from anywhere in Dubai.' },
    { n: '5', icon: '💰', title: 'Pay at Desert Camp', desc: 'No advance payment. Pay cash or card on arrival, then enjoy your adventure.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-5">
              How to Book Your Desert Adventure
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Simple 5-step booking process. No advance payment required. Pay at the desert camp before your tour starts.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.n} delay={i * 80}>
              <div className="relative bg-brand-cream rounded-2xl p-6 h-full border border-gray-100 hover:shadow-lg hover:border-brand-orange/30 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange text-white font-bold text-lg flex items-center justify-center shrink-0">{s.n}</div>
                  <div className="text-3xl">{s.icon}</div>
                </div>
                <h3 className="font-bold text-brand-dark text-base mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              📱 Book on WhatsApp Now
            </a>
            <Link href="/how-to-book" className="btn-secondary">
              Read Full Booking Guide →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   HOMEPAGE ASSEMBLY
   ═══════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SEOContent />
      <TourPackages />
      <HowToBookSection />
      <WhyChooseUs />
      <WhatsIncluded />
      <TourHighlights />
      <OptionalAddOns />
      <HomepageGallery />
      <ServicesOverview />
      <BookingCTA />
      <FAQSection />
      <ContactSection />
    </>
  );
}

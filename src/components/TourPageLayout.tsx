'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface TourFAQ {
  q: string;
  a: string;
}

interface TourPageProps {
  name: string;
  breadcrumbParent: { label: string; href: string };
  tagline: string;
  price: string;
  duration: string;
  seater: string;
  persons: string;
  difficulty: string;
  heroImage: string;
  galleryImages: string[];
  overview: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  importantInfo: string[];
  whyChoose: { title: string; desc: string }[];
  perfectFor: string[];
  faqs: TourFAQ[];
  relatedTours: { name: string; href: string; price: string; image: string }[];
  partnerAnchor?: string;
}

export default function TourPageLayout(props: TourPageProps) {
  const {
    name, breadcrumbParent, tagline, price, duration, seater, persons, difficulty,
    heroImage, galleryImages, overview, highlights, inclusions, exclusions,
    importantInfo, whyChoose, perfectFor, faqs, relatedTours, partnerAnchor,
  } = props;

  const [activeImg, setActiveImg] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO - Image Slider */}
      <section className="pt-20 md:pt-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/50 mb-4 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span>/</span>
            <Link href={breadcrumbParent.href} className="hover:text-brand-orange transition-colors">{breadcrumbParent.label}</Link>
            <span>/</span>
            <span className="text-brand-orange">{name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
            {/* Left - Images */}
            <div>
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-3">
                <img
                  src={galleryImages[activeImg] || heroImage}
                  alt={name}
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
                {/* Prev/Next arrows */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImg(i => (i - 1 + galleryImages.length) % galleryImages.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-brand-orange rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setActiveImg(i => (i + 1) % galleryImages.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-brand-orange rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? 'border-brand-orange' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Booking Card */}
            <div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">{name}</h1>
              <p className="text-white/60 text-lg mb-6">{tagline}</p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: '⏱️', label: 'Duration', value: duration },
                  { icon: '🪑', label: 'Seating', value: seater },
                  { icon: '👥', label: 'Persons', value: persons },
                  { icon: '⚡', label: 'Difficulty', value: difficulty },
                ].map(s => (
                  <div key={s.label} className="bg-white/10 rounded-xl px-4 py-3">
                    <div className="text-white/50 text-xs mb-0.5">{s.icon} {s.label}</div>
                    <div className="text-white font-semibold text-sm">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="bg-white/10 rounded-2xl p-6 mb-4">
                <div className="flex items-end gap-2 mb-4">
                  <div className="text-4xl font-heading font-bold text-brand-orange">{price}</div>
                  <div className="text-white/50 text-sm mb-1">per buggy / vehicle</div>
                </div>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-lg !py-4 mb-3"
                >
                  📱 Book on WhatsApp
                </a>
                <p className="text-white/40 text-xs text-center">✅ No advance payment · Pay at camp · Free cancellation 24h</p>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: '✅', text: 'Instant Confirmation' },
                  { icon: '🛡️', text: 'Safety Certified' },
                  { icon: '🚐', text: 'Hotel Transfer Available' },
                  { icon: '🌟', text: '5-Star Rated' },
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-2 text-white/60 text-xs">
                    <span>{b.icon}</span><span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left - Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Highlights */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6">Highlights</h2>
                  <ul className="space-y-3">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Overview */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6">Overview</h2>
                  <div className="space-y-4">
                    {overview.map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-sm md:text-base">{para}</p>
                    ))}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Browse all our tours on the <Link href="/" className="text-brand-orange font-semibold hover:underline">Buggy Dubai Rental homepage</Link>, or explore our full <Link href="/dune-buggy-dubai" className="text-brand-orange font-semibold hover:underline">dune buggy</Link>, <Link href="/quad-bike-dubai" className="text-brand-orange font-semibold hover:underline">quad bike</Link>, and <Link href="/desert-safari-dubai" className="text-brand-orange font-semibold hover:underline">desert safari</Link> collections.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Inclusions & Exclusions */}
              <AnimateOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="font-heading text-xl font-bold text-brand-dark mb-5 flex items-center gap-2">
                      <span className="text-green-500">✅</span> Inclusions
                    </h2>
                    <ul className="space-y-2.5">
                      {inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="font-heading text-xl font-bold text-brand-dark mb-5 flex items-center gap-2">
                      <span className="text-red-500">❌</span> Exclusions
                    </h2>
                    <ul className="space-y-2.5">
                      {exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                          </svg>
                          {exc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Why Choose */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6">Why Choose This Tour</h2>
                  <div className="space-y-5">
                    {whyChoose.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 text-brand-orange font-bold">{i + 1}</div>
                        <div>
                          <h3 className="font-bold text-brand-dark mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Perfect For */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6">Perfect For</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {perfectFor.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-brand-cream rounded-xl px-4 py-3">
                        <svg className="w-4 h-4 text-brand-orange shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Important Info */}
              <AnimateOnScroll>
                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                  <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                    <span>⚠️</span> Important Information
                  </h2>
                  <ul className="space-y-2.5">
                    {importantInfo.map((info, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* FAQ */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-brand-cream/50 transition-colors"
                        >
                          <span className="font-semibold text-brand-dark text-sm pr-4">{faq.q}</span>
                          <svg className={`w-5 h-5 text-brand-orange shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                          </svg>
                        </button>
                        {openFaq === i && (
                          <div className="px-5 pb-5">
                            <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

            </div>

            {/* Right Sidebar - Sticky Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                {/* Booking Card */}
                <div className="bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-2xl p-6 text-white">
                  <div className="text-brand-orange text-sm font-semibold mb-1">Starting from</div>
                  <div className="text-4xl font-heading font-bold mb-4">{price}</div>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center !py-4 text-base mb-3"
                  >
                    📱 Book on WhatsApp
                  </a>
                  <Link href="/prices" className="block text-center text-white/60 text-sm hover:text-brand-orange transition-colors mb-4">
                    View All Prices →
                  </Link>
                  <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-white/50">
                    <div className="flex items-center gap-2"><span>✅</span> No advance payment</div>
                    <div className="flex items-center gap-2"><span>🚐</span> Hotel transfer AED 300</div>
                    <div className="flex items-center gap-2"><span>🔄</span> Free cancellation 24hrs</div>
                    <div className="flex items-center gap-2"><span>💰</span> Pay at camp</div>
                  </div>
                </div>

                {/* How to Book */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-brand-dark mb-4">How to Book</h3>
                  <ol className="space-y-3">
                    {[
                      'Click Book on WhatsApp',
                      'Choose your tour date & time',
                      'Share guest count & hotel',
                      'Get instant confirmation',
                      'We pick you up & you pay at camp',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <Link href="/how-to-book" className="block text-center text-brand-orange text-sm font-semibold mt-4 hover:underline">
                    Full Booking Guide →
                  </Link>
                </div>

                {/* Internal Links */}
                <div className="bg-brand-cream rounded-2xl p-6">
                  <h3 className="font-bold text-brand-dark mb-4 text-sm">Explore More</h3>
                  <div className="space-y-2">
                    {[
                      { label: '🏠 Back to Homepage', href: '/' },
                      { label: '🏎️ All Dune Buggy Tours', href: '/dune-buggy-dubai' },
                      { label: '🏍️ Quad Bike Dubai', href: '/quad-bike-dubai' },
                      { label: '🌅 Desert Safari Dubai', href: '/desert-safari-dubai' },
                      { label: '💰 View All Prices', href: '/prices' },
                    ].map(l => (
                      <Link key={l.href} href={l.href} className="block text-sm text-gray-600 hover:text-brand-orange transition-colors py-1 border-b border-gray-200 last:border-0">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTours.map((tour, i) => (
                  <Link key={i} href={tour.href} className="group block bg-brand-cream rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                    <div className="h-44 overflow-hidden">
                      <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={500} />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-brand-dark mb-1 text-sm group-hover:text-brand-orange transition-colors">{tour.name}</h3>
                      <div className="text-brand-orange font-bold">{tour.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-dark to-brand-dark-2 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Desert Adventure?</h2>
            <p className="text-white/60 text-lg mb-8">Book now on WhatsApp. No advance payment. Pay at the camp before your tour starts.</p>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg !px-10 !py-4">
              Book on WhatsApp Now
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

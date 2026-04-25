import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "How to Book | Easy Booking Process | Buggy Dubai Rental",
  description: "Simple 5-step booking process. No advance payment. Book via WhatsApp. Hotel transfer AED 300 per car. Pay at camp.",
  alternates: { canonical: `${SITE.url}/how-to-book` },
};

export default function HowToBookPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">How to Book</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">How to Book</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            Simple 5-step process. No advance payment. Book in 2 minutes via WhatsApp.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      <section className="py-12 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-500 text-green-700 font-bold px-6 py-3 rounded-full">
            ✅ No Advance Payment Required
          </div>
          <p className="text-gray-600 mt-4">Pay at desert camp before tour starts</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-brand-dark mb-12 text-center">Booking Steps</h2>
          <div className="space-y-8">
            {[
              { step: '1', icon: '💬', title: 'Contact on WhatsApp', desc: 'Send message to +971 58 507 2674. Tell us tour type and date.' },
              { step: '2', icon: '📅', title: 'Choose Tour & Time', desc: 'Select from dune buggy, quad, or safari. Pick morning/afternoon/night.' },
              { step: '3', icon: '👥', title: 'Provide Details', desc: 'Share guest count, ages, hotel name for pickup.' },
              { step: '4', icon: '✅', title: 'Get Confirmation', desc: 'Instant confirmation with pickup time and details.' },
              { step: '5', icon: '🚙', title: 'Pickup & Payment', desc: 'We pick you up (AED 300 transfer). Pay at camp before tour.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-brand-cream rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-brand-orange text-white font-bold text-xl flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="font-heading text-xl font-bold text-brand-dark">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-dark to-brand-dark-2 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Ready to Book?</h2>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
            Book on WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}

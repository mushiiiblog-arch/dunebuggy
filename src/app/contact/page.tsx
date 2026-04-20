import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ContactForm from '@/components/ContactForm';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact Us | Buggy Dubai Rental — Book Your Desert Adventure',
  description: 'Contact Buggy Dubai Rental. Book dune buggy tours, quad bike rides & desert safaris in Dubai. WhatsApp: +971 58 595 3195. Open 24/7. Palm Jumeirah, Dubai, UAE.',
  alternates: { canonical: `${SITE.url}/contact` },
};

const contactItems = [
  { icon: '📍', label: 'Office Location', value: '446W+88X Palm Jumeirah, Dubai, UAE', href: undefined },
  { icon: '📱', label: 'WhatsApp & Phone', value: '+971 58 595 3195', href: 'tel:+971585953195' },
  { icon: '✉️', label: 'Email', value: 'info@dunebuggydubai.online', href: 'mailto:info@dunebuggydubai.online' },
  { icon: '🌐', label: 'Website', value: 'buggydubairental.com', href: 'https://buggydubairental.com' },
  { icon: '🕐', label: 'Operating Hours', value: '24/7 — Monday to Sunday', href: undefined },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">Contact Us</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
            Our team is available 24/7 to answer questions, help you choose the perfect package, and confirm your booking.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-brand-cream sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — contact info */}
            <AnimateOnScroll>
              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-dark mb-8">Get in Touch</h2>
                <div className="space-y-5 mb-10">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
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
                {/* Map placeholder */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p className="text-sm font-medium">Google Maps — Palm Jumeirah, Dubai</p>
                      <p className="text-xs mt-1">Add your Google Maps embed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right — client form component */}
            <AnimateOnScroll delay={200}>
              <div className="bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-3xl p-8 md:p-10 text-white sticky top-32">
                <h3 className="font-heading text-2xl font-bold mb-2">Send Us a Message</h3>
                <p className="text-white/50 text-sm mb-6">We respond within minutes during business hours.</p>
                <ContactForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

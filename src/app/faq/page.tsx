import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, FAQS } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import FAQAccordion from '@/components/FAQAccordion';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "FAQ | Dune Buggy Dubai Questions Answered | Buggy Dubai Rental",
  description: "Frequently asked questions about dune buggy tours, quad bike rides, and desert safaris in Dubai. Age requirements, pricing, safety, cancellation policy and more.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const extraFaqs = [
  { q: 'What types of dune buggies do you offer?', a: 'Our fleet includes the Can-Am Maverick R X RS (2026), Can-Am Maverick XRS (2026), and Polaris RZR PRO R Ultimate EPS (Stage 4 Stunner). Available in 1-seater, 2-seater, and 4-seater configurations with engines of 1000cc and above. All buggies feature automatic transmission, advanced suspension, and full safety equipment.' },
  { q: 'What tour times are available?', a: 'We offer three daily departure windows: Morning (Early Bird) tours at sunrise for cooler temperatures, Afternoon (Red Dunes) tours for golden-hour photography, and Night (Night Riders) tours for LED-illuminated desert driving. Exact times vary by season and are confirmed upon booking.' },
  { q: 'Is a dune buggy tour suitable for complete beginners?', a: 'Absolutely. Most of our guests are first-time riders. Our buggies are fully automatic with simple controls. Our instructor provides a detailed briefing and adjusts the route pace to your comfort level. You will feel confident within minutes.' },
  { q: 'What happens if the weather is bad on my tour day?', a: 'In rare cases of severe weather (sandstorms, heavy rain), we may postpone tours for safety reasons. You will be offered a free reschedule or full refund. Our team notifies you as early as possible.' },
  { q: 'Are there health restrictions for dune buggy tours?', a: 'We advise against participation for individuals with serious heart conditions, back or neck injuries, epilepsy, or conditions aggravated by off-road vibration. Please consult your doctor if you have any medical concerns.' },
  { q: 'Can I bring my own camera or GoPro?', a: 'Yes! We encourage you to bring cameras and GoPros to capture your adventure. Ensure all devices are securely attached before the ride. Our guides will help identify the best photo and video spots.' },
];

const allFaqs = [...FAQS, ...extraFaqs];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">FAQ</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
            Everything you need to know about our dune buggy tours, quad bike rides, and desert safari experiences in Dubai.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-28 bg-brand-cream sand-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="inline-block text-brand-orange font-semibold text-sm tracking-[0.2em] uppercase mb-3">FAQ</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5">Your Questions Answered</h2>
              <p className="text-gray-600 text-lg">
                {allFaqs.length} questions answered. Still need help?{' '}
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-orange font-semibold hover:underline">
                  Chat with us on WhatsApp
                </a>
              </p>
            </div>
          </AnimateOnScroll>

          <FAQAccordion faqs={allFaqs} />

          <div className="mt-12 bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
            <p className="text-white/50 mb-6">Our team is available 24/7 and happy to help.</p>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

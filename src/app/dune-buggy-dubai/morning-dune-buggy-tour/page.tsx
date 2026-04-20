import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Morning Dune Buggy Tour | Dune Buggy Dubai',
  description: 'Self-drive Morning Dune Buggy Tour. AED 450. Safety gear included.',
  alternates: { canonical: `${SITE.url}/dune-buggy-dubai/morning-dune-buggy-tour` },
};

export default function Page() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460]" />
        <img src="/images/tours/stage4-stunner-card.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <Link href="/dune-buggy-dubai">Dune Buggy</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">Morning Dune Buggy Tour</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Morning Dune Buggy Tour</h1>
          <p className="text-white/60 text-lg max-w-3xl mb-8">Self-drive buggy adventure across Al Badayer red dunes.</p>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Book - AED 450</a>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-600">Ultimate <a href={SITE.partnerLink} className="text-brand-orange font-semibold hover:underline">dune buggy tour</a> experience.</p>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-brand-dark to-brand-dark-2 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">Book Now</a>
          <div className="mt-8 text-white/40 text-sm">
            <Link href="/">Home</Link> • <Link href="/prices">Prices</Link> • <Link href="/how-to-book">How to Book</Link>
          </div>
        </div>
      </section>
    </>
  );
}

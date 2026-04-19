'use client';
import { SITE } from '@/data/siteData';

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-white text-xs md:text-sm overflow-hidden relative z-50">
      <div className="ticker-wrap py-2">
        <div className="ticker whitespace-nowrap">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-brand-orange font-semibold">★ Dune Buggy Tours From AED 399</span>
              <span className="opacity-40">|</span>
              <span>Free Cancellation (24 Hrs)</span>
              <span className="opacity-40">|</span>
              <span className="text-brand-gold">Book Now & Pay Later</span>
              <span className="opacity-40">|</span>
              <span>☎ {SITE.phoneDisplay}</span>
              <span className="opacity-40">|</span>
              <span>Can-Am Maverick & Polaris RZR Fleet</span>
              <span className="opacity-40">|</span>
              <span className="text-brand-orange font-semibold">★ Open 24/7 — 365 Days</span>
              <span className="opacity-40 mr-8">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

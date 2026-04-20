'use client';
import Link from 'next/link';
import { SITE } from '@/data/siteData';

const quickLinks = [
  { label: 'Dune Buggy Dubai', href: '/dune-buggy-dubai' },
  { label: 'Quad Bike Dubai', href: '/quad-bike-dubai' },
  { label: 'Desert Safari Dubai', href: '/desert-safari-dubai' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

const tourLinks = [
  { label: "Can-Am Maverick R X RS '26", href: '/dune-buggy-dubai/can-am-maverick-r-x-rs-26' },
  { label: 'Can-Am Maverick XRS 26', href: '/dune-buggy-dubai/can-am-maverick-xrs-26' },
  { label: 'Stage 4 Stunner: RZR PRO R', href: '/dune-buggy-dubai/stage-4-stunner-rzr-pro-r-ultimate' },
  { label: 'Desert Combo Tour', href: '/dune-buggy-dubai/desert-combo-sharing-safari-dune-buggy' },
  { label: 'Early Bird Buggy Tour', href: '/dune-buggy-dubai/early-bird-buggy-tour' },
  { label: 'Night Riders Tour', href: '/dune-buggy-dubai/night-riders-dune-buggy-dubai' },
  { label: 'Red Dunes Afternoon', href: '/dune-buggy-dubai/red-dunes-afternoon-buggies' },
];

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      {/* Desert dunes SVG at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0 80V40C120 20 240 0 360 10C480 20 600 50 720 55C840 60 960 35 1080 25C1200 15 1320 25 1380 30L1440 35V80H0Z" fill="#FEFCF6"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.3"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Buggy Dubai Rental</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Dubai&apos;s premier self-drive dune buggy tour operator. Experience the thrill of the Al Badayer Red Dunes with our world-class Can-Am and Polaris fleet.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-white/70 hover:text-brand-orange transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white/70 hover:text-brand-orange transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                {SITE.email}
              </a>
              <p className="flex items-start gap-2 text-white/70">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Palm Jumeirah, Dubai, UAE
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5 text-brand-gold">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-brand-orange hover:pl-1 transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5 text-brand-gold">Tour Packages</h3>
            <ul className="space-y-2.5">
              {tourLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-brand-orange hover:pl-1 transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & CTA */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5 text-brand-gold">Opening Hours</h3>
            <div className="bg-white/5 rounded-2xl p-5 mb-5">
              <div className="text-sm space-y-2">
                <div className="flex justify-between"><span className="text-white/60">Monday – Sunday</span><span className="text-brand-orange font-semibold">24/7</span></div>
                <div className="flex justify-between"><span className="text-white/60">Including Holidays</span><span className="text-green-400 font-semibold">Open</span></div>
              </div>
            </div>
            <Link href={SITE.whatsapp} target="_blank" className="btn-primary w-full justify-center text-sm !py-3">
              Book on WhatsApp
            </Link>
            <p className="text-white/40 text-xs mt-3 text-center">Instant confirmation · Free cancellation 24h</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

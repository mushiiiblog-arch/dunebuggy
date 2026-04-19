'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, SITE } from '@/data/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ top: scrolled ? 0 : '36px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center shadow-lg group-hover:shadow-brand-orange/30 transition-shadow">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-7 md:h-7 text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.3"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className={`font-heading font-bold text-lg md:text-xl leading-tight transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              Buggy Dubai
            </div>
            <div className={`text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-brand-orange' : 'text-brand-gold'}`}>
              Rental
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-brand-orange/10 ${
                  scrolled ? 'text-brand-dark hover:text-brand-orange' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && (
                  <svg className="inline-block ml-1 w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 min-w-[280px]">
                  <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-brand-sand-light hover:text-brand-orange transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href={SITE.whatsapp} target="_blank" className="hidden md:inline-flex btn-primary text-sm !py-2.5 !px-5">
            Book Now
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-brand-dark hover:bg-brand-sand-light hover:text-brand-orange transition-all"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-brand-orange transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href={SITE.whatsapp} target="_blank" className="btn-primary w-full justify-center">
                Book Now on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

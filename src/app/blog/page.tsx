import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Blog | Dubai Desert Adventure Tips & Guides | Buggy Dubai Rental",
  description: "Expert tips, guides, and insider knowledge about dune buggy tours, quad biking, and desert safaris in Dubai. Plan the perfect desert adventure.",
  alternates: { canonical: `${SITE.url}/blog` },
};

const blogPosts = [
  { slug: 'top-10-things-to-do-in-dubai-desert', title: 'Top 10 Things to Do in Dubai Desert (2026 Guide)', excerpt: 'From dune buggy tours and quad biking to overnight camping and camel rides — discover the most exciting desert activities Dubai has to offer.', category: 'Guides', date: 'April 2026' },
  { slug: 'dune-buggy-vs-quad-bike', title: 'Dune Buggy vs Quad Bike: Which Desert Adventure Is Right for You?', excerpt: 'Comparing the two most popular off-road desert experiences in Dubai. Learn the differences, pros, and cons to make the best choice.', category: 'Comparison', date: 'March 2026' },
  { slug: 'best-time-for-dune-buggy-tour-dubai', title: 'Best Time for a Dune Buggy Tour in Dubai (Season Guide)', excerpt: 'Morning, afternoon, or night? Summer or winter? A complete guide to choosing the perfect time for your desert buggy adventure.', category: 'Tips', date: 'March 2026' },
  { slug: 'what-to-wear-desert-safari-dubai', title: 'What to Wear for a Desert Safari in Dubai — Complete Packing Guide', excerpt: 'Essential clothing and gear recommendations for your desert adventure. Stay comfortable, safe, and photo-ready on the dunes.', category: 'Tips', date: 'February 2026' },
  { slug: 'is-dune-buggy-riding-safe', title: 'Is Dune Buggy Riding in Dubai Safe? Everything You Need to Know', excerpt: 'A detailed look at safety standards, vehicle features, guide certifications, and what to expect during your dune buggy tour.', category: 'Safety', date: 'February 2026' },
  { slug: 'can-am-maverick-vs-polaris-rzr', title: 'Can-Am Maverick vs Polaris RZR: Which Desert Buggy Is Better?', excerpt: 'A head-to-head comparison of the two most popular dune buggy brands used in Dubai desert tours.', category: 'Comparison', date: 'January 2026' },
  { slug: 'dubai-desert-safari-complete-guide', title: 'Dubai Desert Safari: A Complete Guide for First-Time Visitors', excerpt: 'Everything first-timers need to know about booking, preparing for, and enjoying a desert safari experience in Dubai.', category: 'Guides', date: 'January 2026' },
  { slug: 'dune-buggy-dubai-prices-guide', title: 'How Much Does a Dune Buggy Ride Cost in Dubai? (2026 Pricing Guide)', excerpt: 'A transparent breakdown of dune buggy tour prices in Dubai, what affects the cost, and how to get the best value.', category: 'Pricing', date: 'December 2025' },
  { slug: 'morning-vs-evening-desert-safari', title: 'Morning vs Evening Desert Safari: Which Should You Choose?', excerpt: 'Comparing the two most popular safari timings to help you decide which experience suits your preferences.', category: 'Comparison', date: 'December 2025' },
  { slug: 'family-friendly-desert-activities-dubai', title: 'Family-Friendly Desert Activities in Dubai — Fun for All Ages', excerpt: 'The best desert experiences for families with children, including age-appropriate activities and safety considerations.', category: 'Guides', date: 'November 2025' },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="breadcrumb-nav text-sm text-white/50 mb-6">
            <Link href="/">Home</Link> <span className="mx-2">/</span>
            <span className="text-brand-orange">Blog</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Desert Adventure Blog</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
            Expert tips, guides, and insider knowledge to help you plan the perfect desert adventure in Dubai.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z" fill="#FEFCF6"/>
          </svg>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-cream sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={Math.min(i * 60, 360)}>
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-500 h-full flex flex-col group">
                  <div className="h-48 overflow-hidden relative bg-gradient-to-br from-brand-dark to-brand-dark-2">
                    <img
                      src={`/images/gallery/gallery-${(i % 7) + 1}.webp`}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                      width={800}
                      height={500}
                    />
                    <span className="absolute top-4 left-4 bg-brand-orange/90 text-white text-xs font-bold tracking-wider rounded-full px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-gray-400 text-xs mb-2">{post.date}</span>
                    <h2 className="font-heading text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

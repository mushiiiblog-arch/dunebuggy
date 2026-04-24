import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/siteData';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Prices | Dune Buggy, Quad Bike & Desert Safari Pricing | Buggy Dubai Rental",
  description: "Complete pricing guide for dune buggy tours, quad bike rentals, and desert safari packages in Dubai. Transparent rates from AED 150 to AED 1,499. No hidden fees. Book now!",
  alternates: { canonical: `${SITE.url}/prices` },
};

export default function PricesPage() {
  return (
    <>
      {/* Hero */}
      <section className=\"relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-brand-dark via-[#16213E] to-[#0F3460] overflow-hidden\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10\">
          <nav className=\"breadcrumb-nav text-sm text-white/50 mb-6\">
            <Link href=\"/\">Home</Link> <span className=\"mx-2\">/</span>
            <span className=\"text-brand-orange\">Prices</span>
          </nav>
          <h1 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6\">
            Tour Prices & Packages
          </h1>
          <p className=\"text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed\">
            Transparent pricing for all dune buggy tours, quad bike rentals, and desert safari packages. No hidden fees, no surprise charges.
          </p>
        </div>
        <div className=\"absolute bottom-0 left-0 right-0\">
          <svg viewBox=\"0 0 1440 100\" fill=\"none\" preserveAspectRatio=\"none\" className=\"w-full h-16 md:h-24\">
            <path d=\"M0 100V60C200 30 400 10 600 20C800 30 1000 60 1200 50C1400 40 1440 50 1440 50V100H0Z\" fill=\"#FEFCF6\"/>
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className=\"py-12 bg-brand-cream\">
        <div className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8\">
          <AnimateOnScroll>
            <div className=\"text-center\">
              <p className=\"text-gray-600 leading-relaxed mb-4\">
                At Buggy Dubai Rental, we believe in transparent pricing with no hidden costs. All our <a href={SITE.partnerLink} className=\"text-brand-orange font-semibold hover:underline\">dune buggy tour</a> packages include safety gear, professional guides, refreshments, and desert activities like sandboarding and camel rides.
              </p>
              <p className=\"text-gray-600 leading-relaxed\">
                Need help choosing? <Link href=\"/how-to-book\" className=\"text-brand-orange font-semibold hover:underline\">Learn how to book</Link> or <a href={SITE.whatsapp} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-brand-orange font-semibold hover:underline\">chat with us on WhatsApp</a>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Dune Buggy Prices */}
      <section className=\"py-20 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <AnimateOnScroll>
            <h2 className=\"font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-3 text-center\">Dune Buggy Rental Packages</h2>
            <p className=\"text-gray-600 text-center mb-10 max-w-3xl mx-auto\">
              Experience the thrill of self-drive dune buggy adventures in Dubai's Al Badayer Desert. Our fleet includes the latest Can-Am Maverick and Polaris RZR models with automatic transmission, making them perfect for both beginners and experienced riders. Each <a href={SITE.partnerLink} className=\"text-brand-orange font-semibold hover:underline\">buggy ride Dubai</a> package includes comprehensive safety equipment, professional desert guide, refreshments, sandboarding, and camel riding opportunities.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className=\"overflow-x-auto\">
              <table className=\"w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm\">
                <thead className=\"bg-brand-dark text-white\">
                  <tr>
                    <th className=\"px-6 py-4 text-left font-bold\">Package Name</th>
                    <th className=\"px-6 py-4 text-left font-bold\">Seater Type</th>
                    <th className=\"px-6 py-4 text-left font-bold\">Persons</th>
                    <th className=\"px-6 py-4 text-left font-bold\">Duration</th>
                    <th className=\"px-6 py-4 text-right font-bold\">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=\"border-b border-gray-100 hover:bg-brand-cream/30 transition-colors\">
                    <td className=\"px-6 py-4 font-semibold text-brand-dark\">Can-Am Maverick R X RS "26</td>
                    <td className="px-6 py-4 text-gray-600">2-4 seater</td>
                    <td className="px-6 py-4 text-gray-600">2-4 persons</td>
                    <td className="px-6 py-4 text-gray-600">60 Min Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 999</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Can-Am Maverick XRS 26</td>
                    <td className="px-6 py-4 text-gray-600">2-4 seater</td>
                    <td className="px-6 py-4 text-gray-600">2-4 persons</td>
                    <td className="px-6 py-4 text-gray-600">60 Min Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 800</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Stage 4 Stunner: RZR PRO R Ultimate EPS</td>
                    <td className="px-6 py-4 text-gray-600">4-seater</td>
                    <td className="px-6 py-4 text-gray-600">4 persons</td>
                    <td className="px-6 py-4 text-gray-600">60 Min Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 1,499</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Desert Combo: Sharing Safari + Dune Buggy</td>
                    <td className="px-6 py-4 text-gray-600">2-seater</td>
                    <td className="px-6 py-4 text-gray-600">1 person</td>
                    <td className="px-6 py-4 text-gray-600">30-Minute Dune Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 399</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Early Bird Buggy Tour</td>
                    <td className="px-6 py-4 text-gray-600">1, 2 & 4 seater</td>
                    <td className="px-6 py-4 text-gray-600">1-4 persons</td>
                    <td className="px-6 py-4 text-gray-600">60 Min Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Night Riders: Dune Buggy Dubai Adventure</td>
                    <td className="px-6 py-4 text-gray-600">1, 2 & 4 seater</td>
                    <td className="px-6 py-4 text-gray-600">1-4 persons</td>
                    <td className="px-6 py-4 text-gray-600">60 Min Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Red Dunes Afternoon Buggies</td>
                    <td className="px-6 py-4 text-gray-600">1, 2 & 4 seater</td>
                    <td className="px-6 py-4 text-gray-600">1-4 persons</td>
                    <td className="px-6 py-4 text-gray-600">60 Min Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 500</td>
                  </tr>
                  <tr className="hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Red Dunes Buggy Ride + Shared Transfer</td>
                    <td className="px-6 py-4 text-gray-600">1, 2 & 4 seater</td>
                    <td className="px-6 py-4 text-gray-600">1-4 persons</td>
                    <td className="px-6 py-4 text-gray-600">60 Min Buggy Ride</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Polaris RZR Specific Prices */}
          <AnimateOnScroll delay={200}>
            <h3 className="font-heading text-2xl font-bold text-brand-dark mt-16 mb-6">Polaris RZR Dune Buggy Prices</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <thead className="bg-gradient-to-r from-brand-dark to-brand-dark-2 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Package</th>
                    <th className="px-6 py-4 text-left font-bold">Persons</th>
                    <th className="px-6 py-4 text-left font-bold">Model</th>
                    <th className="px-6 py-4 text-left font-bold">Type and CC</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-right font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">1 Seater Dune Buggy Early Morning</td>
                    <td className="px-6 py-4 text-gray-600">1 Person</td>
                    <td className="px-6 py-4 text-gray-600">Polaris RZR SPORT EPS</td>
                    <td className="px-6 py-4 text-gray-600">1000 CC</td>
                    <td className="px-6 py-4 text-gray-600">60 Min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold">AED 500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">2 Seater Dune Buggy Early Morning</td>
                    <td className="px-6 py-4 text-gray-600">2 Persons</td>
                    <td className="px-6 py-4 text-gray-600">Polaris RZR SPORT EPS</td>
                    <td className="px-6 py-4 text-gray-600">1000 CC</td>
                    <td className="px-6 py-4 text-gray-600">60 Min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold">AED 500</td>
                  </tr>
                  <tr className="hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">4 Seater Dune Buggy Early Morning</td>
                    <td className="px-6 py-4 text-gray-600">4 Persons</td>
                    <td className="px-6 py-4 text-gray-600">Polaris RZR SPORT EPS</td>
                    <td className="px-6 py-4 text-gray-600">1000 CC</td>
                    <td className="px-6 py-4 text-gray-600">60 Min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold">AED 500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Can-Am Maverick Prices */}
          <AnimateOnScroll delay={300}>
            <h3 className="font-heading text-2xl font-bold text-brand-dark mt-16 mb-6">Can-Am Maverick Dune Buggy Prices</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <thead className="bg-gradient-to-r from-brand-orange to-amber-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Package</th>
                    <th className="px-6 py-4 text-left font-bold">Persons</th>
                    <th className="px-6 py-4 text-left font-bold">Model</th>
                    <th className="px-6 py-4 text-left font-bold">Type and CC</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-right font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">2 Seater Can-Am Dune Buggy</td>
                    <td className="px-6 py-4 text-gray-600">1-2 Person</td>
                    <td className="px-6 py-4 text-gray-600">Maverick R X RS 2026 Smart-Shox</td>
                    <td className="px-6 py-4 text-gray-600">1000 CC</td>
                    <td className="px-6 py-4 text-gray-600">60 Min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold">AED 999</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">4 Seater Can-Am Dune Buggy</td>
                    <td className="px-6 py-4 text-gray-600">4 Persons</td>
                    <td className="px-6 py-4 text-gray-600">Maverick R X RS 2026 Smart-Shox</td>
                    <td className="px-6 py-4 text-gray-600">1000 CC</td>
                    <td className="px-6 py-4 text-gray-600">60 Min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold">AED 1,300</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">2 Seater Can-Am Dune Buggy</td>
                    <td className="px-6 py-4 text-gray-600">2 Persons</td>
                    <td className="px-6 py-4 text-gray-600">Can-Am Maverick XRS 26</td>
                    <td className="px-6 py-4 text-gray-600">1000 CC</td>
                    <td className="px-6 py-4 text-gray-600">60 Min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold">AED 800</td>
                  </tr>
                  <tr className="hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">4 Seater Can-Am Dune Buggy</td>
                    <td className="px-6 py-4 text-gray-600">4 Persons</td>
                    <td className="px-6 py-4 text-gray-600">Can-Am Maverick XRS 26</td>
                    <td className="px-6 py-4 text-gray-600">1000 CC</td>
                    <td className="px-6 py-4 text-gray-600">60 Min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold">AED 1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Quad Bike Prices */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-3 text-center">Quad Bike Tour Prices</h2>
            <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              Our quad bike rental packages offer high-performance ATV adventures across the dramatic red dunes of Dubai. Available in 1-seater and 2-seater configurations, our quad bikes are perfect for solo adventurers, couples, and families seeking an adrenaline-pumping desert experience. Every package includes professional guidance, comprehensive safety equipment, and complimentary refreshments.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <thead className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Package Name</th>
                    <th className="px-6 py-4 text-left font-bold">Seater Type</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-right font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Yamaha 700cc Raptor</td>
                    <td className="px-6 py-4 text-gray-600">1-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Desert Combo: Sharing Safari + Quad</td>
                    <td className="px-6 py-4 text-gray-600">1-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 199</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Early Bird Quad Bike Tour</td>
                    <td className="px-6 py-4 text-gray-600">1-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 150</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Early Bird Quad Bike Tour</td>
                    <td className="px-6 py-4 text-gray-600">2-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 200</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Afternoon Quad Bike Tour</td>
                    <td className="px-6 py-4 text-gray-600">1-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 150</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Afternoon Quad Bike Tour</td>
                    <td className="px-6 py-4 text-gray-600">2-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 200</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Red Dunes Quad Tour + Shared Transfer</td>
                    <td className="px-6 py-4 text-gray-600">1-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 250</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Red Dunes Quad Tour + Shared Transfer</td>
                    <td className="px-6 py-4 text-gray-600">2-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 300</td>
                  </tr>
                  <tr className="hover:bg-brand-cream/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Yamaha 700cc Raptor + Shared Transfer</td>
                    <td className="px-6 py-4 text-gray-600">1-seater</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Desert Safari Prices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-3 text-center">Desert Safari Tour Prices</h2>
            <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              Experience the complete Dubai desert adventure with our desert safari packages. Each safari includes thrilling 4x4 dune bashing, camel riding, sandboarding, traditional Arabic BBQ dinner, and live cultural entertainment including Tanoura dance, belly dancing, and fire shows. Choose from shared or private experiences to suit your preferences and budget.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <thead className="bg-gradient-to-r from-amber-600 to-orange-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Package Name</th>
                    <th className="px-6 py-4 text-left font-bold">Vehicle Type</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-left font-bold">Group Size</th>
                    <th className="px-6 py-4 text-right font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Shared Evening Desert Safari</td>
                    <td className="px-6 py-4 text-gray-600">Sharing Car 4WD</td>
                    <td className="px-6 py-4 text-gray-600">6 hour tour</td>
                    <td className="px-6 py-4 text-gray-600">Per 1 Person</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 150</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Private Evening Desert Safari</td>
                    <td className="px-6 py-4 text-gray-600">Private Car 4WD</td>
                    <td className="px-6 py-4 text-gray-600">6 hour tour</td>
                    <td className="px-6 py-4 text-gray-600">For Family (1-5 Persons)</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 800</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Shared Luxury Evening Desert Safari</td>
                    <td className="px-6 py-4 text-gray-600">Sharing Car 4WD</td>
                    <td className="px-6 py-4 text-gray-600">6 hour tour</td>
                    <td className="px-6 py-4 text-gray-600">Per 1 Person</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 200</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Private Luxury Evening Desert Safari</td>
                    <td className="px-6 py-4 text-gray-600">Private Car 4WD</td>
                    <td className="px-6 py-4 text-gray-600">6 hour tour</td>
                    <td className="px-6 py-4 text-gray-600">For Family (1-5 Persons)</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 1,300</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Early Morning Private Desert Safari</td>
                    <td className="px-6 py-4 text-gray-600">Private Car 4WD</td>
                    <td className="px-6 py-4 text-gray-600">4 hour tour</td>
                    <td className="px-6 py-4 text-gray-600">For Family (1-5 Persons)</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 699</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Desert Combo: Sharing Safari + Quad</td>
                    <td className="px-6 py-4 text-gray-600">Sharing Car 4WD</td>
                    <td className="px-6 py-4 text-gray-600">6 hour tour</td>
                    <td className="px-6 py-4 text-gray-600">Per 1 Person</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 199</td>
                  </tr>
                  <tr className="hover:bg-brand-cream/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-dark">Desert Combo: Sharing Safari + Dune Buggy</td>
                    <td className="px-6 py-4 text-gray-600">Sharing Car 4WD</td>
                    <td className="px-6 py-4 text-gray-600">6 hour tour</td>
                    <td className="px-6 py-4 text-gray-600">Per 1 Person</td>
                    <td className="px-6 py-4 text-right text-brand-orange font-bold text-lg">AED 399</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-10 text-center">What's Included in All Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🪖', title: 'Safety Equipment', desc: 'Certified helmets, goggles, protective gear' },
                { icon: '🚗', title: 'Professional Guide', desc: 'Licensed desert guide with years of experience' },
                { icon: '💧', title: 'Refreshments', desc: 'Complimentary water and soft drinks' },
                { icon: '🏜️', title: 'Desert Activities', desc: 'Sandboarding, camel rides, photo stops' },
                { icon: '🛡️', title: 'Insurance Coverage', desc: 'Full insurance for all participants' },
                { icon: '📸', title: 'Photo Opportunities', desc: 'Stunning viewpoints for photography' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm border border-gray-100">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Payment & Booking Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6 text-center">Payment & Booking Information</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
              <p className="mb-4">
                <strong>No Advance Payment Required:</strong> We believe in hassle-free booking. Simply contact us via WhatsApp to reserve your preferred date and time slot. Payment is made at the desert camp before your tour begins.
              </p>
              <p className="mb-4">
                <strong>Hotel Transfer:</strong> Shared hotel transfer is available for AED 300 from anywhere in Dubai. We pick you up from your hotel, take you to the desert camp, and bring you back after your adventure.
              </p>
              <p className="mb-4">
                <strong>Accepted Payment Methods:</strong> Cash (AED or USD), credit/debit cards, and digital payments accepted at the camp.
              </p>
              <p>
                <strong>Group Discounts:</strong> Special rates available for groups of 10+ people. Contact us for custom quotes.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-dark to-brand-dark-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Desert Adventure?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Contact us now to reserve your preferred date. <Link href="/how-to-book" className="text-brand-orange font-semibold hover:underline">Learn how to book</Link> or chat directly with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
                Book on WhatsApp
              </a>
              <Link href="/contact" className="btn-secondary text-lg">
                Contact Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

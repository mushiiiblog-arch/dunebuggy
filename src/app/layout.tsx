import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import TopBar from '@/components/TopBar';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Dune Buggy Dubai | #1 Self-Drive Desert Buggy Tours & Rentals | Buggy Dubai Rental',
    template: '%s | Buggy Dubai Rental',
  },
  description:
    'Book the best self-drive dune buggy tour in Dubai. Can-Am Maverick & Polaris RZR buggies from AED 399. Morning, afternoon & night desert buggy rides in Al Badayer Red Dunes. Free sandboarding, camel ride & safety gear included.',
  keywords: [
    'dune buggy dubai', 'dune buggy tour dubai', 'desert buggy rental dubai',
    'self drive dune buggy dubai', 'buggy ride dubai', 'dune buggy safari dubai',
    'can am maverick dubai', 'polaris rzr dubai', 'quad bike dubai',
    'desert safari dubai', 'red dunes buggy dubai', 'al badayer dune buggy',
    'dubai desert adventure', 'buggy dubai rental', 'dune bashing dubai',
  ],
  openGraph: {
    title: "Dune Buggy Dubai | #1 Self-Drive Desert Buggy Tours | Buggy Dubai Rental",
    description:
      'Conquer Dubai\'s red dunes in a Can-Am Maverick or Polaris RZR. Self-drive dune buggy tours from AED 399. Book online with free cancellation.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dune Buggy Dubai - Self Drive Desert Tour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dune Buggy Dubai | Self-Drive Desert Tours from AED 399",
    description:
      'Book the #1 rated dune buggy tour in Dubai. Can-Am & Polaris buggies, professional guides, free cancellation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE.url },
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Palm Jumeirah',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 25.1124, longitude: 55.1390 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00', closes: '23:59',
      },
      priceRange: 'AED 399 - AED 1499',
      image: `${SITE.url}/og-image.jpg`,
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/search?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'TouristTrip',
      name: 'Dune Buggy Dubai Tour',
      description: "Self-drive dune buggy tour across the red dunes of Al Badayer Desert, Dubai",
      touristType: ['Adventure Seekers', 'Families', 'Couples', 'Groups'],
      provider: { '@id': `${SITE.url}/#business` },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '399',
        highPrice: '1499',
        priceCurrency: 'AED',
        offerCount: 7,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="google-site-verification" content="r8t_fhdMlcFHsTtWXarM_Ba09cpnldnroqjb00e_Nxw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

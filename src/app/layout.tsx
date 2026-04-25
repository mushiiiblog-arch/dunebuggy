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

// JSON-LD Schema — comprehensive SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.png`,
        width: 512,
        height: 512,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'Customer Service',
        email: SITE.email,
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
      sameAs: [
        'https://www.instagram.com/buggydubairental',
        'https://www.facebook.com/buggydubairental',
        'https://www.tripadvisor.com/buggydubairental',
      ],
    },
    {
      '@type': ['LocalBusiness', 'TouristAttraction', 'TravelAgency'],
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      alternateName: 'Buggy Dubai',
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      description: 'Premier dune buggy tour operator in Dubai offering self-drive Can-Am Maverick and Polaris RZR buggies, quad bike adventures, and desert safari packages across Al Badayer Red Dunes.',
      image: [
        `${SITE.url}/og-image.jpg`,
        `${SITE.url}/images/intro-buggy.webp`,
        `${SITE.url}/images/tours/canam-rxrs-card.webp`,
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Palm Jumeirah',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        postalCode: '00000',
        addressCountry: 'AE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 25.1124, longitude: 55.1390 },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Sharjah' },
        { '@type': 'City', name: 'Abu Dhabi' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '06:00', closes: '23:00',
      },
      priceRange: 'AED 150 - AED 1499',
      paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
      currenciesAccepted: 'AED',
      sameAs: [
        'https://www.instagram.com/buggydubairental',
        'https://www.facebook.com/buggydubairental',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1247',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sarah M.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
          reviewBody: 'Amazing experience! The Can-Am Maverick was incredible across the red dunes. Professional guides and great safety briefing.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Ahmed K.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
          reviewBody: 'Best dune buggy tour in Dubai. The team is professional, vehicles are top quality, and the desert is breathtaking.',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: 'Dubai\'s leading self-drive dune buggy, quad bike, and desert safari operator',
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en-AE',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/search?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'TouristTrip',
      '@id': `${SITE.url}/#dunebuggy-trip`,
      name: 'Dune Buggy Dubai Tour',
      description: 'Self-drive dune buggy tour across the red dunes of Al Badayer Desert, Dubai. Choose from Can-Am Maverick, Polaris RZR, and family 4-seater buggies.',
      touristType: ['Adventure Seekers', 'Families', 'Couples', 'Groups', 'Solo Travelers'],
      itinerary: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@type': 'Place', name: 'Hotel Pickup (Optional)' } },
          { '@type': 'ListItem', position: 2, item: { '@type': 'Place', name: 'Al Badayer Desert Camp' } },
          { '@type': 'ListItem', position: 3, item: { '@type': 'Place', name: 'Red Dunes Buggy Ride' } },
          { '@type': 'ListItem', position: 4, item: { '@type': 'Place', name: 'Sandboarding & Camel Ride' } },
        ],
      },
      provider: { '@id': `${SITE.url}/#business` },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '150',
        highPrice: '1499',
        priceCurrency: 'AED',
        offerCount: 22,
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need a driving licence to drive a dune buggy in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No driving licence is required for our self-drive dune buggy tours. All our buggies are fully automatic and we provide a comprehensive safety briefing before every ride.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum age for dune buggy tours in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Drivers must be at least 16 years old. Passengers of any age are welcome with adult supervision. Children love our 4-seater family buggies.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a dune buggy tour in Dubai cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dune buggy tours start from AED 399 per buggy. Prices range up to AED 1,499 for the premium Stage 4 Stunner Polaris RZR PRO R 4-seater. Quad bikes start from AED 150 and desert safaris from AED 150 per person.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where do dune buggy tours take place in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All our tours operate at Al Badayer Desert, approximately 50 kilometres from Dubai city centre. The area features iconic red sand dunes rising up to 100 metres tall.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is hotel pickup included in dune buggy tours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hotel pickup and drop-off is available as an add-on for AED 300 per car from anywhere in Dubai. Some packages include transfer in the base price.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the desert safari?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our desert safari includes 14:30 hotel pickup, dune bashing, camel ride, sandboarding, henna tattoo for ladies, BBQ buffet dinner, shisha, and live shows including Fireshow, Tanoura, Belly Dancing, and Yowla.',
          },
        },
      ],
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

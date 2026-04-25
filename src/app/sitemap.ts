import { MetadataRoute } from 'next';

const BASE = 'https://buggydubairental.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE}/dune-buggy-dubai`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${BASE}/quad-bike-dubai`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE}/desert-safari-dubai`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE}/prices`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${BASE}/how-to-book`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  const duneBuggySubs = [
    'can-am-maverick-r-x-rs-26',
    'can-am-maverick-xrs-26',
    'stage-4-stunner-rzr-pro-r-ultimate',
    'desert-combo-sharing-safari-dune-buggy',
    'early-bird-buggy-tour',
    'night-riders-dune-buggy-dubai',
    'red-dunes-afternoon-buggies',
    'red-dunes-buggy-shared-transfer',
    'morning-dune-buggy-tour',
    'polaris-rzr-1-2-4-seater',
  ].map((slug) => ({
    url: `${BASE}/dune-buggy-dubai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const quadBikeSubs = [
    'yamaha-700cc-raptor',
    'desert-combo-safari-quad',
    'early-bird-quad-1-seater',
    'early-bird-quad-2-seater',
    'afternoon-quad-1-seater',
    'afternoon-quad-2-seater',
    'red-dunes-quad-transfer-1-seater',
    'red-dunes-quad-transfer-2-seater',
    'yamaha-raptor-transfer',
  ].map((slug) => ({
    url: `${BASE}/quad-bike-dubai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const desertSafariSubs = [
    'shared-evening-safari',
    'private-evening-safari',
    'shared-luxury-safari',
    'private-luxury-safari',
  ].map((slug) => ({
    url: `${BASE}/desert-safari-dubai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...duneBuggySubs, ...quadBikeSubs, ...desertSafariSubs];
}

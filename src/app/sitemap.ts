import { MetadataRoute } from 'next';

const BASE = 'https://buggydubairental.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE}/dune-buggy-dubai`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${BASE}/quad-bike-dubai`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE}/desert-safari-dubai`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const duneBuggySubs = [
    'can-am-maverick-r-x-rs-26',
    'can-am-maverick-xrs-26',
    'stage-4-stunner-rzr-pro-r-ultimate',
    'desert-combo-sharing-safari-dune-buggy',
    'early-bird-buggy-tour',
    'night-riders-dune-buggy-dubai',
    'red-dunes-afternoon-buggies',
  ].map((slug) => ({
    url: `${BASE}/dune-buggy-dubai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const quadBikeSubs = ['morning', 'sunset', 'night', 'safari-combo'].map((slug) => ({
    url: `${BASE}/quad-bike-dubai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const desertSafariSubs = ['morning', 'evening', 'overnight', 'vip-private'].map((slug) => ({
    url: `${BASE}/desert-safari-dubai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPosts = [
    'top-10-things-to-do-in-dubai-desert',
    'dune-buggy-vs-quad-bike',
    'best-time-for-dune-buggy-tour-dubai',
    'what-to-wear-desert-safari-dubai',
    'is-dune-buggy-riding-safe',
    'can-am-maverick-vs-polaris-rzr',
    'dubai-desert-safari-complete-guide',
    'dune-buggy-dubai-prices-guide',
    'morning-vs-evening-desert-safari',
    'family-friendly-desert-activities-dubai',
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...mainPages, ...duneBuggySubs, ...quadBikeSubs, ...desertSafariSubs, ...blogPosts];
}

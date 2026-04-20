'use client';
import { useState } from 'react';
import { SITE, TOURS } from '@/data/siteData';

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-heading text-xl font-bold text-white mb-3">Enquiry Sent!</h3>
        <p className="text-white/50 text-sm mb-5">We will get back to you within minutes.</p>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-sm">
          Also Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange transition-colors"
      />
      <input
        type="email"
        placeholder="Email Address"
        required
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange transition-colors"
      />
      <input
        type="tel"
        placeholder="Phone / WhatsApp Number"
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange transition-colors"
      />
      <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white/50 focus:outline-none focus:border-brand-orange transition-colors">
        <option value="">Select a Tour Package</option>
        {TOURS.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name} — {t.priceDisplay}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Any special requests or questions?"
        rows={3}
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange transition-colors resize-none"
      />
      <button type="submit" className="btn-primary w-full justify-center !py-4">
        Send Enquiry
      </button>
    </form>
  );
}

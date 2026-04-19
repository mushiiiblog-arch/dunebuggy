'use client';
import { useState } from 'react';
import { SITE, TOURS } from '@/data/siteData';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-heading text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-white/50 text-sm">
          Thank you for getting in touch. Our team will respond within minutes.
        </p>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          Also Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          required
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange transition-colors"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange transition-colors"
        />
      </div>
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
        <option value="">Interested In...</option>
        <option value="dune-buggy">Dune Buggy Tour</option>
        <option value="quad-bike">Quad Bike Tour</option>
        <option value="desert-safari">Desert Safari</option>
        <option value="combo">Combo Package</option>
        <option value="corporate">Corporate / Group Event</option>
        <option value="other">Other</option>
      </select>
      <input
        type="date"
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white/50 focus:outline-none focus:border-brand-orange transition-colors"
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange transition-colors resize-none"
      />
      <button type="submit" className="btn-primary w-full justify-center !py-4">
        Send Message
      </button>
    </form>
  );
}

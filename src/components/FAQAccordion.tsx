'use client';
import { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left"
            aria-expanded={openIndex === i}
          >
            <h3 className="font-bold text-brand-dark text-base pr-6 leading-snug">{faq.q}</h3>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                openIndex === i
                  ? 'bg-brand-orange text-white rotate-180'
                  : 'bg-brand-cream text-brand-dark'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <div className="px-6 pb-6">
              <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

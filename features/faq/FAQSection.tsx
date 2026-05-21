'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <section id="faq" className="py-[var(--space-fluid-container)] bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[length:var(--font-fluid-h2)] font-black tracking-tight text-gray-900 mb-10 text-center">
          {t.faq.title}
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-6 sm:px-8 flex items-center justify-between gap-4 text-left font-bold text-gray-900 focus:outline-none"
              >
                <span className="text-lg tracking-tight">{faq.q}</span>
                <div 
                  className={`flex-shrink-0 flex items-center justify-center rounded-full p-1.5 transition-colors ${
                    openIndex === idx ? 'bg-[var(--color-javi-sun)] text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {openIndex === idx ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 text-gray-600 font-medium leading-relaxed text-[length:var(--font-fluid-body)]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

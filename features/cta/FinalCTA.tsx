'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { Phone, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function FinalCTA() {
  const { t, biz } = useLanguage();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-[var(--space-fluid-container)] bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-[length:var(--font-fluid-h2)] font-black tracking-tight text-gray-900">
            {t.cta.title}
          </h2>
          <p className="text-[length:var(--font-fluid-body)] text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {t.cta.sub}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action Button */}
            <a 
              href={`tel:${biz.phoneRaw}`}
              className="flex h-16 w-full sm:w-auto min-w-[280px] items-center justify-center gap-3 rounded-2xl bg-[var(--color-javi-red)] px-8 font-bold text-[var(--color-text-light)] shadow-xl hover:brightness-110 active:scale-95 transition-all text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>{t.cta.callBtn}</span>
            </a>

            {/* Secondary Action Button */}
            <button 
              onClick={handleScrollTop}
              className="flex h-16 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white border border-gray-200 px-8 font-bold text-gray-900 shadow-sm hover:bg-gray-50 active:scale-95 transition-all text-lg"
            >
              <span>{t.cta.topBtn}</span>
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

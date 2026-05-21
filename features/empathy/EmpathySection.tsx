'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function EmpathySection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-[var(--space-fluid-container)] bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-fluid-gap)] items-center">
          
          {/* Philosophy Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-[length:var(--font-fluid-h2)] font-black tracking-tight text-gray-900 mb-6">
              {t.empathy.title}
            </h2>
            <p className="text-[length:var(--font-fluid-body)] text-gray-600 font-medium leading-relaxed">
              {t.empathy.sub}
            </p>
          </motion.div>

          {/* Facts Grid Side */}
          <div className="grid gap-4 sm:gap-6 mt-8 lg:mt-0">
            {[
              { title: t.empathy.point1Title, desc: t.empathy.point1Desc },
              { title: t.empathy.point2Title, desc: t.empathy.point2Desc },
              { title: t.empathy.point3Title, desc: t.empathy.point3Desc }
            ].map((fact, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-gray-900/5 group"
              >
                <div className="rounded-full bg-[var(--color-javi-sun)]/20 p-1 flex-shrink-0">
                   <div className="bg-[var(--color-javi-sun)] rounded-full text-white p-1">
                      <CheckCircle2 className="h-5 w-5" />
                   </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 tracking-tight text-lg mb-1">{fact.title}</h3>
                  <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">{fact.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { HeroForm } from './HeroForm';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  const { t, biz } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gray-50 pb-[var(--space-fluid-container)] pt-[calc(var(--space-fluid-container)*0.5)]">
      {/* Abstract Heat Decor */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] aspect-square rounded-full bg-[var(--color-javi-red)] opacity-5 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[50%] aspect-square rounded-full bg-[var(--color-javi-blue)] opacity-5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-fluid-gap)] items-center">
          
          {/* Content Column */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[var(--color-javi-blue)] uppercase mb-5 sm:mb-6 select-none"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-javi-sun)] flex-shrink-0 animate-pulse" />
              <span>{biz.serviceArea}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[length:var(--font-fluid-h1)] font-black tracking-tight text-gray-900 leading-[1.05]"
            >
              {t.hero.headline}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 sm:mt-8 max-w-xl text-[length:var(--font-fluid-body)] text-gray-600 font-medium leading-relaxed"
            >
              {t.hero.subheadline}
            </motion.p>
          </div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-md mx-auto lg:max-w-none lg:ml-auto"
          >
            <HeroForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

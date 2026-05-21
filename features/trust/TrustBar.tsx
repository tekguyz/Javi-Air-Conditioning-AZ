'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { Award, Star, Globe, ShieldCheck } from 'lucide-react';

export const TrustBar = () => {
  const { t } = useLanguage();

  const trustItems = [
    { icon: <Award className="h-6 w-6" />, text: t.validation.experience },
    { icon: <Globe className="h-6 w-6" />, text: t.validation.bilingual },
    { icon: <Star className="h-6 w-6" />, text: t.validation.reviews },
    { icon: <ShieldCheck className="h-6 w-6" />, text: t.validation.licensed },
  ];

  return (
    <div className="w-full bg-[var(--color-javi-blue)] py-[calc(var(--space-fluid-container)*0.4)] overflow-hidden relative">
      {/* Decorative gradient slant */}
      <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZXMgaWQ9InBhdHRlcm4iIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDAgMEg0MEwwIDQweiIgZmlsbD0ib2tsY2goOTklIDAuMDA1IDI1NSkiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* On Mobile: Horizontal Swipe view. On Desktop: Spaced layout row */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1 sm:pb-0 sm:flex-row sm:justify-between sm:gap-8 md:gap-12 md:max-w-7xl mx-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3.5 text-[var(--color-text-light)] snap-center flex-shrink-0 bg-white/5 border border-white/10 sm:border-0 sm:bg-transparent rounded-2xl p-4 sm:p-0 min-w-[270px] sm:min-w-0 transition-transform active:scale-98"
            >
              <div className="text-[var(--color-javi-sun)] flex-shrink-0 bg-white/10 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wide text-sm sm:text-base leading-tight uppercase font-[var(--font-display)]">
                  {item.text}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-javi-sun)] font-bold block sm:hidden">
                  Verified Local
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

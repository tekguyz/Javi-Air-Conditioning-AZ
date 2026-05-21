'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { Phone, Globe } from 'lucide-react';

export const Navbar = () => {
  const { language, setLanguage, biz, t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100/80 shadow-sm shadow-slate-100/40">
        
        {/* Thin, high-density announcement bar */}
        <div className="w-full bg-slate-50 border-b border-slate-100/50 h-7 flex items-center justify-center text-[10px] sm:text-xs font-semibold text-slate-500 select-none tracking-wide whitespace-nowrap px-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-2" />
          <span>
            {language === 'es' ? 'Atención al Cliente local en: ' : 'Fast response in: '}
            <span className="font-bold text-slate-700">{biz.serviceArea}</span>
          </span>
        </div>

        {/* Main Header Container */}
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
          
          {/* LEFT SIDE: THE PRIMARY BRAND ENGINE (Fills space on mobile to prevent squishing) */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1 select-none">
            {/* Logo Icon - Revealed ONLY on Desktop (>= md / 768px) */}
            <div className="hidden md:flex aspect-square w-10 items-center justify-center rounded-xl bg-[var(--color-javi-blue)] text-white font-black text-xl flex-shrink-0">
              J
            </div>
            {/* Factual Company Text - Highly readable brand text with strict wrap protection */}
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-slate-900 md:text-[var(--color-javi-blue)] leading-none truncate">
                <span className="md:hidden">Javi Air</span>
                <span className="hidden md:inline">Javi Air Conditioning</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase leading-none mt-1 truncate">
                {biz.license} • 13+ Years Local
              </span>
            </div>
          </div>

          {/* DESKTOP-ONLY CENTER NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-slate-600 text-sm mx-4">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')} 
              className="hover:text-[var(--color-javi-blue)] transition-colors whitespace-nowrap"
            >
              {t.nav.services}
            </a>
            <a 
              href="#why-us" 
              onClick={(e) => handleNavClick(e, 'why-us')} 
              className="hover:text-[var(--color-javi-blue)] transition-colors whitespace-nowrap"
            >
              {t.nav.whyUs}
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, 'faq')} 
              className="hover:text-[var(--color-javi-blue)] transition-colors whitespace-nowrap"
            >
              {t.nav.faq}
            </a>
          </nav>

          {/* RIGHT SIDE ACTIONS: BALANCED BREAKPOINT SCALING */}
          <div className="flex items-center gap-3 flex-shrink-0">
            
            {/* Global Language Switcher - Pure Micro-Pill strictly for Mobile (< 768px) */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="md:hidden flex h-8 items-center justify-center gap-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-extrabold text-[10px] tracking-widest border border-slate-200/40 shadow-[0_1px_2px_rgba(0,0,0,0.01)] cursor-pointer select-none"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Full Custom Language Switcher - Revealed ONLY on Desktop (>= md / 768px) */}
            <div className="hidden md:flex items-center rounded-full bg-slate-100 p-1 select-none">
              <button
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors border-none outline-none cursor-pointer ${
                  language === 'en' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors border-none outline-none cursor-pointer ${
                  language === 'es' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                ES
              </button>
            </div>

            {/* Full Desktop Emergency Dispatch Button - Revealed ONLY on Desktop (>= md / 768px) */}
            <a 
              href={`tel:${biz.phoneRaw}`}
              className="hidden md:flex h-12 lg:h-14 items-center gap-2 rounded-2xl bg-[var(--color-javi-red)] px-5 font-black text-[var(--color-text-light)] shadow-md hover:brightness-110 active:scale-95 transition-all text-sm lg:text-base whitespace-nowrap border-none"
            >
              <Phone className="h-4 w-4 fill-white flex-shrink-0" />
              <span>{biz.phone}</span>
            </a>

          </div>
        </div>
      </header>

      {/* PERSISTENT SMARTPHONE STICKY CALLING STRIP (Revealed ONLY on Mobile < 640px) */}
      {/* Positioned as sibling to top-level layout to avoid parent sticky containing block container alignment bugs */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.05)] flex items-center justify-between p-2 sm:hidden">
        <button
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="flex h-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/60 px-4 font-black text-xs text-slate-800 transition-colors active:bg-slate-100 uppercase tracking-wider flex-shrink-0 cursor-pointer"
        >
          {language === 'en' ? 'Español' : 'English'}
        </button>

        <a
          href={`tel:${biz.phoneRaw}`}
          className="flex-grow ml-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-javi-red)] text-white font-black text-xs tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-red-500/10 border-none relative overflow-hidden"
        >
          <Phone className="h-3.5 w-3.5 fill-white" />
          <span className="uppercase">
            {language === 'es' ? 'LLAMAR DESPACHO' : 'CALL NOW DISPATCH'}
          </span>
        </a>
      </div>
    </>
  );
};

'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { BIZ_DATA } from '@/shared/constants';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: t.nav.services, targetId: 'services' },
    { label: labelWithLocale(language, t.nav.whyUs, "Why Javi Air"), targetId: 'why-us' },
    { label: t.nav.faq, targetId: 'faq' }
  ];

  function labelWithLocale(lang: string, fallback: string, defaultEn: string) {
    return fallback || defaultEn;
  }

  const areas = [
    "Gilbert, AZ",
    "Mesa, AZ",
    "Chandler, AZ",
    "Tempe, AZ",
    "Phoenix East Valley"
  ];

  return (
    <footer id="footer" className="bg-slate-50/50 border-t border-slate-100 pt-16 pb-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Corporate Identity & Trust Anchor */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[var(--color-javi-blue)] uppercase font-[var(--font-display)] leading-none">
                {BIZ_DATA.displayName}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-1.5">
                Technical response
              </span>
            </div>
            <div className="space-y-1.5 pt-2">
              <p className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                {BIZ_DATA.legalName}
              </p>
              <div className="inline-flex items-center rounded-md bg-slate-100/80 px-2 py-0.5 text-[10px] font-extrabold tracking-widest text-slate-600 border border-slate-200/50 uppercase">
                {BIZ_DATA.license}
              </div>
            </div>
          </div>

          {/* Column 2: Fluid Quick Navigation Links */}
          <div className="flex flex-col">
            <h4 className="text-xs font-black tracking-widest text-slate-900 uppercase mb-4 font-[var(--font-display)]">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.targetId}`}
                    onClick={(e) => handleScrollTo(e, link.targetId)}
                    className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-[var(--color-javi-blue)] tracking-wide transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-xs text-[var(--color-javi-blue)]">
                      ↳
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Localized Coverage Footprint */}
          <div className="flex flex-col">
            <h4 className="text-xs font-black tracking-widest text-slate-900 uppercase mb-4 font-[var(--font-display)]">
              {language === 'es' ? 'Áreas de Servicio' : 'Service Areas'}
            </h4>
            <ul className="space-y-2.5">
              {areas.map((area, idx) => (
                <li key={idx} className="text-xs font-medium text-slate-500 tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-javi-sun)] flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Dispatch Hub */}
          <div className="flex flex-col space-y-4">
            <div>
              <h4 className="text-xs font-black tracking-widest text-slate-900 uppercase mb-4 font-[var(--font-display)]">
                {language === 'es' ? 'Contacto Directo' : 'Emergency Direct Line'}
              </h4>
              <a
                href={`tel:${BIZ_DATA.phoneRaw}`}
                className="group flex items-center gap-2 text-sm font-extrabold text-slate-900 hover:text-[var(--color-javi-red)] tracking-wide transition-colors"
              >
                <Phone className="h-4 w-4 text-[var(--color-javi-red)] stroke-[2.5]" />
                <span>{BIZ_DATA.phone}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
              </a>
            </div>
            
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                {language === 'es' ? 'Correo Electrónico' : 'Operations Inbox'}
              </span>
              <a
                href={`mailto:${BIZ_DATA.email}`}
                className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-[var(--color-javi-blue)] tracking-wide transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                <span>{BIZ_DATA.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Dynamic copyright sub-footer */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} {BIZ_DATA.displayName}. All rights reserved. Registered and insured in AZ.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={BIZ_DATA.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-slate-400 hover:text-[var(--color-javi-blue)] uppercase tracking-widest transition-colors"
            >
              Facebook Profile
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

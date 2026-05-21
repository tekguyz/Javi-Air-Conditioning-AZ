'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { BIZ_DATA } from '@/shared/constants';
import { WindIcon, FlameIcon, SparklesIcon, LayersIcon } from '@/components/ui/Icons';
import { Check, BadgePercent } from 'lucide-react';
import { motion } from 'motion/react';

export const ServicesBento = () => {
  const { language } = useLanguage();

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'air-conditioning':
        return <WindIcon className="h-6 w-6 text-[var(--color-javi-blue)]" />;
      case 'heating-furnace':
        return <FlameIcon className="h-6 w-6 text-[var(--color-javi-red)]" />;
      case 'indoor-air-quality':
        return <SparklesIcon className="h-6 w-6 text-[var(--color-javi-blue)]" />;
      case 'ductless-mini-splits':
        return <LayersIcon className="h-6 w-6 text-[var(--color-javi-blue)]" />;
      default:
        return <WindIcon className="h-6 w-6 text-[var(--color-javi-blue)]" />;
    }
  };

  return (
    <section className="py-[var(--space-fluid-container)] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="font-black text-[length:var(--font-fluid-h2)] tracking-tight uppercase leading-none text-slate-900">
            {language === 'es' ? 'Nuestros Servicios' : 'Our Specialized Services'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-fluid-gap)]">
          {BIZ_DATA.services.map((service, index) => {
            const isPrimary = service.slug === 'air-conditioning';
            return (
              <motion.div 
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  isPrimary ? 'md:col-span-2' : 'md:col-span-1'
                } rounded-3xl bg-white p-8 sm:p-10 border border-slate-100 shadow-sm shadow-slate-100/50 relative overflow-hidden flex flex-col justify-between group h-full hover:border-[var(--color-javi-blue)] transition-all`}
              >
                {/* 2px thick accent hover line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--color-javi-blue)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 pointer-events-none" />
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 transform transition-transform group-hover:scale-110 pointer-events-none text-slate-200">
                  {getServiceIcon(service.slug)}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 bg-slate-50 mb-6 ${
                    isPrimary ? 'border-[var(--color-javi-blue)]' : 'border-slate-200'
                  }`}>
                    {getServiceIcon(service.slug)}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4 uppercase">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 mt-2 flex-grow">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 tracking-wide text-xs font-semibold text-slate-600">
                        <Check className="h-4 w-4 text-[var(--color-javi-red)] stroke-[2] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {isPrimary && (
                    <div className="mt-8 pt-6 border-t border-slate-50">
                      <span className="text-xs font-bold text-[var(--color-javi-red)] uppercase tracking-wider flex items-center gap-2">
                        {language === 'es' ? 'Despacho de Emergencia el Mismo Día' : 'Emergency Same-Day Dispatch'} <span className="text-lg">→</span>
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Promotions Sub-Row */}
        <div className="mt-12 pt-10 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-6">
            <BadgePercent className="h-5 w-5 text-[var(--color-javi-red)]" />
            <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">
              {language === 'es' ? 'Ofertas Especiales y Financiamiento' : 'Special Offers & Financing'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm shadow-slate-100/50 flex flex-col justify-between group relative overflow-hidden transition-colors hover:border-[var(--color-javi-blue)]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-javi-blue)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 pointer-events-none" />
              <span className="text-xs font-bold text-[var(--color-javi-blue)] uppercase tracking-widest">
                {language === 'es' ? 'Equipos Nuevos' : 'New Equipment'}
              </span>
              <p className="mt-2 text-slate-700 text-sm font-semibold leading-relaxed">
                {BIZ_DATA.promotions.estimates}
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm shadow-slate-100/50 flex flex-col justify-between group relative overflow-hidden transition-colors hover:border-[var(--color-javi-red)]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-javi-red)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 pointer-events-none" />
              <span className="text-xs font-bold text-[var(--color-javi-red)] uppercase tracking-widest">
                {language === 'es' ? 'Especial de Afinación' : 'Tune-Up Special'}
              </span>
              <p className="mt-2 text-slate-700 text-sm font-semibold leading-relaxed">
                {BIZ_DATA.promotions.tuneUpSpecial}
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm shadow-slate-100/50 flex flex-col justify-between group relative overflow-hidden transition-colors hover:border-[var(--color-javi-blue)]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-javi-blue)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 pointer-events-none" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {language === 'es' ? 'Opciones de Pago' : 'Payment Options'}
              </span>
              <p className="mt-2 text-slate-700 text-sm font-semibold leading-relaxed">
                {BIZ_DATA.promotions.financing}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

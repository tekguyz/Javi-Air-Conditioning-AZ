'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { ArrowLeft, Home, Phone } from 'lucide-react';

import Link from 'next/link';

export default function NotFound() {
  const { language, biz } = useLanguage();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center select-none">
      <div className="absolute -top-[10%] left-[10%] w-[40%] aspect-square rounded-full bg-[var(--color-javi-blue)] opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute top-[50%] right-[10%] w-[40%] aspect-square rounded-full bg-[var(--color-javi-red)] opacity-[0.03] blur-[100px] pointer-events-none" />

      <span className="text-8xl font-black tracking-widest text-slate-200">
        404
      </span>
      
      <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
        {language === 'es' ? 'Página No Encontrada' : 'Page Not Found'}
      </h1>
      
      <p className="mt-4 max-w-md text-slate-500 font-medium leading-relaxed text-sm sm:text-base">
        {language === 'es' 
          ? 'Lo sentimos, la página que busca no existe o fue movida. Nuestro equipo de soporte técnico está disponible para ayudarle.' 
          : 'Sorry, the page you are looking for does not exist or has been moved. Our team is always ready to assist you.'}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-javi-blue)] px-6 font-bold text-white transition-all active:scale-95 shadow-sm"
        >
          <Home className="h-4 w-4" />
          <span>{language === 'es' ? 'Volver al Inicio' : 'Return Home'}</span>
        </Link>
        
        <a
          href={`tel:${biz.phoneRaw}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 px-6 font-bold text-slate-800 transition-all active:scale-95 shadow-sm border border-slate-200/40"
        >
          <Phone className="h-4 w-4" />
          <span>{biz.phone}</span>
        </a>
      </div>
    </div>
  );
}

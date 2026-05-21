'use client';

import React from 'react';
import { useLanguage } from '@/shared/LanguageContext';
import { useHero } from './useHero';
import { AlertCircle, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroForm = () => {
  const { t, biz } = useLanguage();
  const { status, submitFormAction } = useHero();

  // Enforce pristine phone formatting on input onChange to simplify human typing
  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    let formatted = '';
    
    if (rawVal.length > 0) {
      formatted += rawVal.substring(0, 3);
    }
    if (rawVal.length > 3) {
      formatted += '-' + rawVal.substring(3, 6);
    }
    if (rawVal.length > 6) {
      formatted += '-' + rawVal.substring(6, 10);
    }
    
    e.target.value = formatted;
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-100 shadow-sm shadow-slate-100/50 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]"
      >
        <div className="rounded-full bg-green-100 p-3 text-green-700">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">Request Received</h3>
        <p className="text-gray-600 font-medium text-sm">We will contact you shortly.</p>
        <a 
          href={`tel:${biz.phoneRaw}`}
          className="mt-4 flex h-14 items-center justify-center w-full gap-2 rounded-2xl bg-[var(--color-javi-blue)] font-bold text-white transition-all active:scale-95 shadow-sm"
        >
          Call Us Instead
        </a>
      </motion.div>
    );
  }

  if (status === 'error') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-6 sm:p-8 border-t-4 border-t-red-500 border-x border-b border-slate-100 shadow-sm shadow-slate-100/50 flex flex-col items-center justify-center text-center space-y-6 min-h-[300px]"
      >
        <div className="flex flex-col items-center space-y-2">
          <AlertCircle className="h-10 w-10 text-red-500" />
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">Something went wrong</h3>
          <p className="text-gray-600 text-sm font-medium">Our online system is momentarily unavailable, but our dispatch is ready.</p>
        </div>
        
        <a 
          href={`sms:${biz.phoneRaw}`}
          className="flex h-16 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-javi-sun)] text-gray-900 font-bold text-lg shadow-sm hover:brightness-105 active:scale-95 transition-all"
        >
          <MessageSquare className="h-5 w-5" />
          Text Dispatch Now
        </a>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-100 shadow-sm shadow-slate-100/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-javi-sun)] rounded-bl-full opacity-20 -z-0"></div>
      
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 relative z-10 font-[var(--font-display)]">
        {t.hero.ctaForm}
      </h3>
      
      <form action={submitFormAction} className="space-y-4 relative z-10">
        <div className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required
            className="flex h-14 w-full rounded-2xl border border-slate-100 bg-white px-4 py-2 font-medium text-slate-900 placeholder:text-slate-400 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[var(--color-javi-blue)] focus:bg-white"
          />
          <input 
            type="tel" 
            name="phone"
            inputMode="numeric"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="480-000-0000"
            onChange={formatPhoneNumber}
            required
            className="flex h-14 w-full rounded-2xl border border-slate-100 bg-white px-4 py-2 font-medium text-slate-900 placeholder:text-slate-400 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[var(--color-javi-blue)] focus:bg-white"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="mt-2 flex h-14 w-full items-center justify-between rounded-2xl bg-[var(--color-javi-blue)] px-6 font-bold text-white shadow-md hover:brightness-110 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{status === 'submitting' ? 'Processing...' : t.hero.ctaForm}</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </form>
      
      <p className="mt-4 text-center text-xs text-gray-500 font-medium">
        No-pressure estimates. Family owned & operated.
      </p>
    </div>
  );
};

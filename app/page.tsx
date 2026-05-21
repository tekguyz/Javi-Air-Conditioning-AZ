import React from 'react';
import { Navbar } from '@/features/navigation/Navbar';
import { Hero } from '@/features/hero/Hero';
import { TrustBar } from '@/features/trust/TrustBar';
import { ServicesBento } from '@/features/services/ServicesBento';
import EmpathySection from '@/features/empathy/EmpathySection';
import FAQSection from '@/features/faq/FAQSection';
import FinalCTA from '@/features/cta/FinalCTA';
import Footer from '@/features/footer/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen pb-16 sm:pb-0">
      <Navbar />
      <Hero />
      <TrustBar />
      <div id="services"><ServicesBento /></div>
      <div id="why-us"><EmpathySection /></div>
      <div id="faq"><FAQSection /></div>
      <FinalCTA />
      <Footer />
    </main>
  );
}

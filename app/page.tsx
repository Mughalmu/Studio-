'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhyChooseMe from '@/components/WhyChooseMe';
import Portfolio from '@/components/Portfolio';
import DevelopmentProcess from '@/components/DevelopmentProcess';
import TechSkills from '@/components/TechSkills';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import LegalModal from '@/components/LegalModal';
import HostingerExporterModal from '@/components/HostingerExporterModal';

export default function Home() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isHostingerExportOpen, setIsHostingerExportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050713] text-slate-100 relative selection:bg-purple-600 selection:text-white overflow-x-hidden">
      {/* Sticky Header */}
      <Navbar onOpenHostingerExport={() => setIsHostingerExportOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Contact/Trust Strip */}
        <TrustStrip />

        {/* Services Section */}
        <Services />

        {/* Statistics Band */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Why Choose Me Section */}
        <WhyChooseMe />

        {/* Selected Work Portfolio Showcase */}
        <Portfolio />

        {/* Simple Development Process */}
        <DevelopmentProcess />

        {/* Skills & Technologies */}
        <TechSkills />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Conversion CTA Banner */}
        <CtaBanner />

        {/* Contact Form & Direct Support */}
        <Contact />
      </main>

      {/* Sophisticated Dark Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating Action Widgets (WhatsApp & Scroll Top) */}
      <FloatingWidgets />

      {/* Privacy Policy / Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Hostinger Exporter Modal */}
      <HostingerExporterModal
        isOpen={isHostingerExportOpen}
        onClose={() => setIsHostingerExportOpen(false)}
      />
    </div>
  );
}

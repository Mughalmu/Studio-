'use client';

import Image from 'next/image';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 relative bg-[#050713] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/90 via-violet-900/90 to-blue-900/90 border border-purple-500/40 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>LET&apos;S GET STARTED</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Ready to Build a Website That Grows Your Business?
              </h2>

              <p className="text-purple-100 text-base sm:text-lg max-w-2xl mb-8">
                Let&apos;s turn your vision into a modern, professional, and conversion-focused website designed to elevate your brand and win clients.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-purple-950 font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 text-purple-950 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/923463359347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-bold text-base transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>Chat on WhatsApp (+92 346 3359347)</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-purple-400/30 shadow-2xl group">
                <Image
                  src="/assets/images/cta_rocket.jpg"
                  alt="Web Growth Rocket Visual"
                  fill
                  sizes="256px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

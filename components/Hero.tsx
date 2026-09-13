'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, Code2, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden flex items-center bg-radial-glow">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>PROFESSIONAL WEBSITE DEVELOPER</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              I Build{' '}
              <span className="text-gradient-purple underline decoration-purple-500/30 decoration-wavy decoration-2">
                High-Performance Websites
              </span>{' '}
              That Grow Your Business
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              I create modern, responsive and conversion-focused websites that help businesses build credibility, attract customers and grow online. Specializing in WordPress, Elementor, and custom web development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 hover:from-purple-500 hover:via-violet-500 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/40 text-slate-200 hover:text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium">Responsive & Modern Design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium">Client-Focused Development</span>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Glow Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000 -z-10"></div>

              {/* Main Laptop Mockup Container */}
              <div className="relative rounded-2xl overflow-hidden glass-card border border-purple-500/30 p-2 sm:p-3 bg-[#0a0e24]/80 shadow-2xl">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden group">
                  <Image
                    src="/assets/images/hero_laptop.jpg"
                    alt="Muhammad Asad Web Development Workstation"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050713] via-transparent to-transparent opacity-60"></div>
                </div>
              </div>

              {/* Floating Badge 1 - Left Top */}
              <div className="absolute -top-6 -left-4 sm:-left-6 glass-panel px-4 py-3 rounded-2xl border border-purple-500/30 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Elementor & WP</div>
                  <div className="text-[11px] text-purple-300 font-medium">Pixel Perfect Clean Code</div>
                </div>
              </div>

              {/* Floating Badge 2 - Right Bottom */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-panel px-4 py-3 rounded-2xl border border-blue-500/30 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Mobile Ready</div>
                  <div className="text-[11px] text-blue-300 font-medium">Fast Load & SEO Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

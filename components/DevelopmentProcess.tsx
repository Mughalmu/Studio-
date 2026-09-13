'use client';

import { Sparkles, Search, Palette, Code, Rocket } from 'lucide-react';

export default function DevelopmentProcess() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      icon: Search,
      desc: 'Understand the business, target audience, core goals, brand guidelines, and project requirements.'
    },
    {
      num: '02',
      title: 'Design',
      icon: Palette,
      desc: 'Create the visual direction, layout hierarchy, modern typography, color scheme, and user experience.'
    },
    {
      num: '03',
      title: 'Develop',
      icon: Code,
      desc: 'Build the responsive website with clean WordPress/Elementor code, mobile optimization, and fast loading.'
    },
    {
      num: '04',
      title: 'Launch',
      icon: Rocket,
      desc: 'Perform final cross-browser testing, SEO check, performance optimization, and launch your site to the world.'
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-[#0a0e24]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            My Simple Development Process
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A structured step-by-step workflow designed to deliver high quality, stress-free websites on time.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600/30 via-blue-600/50 to-purple-600/30 -translate-y-6 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-7 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-purple-400/30 group-hover:text-purple-400 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Layout, Smartphone, Target, Headphones, Sparkles } from 'lucide-react';

export default function WhyChooseMe() {
  const reasons = [
    {
      icon: Layout,
      title: 'Modern Design',
      description: 'Professional interfaces designed to make businesses stand out with high perceived value, pristine typography, and custom visuals.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Experience',
      description: 'Layouts carefully optimized for seamless operation across smartphones, tablets, laptops, and ultra-wide desktop monitors.'
    },
    {
      icon: Target,
      title: 'Business Focus',
      description: 'Every section is designed around credibility, usability, lead generation, and converting casual site visitors into paying clients.'
    },
    {
      icon: Headphones,
      title: 'Reliable Support',
      description: 'Clear client communication, timely milestone updates, and dependable ongoing technical assistance whenever you need it.'
    }
  ];

  return (
    <section className="py-24 relative bg-[#0a0e24]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>THE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Clients Choose Muhammad Asad
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A strategic approach to web development that balances stunning visual presentation with technical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 border border-purple-500/15 hover:border-purple-500/40 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 mb-6 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

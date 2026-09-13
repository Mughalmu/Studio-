'use client';

import { 
  Globe, 
  Layers, 
  Code2, 
  FileCode, 
  Terminal, 
  Smartphone, 
  Search, 
  Gauge, 
  Layout, 
  ShoppingBag,
  Sparkles 
} from 'lucide-react';

export default function TechSkills() {
  const skills = [
    { name: 'WordPress', category: 'CMS Platform', icon: Globe, color: 'from-blue-600 to-indigo-600' },
    { name: 'Elementor', category: 'Page Builder', icon: Layers, color: 'from-pink-600 to-purple-600' },
    { name: 'HTML5', category: 'Markup', icon: Code2, color: 'from-orange-600 to-red-600' },
    { name: 'CSS3', category: 'Styling & Flexbox', icon: FileCode, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', category: 'Interactivity', icon: Terminal, color: 'from-amber-500 to-yellow-500' },
    { name: 'Responsive Design', category: 'Mobile & Tablet', icon: Smartphone, color: 'from-emerald-600 to-teal-600' },
    { name: 'SEO Optimization', category: 'Search Engines', icon: Search, color: 'from-purple-600 to-violet-600' },
    { name: 'Website Optimization', category: 'Speed & PageSpeed', icon: Gauge, color: 'from-cyan-600 to-blue-600' },
    { name: 'UI/UX Design', category: 'User Experience', icon: Layout, color: 'from-violet-600 to-fuchsia-600' },
    { name: 'E-Commerce', category: 'WooCommerce', icon: ShoppingBag, color: 'from-rose-600 to-pink-600' },
  ];

  return (
    <section className="py-20 relative bg-[#050713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>EXPERT CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Core Technologies & Expertise
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Proficient in modern tools and frameworks required to build high-grade web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-purple-500/15 hover:border-purple-500/40 text-center flex flex-col items-center group transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-[#0d1330] rounded-[10px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-medium text-slate-400">
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const highlights = [
    'Modern & Professional Design',
    'Mobile-First Development',
    'WordPress & Elementor',
    'Business-Focused Structure',
    'Clean & Maintainable Implementation',
    'Client-Friendly Communication'
  ];

  return (
    <section id="about" className="py-24 relative bg-[#050713] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card border border-purple-500/30 p-2 sm:p-3 bg-[#0a0e24] shadow-2xl group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/developer_workspace.jpg"
                  alt="Muhammad Asad Developer Workstation"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050713] via-transparent to-transparent opacity-50"></div>
              </div>

              {/* Experience Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border border-purple-500/30 bg-[#0d1330]/90 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shrink-0 shadow-lg">
                  5+
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Years of Web Expertise</h4>
                  <p className="text-xs text-slate-300">Delivering quality digital solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>ABOUT MUHAMMAD ASAD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Building Digital Experiences That Make Businesses Look Better Online
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              I&apos;m Muhammad Asad, a professional website developer focused on creating modern, responsive and business-focused websites. I combine clean design, practical functionality and user-friendly experiences to help businesses establish a stronger digital presence.
            </p>

            {/* Feature points grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {highlights.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 hover:from-purple-500 hover:via-violet-500 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 flex items-center gap-2 group"
            >
              Work With Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

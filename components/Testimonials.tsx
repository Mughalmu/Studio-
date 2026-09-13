'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Muhammad understood what we needed and turned the idea into a clean, professional website that looks great across devices. His work brought our business credibility to the next level.",
      name: "David Miller",
      role: "Business Owner, Tech Services",
      initials: "DM",
      rating: 5,
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      quote: "The communication was smooth, the design looked professional and the final website was easy to use. Highly recommended for anyone needing WordPress or Elementor work!",
      name: "Sarah Jenkins",
      role: "E-Commerce Director",
      initials: "SJ",
      rating: 5,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      quote: "A modern website with a strong professional feel. The attention to detail made a big difference, especially in our site speed scores and mobile experience.",
      name: "Robert Vance",
      role: "Corporate Consultant",
      initials: "RV",
      rating: 5,
      gradient: "from-violet-600 to-pink-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#0a0e24]/70 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Feedback from business owners and clients who partnered with Muhammad Asad.
          </p>
        </div>

        {/* Testimonials Grid (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 flex flex-col justify-between transition-all duration-300 ${
                currentIndex === idx ? 'ring-2 ring-purple-500/50 shadow-2xl scale-[1.02]' : ''
              }`}
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-500/30" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold text-base shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{t.name}</h3>
                  <p className="text-xs font-medium text-purple-300">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

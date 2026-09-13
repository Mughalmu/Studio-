'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href="https://wa.me/923463359347"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+92 346 3359347)"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-110 transition-all duration-300 relative group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap bg-[#0a0e24] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          WhatsApp (+923463359347)
        </span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-slate-900 animate-ping"></span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="w-11 h-11 rounded-full bg-purple-950/80 hover:bg-purple-600 border border-purple-500/40 text-purple-200 hover:text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 animate-in fade-in duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

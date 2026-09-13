'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenHostingerExport: () => void;
}

export default function Navbar({ onOpenHostingerExport }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Area */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-5.5 h-5.5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
              Muhammad Asad
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
              Professional Website Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md p-1.5 rounded-full border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenHostingerExport}
            className="px-3.5 py-2 text-xs font-semibold text-purple-300 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 rounded-lg transition-colors flex items-center gap-1.5"
            title="Download Hostinger HTML export"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Hostinger Ready
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 hover:from-purple-500 hover:via-violet-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 flex items-center gap-2 group"
          >
            Let&apos;s Work Together
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenHostingerExport}
            className="p-2 text-purple-300 bg-purple-950/40 border border-purple-500/30 rounded-lg text-xs font-medium"
          >
            Hostinger
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#050713]/95 backdrop-blur-2xl border-b border-purple-900/30 shadow-2xl p-6 transition-all duration-300 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-purple-300 hover:bg-purple-900/20 rounded-xl transition-colors flex items-center justify-between"
              >
                {item.name}
                <span className="text-purple-500 text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white font-semibold text-base shadow-lg shadow-purple-600/30"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="https://wa.me/923463359347"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2"
              >
                Chat on WhatsApp (+92 346 3359347)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

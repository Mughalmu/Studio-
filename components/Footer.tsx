'use client';

import { Code2, Linkedin, Facebook, Instagram, MessageSquare, Mail, Phone, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-[#03040c] text-slate-400 border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                <Code2 className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  Muhammad Asad
                </span>
                <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">
                  Professional Website Developer
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building modern, responsive and professional websites for businesses that want to grow online. Specializing in WordPress, Elementor, and E-Commerce.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://wa.me/923463359347"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300"
                aria-label="WhatsApp Direct Chat"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-purple-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-300 transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-purple-300 transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-purple-300 transition-colors">Process</a></li>
              <li><a href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-purple-300 transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">WordPress Development</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">Elementor Development</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">E-Commerce Stores</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">Responsive Web Design</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">SEO & Optimization</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/923463359347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+92 346 3359347</span>
              </a>
              <a href="mailto:asadmughalmrp1987@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors truncate">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate">asadmughalmrp1987@gmail.com</span>
              </a>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Muhammad Asad. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-purple-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-purple-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

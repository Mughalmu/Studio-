'use client';

import { MessageSquare, Mail, Calendar, Clock, Check } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="relative z-20 -mt-8 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-purple-500/20 bg-[#0a0e24]/90 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923463359347"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 pt-3 sm:pt-0 sm:pl-4 first:pl-0 group hover:opacity-90 transition-opacity"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  WhatsApp
                </span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  +92 346 3359347
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:asadmughalmrp1987@gmail.com"
              className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-4 group hover:opacity-90 transition-opacity"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Email Address
                </span>
                <span className="text-sm font-bold text-white truncate block group-hover:text-purple-300 transition-colors">
                  asadmughalmrp1987@gmail.com
                </span>
              </div>
            </a>

            {/* Availability */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-4">
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Status
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Available for Projects
                </span>
              </div>
            </div>

            {/* Support Response */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-4">
              <div className="w-12 h-12 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Response Time
                </span>
                <span className="text-sm sm:text-base font-bold text-white">
                  Quick Client Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

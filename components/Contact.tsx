'use client';

import { useState } from 'react';
import { Sparkles, Send, MessageSquare, Mail, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Business Website',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      alert('Please fill out your Name, Email, and Project Details.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Let&apos;s Build Something Great Together
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Have a project in mind? Send me your requirements and let&apos;s discuss how I can help bring your vision to life with speed and precision.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923463359347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-5 border border-emerald-500/30 hover:border-emerald-500/60 flex items-center gap-4 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Direct WhatsApp
                    </span>
                    <span className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      +92 346 3359347
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:asadmughalmrp1987@gmail.com"
                  className="glass-card rounded-2xl p-5 border border-purple-500/30 hover:border-purple-500/60 flex items-center gap-4 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Official Email
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-purple-300 transition-colors truncate block">
                      asadmughalmrp1987@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Hostinger Integration Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-400">
              <span className="text-purple-400 font-semibold block mb-1">⚡ Hostinger PHP Mail Ready</span>
              Form setup includes standard form fields ready for Hostinger contact.php integration or direct email redirection.
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/30 bg-[#0a0e24] shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-purple-300 font-semibold">{formData.name}</span>! Muhammad Asad will review your message and reply back shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Business / Company */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Business / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0d1330] border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white text-sm outline-none transition-all"
                    >
                      <option value="Business Website">Business Website</option>
                      <option value="WordPress Development">WordPress Development</option>
                      <option value="Elementor Development">Elementor Development</option>
                      <option value="E-Commerce Website">E-Commerce Website</option>
                      <option value="Responsive Web Design">Responsive Web Design</option>
                      <option value="SEO & Website Optimization">SEO & Website Optimization</option>
                      <option value="Custom Web Project">Custom Web Project</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your website goals, timeline, and design preferences..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 hover:from-purple-500 hover:via-violet-500 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-purple-600/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

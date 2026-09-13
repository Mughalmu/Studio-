'use client';

import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-panel max-w-2xl w-full rounded-2xl border border-purple-500/30 overflow-hidden bg-[#0a0e24] shadow-2xl relative my-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-400">Muhammad Asad — Professional Website Developer</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                This Privacy Policy describes how <strong>Muhammad Asad</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles your personal information when you visit or interact with our web development portfolio and consultation services.
              </p>

              <h4 className="text-base font-bold text-white">1. Information We Collect</h4>
              <p>
                When you submit inquiries through our contact form or contact us via WhatsApp or Email, we collect information such as your name, email address, phone number, company name, and project specifications.
              </p>

              <h4 className="text-base font-bold text-white">2. How We Use Your Information</h4>
              <p>
                We use the information provided solely to evaluate your website development requirements, send project proposals, communicate regarding ongoing development, and deliver support.
              </p>

              <h4 className="text-base font-bold text-white">3. Data Protection & Security</h4>
              <p>
                We maintain strict confidentiality for all client specifications and credentials. We do not sell, rent, or share your contact details with third-party advertisers.
              </p>

              <h4 className="text-base font-bold text-white">4. Contact Information</h4>
              <p>
                If you have questions regarding this Privacy Policy, please reach out via email to <strong className="text-purple-300">asadmughalmrp1987@gmail.com</strong> or WhatsApp at <strong className="text-emerald-400">+923463359347</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                These Terms and Conditions govern all web design, Elementor development, WordPress setup, and optimization services provided by <strong>Muhammad Asad</strong>.
              </p>

              <h4 className="text-base font-bold text-white">1. Service Scope & Milestones</h4>
              <p>
                All project requirements, deliverables, timelines, and payment terms will be agreed upon prior to project commencement. Development work begins upon confirmation of project initiation.
              </p>

              <h4 className="text-base font-bold text-white">2. Client Ownership & Licenses</h4>
              <p>
                Upon final balance settlement, the client receives full ownership of all customized website design files, content uploads, and database structures developed for their site.
              </p>

              <h4 className="text-base font-bold text-white">3. Revisions & Support</h4>
              <p>
                We provide agreed rounds of visual and functional revisions to ensure 100% satisfaction. Post-launch support and maintenance plans are available upon request.
              </p>

              <h4 className="text-base font-bold text-white">4. Hosting & Third-Party Services</h4>
              <p>
                Clients are responsible for their hosting subscriptions (e.g., Hostinger) and domain registrations, though we assist with setup and deployment at no extra charge.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

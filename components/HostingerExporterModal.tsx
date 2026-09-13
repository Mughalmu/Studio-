'use client';

import { useState } from 'react';
import { X, Sparkles, CheckCircle2, Download, Copy, Code, Server, ArrowRight } from 'lucide-react';

interface HostingerExporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HostingerExporterModal({ isOpen, onClose }: HostingerExporterModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'files' | 'guide'>('overview');

  if (!isOpen) return null;

  const hostingerFiles = [
    { name: 'index.html', desc: 'Main standalone single-page portfolio' },
    { name: 'privacy-policy.html', desc: 'Legal Privacy Policy page' },
    { name: 'terms.html', desc: 'Terms & Conditions page' },
    { name: 'assets/css/style.css', desc: 'Tailwind dark-tech styling & animations' },
    { name: 'assets/js/script.js', desc: 'Vanilla JS mobile drawer, portfolio filters & contact form' },
    { name: 'assets/images/', desc: 'High-res generated project mockups & hero graphics' },
    { name: 'contact.php', desc: 'Hostinger PHP mail processing script' },
  ];

  const handleCopyPhp = () => {
    const phpCode = `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $company = strip_tags(trim($_POST["company"]));
    $service = strip_tags(trim($_POST["service"]));
    $details = trim($_POST["details"]);

    $recipient = "asadmughalmrp1987@gmail.com";
    $subject = "New Portfolio Contact: $name ($service)";
    
    $email_content = "Name: $name\\n";
    $email_content .= "Email: $email\\n";
    $email_content .= "Phone: $phone\\n";
    $email_content .= "Company: $company\\n";
    $email_content .= "Service: $service\\n\\n";
    $email_content .= "Message:\\n$details\\n";

    $headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission.";
}
?>`;
    navigator.clipboard.writeText(phpCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadStaticBundle = () => {
    window.open('/index.html', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      <div className="glass-panel max-w-3xl w-full rounded-2xl border border-purple-500/30 overflow-hidden bg-[#0a0e24] shadow-2xl relative my-8 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Server className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Hostinger Deployment Ready
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                  Verified
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                100% lightweight static & PHP files created for Hostinger hPanel upload
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-black/30 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-all ${
              activeTab === 'overview'
                ? 'bg-[#0a0e24] text-purple-300 border-t border-x border-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Package Summary
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-all ${
              activeTab === 'files'
                ? 'bg-[#0a0e24] text-purple-300 border-t border-x border-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            File Structure
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-all ${
              activeTab === 'guide'
                ? 'bg-[#0a0e24] text-purple-300 border-t border-x border-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Hostinger Step-by-Step
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed">
                This project has been generated in two parallel formats:
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300">
                  <li><strong>Next.js App Router:</strong> Live preview & node server environment.</li>
                  <li><strong>Static Hostinger Bundle:</strong> Raw HTML5, CSS3, Vanilla JS, and PHP contact handler located in the <code className="text-purple-300 font-mono">/public/</code> directory ready for zero-build Hostinger hosting.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/index.html"
                  target="_blank"
                  className="p-4 rounded-xl glass-card border border-purple-500/30 hover:border-purple-500/60 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm font-bold text-white">Preview HTML index.html</div>
                      <div className="text-[11px] text-slate-400">Opens static Hostinger entry point</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={handleCopyPhp}
                  className="p-4 rounded-xl glass-card border border-emerald-500/30 hover:border-emerald-500/60 flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-sm font-bold text-white">Copy contact.php Code</div>
                      <div className="text-[11px] text-emerald-300">
                        {copied ? 'Copied to Clipboard!' : 'Click to copy Hostinger mail script'}
                      </div>
                    </div>
                  </div>
                  <Copy className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-300">
                All files below reside in <code className="text-purple-300 font-mono">/public/</code> and can be zipped or dragged directly into your Hostinger <code className="text-emerald-300 font-mono">public_html</code> directory:
              </p>
              <div className="space-y-2">
                {hostingerFiles.map((file, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-purple-300">{file.name}</span>
                    <span className="text-slate-400">{file.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <h4 className="font-bold text-white text-base">How to deploy to Hostinger in 3 minutes:</h4>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <strong className="text-white">Log in to Hostinger hPanel:</strong> Navigate to your domain and open <strong>File Manager</strong>.
                </li>
                <li className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <strong className="text-white">Open public_html:</strong> Go to the <code className="text-purple-300 font-mono">public_html</code> folder.
                </li>
                <li className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <strong className="text-white">Upload Files:</strong> Upload <code className="text-purple-300 font-mono">index.html</code>, <code className="text-purple-300 font-mono">privacy-policy.html</code>, <code className="text-purple-300 font-mono">terms.html</code>, <code className="text-purple-300 font-mono">contact.php</code>, and the <code className="text-purple-300 font-mono">assets/</code> folder.
                </li>
                <li className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <strong className="text-white">SSL & Domain:</strong> Enable Hostinger Free SSL in hPanel. Your portfolio website for Muhammad Asad is now live!
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between bg-black/40">
          <span className="text-xs text-slate-400">Muhammad Asad Portfolio Exporter</span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors"
          >
            Close Exporter
          </button>
        </div>
      </div>
    </div>
  );
}

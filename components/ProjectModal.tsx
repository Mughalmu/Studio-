'use client';

import Image from 'next/image';
import { X, ExternalLink, CheckCircle2, Code2, Globe, Sparkles } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterCategory: 'Business' | 'WordPress' | 'E-Commerce' | 'Service';
  image: string;
  shortDesc: string;
  fullOverview: string;
  servicesProvided: string[];
  technologies: string[];
  mainObjective: string;
  keyFeatures: string[];
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      <div className="glass-panel max-w-3xl w-full rounded-2xl border border-purple-500/30 overflow-hidden bg-[#0a0e24] my-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white transition-colors border border-white/10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e24] via-[#0a0e24]/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-bold uppercase tracking-wider mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
              PROJECT OVERVIEW
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Objective */}
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Main Objective
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              {project.mainObjective}
            </p>
          </div>

          {/* Grid of details: Services & Technologies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Services Provided
              </h4>
              <ul className="space-y-2">
                {project.servicesProvided.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Tech Stack & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="#contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm text-center shadow-lg shadow-purple-600/30"
            >
              Build a Site Like This
            </a>
            <button
              onClick={() => {
                alert(`Live preview demo for "${project.title}" - Contact Muhammad Asad for a live interactive walk-through!`);
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-purple-400" />
              Request Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

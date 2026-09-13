'use client';

import { useState } from 'react';
import { 
  Building2, 
  Globe2, 
  Layers, 
  ShoppingBag, 
  Smartphone, 
  Search, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  num: string;
  icon: any;
  title: string;
  category: string;
  description: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    num: '01',
    icon: Building2,
    title: 'Business Websites',
    category: 'Corporate & Lead Gen',
    description: 'Create professional websites designed to establish business credibility, highlight services, and convert casual visitors into qualified leads.',
    features: [
      'Custom Hero & Lead Capture Layouts',
      'Clear Call-to-Action Strategy',
      'Trust Badges & Testimonial Integration',
      'Fast Load Speeds & SSL Setup'
    ]
  },
  {
    id: 'wordpress-development',
    num: '02',
    icon: Globe2,
    title: 'WordPress Development',
    category: 'CMS & Custom Themes',
    description: 'Custom WordPress websites built with clean code, secure structure, and flexible content management so you can manage your content with total ease.',
    features: [
      'Custom Theme & Template Design',
      'Plugin Setup & Integration',
      'User-Friendly Admin Dashboard',
      'Security & Automated Backup Systems'
    ]
  },
  {
    id: 'elementor-development',
    num: '03',
    icon: Layers,
    title: 'Elementor Development',
    category: 'Visual Drag & Drop',
    description: 'Pixel-perfect, lightweight Elementor websites built with responsive layouts, fluid animations, and visual editing freedom without code bloat.',
    features: [
      'Pixel-Perfect Design Conversion',
      'Custom Elementor Widgets & Templates',
      'Mobile & Tablet Layout Tuning',
      'Easy Page Editing Training for Clients'
    ]
  },
  {
    id: 'ecommerce-websites',
    num: '04',
    icon: ShoppingBag,
    title: 'E-Commerce Websites',
    category: 'WooCommerce & Stores',
    description: 'Modern online stores designed for smooth product discovery, customer trust, secure payment gateways, and high checkout conversion rates.',
    features: [
      'WooCommerce Setup & Catalog Design',
      'Secure Payment Gateway Integration',
      'Inventory & Order Tracking Setup',
      'Optimized Mobile Checkout Experience'
    ]
  },
  {
    id: 'responsive-design',
    num: '05',
    icon: Smartphone,
    title: 'Responsive Web Design',
    category: 'Multi-Device Styling',
    description: 'Websites meticulously optimized to render flawlessly across desktop monitors, laptops, tablets, and smartphones of all screen sizes.',
    features: [
      'Mobile-First Fluid Breakpoints',
      'Touch-Optimized Controls & Menus',
      'Retina Ready Graphics & Typography',
      'Cross-Browser & OS Compatibility'
    ]
  },
  {
    id: 'seo-optimization',
    num: '06',
    icon: Search,
    title: 'SEO & Website Optimization',
    category: 'Performance & Speed',
    description: 'Clean website architecture, PageSpeed score boosting, schema markup implementation, and SEO-friendly setup to help you rank higher on Google.',
    features: [
      'PageSpeed & Core Web Vitals Optimization',
      'On-Page Meta & Schema Markup',
      'Image Compression & Lazy Loading',
      'Clean Code & Technical SEO Audit'
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 relative bg-[#050713]">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>WHAT I DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional Web Development Services
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything you need to build a professional online presence that looks exceptional, works smoothly and converts visitors into customers.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 relative border border-purple-500/20 hover:border-purple-500/50"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 via-violet-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-white/20 group-hover:text-purple-400/40 transition-colors">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/btn pt-4 border-t border-white/5 w-full justify-between"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel max-w-lg w-full rounded-2xl p-6 sm:p-8 border border-purple-500/30 relative bg-[#0a0e24]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase">{selectedService.category}</span>
                <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm text-center shadow-lg shadow-purple-600/30"
              >
                Request This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

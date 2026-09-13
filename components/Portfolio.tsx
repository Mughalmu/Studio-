'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import ProjectModal, { ProjectItem } from './ProjectModal';

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'modern-business-website',
    title: 'Modern Business Website',
    category: 'Business Website',
    filterCategory: 'Business',
    image: '/assets/images/project_business.jpg',
    shortDesc: 'A high-converting corporate website with clean lead generation forms, interactive service breakdown, and sleek dark mode UI.',
    fullOverview: 'Designed and built for a fast-growing tech firm needing to establish high corporate credibility and increase monthly inbound consultation requests.',
    servicesProvided: ['Custom Design', 'WordPress Integration', 'Lead Form Setup', 'Speed Optimization'],
    technologies: ['WordPress', 'Elementor Pro', 'Custom CSS', 'Google Analytics'],
    mainObjective: 'Convert casual website traffic into high-intent inbound consultation leads with clear value presentation.',
    keyFeatures: [
      'Custom Hero Section with Video Modal',
      'Interactive ROI Calculator Widget',
      'Fast 95+ PageSpeed Score',
      'Integrated CRM Contact Forms'
    ]
  },
  {
    id: 'beauty-salon-website',
    title: 'Beauty & Salon Website',
    category: 'Beauty / Service Business',
    filterCategory: 'Service',
    image: '/assets/images/project_beauty.jpg',
    shortDesc: 'An elegant, luxury-focused website with online appointment booking, service menu showcase, and Instagram photo feed.',
    fullOverview: 'A luxury boutique beauty salon site designed to showcase premium treatments, highlight stylist portfolios, and streamline client bookings.',
    servicesProvided: ['UI/UX Design', 'Appointment Booking Integration', 'Mobile Optimization', 'Local SEO'],
    technologies: ['WordPress', 'Elementor', 'Amelia Booking', 'WooCommerce'],
    mainObjective: 'Automate appointment bookings and reflect luxury visual branding to attract high-end clientele.',
    keyFeatures: [
      'Instant Online Booking Engine',
      'Interactive Service Menu with Pricing',
      'Client Before/After Gallery',
      'Automated SMS & Email Reminders'
    ]
  },
  {
    id: 'ecommerce-fashion-store',
    title: 'E-Commerce Store',
    category: 'E-Commerce',
    filterCategory: 'E-Commerce',
    image: '/assets/images/project_ecommerce.jpg',
    shortDesc: 'Modern online store built for speed, seamless mobile checkout, custom product filtering, and payment gateway integration.',
    fullOverview: 'A full-scale e-commerce storefront tailored for modern retail, complete with lightning-fast cart drawers and high-converting checkout flows.',
    servicesProvided: ['Store Architecture', 'WooCommerce Setup', 'Payment Gateways', 'Conversion Rate Tuning'],
    technologies: ['WordPress', 'WooCommerce', 'Stripe API', 'Elementor Pro'],
    mainObjective: 'Increase checkout completion rates and deliver an effortless mobile shopping experience.',
    keyFeatures: [
      'AJAX Instant Product Search',
      'Slide-out Cart Drawer',
      'Multi-currency & Payment Gateway',
      'Automated Inventory Tracking'
    ]
  },
  {
    id: 'professional-service-website',
    title: 'Professional Service Website',
    category: 'Corporate / Professional',
    filterCategory: 'WordPress',
    image: '/assets/images/project_service.jpg',
    shortDesc: 'Trust-focused platform for financial & legal consulting services with downloadable resources and client case studies.',
    fullOverview: 'A corporate web platform built for professional service providers looking to publish thought leadership articles, case studies, and book consultations.',
    servicesProvided: ['Information Architecture', 'WordPress Theme Customization', 'Blog & Resource Center', 'SEO'],
    technologies: ['WordPress', 'Elementor', 'Yoast SEO', 'HTML5/CSS3'],
    mainObjective: 'Establish brand authority and provide smooth client resource downloads.',
    keyFeatures: [
      'Structured Case Study Library',
      'Gated PDF Whitepaper Downloads',
      'Attorney / Consultant Bio Pages',
      'Multi-language Support Ready'
    ]
  },
  {
    id: 'creative-agency-website',
    title: 'Creative Agency Website',
    category: 'Agency',
    filterCategory: 'Business',
    image: '/assets/images/project_agency.jpg',
    shortDesc: 'Dynamic dark-mode portfolio for a digital agency featuring custom scroll interactions, grid layouts, and video showcases.',
    fullOverview: 'Built to highlight high-impact creative portfolio pieces, team stories, and interactive project breakdowns for a premier digital agency.',
    servicesProvided: ['Creative Web Design', 'Elementor Animations', 'Video Integration', 'Performance Audit'],
    technologies: ['WordPress', 'Elementor Pro', 'Lottie Animations', 'JavaScript'],
    mainObjective: 'Captivate visitors with creative visual motion while retaining fast load times.',
    keyFeatures: [
      'Smooth Scroll Micro-Interactions',
      'Filterable Interactive Portfolio',
      'Video Background Headers',
      'Custom Glassmorphic Components'
    ]
  },
  {
    id: 'local-business-website',
    title: 'Local Business Website',
    category: 'Business / Local Service',
    filterCategory: 'Service',
    image: '/assets/images/project_local.jpg',
    shortDesc: 'High-visibility local service website optimized for mobile call clicks, Google Maps integration, and customer reviews.',
    fullOverview: 'Designed for local business owners seeking top Google Maps visibility and quick one-tap mobile phone call conversions.',
    servicesProvided: ['Local Business Website', 'Google Maps SEO', 'Click-to-Call Setup', 'Review Management'],
    technologies: ['WordPress', 'Elementor', 'Google My Business API', 'Schema Markup'],
    mainObjective: 'Drive local phone calls and map directions from mobile traffic.',
    keyFeatures: [
      'Sticky Mobile Click-To-Call Button',
      'Interactive Google Maps Location',
      'Verified Customer Review Grid',
      'Fast Mobile Performance'
    ]
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterCategories = ['All', 'Business', 'WordPress', 'E-Commerce', 'Service'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative bg-[#050713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Recent Website Projects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A selection of modern websites designed and developed for different business needs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group border border-purple-500/20 hover:border-purple-500/50 flex flex-col justify-between"
            >
              <div>
                {/* Mockup Preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1330] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-purple-300 text-[11px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl bg-purple-950/50 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

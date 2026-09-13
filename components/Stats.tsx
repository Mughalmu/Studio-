'use client';

export default function Stats() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Web Projects' },
    { value: '30+', label: 'Happy Clients' },
    { value: '100%', label: 'Responsive Websites' },
    { value: '24/7', label: 'Client Support' },
  ];

  return (
    <section className="py-16 relative bg-[#0a0e24]/60 border-y border-purple-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl glass-panel border border-purple-500/10 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-purple mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

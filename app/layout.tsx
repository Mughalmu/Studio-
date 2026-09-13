import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Asad | Professional Website Developer',
  description: 'Muhammad Asad is a professional website developer specializing in modern WordPress, Elementor, responsive business and e-commerce websites, optimization, and SEO.',
  keywords: [
    'Muhammad Asad',
    'Website Developer',
    'WordPress Developer',
    'Elementor Developer',
    'E-Commerce Website Developer',
    'Responsive Web Design',
    'SEO Optimization',
    'Business Website Development'
  ],
  authors: [{ name: 'Muhammad Asad', url: 'https://asadmughalmrp.com' }],
  creator: 'Muhammad Asad',
  openGraph: {
    title: 'Muhammad Asad | Professional Website Developer',
    description: 'Modern, responsive, and conversion-focused websites that help businesses grow online.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Muhammad Asad Portfolio',
    images: [
      {
        url: '/assets/images/hero_laptop.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Asad - Professional Website Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Asad | Professional Website Developer',
    description: 'Building High-Performance Websites That Grow Your Business.',
    images: ['/assets/images/hero_laptop.jpg']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Muhammad Asad - Professional Website Developer',
    'image': '/assets/images/hero_laptop.jpg',
    'description': 'Professional Website Developer specializing in WordPress, Elementor, Business Websites, E-Commerce, and SEO.',
    'telephone': '+923463359347',
    'email': 'asadmughalmrp1987@gmail.com',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'PK'
    },
    'knowsAbout': [
      'WordPress Development',
      'Elementor Page Builder',
      'Responsive Web Design',
      'E-Commerce Store Creation',
      'SEO & Website Speed Optimization'
    ],
    'url': 'https://asadmughalmrp.com'
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050713] text-slate-100 antialiased selection:bg-purple-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


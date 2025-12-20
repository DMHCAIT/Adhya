'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sparkles, PartyPopper, Calendar, ShoppingBag, MessageCircle, Check, ArrowRight } from 'lucide-react';

export default function EmbroideryServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const priceRanges = [
    { id: 'all', label: 'All Prices', range: '₹500 - ₹5,000+' },
    { id: 'budget', label: 'Budget Friendly', range: '₹500 - ₹1,500', min: 500, max: 1500 },
    { id: 'mid', label: 'Premium', range: '₹1,500 - ₹3,000', min: 1500, max: 3000 },
    { id: 'luxury', label: 'Luxury', range: '₹3,000 - ₹5,000+', min: 3000, max: 5000 },
  ];

  const categories = [
    { id: 'all', name: 'All Designs', icon: Sparkles, description: 'Browse everything' },
    { id: 'party', name: 'Party Wear', icon: PartyPopper, description: 'Glamorous evening designs' },
    { id: 'function', name: 'Functions & Events', icon: Calendar, description: 'Traditional ceremonies' },
    { id: 'casual', name: 'Casual Wear', icon: ShoppingBag, description: 'Everyday elegance' },
  ];

  const embroideryWorks = [
    {
      id: 1,
      name: 'Floral Border Design',
      category: 'casual',
      price: 800,
      image: '/Custom Blouse Stitching.png',
      description: 'Delicate floral embroidery perfect for casual sarees and kurtis',
      stitchCount: '5,000 stitches',
      timeframe: '3-5 days',
      colors: '3-5 colors'
    },
    {
      id: 2,
      name: 'Heavy Bridal Work',
      category: 'party',
      price: 4500,
      image: '/Designer Lehengas.png',
      description: 'Intricate zardozi-style computer embroidery for bridal blouses',
      stitchCount: '25,000+ stitches',
      timeframe: '7-10 days',
      colors: '8+ colors with sequins'
    },
    {
      id: 3,
      name: 'Peacock Motif',
      category: 'function',
      price: 2200,
      image: '/Designer Sarees.png',
      description: 'Traditional peacock design for festive occasions',
      stitchCount: '12,000 stitches',
      timeframe: '5-7 days',
      colors: '6-8 colors'
    },
    {
      id: 4,
      name: 'Geometric Patterns',
      category: 'casual',
      price: 1200,
      image: '/Custom Blouse Stitching.png',
      description: 'Modern geometric designs for contemporary wear',
      stitchCount: '7,000 stitches',
      timeframe: '4-6 days',
      colors: '4-6 colors'
    },
    {
      id: 5,
      name: 'Wedding Special',
      category: 'party',
      price: 5000,
      image: '/Designer Lehengas.png',
      description: 'Grand wedding embroidery with stone work',
      stitchCount: '30,000+ stitches',
      timeframe: '10-14 days',
      colors: '10+ colors with stones'
    },
    {
      id: 6,
      name: 'Temple Border',
      category: 'function',
      price: 1800,
      image: '/Designer Sarees.png',
      description: 'Classic temple border for traditional sarees',
      stitchCount: '10,000 stitches',
      timeframe: '5-7 days',
      colors: '5-7 colors'
    },
    {
      id: 7,
      name: 'Simple Neckline',
      category: 'casual',
      price: 600,
      image: '/Custom Blouse Stitching.png',
      description: 'Elegant neckline embroidery for daily wear',
      stitchCount: '4,000 stitches',
      timeframe: '2-4 days',
      colors: '2-4 colors'
    },
    {
      id: 8,
      name: 'Reception Glamour',
      category: 'party',
      price: 3800,
      image: '/Party & Occasion Wear.png',
      description: 'Sparkling embroidery for reception wear',
      stitchCount: '20,000 stitches',
      timeframe: '7-9 days',
      colors: '7-9 colors with beads'
    },
    {
      id: 9,
      name: 'Festival Special',
      category: 'function',
      price: 1500,
      image: '/Designer Sarees.png',
      description: 'Vibrant festival designs for celebrations',
      stitchCount: '8,000 stitches',
      timeframe: '4-6 days',
      colors: '5-6 colors'
    },
    {
      id: 10,
      name: 'Minimalist Chic',
      category: 'casual',
      price: 900,
      image: '/Custom Blouse Stitching.png',
      description: 'Subtle contemporary embroidery',
      stitchCount: '5,500 stitches',
      timeframe: '3-5 days',
      colors: '3-4 colors'
    },
    {
      id: 11,
      name: 'Grand Occasion',
      category: 'party',
      price: 4200,
      image: '/Designer Lehengas.png',
      description: 'Majestic embroidery for grand events',
      stitchCount: '22,000 stitches',
      timeframe: '8-10 days',
      colors: '8-10 colors'
    },
    {
      id: 12,
      name: 'Traditional Paisley',
      category: 'function',
      price: 1600,
      image: '/Designer Sarees.png',
      description: 'Classic paisley motifs for traditional attire',
      stitchCount: '9,000 stitches',
      timeframe: '4-6 days',
      colors: '5-6 colors'
    },
  ];

  const filteredWorks = embroideryWorks.filter(work => {
    const categoryMatch = selectedCategory === 'all' || work.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range && range.min && range.max) {
        priceMatch = work.price >= range.min && work.price <= range.max;
      }
    }
    
    return categoryMatch && priceMatch;
  });

  const whatsappNumber = '919177171594';
  const getCatalogMessage = encodeURIComponent('Hi ADHYA! I would like to see your complete computer embroidery design catalog. Please send me the designs so I can select and finalize my order.');

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Custom Blouse Stitching.png"
            alt="Computer Embroidery Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        
        <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <Sparkles className="w-16 h-16 text-[#C8A96A] mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Computer Embroidery Services
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto mb-4">
              Premium Computer Embroidery from ₹500 to ₹5,000+
            </p>
            <p className="text-base font-light text-white/80 max-w-2xl mx-auto">
              Transform your garments with our precision computer embroidery designs
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              How It Works
            </h2>
            <p className="text-lg font-light text-gray-700 leading-relaxed">
              Simple, fast, and convenient embroidery ordering process
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Browse Designs', desc: 'Select from our catalog below or request custom designs', icon: '👀' },
              { step: '2', title: 'Get Catalog', desc: 'Click "Get Catalog" to receive full design collection on WhatsApp', icon: '📱' },
              { step: '3', title: 'Finalize Design', desc: 'Review designs, select your favorite, and confirm via WhatsApp', icon: '✅' },
              { step: '4', title: 'Place Order', desc: 'We process your order and deliver within the specified timeframe', icon: '🎁' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#C8A96A]/10 flex items-center justify-center">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="text-sm tracking-wider uppercase text-[#C8A96A] mb-2">Step {item.step}</div>
                <h3 className="text-xl font-medium text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {item.title}
                </h3>
                <p className="text-sm font-light text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Range Filter */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Select Your Price Range
            </h2>
            <p className="text-lg font-light text-gray-600">
              Designs starting from ₹500 to premium ₹5,000+ collections
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {priceRanges.map((range) => (
              <motion.button
                key={range.id}
                onClick={() => setSelectedPriceRange(range.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 text-center transition-all ${
                  selectedPriceRange === range.id
                    ? 'bg-[#C8A96A] text-white shadow-xl'
                    : 'bg-white text-[#1C1C1C] hover:shadow-lg'
                }`}
              >
                <div className="text-2xl font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {range.label}
                </div>
                <div className="text-sm font-medium">{range.range}</div>
                {selectedPriceRange === range.id && (
                  <Check className="w-6 h-6 mx-auto mt-2" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Choose Occasion Type
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 text-center transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#1C1C1C] text-white shadow-xl'
                      : 'bg-white text-[#1C1C1C] hover:shadow-lg'
                  }`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-xl font-medium mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {category.name}
                  </div>
                  <div className="text-xs font-light opacity-80">{category.description}</div>
                  {selectedCategory === category.id && (
                    <Check className="w-5 h-5 mx-auto mt-2" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embroidery Works Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Embroidery Collection
            </h2>
            <p className="text-lg font-light text-gray-600">
              Showing {filteredWorks.length} design{filteredWorks.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#FAF9F7] overflow-hidden group hover:shadow-2xl transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 shadow-lg">
                    <div className="text-lg font-medium text-[#C8A96A]">₹{work.price.toLocaleString()}</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-light text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {work.name}
                  </h3>
                  <p className="text-sm font-light text-gray-600 mb-4">{work.description}</p>

                  <div className="space-y-2 mb-4 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Stitch Count:</span>
                      <span className="font-medium">{work.stitchCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Colors:</span>
                      <span className="font-medium">{work.colors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeframe:</span>
                      <span className="font-medium">{work.timeframe}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I'm interested in ${work.name} (₹${work.price}). Please share more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-3 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors text-sm tracking-wider"
                  >
                    ORDER ON WHATSAPP
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg font-light text-gray-600">No designs found for this filter combination.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="mt-4 px-6 py-3 bg-[#C8A96A] text-white hover:bg-[#1C1C1C] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Get Full Catalog CTA */}
      <section className="section-padding bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Want to See More Designs?
            </h2>
            <p className="text-lg font-light text-white/90 mb-8">
              Get our complete catalog on WhatsApp with 100+ embroidery designs to choose from
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${getCatalogMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-lg hover:bg-[#128C7E] transition-colors tracking-wider group"
            >
              <MessageCircle className="w-6 h-6" />
              GET FULL CATALOG ON WHATSAPP
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm font-light text-white/70 mt-4">
              Browse designs, select your favorite, and finalize your order directly on WhatsApp
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Embroidery */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Why Choose ADHYA Embroidery
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Precision Quality', desc: 'Advanced computer embroidery ensures consistent, flawless designs every time', icon: '🎯' },
              { title: 'Fast Turnaround', desc: 'Most designs completed within 3-10 days depending on complexity', icon: '⚡' },
              { title: 'Affordable Pricing', desc: 'Starting from just ₹500 with premium options up to ₹5,000+', icon: '💰' },
              { title: 'Custom Designs', desc: 'Don\'t see what you want? We can create custom embroidery patterns', icon: '✨' },
              { title: 'WhatsApp Ordering', desc: 'Convenient ordering and design finalization via WhatsApp', icon: '📱' },
              { title: 'Expert Guidance', desc: 'Our team helps you choose the perfect design for your garment', icon: '👥' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-[#FAF9F7] hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {item.title}
                </h3>
                <p className="text-sm font-light text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Ready to Add Beautiful Embroidery?
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Contact us on WhatsApp now to get started with your embroidery order
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${getCatalogMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors text-sm tracking-wider"
              >
                <MessageCircle className="w-5 h-5" />
                GET CATALOG ON WHATSAPP
              </a>
              <Link
                href="/book-discussion"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-sm tracking-wider"
              >
                BOOK CONSULTATION
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

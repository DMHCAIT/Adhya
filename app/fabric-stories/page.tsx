'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Leaf, Heart, Shield, ArrowRight } from 'lucide-react';

export default function FabricStoriesPage() {
  const fabrics = [
    {
      name: 'Pure Silk',
      tagline: 'Timeless Luxury',
      icon: Sparkles,
      story: 'For over 5000 years, silk has been the fabric of royalty. Our pure silk comes from the finest sericulture regions of India - Karnataka, Assam, and Varanasi. Each thread tells a story of tradition, craftsmanship, and unparalleled elegance.',
      benefits: [
        'Natural protein fiber that\'s gentle on skin',
        'Breathable and temperature-regulating',
        'Natural sheen that photographs beautifully',
        'Drapes elegantly with minimal creasing',
        'Ages gracefully, becoming softer over time'
      ],
      care: 'Dry clean only. Store in cotton bags to let the fabric breathe. Avoid direct sunlight.',
      bestFor: 'Bridal wear, formal occasions, traditional ceremonies',
      priceWorth: 'Pure silk costs more because each meter requires 2000-3000 silkworm cocoons and skilled weaving.',
      image: '/Designer Sarees.png',
      color: '#F5F5DC'
    },
    {
      name: 'Velvet',
      tagline: 'Regal Richness',
      icon: Heart,
      story: 'Velvet represents the pinnacle of luxury textiles. Its dense pile and lustrous finish have adorned royalty for centuries. Our velvet is carefully sourced for its weight, pile density, and color depth - creating that signature royal look.',
      benefits: [
        'Dense pile creates rich color depth',
        'Naturally warm - perfect for winter weddings',
        'Photographs with stunning depth and texture',
        'Holds embroidery beautifully',
        'Creates structured, elegant silhouettes'
      ],
      care: 'Professional dry cleaning recommended. Store hanging to maintain pile. Avoid crushing.',
      bestFor: 'Winter weddings, evening ceremonies, statement pieces',
      priceWorth: 'Premium velvet requires special looms and skilled artisans. Its weight and pile density justify the investment.',
      image: '/Designer Lehengas.png',
      color: '#800020'
    },
    {
      name: 'Georgette',
      tagline: 'Ethereal Grace',
      icon: Leaf,
      story: 'Named after French dressmaker Georgette de la Plante, this fabric brings together lightness and elegance. Our georgette is specially selected for its crisp texture and beautiful drape - perfect for Indian weather.',
      benefits: [
        'Lightweight and comfortable for all-day wear',
        'Breathable - ideal for summer weddings',
        'Easy to dance in - flows beautifully',
        'Takes embroidery without weighing down',
        'Versatile for both traditional and contemporary'
      ],
      care: 'Hand wash or gentle machine wash. Iron on low heat. Can be steamed.',
      bestFor: 'Summer events, daytime functions, comfortable elegance',
      priceWorth: 'Quality georgette with proper texture and weight costs more, but ensures comfort and beautiful drape.',
      image: '/Party & Occasion Wear.png',
      color: '#E6E6FA'
    },
    {
      name: 'Banarasi',
      tagline: 'Heritage Weaving',
      icon: Shield,
      story: 'From the ancient city of Varanasi comes this legendary fabric. Every Banarasi piece takes weeks to weave on traditional handlooms. The intricate brocade work uses real gold and silver threads - a tradition passed down through generations.',
      benefits: [
        'Each piece is unique - handwoven art',
        'Real gold/silver zari for authentic shimmer',
        'Intricate patterns that tell stories',
        'Investment piece - can be heirloom',
        'Unmistakable grandeur and tradition'
      ],
      care: 'Dry clean only. Store wrapped in muslin. Air occasionally. Keep away from moisture.',
      bestFor: 'Traditional weddings, cultural ceremonies, heirloom pieces',
      priceWorth: 'Authentic Banarasi takes 15-30 days to weave by master artisans. Real zari costs significantly more than imitation.',
      image: '/Designer Sarees.png',
      color: '#FFD700'
    }
  ];

  const comfortGuide = [
    {
      title: 'For Children',
      desc: 'We use breathable, soft fabrics with smooth linings. No scratchy embroidery on the inside. Comfort is non-negotiable for little ones.',
      icon: '👶'
    },
    {
      title: 'For All-Day Events',
      desc: 'Georgette, crepe, and soft net fabrics that don\'t weigh you down. You should enjoy your event, not endure your outfit.',
      icon: '⏰'
    },
    {
      title: 'For Heavy Embroidery',
      desc: 'We use inner linings to prevent irritation. Strategic padding for heavy areas. Beauty without compromise.',
      icon: '✨'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Sarees.png"
            alt="Fabric Stories"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
        </div>
        
        <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Fabric Stories
            </h1>
            <p className="text-xl font-light text-white/90 max-w-3xl mx-auto">
              Understanding the soul of luxury textiles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
              At ADHYA, we believe that understanding your fabric is understanding your outfit. 
              The right fabric makes all the difference - from how you feel to how you look, 
              from comfort to photographs, from the event to the weather.
            </p>
            <p className="text-base font-light text-gray-600">
              Let us tell you the story behind each fabric we use, so you can make informed choices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fabric Stories */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding space-y-32">
          {fabrics.map((fabric, index) => (
            <motion.div
              key={fabric.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                  <Image
                    src={fabric.image}
                    alt={fabric.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: fabric.color, opacity: 0.1 }}></div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8A96A]/10 flex items-center justify-center">
                    <fabric.icon className="w-6 h-6 text-[#C8A96A]" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {fabric.name}
                    </h2>
                    <p className="text-sm font-light text-[#C8A96A] tracking-wider">
                      {fabric.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                  {fabric.story}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-3">Why Choose This Fabric</h3>
                    <ul className="space-y-2">
                      {fabric.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm font-light text-gray-600">
                          <span className="text-[#C8A96A] mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Best For</h3>
                    <p className="text-sm font-light text-gray-600">{fabric.bestFor}</p>
                  </div>

                  <div className="bg-[#FAF9F7] p-4 border-l-4 border-[#C8A96A]">
                    <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Price Worth</h3>
                    <p className="text-sm font-light text-gray-700">{fabric.priceWorth}</p>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-2">Care Instructions</h3>
                    <p className="text-sm font-light text-gray-600">{fabric.care}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comfort Guide */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Comfort & Care
            </h2>
            <p className="text-base font-light text-gray-600">
              Beautiful outfits should feel as good as they look
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {comfortGuide.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-[#FAF9F7] to-white"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-xl font-light text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {guide.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Touch, Feel, Decide
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Book a consultation to experience our fabrics in person
            </p>
            <Link
              href="/book-discussion"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider group"
            >
              BOOK FABRIC CONSULTATION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

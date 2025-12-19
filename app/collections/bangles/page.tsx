'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Circle, Check, ArrowRight } from 'lucide-react';

export default function BanglesCollectionPage() {
  const categories = [
    {
      name: "Traditional Gold-Plated",
      count: "20+ Designs",
      image: "/Bangle design.png",
      description: "Classic gold-plated bangles with intricate patterns, perfect for weddings and traditional ceremonies"
    },
    {
      name: "Stone-Studded Bangles",
      count: "15+ Designs",
      image: "/Bangle design.png",
      description: "Elegant bangles adorned with precious and semi-precious stones, ideal for bridal wear"
    },
    {
      name: "Kundan & Polki Work",
      count: "12+ Designs",
      image: "/Bangle design.png",
      description: "Exquisite kundan and polki bangles for a regal look at grand celebrations"
    },
    {
      name: "Contemporary Designs",
      count: "10+ Designs",
      image: "/Bangle design.png",
      description: "Modern fusion bangles with minimalist designs for everyday elegance"
    },
    {
      name: "Bridal Bangle Sets",
      count: "8+ Complete Sets",
      image: "/Bangle design.png",
      description: "Complete bridal bangle sets coordinated with your wedding outfit"
    },
    {
      name: "Festival Special",
      count: "15+ Designs",
      image: "/Bangle design.png",
      description: "Vibrant and colorful bangle sets perfect for festivals and celebrations"
    }
  ];

  const features = [
    "Expert bangle sizing and fitting",
    "Coordination with bridal outfits",
    "Traditional and contemporary styles",
    "Premium quality materials",
    "Custom color combinations",
    "Matching jewelry suggestions",
    "Safe storage guidance",
    "Cleaning and maintenance tips"
  ];

  const occasions = [
    { event: "Wedding Day", desc: "Complete bridal bangle sets with gold-plated and stone work" },
    { event: "Reception & Sangeet", desc: "Contemporary and statement bangle designs" },
    { event: "Festivals", desc: "Colorful and vibrant traditional bangles" },
    { event: "Daily Wear", desc: "Simple and elegant minimalist designs" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Bangle design.png"
            alt="Bangle Designs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"></div>
        </div>
        
        <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-white hover:text-[#C8A96A] transition-colors mb-8 text-sm tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent mx-auto mb-8"
            />
            
            <Circle className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" strokeWidth={1} />
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Bangle Designs
            </h1>
            
            <p className="text-lg md:text-xl font-light text-[#E8C2C2] max-w-3xl mx-auto leading-relaxed mb-4">
              Traditional & Contemporary Elegance
            </p>
            
            <p className="text-base font-light text-gray-300 max-w-2xl mx-auto">
              50+ Exquisite Bangle Sets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl font-light text-[#1C1C1C] leading-relaxed mb-8">
              Complete your bridal and festive look with our exquisite collection of bangles. From traditional gold-plated designs to contemporary stone-studded pieces, we offer a curated selection that perfectly complements your outfit.
            </p>
            <p className="text-base font-light text-[#5E5E5E] leading-relaxed">
              Our expert consultants help you coordinate bangle designs with your bridal lehengas, sarees, and ethnic wear. Each piece is carefully selected for quality, craftsmanship, and timeless elegance, ensuring you shine on every special occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Collection</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Bangle Range
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
              <Link href={`/collections/bangles/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="group block"
              >
                <div className="relative overflow-hidden mb-6 shadow-2xl">
                  <div className="aspect-square relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-light text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {category.name}
                </h3>
                <p className="text-sm font-light text-[#C8A96A] mb-4 tracking-wider">
                  {category.count}
                </p>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {category.description}
                </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-5xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Perfect for Every Occasion
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion.event}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white border border-[#E8C2C2] hover:border-[#C8A96A] transition-colors"
              >
                <h3 className="text-xl font-light text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {occasion.event}
                </h3>
                <p className="text-sm font-light text-[#5E5E5E]">{occasion.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 border border-[#E8C2C2] hover:border-[#C8A96A] transition-colors"
              >
                <Check className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-base font-light text-[#5E5E5E]">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#1C1C1C] via-[#0A0A0A] to-[#1C1C1C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
        
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Find Your Perfect Bangle Set
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Visit us for personalized bangle selection and styling consultation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-discussion"
                className="inline-flex items-center gap-3 px-14 py-6 bg-white text-[#1C1C1C] text-sm font-light tracking-[0.3em] uppercase hover:bg-[#C8A96A] hover:text-white transition-all duration-300 shadow-2xl group"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center gap-3 px-14 py-6 border-2 border-white text-white text-sm font-light tracking-[0.3em] uppercase hover:bg-white hover:text-[#1C1C1C] transition-all duration-300"
              >
                View All Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Check, ArrowRight } from 'lucide-react';

export default function ChildrensCollectionPage() {
  const categories = [
    {
      name: "Party Gowns",
      count: "15+ Designs",
      image: "/Children's Designer Wear.png",
      slug: "party-gowns",
      description: "Vibrant princess-style gowns with net, satin, and silk fabrics - perfect for birthday parties"
    },
    {
      name: "Wedding Lehengas",
      count: "12+ Designs",
      image: "/Children's Designer Wear.png",
      slug: "wedding-lehengas",
      description: "Comfortable ethnic lehengas with beautiful embroidery for flower girls and little attendees"
    },
    {
      name: "Festive Frocks",
      count: "10+ Designs",
      image: "/Children's Designer Wear.png",
      slug: "festive-frocks",
      description: "Indo-western fusion wear and traditional frocks for festivals and family celebrations"
    }
  ];

  const features = [
    "Age-appropriate designs (2-14 years)",
    "Soft, child-friendly fabrics",
    "Easy to wear and remove",
    "Growing room built-in",
    "Machine washable options",
    "Mother-daughter matching available"
  ];

  const ageGroups = [
    { range: "2-5 years", desc: "Toddlers & Pre-school", focus: "Comfort and ease of movement" },
    { range: "6-10 years", desc: "Junior", focus: "Playful elegance and durability" },
    { range: "11-14 years", desc: "Pre-teen", focus: "Contemporary styles with sophistication" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Children's Designer Wear.png"
            alt="Children's Collection"
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
            
            <Heart className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" strokeWidth={1} />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Children's Collection
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Little Princesses, Big Dreams
            </p>
            
            <p className="text-base font-light text-gray-400 max-w-2xl mx-auto">
              30+ Designs for Ages 2-14
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
            <p className="text-lg md:text-xl font-light text-[#5E5E5E] leading-relaxed mb-8">
              Our children's collection features vibrant party gowns, comfortable ethnic lehengas, and festive frocks designed specifically for little ones aged 2-14 years. Each outfit combines comfort with elegance, using soft fabrics and child-safe embellishments that let kids be kids while looking absolutely adorable.
            </p>
            <p className="text-base font-light text-[#5E5E5E] leading-relaxed">
              From princess-style gowns for birthday parties to traditional lehengas for weddings, every piece is crafted with care. We also offer mother-daughter matching sets for those picture-perfect family moments at special occasions!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-padding bg-gradient-to-b from-[#E8C2C2]/20 to-[#FAF9F7]">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Age Groups</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Designed for Every Stage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.range}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-[#E8C2C2] hover:border-[#C8A96A] transition-colors text-center"
              >
                <div className="text-3xl font-light text-[#C8A96A] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {group.range}
                </div>
                <h3 className="text-xl font-light text-[#1C1C1C] mb-3 tracking-wide">{group.desc}</h3>
                <p className="text-sm font-light text-gray-600">{group.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Categories</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Collection
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
              <Link href={`/collections/childrens/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block"
              >
                <div className="relative overflow-hidden mb-6 shadow-2xl">
                  <div className="aspect-[3/4] relative">
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

      {/* Features */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-5xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Why Parents Love Us
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
                <span className="text-base font-light text-gray-700">{feature}</span>
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
              Dress Your Little One in Elegance
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Book a consultation to explore our children's collection and find the perfect outfit
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

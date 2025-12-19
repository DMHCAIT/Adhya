'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function WomensCollectionPage() {
  const categories = [
    {
      name: "Bridal Lehengas",
      count: "20+ Exclusive Designs",
      image: "/bride.png",
      description: "Heavily embroidered bridal lehengas with zardozi, sequin, and stone work in silk, velvet, and net fabrics"
    },
    {
      name: "Designer Sarees",
      count: "18+ Premium Designs",
      image: "/Designer Sarees.png",
      description: "Silk sarees, georgette drapes, and contemporary designer sarees with custom blouse stitching and embroidery"
    },
    {
      name: "Reception & Party Wear",
      count: "12+ Designs",
      image: "/Party & Occasion Wear.png",
      description: "Indo-western gowns, anarkalis, and sharara sets perfect for receptions, sangeet, and cocktail parties"
    }
  ];

  const features = [
    "Custom measurements with multiple fittings",
    "Premium fabrics: Silk, velvet, georgette, net",
    "Hand-embroidered zardozi and sequin work",
    "Stone setting and gota patti embellishments",
    "Complimentary styling and jewelry consultation",
    "Free alterations within 3 months of purchase"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Sarees.png"
            alt="Women's Couture Collection"
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
            
            <Sparkles className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" strokeWidth={1} />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Women's Couture
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Bridal & Festive Elegance
            </p>
            
            <p className="text-base font-light text-gray-400 max-w-2xl mx-auto">
              50+ Exclusive Designs
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
              Our women's collection celebrates the modern Indian woman who values tradition while embracing contemporary aesthetics. Each piece is meticulously crafted to make you feel extraordinary on your most important days.
            </p>
            <p className="text-base font-light text-gray-600 leading-relaxed">
              From elaborate bridal lehengas adorned with intricate zardozi work to elegant designer sarees that drape like dreams, every garment in this collection is a testament to our commitment to excellence and timeless beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Categories</span>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Explore Our Range
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
              <Link href={`/collections/womens/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="group block"
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
                
                <h3 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {category.name}
                </h3>
                <p className="text-sm font-light text-amber-600 mb-4 tracking-wider">
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
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What's Included
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
                className="flex items-start gap-4 p-6 border border-gray-200 hover:border-gray-900 transition-colors"
              >
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-base font-light text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Your Design Journey
            </h2>
            <p className="text-base font-light text-gray-600">
              Typical timeline: 8-12 weeks
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your vision, occasion, and preferences" },
              { step: "02", title: "Design Selection", desc: "Choose designs, fabrics, and embellishments" },
              { step: "03", title: "Measurements", desc: "Precise measurements for perfect fit" },
              { step: "04", title: "First Fitting", desc: "Initial trial and adjustments" },
              { step: "05", title: "Final Fitting", desc: "Final adjustments and approval" },
              { step: "06", title: "Delivery", desc: "Your masterpiece is ready" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 pb-8 border-b border-gray-200 last:border-0"
              >
                <div className="text-4xl font-light text-gray-300" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-gray-600">{item.desc}</p>
                </div>
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
              Ready to Create Your Dream Outfit?
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation to discuss your vision and begin your bespoke design journey
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

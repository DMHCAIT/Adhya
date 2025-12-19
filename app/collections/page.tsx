'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Heart, Users, Palette, Scissors, ArrowRight, Crown, Circle } from 'lucide-react';

export default function CollectionsPage() {
  const collections = [
    {
      id: 'wedding',
      title: "Bridal Collection",
      subtitle: "Complete Wedding Trousseau",
      icon: Crown,
      image: "/Designer Lehengas.png",
      description: "Complete bridal wardrobe including lehengas, sarees, blouses, reception wear, and bangle coordination for your dream wedding",
      count: "100+ Bridal Designs",
      featured: true
    },
    {
      id: 'womens',
      title: "Women's Couture",
      subtitle: "Bridal & Festive Elegance",
      icon: Sparkles,
      image: "/Designer Sarees.png",
      description: "Exquisite designer sarees with intricate embroidery, bridal lehengas with heavy work, and contemporary ethnic wear for the modern woman",
      count: "50+ Exclusive Designs",
      featured: true
    },
    {
      id: 'childrens',
      title: "Children's Collection",
      subtitle: "Little Princesses",
      icon: Heart,
      image: "/Party & Occasion Wear.png",
      description: "Vibrant party wear gowns, ethnic lehengas, and festive outfits designed for comfort and elegance for ages 2-14 years",
      count: "30+ Adorable Designs",
      featured: true
    },
    {
      id: 'bangles',
      title: "Bangle Designs",
      subtitle: "Traditional & Contemporary",
      icon: Circle,
      image: "/Bangle design.png",
      description: "Exquisite bangle collections in traditional gold-plated, stone-studded, and contemporary designs perfect for weddings and festivals",
      count: "50+ Bangle Sets",
      featured: false
    },
    {
      id: 'combos',
      title: "Matching Combos",
      subtitle: "Mother-Daughter Twin Sets",
      icon: Users,
      image: "/Designer Lehengas.png",
      description: "Coordinated designer lehengas and sarees in complementary designs, perfect for mother-daughter bonding moments at weddings",
      count: "20+ Twin Sets",
      featured: false
    },
    {
      id: 'embroidery',
      title: "Embroidery & Handwork",
      subtitle: "Artisan Craftsmanship",
      icon: Palette,
      image: "/Custom Blouse Stitching.png",
      description: "Custom blouse stitching with intricate zardozi, sequin work, mirror work, and thread embroidery by master artisans",
      count: "All Custom Work",
      featured: false
    },
    {
      id: 'blouse-saree',
      title: "Custom Blouse & Saree",
      subtitle: "Tailored Perfection",
      icon: Scissors,
      image: "/Designer Sarees.png",
      description: "Bespoke blouse stitching services with designer sarees in silk, georgette, and traditional weaves with custom draping styles",
      count: "Full Custom Service",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C1C1C] via-[#0A0A0A] to-[#1C1C1C]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>
        
        <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent mx-auto mb-8"
            />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Collections
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Curated Collections of Bespoke Designer Wear
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Featured</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Signature Collections
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {collections.filter(c => c.featured).map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link href={`/collections/${collection.id}`} className="group block">
                  <div className="relative overflow-hidden mb-8 shadow-2xl">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <collection.icon className="w-12 h-12 mb-4 text-[#C8A96A]" strokeWidth={1} />
                        <p className="text-xs tracking-[0.3em] uppercase text-[#C8A96A] mb-2 font-light">
                          {collection.subtitle}
                        </p>
                        <h3 className="text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          {collection.title}
                        </h3>
                        <p className="text-sm font-light text-gray-300 mb-4">
                          {collection.count}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-base font-light text-[#5E5E5E] leading-relaxed mb-6">
                    {collection.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-3 text-[#1C1C1C] group-hover:text-[#C8A96A] transition-colors">
                    <span className="text-sm tracking-[0.2em] uppercase font-light">Explore Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* All Collections Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Complete Range</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              All Collections
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/collections/${collection.id}`} className="group block">
                  <div className="relative overflow-hidden mb-6 shadow-xl">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon Overlay on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <collection.icon className="w-16 h-16 text-white" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {collection.title}
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#5E5E5E] mb-3 font-light">
                    {collection.subtitle}
                  </p>
                  <p className="text-sm font-light text-[#5E5E5E] mb-4">
                    {collection.description}
                  </p>
                  <p className="text-sm font-light text-[#C8A96A] tracking-wider">
                    {collection.count}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Can't Find What You're Looking For?
            </h2>
            
            <p className="text-lg font-light text-[#5E5E5E] mb-12 leading-relaxed max-w-2xl mx-auto">
              We specialize in custom designs. Let's create something unique just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-discussion"
                className="px-14 py-6 bg-[#C8A96A] text-white text-sm font-light tracking-[0.3em] uppercase hover:bg-[#B89858] transition-all duration-300 shadow-2xl"
              >
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="px-14 py-6 border-2 border-[#1C1C1C] text-[#1C1C1C] text-sm font-light tracking-[0.3em] uppercase hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

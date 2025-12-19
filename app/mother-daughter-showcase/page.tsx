'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart } from 'lucide-react';

export default function MotherDaughterShowcasePage() {
  const showcaseItems = [
    {
      id: 1,
      title: 'Wedding Elegance',
      occasion: 'Wedding Ceremony',
      motherOutfit: {
        name: 'Royal Burgundy Saree',
        description: 'Pure silk saree with gold zari border and hand-embroidered pallu',
        image: '/Designer Sarees.png',
        fabric: 'Pure Silk',
        color: 'Burgundy & Gold'
      },
      daughterOutfit: {
        name: 'Princess Burgundy Lehenga',
        description: 'Matching lehenga with scaled-down embroidery and comfortable fit',
        image: '/Designer Lehengas.png',
        fabric: 'Soft Silk',
        color: 'Burgundy & Gold'
      },
      price: '₹95,000 (Set)',
      colorTheme: ['#8B0000', '#FFD700']
    },
    {
      id: 2,
      title: 'Festive Fusion',
      occasion: 'Festival Celebration',
      motherOutfit: {
        name: 'Emerald Anarkali',
        description: 'Designer anarkali with mirror work and thread embroidery',
        image: '/Party & Occasion Wear.png',
        fabric: 'Georgette',
        color: 'Emerald Green'
      },
      daughterOutfit: {
        name: 'Little Princess Anarkali',
        description: 'Matching design with age-appropriate length and comfort',
        image: '/Children\'s Designer Wear.png',
        fabric: 'Soft Georgette',
        color: 'Emerald Green'
      },
      price: '₹42,000 (Set)',
      colorTheme: ['#50C878', '#FFD700']
    },
    {
      id: 3,
      title: 'Reception Royalty',
      occasion: 'Reception Party',
      motherOutfit: {
        name: 'Champagne Gown',
        description: 'Floor-length designer gown with crystal embellishments',
        image: '/Designer Lehengas.png',
        fabric: 'Satin & Net',
        color: 'Champagne Gold'
      },
      daughterOutfit: {
        name: 'Mini Royal Gown',
        description: 'Coordinated gown with matching embellishments',
        image: '/Party & Occasion Wear.png',
        fabric: 'Soft Satin',
        color: 'Champagne Gold'
      },
      price: '₹85,000 (Set)',
      colorTheme: ['#F7E7CE', '#C8A96A']
    },
    {
      id: 4,
      title: 'Traditional Charm',
      occasion: 'Naming Ceremony',
      motherOutfit: {
        name: 'Peach Banarasi Saree',
        description: 'Traditional Banarasi with intricate weaving',
        image: '/Designer Sarees.png',
        fabric: 'Pure Banarasi Silk',
        color: 'Peach & Gold'
      },
      daughterOutfit: {
        name: 'Baby Peach Pattu',
        description: 'Traditional South Indian pattu pavadai for little ones',
        image: '/Children\'s Designer Wear.png',
        fabric: 'Pure Silk',
        color: 'Peach & Gold'
      },
      price: '₹55,000 (Set)',
      colorTheme: ['#FFDAB9', '#FFD700']
    },
    {
      id: 5,
      title: 'Sangeet Special',
      occasion: 'Sangeet Night',
      motherOutfit: {
        name: 'Magenta Mirror Work Lehenga',
        description: 'Contemporary lehenga with mirror and sequin work',
        image: '/Designer Lehengas.png',
        fabric: 'Georgette',
        color: 'Magenta'
      },
      daughterOutfit: {
        name: 'Sparkling Magenta Lehenga',
        description: 'Fun and vibrant matching lehenga',
        image: '/Designer Lehengas.png',
        fabric: 'Georgette',
        color: 'Magenta'
      },
      price: '₹72,000 (Set)',
      colorTheme: ['#FF00FF', '#FFD700']
    },
    {
      id: 6,
      title: 'Birthday Bliss',
      occasion: 'Birthday Party',
      motherOutfit: {
        name: 'Pastel Pink Indo-Western',
        description: 'Modern indo-western outfit with contemporary cuts',
        image: '/Party & Occasion Wear.png',
        fabric: 'Crepe & Net',
        color: 'Pastel Pink'
      },
      daughterOutfit: {
        name: 'Princess Pink Frock',
        description: 'Designer frock with matching embellishments',
        image: '/Children\'s Designer Wear.png',
        fabric: 'Soft Net',
        color: 'Pastel Pink'
      },
      price: '₹35,000 (Set)',
      colorTheme: ['#FFB6C1', '#FFFFFF']
    }
  ];

  const features = [
    {
      title: 'Coordinated Colors',
      desc: 'Perfectly matched color palettes that complement each other'
    },
    {
      title: 'Matching Embroidery',
      desc: 'Similar design motifs scaled appropriately for each outfit'
    },
    {
      title: 'Age-Appropriate',
      desc: 'Mother\'s outfit maintains elegance, daughter\'s ensures comfort'
    },
    {
      title: 'Customizable',
      desc: 'Adjust colors, fabrics, and designs to your preference'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Mother & Daughter Combos  Matching & Coordinated Outfits.png"
            alt="Mother-Daughter Showcase"
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
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-8 text-sm font-light tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent mx-auto mb-8"
            />
            
            <Heart className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" strokeWidth={1} />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Mother-Daughter Magic
            </h1>
            
            <p className="text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Twin in Style, Celebrate Together
            </p>
            
            <p className="text-base font-light text-white/80 max-w-2xl mx-auto">
              Our signature matching sets create unforgettable moments. Coordinated elegance that celebrates your beautiful bond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Mother-Daughter Combos */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Our Signature</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Why Matching Sets?
            </h2>
            <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
              Create picture-perfect memories while strengthening your beautiful bond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#C8A96A]/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-[#C8A96A]" />
                </div>
                <h3 className="text-lg font-light text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm font-light text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Occasion-Based</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Matching Collections
            </h2>
          </motion.div>

          <div className="space-y-24">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Title & Occasion */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-[#C8A96A] tracking-wider mb-4">
                    {item.occasion}
                  </p>
                  <div className="flex justify-center gap-2">
                    {item.colorTheme.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Split Screen */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Mother's Outfit */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                      <Image
                        src={item.motherOutfit.image}
                        alt={item.motherOutfit.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-xs tracking-wider uppercase mb-2 text-white/80">Mother</p>
                        <h4 className="text-2xl font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          {item.motherOutfit.name}
                        </h4>
                        <p className="text-sm font-light text-white/90 mb-3">
                          {item.motherOutfit.description}
                        </p>
                        <div className="flex gap-4 text-xs text-white/80">
                          <span>{item.motherOutfit.fabric}</span>
                          <span>•</span>
                          <span>{item.motherOutfit.color}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Daughter's Outfit */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                      <Image
                        src={item.daughterOutfit.image}
                        alt={item.daughterOutfit.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-xs tracking-wider uppercase mb-2 text-white/80">Daughter</p>
                        <h4 className="text-2xl font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          {item.daughterOutfit.name}
                        </h4>
                        <p className="text-sm font-light text-white/90 mb-3">
                          {item.daughterOutfit.description}
                        </p>
                        <div className="flex gap-4 text-xs text-white/80">
                          <span>{item.daughterOutfit.fabric}</span>
                          <span>•</span>
                          <span>{item.daughterOutfit.color}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Price & CTA */}
                <div className="text-center mt-8">
                  <p className="text-2xl font-light text-[#C8A96A] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {item.price}
                  </p>
                  <Link
                    href="/book-discussion"
                    className="inline-block px-8 py-3 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
                  >
                    BOOK THIS COMBO
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Create Your Custom Combo
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? We'll create a custom matching set just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-discussion"
                className="px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
              >
                BOOK CONSULTATION
              </Link>
              <Link
                href="/collections/combos"
                className="px-8 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-sm tracking-wider"
              >
                VIEW MORE COMBOS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

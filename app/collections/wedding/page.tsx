'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Check, ArrowRight, Crown } from 'lucide-react';

export default function WeddingCollectionPage() {
  const categories = [
    {
      name: "Bridal Lehengas",
      count: "25+ Exclusive Designs",
      image: "/bride.png",
      slug: "bridal-lehengas",
      description: "Heavily embroidered bridal lehengas with zardozi, kundan, sequins, and stone work in silk, velvet, and net fabrics"
    },
    {
      name: "Bridal Sarees",
      count: "20+ Premium Designs",
      image: "/bride.png",
      slug: "bridal-sarees",
      description: "Exquisite silk sarees, Kanjeevaram weaves, and designer drapes with matching designer blouses for the perfect bridal look"
    },
    {
      name: "Wedding Blouses",
      count: "30+ Custom Designs",
      image: "/Custom Blouse Stitching.png",
      slug: "wedding-blouses",
      description: "Intricate designer blouses with deep backs, heavy embroidery, stone work, and zardozi for bridal lehengas and sarees"
    },
    {
      name: "Reception Gowns",
      count: "18+ Designer Pieces",
      image: "/bride.png",
      slug: "reception-gowns",
      description: "Contemporary indo-western gowns, anarkalis, and designer sharara sets perfect for reception and cocktail events"
    },
    {
      name: "Mehendi & Sangeet",
      count: "15+ Vibrant Designs",
      image: "/bride.png",
      slug: "mehendi-sangeet",
      description: "Colorful lehengas, crop-top sets, and contemporary ethnic wear for pre-wedding celebrations and functions"
    },
    {
      name: "Bangle & Jewelry Coordination",
      count: "Complete Styling",
      image: "/Bangle design.png",
      slug: "bangle-coordination",
      description: "Traditional bangle designs and jewelry coordination services to complement your bridal outfit perfectly"
    }
  ];

  const bridalEssentials = [
    {
      category: "Complete Bridal Trousseau",
      items: ["Wedding day outfit", "Reception ensemble", "Mehendi & Sangeet attire", "Engagement outfit"]
    },
    {
      category: "Accessories & Styling",
      items: ["Bangle selection", "Jewelry coordination", "Dupatta draping styles", "Footwear matching"]
    },
    {
      category: "Family Coordination",
      items: ["Mother of bride outfit", "Sister coordination", "Family color themes", "Matching accessories"]
    },
    {
      category: "Pre-Wedding Functions",
      items: ["Sangeet outfits", "Mehendi dresses", "Haldi attire", "Cocktail party wear"]
    }
  ];

  const features = [
    "Dedicated bridal consultation (2-3 hours)",
    "Multiple trial fittings included",
    "Custom color and design modifications",
    "Premium fabrics: Silk, velvet, net, georgette",
    "Master artisan embroidery work",
    "Complete trousseau planning assistance",
    "Bangle and jewelry styling guidance",
    "Emergency alteration services",
    "Storage and care instructions",
    "Complimentary touch-ups for 6 months"
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bride.png"
            alt="Wedding Collection"
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
            
            <Crown className="w-20 h-20 text-[#C8A96A] mx-auto mb-6" strokeWidth={1} />
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Bridal Collection
            </h1>
            
            <p className="text-lg md:text-xl font-light text-[#E8C2C2] max-w-3xl mx-auto leading-relaxed mb-4">
              Your Dream Wedding Ensemble
            </p>
            
            <p className="text-base font-light text-gray-300 max-w-2xl mx-auto">
              Complete Bridal Trousseau Planning
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
              Your wedding day deserves nothing but perfection. Our bridal collection is curated to make every bride feel like royalty, with exquisite craftsmanship, premium fabrics, and designs that blend tradition with contemporary elegance.
            </p>
            <p className="text-base font-light text-[#5E5E5E] leading-relaxed">
              From the main wedding ceremony to mehendi, sangeet, and reception, we provide complete trousseau planning including bridal lehengas, sarees, blouses, and coordination with traditional bangles and jewelry. Each piece is crafted with meticulous attention to detail, ensuring you look and feel absolutely stunning throughout your wedding celebrations.
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
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Wedding Collection</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Complete Bridal Wardrobe
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
                <Link href={`/collections/wedding/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="group block">
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
                  <p className="text-sm font-light text-[#5E5E5E] leading-relaxed">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Essentials */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Complete Bridal Planning
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {bridalEssentials.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white border border-[#E8C2C2] hover:border-[#C8A96A] transition-colors"
              >
                <h3 className="text-xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#C8A96A] flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="text-sm font-light text-[#5E5E5E]">{item}</span>
                    </li>
                  ))}
                </ul>
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
              Bridal Package Includes
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
                <Sparkles className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-base font-light text-[#5E5E5E]">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Your Bridal Journey
            </h2>
            <p className="text-base font-light text-[#5E5E5E]">
              Recommended timeline: 4-6 months before wedding
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "Discuss wedding theme, dates, and vision (2-3 hours)", time: "6 months before" },
              { step: "02", title: "Design & Fabric Selection", desc: "Choose designs, fabrics, embroidery work, and finalize budget", time: "5 months before" },
              { step: "03", title: "Measurements & Customization", desc: "Precise measurements and design modifications", time: "4 months before" },
              { step: "04", title: "First Fitting", desc: "Initial trial of all outfits with adjustments", time: "2 months before" },
              { step: "05", title: "Second Fitting", desc: "Final adjustments and accessories coordination", time: "1 month before" },
              { step: "06", title: "Final Delivery", desc: "Complete trousseau ready with care instructions", time: "2 weeks before" },
              { step: "07", title: "Post-Wedding Service", desc: "Alterations and touch-ups within 6 months", time: "After wedding" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 pb-8 border-b border-[#E8C2C2] last:border-0"
              >
                <div className="text-4xl font-light text-[#C8A96A]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-light text-[#1C1C1C]">{item.title}</h3>
                    <span className="text-xs font-light text-[#C8A96A] tracking-wider">{item.time}</span>
                  </div>
                  <p className="text-sm font-light text-[#5E5E5E]">{item.desc}</p>
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
            <Crown className="w-16 h-16 text-[#C8A96A] mx-auto mb-8" strokeWidth={1} />
            
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Begin Your Bridal Journey
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Schedule your bridal consultation today. We recommend booking 4-6 months before your wedding for the complete experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-discussion"
                className="inline-flex items-center gap-3 px-14 py-6 bg-[#C8A96A] text-white text-sm font-light tracking-[0.3em] uppercase hover:bg-[#B89858] transition-all duration-300 shadow-2xl group"
              >
                Book Bridal Consultation
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

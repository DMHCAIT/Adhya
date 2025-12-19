'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function EmbroideryCollectionPage() {
  const techniques = [
    {
      title: "Zardozi Work",
      desc: "Heavy metallic embroidery with gold and silver threads, perfect for bridal blouses and lehenga borders",
      speciality: "Bridal Lehengas & Blouses",
      image: "/Custom Blouse Stitching.png"
    },
    {
      title: "Sequin & Bead Work",
      desc: "Shimmering sequins, beads, and crystals hand-stitched for party wear and reception outfits",
      speciality: "Party Wear & Reception",
      image: "/Party & Occasion Wear.png"
    },
    {
      title: "Thread Embroidery",
      desc: "Colorful silk thread work creating intricate floral and paisley patterns on fabrics",
      speciality: "Festive & Daily Wear",
      image: "/Designer Lehengas.png"
    },
    {
      title: "Mirror Work",
      desc: "Traditional Rajasthani-style tiny mirror embellishments for ethnic and festive attire",
      speciality: "Ethnic & Festival Wear",
      image: "/Designer Sarees.png"
    },
    {
      title: "Stone Setting",
      desc: "Kundan, polki, and crystal stone work for high-end designer pieces and bridal wear",
      speciality: "Designer Couture",
      image: "/Designer Lehengas.png"
    },
    {
      title: "Pearl Embellishment",
      desc: "Delicate pearl and moti work for sophisticated blouse designs and saree borders",
      speciality: "Elegant Evening Wear",
      image: "/Custom Blouse Stitching.png"
    }
  ];

  const applications = [
    { category: "Blouses", items: ["Deep back designs", "Full sleeve work", "Neckline borders", "Shoulder embellishments"] },
    { category: "Lehengas", items: ["Heavy bottom borders", "Scattered motifs", "Dupatta corners", "Waistband designs"] },
    { category: "Sarees", items: ["Pallu heavy work", "Running borders", "Blouse coordination", "Anchal designs"] },
    { category: "Suits", items: ["Kurti front panels", "Dupatta borders", "Palazzo side strips", "Jacket back work"] }
  ];

  const features = [
    "Custom color combinations",
    "Density variations available",
    "Traditional to contemporary patterns",
    "Expert artisan craftsmanship",
    "Premium quality materials",
    "Design consultation included"
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Custom Blouse Stitching.png"
            alt="Embroidery Excellence"
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
              Embroidery Artistry
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Hand-Crafted Excellence
            </p>
            
            <p className="text-base font-light text-gray-400 max-w-2xl mx-auto">
              6 Traditional Techniques
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
            <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-8">
              Our embroidery work is where tradition meets artistry. Each stitch is placed with precision by skilled artisans who have mastered their craft over years of dedication. We transform fabric into wearable art through intricate needlework that tells a story.
            </p>
            <p className="text-base font-light text-gray-600 leading-relaxed">
              From the regal splendor of zardozi work adorned with metallic threads to the delicate beauty of pearl embellishments, we offer a complete spectrum of embroidery techniques. Whether you desire subtle elegance or dramatic statements, our artisans bring your vision to life with unparalleled skill.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Techniques */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Techniques</span>
            <div className="w-20 h-px bg-[#1C1C1C] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Masterful Embroidery
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {techniques.map((technique, index) => (
              <motion.div
                key={technique.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
              <Link href={`/collections/embroidery/${technique.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="group block"
              >
                <div className="relative overflow-hidden mb-6 shadow-2xl">
                  <div className="aspect-square relative">
                    <Image
                      src={technique.image}
                      alt={technique.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-light text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {technique.title}
                </h3>
                <p className="text-sm font-light text-[#C8A96A] mb-3 tracking-wider">
                  {technique.speciality}
                </p>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {technique.desc}
                </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
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
              Where We Apply Our Craft
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 border border-[#E8C2C2] hover:border-[#C8A96A] transition-colors"
              >
                <h3 className="text-xl font-light text-[#1C1C1C] mb-4 pb-3 border-b border-[#E8C2C2]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {app.category}
                </h3>
                <ul className="space-y-2">
                  {app.items.map(item => (
                    <li key={item} className="text-sm font-light text-gray-600 flex items-start gap-2">
                      <span className="text-[#C8A96A] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gradient-to-b from-[#E8C2C2]/20 to-white">
        <div className="max-w-5xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Embroidery Promise
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

      {/* Process */}
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
              The Embroidery Journey
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Design Consultation", desc: "Discuss embroidery placement, density, and pattern preferences" },
              { step: "02", title: "Technique Selection", desc: "Choose from our range of traditional and contemporary techniques" },
              { step: "03", title: "Color Coordination", desc: "Select thread colors, bead types, and embellishment materials" },
              { step: "04", title: "Pattern Creation", desc: "Artisans prepare custom patterns for your design" },
              { step: "05", title: "Hand Embroidery", desc: "Skilled craftspeople bring the design to life stitch by stitch" },
              { step: "06", title: "Quality Check", desc: "Thorough inspection ensures perfection in every detail" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 pb-8 border-b border-[#E8C2C2] last:border-0"
              >
                <div className="text-4xl font-light text-gray-300" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-[#1C1C1C] mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#1C1C1C] via-black to-[#1C1C1C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
        
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Transform Fabric into Art
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Discuss your embroidery vision with our master artisans
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

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Scissors, Check, ArrowRight } from 'lucide-react';

export default function BlouseSareePage() {
  const blouseStyles = [
    {
      title: "Traditional Blouses",
      desc: "Classic designs with intricate handwork",
      styles: ["Round Neck", "Square Neck", "V-Neck", "Boat Neck"],
      image: "/Custom Blouse Stitching.png"
    },
    {
      title: "Contemporary Cuts",
      desc: "Modern silhouettes for the fashion-forward",
      styles: ["Cold Shoulder", "Off-Shoulder", "Halter Neck", "High Neck"],
      image: "/Designer Sarees.png"
    },
    {
      title: "Backless Designs",
      desc: "Statement-making back patterns",
      styles: ["Deep Back", "Keyhole Back", "String Back", "Corset Back"],
      image: "/Custom Blouse Stitching.png"
    },
    {
      title: "Sleeve Variations",
      desc: "From minimal to elaborate sleeve designs",
      styles: ["Full Sleeves", "Three-Quarter", "Bell Sleeves", "Cape Sleeves"],
      image: "/Designer Sarees.png"
    },
    {
      title: "Embellished Blouses",
      desc: "Heavy work for special occasions",
      styles: ["Sequin Work", "Zardozi", "Thread Work", "Stone Setting"],
      image: "/Custom Blouse Stitching.png"
    },
    {
      title: "Crop & Peplum",
      desc: "Trendy styles with unique silhouettes",
      styles: ["Crop Tops", "Peplum Blouses", "Jacket Style", "Cape Blouses"],
      image: "/Designer Sarees.png"
    }
  ];

  const sareeStyles = [
    { category: "Premium Silk Sarees", types: ["Banarasi Brocade", "Kanjivaram Pure Silk", "Tussar Silk", "Mysore Silk"] },
    { category: "Designer Collection", types: ["Heavy Embroidered", "Sequin & Stone Work", "Digital Print", "Hand Block Print"] },
    { category: "Lightweight Drapes", types: ["Georgette Sarees", "Chiffon Collection", "Crepe Sarees", "Net Sarees"] },
    { category: "Traditional Weaves", types: ["Chanderi Cotton", "Maheshwari Handloom", "Jamdani Silk", "Kota Doria"] }
  ];

  const features = [
    "12+ point custom measurements system",
    "First trial within 7 days of order",
    "50+ fabric options in-store",
    "Latest Pinterest & Instagram trends",
    "Master tailors with 15+ years experience",
    "Free alterations within 2 months"
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Sarees.png"
            alt="Blouse & Saree Collection"
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
            
            <Scissors className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" strokeWidth={1} />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Blouse & Saree
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Custom Tailoring Perfection
            </p>
            
            <p className="text-base font-light text-gray-400 max-w-2xl mx-auto">
              Bespoke Stitching Services
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
              The perfect blouse can transform a saree from beautiful to extraordinary. Our custom blouse stitching service ensures that every blouse is tailored precisely to your measurements, style preferences, and the saree it will complement.
            </p>
            <p className="text-base font-light text-gray-600 leading-relaxed">
              Whether you're looking for a traditional classic or a contemporary statement piece, our skilled tailors bring decades of experience to create blouses that fit flawlessly and enhance your natural elegance. We also offer a curated collection of designer sarees to complete your look.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blouse Styles */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Blouse Styles</span>
            <div className="w-20 h-px bg-[#1C1C1C] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Design Your Perfect Blouse
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blouseStyles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
              <Link href={`/collections/blouse-saree/${style.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="group block"
              >
                <div className="relative overflow-hidden mb-6 shadow-2xl">
                  <div className="aspect-square relative">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-light text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {style.title}
                </h3>
                <p className="text-sm font-light text-gray-600 mb-4 leading-relaxed">
                  {style.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {style.styles.map(s => (
                    <span key={s} className="text-xs font-light text-[#C8A96A] px-3 py-1 border border-amber-600/20 bg-amber-50">
                      {s}
                    </span>
                  ))}
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Saree Collection */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Saree Collection</span>
            <div className="w-20 h-px bg-[#1C1C1C] mx-auto mt-4 mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Designer Sarees
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sareeStyles.map((style, index) => (
              <motion.div
                key={style.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 border border-[#E8C2C2] hover:border-[#C8A96A] transition-colors"
              >
                <h3 className="text-xl font-light text-[#1C1C1C] mb-4 pb-3 border-b border-[#E8C2C2]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {style.category}
                </h3>
                <ul className="space-y-2">
                  {style.types.map(type => (
                    <li key={type} className="text-sm font-light text-gray-600 flex items-start gap-2">
                      <span className="text-[#C8A96A] mt-1">•</span>
                      {type}
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
              Our Stitching Promise
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
              Custom Stitching Process
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Bring Your Saree", desc: "Bring the saree you want a blouse for or choose from our collection" },
              { step: "02", title: "Design Selection", desc: "Browse our lookbook or bring your own design inspiration" },
              { step: "03", title: "Precise Measurements", desc: "Detailed measurements for perfect fitting" },
              { step: "04", title: "Fabric & Details", desc: "Select blouse fabric, lining, and embellishment options" },
              { step: "05", title: "First Trial", desc: "Try the blouse and make adjustments if needed" },
              { step: "06", title: "Final Delivery", desc: "Pick up your perfectly stitched blouse" }
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
              Get Your Perfect Blouse
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation to discuss your blouse design and measurements
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

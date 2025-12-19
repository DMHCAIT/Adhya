'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, Check, ArrowRight } from 'lucide-react';

export default function CombosCollectionPage() {
  const comboTypes = [
    {
      name: "Coordinated Lehengas",
      count: "10+ Sets",
      image: "/Designer Lehengas.png",
      description: "Mother wears full bridal lehenga while daughter gets scaled-down version with similar colors and motifs"
    },
    {
      name: "Saree & Lehenga Pairing",
      count: "8+ Sets",
      image: "/Designer Sarees.png",
      description: "Mother in elegant designer saree paired with daughter's matching lehenga in coordinated fabric and embroidery"
    },
    {
      name: "Festival Twin Sets",
      count: "6+ Sets",
      image: "/Mother & Daughter Combos  Matching & Coordinated Outfits.png",
      description: "Matching ethnic suits, anarkalis, or indo-western outfits perfect for Diwali, Eid, and celebrations"
    }
  ];

  const features = [
    "Complementary color palettes",
    "Matching embroidery patterns",
    "Age-appropriate adaptations",
    "Coordinated accessories suggested",
    "Individual measurements respected",
    "Flexible customization options"
  ];

  const occasions = [
    { event: "Weddings", desc: "Stand out together at family weddings" },
    { event: "Festivals", desc: "Coordinated elegance for Diwali, Eid, and celebrations" },
    { event: "Photoshoots", desc: "Picture-perfect matching outfits" },
    { event: "Parties", desc: "Make a statement at birthday parties and events" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Lehengas.png"
            alt="Matching Combos Collection"
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
            
            <Users className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" strokeWidth={1} />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF9F7] mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Mother-Daughter Matching
            </h1>
            
            <p className="text-lg md:text-xl font-light text-[#E8C2C2] max-w-3xl mx-auto leading-relaxed mb-4">
              Coordinated Twin Sets for Special Moments
            </p>
            
            <p className="text-base font-light text-[#E8C2C2] max-w-2xl mx-auto">
              24+ Coordinated Designs
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
              Create magical moments with our thoughtfully designed matching sets. Whether you're a mother wanting to twin with your daughter or sisters looking to coordinate for a special occasion, our combos celebrate the bonds that make life beautiful.
            </p>
            <p className="text-base font-light text-gray-600 leading-relaxed">
              Each combo set is carefully designed to complement rather than duplicate - we maintain the elegance appropriate for adults while adapting designs to be playful and comfortable for children. The result? Picture-perfect coordination that looks natural and stunning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Combo Types */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">Combo Types</span>
            <div className="w-20 h-px bg-[#1C1C1C] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Twin in Style
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {comboTypes.map((combo, index) => (
              <motion.div
                key={combo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
              <Link href={`/collections/combos/${combo.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block"
              >
                <div className="relative overflow-hidden mb-6 shadow-2xl">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={combo.image}
                      alt={combo.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-light text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {combo.name}
                </h3>
                <p className="text-sm font-light text-[#C8A96A] mb-4 tracking-wider">
                  {combo.count}
                </p>
                <p className="text-sm font-light text-[#5E5E5E] leading-relaxed">
                  {combo.description}
                </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Occasions */}
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
              Perfect for Every Occasion
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion.event}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 border border-[#E8C2C2] hover:border-[#C8A96A] transition-colors"
              >
                <h3 className="text-xl font-light text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {occasion.event}
                </h3>
                <p className="text-sm font-light text-gray-600">{occasion.desc}</p>
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
              What Makes Our Combos Special
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

      {/* How It Works */}
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
              Creating Your Perfect Match
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Choose Your Base Design", desc: "Select from our existing collections or create custom" },
              { step: "02", title: "Adaptation Consultation", desc: "We adapt the design for each person's age and style" },
              { step: "03", title: "Individual Measurements", desc: "Precise fittings for both outfits" },
              { step: "04", title: "Coordinated Creation", desc: "Both pieces crafted simultaneously for perfect harmony" },
              { step: "05", title: "Joint Fitting", desc: "See how beautifully they complement each other" }
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
              Create Lasting Memories Together
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Book a consultation to explore our matching combos and design your perfect twin set
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

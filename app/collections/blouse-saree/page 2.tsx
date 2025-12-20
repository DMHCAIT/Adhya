'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Scissors } from 'lucide-react';

export default function BlouseSareePage() {
  const blouseStyles = [
    {
      title: "Traditional Blouses",
      desc: "Classic designs with intricate handwork",
      styles: ["Round Neck", "Square Neck", "V-Neck", "Boat Neck"],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Contemporary Cuts",
      desc: "Modern silhouettes for the fashion-forward",
      styles: ["Cold Shoulder", "Off-Shoulder", "Halter Neck", "High Neck"],
      gradient: "from-amber-300 to-gray-600"
    },
    {
      title: "Backless Designs",
      desc: "Statement-making back patterns",
      styles: ["Deep Back", "Keyhole Back", "String Back", "Corset Back"],
      gradient: "from-amber-200 to-gray-700"
    },
    {
      title: "Sleeve Variations",
      desc: "From minimal to elaborate sleeve designs",
      styles: ["Full Sleeves", "Three-Quarter", "Bell Sleeves", "Cape Sleeves"],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Embellished Blouses",
      desc: "Heavy work for special occasions",
      styles: ["Sequin Work", "Zardozi", "Thread Work", "Stone Setting"],
      gradient: "from-gray-900 to-black"
    },
    {
      title: "Crop & Peplum",
      desc: "Trendy styles with unique silhouettes",
      styles: ["Crop Tops", "Peplum Blouses", "Jacket Style", "Cape Blouses"],
      gradient: "from-amber-300 to-gray-700"
    }
  ];

  const sareeStyles = [
    {
      category: "Silk Sarees",
      types: ["Banarasi Silk", "Kanjeevaram", "Tussar Silk", "Raw Silk"],
      occasion: "Weddings & Traditional Events"
    },
    {
      category: "Designer Sarees",
      types: ["Contemporary Drapes", "Fusion Styles", "Pre-Stitched", "Lehenga Sarees"],
      occasion: "Party & Reception Wear"
    },
    {
      category: "Embroidered Sarees",
      types: ["Thread Work", "Zardozi", "Sequin Work", "Stone Embellishment"],
      occasion: "Festive & Celebration"
    },
    {
      category: "Regional Varieties",
      types: ["Bengali", "Gujarati", "South Indian", "North Indian"],
      occasion: "Cultural Functions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-amber-50/20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto container-padding pt-24 pb-8">
        <Link href="/collections" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-light tracking-wide">Back to Collections</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Scissors className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Blouse & Saree Designs
            </h1>
            <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-light text-gray-700 max-w-3xl mx-auto">
              From classic to contemporary - custom blouse designs and designer sarees that celebrate Indian elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blouse Styles */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Custom Blouse Designs
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto">
              Every blouse is a canvas - create something uniquely yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blouseStyles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-sm overflow-hidden shadow-xl hover:shadow-xl transition-all duration-300">
                  <div className={`relative aspect-square bg-gradient-to-br ${style.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/40">
                        <Scissors className="w-12 h-12 mx-auto mb-2" strokeWidth={1} />
                        <p className="text-sm font-light">Add Image</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-light text-gray-900 mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {style.title}
                    </h3>
                    <p className="text-sm font-light text-gray-600 mb-4 italic">{style.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {style.styles.map((s) => (
                        <span key={s} className="px-3 py-1 bg-white text-xs font-light text-gray-600 rounded-full border border-gray-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Saree Collection */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Designer Saree Collection
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto">
              Timeless elegance meets contemporary design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sareeStyles.map((saree, index) => (
              <motion.div
                key={saree.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-sm shadow-xl overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-light text-gray-900 mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {saree.category}
                  </h3>
                  <div className="mb-4">
                    <p className="text-xs font-light text-gray-900 tracking-[0.2em] uppercase mb-2">{saree.occasion}</p>
                  </div>
                  <ul className="space-y-2">
                    {saree.types.map((type) => (
                      <li key={type} className="text-sm font-light text-gray-600 flex items-start gap-2">
                        <span className="text-gray-900 mt-1">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Process */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Your Customization Journey
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Design Discussion",
                desc: "Share your vision, browse inspirations, and finalize the style"
              },
              {
                step: "Step 2",
                title: "Measurements & Fitting",
                desc: "Precise measurements for perfect fit and comfort"
              },
              {
                step: "Step 3",
                title: "Crafting & Delivery",
                desc: "Expert tailoring with trial fitting before final delivery"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-amber-100 flex items-center justify-center">
                  <span className="text-sm font-light text-gray-900 tracking-[0.2em]">{process.step}</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">{process.title}</h3>
                <p className="text-sm font-light text-gray-600">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-gray-50">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Perfect Fit Guaranteed",
                desc: "Custom measurements and fitting trials ensure perfect draping"
              },
              {
                title: "Quality Fabrics",
                desc: "Premium silk, georgette, and designer materials"
              },
              {
                title: "Unique Designs",
                desc: "Every piece is uniquely crafted - never mass produced"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-sm shadow-xl"
              >
                <h3 className="text-xl font-light text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm font-light text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Design Your Perfect Blouse or Saree
            </h2>
            <p className="text-lg font-light text-white/90 mb-8">
              Book a consultation to create your dream design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-discussion"
                className="px-10 py-4 bg-white text-gray-900 text-sm font-light tracking-[0.2em] hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </Link>
              <Link
                href="/collections"
                className="px-10 py-4 border-2 border-white text-white text-sm font-light tracking-[0.2em] hover:bg-white/10 transition-all"
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

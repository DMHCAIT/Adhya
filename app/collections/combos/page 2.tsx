'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users } from 'lucide-react';

export default function CombosCollectionPage() {
  const comboTypes = [
    {
      title: "Mother-Daughter Lehengas",
      desc: "Matching lehenga sets for unforgettable moments together",
      items: ["Wedding Functions", "Festive Celebrations", "Birthday Parties", "Photo Shoots"],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Coordinated Saree & Dress",
      desc: "Elegant saree for mom, matching dress for daughter",
      items: ["Traditional Events", "Family Functions", "Reception Wear", "Cultural Celebrations"],
      gradient: "from-amber-300 to-gray-600"
    },
    {
      title: "Anarkali Combos",
      desc: "Beautiful anarkali sets in coordinating designs",
      items: ["Sangeet Night", "Mehendi Ceremony", "Festival Wear", "Special Occasions"],
      gradient: "from-amber-200 to-gray-700"
    },
    {
      title: "Contemporary Fusion",
      desc: "Modern Indo-Western matching outfits",
      items: ["Party Wear", "Cocktail Events", "Pre-Wedding", "Photo Sessions"],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Traditional Ensembles",
      desc: "Classic matching sets with intricate work",
      items: ["Temple Visits", "Pooja Ceremonies", "Traditional Functions", "Heritage Events"],
      gradient: "from-gray-900 to-black"
    },
    {
      title: "Festive Specials",
      desc: "Seasonal matching collections",
      items: ["Diwali Collection", "Navratri Sets", "Christmas Specials", "New Year Outfits"],
      gradient: "from-amber-300 to-gray-700"
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
              <Users className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Mother-Daughter Combos
            </h1>
            <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-light text-gray-700 max-w-3xl mx-auto">
              Create beautiful memories in matching outfits - perfectly coordinated designs that celebrate your special bond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Combos */}
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
              Why Choose Matching Sets?
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Perfect Coordination", 
                desc: "Expertly matched colors, patterns, and embellishments"
              },
              { 
                title: "Memorable Photos", 
                desc: "Create stunning pictures that last a lifetime"
              },
              { 
                title: "Special Bonding", 
                desc: "Celebrate your unique mother-daughter relationship"
              }
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-sm shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-amber-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-sm font-light text-gray-600">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Types Grid */}
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
              Our Combo Collections
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto">
              From traditional to contemporary, find the perfect matching outfit for every occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comboTypes.map((combo, index) => (
              <motion.div
                key={combo.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-sm overflow-hidden shadow-xl hover:shadow-xl transition-all duration-300">
                  <div className={`relative aspect-[3/4] bg-gradient-to-br ${combo.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/40">
                        <p className="text-sm font-light">Add Image</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-light text-gray-900 mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {combo.title}
                    </h3>
                    <p className="text-sm font-light text-gray-600 mb-4 italic">{combo.desc}</p>
                    <ul className="space-y-2">
                      {combo.items.map((item) => (
                        <li key={item} className="text-sm font-light text-gray-600 flex items-start gap-2">
                          <span className="text-gray-900 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-gray-100">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Customization Options
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Color Matching",
                items: ["Identical color schemes", "Complementary tones", "Gradient variations", "Custom color requests"]
              },
              {
                title: "Design Elements",
                items: ["Matching embroidery patterns", "Coordinated embellishments", "Similar silhouettes", "Complementary styles"]
              },
              {
                title: "Size Flexibility",
                items: ["Any age combination", "Multiple children options", "Sister sets available", "Custom measurements"]
              },
              {
                title: "Occasion Specific",
                items: ["Wedding appropriate", "Festival ready", "Casual elegance", "Formal events"]
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-xl"
              >
                <h3 className="text-xl font-light text-gray-900 mb-4">{option.title}</h3>
                <ul className="space-y-2">
                  {option.items.map((item) => (
                    <li key={item} className="text-sm font-light text-gray-600 flex items-start gap-2">
                      <span className="text-gray-900 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              Create Your Matching Set
            </h2>
            <p className="text-lg font-light text-white/90 mb-8">
              Book a consultation to design the perfect mother-daughter outfit combination
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

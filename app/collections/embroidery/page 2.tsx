'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Palette } from 'lucide-react';

export default function EmbroideryCollectionPage() {
  const techniques = [
    {
      title: "Zardozi Work",
      desc: "Traditional metallic embroidery using gold and silver threads",
      speciality: "Bridal & Luxury Wear",
      gradient: "from-amber-200 to-gray-700"
    },
    {
      title: "Thread Embroidery",
      desc: "Intricate patterns using colorful silk and cotton threads",
      speciality: "Festive & Occasion Wear",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Sequin & Beadwork",
      desc: "Sparkling embellishments with sequins, beads, and crystals",
      speciality: "Party & Reception Wear",
      gradient: "from-amber-300 to-gray-600"
    },
    {
      title: "Mirror Work",
      desc: "Traditional Indian craft with tiny mirrors and colorful threads",
      speciality: "Ethnic & Festival Wear",
      gradient: "from-gray-700 to-amber-300"
    },
    {
      title: "Pearl Work",
      desc: "Elegant pearl embellishments for sophisticated designs",
      speciality: "Bridal & Evening Wear",
      gradient: "from-gray-900 to-black"
    },
    {
      title: "Stone Setting",
      desc: "Precious and semi-precious stone work",
      speciality: "Designer & Couture Pieces",
      gradient: "from-amber-300 to-gray-700"
    }
  ];

  const applications = [
    {
      category: "Blouses",
      items: ["Back designs", "Sleeve patterns", "Neckline work", "Border embellishments"]
    },
    {
      category: "Lehengas",
      items: ["Full skirt work", "Border designs", "Motif placement", "Dupatta coordination"]
    },
    {
      category: "Sarees",
      items: ["Pallu designs", "Border work", "Blouse matching", "Motif placement"]
    },
    {
      category: "Suits & Dresses",
      items: ["Yoke designs", "Sleeve patterns", "Front panels", "Dupattas"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-amber-50/30">
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
              <Palette className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Embroidery & Handwork
            </h1>
            <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-light text-gray-700 max-w-3xl mx-auto">
              Exquisite handcrafted details that transform fabric into art - from traditional zardozi to contemporary embellishments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Techniques Grid */}
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
              Our Embroidery Techniques
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg font-light text-gray-700 max-w-2xl mx-auto">
              Master craftsmen bringing centuries-old techniques to contemporary designs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <motion.div
                key={technique.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-amber-50 to-gray-100 rounded-sm overflow-hidden shadow-xl hover:shadow-xl transition-all duration-300">
                  <div className={`relative aspect-square bg-gradient-to-br ${technique.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/40">
                        <Palette className="w-12 h-12 mx-auto mb-2" strokeWidth={1} />
                        <p className="text-sm font-light">Add Image</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-light text-gray-900 mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {technique.title}
                    </h3>
                    <p className="text-sm font-light text-gray-600 mb-3">{technique.desc}</p>
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs font-light text-gray-900 tracking-[0.2em] uppercase">{technique.speciality}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
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
              Where We Apply Our Craft
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-xl"
              >
                <h3 className="text-2xl font-light text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {app.category}
                </h3>
                <ul className="space-y-2">
                  {app.items.map((item) => (
                    <li key={item} className="text-sm font-light text-gray-600 flex items-start gap-2">
                      <span className="text-amber-500 mt-1">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Handwork Process
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Design Selection", desc: "Choose or customize your embroidery pattern" },
              { step: "02", title: "Material Selection", desc: "Select threads, beads, and embellishments" },
              { step: "03", title: "Expert Crafting", desc: "Our artisans handcraft each detail" },
              { step: "04", title: "Quality Check", desc: "Rigorous inspection before delivery" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-gray-200 flex items-center justify-center">
                  <span className="text-2xl font-light text-gray-900" style={{ fontFamily: 'var(--font-cormorant)' }}>{process.step}</span>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2">{process.title}</h3>
                <p className="text-sm font-light text-gray-600">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-amber-700 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Commission Your Custom Piece
            </h2>
            <p className="text-lg font-light text-white/90 mb-8">
              Discuss your embroidery ideas with our design team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-discussion"
                className="px-10 py-4 bg-white text-gray-900 text-sm font-light tracking-[0.2em] hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </Link>
              <Link
                href="/design-process"
                className="px-10 py-4 border-2 border-white text-white text-sm font-light tracking-[0.2em] hover:bg-white/10 transition-all"
              >
                View Design Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

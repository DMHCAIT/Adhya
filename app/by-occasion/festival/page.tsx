'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Heart, Star } from 'lucide-react';

export default function FestivalCollectionPage() {
  const products = [
    {
      id: 1,
      name: 'Festive Red Silk Saree',
      category: 'Festival Saree',
      price: '₹65,000',
      image: '/Designer Sarees.png',
      featured: true,
      customizable: true,
      timeline: '35 days'
    },
    {
      id: 2,
      name: 'Navratri Special Lehenga',
      category: 'Designer Lehenga',
      price: '₹85,000',
      image: '/Designer Lehengas.png',
      featured: true,
      customizable: true,
      timeline: '40 days'
    },
    {
      id: 3,
      name: 'Diwali Gold Ensemble',
      category: 'Festival Saree',
      price: '₹72,000',
      image: '/Designer Sarees.png',
      featured: false,
      customizable: true,
      timeline: '30 days'
    },
    {
      id: 4,
      name: 'Family Festival Coordination Set',
      category: 'Family Set',
      price: '₹95,000',
      image: '/Designer Lehengas.png',
      featured: true,
      customizable: true,
      timeline: '40 days'
    },
    {
      id: 5,
      name: 'Durga Puja Special Saree',
      category: 'Festival Saree',
      price: '₹58,000',
      image: '/Designer Sarees.png',
      featured: false,
      customizable: true,
      timeline: '28 days'
    },
    {
      id: 6,
      name: 'Festive Peacock Lehenga',
      category: 'Designer Lehenga',
      price: '₹92,000',
      image: '/Designer Lehengas.png',
      featured: false,
      customizable: true,
      timeline: '38 days'
    }
  ];

  const collections = ['All', 'Festival Sarees', 'Designer Lehengas', 'Family Sets'];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Sarees.png"
            alt="Festivals & Celebrations"
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
            <div className="text-6xl mb-4">🪔</div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Festivals & Celebrations
            </h1>
            <p className="text-xl font-light text-white/90 mb-6">
              Embrace Tradition
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
              <span>38 Exclusive Designs</span>
              <span>•</span>
              <span>20-40 Days Timeline</span>
              <span>•</span>
              <span>100% Customizable</span>
            </div>
          </motion.div>
        </div>

        <Link
          href="/by-occasion"
          className="absolute top-8 left-8 flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm tracking-wider">Back to Occasions</span>
        </Link>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
              Vibrant sarees, lehengas, and family sets for Diwali, Durga Puja, Navratri, and other festive occasions. 
              Celebrate traditions with contemporary elegance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {collections.map((collection) => (
              <button
                key={collection}
                className="px-6 py-2 border border-[#C8A96A]/30 hover:border-[#C8A96A] hover:bg-[#C8A96A]/10 transition-all text-sm tracking-wider text-gray-700"
              >
                {collection}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-[#C8A96A] text-white px-3 py-1 text-xs tracking-wider">
                      FEATURED
                    </div>
                  )}
                  
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#C8A96A] hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                    <Heart className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link
                      href="/book-discussion"
                      className="w-full bg-white text-[#1C1C1C] py-3 text-sm tracking-wider hover:bg-[#C8A96A] hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      BOOK CONSULTATION
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs tracking-wider uppercase text-[#C8A96A] mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-light text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-medium text-[#1C1C1C]">
                      {product.price}
                    </div>
                    <div className="flex items-center gap-1 text-[#C8A96A]">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{product.customizable && '✓ Customizable'}</span>
                    <span>{product.timeline}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Ready to Celebrate in Style?
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Book a free consultation to discuss your festive wardrobe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-discussion"
                className="px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
              >
                BOOK FREE CONSULTATION
              </Link>
              <Link
                href="/style-quiz"
                className="px-8 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-sm tracking-wider"
              >
                TAKE STYLE QUIZ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

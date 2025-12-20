'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Heart, Star } from 'lucide-react';

export default function PartyCollectionPage() {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Party Design ${i + 1}`,
    category: i % 3 === 0 ? 'Evening Gown' : i % 3 === 1 ? 'Indo-Western' : 'Designer Saree',
    price: `₹${(30000 + i * 15000).toLocaleString('en-IN')}`,
    image: i % 2 === 0 ? '/Party & Occasion Wear.png' : '/Designer Sarees.png',
    featured: i < 3,
    customizable: true,
    timeline: `${30 + i * 3} days`
  }));

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Party & Occasion Wear.png" alt="Parties & Events" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
        </div>
        
        <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Parties & Events
            </h1>
            <p className="text-xl font-light text-white/90 mb-6">Stand Out with Style</p>
            <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
              <span>28 Exclusive Designs</span><span>•</span><span>30-45 Days Timeline</span>
            </div>
          </motion.div>
        </div>

        <Link href="/by-occasion" className="absolute top-8 left-8 flex items-center gap-2 text-white/90 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" /><span className="text-sm tracking-wider">Back to Occasions</span>
        </Link>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.article key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  {product.featured && <div className="absolute top-4 left-4 bg-[#C8A96A] text-white px-3 py-1 text-xs tracking-wider">FEATURED</div>}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link href="/book-discussion" className="w-full bg-white text-[#1C1C1C] py-3 text-sm tracking-wider hover:bg-[#C8A96A] hover:text-white transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-4 h-4" />BOOK CONSULTATION
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-wider uppercase text-[#C8A96A] mb-2">{product.category}</div>
                  <h3 className="text-xl font-light text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-medium text-[#1C1C1C]">{product.price}</div>
                  </div>
                  <div className="text-sm text-gray-600">{product.timeline}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <Link href="/book-discussion" className="px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider inline-block">
            BOOK FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}

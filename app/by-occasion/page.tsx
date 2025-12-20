'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ByOccasionPage() {
  const occasions = [
    {
      id: 'wedding',
      name: 'Wedding',
      tagline: 'Your Dream Day Deserves Perfection',
      emoji: '👰',
      description: 'From bridal lehengas to family coordination, we create unforgettable wedding outfits that capture the magic of your special day.',
      collections: ['Bridal Lehengas', 'Bridal Sarees', 'Mother-Daughter Sets', 'Groom\'s Family'],
      priceRange: '₹1,00,000 - ₹5,00,000+',
      timeline: '60-90 days',
      image: '/Designer Lehengas.png',
      color: '#8B0000',
      products: 45
    },
    {
      id: 'reception',
      name: 'Reception & Engagement',
      tagline: 'Elegant Celebrations',
      emoji: '🥂',
      description: 'Contemporary gowns, designer lehengas, and elegant sarees perfect for evening receptions and engagement ceremonies.',
      collections: ['Reception Gowns', 'Designer Lehengas', 'Contemporary Sarees'],
      priceRange: '₹60,000 - ₹2,50,000',
      timeline: '45-60 days',
      image: '/Party & Occasion Wear.png',
      color: '#C8A96A',
      products: 32
    },
    {
      id: 'half-saree',
      name: 'Half Saree Ceremony',
      tagline: 'Coming of Age Celebration',
      emoji: '🦚',
      description: 'Beautiful half saree sets for this significant milestone, blending tradition with contemporary elegance.',
      collections: ['Traditional Half Sarees', 'Designer Lehengas', 'Custom Designs'],
      priceRange: '₹40,000 - ₹1,50,000',
      timeline: '40-50 days',
      image: '/Designer Lehengas.png',
      color: '#50C878',
      products: 18
    },
    {
      id: 'naming-ceremony',
      name: 'Naming Ceremony',
      tagline: 'Welcoming New Beginnings',
      emoji: '🍼',
      description: 'Comfortable yet elegant sarees and outfits for new mothers, plus adorable traditional wear for the little one.',
      collections: ['Elegant Sarees', 'Mother-Baby Coordination', 'Traditional Sets'],
      priceRange: '₹25,000 - ₹80,000',
      timeline: '25-35 days',
      image: '/Designer Sarees.png',
      color: '#FFB6C1',
      products: 24
    },
    {
      id: 'festival',
      name: 'Festivals & Celebrations',
      tagline: 'Embrace Tradition',
      emoji: '🪔',
      description: 'Vibrant sarees, lehengas, and family sets for Diwali, Durga Puja, Navratri, and other festive occasions.',
      collections: ['Festival Sarees', 'Designer Lehengas', 'Family Sets'],
      priceRange: '₹20,000 - ₹1,00,000',
      timeline: '20-40 days',
      image: '/Designer Sarees.png',
      color: '#FF6347',
      products: 38
    },
    {
      id: 'party',
      name: 'Parties & Events',
      tagline: 'Stand Out with Style',
      emoji: '🎉',
      description: 'Contemporary gowns, Indo-western fusion, and chic sarees for cocktail parties, birthdays, and social events.',
      collections: ['Evening Gowns', 'Indo-Western', 'Designer Sarees'],
      priceRange: '₹30,000 - ₹1,20,000',
      timeline: '30-45 days',
      image: '/Party & Occasion Wear.png',
      color: '#9370DB',
      products: 28
    },
    {
      id: 'mehendi-sangeet',
      name: 'Mehendi & Sangeet',
      tagline: 'Dance the Night Away',
      emoji: '💃',
      description: 'Lightweight, colorful, and comfortable outfits perfect for dancing and celebrating pre-wedding functions.',
      collections: ['Lehengas', 'Anarkali Sets', 'Fusion Wear'],
      priceRange: '₹35,000 - ₹1,50,000',
      timeline: '35-50 days',
      image: '/Designer Lehengas.png',
      color: '#FFD700',
      products: 26
    },
    {
      id: 'kids',
      name: 'Children\'s Special Occasions',
      tagline: 'Little Ones, Big Moments',
      emoji: '👶',
      description: 'Comfortable, adorable traditional wear for kids - lehengas, kurta sets, and custom designs for all celebrations.',
      collections: ['Kids Lehengas', 'Kurta Sets', 'Mother-Daughter Combos'],
      priceRange: '₹8,000 - ₹40,000',
      timeline: '20-30 days',
      image: '/Party & Occasion Wear.png',
      color: '#87CEEB',
      products: 22
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Lehengas.png"
            alt="Shop By Occasion"
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
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Shop By Occasion
            </h1>
            <p className="text-xl font-light text-white/90 max-w-3xl mx-auto">
              Find the perfect outfit for your special moment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
              We understand that you don't think in terms of "lehengas" or "sarees" - 
              you think about your wedding, your sister's reception, or your child's naming ceremony.
            </p>
            <p className="text-base font-light text-gray-600">
              Browse by the event that matters to you. We'll show you exactly what works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Occasions Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding space-y-24">
          {occasions.map((occasion, index) => (
            <motion.article
              key={occasion.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                  <Image
                    src={occasion.image}
                    alt={occasion.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg">
                    <div className="text-3xl mb-1">{occasion.emoji}</div>
                    <div className="text-xs tracking-wider uppercase text-gray-600">{occasion.products} Designs</div>
                  </div>

                  {/* Color Theme */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 rounded-full border-4 border-white shadow-xl" style={{ backgroundColor: occasion.color }}></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {occasion.name}
                </h2>
                <p className="text-base font-light text-[#C8A96A] tracking-wider mb-6 italic">
                  {occasion.tagline}
                </p>

                <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                  {occasion.description}
                </p>

                {/* Collections */}
                <div className="mb-6">
                  <h3 className="text-sm tracking-wider uppercase text-gray-600 mb-3">Available Collections</h3>
                  <div className="flex flex-wrap gap-2">
                    {occasion.collections.map((collection) => (
                      <span key={collection} className="px-3 py-1 bg-[#C8A96A]/10 text-[#C8A96A] text-sm">
                        {collection}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#FAF9F7] p-4">
                    <div className="text-xs tracking-wider uppercase text-gray-500 mb-1">Price Range</div>
                    <div className="text-sm font-medium text-[#1C1C1C]">{occasion.priceRange}</div>
                  </div>
                  <div className="bg-[#FAF9F7] p-4">
                    <div className="text-xs tracking-wider uppercase text-gray-500 mb-1">Timeline</div>
                    <div className="text-sm font-medium text-[#1C1C1C]">{occasion.timeline}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/by-occasion/${occasion.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A96A] text-white hover:bg-[#1C1C1C] transition-colors text-sm tracking-wider group"
                  >
                    VIEW ALL DESIGNS
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/book-discussion"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-sm tracking-wider"
                  >
                    BOOK CONSULTATION
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Why We Organize By Occasion
            </h2>
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
              Because when you're planning your sister's wedding or your child's naming ceremony, 
              you shouldn't have to browse through hundreds of products to find what's appropriate.
            </p>
            <p className="text-base font-light text-gray-600 mb-8">
              We think the way you think - in moments, not categories.
            </p>
            <Link
              href="/style-quiz"
              className="inline-block px-8 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-sm tracking-wider"
            >
              TAKE OUR STYLE QUIZ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Not Sure Which Occasion?
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Book a consultation and let's discuss your upcoming events
            </p>
            <Link
              href="/book-discussion"
              className="inline-block px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
            >
              BOOK FREE CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

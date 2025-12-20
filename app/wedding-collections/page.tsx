'use client';

import { motion } from 'framer-motion';
import { Crown, Sparkles, Heart, Calendar, Gift, Flower2, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const brideCollections = [
  {
    id: 'bridal-sarees',
    name: 'Bridal Sarees',
    emoji: '👰',
    description: 'Exquisite traditional sarees for the wedding day',
    priceRange: '₹50,000 - ₹3,00,000',
    features: ['Heavy embroidery', 'Zari work', 'Custom blouse', 'Matching accessories'],
    designs: '150+ designs',
    image: '/placeholder-bridal-saree.jpg'
  },
  {
    id: 'bridal-lehengas',
    name: 'Bridal Lehengas',
    emoji: '👑',
    description: 'Stunning lehengas for modern brides',
    priceRange: '₹80,000 - ₹5,00,000',
    features: ['Designer cuts', 'Premium fabrics', 'Intricate detailing', 'Dupatta included'],
    designs: '200+ designs',
    image: '/placeholder-lehenga.jpg'
  },
  {
    id: 'reception-outfits',
    name: 'Reception Outfits',
    emoji: '✨',
    description: 'Glamorous outfits for reception celebrations',
    priceRange: '₹40,000 - ₹2,50,000',
    features: ['Contemporary styles', 'Fusion wear', 'Statement pieces', 'Custom tailoring'],
    designs: '120+ designs',
    image: '/placeholder-reception.jpg'
  },
  {
    id: 'muhurtham-sarees',
    name: 'Muhurtham Sarees',
    emoji: '🎊',
    description: 'Traditional sarees for auspicious ceremonies',
    priceRange: '₹30,000 - ₹1,50,000',
    features: ['Pure silk', 'Traditional borders', 'Temple designs', 'Classic colors'],
    designs: '80+ designs',
    image: '/placeholder-muhurtham.jpg'
  },
  {
    id: 'party-post-wedding',
    name: 'Party & Post-Wedding Sarees',
    emoji: '🎉',
    description: 'Elegant sarees for all wedding functions',
    priceRange: '₹15,000 - ₹80,000',
    features: ['Versatile styles', 'Easy draping', 'Comfortable fabrics', 'Reusable designs'],
    designs: '100+ designs',
    image: '/placeholder-party.jpg'
  }
];

const ceremonies = [
  {
    id: 'engagement',
    name: 'Engagement',
    emoji: '💍',
    description: 'Perfect start to your wedding journey',
    outfits: ['Designer lehengas', 'Cocktail gowns', 'Indo-western fusion', 'Elegant sarees'],
    requiredItems: ['Ring ceremony outfit', 'Family coordination sets', 'Gift wrapping', 'Decoration accessories'],
    accessories: ['Statement jewelry', 'Clutches', 'Hair accessories', 'Footwear'],
    embroideryStyles: ['Sequin work', 'Stone embellishment', 'Thread work', 'Mirror work'],
    priceRange: '₹30,000 - ₹1,50,000'
  },
  {
    id: 'mehendi',
    name: 'Mehendi Ceremony',
    emoji: '🌿',
    description: 'Vibrant and comfortable festive wear',
    outfits: ['Floral lehengas', 'Anarkali suits', 'Palazzo sets', 'Light sarees'],
    requiredItems: ['Mehendi outfit', 'Gajra & flower jewelry', 'Seating accessories', 'Photo props'],
    accessories: ['Flower jewelry', 'Maang tikka', 'Bangles', 'Jhuttis'],
    embroideryStyles: ['Gota patti', 'Floral prints', 'Light embroidery', 'Bandhani work'],
    priceRange: '₹20,000 - ₹80,000'
  },
  {
    id: 'haldi',
    name: 'Haldi Ceremony',
    emoji: '🌻',
    description: 'Bright and easy-to-wear traditional attire',
    outfits: ['Yellow lehengas', 'Kurta sets', 'Sarees', 'Anarkali dresses'],
    requiredItems: ['Haldi outfit', 'Flower decoration', 'Coconut sets', 'Family coordination'],
    accessories: ['Floral jewelry', 'Hair flowers', 'Simple bangles', 'Toe rings'],
    embroideryStyles: ['Minimal embroidery', 'Floral motifs', 'Tie-dye', 'Block prints'],
    priceRange: '₹15,000 - ₹60,000'
  },
  {
    id: 'wedding-day',
    name: 'Wedding Day',
    emoji: '💝',
    description: 'The most special outfit of your life',
    outfits: ['Bridal sarees', 'Grand lehengas', 'Traditional kanjivaram', 'Designer pattu'],
    requiredItems: ['Bridal outfit', 'Muhurtham saree', 'Matching blouse', 'Complete jewelry set'],
    accessories: ['Full bridal jewelry', 'Veni', 'Maang tikka', 'Nath', 'Waist belt'],
    embroideryStyles: ['Heavy zari work', 'Kundan work', 'Pearl embellishment', 'Temple borders'],
    priceRange: '₹80,000 - ₹5,00,000'
  },
  {
    id: 'reception',
    name: 'Reception',
    emoji: '🥂',
    description: 'Glamorous evening wear for celebrations',
    outfits: ['Designer gowns', 'Heavy lehengas', 'Fusion sarees', 'Contemporary designs'],
    requiredItems: ['Reception outfit', 'Second look option', 'Gift saree', 'Accessories'],
    accessories: ['Diamond jewelry', 'Clutch', 'Hair styling', 'Designer footwear'],
    embroideryStyles: ['Sequin work', '3D embroidery', 'Stone work', 'Crystal embellishment'],
    priceRange: '₹60,000 - ₹3,00,000'
  },
  {
    id: 'post-wedding',
    name: 'Post-Wedding Functions',
    emoji: '🎊',
    description: 'Elegant outfits for family gatherings',
    outfits: ['Party sarees', 'Designer suits', 'Light lehengas', 'Cocktail wear'],
    requiredItems: ['Function outfits', 'Gift sarees for family', 'Coordination sets', 'Return gifts'],
    accessories: ['Jewelry sets', 'Bags', 'Footwear', 'Hair accessories'],
    embroideryStyles: ['Medium embroidery', 'Printed designs', 'Embellished borders', 'Contemporary work'],
    priceRange: '₹25,000 - ₹1,20,000'
  }
];

const weddingEssentials = [
  {
    id: 'coconut-decorations',
    name: 'Coconut Decorations',
    emoji: '🥥',
    description: 'Traditional decorated coconuts for all ceremonies',
    items: ['Thamboolam coconuts', 'Haldi ceremony sets', 'Muhurtham coconuts', 'Gift coconuts'],
    priceRange: '₹200 - ₹2,000 per set',
    customization: true
  },
  {
    id: 'garlands',
    name: 'Wedding Garlands',
    emoji: '🌸',
    description: 'Fresh and artificial flower garlands',
    items: ['Bridal exchange garlands', 'Reception garlands', 'Family garlands', 'Decoration garlands'],
    priceRange: '₹500 - ₹10,000',
    customization: true
  },
  {
    id: 'wedding-saree-sets',
    name: 'Wedding Saree Gift Sets',
    emoji: '🎁',
    description: 'Complete saree sets for family and guests',
    items: ['Mother of bride/groom', 'Sister sets', 'Family coordination', 'Guest gifts'],
    priceRange: '₹8,000 - ₹50,000',
    customization: true
  },
  {
    id: 'gift-sarees',
    name: 'Gift Sarees',
    emoji: '💝',
    description: 'Curated sarees for wedding gifting',
    items: ['Return gift sarees', 'Family gift sets', 'Bulk orders', 'Premium packaging'],
    priceRange: '₹5,000 - ₹30,000',
    customization: true
  },
  {
    id: 'function-wise-requirements',
    name: 'Function-wise Requirements',
    emoji: '📋',
    description: 'Complete checklist and items for each function',
    items: ['Ceremony packages', 'Decoration items', 'Ritual accessories', 'Complete setups'],
    priceRange: '₹15,000 - ₹1,00,000',
    customization: true
  },
  {
    id: 'custom-family-orders',
    name: 'Custom Family Orders',
    emoji: '👨‍👩‍👧‍👦',
    description: 'Coordinated outfits for entire family',
    items: ['Color coordination', 'Matching designs', 'Bulk discounts', 'Complete family styling'],
    priceRange: '₹50,000 - ₹5,00,000',
    customization: true
  }
];

export default function WeddingCollectionsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Lehengas.png"
            alt="Wedding Collections"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <Crown className="w-16 h-16 md:w-20 md:h-20 text-[#C8A96A] mx-auto" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Wedding Collections
              <span className="block text-[#C8A96A] mt-2">From Start to Forever</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Everything you need for your perfect wedding journey - from engagement to post-wedding celebrations
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                <Sparkles className="w-5 h-5 text-[#C8A96A]" />
                <span className="text-white">650+ Designs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                <Heart className="w-5 h-5 text-[#C8A96A]" />
                <span className="text-white">6 Ceremonies</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                <Gift className="w-5 h-5 text-[#C8A96A]" />
                <span className="text-white">Unique Essentials</span>
              </div>
            </div>

            <a
              href="https://wa.me/919177171594?text=Hi%2C%20I%27m%20interested%20in%20wedding%20collections"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8A96A] hover:bg-[#B8995A] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Book Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section A: Bride Collections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block text-5xl md:text-6xl mb-4">👰</div>
            <h2 className="text-3xl md:text-5xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Bride Collections
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Curated bridal wear for every moment of your special day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {brideCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/wedding-collections/bride/${collection.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 h-full">
                    <div className="p-6">
                      <div className="text-4xl mb-3">{collection.emoji}</div>
                      
                      <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors">
                        {collection.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm">
                        {collection.description}
                      </p>
                      
                      <div className="bg-[#C8A96A]/5 rounded-lg p-3 mb-4 border border-[#C8A96A]/20">
                        <p className="text-[#C8A96A] font-semibold">
                          {collection.priceRange}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {collection.designs}
                        </p>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {collection.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <ChevronRight className="w-4 h-4 text-[#C8A96A] mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-[#C8A96A] font-medium group-hover:gap-2 transition-all">
                        <span>View Collection</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section B: Wedding by Ceremony */}
      <section className="py-16 md:py-24 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block bg-[#C8A96A] px-6 py-2 rounded-full mb-6">
              <span className="text-white font-medium text-sm">MOST IMPORTANT</span>
            </div>
            <div className="inline-block text-5xl md:text-6xl mb-4">💐</div>
            <h2 className="text-3xl md:text-5xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Wedding by Ceremony
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Complete guide for each ceremony - outfits, accessories, and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {ceremonies.map((ceremony, index) => (
              <motion.div
                key={ceremony.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/wedding-collections/ceremony/${ceremony.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#C8A96A] h-full">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-4xl">{ceremony.emoji}</div>
                        <div className="bg-[#C8A96A]/5 rounded-lg px-3 py-1.5 border border-[#C8A96A]/20">
                          <p className="text-[#C8A96A] font-semibold text-sm">
                            {ceremony.priceRange}
                          </p>
                        </div>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors">
                        {ceremony.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm">
                        {ceremony.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-[#1C1C1C] mb-2 text-sm flex items-center">
                            <Sparkles className="w-4 h-4 text-[#C8A96A] mr-2" />
                            Bride Outfits
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {ceremony.outfits.slice(0, 3).map((outfit, idx) => (
                              <span key={idx} className="text-xs bg-gray-50 px-2.5 py-1 rounded-md text-gray-700 border border-gray-200">
                                {outfit}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-[#1C1C1C] mb-2 text-sm flex items-center">
                            <Calendar className="w-4 h-4 text-[#C8A96A] mr-2" />
                            Required Items
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {ceremony.requiredItems.slice(0, 2).map((item, idx) => (
                              <span key={idx} className="text-xs bg-gray-50 px-2.5 py-1 rounded-md text-gray-700 border border-gray-200">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center text-[#C8A96A] font-medium group-hover:gap-2 transition-all">
                        <span className="text-sm">View Complete Details</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: Wedding Essentials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block bg-gradient-to-r from-[#C8A96A] to-[#D4B97C] px-6 py-2 rounded-full mb-6">
              <span className="text-white font-medium text-sm">UNIQUE TO ADHYA</span>
            </div>
            <div className="inline-block text-5xl md:text-6xl mb-4">🎁</div>
            <h2 className="text-3xl md:text-5xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Wedding Essentials
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything beyond the outfit - decorations, gifts, and family requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {weddingEssentials.map((essential, index) => (
              <motion.div
                key={essential.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/wedding-collections/essentials/${essential.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 h-full">
                    <div className="p-6">
                      <div className="text-4xl mb-3">{essential.emoji}</div>
                      
                      <h3 className="text-lg md:text-xl font-semibold text-[#1C1C1C] mb-2 group-hover:text-[#C8A96A] transition-colors">
                        {essential.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-3 text-sm">
                        {essential.description}
                      </p>
                      
                      <div className="bg-[#C8A96A]/5 rounded-lg p-2.5 mb-3 border border-[#C8A96A]/20">
                        <p className="text-[#C8A96A] font-semibold text-sm">
                          {essential.priceRange}
                        </p>
                      </div>

                      <ul className="space-y-1.5 mb-4">
                        {essential.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-700">
                            <ChevronRight className="w-3.5 h-3.5 text-[#C8A96A] mr-1.5 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {essential.customization && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-2.5 mb-3">
                          <p className="text-green-700 text-xs font-medium flex items-center">
                            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                            Full Customization Available
                          </p>
                        </div>
                      )}

                      <div className="flex items-center text-[#C8A96A] font-medium group-hover:gap-2 transition-all">
                        <span className="text-sm">Explore More</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#1C1C1C] to-[#2D2D2D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Flower2 className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Start Your Wedding Journey
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              From marriage starting to marriage ending – everything in one place
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/919177171594?text=Hi%2C%20I%27m%20interested%20in%20wedding%20collections"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Book Consultation
              </a>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1C1C1C] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Schedule Visit
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C8A96A]" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C8A96A]" />
                <span>Custom Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C8A96A]" />
                <span>Complete Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

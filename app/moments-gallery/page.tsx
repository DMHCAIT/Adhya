'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, Instagram, Camera } from 'lucide-react';

export default function MomentsGallery() {
  const moments = [
    {
      id: 1,
      image: '/Designer Lehengas.png',
      title: "Mother fixing daughter's dupatta",
      description: "A tender moment captured before the ceremony",
      category: 'Mother-Daughter',
      instagram: 'https://instagram.com/adhyastudio'
    },
    {
      id: 2,
      image: '/Designer Sarees.png',
      title: 'Bride smiling in mirror',
      description: 'Pure joy reflected in her eyes',
      category: 'Bridal',
      instagram: 'https://instagram.com/adhyastudio'
    },
    {
      id: 3,
      image: '/Party & Occasion Wear.png',
      title: 'Child playing in lehenga',
      description: 'Because elegance should never compromise play',
      category: 'Children',
      instagram: 'https://instagram.com/adhyastudio'
    },
    {
      id: 4,
      image: '/Custom Blouse Stitching.png',
      title: "Grandmother's blessing",
      description: 'Three generations, one beautiful tradition',
      category: 'Family',
      instagram: 'https://instagram.com/adhyastudio'
    },
    {
      id: 5,
      image: '/bride sarees.png',
      title: 'Family celebration together',
      description: 'The joy of being surrounded by love',
      category: 'Celebration',
      instagram: 'https://instagram.com/adhyastudio'
    },
    {
      id: 6,
      image: '/Designer Lehengas.png',
      title: 'First look moment',
      description: 'When words aren\'t needed',
      category: 'Bridal',
      instagram: 'https://instagram.com/adhyastudio'
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home page 1.png"
            alt="Moments Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#FAF9F7]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center container-padding max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-6 h-6" style={{ color: '#C8A96A' }} />
            <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>Moments Gallery</span>
            <Heart className="w-6 h-6" style={{ color: '#C8A96A' }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-8 text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Real Moments.<br />Real Emotions.
          </h1>

          <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
            Not models posing — just authentic moments of love, joy, and connection.<br />
            Emotion converts better than perfection.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-3">
                      <span className="text-xs tracking-wider uppercase font-light px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(200, 169, 106, 0.9)', color: '#1C1C1C' }}>
                        {moment.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-light text-white mb-2 italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      "{moment.title}"
                    </h3>
                    <p className="text-sm font-light text-white/80 mb-4">
                      {moment.description}
                    </p>
                    <a
                      href={moment.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-light text-[#C8A96A] hover:text-white transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      View on Instagram
                    </a>
                  </div>

                  {/* Camera Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Camera className="w-6 h-6 text-white/80" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                Share Your ADHYA Moment
              </h3>
              <p className="text-lg font-light mb-8" style={{ color: '#1C1C1C', opacity: 0.7 }}>
                Tag us @adhyastudio to be featured in our moments gallery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://instagram.com/adhyastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-12 py-5 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
                <Link
                  href="/client-stories"
                  className="group inline-flex items-center justify-center gap-3 px-12 py-5 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 border-2 hover:scale-105"
                  style={{ borderColor: '#C8A96A', color: '#1C1C1C' }}
                >
                  Read Client Stories
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

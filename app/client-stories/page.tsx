'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Heart } from 'lucide-react';

export default function ClientStoriesPage() {
  const stories = [
    {
      id: 1,
      clientName: 'Priya & Ananya',
      relationship: 'Mother & Daughter',
      occasion: 'Sister\'s Wedding',
      image: '/Designer Lehengas.png',
      story: 'When my sister was getting married, I wanted something special for me and my daughter. We went to ADHYA and they suggested matching lehengas in different shades of pink. My daughter was so excited! During the first fitting, she saw her lehenga and said "Mummy, we look like princesses!" That moment... I knew this wasn\'t just about clothes. The lehenga fit perfectly, the embroidery was stunning, and most importantly - we both felt beautiful and confident. My sister still says we stole the show!',
      highlight: 'We look like princesses!',
      colors: ['Pink', 'Rose Gold'],
      duration: '50 days',
      emoji: '👩‍👧'
    },
    {
      id: 2,
      clientName: 'Meera',
      relationship: 'Bride',
      occasion: 'Wedding Day',
      image: '/Designer Sarees.png',
      story: 'I always dreamed of wearing my mother\'s wedding saree, but it was too damaged. ADHYA did something magical - they recreated the same design with modern techniques. They matched the exact shade of red, replicated the gold zari work, even the border pattern. When I wore it on my wedding day, my mother cried. She said it felt like a piece of her was with me. The compliments were endless, but nothing compared to seeing my mother\'s face.',
      highlight: 'A piece of my mother with me',
      colors: ['Red', 'Gold'],
      duration: '60 days',
      emoji: '👰'
    },
    {
      id: 3,
      clientName: 'Lakshmi',
      relationship: 'New Mother',
      occasion: 'Naming Ceremony',
      image: '/Party & Occasion Wear.png',
      story: 'Just 4 months postpartum, I had no confidence about how I looked. I needed something for my baby\'s naming ceremony but dreaded shopping. ADHYA was so understanding. They designed a beautiful saree that made me feel graceful, not exposed. The soft silk, the elegant embroidery, the perfect drape - I felt like myself again. My husband said I was glowing. More than the outfit, they gave me back my confidence.',
      highlight: 'Felt like myself again',
      colors: ['Teal', 'Silver'],
      duration: '35 days',
      emoji: '🤱'
    },
    {
      id: 4,
      clientName: 'Divya',
      relationship: 'Half Saree Ceremony',
      occasion: 'Daughter\'s Coming of Age',
      image: '/Designer Lehengas.png',
      story: 'For my daughter\'s half saree ceremony, I wanted something traditional yet unique. ADHYA suggested a peacock motif with real gold work. The day of the ceremony, when my daughter walked out, everyone gasped. It wasn\'t just beautiful - it was meaningful. The peacock represents grace and beauty, just like this transition in her life. She felt so special, so loved. Those photos will be treasured forever.',
      highlight: 'She felt so special, so loved',
      colors: ['Green', 'Royal Blue'],
      duration: '45 days',
      emoji: '🦚'
    },
    {
      id: 5,
      clientName: 'Kavita & Rohan',
      relationship: 'Grandmother & Grandson',
      occasion: 'Family Wedding',
      image: '/Children\'s Wear.png',
      story: 'My grandson is the light of my life. For a family wedding, I wanted us to coordinate. ADHYA created a regal kurta set for him and a beautiful saree for me in matching colors. When we arrived at the wedding together, the family couldn\'t stop taking pictures. Rohan kept showing everyone "Nani and I are matching!" That joy on his face - priceless. ADHYA understood what this meant to me - creating memories across generations.',
      highlight: 'Creating memories across generations',
      colors: ['Maroon', 'Gold'],
      duration: '25 days',
      emoji: '👵👦'
    },
    {
      id: 6,
      clientName: 'Anjali',
      relationship: 'Working Professional',
      occasion: 'Best Friend\'s Reception',
      image: '/Party & Occasion Wear.png',
      story: 'I travel for work constantly and had only 3 days notice for my best friend\'s reception. I was panicking. ADHYA somehow made it work. They had a beautiful gown base that they customized with hand embroidery on my timeline. It fit like it was made for me because... it was. The design was elegant, comfortable, and absolutely stunning. My friend said I looked like I walked off a runway. But more than that, I was there for her special day without stress.',
      highlight: 'Made the impossible possible',
      colors: ['Champagne', 'Rose Gold'],
      duration: '12 days (rush)',
      emoji: '✨'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Lehengas.png"
            alt="Client Stories"
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
            <div className="w-16 h-16 bg-[#C8A96A]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#C8A96A]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Client Stories
            </h1>
            <p className="text-xl font-light text-white/90 max-w-3xl mx-auto">
              Real moments, real emotions, real memories
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
              We don't just create outfits. We become part of your story - your celebrations, 
              your traditions, your precious moments with loved ones.
            </p>
            <p className="text-base font-light text-gray-600">
              Here are some stories from our extended ADHYA family. Not reviews, not ratings - just real experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding space-y-24">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-5 gap-8 bg-white shadow-xl overflow-hidden"
            >
              {/* Image */}
              <div className={`md:col-span-2 relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                  <Image
                    src={story.image}
                    alt={story.clientName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg">
                    <div className="text-3xl mb-1">{story.emoji}</div>
                    <p className="text-xs tracking-wider uppercase text-gray-600">{story.relationship}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`md:col-span-3 p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <Quote className="w-10 h-10 text-[#C8A96A]/30 mb-4" />
                
                <h2 className="text-3xl font-light text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {story.clientName}
                </h2>
                <p className="text-sm tracking-wider uppercase text-[#C8A96A] mb-6">
                  {story.occasion}
                </p>

                <p className="text-base font-light text-gray-700 leading-relaxed mb-6 italic">
                  "{story.story}"
                </p>

                <div className="bg-[#FAF9F7] p-4 border-l-4 border-[#C8A96A] mb-6">
                  <p className="text-sm font-medium text-[#1C1C1C]">
                    "{story.highlight}"
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 text-sm font-light text-gray-600">
                  <div>
                    <span className="text-xs tracking-wider uppercase text-gray-500 block mb-1">Colors</span>
                    <div className="flex gap-2">
                      {story.colors.map(color => (
                        <span key={color} className="px-3 py-1 bg-[#C8A96A]/10 text-[#C8A96A]">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase text-gray-500 block mb-1">Timeline</span>
                    <span className="px-3 py-1 bg-gray-100">{story.duration}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why Stories Matter */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Why We Share Stories, Not Ratings
            </h2>
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
              A 5-star rating can't capture the joy on a child's face, the tears in a mother's eyes, 
              or the confidence a beautiful outfit can bring. These moments matter more to us than any number.
            </p>
            <p className="text-base font-light text-gray-600">
              When you choose ADHYA, you're not just getting an outfit. You're becoming part of our story too.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Ready to Create Your Story?
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Let's design something beautiful for your special moment
            </p>
            <a
              href="/book-discussion"
              className="inline-block px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
            >
              BOOK YOUR CONSULTATION
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

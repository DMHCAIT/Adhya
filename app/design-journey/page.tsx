'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Palette, Sparkles, Scissors, CheckCircle, ArrowRight } from 'lucide-react';

export default function DesignJourneyPage() {
  const steps = [
    {
      number: '01',
      title: 'Idea Discussion',
      icon: MessageCircle,
      description: 'Your vision begins here. We sit with you to understand your style, occasion, preferences, and dream design. Share your inspirations, Pinterest boards, or let us guide you.',
      details: [
        'One-on-one personal consultation',
        'Understanding occasion & theme',
        'Style preference mapping',
        'Initial sketch concepts',
        'Budget discussion'
      ],
      image: '/Designer Lehengas.png',
      duration: '30-45 minutes'
    },
    {
      number: '02',
      title: 'Fabric Selection',
      icon: Palette,
      description: 'The foundation of luxury. We curate premium fabrics from across India - pure silks, velvets, georgettes, and brocades. Feel the quality, see the drape, choose your canvas.',
      details: [
        'Premium fabric sourcing',
        'Texture & weight consideration',
        'Color matching & combinations',
        'Seasonal suitability',
        'Care & maintenance guidance'
      ],
      image: '/Designer Sarees.png',
      duration: '45-60 minutes'
    },
    {
      number: '03',
      title: 'Embroidery & Embellishment',
      icon: Sparkles,
      description: 'Where art meets craftsmanship. Our artisans bring your design to life with hand embroidery, zardozi, stone setting, and intricate threadwork. Watch your outfit transform.',
      details: [
        'Design finalization & approval',
        'Embroidery technique selection',
        'Stone & embellishment choices',
        'Placement & density mapping',
        'Regular progress updates with photos'
      ],
      image: '/Custom Blouse Stitching.png',
      duration: '15-30 days'
    },
    {
      number: '04',
      title: 'Precision Stitching',
      icon: Scissors,
      description: 'Tailored to perfection. Multiple fittings ensure your outfit fits like a second skin. Every curve, every fall, every detail is crafted for you.',
      details: [
        'Custom measurements taken',
        'First trial fitting',
        'Adjustments & refinements',
        'Second fitting confirmation',
        'Final touches & finishing'
      ],
      image: '/Party & Occasion Wear.png',
      duration: '7-14 days'
    },
    {
      number: '05',
      title: 'Final Masterpiece',
      icon: CheckCircle,
      description: 'Your dream, realized. The moment you see your completed outfit - styled, pressed, and ready to make you shine. This is where magic meets reality.',
      details: [
        'Final quality check',
        'Professional steam pressing',
        'Styling suggestions',
        'Care instructions provided',
        'Premium packaging & delivery'
      ],
      image: '/Designer Lehengas.png',
      duration: 'Ready to wear!'
    }
  ];

  const processHighlights = [
    { number: '45-60', label: 'Days Average Timeline' },
    { number: '3-4', label: 'Trial Fittings' },
    { number: '100%', label: 'Handcrafted' },
    { number: '∞', label: 'Customization Options' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Lehengas.png"
            alt="Design Journey"
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
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent mx-auto mb-8"
            />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Your Design Journey
            </h1>
            
            <p className="text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              From Dream to Reality: The Art of Creating Your Perfect Outfit
            </p>
            
            <p className="text-base font-light text-white/80 max-w-2xl mx-auto">
              Every masterpiece at ADHYA follows a meticulous journey of craftsmanship, creativity, and care. 
              Discover how we transform your vision into wearable art.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-light text-[#C8A96A] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {highlight.number}
                </div>
                <div className="text-sm font-light text-gray-600 tracking-wide">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#5E5E5E] font-light">The Process</span>
            <div className="w-20 h-px bg-[#C8A96A] mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Five Steps to Perfection
            </h2>
            <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
              Each stage is a collaboration between your vision and our expertise
            </p>
          </motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Step Number Overlay */}
                    <div className="absolute top-8 left-8">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <span className="text-3xl font-light text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-8 right-8">
                      <div className="px-4 py-2 bg-[#C8A96A] text-white text-xs tracking-wider">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#C8A96A]/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#C8A96A]" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] mt-2 flex-shrink-0"></div>
                        <p className="text-sm font-light text-gray-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Why Our Process is Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Complete Transparency',
                desc: 'Regular updates with photos and videos at every stage. You\'re never in the dark about your outfit\'s progress.'
              },
              {
                title: 'Unlimited Revisions',
                desc: 'We don\'t stop until you\'re completely satisfied. Your happiness is our only measure of success.'
              },
              {
                title: 'Lifetime Support',
                desc: 'Need alterations years later? We\'re here. Your outfit comes with lifetime stitching support.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-[#FAF9F7] to-white border border-[#C8A96A]/20 text-center"
              >
                <h3 className="text-xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Book your consultation and take the first step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-discussion"
                className="px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider flex items-center justify-center gap-2 group"
              >
                BOOK CONSULTATION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/collections"
                className="px-8 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-sm tracking-wider"
              >
                VIEW COLLECTIONS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

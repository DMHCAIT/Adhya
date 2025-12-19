'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scissors, Palette, Sparkles, Heart, Users, Clock } from 'lucide-react';

export default function BehindTheScenesPage() {
  const processes = [
    {
      title: 'Sketching & Design',
      icon: Palette,
      description: 'Every outfit starts with a hand-drawn sketch based on your vision, occasion, and preferences.',
      details: [
        'Initial consultation to understand your style',
        'Multiple design iterations',
        'Color palette selection',
        'Embroidery pattern planning',
        'Fabric draping experiments'
      ],
      time: '2-3 days',
      image: '/Designer Lehengas.png',
      stat: '50+ sketches per design'
    },
    {
      title: 'Fabric Selection',
      icon: Sparkles,
      description: 'We source premium fabrics from across India - silk from Varanasi, velvet from Surat, georgette from Gujarat.',
      details: [
        'Quality check for texture and weight',
        'Color matching in natural light',
        'Pre-washing and shrinkage testing',
        'Drape and fall assessment',
        'Client approval before cutting'
      ],
      time: '3-5 days',
      image: '/Designer Sarees.png',
      stat: '100+ fabric swatches available'
    },
    {
      title: 'Hand Embroidery',
      icon: Sparkles,
      description: 'Master artisans with 15-20 years of experience bring your design to life, stitch by stitch.',
      details: [
        'Design transfer to fabric',
        'Thread color selection (100+ shades)',
        'Zardozi, dabka, sequin work',
        'Stone setting (Swarovski, pearl)',
        'Quality inspection at every stage'
      ],
      time: '15-30 days',
      image: '/Designer Lehengas.png',
      stat: '10,000+ hand stitches per outfit'
    },
    {
      title: 'Precision Stitching',
      icon: Scissors,
      description: 'Expert tailors ensure perfect fit with 3-4 trial fittings, adjusting to your exact measurements.',
      details: [
        'Pattern making based on measurements',
        'Mock-up trial in cheaper fabric',
        'Final stitching with premium fabric',
        'Hand-finished seams and edges',
        'Final fitting adjustments'
      ],
      time: '7-14 days',
      image: '/Party & Occasion Wear.png',
      stat: '3-4 trial fittings'
    },
    {
      title: 'Finishing Touches',
      icon: Heart,
      description: 'The final magic - lining, buttons, hooks, fall, and quality checks before it reaches you.',
      details: [
        'Inner lining for comfort',
        'Hook and eye placement',
        'Fall and pico for sarees',
        'Tassel and latkan work',
        'Steam pressing and packaging'
      ],
      time: '2-3 days',
      image: '/Designer Sarees.png',
      stat: '100% quality checked'
    }
  ];

  const team = [
    {
      role: 'Master Embroidery Artisans',
      count: '8',
      experience: '15-25 years',
      specialty: 'Zardozi, dabka, stone work',
      emoji: '✨'
    },
    {
      role: 'Expert Tailors',
      count: '6',
      experience: '10-20 years',
      specialty: 'Bridal, traditional wear',
      emoji: '✂️'
    },
    {
      role: 'Design Consultants',
      count: '3',
      experience: '8-12 years',
      specialty: 'Styling, color theory',
      emoji: '🎨'
    },
    {
      role: 'Quality Controllers',
      count: '2',
      experience: '12-15 years',
      specialty: 'Final inspection',
      emoji: '🔍'
    }
  ];

  const values = [
    {
      title: 'No Shortcuts',
      desc: 'Hand embroidery takes longer, costs more, but the result is incomparable. We never compromise.',
      icon: Clock
    },
    {
      title: 'Fair Wages',
      desc: 'Our artisans are paid fair wages and work in comfortable conditions. Their skill deserves respect.',
      icon: Heart
    },
    {
      title: 'Sustainable',
      desc: 'We use natural fabrics, minimize waste, and support local artisan communities.',
      icon: Sparkles
    },
    {
      title: 'Transparent',
      desc: 'You can visit our studio anytime during your outfit creation. Watch the magic happen.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Designer Lehengas.png"
            alt="Behind the Scenes"
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
              Behind the Scenes
            </h1>
            <p className="text-xl font-light text-white/90 max-w-3xl mx-auto">
              The art, the craft, the people behind your perfect outfit
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
              When you wear an ADHYA outfit, you're wearing months of skill, care, and dedication. 
              Let us take you behind the curtain to see what makes luxury fashion truly special.
            </p>
            <p className="text-base font-light text-gray-600">
              No machines, no mass production - just human hands creating art.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              From Sketch to Masterpiece
            </h2>
            <p className="text-base font-light text-gray-600">
              Every step, every detail, crafted with care
            </p>
          </motion.div>

          <div className="space-y-32">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-[#C8A96A] text-white p-6 shadow-xl max-w-[200px]">
                    <div className="text-3xl font-light mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {process.stat}
                    </div>
                    <div className="text-xs tracking-wider uppercase">Per Outfit</div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#C8A96A]/10 flex items-center justify-center flex-shrink-0">
                      <process.icon className="w-8 h-8 text-[#C8A96A]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                        {process.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{process.time}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                    {process.description}
                  </p>

                  <div>
                    <h4 className="text-sm tracking-wider uppercase text-gray-600 mb-4">What Happens</h4>
                    <ul className="space-y-3">
                      {process.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] mt-2 flex-shrink-0"></div>
                          <span className="text-sm font-light text-gray-600">{detail}</span>
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

      {/* The Team */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Meet the Artisans
            </h2>
            <p className="text-base font-light text-gray-600">
              The skilled hands behind every stitch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#FAF9F7] to-white p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <div className="text-4xl font-light text-[#C8A96A] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {member.count}
                </div>
                <h3 className="text-base font-medium text-[#1C1C1C] mb-2">
                  {member.role}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{member.experience} experience</p>
                <p className="text-xs font-light text-gray-500">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What We Stand For
            </h2>
            <p className="text-base font-light text-gray-600">
              Quality, ethics, and transparency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#C8A96A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#C8A96A]" />
                </div>
                <h3 className="text-xl font-light text-[#1C1C1C] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {value.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Visit Our Studio
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              See our artisans at work. Watch your outfit come to life.
            </p>
            <a
              href="/book-discussion"
              className="inline-block px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
            >
              BOOK STUDIO VISIT
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Award, Users, Sparkles, Star, ArrowRight, Target, Eye, Diamond } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Diamond,
      title: "Craftsmanship",
      description: "Every stitch, every embellishment is executed with precision by master artisans who have honed their craft over decades."
    },
    {
      icon: Heart,
      title: "Personalization",
      description: "We don't believe in one-size-fits-all. Each design is tailored to reflect your unique personality and vision."
    },
    {
      icon: Star,
      title: "Quality",
      description: "Only the finest fabrics and materials make it into our atelier. We source premium silks, organzas, and embellishments globally."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "While honoring traditional techniques, we constantly innovate to bring fresh, contemporary elements to classic designs."
    }
  ];

  const milestones = [
    { year: "2018", event: "ADHYA Designer Studio Founded", desc: "Started with a vision to redefine luxury ethnic wear" },
    { year: "2019", event: "First Bridal Collection Launch", desc: "50+ bespoke bridal ensembles created" },
    { year: "2021", event: "Children's Line Introduced", desc: "Bringing elegance to little princesses" },
    { year: "2023", event: "200+ Happy Clients", desc: "Milestone of trust and excellence achieved" },
    { year: "2024", event: "Award Recognition", desc: "Best Designer Studio in Regional Fashion" }
  ];

  const team = [
    {
      name: "Founder & Lead Designer",
      role: "Creative Visionary",
      desc: "With 15+ years in haute couture, brings international design sensibility to traditional wear."
    },
    {
      name: "Master Tailor",
      role: "Craftsmanship Head",
      desc: "30 years of experience in precision tailoring and custom fittings."
    },
    {
      name: "Embroidery Artisan",
      role: "Embellishment Specialist",
      desc: "Expert in zardozi, gota patti, and hand embroidery techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>
        
        <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
            />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Story
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A Journey of Passion, Artistry, and Timeless Elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] shadow-2xl relative overflow-hidden group">
                <Image
                  src="/Designer Lehengas.png"
                  alt="ADHYA Atelier Workspace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Our Philosophy</span>
              <div className="w-20 h-px bg-gray-900 mt-4 mb-8"></div>
              
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Where Tradition<br />Meets Innovation
              </h2>
              
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                ADHYA was born from a simple belief: every woman and child deserves to wear something that tells their unique story. In a world of mass-produced fashion, we chose a different path—one of bespoke craftsmanship, personal attention, and timeless design.
              </p>
              
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                Our founder, with over 15 years in haute couture, recognized a gap in the market for truly personalized ethnic wear. While fast fashion dominated, discerning clients craved pieces that would become family heirlooms, passed down through generations.
              </p>
              
              <p className="text-base font-light text-gray-700 leading-relaxed mb-8">
                Today, ADHYA stands as a testament to that vision. From our atelier in the heart of the city, we create masterpieces that blend traditional Indian artistry with contemporary aesthetics. Each garment is a collaboration between our artisans and our clients—a wearable work of art.
              </p>
              
              <Link
                href="/design-process"
                className="inline-flex items-center gap-3 px-10 py-4 border border-gray-900 text-gray-900 text-sm font-light tracking-[0.2em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                View Our Process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Our Values</span>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What Defines Us
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              The principles that guide every creation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 border border-gray-900 flex items-center justify-center group hover:bg-gray-900 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors" strokeWidth={1} />
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">{value.title}</h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Our Journey</span>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Milestones of Excellence
            </h2>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-16 border-l-2 border-gray-200 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 bg-gray-900 text-white flex items-center justify-center text-xs font-light">
                  {milestone.year}
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {milestone.event}
                </h3>
                <p className="text-base font-light text-gray-600">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Our Team</span>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Master Artisans
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              The skilled hands and creative minds behind every masterpiece
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-[3/4] mb-6 shadow-xl relative overflow-hidden group">
                  <Image
                    src="/Party & Occasion Wear.png"
                    alt="ADHYA Team Member"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <h3 className="text-xl font-light text-gray-900 mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {member.name}
                </h3>
                <p className="text-sm tracking-[0.2em] uppercase text-amber-600 mb-4 font-light">
                  {member.role}
                </p>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-white/10 p-12 bg-white/5 backdrop-blur-sm"
            >
              <Eye className="w-12 h-12 text-amber-400 mb-6" strokeWidth={1} />
              <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Our Vision
              </h3>
              <p className="text-base font-light text-gray-300 leading-relaxed">
                To be the most sought-after destination for bespoke ethnic couture, recognized globally for unparalleled craftsmanship, innovation, and personalized design that celebrates the beauty of tradition while embracing contemporary elegance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-white/10 p-12 bg-white/5 backdrop-blur-sm"
            >
              <Target className="w-12 h-12 text-amber-400 mb-6" strokeWidth={1} />
              <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Our Mission
              </h3>
              <p className="text-base font-light text-gray-300 leading-relaxed">
                To create heirloom-quality garments that tell unique stories, empower women and children to feel extraordinary, and preserve traditional artisan techniques while supporting local craftsmanship. Every piece we create is designed to become a cherished part of family history.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Become Part of Our Story
            </h2>
            
            <p className="text-lg font-light text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join the ADHYA family and let us create something extraordinary for you
            </p>
            
            <Link
              href="/book-discussion"
              className="inline-flex items-center gap-3 px-14 py-6 bg-gray-900 text-white text-sm font-light tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-2xl group"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

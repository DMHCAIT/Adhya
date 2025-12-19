'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Award, Heart, Star, ArrowRight, Check, Crown, Gem } from 'lucide-react';
import { useRef } from 'react';

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const services = [
    { 
      icon: Sparkles, 
      title: "Bridal Couture", 
      desc: "Exquisite bridal lehengas and trousseau collections", 
      count: "50+",
      image: "/Designer Lehengas.png",
      link: "/collections/wedding"
    },
    { 
      icon: Heart, 
      title: "Children's Elegance", 
      desc: "Delightful designs for little princesses", 
      count: "30+",
      image: "/Party & Occasion Wear.png",
      link: "/collections/childrens"
    },
    { 
      icon: Award, 
      title: "Custom Design", 
      desc: "Bespoke creations from concept to reality", 
      count: "100+",
      image: "/Designer Sarees.png",
      link: "/collections/womens"
    },
    { 
      icon: Star, 
      title: "Embroidery Art", 
      desc: "Handcrafted & computer embellishments", 
      count: "200+",
      image: "/Custom Blouse Stitching.png",
      link: "/collections/embroidery"
    }
  ];

  const features = [
    "100% Handcrafted",
    "Premium Fabrics",
    "Custom Measurements",
    "Personal Consultation",
    "Trial Fittings",
    "Timeless Designs"
  ];

  const testimonials = [
    {
      quote: "ADHYA transformed my wedding vision into reality. The attention to detail and craftsmanship is unparalleled.",
      author: "Priya Sharma",
      role: "Bride, Mumbai",
      rating: 5
    },
    {
      quote: "The mother-daughter combo for our family function was absolutely stunning. Everyone couldn't stop admiring!",
      author: "Anita Reddy",
      role: "Happy Customer",
      rating: 5
    },
    {
      quote: "From consultation to delivery, the experience was seamless. The quality speaks luxury at every stitch.",
      author: "Kavita Singh",
      role: "Festive Client",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Hero Section - Ultra Luxurious */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #C8A96A 50px, #C8A96A 51px)`,
            transform: 'rotate(45deg) scale(1.5)'
          }}></div>
        </div>

        {/* Hero Image Background with Enhanced Overlay */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0"
        >
          <Image
            src="/home page 1.png"
            alt="ADHYA Designer Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C]/85 via-[#1C1C1C]/75 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </motion.div>
        
        <motion.div 
          style={{ y: yPos }}
          className="max-w-7xl mx-auto container-padding py-40 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Decorative Top Element */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center mb-12"
            >
              <div className="flex items-center gap-6">
                <motion.div 
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-[#C8A96A]" 
                  style={{ width: '80px' }}
                />
                <Crown className="w-8 h-8 text-[#C8A96A]" strokeWidth={1} />
                <motion.div 
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-px bg-gradient-to-l from-transparent via-[#C8A96A] to-[#C8A96A]" 
                  style={{ width: '80px' }}
                />
              </div>
            </motion.div>
            
            {/* Main Heading - Enhanced Typography */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-7xl md:text-8xl lg:text-9xl font-light text-white mb-6 tracking-tight leading-none" 
              style={{ 
                fontFamily: 'var(--font-cormorant)',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              ADHYA
            </motion.h1>
            
            {/* Subtitle with Luxury Accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-light tracking-[0.4em] uppercase mb-2" style={{ color: '#C8A96A' }}>
                Designer Studio
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rotate-45 border border-[#C8A96A]"></div>
                <p className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light">
                  Couture Atelier
                </p>
                <div className="w-2 h-2 rotate-45 border border-[#C8A96A]"></div>
              </div>
            </motion.div>
            
            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent mx-auto mb-12"
            />
            
            {/* Description - Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mb-16"
            >
              <p className="text-xl md:text-2xl font-light text-white max-w-4xl mx-auto leading-relaxed mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Where Tradition Meets Contemporary Luxury
              </p>
              <p className="text-base md:text-lg font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Exquisite bespoke couture for women and children, handcrafted with unparalleled artistry
              </p>
            </motion.div>
            
            {/* CTA Buttons - Luxury Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/collections"
                className="group relative px-16 py-6 overflow-hidden text-sm font-light tracking-[0.3em] uppercase transition-all duration-700"
                style={{ backgroundColor: '#C8A96A' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B89858] to-[#D4B87A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                <span className="relative flex items-center gap-3 text-white">
                  Explore Collections
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href="/book-discussion"
                className="group px-16 py-6 border-2 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 relative overflow-hidden"
                style={{ borderColor: '#C8A96A', color: '#FAF9F7' }}
              >
                <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" style={{ backgroundColor: '#C8A96A' }}></div>
                <span className="relative">Book Private Consultation</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator - Elegant */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#C8A96A] font-light">Scroll</span>
          <div className="w-px h-20 bg-gradient-to-b from-[#C8A96A] via-[#C8A96A]/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* About Preview - Sophisticated Split */}
      <section className="section-padding" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Section Label */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px" style={{ backgroundColor: '#C8A96A' }}></div>
                  <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>About Us</span>
                </div>
              </div>
              
              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                Crafting Dreams<br />Into Reality
              </h2>
              
              {/* Description */}
              <div className="space-y-6 mb-12">
                <p className="text-lg font-light leading-relaxed" style={{ color: '#1C1C1C' }}>
                  At ADHYA, we believe every woman and child deserves to feel extraordinary. Our atelier specializes in bespoke designer wear that celebrates individuality, tradition, and timeless elegance.
                </p>
                
                <p className="text-lg font-light leading-relaxed" style={{ color: '#1C1C1C', opacity: 0.8 }}>
                  From intricate bridal lehengas to playful children's ensembles, each piece is meticulously handcrafted by master artisans with decades of experience. We don't mass-produce—we create heirlooms.
                </p>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: '#C8A96A' }}></div>
                    <span className="text-sm font-light tracking-wide" style={{ color: '#1C1C1C' }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-12 py-5 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 border-2 hover:scale-105"
                style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Image Section with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[3/4] overflow-hidden shadow-2xl relative group">
                  <Image
                    src="/Designer Lehengas.png"
                    alt="Designer Lehengas Collection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-12 -left-12 w-64 h-64 -z-10" style={{ backgroundColor: '#C8A96A', opacity: 0.1 }}></div>
                <div className="absolute -top-12 -right-12 w-48 h-48 border -z-10" style={{ borderColor: '#C8A96A', opacity: 0.3 }}></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 p-8 shadow-2xl backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(28, 28, 28, 0.95)' }}
                >
                  <div className="text-center">
                    <p className="text-4xl font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)', color: '#C8A96A' }}>100+</p>
                    <p className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: '#FAF9F7' }}>Bespoke Designs</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Luxury Grid */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: '#1C1C1C' }}>
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #C8A96A 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Gem className="w-5 h-5" style={{ color: '#C8A96A' }} />
              <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>Our Services</span>
              <Gem className="w-5 h-5" style={{ color: '#C8A96A' }} />
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)', color: '#FAF9F7' }}>
              Bespoke Excellence
            </h2>
            
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: '#FAF9F7', opacity: 0.7 }}>
              Comprehensive design services tailored to your vision
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <Link href={service.link} className="block">
                  <div className="relative border transition-all duration-700 hover:scale-105 overflow-hidden" style={{ 
                    backgroundColor: 'rgba(250, 249, 247, 0.03)',
                    borderColor: 'rgba(200, 169, 106, 0.2)'
                  }}>
                    {/* Service Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/50 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4">
                        <service.icon className="w-10 h-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#C8A96A' }} strokeWidth={1} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 relative z-10">
                      {/* Title */}
                      <h3 className="text-2xl font-light mb-3 transition-colors duration-500" style={{ 
                        fontFamily: 'var(--font-cormorant)',
                        color: '#FAF9F7'
                      }}>
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm font-light leading-relaxed mb-6" style={{ color: '#FAF9F7', opacity: 0.7 }}>
                        {service.desc}
                      </p>
                      
                      {/* Count */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-light" style={{ fontFamily: 'var(--font-cormorant)', color: '#C8A96A' }}>{service.count}</span>
                        <span className="text-xs tracking-wider" style={{ color: '#FAF9F7', opacity: 0.5 }}>DESIGNS</span>
                      </div>

                      {/* View Button */}
                      <div className="flex items-center gap-2 text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: '#C8A96A' }}>
                        <span>EXPLORE</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#C8A96A' }}></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-4 px-14 py-6 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105"
              style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wedding Collection Highlight - Ultra Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Designer Lehengas.png"
            alt="Bridal Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/95 via-[#1C1C1C]/85 to-[#1C1C1C]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto container-padding py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Decorative Top */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px mb-8"
                style={{ background: 'linear-gradient(to right, #C8A96A, transparent)' }}
              />
              
              <div className="flex items-center gap-3 mb-8">
                <Crown className="w-6 h-6" style={{ color: '#C8A96A' }} />
                <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>Signature Collection</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#FAF9F7' }}>
                Bridal<br />Couture
              </h2>
              
              <p className="text-xl font-light mb-12 leading-relaxed" style={{ color: '#FAF9F7', opacity: 0.9 }}>
                Your dream wedding deserves nothing but perfection. Our complete bridal trousseau planning includes everything from the main ceremony lehenga to reception wear, coordinated with traditional bangles and jewelry.
              </p>
              
              {/* Features List - Elegant */}
              <div className="space-y-5 mb-14">
                {[
                  "Complete wedding wardrobe planning",
                  "Bridal lehengas & sarees with heavy work",
                  "Reception & sangeet outfits",
                  "Bangle & jewelry coordination",
                  "Dedicated bridal consultation",
                  "Multiple trial fittings included"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-1.5 h-1.5 rotate-45 mt-2.5 flex-shrink-0" style={{ backgroundColor: '#C8A96A' }}></div>
                    <span className="text-base font-light" style={{ color: '#FAF9F7' }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/collections/wedding"
                  className="group inline-flex items-center gap-3 px-12 py-5 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}
                >
                  Explore Bridal Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/book-discussion"
                  className="group inline-flex items-center gap-3 px-12 py-5 border-2 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500"
                  style={{ borderColor: '#C8A96A', color: '#FAF9F7' }}
                >
                  Book Bridal Consultation
                </Link>
              </div>
            </motion.div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="p-12 border backdrop-blur-md relative overflow-hidden" style={{ 
                backgroundColor: 'rgba(250, 249, 247, 0.05)',
                borderColor: 'rgba(200, 169, 106, 0.3)'
              }}>
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r" style={{ borderColor: '#C8A96A', opacity: 0.3 }}></div>
                
                <div className="text-center mb-10">
                  <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>Collection Includes</span>
                  <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: '#C8A96A' }}></div>
                </div>
                
                <div className="space-y-8">
                  {[
                    { title: "Bridal Lehengas", count: "25+ Designs" },
                    { title: "Bridal Sarees", count: "20+ Designs" },
                    { title: "Reception Gowns", count: "18+ Designs" },
                    { title: "Mehendi & Sangeet", count: "15+ Designs" },
                    { title: "Wedding Blouses", count: "30+ Designs" },
                    { title: "Bangle Coordination", count: "Complete Styling" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex justify-between items-baseline pb-6 border-b last:border-0"
                      style={{ borderColor: 'rgba(200, 169, 106, 0.2)' }}
                    >
                      <span className="text-base font-light" style={{ color: '#FAF9F7' }}>{item.title}</span>
                      <span className="text-sm font-light tracking-wider" style={{ color: '#C8A96A' }}>{item.count}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Preview - Sophisticated Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="max-w-7xl mx-auto container-padding">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: '#C8A96A' }}></div>
              <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>Collections</span>
              <div className="w-12 h-px" style={{ backgroundColor: '#C8A96A' }}></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
              Curated Collections
            </h2>
            
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: '#1C1C1C', opacity: 0.7 }}>
              Each collection tells a story of artistry, tradition, and modern elegance
            </p>
          </motion.div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { title: "Women's Couture", count: "50+ Designs", link: "/collections/womens", desc: "Bridal lehengas, sarees, and occasion wear", image: "/Designer Sarees.png" },
              { title: "Children's Collection", count: "30+ Designs", link: "/collections/childrens", desc: "Elegant designs for little princesses", image: "/Party & Occasion Wear.png" },
              { title: "Custom Blouse", count: "25+ Designs", link: "/collections/blouse-saree", desc: "Exquisite blouse stitching", image: "/Custom Blouse Stitching.png" }
            ].map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={collection.link} className="group block">
                  {/* Image Container */}
                  <div className="relative overflow-hidden mb-8 shadow-2xl">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Hover Label */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                        <span className="text-sm tracking-[0.3em] uppercase font-light px-8 py-3 border" style={{ color: '#FAF9F7', borderColor: '#C8A96A' }}>
                          View Collection
                        </span>
                      </div>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#C8A96A' }}></div>
                  </div>
                  
                  {/* Collection Info */}
                  <div className="text-center">
                    <h3 className="text-3xl font-light mb-3 group-hover:translate-x-1 transition-transform duration-500" style={{ 
                      fontFamily: 'var(--font-cormorant)',
                      color: '#1C1C1C'
                    }}>
                      {collection.title}
                    </h3>
                    <p className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: '#C8A96A' }}>
                      {collection.count}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/collections"
              className="group inline-flex items-center gap-4 px-14 py-6 border-2 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105"
              style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}
            >
              Explore All Collections
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Luxury Design */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: '#1C1C1C' }}>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #C8A96A 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Star className="w-5 h-5 fill-current" style={{ color: '#C8A96A' }} />
              <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>Testimonials</span>
              <Star className="w-5 h-5 fill-current" style={{ color: '#C8A96A' }} />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)', color: '#FAF9F7' }}>
              Voices of Elegance
            </h2>
            
            <div className="w-24 h-px mx-auto" style={{ backgroundColor: '#C8A96A' }}></div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="p-10 border backdrop-blur-sm transition-all duration-700 hover:scale-105 relative overflow-hidden" style={{ 
                  backgroundColor: 'rgba(250, 249, 247, 0.03)',
                  borderColor: 'rgba(200, 169, 106, 0.2)'
                }}>
                  {/* Quote Mark */}
                  <div className="absolute top-8 right-8 text-7xl font-serif opacity-10" style={{ color: '#C8A96A' }}>
                    &ldquo;
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-8 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#C8A96A' }} />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-lg font-light mb-10 leading-relaxed italic relative z-10" style={{ 
                    fontFamily: 'var(--font-cormorant)',
                    color: '#FAF9F7'
                  }}>
                    {testimonial.quote}
                  </p>
                  
                  {/* Author */}
                  <div className="border-t pt-6 relative z-10" style={{ borderColor: 'rgba(200, 169, 106, 0.2)' }}>
                    <p className="text-sm tracking-[0.3em] uppercase font-light mb-2" style={{ color: '#FAF9F7' }}>
                      {testimonial.author}
                    </p>
                    <p className="text-xs font-light" style={{ color: '#C8A96A', opacity: 0.7 }}>
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Hover Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#C8A96A' }}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-3 font-light tracking-[0.3em] uppercase transition-all duration-500 group"
              style={{ color: '#C8A96A' }}
            >
              Read More Stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
              Discover Your Perfect Style
            </h2>
            <p className="text-lg font-light" style={{ color: '#5E5E5E' }}>
              Explore our curated experiences designed for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/by-occasion" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image src="/Designer Lehengas.png" alt="Shop by Occasion" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>Shop by Occasion</h3>
                    <p className="text-sm text-white/90 font-light">Find outfits for your event</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/style-quiz" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image src="/Designer Sarees.png" alt="Style Quiz" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>Style Quiz</h3>
                    <p className="text-sm text-white/90 font-light">Discover your aesthetic</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/mother-daughter-showcase" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image src="/Party & Occasion Wear.png" alt="Mother-Daughter Sets" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>Matching Sets</h3>
                    <p className="text-sm text-white/90 font-light">Mother-daughter combos</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/design-journey" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image src="/Designer Lehengas.png" alt="Design Journey" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>Our Process</h3>
                    <p className="text-sm text-white/90 font-light">See how we create magic</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/fabric-stories"
              className="inline-block px-8 py-4 border-2 hover:bg-[#1C1C1C] hover:text-white transition-all text-sm tracking-wider"
              style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}
            >
              EXPLORE FABRIC STORIES
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Ultra Luxury */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: '#FAF9F7' }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-5" style={{ backgroundColor: '#C8A96A' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/2 translate-y-1/2 opacity-5" style={{ backgroundColor: '#C8A96A' }}></div>

        <div className="max-w-5xl mx-auto container-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative Top */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px mx-auto mb-12"
              style={{ background: 'linear-gradient(to right, transparent, #C8A96A, transparent)' }}
            />
            
            {/* Crown Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-10"
            >
              <div className="p-6 border rounded-full" style={{ borderColor: '#C8A96A' }}>
                <Crown className="w-10 h-10" style={{ color: '#C8A96A' }} strokeWidth={1} />
              </div>
            </motion.div>
            
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 leading-tight" style={{ 
              fontFamily: 'var(--font-cormorant)',
              color: '#1C1C1C'
            }}>
              Begin Your Journey
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl font-light mb-6 leading-relaxed max-w-3xl mx-auto" style={{ color: '#1C1C1C' }}>
              Schedule a private consultation to discuss your vision
            </p>
            
            <p className="text-base font-light mb-16 leading-relaxed max-w-2xl mx-auto" style={{ color: '#1C1C1C', opacity: 0.7 }}>
              Every masterpiece begins with a conversation. Let's create something extraordinary together.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/book-discussion"
                className="group px-16 py-6 text-sm font-light tracking-[0.3em] uppercase transition-all duration-700 hover:scale-105 shadow-2xl"
                style={{ backgroundColor: '#1C1C1C', color: '#FAF9F7' }}
              >
                <span className="flex items-center gap-3">
                  Book Private Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link
                href="/design-process"
                className="group px-16 py-6 border-2 text-sm font-light tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105"
                style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}
              >
                View Our Process
              </Link>
            </div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 border-t"
              style={{ borderColor: 'rgba(28, 28, 28, 0.1)' }}
            >
              <div className="text-center">
                <p className="text-xs tracking-[0.4em] uppercase font-light mb-2" style={{ color: '#C8A96A' }}>Visit Us</p>
                <p className="text-sm font-light" style={{ color: '#1C1C1C' }}>Atelier by Appointment</p>
              </div>
              <div className="hidden sm:block w-px h-8" style={{ backgroundColor: '#C8A96A', opacity: 0.3 }}></div>
              <div className="text-center">
                <p className="text-xs tracking-[0.4em] uppercase font-light mb-2" style={{ color: '#C8A96A' }}>Inquiries</p>
                <p className="text-sm font-light" style={{ color: '#1C1C1C' }}>info@adhyastudio.com</p>
              </div>
              <div className="hidden sm:block w-px h-8" style={{ backgroundColor: '#C8A96A', opacity: 0.3 }}></div>
              <div className="text-center">
                <p className="text-xs tracking-[0.4em] uppercase font-light mb-2" style={{ color: '#C8A96A' }}>Follow</p>
                <p className="text-sm font-light" style={{ color: '#1C1C1C' }}>@adhyastudio</p>
              </div>
            </motion.div>
            
            {/* Decorative Bottom */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="h-px mx-auto mt-12"
              style={{ background: 'linear-gradient(to right, transparent, #C8A96A, transparent)' }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

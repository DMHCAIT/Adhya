'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Heart, Palette, Scissors, Ruler, Star, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: "Bridal Couture",
      tagline: "Your Dream Wedding Ensemble",
      description: "Transform your bridal vision into reality with our exquisite bridal collection. From traditional lehengas to contemporary fusion wear, every piece is designed to make you feel like royalty on your special day.",
      image: "/Designer Lehengas.png",
      features: [
        "Custom bridal lehengas with intricate embroidery",
        "Complete trousseau planning and design",
        "Matching accessories coordination",
        "Multiple trial fittings included",
        "Premium fabric selection (silk, velvet, organza)",
        "Heirloom-quality craftsmanship"
      ],
      process: "Initial consultation → Design conceptualization → Fabric selection → Multiple fittings → Final delivery",
      timeframe: "8-12 weeks",
      priceRange: "Premium Investment"
    },
    {
      icon: Heart,
      title: "Children's Elegance",
      tagline: "Little Princesses, Big Dreams",
      description: "Delight in our specially crafted children's collection where comfort meets elegance. Perfect for weddings, festivals, and special occasions, each piece allows little ones to shine while ensuring ease of movement.",
      image: "/Party & Occasion Wear.png",
      features: [
        "Age-appropriate designs (2-14 years)",
        "Soft, child-friendly fabrics",
        "Mother-daughter matching options",
        "Playful yet elegant designs",
        "Easy care and maintenance",
        "Growing room built into designs"
      ],
      process: "Consultation → Design selection → Measurement → Single fitting → Delivery",
      timeframe: "4-6 weeks",
      priceRange: "Accessible Luxury"
    },
    {
      icon: Palette,
      title: "Custom Design",
      tagline: "Your Vision, Our Expertise",
      description: "Bring your unique vision to life with our bespoke design service. Whether you have a Pinterest board full of inspiration or a single element you love, we'll collaborate to create something entirely yours.",
      image: "/Designer Sarees.png",
      features: [
        "One-on-one design consultations",
        "Mood board development",
        "Original design sketches",
        "Unlimited design revisions",
        "Personalized color palette",
        "Unique embellishments and details"
      ],
      process: "Concept meeting → Sketches → Approval → Production → Fittings → Completion",
      timeframe: "10-14 weeks",
      priceRange: "Bespoke Pricing"
    },
    {
      icon: Scissors,
      title: "Embroidery & Embellishments",
      tagline: "Artistry in Every Stitch",
      description: "Our master artisans specialize in traditional and contemporary embroidery techniques. From delicate threadwork to elaborate zardozi, we bring texture, dimension, and luxury to every garment.",
      image: "/Custom Blouse Stitching.png",
      features: [
        "Zardozi (metallic embroidery)",
        "Gota patti work",
        "Hand embroidery with silk threads",
        "Mirror work (abhla) detailing",
        "Sequin and bead embellishments",
        "Contemporary 3D embroidery"
      ],
      process: "Design consultation → Pattern creation → Handwork execution → Quality check",
      timeframe: "3-8 weeks (depending on complexity)",
      priceRange: "Based on Coverage"
    },
    {
      icon: Ruler,
      title: "Alterations & Restyling",
      tagline: "Refresh, Revive, Reimagine",
      description: "Breathe new life into cherished garments with our expert alteration and restyling services. Transform heirloom pieces or update existing outfits to current trends while preserving their essence.",
      image: "/Designer Lehengas.png",
      features: [
        "Expert tailoring and fitting adjustments",
        "Lehenga to gown conversions",
        "Adding contemporary elements to traditional pieces",
        "Repurposing sarees into lehengas",
        "Embellishment additions or removals",
        "Size adjustments with style preservation"
      ],
      process: "Garment assessment → Proposal → Approval → Execution → Final fitting",
      timeframe: "2-4 weeks",
      priceRange: "Quoted Per Project"
    },
    {
      icon: Star,
      title: "Occasion Wear",
      tagline: "Every Event Deserves Excellence",
      description: "From intimate family gatherings to grand celebrations, our occasion wear collection offers sophisticated designs for every special moment. Elegant, comfortable, and photo-ready.",
      image: "/Party & Occasion Wear.png",
      features: [
        "Festival and celebration outfits",
        "Cocktail party ensembles",
        "Reception and sangeet attire",
        "Contemporary Indo-western fusion",
        "Coordinated family outfits",
        "Seasonal collection launches"
      ],
      process: "Consultation → Catalog selection or custom → Fitting → Delivery",
      timeframe: "4-8 weeks",
      priceRange: "Mid to Premium Range"
    }
  ];

  const packages = [
    {
      name: "Essentials",
      desc: "Perfect for single pieces",
      features: ["1 Custom Design", "2 Fittings Included", "Standard Timeline", "Basic Embellishments"],
      cta: "Starting Point"
    },
    {
      name: "Signature",
      desc: "Our most popular choice",
      features: ["2-3 Custom Designs", "Unlimited Fittings", "Priority Timeline", "Premium Embellishments", "Accessories Coordination"],
      cta: "Most Popular",
      featured: true
    },
    {
      name: "Couture",
      desc: "The ultimate experience",
      features: ["Complete Collection", "White Glove Service", "Fastest Timeline", "Exclusive Embellishments", "Complete Styling", "Home Consultations"],
      cta: "Ultimate Luxury"
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
              Our Services
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Couture Services Tailored to Your Vision
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-[4/5] shadow-2xl relative overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1} />
                    <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Service {String(index + 1).padStart(2, '0')}</span>
                    <div className="w-20 h-px bg-gray-900 mt-4"></div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-sm tracking-[0.2em] uppercase text-amber-600 mb-6 font-light">
                    {service.tagline}
                  </p>
                  
                  <p className="text-base font-light text-gray-700 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-sm font-light text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 space-y-3 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Timeline</span>
                      <span className="text-sm font-light text-gray-900">{service.timeframe}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Investment</span>
                      <span className="text-sm font-light text-gray-900">{service.priceRange}</span>
                    </div>
                  </div>
                  
                  <Link
                    href="/book-discussion"
                    className="inline-flex items-center gap-3 px-10 py-4 border border-gray-900 text-gray-900 text-sm font-light tracking-[0.2em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-300 group"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Packages</span>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Choose Your Experience
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              Flexible packages designed to match your needs and vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${pkg.featured ? 'lg:scale-105 lg:shadow-2xl' : ''}`}
              >
                <div className={`border ${pkg.featured ? 'border-gray-900 bg-white' : 'border-gray-200 bg-white'} p-10 h-full`}>
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-amber-400 text-gray-900 text-xs font-light tracking-[0.2em] uppercase">
                      Recommended
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wider" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {pkg.name}
                    </h3>
                    <p className="text-sm font-light text-gray-600">{pkg.desc}</p>
                  </div>
                  
                  <div className="space-y-4 mb-10">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-amber-600" strokeWidth={2} />
                        <span className="text-sm font-light text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/book-discussion"
                    className={`block text-center py-4 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 ${
                      pkg.featured 
                        ? 'bg-gray-900 text-white hover:bg-black' 
                        : 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
        
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Ready to Begin?
            </h2>
            
            <p className="text-lg font-light text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Schedule a complimentary consultation to discuss your vision and explore how we can bring it to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-discussion"
                className="px-14 py-6 bg-white text-gray-900 text-sm font-light tracking-[0.3em] uppercase hover:bg-amber-400 transition-all duration-300 shadow-2xl"
              >
                Book Consultation
              </Link>
              <Link
                href="/design-process"
                className="px-14 py-6 border-2 border-white text-white text-sm font-light tracking-[0.3em] uppercase hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

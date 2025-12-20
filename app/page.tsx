'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Award, Heart, Star, ArrowRight, Check, Crown, MessageCircle, Calendar, Gem } from 'lucide-react';

export default function HomePage() {
  const services = [
    { 
      icon: Crown, 
      title: "Bridal Couture", 
      desc: "Complete wedding trousseau from ₹1L", 
      count: "50+",
      image: "/Designer Lehengas.png",
      link: "/by-occasion/wedding",
      pricing: "₹1,00,000 - ₹5,00,000+"
    },
    { 
      icon: Heart, 
      title: "Children's Wear", 
      desc: "Adorable designs from ₹8K", 
      count: "30+",
      image: "/Party & Occasion Wear.png",
      link: "/by-occasion/kids",
      pricing: "₹8,000 - ₹40,000"
    },
    { 
      icon: Sparkles, 
      title: "Computer Embroidery", 
      desc: "Premium designs from ₹500", 
      count: "200+",
      image: "/Custom Blouse Stitching.png",
      link: "/embroidery-services",
      pricing: "₹500 - ₹5,000"
    },
    { 
      icon: Star, 
      title: "Custom Design", 
      desc: "Bespoke creations, your vision", 
      count: "100+",
      image: "/Designer Sarees.png",
      link: "/collections",
      pricing: "Custom Quote"
    }
  ];

  const whyChooseUs = [
    { title: "100+ Happy Brides", desc: "Trusted for the most special day", icon: "👰" },
    { title: "3-10 Day Turnaround", desc: "Fast delivery without compromise", icon: "⚡" },
    { title: "Trial Fittings Included", desc: "Perfect fit guaranteed", icon: "✨" },
    { title: "Premium Fabrics", desc: "Only the finest materials", icon: "🧵" },
  ];

  const testimonials = [
    {
      quote: "ADHYA transformed my wedding vision into reality. Worth every rupee!",
      author: "Priya Sharma",
      location: "Mumbai",
      image: "/Designer Lehengas.png",
      rating: 5
    },
    {
      quote: "The mother-daughter combo was absolutely stunning. Received so many compliments!",
      author: "Anita Reddy",
      location: "Hyderabad",
      image: "/Party & Occasion Wear.png",
      rating: 5
    },
    {
      quote: "Quality and craftsmanship is unmatched. My go-to designer studio now.",
      author: "Kavita Singh",
      location: "Bangalore",
      image: "/Designer Sarees.png",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero - Clear Value Proposition */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home page 1.png"
            alt="ADHYA Designer Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                <Image
                  src="/logo.jpg"
                  alt="ADHYA Studio Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Premium Designer Wear<br />for Women & Children
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto mb-8">
              Bridal Couture • Computer Embroidery • Custom Designs
            </p>
            
            {/* Key Value Props */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#C8A96A]" />
                <span>100% Handcrafted</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#C8A96A]" />
                <span>3-10 Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#C8A96A]" />
                <span>Trial Fittings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#C8A96A]" />
                <span>Prices from ₹500</span>
              </div>
            </div>
            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-discussion"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96A] text-white hover:bg-[#1C1C1C] transition-colors text-sm tracking-wider group"
              >
                BOOK FREE CONSULTATION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919177171594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] transition-colors text-sm tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                WHATSAPP US
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services with Pricing - Clear & Direct */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Our Services & Pricing
            </h2>
            <p className="text-lg font-light text-gray-600">
              Transparent pricing for premium quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-[#FAF9F7] hover:shadow-2xl transition-all"
                >
                  <Link href={service.link}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <Icon className="absolute top-4 right-4 w-8 h-8 text-white" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xs tracking-wider mb-1">{service.count} DESIGNS</div>
                        <div className="text-2xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          {service.title}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-sm font-light text-gray-600 mb-3">{service.desc}</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-medium text-[#C8A96A]">{service.pricing}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C8A96A] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Social Proof */}
      <section className="section-padding bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Why 100+ Brides Choose ADHYA
            </h2>
            <p className="text-lg font-light text-white/80">
              Real results, real trust
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {item.title}
                </h3>
                <p className="text-sm font-light text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/client-stories"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition-colors text-sm tracking-wider"
            >
              SEE CLIENT STORIES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C8A96A] text-[#C8A96A]" />
              ))}
              <span className="ml-2 text-sm text-gray-600">(100+ 5-star reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAF9F7] p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8A96A] text-[#C8A96A]" />
                  ))}
                </div>
                <p className="text-base font-light text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-[#1C1C1C]">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Journey - Process Overview */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                How It Works
              </h2>
              <p className="text-lg font-light text-gray-700 mb-8">
                From consultation to delivery, we make your dream outfit a reality
              </p>

              <div className="space-y-6">
                {[
                  { step: "1", title: "Book Consultation", desc: "Free 30-min discussion about your vision" },
                  { step: "2", title: "Design Selection", desc: "Choose from catalog or create custom design" },
                  { step: "3", title: "Measurements", desc: "Precise measurements for perfect fit" },
                  { step: "4", title: "Trial Fitting", desc: "Try on and make final adjustments" },
                  { step: "5", title: "Delivery", desc: "Receive your masterpiece in 3-10 days" },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#C8A96A] text-white flex items-center justify-center flex-shrink-0 font-medium">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">{item.title}</h3>
                      <p className="text-sm font-light text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/design-journey"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-sm tracking-wider"
              >
                SEE DETAILED PROCESS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/Designer Lehengas.png"
                alt="Design Process"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Clear Primary Action */}
      <section className="section-padding bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Gem className="w-16 h-16 text-[#C8A96A] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Ready to Create Your Dream Outfit?
            </h2>
            <p className="text-xl font-light text-white/80 mb-10">
              Book a free consultation and let's bring your vision to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/book-discussion"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#C8A96A] text-white hover:bg-white hover:text-[#1C1C1C] transition-colors text-base tracking-wider group"
              >
                <Calendar className="w-5 h-5" />
                BOOK FREE CONSULTATION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919177171594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 border-2 border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition-colors text-base tracking-wider"
              >
                <MessageCircle className="w-5 h-5" />
                CHAT ON WHATSAPP
              </a>
            </div>

            <p className="text-sm font-light text-white/60">
              No obligation • Free consultation • Response within 2 hours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, X } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Atelier",
      details: ["ADHYA Designer Studio", "123 Fashion District", "Mumbai, Maharashtra 400001"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@adhyastudio.com", "support@adhyastudio.com"],
      link: "mailto:hello@adhyastudio.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 10 AM - 7 PM", "Sunday: By Appointment Only"],
      link: null
    }
  ];

  const faqs = [
    {
      question: "Do I need an appointment?",
      answer: "Yes, we work by appointment only to ensure personalized attention. Book through our consultation form."
    },
    {
      question: "What's the typical timeline?",
      answer: "Bridal couture: 8-12 weeks. Occasion wear: 4-8 weeks. Rush orders available with surcharge."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide with secure packaging and tracking for all international orders."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
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
              Get In Touch
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We'd Love to Hear from You
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Send Message</span>
                <div className="w-20 h-px bg-gray-900 mt-4"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Let's Start a Conversation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="bridal">Bridal Couture Inquiry</option>
                      <option value="children">Children's Collection</option>
                      <option value="custom">Custom Design</option>
                      <option value="alteration">Alterations</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900 resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-green-50 border border-green-200 text-green-800 font-light"
                  >
                    <p className="font-medium mb-1">Thank you for reaching out!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-red-50 border border-red-200 text-red-800 font-light"
                  >
                    <p className="font-medium mb-1">Oops! Something went wrong.</p>
                    <p className="text-sm">Please try again or email us directly.</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full md:w-auto px-14 py-5 bg-gray-900 text-white text-sm font-light tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8 lg:sticky lg:top-24">
                {contactInfo.map((info) => (
                  <div key={info.title} className="border-l-2 border-gray-900 pl-6">
                    <info.icon className="w-8 h-8 text-gray-900 mb-4" strokeWidth={1} />
                    <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wider">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm font-light text-gray-600">
                          {info.link && index === 0 ? (
                            <a href={info.link} className="hover:text-amber-600 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Social Media */}
                <div className="border-l-2 border-gray-900 pl-6">
                  <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors group">
                      <Instagram className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a href="#" className="w-10 h-10 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors group">
                      <Facebook className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a href="#" className="w-10 h-10 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors group">
                      <X className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Quick Answers</span>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 p-8 hover:border-gray-900 transition-colors"
              >
                <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                  {faq.question}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-sm font-light text-gray-600 mb-6">
              Have more questions? Check our complete FAQ page.
            </p>
            <a
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-light text-gray-900 tracking-wider hover:text-amber-600 transition-colors"
            >
              View All FAQs
              <span className="text-xs">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-4" strokeWidth={1} />
            <p className="text-sm font-light tracking-wider">INTERACTIVE MAP</p>
            <p className="text-xs text-gray-400 mt-2">Embed Google Maps here</p>
          </div>
        </div>
      </section>
    </div>
  );
}

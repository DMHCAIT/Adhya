'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Sparkles, Check } from 'lucide-react';
import { useState } from 'react';

export default function BookDiscussionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    occasion: '',
    budget: '',
    description: '',
    referenceImages: false
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Don't reset form immediately so user can see their submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          preferredDate: '',
          preferredTime: '',
          occasion: '',
          budget: '',
          description: '',
          referenceImages: false
        });
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const benefits = [
    "Personalized one-on-one consultation",
    "Expert design guidance and recommendations",
    "Fabric and color palette exploration",
    "Budget planning and timeline discussion",
    "Complimentary sketches (for confirmed orders)",
    "No obligation - just conversation"
  ];

  const serviceTypes = [
    { value: 'bridal', label: 'Bridal Couture', duration: '90 mins' },
    { value: 'children', label: "Children's Collection", duration: '60 mins' },
    { value: 'custom', label: 'Custom Design', duration: '90 mins' },
    { value: 'embroidery', label: 'Embroidery & Embellishments', duration: '45 mins' },
    { value: 'alteration', label: 'Alterations & Restyling', duration: '45 mins' },
    { value: 'occasion', label: 'Occasion Wear', duration: '60 mins' }
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,00,000',
    '₹2,00,000 - ₹5,00,000',
    '₹5,00,000+',
    'Flexible/To be discussed'
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
              Book a Consultation
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Begin Your Bespoke Journey with a Private Design Session
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">What to Expect</span>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Your Consultation Includes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white border border-gray-100 shadow-lg"
              >
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-sm font-light text-gray-700 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-green-600" strokeWidth={2} />
              </div>
              
              <h2 className="text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Consultation Requested!
              </h2>
              
              <p className="text-lg font-light text-gray-600 mb-4">
                Thank you, {formData.name}. We've received your consultation request.
              </p>
              
              <p className="text-base font-light text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team will review your details and contact you within 24 hours to confirm your appointment on {formData.preferredDate} at {formData.preferredTime}.
              </p>
              
              <div className="p-8 bg-amber-50 border border-amber-100 inline-block text-left">
                <h3 className="text-sm tracking-[0.3em] uppercase text-gray-900 mb-4 font-light">What's Next?</h3>
                <ul className="space-y-3 text-sm font-light text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">1.</span>
                    <span>Check your email for confirmation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">2.</span>
                    <span>Prepare any reference images or inspirations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600">3.</span>
                    <span>Visit our atelier at your scheduled time</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <span className="text-xs tracking-[0.4em] uppercase text-gray-500 font-light">Schedule Appointment</span>
                <div className="w-20 h-px bg-gray-900 mx-auto mt-4 mb-8"></div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Tell Us About Your Vision
                </h2>
                <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below and we'll schedule a personalized consultation at our atelier
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-light text-gray-900 tracking-wide border-b border-gray-200 pb-3">
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-14 pr-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-14 pr-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-14 pr-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-light text-gray-900 tracking-wide border-b border-gray-200 pb-3">
                    Appointment Details
                  </h3>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                      Service Interest *
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full pl-14 pr-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900 bg-white appearance-none"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map(service => (
                          <option key={service.value} value={service.value}>
                            {service.label} ({service.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-14 pr-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                          className="w-full pl-14 pr-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900 bg-white appearance-none"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-light text-gray-900 tracking-wide border-b border-gray-200 pb-3">
                    Project Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="occasion" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                        Occasion
                      </label>
                      <input
                        type="text"
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900"
                        placeholder="Wedding, Festival, Party, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900 bg-white"
                      >
                        <option value="">Select range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-light text-gray-700 mb-3 tracking-wider">
                      Tell Us About Your Vision
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={6}
                        className="w-full pl-14 pr-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light text-gray-900 resize-none"
                        placeholder="Describe your design vision, color preferences, style inspirations, or any specific requirements..."
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="referenceImages"
                      name="referenceImages"
                      checked={formData.referenceImages}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <label htmlFor="referenceImages" className="text-sm font-light text-gray-700">
                      I have reference images or inspiration that I'd like to share during the consultation
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-8 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full px-14 py-6 bg-gray-900 text-white text-sm font-light tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Submitting Request...' : 'Request Consultation'}
                  </button>
                  
                  <p className="text-xs font-light text-gray-500 text-center mt-6">
                    By submitting, you agree to our consultation policy. We'll confirm your appointment within 24 hours.
                  </p>
                </div>
              </motion.form>
            </>
          )}
        </div>
      </section>

      {/* Additional Info */}
      {formStatus !== 'success' && (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-light text-gray-900 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Questions About Booking?
              </h3>
              <p className="text-base font-light text-gray-600 mb-8 leading-relaxed">
                Feel free to call us directly at <a href="tel:+919876543210" className="text-amber-600 hover:text-amber-700">+91 98765 43210</a> or email <a href="mailto:hello@adhyastudio.com" className="text-amber-600 hover:text-amber-700">hello@adhyastudio.com</a>
              </p>
              <p className="text-sm font-light text-gray-500">
                Monday - Saturday: 10 AM - 7 PM | Sunday: By Appointment Only
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

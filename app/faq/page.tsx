'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you provide ready-made outfits?",
      answer: "No, we specialize in custom-designed wear only. Every piece is made specifically for you based on your measurements, preferences, and design discussion."
    },
    {
      question: "How early should I book?",
      answer: "We recommend booking minimum 2–4 weeks in advance depending on design complexity. For bridal and heavily embroidered outfits, 6-8 weeks is ideal."
    },
    {
      question: "Do you design for boys or men?",
      answer: "No, we exclusively design for women and children. Our expertise lies in creating elegant designs for ladies and little ones."
    },
    {
      question: "Do you offer matching mother–daughter outfits?",
      answer: "Yes! This is one of our signature services. We create beautiful matching and coordinated outfits for mothers and daughters for weddings, functions, and special occasions."
    },
    {
      question: "What is included in the design discussion?",
      answer: "The design discussion covers occasion details, fabric and color selection, budget planning, design concepts, embroidery preferences, and delivery timeline. It's a comprehensive consultation to understand your vision."
    },
    {
      question: "Can I bring my own fabric?",
      answer: "Yes, you can bring your own fabric. However, we also provide premium fabric options and can guide you in selecting the best material for your design."
    },
    {
      question: "Do you do alterations on existing outfits?",
      answer: "We primarily focus on creating new custom designs. However, we may consider alterations depending on our schedule. Please contact us to discuss."
    },
    {
      question: "What is your payment structure?",
      answer: "Payment terms are discussed during the design consultation. Typically, we require an advance payment to begin work, with the balance due upon completion."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 mb-8">Frequently Asked Questions</h1>
            <p className="body-text">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto container-padding">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-light text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="body-text text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-6">Still Have Questions?</h2>
            <p className="body-text mb-8">
              We&apos;re here to help. Get in touch with us for personalized assistance.
            </p>
            <a
              href="/contact"
              className="px-12 py-4.5 bg-black text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors inline-block"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

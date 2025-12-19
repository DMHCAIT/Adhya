'use client';

import { motion } from 'framer-motion';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The design, fitting, and finishing were outstanding. Truly premium work."
    },
    {
      name: "Anjali Reddy",
      text: "My daughter and I loved our matching outfits. Highly recommended!"
    },
    {
      name: "Meera Patel",
      text: "Beautiful handwork and attention to detail. Worth every penny."
    },
    {
      name: "Kavita Desai",
      text: "They understood exactly what I wanted. The consultation was so helpful!"
    },
    {
      name: "Sneha Kumar",
      text: "Elegant designs with perfect fit. Will definitely come back for more."
    },
    {
      name: "Divya Iyer",
      text: "Exceptional quality and service. The embroidery work is simply stunning."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 mb-8">Client Experiences</h1>
            <p className="body-text">
              Hear what our clients have to say about their experience with ADHYA Designer Studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <p className="body-text italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-light text-sm">— {testimonial.name}</p>
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
            <h2 className="heading-2 mb-6">Ready to Create Your Story?</h2>
            <p className="body-text mb-8">
              Join our satisfied clients and experience the ADHYA difference.
            </p>
            <a
              href="/book-discussion"
              className="px-12 py-4.5 bg-black text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors inline-block"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

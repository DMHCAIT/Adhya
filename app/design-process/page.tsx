'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Palette, Ruler, Scissors, CheckCircle } from 'lucide-react';

export default function DesignProcessPage() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Design Discussion",
      description: "Understand your occasion, taste, budget & ideas."
    },
    {
      icon: Palette,
      title: "Concept & Fabric Selection",
      description: "Color palette, fabric, embroidery & design planning."
    },
    {
      icon: Ruler,
      title: "Measurements & Customization",
      description: "Perfect fit for women and children."
    },
    {
      icon: Scissors,
      title: "Stitching & Handcrafting",
      description: "Precision tailoring with handcrafted detailing."
    },
    {
      icon: CheckCircle,
      title: "Final Fitting & Delivery",
      description: "Flawless finishing, ready to wear."
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
            <h1 className="heading-1 mb-8">Our Design Process</h1>
            <p className="body-text">
              From concept to creation, every step is thoughtfully executed to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-3">
                    Step {index + 1} – {step.title}
                  </h3>
                  <p className="body-text">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Begin?</h2>
            <p className="body-text text-gray-300 mb-8">
              Schedule your design discussion and let&apos;s create something beautiful together.
            </p>
            <a
              href="/book-discussion"
              className="px-12 py-4.5 bg-white text-black text-sm font-light tracking-wide hover:bg-gray-100 transition-colors inline-block"
            >
              Book Discussion
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

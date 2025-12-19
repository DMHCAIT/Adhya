'use client';

import { useState, useEffect } from 'react';
import { Calendar, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyConsultationBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl backdrop-blur-md"
          style={{ backgroundColor: 'rgba(28, 28, 28, 0.95)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left Content */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(200, 169, 106, 0.1)' }}>
                  <Sparkles className="w-6 h-6" style={{ color: '#C8A96A' }} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-light tracking-wide text-white mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Ready to Begin Your Design Journey?
                  </h3>
                  <p className="text-xs text-gray-400 font-light">
                    Book a private consultation with our design experts
                  </p>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <Link
                  href="/book-discussion"
                  className="group flex items-center gap-2 px-8 py-3 text-sm font-light tracking-wider uppercase transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </Link>
                
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

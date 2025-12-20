'use client';

import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Replace with your actual WhatsApp number (format: country code + number, no spaces/special chars)
  const phoneNumber = '919876543210'; // Example: Indian number
  const message = encodeURIComponent('Hello ADHYA! I\'d like to book a design discussion for my upcoming event.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Floating WhatsApp Button - Hidden on mobile since it's in bottom nav */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        className="hidden md:block fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="relative w-7 h-7 sm:w-8 sm:h-8 text-white" />

          {/* Tooltip */}
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white shadow-xl px-4 py-3 rounded-lg border border-gray-100"
            >
              <div className="text-sm font-medium text-[#1C1C1C] mb-1">
                Book Design Discussion
              </div>
              <div className="text-xs font-light text-gray-600">
                Chat on WhatsApp
              </div>
              {/* Arrow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
              </div>
            </motion.div>
          )}
        </a>
      </motion.div>
    </>
  );
}

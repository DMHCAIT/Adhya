'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Cart from './Cart';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop by Occasion', path: '/by-occasion' },
    { name: 'Collections', path: '/collections' },
    { name: 'Embroidery Services', path: '/embroidery-services' },
    { name: 'Design Journey', path: '/design-journey' },
    { name: 'Client Stories', path: '/client-stories' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#C8A96A]/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-16 md:w-40 md:h-20">
              <Image
                src="/logo.jpg"
                alt="ADHYA Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm font-light tracking-wide text-[#5E5E5E] hover:text-[#C8A96A] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#5E5E5E] hover:text-[#C8A96A] transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C8A96A] text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <Link
              href="/book-discussion"
              className="px-8 py-3 bg-[#C8A96A] text-white text-sm font-light tracking-widest hover:bg-[#1C1C1C] transition-all shadow-md hover:shadow-lg"
            >
              BOOK CONSULTATION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#1C1C1C]"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C8A96A] text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1C1C1C]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden pb-6 border-t border-[#C8A96A]/20 mt-2 pt-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-light tracking-wide text-[#5E5E5E] hover:text-[#C8A96A] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book-discussion"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-[#C8A96A] text-white text-sm font-light tracking-widest hover:bg-[#1C1C1C] transition-all text-center shadow-md"
              >
                BOOK CONSULTATION
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
      
      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

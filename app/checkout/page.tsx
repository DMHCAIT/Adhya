'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Smartphone, Building2, Check, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { cart, getCartTotal, getCartCount, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking' | ''>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = getCartTotal();
  const gst = subtotal * 0.05; // 5% GST
  const shipping = subtotal > 50000 ? 0 : 500;
  const total = subtotal + gst + shipping;

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-light text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We'll contact you shortly to confirm details and schedule fittings.
          </p>
          <div className="space-y-3">
            <Link
              href="/collections"
              className="block w-full py-3 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
            >
              CONTINUE SHOPPING
            </Link>
            <Link
              href="/"
              className="block w-full py-3 border border-gray-300 text-gray-600 hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors text-sm tracking-wider"
            >
              BACK TO HOME
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center p-4">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" strokeWidth={1} />
          <h1 className="text-3xl font-light text-[#1C1C1C] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-6">Add some beautiful designs to get started</p>
          <Link
            href="/collections"
            className="inline-block px-6 py-3 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider"
          >
            EXPLORE COLLECTIONS
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#C8A96A] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shopping
          </Link>
          <h1 className="text-4xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Checkout
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Phone *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shipping Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Address Line 1 *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                    placeholder="Street address"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Address Line 2</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">City *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">State *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">PIN Code *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#C8A96A] focus:outline-none transition-colors"
                      placeholder="000000"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Payment Method
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center gap-4 p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#C8A96A] bg-[#C8A96A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'card' ? 'border-[#C8A96A]' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-[#C8A96A]" />}
                  </div>
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <span className="font-light text-[#1C1C1C]">Credit/Debit Card</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full flex items-center gap-4 p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-[#C8A96A] bg-[#C8A96A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'upi' ? 'border-[#C8A96A]' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'upi' && <div className="w-3 h-3 rounded-full bg-[#C8A96A]" />}
                  </div>
                  <Smartphone className="w-5 h-5 text-gray-600" />
                  <span className="font-light text-[#1C1C1C]">UPI (Google Pay, PhonePe, Paytm)</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`w-full flex items-center gap-4 p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'border-[#C8A96A] bg-[#C8A96A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'netbanking' ? 'border-[#C8A96A]' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'netbanking' && <div className="w-3 h-3 rounded-full bg-[#C8A96A]" />}
                  </div>
                  <Building2 className="w-5 h-5 text-gray-600" />
                  <span className="font-light text-[#1C1C1C]">Net Banking</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6 sticky top-4"
            >
              <h2 className="text-2xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#C8A96A] text-white text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-light text-[#1C1C1C] mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{item.fabric}</p>
                      <p className="text-sm text-[#C8A96A]">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({getCartCount()} items)</span>
                  <span className="text-[#1C1C1C]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST (5%)</span>
                  <span className="text-[#1C1C1C]">{formatPrice(gst)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-[#1C1C1C]">
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600">🎉 Free shipping on orders above ₹50,000</p>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-gray-600">Total</span>
                  <span className="text-3xl font-light text-[#1C1C1C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {formatPrice(total)}
                  </span>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'PROCESSING...' : 'PLACE ORDER'}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By placing your order, you agree to our terms and conditions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

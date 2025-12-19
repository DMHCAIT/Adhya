'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Check, Camera, Upload } from 'lucide-react';

export default function VirtualTryOn() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [step, setStep] = useState<'upload' | 'select' | 'preview'>('upload');

  const designs = [
    { id: 1, name: 'Royal Bridal Lehenga', image: '/Designer Lehengas.png', category: 'Bridal' },
    { id: 2, name: 'Elegant Designer Saree', image: '/Designer Sarees.png', category: 'Saree' },
    { id: 3, name: 'Party Wear Lehenga', image: '/Party & Occasion Wear.png', category: 'Party' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setStep('select');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDesignSelect = (designImage: string) => {
    setSelectedDesign(designImage);
    setStep('preview');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Camera className="w-6 h-6" style={{ color: '#C8A96A' }} />
              <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>Virtual Try-On</span>
              <Camera className="w-6 h-6" style={{ color: '#C8A96A' }} />
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
              See Yourself in Our Designs
            </h1>

            <p className="text-lg md:text-xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Upload your photo and preview our designs digitally on yourself.<br />
              Experience the confidence of seeing before you decide.
            </p>

            {/* Steps Indicator */}
            <div className="flex items-center justify-center gap-8 max-w-2xl mx-auto">
              <div className={`flex items-center gap-3 ${step === 'upload' ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'upload' ? 'border-[#C8A96A] bg-[#C8A96A]' : 'border-white/30'}`}>
                  <span className="text-sm font-light text-white">1</span>
                </div>
                <span className="text-sm font-light text-white">Upload Photo</span>
              </div>

              <div className="w-16 h-px bg-white/30"></div>

              <div className={`flex items-center gap-3 ${step === 'select' ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'select' ? 'border-[#C8A96A] bg-[#C8A96A]' : 'border-white/30'}`}>
                  <span className="text-sm font-light text-white">2</span>
                </div>
                <span className="text-sm font-light text-white">Select Design</span>
              </div>

              <div className="w-16 h-px bg-white/30"></div>

              <div className={`flex items-center gap-3 ${step === 'preview' ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 'preview' ? 'border-[#C8A96A] bg-[#C8A96A]' : 'border-white/30'}`}>
                  <span className="text-sm font-light text-white">3</span>
                </div>
                <span className="text-sm font-light text-white">Preview</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <AnimatePresence mode="wait">
            {/* Step 1: Upload */}
            {step === 'upload' && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                    Upload Your Photo
                  </h2>
                  <p className="text-lg font-light" style={{ color: '#1C1C1C', opacity: 0.7 }}>
                    Choose a front-facing photo for the best results
                  </p>
                </div>

                <label className="block cursor-pointer">
                  <div className="border-2 border-dashed rounded-lg p-16 text-center hover:border-[#C8A96A] transition-colors duration-300" style={{ borderColor: '#C8A96A40' }}>
                    <Upload className="w-16 h-16 mx-auto mb-6" style={{ color: '#C8A96A' }} />
                    <p className="text-lg font-light mb-2" style={{ color: '#1C1C1C' }}>Click to upload or drag and drop</p>
                    <p className="text-sm font-light" style={{ color: '#1C1C1C', opacity: 0.5 }}>JPG, PNG up to 10MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>

                <div className="mt-8 p-6 bg-[#C8A96A]/5 rounded-lg">
                  <h3 className="text-sm font-light mb-4 tracking-wider uppercase" style={{ color: '#C8A96A' }}>Tips for Best Results:</h3>
                  <ul className="space-y-2">
                    {['Use a well-lit photo', 'Stand straight, facing camera', 'Plain background works best', 'Full body or waist-up shot'].map((tip) => (
                      <li key={tip} className="flex items-center gap-3 text-sm font-light" style={{ color: '#1C1C1C' }}>
                        <Check className="w-4 h-4" style={{ color: '#C8A96A' }} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Design */}
            {step === 'select' && (
              <motion.div
                key="select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                    Choose a Design to Try
                  </h2>
                  <p className="text-lg font-light" style={{ color: '#1C1C1C', opacity: 0.7 }}>
                    Select from our signature collection
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {designs.map((design) => (
                    <motion.div
                      key={design.id}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleDesignSelect(design.image)}
                      className="cursor-pointer group"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                        <Image
                          src={design.image}
                          alt={design.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="px-6 py-3 text-sm font-light tracking-wider uppercase" style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}>
                            Try This
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                        {design.name}
                      </h3>
                      <p className="text-sm font-light" style={{ color: '#C8A96A' }}>{design.category}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={() => setStep('upload')}
                    className="text-sm font-light tracking-wider uppercase" style={{ color: '#C8A96A' }}
                  >
                    ← Upload Different Photo
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Preview */}
            {step === 'preview' && uploadedImage && selectedDesign && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                    Your Virtual Try-On
                  </h2>
                  <p className="text-lg font-light" style={{ color: '#1C1C1C', opacity: 0.7 }}>
                    Here's how you'll look in our design
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Original Photo */}
                    <div>
                      <p className="text-sm font-light tracking-wider uppercase mb-4" style={{ color: '#C8A96A' }}>Your Photo</p>
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                        <Image
                          src={uploadedImage}
                          alt="Your photo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Preview (Simulated) */}
                    <div>
                      <p className="text-sm font-light tracking-wider uppercase mb-4" style={{ color: '#C8A96A' }}>With Our Design</p>
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-4" style={{ borderColor: '#C8A96A' }}>
                        <Image
                          src={selectedDesign}
                          alt="Design preview"
                          fill
                          className="object-cover opacity-90"
                        />
                        <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-light" style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}>
                          Preview
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                    <button
                      onClick={() => setStep('select')}
                      className="px-8 py-4 text-sm font-light tracking-wider uppercase border-2 hover:scale-105 transition-transform duration-300"
                      style={{ borderColor: '#C8A96A', color: '#1C1C1C' }}
                    >
                      Try Another Design
                    </button>
                    <Link
                      href="/book-discussion"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-light tracking-wider uppercase hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-4xl mx-auto container-padding text-center">
          <Sparkles className="w-8 h-8 mx-auto mb-6" style={{ color: '#C8A96A' }} />
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready for the Real Experience?
          </h2>
          <p className="text-lg font-light text-white/80 mb-8">
            Book a private consultation to see our designs in person and get perfectly fitted to you
          </p>
          <Link
            href="/book-discussion"
            className="inline-flex items-center gap-3 px-12 py-5 text-sm font-light tracking-[0.3em] uppercase hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}
          >
            Book Your Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

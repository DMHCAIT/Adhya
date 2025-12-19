'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Heart, Award, Palette, Calendar } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
}

export default function AIStyleRecommendation() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What's the occasion you're shopping for?",
      options: ['Wedding/Bridal', 'Festive Celebration', 'Party/Cocktail', 'Traditional Event', 'Casual Elegance']
    },
    {
      id: 2,
      question: 'Which style aesthetic appeals to you most?',
      options: ['Classic Traditional', 'Modern Fusion', 'Royal & Regal', 'Minimalist Chic', 'Bold & Dramatic']
    },
    {
      id: 3,
      question: 'Your preferred color palette?',
      options: ['Rich Jewel Tones', 'Soft Pastels', 'Classic Reds & Golds', 'Earthy Neutrals', 'Bold Brights']
    },
    {
      id: 4,
      question: 'How much embellishment do you prefer?',
      options: ['Heavily Embroidered', 'Moderate Details', 'Subtle Accents', 'Minimal/Clean', 'Statement Borders']
    },
    {
      id: 5,
      question: 'Your comfort priority?',
      options: ['Lightweight & Easy', 'Structured & Grand', 'Balanced Both', 'Don\'t Mind Weight', 'Depends on Occasion']
    }
  ];

  const recommendations = {
    'Royal Bridal': {
      title: 'Royal Bridal Collection',
      description: 'Perfect for your grand celebration with intricate embroidery and luxurious fabrics',
      image: '/Designer Lehengas.png',
      link: '/collections/wedding',
      features: ['Heavy Zardozi Work', 'Premium Silk Fabrics', 'Traditional Craftsmanship', 'Customizable Designs']
    },
    'Modern Elegance': {
      title: 'Contemporary Fusion Wear',
      description: 'Blend of tradition and modernity with clean lines and subtle embellishments',
      image: '/Designer Sarees.png',
      link: '/collections/womens',
      features: ['Modern Silhouettes', 'Subtle Embroidery', 'Versatile Styling', 'Lightweight Fabrics']
    },
    'Festive Celebration': {
      title: 'Festive Collection',
      description: 'Vibrant colors and moderate detailing perfect for celebrations',
      image: '/Party & Occasion Wear.png',
      link: '/by-occasion',
      features: ['Vibrant Colors', 'Balanced Embroidery', 'Comfortable Fit', 'Statement Pieces']
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    // Simple logic based on answers
    if (answers.includes('Wedding/Bridal') || answers.includes('Royal & Regal') || answers.includes('Heavily Embroidered')) {
      return recommendations['Royal Bridal'];
    } else if (answers.includes('Modern Fusion') || answers.includes('Minimalist Chic')) {
      return recommendations['Modern Elegance'];
    } else {
      return recommendations['Festive Celebration'];
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const recommendation = showResults ? getRecommendation() : null;

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
              <Sparkles className="w-6 h-6" style={{ color: '#C8A96A' }} />
              <span className="text-xs tracking-[0.5em] uppercase font-light" style={{ color: '#C8A96A' }}>AI Style Assistant</span>
              <Sparkles className="w-6 h-6" style={{ color: '#C8A96A' }} />
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Your Personal Style Curator
            </h1>

            <p className="text-lg md:text-xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
              Answer a few questions and let our AI recommend the perfect designs tailored to your preferences.<br />
              Think Netflix for couture styles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-light tracking-wider" style={{ color: '#C8A96A' }}>
                      QUESTION {currentQuestion + 1} OF {questions.length}
                    </span>
                    <span className="text-sm font-light" style={{ color: '#1C1C1C', opacity: 0.5 }}>
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: '#C8A96A' }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={option}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-6 text-left border-2 rounded-lg transition-all duration-300 hover:border-[#C8A96A] hover:scale-102 group"
                      style={{ borderColor: '#E5E5E5' }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-light group-hover:text-[#C8A96A] transition-colors" style={{ color: '#1C1C1C' }}>
                          {option}
                        </span>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#C8A96A' }} />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Back Button */}
                {currentQuestion > 0 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => {
                        setCurrentQuestion(currentQuestion - 1);
                        setAnswers(answers.slice(0, -1));
                      }}
                      className="text-sm font-light tracking-wider" style={{ color: '#C8A96A' }}
                    >
                      ← Previous Question
                    </button>
                  </div>
                )}
              </motion.div>
            ) : recommendation && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Results Header */}
                <div className="text-center mb-12">
                  <Sparkles className="w-12 h-12 mx-auto mb-6" style={{ color: '#C8A96A' }} />
                  <h2 className="text-3xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                    Your Perfect Match
                  </h2>
                  <p className="text-lg font-light" style={{ color: '#1C1C1C', opacity: 0.7 }}>
                    Based on your preferences, we recommend:
                  </p>
                </div>

                {/* Recommendation Card */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-square md:aspect-auto">
                      <Image
                        src={recommendation.image}
                        alt={recommendation.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                        {recommendation.title}
                      </h3>
                      <p className="text-lg font-light mb-8" style={{ color: '#1C1C1C', opacity: 0.7 }}>
                        {recommendation.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {recommendation.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C8A96A20' }}>
                              <Heart className="w-3 h-3" style={{ color: '#C8A96A' }} />
                            </div>
                            <span className="text-sm font-light" style={{ color: '#1C1C1C' }}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-4">
                        <Link
                          href={recommendation.link}
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-light tracking-wider uppercase hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: '#C8A96A', color: '#FAF9F7' }}
                        >
                          Explore Collection
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={resetQuiz}
                          className="px-8 py-4 text-sm font-light tracking-wider uppercase border-2 hover:scale-105 transition-transform duration-300"
                          style={{ borderColor: '#C8A96A', color: '#1C1C1C' }}
                        >
                          Retake Quiz
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional CTA */}
                <div className="text-center mt-12 p-8 bg-[#C8A96A]/5 rounded-lg">
                  <Calendar className="w-8 h-8 mx-auto mb-4" style={{ color: '#C8A96A' }} />
                  <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1C1C' }}>
                    Want Personalized Guidance?
                  </h3>
                  <p className="text-lg font-light mb-6" style={{ color: '#1C1C1C', opacity: 0.7 }}>
                    Book a consultation with our design experts for tailored recommendations
                  </p>
                  <Link
                    href="/book-discussion"
                    className="inline-flex items-center gap-3 px-8 py-4 text-sm font-light tracking-wider uppercase hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: '#1C1C1C', color: '#FAF9F7' }}
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

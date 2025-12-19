'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Sparkles, ArrowRight } from 'lucide-react';

type QuizAnswer = {
  question: number;
  answer: string;
};

export default function StyleQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string>('');

  const questions = [
    {
      id: 1,
      question: 'What\'s your upcoming occasion?',
      options: [
        { value: 'wedding', label: 'Wedding (Bride/Family)', emoji: '👰' },
        { value: 'reception', label: 'Reception Party', emoji: '🥂' },
        { value: 'traditional', label: 'Traditional Ceremony', emoji: '🙏' },
        { value: 'party', label: 'Evening Party/Celebration', emoji: '🎉' }
      ]
    },
    {
      id: 2,
      question: 'Which color palette speaks to you?',
      options: [
        { value: 'classic-reds', label: 'Classic Reds & Maroons', color: '#8B0000', emoji: '❤️' },
        { value: 'pastels', label: 'Soft Pastels', color: '#FFB6C1', emoji: '🌸' },
        { value: 'jewel', label: 'Jewel Tones (Emerald, Sapphire)', color: '#50C878', emoji: '💎' },
        { value: 'neutrals', label: 'Elegant Neutrals (Beige, Gold)', color: '#D4AF37', emoji: '✨' }
      ]
    },
    {
      id: 3,
      question: 'How do you prefer your embroidery?',
      options: [
        { value: 'heavy', label: 'Heavy & Intricate', desc: 'Full coverage, maximum sparkle', emoji: '✨✨✨' },
        { value: 'medium', label: 'Balanced & Elegant', desc: 'Beautiful but not overwhelming', emoji: '✨✨' },
        { value: 'minimal', label: 'Minimal & Sophisticated', desc: 'Simple with strategic placement', emoji: '✨' },
        { value: 'contemporary', label: 'Contemporary Fusion', desc: 'Modern patterns, unique style', emoji: '🎨' }
      ]
    },
    {
      id: 4,
      question: 'What\'s your comfort priority?',
      options: [
        { value: 'lightweight', label: 'Lightweight & Breathable', desc: 'Easy to carry all day', emoji: '🍃' },
        { value: 'structured', label: 'Structured & Elegant', desc: 'Classic silhouette', emoji: '👗' },
        { value: 'flowy', label: 'Flowy & Graceful', desc: 'Beautiful movement', emoji: '💃' },
        { value: 'regal', label: 'Regal & Impressive', desc: 'Grand presence', emoji: '👑' }
      ]
    },
    {
      id: 5,
      question: 'What\'s your style inspiration?',
      options: [
        { value: 'traditional', label: 'Traditional Heritage', desc: 'Timeless, cultural roots', emoji: '🏛️' },
        { value: 'modern', label: 'Modern Contemporary', desc: 'Sleek, current trends', emoji: '🌟' },
        { value: 'fusion', label: 'Indo-Western Fusion', desc: 'Best of both worlds', emoji: '🌏' },
        { value: 'vintage', label: 'Vintage Royalty', desc: 'Old-world charm', emoji: '👑' }
      ]
    },
    {
      id: 6,
      question: 'Budget range for your dream outfit?',
      options: [
        { value: 'under50k', label: 'Under ₹50,000', desc: 'Premium quality', emoji: '💰' },
        { value: '50k-1L', label: '₹50,000 - ₹1,00,000', desc: 'Designer collection', emoji: '💰💰' },
        { value: '1L-2L', label: '₹1,00,000 - ₹2,00,000', desc: 'Luxury bridal', emoji: '💰💰💰' },
        { value: 'above2L', label: 'Above ₹2,00,000', desc: 'Bespoke couture', emoji: '💎' }
      ]
    }
  ];

  const styleResults = {
    'traditional-bride': {
      title: 'Traditional Heritage Bride',
      description: 'You appreciate timeless elegance and cultural richness. Heavy embroidery, classic colors, and traditional silhouettes speak to your soul.',
      recommendations: [
        'Banarasi silk lehengas with traditional zari work',
        'Classic red or maroon bridal sarees',
        'Heavy dabka and stone embroidery',
        'Traditional temple jewelry style'
      ],
      collections: ['Designer Lehengas', 'Designer Sarees', 'Wedding Collection'],
      image: '/Designer Lehengas.png'
    },
    'modern-minimalist': {
      title: 'Modern Minimalist',
      description: 'You love clean lines, subtle elegance, and contemporary aesthetics. Less is more, but every detail matters.',
      recommendations: [
        'Georgette sarees with minimal border work',
        'Contemporary cut lehengas with strategic embroidery',
        'Pastel and neutral color palettes',
        'Delicate, modern jewelry'
      ],
      collections: ['Party & Occasion Wear', 'Designer Sarees'],
      image: '/Designer Sarees.png'
    },
    'regal-royalty': {
      title: 'Regal Royalty',
      description: 'You\'re not afraid to make a grand entrance. Heavy fabrics, intricate work, and maximum glamour define your style.',
      recommendations: [
        'Velvet lehengas with full embroidery coverage',
        'Heavy stone and zardozi work',
        'Rich jewel tones and classic reds',
        'Statement pieces with royal silhouettes'
      ],
      collections: ['Designer Lehengas', 'Wedding Collection'],
      image: '/Designer Lehengas.png'
    },
    'contemporary-chic': {
      title: 'Contemporary Chic',
      description: 'You blend tradition with modernity effortlessly. Unique patterns, fusion styles, and current trends inspire you.',
      recommendations: [
        'Indo-western fusion outfits',
        'Contemporary embroidery patterns',
        'Trendy color combinations',
        'Modern silhouettes with traditional elements'
      ],
      collections: ['Party & Occasion Wear', 'Designer Sarees'],
      image: '/Party & Occasion Wear.png'
    },
    'elegant-grace': {
      title: 'Elegant Grace',
      description: 'You value sophistication and balanced beauty. Medium embroidery, flowing fabrics, and graceful silhouettes suit you perfectly.',
      recommendations: [
        'Silk or georgette sarees with elegant borders',
        'Balanced embroidery lehengas',
        'Soft pastels or jewel tones',
        'Graceful, comfortable silhouettes'
      ],
      collections: ['Designer Sarees', 'Party & Occasion Wear'],
      image: '/Designer Sarees.png'
    }
  };

  const calculateResult = () => {
    const answerMap = answers.reduce((acc, curr) => {
      acc[curr.question] = curr.answer;
      return acc;
    }, {} as Record<number, string>);

    // Simple logic to determine style
    const embroidery = answerMap[3];
    const comfort = answerMap[4];
    const inspiration = answerMap[5];

    if (inspiration === 'traditional' && embroidery === 'heavy') {
      return 'traditional-bride';
    } else if (embroidery === 'minimal' && inspiration === 'modern') {
      return 'modern-minimalist';
    } else if (embroidery === 'heavy' && comfort === 'regal') {
      return 'regal-royalty';
    } else if (inspiration === 'fusion' || embroidery === 'contemporary') {
      return 'contemporary-chic';
    } else {
      return 'elegant-grace';
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers.filter(a => a.question !== currentQuestion), { question: currentQuestion, answer: value }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      const styleResult = calculateResult();
      setResult(styleResult);
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult('');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F7] via-white to-[#FAF9F7]">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C8A96A]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#C8A96A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[#C8A96A]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-[#1C1C1C] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Find Your Perfect Style
            </h1>
            <p className="text-lg font-light text-gray-600">
              Answer 6 simple questions to discover your design aesthetic
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz or Result */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-light text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                    <span className="text-sm font-light text-gray-600">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#C8A96A] to-[#D4AF37]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-12 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={option.value}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleAnswer(option.value)}
                          className="group relative p-6 bg-white border-2 border-gray-200 hover:border-[#C8A96A] transition-all text-left overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96A]/0 to-[#C8A96A]/0 group-hover:from-[#C8A96A]/5 group-hover:to-[#C8A96A]/10 transition-all"></div>
                          <div className="relative z-10">
                            <div className="text-3xl mb-3">{option.emoji}</div>
                            <h3 className="text-lg font-medium text-[#1C1C1C] mb-1 group-hover:text-[#C8A96A] transition-colors">
                              {option.label}
                            </h3>
                            {'desc' in option && option.desc && (
                              <p className="text-sm font-light text-gray-600">{option.desc}</p>
                            )}
                            {'color' in option && option.color && (
                              <div className="mt-3 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: option.color }}></div>
                                <span className="text-xs text-gray-500">Color preview</span>
                              </div>
                            )}
                          </div>
                          <ChevronRight className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-[#C8A96A] group-hover:translate-x-1 transition-all" />
                        </motion.button>
                      ))}
                    </div>

                    {/* Back Button */}
                    {currentQuestion > 0 && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={goBack}
                        className="mt-8 flex items-center gap-2 text-gray-600 hover:text-[#C8A96A] transition-colors mx-auto"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-sm">Previous Question</span>
                      </motion.button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {result && styleResults[result as keyof typeof styleResults] && (
                  <div className="bg-white shadow-2xl overflow-hidden">
                    {/* Result Image */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={styleResults[result as keyof typeof styleResults].image}
                        alt="Your Style"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h2 className="text-4xl md:text-5xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          {styleResults[result as keyof typeof styleResults].title}
                        </h2>
                      </div>
                    </div>

                    {/* Result Content */}
                    <div className="p-8 md:p-12">
                      <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
                        {styleResults[result as keyof typeof styleResults].description}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-2xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          Perfect For You
                        </h3>
                        <ul className="space-y-3">
                          {styleResults[result as keyof typeof styleResults].recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] mt-2 flex-shrink-0"></div>
                              <span className="text-base font-light text-gray-600">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-2xl font-light text-[#1C1C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                          Recommended Collections
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {styleResults[result as keyof typeof styleResults].collections.map((collection) => (
                            <span key={collection} className="px-4 py-2 bg-[#C8A96A]/10 text-[#C8A96A] text-sm">
                              {collection}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="/book-discussion"
                          className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1C1C] text-white hover:bg-[#C8A96A] transition-colors text-sm tracking-wider group"
                        >
                          BOOK CONSULTATION
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button
                          onClick={resetQuiz}
                          className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors text-sm tracking-wider"
                        >
                          RETAKE QUIZ
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

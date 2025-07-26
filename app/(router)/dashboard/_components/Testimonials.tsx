'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Emma Johnson',
    role: 'CEO, TechNova',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'This platform revolutionized our workflow. The intuitive design and powerful features helped us increase productivity by 200%.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The best investment we made this year. Customer support is exceptional and the platform scales beautifully.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'From onboarding to daily use, every interaction is seamless. Our team adopted it instantly with zero learning curve.',
    rating: 4
  },
];

export default function AutoRotatingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left'|'right'>('right');
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Auto-rotation logic
  const startRotation = () => {
    intervalRef.current = setInterval(() => {
      setDirection('right');
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000); // Rotate every 5 seconds
  };

  // Clean up interval
  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Initialize and clean up
  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, []);

  // Pause on hover
  useEffect(() => {
    if (isHovered) {
      stopRotation();
    } else {
      startRotation();
    }
  }, [isHovered]);

  const navigate = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setCurrentIndex(newIndex);
    resetTimer(); // Reset timer on manual navigation
  };

  const next = () => navigate((currentIndex + 1) % testimonials.length);
  const prev = () => navigate((currentIndex - 1 + testimonials.length) % testimonials.length);

  const resetTimer = () => {
    stopRotation();
    startRotation();
  };

  // Animation variants
  const variants = {
    enter: (direction: string) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section className="relative pt-8 pb-20 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-indigo-50 blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Trusted by Innovators
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers transforming their businesses
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-indigo-500">
                  <FaQuoteLeft className="text-3xl opacity-30" />
                </div>

                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-amber-400' : 'text-gray-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 max-w-3xl">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-indigo-600 w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Carousel images (replace with your actual image paths)
const carouselImages = [
  '/assets/carousel-1.jpg',
  '/assets/carousel-2.jpg',
  '/assets/carousel-3.jpg',
];

const HomeHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 lg:pt-35 px-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforming{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Ideas</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute bottom-2 left-0 h-3 bg-blue-400/30 z-0"
                />
              </span>{' '}
              Into Reality
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              We deliver innovative solutions tailored to your business needs with
              cutting-edge technology and creative expertise.
            </p>

            <ul className="space-y-3">
              {[
                'Industry-leading expertise',
                'Customized solutions',
                'Proven track record',
                '24/7 dedicated support',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <svg
                    className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-base md:text-lg">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button className="relative group inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Target With Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="absolute right-0 w-8 h-8 -mr-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-20 transition-all duration-300">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Carousel Images */}
            {carouselImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  scale: index === currentImageIndex ? 1 : 1.05,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
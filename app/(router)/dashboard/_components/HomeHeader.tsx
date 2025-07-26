'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HomeHeader = () => {
  const carouselImages = [
    '/assets/services.jpg',
    '/assets/carousel-1.jpg',
    '/assets/carousel-2.jpg',
    '/assets/carousel-3.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="relative w-full bg-gradient-to-r from-gray-900 to-blue-950 overflow-hidden">
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-20">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We deliver innovative solutions tailored to your business needs with
              cutting-edge technology and creative expertise.
            </p>

            <ul className="space-y-3 md:space-y-4">
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
                    className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0"
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
                  <span className="text-gray-200 text-base md:text-lg">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-2 md:pt-4"
            >
              <button className="relative group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Start With Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
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

          {/* Right: Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] relative rounded-xl overflow-hidden shadow-2xl"
          >
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: { duration: 0.8 }
                }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={image}
                  alt={`Business solution ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                {/* Overlay to match the gradient theme */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-blue-900/20"></div>
              </motion.div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-400 w-6' : 'bg-white/50 hover:bg-white/70'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
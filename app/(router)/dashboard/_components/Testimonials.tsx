'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'CEO, TechNova',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'QUOTE NXT exceeded our expectations! Their dedication and technical expertise helped us transform our business digitally.',
    rating: 5,
    highlightColor: '#6366f1'
  },
  {
    name: 'Ravi Patel',
    role: 'Head of Marketing, BrightEdge',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Working with QUOTE NXT was a game-changer. Their team delivered creative solutions with impressive speed and quality.',
    rating: 4,
    highlightColor: '#10b981'
  },
  {
    name: 'Jessica Lee',
    role: 'Founder, EduSpark',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'The professionalism and support from QUOTE NXT have been outstanding. We highly recommend their services to anyone looking for digital transformation.',
    rating: 5,
    highlightColor: '#f59e0b'
  },
  {
    name: 'Samuel Kim',
    role: 'CTO, FinNext',
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    quote: 'Their consulting and technical skills are top-notch. QUOTE NXT truly cares about client success and delivers on their promises.',
    rating: 5,
    highlightColor: '#3b82f6'
  },
];

const TestimonialCard = ({ testimonial, active, direction }: { testimonial: typeof testimonials[0], active: boolean, direction: number }) => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [0.9, 1, 0.9]);
  const opacity = useTransform(x, [-200, 0, 200], [0.7, 1, 0.7]);
  const rotateY = useTransform(x, [-200, 0, 200], [10, 0, -10]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, scale, opacity, rotateY }}
      whileHover={{ scale: 1.02 }}
      className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-lg ${active ? 'z-10' : 'z-0'} bg-white`}
      initial={{ x: direction > 0 ? 500 : -500, opacity: 0.5, scale: 0.95 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        scale: 1,
        transition: { 
          type: 'spring', 
          stiffness: 200,
          damping: 25,
          mass: 0.5,
          velocity: 0.5
        } 
      }}
      exit={{ 
        x: direction > 0 ? -500 : 500, 
        opacity: 0.5,
        scale: 0.95,
        transition: { 
          type: 'spring',
          stiffness: 200,
          damping: 25,
          mass: 0.5
        }
      }}
    >
      <div 
        className="absolute inset-0 rounded-3xl opacity-10"
        style={{ 
          background: `linear-gradient(135deg, ${testimonial.highlightColor} 0%, #ffffff 100%)`
        }}
      />
      <div className="relative z-10">
        <motion.div 
          className="flex items-center justify-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              className={`w-5 h-5 sm:w-6 sm:h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05, type: 'spring' }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FaQuoteLeft className="text-xl sm:text-2xl mb-3 sm:mb-4" style={{ color: testimonial.highlightColor }} />
        </motion.div>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl font-medium text-center mb-6 sm:mb-8 text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {testimonial.quote}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FaQuoteRight className="text-xl sm:text-2xl ml-auto" style={{ color: testimonial.highlightColor }} />
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <div className="relative">
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-md object-cover"
              style={{ borderColor: `${testimonial.highlightColor}40` }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
            />
          </div>
          <div className="ml-3 sm:ml-4 text-left">
            <h4 className="text-sm sm:text-lg font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function TestimonialShowcase() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const navigate = (newDirection: number) => {
    setIndex(prev => {
      const newIndex = (prev[0] + newDirection + testimonials.length) % testimonials.length;
      return [newIndex, newDirection];
    });
  };

  const nextTestimonial = () => navigate(1);
  const prevTestimonial = () => navigate(-1);

  const goToTestimonial = (i: number) => {
    setIndex([i, i > index ? 1 : -1]);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setTimeout(nextTestimonial, 6000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, isHovered]);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700 mb-4 sm:mb-6">
            Voices of Success
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how QUOTE NXT is revolutionizing businesses across the globe
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main testimonial carousel */}
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              <TestimonialCard 
                key={index}
                testimonial={testimonials[index]} 
                active={true}
                direction={direction}
              />
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center mt-8 sm:mt-12 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 sm:p-3 rounded-full bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <FiChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goToTestimonial(i)}
                  className={`h-3 rounded-full ${index === i ? 'bg-indigo-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  whileHover={{ scale: 1.2 }}
                  animate={{ 
                    width: index === i ? 24 : 12,
                    backgroundColor: index === i ? '#4f46e5' : '#e5e7eb'
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="p-2 sm:p-3 rounded-full bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <FiChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Floating testimonials in background - Desktop only */}
        <div className="hidden lg:block">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: index === i ? 0.5 : 0.1,
                y: 0,
                scale: index === i ? 1 : 0.8
              }}
              transition={{ duration: 0.5, type: 'spring' }}
              className={`absolute ${i === 0 ? 'left-10 top-1/4' : ''} ${i === 1 ? 'right-20 top-1/3' : ''} ${i === 2 ? 'left-32 bottom-1/4' : ''} ${i === 3 ? 'right-40 bottom-1/3' : ''} w-40 p-4 rounded-lg shadow-md bg-white bg-opacity-70 backdrop-blur-sm border border-gray-100`}
            >
              <p className="text-xs italic text-gray-700 line-clamp-3">"{testimonial.quote}"</p>
              <p className="text-xs font-semibold text-gray-800 mt-2">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated decorative elements */}
      <motion.div 
        animate={{
          rotate: 360,
          transition: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -left-40 -bottom-40 w-64 sm:w-80 h-64 sm:h-80 rounded-full opacity-5"
        style={{ background: 'conic-gradient(from 0deg, #6366f1, #3b82f6, #10b981, #f59e0b, #6366f1)' }}
      />
      <motion.div 
        animate={{
          rotate: -360,
          transition: { duration: 45, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -right-20 -top-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full opacity-5"
        style={{ background: 'conic-gradient(from 180deg, #3b82f6, #10b981, #f59e0b, #6366f1, #3b82f6)' }}
      />
    </section>
  );
}
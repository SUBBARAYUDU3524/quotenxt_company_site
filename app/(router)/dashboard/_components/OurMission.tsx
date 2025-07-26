'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import mission from "../../../../public/assets/mission.jpg";
import logo from "../../../../public/assets/logo.jpg"

const TABS = [
  { key: 'mission', label: 'Our Mission' },
  { key: 'vision', label: 'Our Vision' },
  { key: 'history', label: 'Our History' },
] as const;

const content = {
  mission: {
    title: 'Our Mission',
    text: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional value through cutting-edge digital transformation services tailored to each client\'s unique needs.',
    highlights: [
      'Deliver transformative technology solutions',
      'Foster long-term client partnerships',
      'Drive measurable business outcomes',
    ],
  },
  vision: {
    title: 'Our Vision',
    text: 'To be the most trusted global partner for digital innovation, recognized for our technical excellence and unwavering commitment to client success. We envision a future where technology seamlessly enhances every aspect of business operations.',
    highlights: [
      'Global leader in digital innovation',
      'Pioneer of emerging technologies',
      'Standard-bearer for ethical tech practices',
    ],
  },
  history: {
    title: 'Our History',
    text: "Founded in 2015, we started as a small team of passionate technologists. Through dedication and client-focused innovation, we've grown into an award-winning firm serving Fortune 500 companies and startups alike, while maintaining our commitment to quality and personal service.",
    highlights: [
      'Established in 2015',
      '100+ successful projects delivered',
      'Recognized industry excellence',
    ],
  },
};

export default function OurMission() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'history'>('mission');

  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Two Column Section */}
        <div className="bg-gradient-to-r from-[#003B8B] to-[#6DBE45] p-20 rounded-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: 'spring' }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Logo Image Replacement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative w-full max-w-xs mx-auto md:max-w-sm"
              >
                <Image
                  src={logo}
                  alt="QUOTENXT Logo"
                  width={300} // Adjust based on your logo dimensions
                  height={100} // Adjust based on your logo dimensions
                  className="object-contain w-full h-auto"
                  priority
                />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-white text-center tracking-wide">
                BEST SOLUTIONS
              </h3>
              <p className="text-lg text-blue-100 text-center">
                We combine strategic thinking with technical excellence to deliver solutions that propel your business forward.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: 'spring' }}
              viewport={{ once: true }}
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src={mission}
                alt="Our Mission"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/50 via-transparent to-blue-500/50 pointer-events-none" />
            </motion.div>
          </div>

          {/* Tabbed Content Section */}
          <div className="max-w-4xl mx-auto">
            {/* Tab Buttons */}
            <nav className="flex flex-wrap gap-3 mb-10 justify-center">
              {TABS.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(59,130,246,0.12)' }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-7 py-3 rounded-full font-semibold text-base transition-all duration-300 border-2
                    ${
                      activeTab === tab.key
                        ? 'bg-blue-700 text-white border-blue-300 shadow-lg'
                        : 'bg-white text-blue-700 border-white hover:bg-blue-50'
                    }
                  `}
                  aria-selected={activeTab === tab.key}
                >
                  {tab.label}
                </motion.button>
              ))}
            </nav>

            
          {/* Tab Content */}
<div className="bg-white rounded-2xl p-8 border border-blue-100
                shadow-[0_20px_50px_-10px_rgba(0,59,139,0.25)]
                hover:shadow-[0_25px_60px_-10px_rgba(0,59,139,0.35)]
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                transform hover:-translate-y-1
                relative before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none 
                before:bg-gradient-to-br before:from-white/30 before:to-transparent before:opacity-0 
                before:hover:opacity-100 before:transition-opacity before:duration-300">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.35, type: 'spring' }}
    >
      <h3 className="text-2xl font-extrabold text-blue-900 mb-5 tracking-wide">
        {content[activeTab].title}
      </h3>
      <p className="text-gray-700 mb-7 text-base md:text-lg leading-relaxed">{content[activeTab].text}</p>
      <ul className="space-y-4">
        {content[activeTab].highlights.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="flex items-start"
          >
            <div className="flex-shrink-0 mt-1 mr-4">
              <div className="w-3 h-3 bg-blue-600 rounded-full shadow-[0_2px_8px_rgba(0,91,234,0.4)]" />
            </div>
            <span className="text-blue-800 font-medium">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </AnimatePresence>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiPlus, FiMinus, FiChevronRight } from 'react-icons/fi';
import img from "../../../../public/assets/trust.jpg";

const Imagine = () => {
  // Set default open to 0 for the first FAQ open by default
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'WE HELP TO CREATE VISUAL STRATEGIES',
      answer:
        'Our Visual strategies help brands supplementing information which is supplied verbally with visual data. They can help a pupil to understand visually.',
    },
    {
      question: 'SALESFORCE',
      answer:
        'Salesforce.com, Inc. is an innovative cloud computing company that specializes in its CRM product. We provide our identity by supplying experienced professionals and solutions for your business.',
    },
    {
      question: 'DIGITAL MARKETING SERVICES',
      answer:
        'Every business needs to position themselves digitally because they say if you are not online you are nowhere. We help you build your online presence.',
    },
    {
      question: 'CUSTOM SOFTWARE DEVELOPMENT',
      answer:
        'We create tailored software solutions designed specifically for your business needs, ensuring optimal performance and user experience.',
    },
    {
      question: 'END-TO-END CLOUD MIGRATION',
      answer:
        'Seamlessly migrate your existing infrastructure to the cloud with minimal downtime and maximum performance, security, and scalability.',
    },
    
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            YOU IMAGINE <span className="text-blue-600">WE BUILD IT</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We aim to connect brands with customers with our smart solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - FAQ Accordion */}
          <div>
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300
                    ${
                      activeIndex === index
                        ? 'ring-2 ring-blue-500 shadow-lg bg-gradient-to-r from-blue-50 via-white to-blue-50'
                        : 'hover:shadow-md hover:border-blue-300 bg-white'
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex items-center justify-between p-4 text-left focus:outline-none transition-colors duration-200 ${
                      activeIndex === index ? 'bg-blue-50' : 'hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* + Icon always at start */}
                      <span
                        className={`flex items-center justify-center rounded-full border border-blue-200 transition-all duration-200
                          ${
                            activeIndex === index
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                          }
                        `}
                        style={{ width: 32, height: 32 }}
                      >
                        {activeIndex === index ? (
                          <FiMinus className="w-5 h-5" />
                        ) : (
                          <FiPlus className="w-5 h-5" />
                        )}
                      </span>
                      <h3
                        className={`text-lg font-semibold transition-colors duration-200 ${
                          activeIndex === index
                            ? 'text-blue-700'
                            : 'text-gray-900 group-hover:text-blue-700'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    {/* Chevron icon at right */}
                    <span
                      className={`flex items-center justify-center rounded-full transition-all duration-200 ${
                        activeIndex === index
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-700'
                      }`}
                      style={{ width: 32, height: 32 }}
                    >
                      <FiChevronRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeIndex === index ? 'rotate-90' : ''
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.33, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7 pl-14 text-gray-700 text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src={img}
              alt="We build your imagination"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-white/0 to-blue-800/10 pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-md"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Let's Build Your Vision
                </h3>
                <p className="text-gray-600">
                  Our team of experts is ready to transform your ideas into
                  reality with cutting-edge solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Imagine;
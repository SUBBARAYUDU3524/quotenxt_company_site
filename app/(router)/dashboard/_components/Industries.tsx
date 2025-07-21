'use client';

import { motion } from 'framer-motion';
import { 
  FiDollarSign, 
  FiShield, 
  FiShoppingBag, 
  FiBook, 
  FiHeart, 
  FiZap, 
  FiTruck, 
  FiSettings 
} from 'react-icons/fi';

const Industries = () => {
  const industries = [
    { name: 'Banking & Finance', icon: <FiDollarSign className="w-6 h-6" /> },
    { name: 'Insurance', icon: <FiShield className="w-6 h-6" /> },
    { name: 'Retail', icon: <FiShoppingBag className="w-6 h-6" /> },
    { name: 'Education', icon: <FiBook className="w-6 h-6" /> },
    { name: 'Healthcare', icon: <FiHeart className="w-6 h-6" /> },
    { name: 'Energy & Utilities', icon: <FiZap className="w-6 h-6" /> },
    { name: 'Logistics', icon: <FiTruck className="w-6 h-6" /> },
    { name: 'Manufacturing', icon: <FiSettings className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR EXPERTISE IS EXTENDED TO THE FOLLOWING INDUSTRIES
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6" />
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-xl overflow-hidden relative">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {/* Icon with Animation */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300 mx-auto"
                >
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {industry.icon}
                  </div>
                </motion.div>
                
                {/* Industry Name */}
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.name}
                </h3>
                
                {/* Hidden Description (Appears on Hover) */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-sm text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Custom solutions tailored for {industry.name.toLowerCase()} industry needs
                  </p>
                </motion.div>
                
                {/* Animated Underline */}
                <div className="w-0 h-0.5 bg-blue-600 mx-auto mt-4 group-hover:w-10 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
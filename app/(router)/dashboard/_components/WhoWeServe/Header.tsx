"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import whoweserve from "../../../../../public/assets/WhoWeServe.jpg"

const WhoWeServeHeader = () => {
  return (
    <header className="relative bg-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={whoweserve} // Replace with your actual image path
          alt="Our Valued Clients"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
           
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Who We Serve
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
          ></motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
          >
            Empowering diverse industries with tailored technology solutions that drive growth and innovation.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Our Clients
            </button>
          </motion.div>
        </motion.div>

        {/* Industry icons floating animation */}
        <motion.div 
          className="hidden md:flex justify-center space-x-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {['🏦', '🏥', '🛒', '🏭', '✈️', '🎓'].map((icon, index) => (
            <motion.div
              key={index}
              className="text-4xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.3
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>

     
    </header>
  );
};

export default WhoWeServeHeader;
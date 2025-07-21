'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import services from "../../../../../public/assets/services.jpg";

const ServicesHeader = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900/80 to-blue-900/60 overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Transformative <span className="text-blue-400">Services</span> For Your Business Growth
            </h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-blue-400 mb-6"
            />

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              We deliver cutting-edge solutions tailored to propel your business forward in the digital landscape.
              Our comprehensive services are designed to meet your unique challenges and opportunities.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Explore Our Solutions
            </motion.button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={services}
                alt="Our Services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;

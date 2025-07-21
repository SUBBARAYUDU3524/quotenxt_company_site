'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import joinHeroBg from "../../../../../public/assets/team.jpg"

const JoinHero = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden pt-30">
      {/* Full background image with overlay */}
     <div className="absolute inset-0 -z-10">
  <Image
    src={joinHeroBg}
    alt="Join our team background"
    fill
    className="object-cover object-center"
    priority
  />
  <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[1px]" />
</div>

      {/* Content centered perfectly */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Main headline with gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight lg:pt-20">
            <span className="block">Join Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-100">
              Dream Team
            </span>
          </h1>

          {/* Subtext with animated border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative inline-block"
          >
            <p className="text-xl md:text-2xl text-blue-100 mb-10 px-4 py-2 relative">
              Where talent meets opportunity and ideas become reality
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-100"
              />
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              href="#open-positions"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-900 bg-gradient-to-r from-cyan-300 to-blue-100 hover:from-cyan-200 hover:to-blue-50 transition-all duration-300"
            >
              View Open Positions
              <FiArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              href="#how-we-hire"
              className="flex items-center justify-center px-8 py-4 border-2 border-blue-100/50 text-lg font-medium rounded-lg text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              Our Culture
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating particles effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -100],
              x: Math.random() > 0.5 ? [0, Math.random() * 100] : [0, Math.random() * -100],
              scale: [0.5, 1.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute rounded-full bg-blue-100/50"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default JoinHero;
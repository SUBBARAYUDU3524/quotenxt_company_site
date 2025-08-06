"use client";

import { motion, useAnimation, useInView } from 'framer-motion';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { ReactElement, useEffect, useRef } from 'react';
import Healthcare from "../../../../../public/assets/Healthcare.jpg"
import Manufacture from "../../../../../public/assets/Manufacture.jpg"
import BFSI from "../../../../../public/assets/BFSI.jpg"
import Retail from "../../../../../public/assets/Retail.jpg"

interface Industry {
  title: string;
  description: string;
  image: StaticImageData;
  position: 'left' | 'right';
  color: string;
}

const WhoWeServeMain = (): ReactElement => {
  const industries: Industry[] = [
    {
      title: "Healthcare & Life Science",
      description: "We deliver better care to patients along with digital workflows for clinical teams",
      image: Healthcare,
      position: "left",
      color: "from-blue-300 to-cyan-300"
    },
    {
      title: "Manufacturing",
      description: "We get truly connected operations to set a new standard for manufacturing",
      image: Manufacture,
      position: "right",
      color: "from-purple-300 to-indigo-300"
    },
    {
      title: "BFSI",
      description: "We deliver seamless experiences to customers and agents with compliance",
      image: BFSI,
      position: "left",
      color: "from-green-300 to-teal-300"
    },
    {
      title: "Retail",
      description: "We enhance online and in-store customer experience with digitized & automated workflows",
      image: Retail,
      position: "right",
      color: "from-amber-200 to-orange-200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const bottomLineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const IndustryBlock = ({ industry, index }: { industry: Industry; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [isInView, controls]);

    return (
      <div ref={ref} className={`relative mb-16 sm:mb-20 md:mb-28 ${index % 2 === 0 ? '' : 'md:mt-16 lg:mb-15'}`}>
        {/* Vertical line animation - hidden on small screens */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={lineVariants}
          className="absolute hidden md:block top-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          style={{ transform: 'translateX(-50%)' }}
        />
        
        <div className={`flex flex-col ${industry.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 sm:gap-8 md:gap-12 items-center`}>
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className={`w-full md:w-1/2 ${industry.position === 'right' ? 'md:pl-8' : 'md:pr-8'}`}
          >
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`p-6 sm:p-8 rounded-xl bg-gradient-to-br ${industry.color} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{industry.title}</h3>
              <motion.p 
                className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                {industry.description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-1 sm:py-2 bg-white text-gray-800 rounded-lg font-medium shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="w-full md:w-1/2 mt-6 sm:mt-0"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image 
                src={industry.image} 
                alt={industry.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-video md:aspect-[4/3]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom line animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={bottomLineVariants}
          className="absolute -bottom-8 sm:-bottom-10 left-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Industry Solutions | Tailored Digital Transformation</title>
        <meta name="description" content="Custom digital solutions for healthcare, manufacturing, BFSI, and retail industries" />
      </Head>

      <div className="bg-white">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 md:py-24"
        >
          <motion.div 
            variants={containerVariants}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Industry-Specific <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
               Tailored digital transformation for your industry&apos;s unique challenges
            </p>
          </motion.div>

          {industries.map((industry, index) => (
            <IndustryBlock key={index} industry={industry} index={index} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default WhoWeServeMain;
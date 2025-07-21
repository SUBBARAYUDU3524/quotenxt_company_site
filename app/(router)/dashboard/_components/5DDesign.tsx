'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaSearch, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';

const phases = [
  {
    key: 'define',
    title: 'Define',
    desc: 'We understand your goals, challenges, and vision to set a clear direction for your project.',
    icon: <FaBullseye className="text-blue-500 w-7 h-7 mr-3 flex-shrink-0" />,
  },
  {
    key: 'discover',
    title: 'Discover',
    desc: 'We research, brainstorm, and gather insights to uncover opportunities and solutions.',
    icon: <FaSearch className="text-teal-500 w-7 h-7 mr-3 flex-shrink-0" />,
  },
  {
    key: 'design',
    title: 'Design',
    desc: 'We craft beautiful, user-centric designs and map out intuitive user experiences.',
    icon: <FaPencilRuler className="text-violet-500 w-7 h-7 mr-3 flex-shrink-0" />,
  },
  {
    key: 'develop',
    title: 'Develop',
    desc: 'We build robust, scalable solutions using the latest technologies and best practices.',
    icon: <FaCode className="text-blue-700 w-7 h-7 mr-3 flex-shrink-0" />,
  },
  {
    key: 'deliver',
    title: 'Deliver',
    desc: 'We launch, refine, and support your project for lasting impact and success.',
    icon: <FaRocket className="text-red-500 w-7 h-7 mr-3 flex-shrink-0" />,
  },
];

export default function FiveDDesign() {
  // For lightening effect on dots
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % phases.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white lg:pt-0 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="text-center font-extrabold mb-16 tracking-tight"
        >
          <span className="block text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-teal-500 drop-shadow-lg">
            OUR 5D DESIGN AND DEVELOPMENT PROCESS
          </span>
        </motion.h2>
        {/* Process Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical line (center) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-200 rounded-full z-0 pt-5 hidden md:block"></div>
          {/* Phases */}
          <div className="w-full flex flex-col gap-12 md:gap-20 relative z-10">
            {phases.map((phase, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={phase.key}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, type: 'spring' }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Line dot (hide in mobile) */}
                  <span
                    className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-lg z-10 items-center justify-center transition-all duration-300
                      ${
                        activeDot === i
                          ? "bg-gradient-to-br from-red-500 via-blue-400 to-teal-400 shadow-xl scale-110"
                          : "bg-gradient-to-br from-blue-500 via-blue-400 to-teal-400 opacity-80"
                      }
                    `}
                    style={{ top: '50%', marginTop: '-1.75rem' }}
                  >
                    <span className="text-2xl font-extrabold text-red-600">{i + 1}</span>
                  </span>
                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 bg-white rounded-2xl shadow-xl px-7 py-8 transition-all duration-300 border border-blue-100
                      ${isLeft ? 'md:mr-auto md:ml-0 md:text-right' : 'md:ml-auto md:mr-0 md:text-left'}
                      flex flex-col items-center
                      md:items-center
                      hover:shadow-2xl hover:border-red-300
                    `}
                    style={{
                      marginBottom: i === phases.length - 1 ? 0 : undefined,
                      marginTop: i === 0 ? 0 : undefined,
                    }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      {/* Icon before heading */}
                      {phase.icon}
                      <span className="text-lg md:text-xl font-bold uppercase tracking-wide text-blue-600">
                        {phase.title}
                      </span>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg font-medium max-w-md text-center">
                      {phase.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import salescloud from "../../../../../public/assets/salescloud.jpg";

const SalesforceConsulting = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: 'Sales Cloud',
      icon: salescloud,
      description: 'We implement the Sales Cloud solution and set a tailored sales pipeline to enable your sales reps and managers to have a complete view of all existing and prospective customer information as well as deals and opportunities and get comprehensive performance reports.',
      highlight: 'Boost revenue by 30%'
    },
    {
      title: 'Service Cloud',
      icon: '/icons/service-cloud.png',
      description: 'We set up an omnichannel customer experience platform based on Salesforce Service Cloud that is tailored to your support agents needs, helping them efficiently solve cases and incidents, access the knowledge base faster, and automate case routing.',
      highlight: 'Reduce resolution time by 40%'
    },
    {
      title: 'Marketing Cloud',
      icon: '/icons/marketing-cloud.png',
      description: 'Our team implements and configures this marketing automation tool to enable companies to personalize and partially automate customer interactions across channels, craft outstanding marketing campaigns, and gather granular customer insights for further analysis.',
      highlight: 'Increase engagement by 25%'
    },
    {
      title: 'Community Cloud',
      icon: '/icons/community-cloud.png',
      description: 'Based on Salesforces Community Cloud, we create a branded hub for companies to engage and communicate with their customers, partners, or employees, building a strong community.',
      highlight: 'Grow community by 3x'
    }
  ];

  const fullServices = [
    {
      title: 'B2C Commerce',
      icon: salescloud,
      description: 'We implement and optimize this tool for B2C workflows to help retailers efficiently promote their products through marketing and merchandising campaigns, craft a consistent customer experience across channels, and scale or modify their stores on demand.'
    },
    {
      title: 'CPQ Salesforce',
      icon: '/icons/cpq-salesforce.png',
      description: 'We help companies implement and tap into all useful capabilities of CPQ Salesforce to enable their sales agents to provide accurate pricing for various product configurations and quickly generate quotes to streamline the selling process.'
    },
    {
      title: 'Lightning Platform',
      icon: '/icons/lightning-platform.png',
      description: 'We help to design your product and enchnace user experinces. With lightning Framework we serve you the best UI/ UX and Package on sales platform. Our expert will design your software on cloud platform.'
    }
  ];

  return (
    <section className="relative overflow-hidden py-10 md:py-8 bg-white lg:px-20">
      {/* Floating Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '100px',
              height: '100px',
              background: 'conic-gradient(from 180deg at 50% 50%, #3B82F6 0deg, #EC4899 180deg, #3B82F6 360deg)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Heading Block */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <motion.span 
              className="text-sm font-semibold tracking-widest text-blue-600 uppercase inline-flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-px w-8 bg-blue-600 mr-2"></span>
              Transformative Solutions
              <span className="h-px w-8 bg-blue-600 ml-2"></span>
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-tight">
              Salesforce <span className="whitespace-nowrap">Consulting</span>
            </h2>
            <motion.div 
              className="h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto w-24 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We architect <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">end-to-end Salesforce solutions</span> that drive digital transformation, customer engagement, and revenue growth.
          </motion.p>
        </motion.div>

        {/* Featured Services - Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative h-full"
            >
              <div className={`h-full bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 ${
                hoveredCard === index 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'hover:shadow-md'
              }`}>
                <div className="relative z-10">
                  <div className="w-20 h-20 mb-6 mx-auto bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center p-4 shadow-sm border border-gray-100">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-100/80 rounded-full backdrop-blur-sm border border-blue-200/50">
                      {service.highlight}
                    </span>
                  </div>
                </div>
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-xl -z-10"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services - Animated List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 md:p-12 bg-gradient-to-r from-blue-700 to-purple-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl opacity-10"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Comprehensive Salesforce Expertise
              </h3>
              <p className="text-blue-100 max-w-3xl text-lg leading-relaxed">
                Our certified consultants deliver full-spectrum Salesforce services from implementation to ongoing optimization.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
            {fullServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 transition-colors duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-white p-3 rounded-xl mr-5 shadow-sm border border-gray-100">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={36}
                      height={36}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <button className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Start Your Salesforce Journey</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute right-0 w-12 h-full bg-white/20 transform skew-x-12 translate-x-16 group-hover:-translate-x-40 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesforceConsulting;
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode,
  FaChartLine,
  FaLightbulb,
  FaShieldAlt,
  FaCogs,
  FaServer,
  FaRobot,
  FaSyncAlt,
  FaTools
} from 'react-icons/fa';

const ITConsulting = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
      title: "Software Implementation Strategy",
      description: "We help companies create optimal digital environments aligned with their technical capacity, business requirements, employees' needs, and customers' expectations.",
      color: "blue"
    },
    {
      icon: <FaChartLine className="text-purple-600 text-4xl" />,
      title: "Technology Advisory Services",
      description: "Our consultants assist in selecting the right technology stacks, helping businesses review technologies' pros and cons before starting projects.",
      color: "purple"
    },
    {
      icon: <FaLightbulb className="text-green-600 text-4xl" />,
      title: "Business Solution Consulting",
      description: "We help decide on systems to implement (CRM, ERP, DMS, CMS) along with development and customization scope.",
      color: "green"
    }
  ];

  const supportTiers = [
    {
      title: "First-line Support",
      description: "Handle user-side issues and minor glitches before they escalate, resolving issues without delving into code.",
      icon: <FaTools className="text-blue-500 text-3xl" />
    },
    {
      title: "Troubleshooting",
      description: "Investigate system deficiencies, detect and fix bugs, or perform performance-critical configurations.",
      icon: <FaServer className="text-purple-500 text-3xl" />
    },
    {
      title: "Advanced Support",
      description: "High-skilled architects investigate source code to remedy disruptions and optimize functionality.",
      icon: <FaShieldAlt className="text-green-500 text-3xl" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* IT Consulting Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            IT Consulting
          </h1>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            As a software consulting company, we help create optimal digital environments aligned with technical capacity, business requirements, employees' needs, and customers' expectations.
          </p>
        </motion.div>

        {/* Consulting Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className={`bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 ${service.color === 'blue' ? 'hover:border-blue-200' : service.color === 'purple' ? 'hover:border-purple-200' : 'hover:border-green-200'}`}
            >
              <div className={`w-16 h-16 mb-6 rounded-lg ${service.color === 'blue' ? 'bg-blue-50' : service.color === 'purple' ? 'bg-purple-50' : 'bg-green-50'} flex items-center justify-center mx-auto`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Software Support Section */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Software Maintenance and Support Services
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We assist enterprises with maintaining their IT infrastructures fully operable, flexible, and secure, helping them continuously optimize total cost of ownership.
            </p>
          </motion.div>

          {/* Support Tiers */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {supportTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={cardHover}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-full">
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {tier.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {tier.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DevOps Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-12 mb-5"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              DevOps
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We align Devs with Ops to automate end-to-end software delivery and ensure scalable, secure infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <FaSyncAlt className="text-blue-600 text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    DevOps Automation
                  </h3>
                </div>
                <p className="text-gray-600">
                  We implement powerful toolkits to automate code review, deployment, continuous testing, and knowledge aggregation while training your teams to operate effectively.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-lg"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex justify-center mb-6">
                    <FaRobot className="text-purple-600 text-6xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                    Continuous Everything
                  </h3>
                  <p className="text-gray-600 text-center">
                    Our DevOps approach ensures continuous integration, delivery, and deployment for seamless software evolution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl inline-block max-w-2xl">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Transform Your IT Infrastructure?
              </h3>
              <p className="text-gray-600 mb-6">
                Our consulting services deliver measurable results with clear ROI. Let's discuss how we can help your business grow.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ITConsulting;
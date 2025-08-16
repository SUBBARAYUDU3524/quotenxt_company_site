"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearchDollar, 
  FaDatabase, 
  FaUserTie, 
  FaChartLine,
  FaHeadset,
  FaLaptop,
  FaMobileAlt
} from 'react-icons/fa';
import Image from 'next/image';
import approach from "../../../../../public/assets/approach.png"

const VISM = () => {
  const approachItems = [
    {
      icon: <FaSearchDollar className="text-blue-600 text-4xl" />,
      title: "Market Research",
      description: "Our research involves systematic gathering and analyzing data about customers, competitors, and market environment to enhance marketing effectiveness.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <FaDatabase className="text-purple-600 text-4xl" />,
      title: "Database Building",
      description: "We systematically collect, organize, and manage data related to potential clients and relevant entities for targeted outreach.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <FaUserTie className="text-green-600 text-4xl" />,
      title: "Lead Generation",
      description: "We identify potential customers for your products/services, expanding your customer base and increasing revenue through strategic outreach.",
      bgColor: "bg-green-50"
    },
    {
      icon: <FaChartLine className="text-orange-600 text-4xl" />,
      title: "Inside Sales Training",
      description: "We train individuals and teams in inside sales and business development through comprehensive internship programs.",
      bgColor: "bg-orange-50"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className=" px-0  pb-8 bg-white  lg:px-20">
    <div className="relative py-10 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-purple-100 rounded-4xl">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            VISM - Virtual Inside Sales Model
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our virtual inside sales model is a sales approach where representatives conduct all activities remotely, 
            leveraging technology and digital platforms to connect with customers, qualify leads, and close deals.
          </p>
        </motion.div>

        {/* Visual Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mb-0"
        >
          
        </motion.div>

        {/* Our Approach Section */}
        <div className="text-center mb-10">

         

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Our Approach
          </motion.h2>
            <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          {/* <Image
                          src={approach}
                          alt="Mobile Apps Diagram"
                          width={1200}
                          height={600}
                          layout="responsive"
                          className="object-contain"
                        /> */}
        
        </div>

        {/* Approach Items Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {approachItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`${item.bgColor} p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-md inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Sales Process?
            </h3>
           <p className="text-gray-600 mb-6">
  Our VISM model delivers results with measurable ROI. Let&apos;s discuss how we can help your business grow.
</p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default VISM;
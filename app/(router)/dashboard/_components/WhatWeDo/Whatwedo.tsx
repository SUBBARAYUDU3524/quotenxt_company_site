'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import salesforce from "../../../../../public/assets/salesforce.jpg"     
import devops from "../../../../../public/assets/devops.jpg"     
import IT from "../../../../../public/assets/It.jpg"
import VISM from "../../../../../public/assets/vism.jpg"
import APP from "../../../../../public/assets/appdev.jpg"
import Workflow from "../../../../../public/assets/workforcemanagement.jpg"

const services = [
  {
    title: 'Salesforce Consulting',
    icon: salesforce, // Replace with your image path
    description: 'End-to-end Salesforce solutions including implementation, customization, and integration to streamline your CRM processes and boost sales productivity.'
  },
  {
    title: 'Workforce Management',
    icon: Workflow,
    description: 'Comprehensive workforce solutions including dedicated teams, staff augmentation, and talent acquisition to scale your operations efficiently.'
  },
  {
    title: 'Mobile/Web Development',
    icon: APP,
    description: 'Custom mobile and web applications built with cutting-edge technologies to deliver seamless user experiences across all platforms.'
  },
  {
    title: 'Virtual Inside Sales (VISM)',
    icon: VISM,
    description: 'Our proven virtual sales model accelerates lead generation and conversion rates while reducing your customer acquisition costs.'
  },
  {
    title: 'IT Consulting',
    icon: IT,
    description: 'Strategic IT guidance and technology roadmaps to align your infrastructure with business objectives and digital transformation goals.'
  },
  {
    title: 'DevOps',
    icon: devops,
    description: 'Automated CI/CD pipelines, cloud infrastructure, and deployment strategies to enable rapid, reliable software delivery.'
  }
];

const Whatwedo = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">What We Do</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-2 left-0 h-3 bg-blue-400/30 z-0"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering comprehensive digital solutions that drive growth, efficiency, and competitive advantage for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-xl overflow-hidden relative">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {/* Icon/Image */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-46 h-46 mb-3 mx-auto relative"
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-center transition-colors duration-300 group-hover:text-gray-800">
                  {service.description}
                </p>
                
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

export default Whatwedo;
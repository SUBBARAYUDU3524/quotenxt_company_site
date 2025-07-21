'use client';

import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiCloud, FiTrendingUp } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'IT CONSULTING',
      icon: <FiCode className="w-8 h-8" />,
      items: [
        'Custom application development',
        'Application Enhancement',
        'System Integration'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'WORKFORCE MANAGEMENT',
      icon: <FiUsers className="w-8 h-8" />,
      items: [
        'Dedicated Agile Teams',
        'Contract to Hire',
        'Onetime Placement'
      ],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'SALESFORCE CONSULTING',
      icon: <FiCloud className="w-8 h-8" />,
      items: [
        'Application Development',
        'Application Migration & Support',
        '24/7 Support'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'VISM',
      icon: <FiTrendingUp className="w-8 h-8" />,
      items: [
        'Lead Generation',
        'Inside Sales Training',
        'Fast ROI'
      ],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} text-white shadow-md`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
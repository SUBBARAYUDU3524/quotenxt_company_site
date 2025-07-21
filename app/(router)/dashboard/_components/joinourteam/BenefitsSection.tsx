"use client"
import { motion } from "framer-motion";
import { FiHome, FiClock, FiHeart, FiTrendingUp, FiDollarSign, FiGlobe } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FiHome className="w-6 h-6" />,
      title: "Remote Work",
      description: "Work from anywhere in the world with our distributed team",
      color: "from-blue-100 to-blue-50"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Design your ideal work schedule for optimal productivity",
      color: "from-purple-100 to-purple-50"
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Health Coverage",
      description: "Comprehensive medical, dental, and vision insurance",
      color: "from-rose-100 to-rose-50"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Annual learning budget and promotion opportunities",
      color: "from-emerald-100 to-emerald-50"
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Competitive Pay",
      description: "Salary and bonuses that reward your contributions",
      color: "from-amber-100 to-amber-50"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Retreats",
      description: "Annual company gatherings in exciting locations",
      color: "from-indigo-100 to-indigo-50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Benefits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We invest in your happiness, health, and professional growth
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${benefit.color} border border-gray-100 rounded-xl p-8 hover:shadow-md transition-all`}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Don't see your perfect role?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for exceptional talent. Reach out and tell us how you can contribute!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              Contact Our Team
              <FiArrowRight className="ml-3 h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#general-application"
              className="flex items-center justify-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              General Application
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
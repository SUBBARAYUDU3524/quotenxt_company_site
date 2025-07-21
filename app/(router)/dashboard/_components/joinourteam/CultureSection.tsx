"use client"
import { motion } from "framer-motion"
import { BsFillLightbulbFill } from "react-icons/bs"
import { FiUsers, FiHeart, FiGlobe, FiAward, FiCode, FiArrowRight } from "react-icons/fi"

const CultureSection = () => {
  // Core values data with extended color schemes
  const coreValues = [
    {
      icon: <BsFillLightbulbFill className="w-6 h-6" />,
      title: "Innovation",
      description: "We challenge the status quo and empower creative problem-solving",
      color: "from-purple-500 to-indigo-600",
      bg: "bg-gradient-to-br from-purple-50 to-indigo-50"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Collaboration",
      description: "Great things happen when diverse minds work together",
      color: "from-blue-500 to-cyan-600",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Integrity",
      description: "We do what's right, not what's easy",
      color: "from-rose-500 to-pink-600",
      bg: "bg-gradient-to-br from-rose-50 to-pink-50"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Building solutions that make a worldwide difference",
      color: "from-emerald-500 to-teal-600",
      bg: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Excellence",
      description: "We pursue mastery in everything we do",
      color: "from-amber-500 to-orange-600",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50"
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Agility",
      description: "Adapting quickly to change and new opportunities",
      color: "from-violet-500 to-fuchsia-600",
      bg: "bg-gradient-to-br from-violet-50 to-fuchsia-50"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            whileInView={{ 
              scale: [1, 1.02, 1],
              transition: { duration: 5, repeat: Infinity } 
            }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Culture</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built an environment where exceptional people can do their best work
          </p>
        </motion.div>

        {/* Animated Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className={`${value.bg} border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:border-transparent`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white bg-gradient-to-r ${value.color} shadow-md`}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 mb-6">{value.description}</p>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-blue-600 font-medium"
              >
                <span>Learn more</span>
                <FiArrowRight className="ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Join Our Culture
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CultureSection
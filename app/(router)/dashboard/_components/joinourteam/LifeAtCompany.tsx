'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiSmile, FiUsers, FiAward, FiCoffee, FiX } from 'react-icons/fi'
import { useState } from 'react'
import employee from "../../../../../public/assets/Manufacture.jpg"

const LifeAtCompany = () => {
  // Using the imported employee image for all positions
  const employeeImages = Array(6).fill(employee.src)

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [centerIndex, setCenterIndex] = useState(0)

  const perks = [
    {
      icon: <FiSmile className="w-6 h-6" />,
      title: 'Happy Environment',
      description: 'Positive workplace that values employee well-being',
      image: employee.src
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Team Bonding',
      description: 'Regular team activities and social events',
      image: employee.src
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Opportunities for professional development',
      image: employee.src
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote options',
      image: employee.src
    }
  ]

  const handleImageClick = (imgIndex: number) => {
    setCenterIndex(imgIndex)
    setSelectedImage(employeeImages[imgIndex])
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-10 bg-white" id="life-at-company">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life At <span className="text-blue-600">QUOTE NXT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where work feels like home and colleagues become family
          </p>
        </motion.div>

        {/* Employee Gallery - Creative Layout */}
        <div className="relative mb-20 h-[500px] md:h-[600px]">
          {/* Main centered image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white cursor-pointer"
            onClick={() => handleImageClick(centerIndex)}
          >
            <img 
              src={employeeImages[centerIndex]} 
              alt="Team member" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Rotating images around center */}
          {employeeImages.map((img, i) => {
            if (i === centerIndex) return null
            
            const angle = ((i * 360) / (employeeImages.length - 1)) // Evenly distribute around circle
            const radius = 180 // Distance from center
            
            return (
              <motion.div
                key={i}
                initial={{ 
                  x: 0,
                  y: 0,
                  opacity: 0,
                  rotate: angle
                }}
                whileInView={{ 
                  x: Math.cos(angle * Math.PI / 180) * radius,
                  y: Math.sin(angle * Math.PI / 180) * radius,
                  opacity: 1,
                  rotate: angle + 360
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  delay: i * 0.1,
                  type: 'spring'
                }}
                className="absolute top-1/2 left-1/2 w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg border-4 border-white cursor-pointer"
                style={{
                  transformOrigin: '0 0'
                }}
                onClick={() => handleImageClick(i)}
              >
                <img 
                  src={img} 
                  alt={`Team member ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            )
          })}

          {/* Floating decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-96 h-96 rounded-full border-2 border-blue-200/50"></div>
          </motion.div>
        </div>

        {/* Company Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                {perk.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600">{perk.description}</p>
              <img 
                src={perk.image} 
                alt={perk.title}
                className="mt-4 rounded-lg w-full h-40 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#careers"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Join Our Team <FiArrowRight className="ml-3 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected team member" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors"
              >
                <FiX className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default LifeAtCompany
'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiBriefcase, FiPhone, FiMessageSquare } from 'react-icons/fi'
import Image from 'next/image'
import contact from "../../../../../public/assets/Healthcare.jpg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [activeField, setActiveField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
      formRef.current?.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section - Animated from left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
                  <p className="opacity-90">Our team is ready to help you create exceptional digital experiences</p>
                </div>
              </div>
              {/* You would replace the gradient with an actual image like this: */}
              <Image 
                src={contact}
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Form Section - Animated from right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-100"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100"
                    >
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="relative"
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className={`h-5 w-5 ${activeField === 'name' ? 'text-indigo-500' : 'text-gray-400'} transition-colors`} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="John Doe"
                      />
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === 'name' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 origin-left transition-transform duration-300"
                      />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="relative"
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className={`h-5 w-5 ${activeField === 'email' ? 'text-indigo-500' : 'text-gray-400'} transition-colors`} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="you@company.com"
                      
                      />
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === 'email' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 origin-left transition-transform duration-300"
                      />
                    </div>
                  </motion.div>

                  {/* Company */}
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="relative"
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiBriefcase className={`h-5 w-5 ${activeField === 'company' ? 'text-indigo-500' : 'text-gray-400'} transition-colors`} />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                        className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Your Company"
                      />
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === 'company' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 origin-left transition-transform duration-300"
                      />
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="relative"
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className={`h-5 w-5 ${activeField === 'phone' ? 'text-indigo-500' : 'text-gray-400'} transition-colors`} />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === 'phone' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 origin-left transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="relative"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className={`h-5 w-5 ${activeField === 'message' ? 'text-indigo-500' : 'text-gray-400'} transition-colors`} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      placeholder="Tell us about your project..."
                    />
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeField === 'message' ? 1 : 0 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 origin-left transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* Submit button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-3 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
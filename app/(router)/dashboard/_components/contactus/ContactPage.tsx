'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiBriefcase, FiPhone, FiMessageSquare, FiMapPin, FiClock } from 'react-icons/fi'

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
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Consultation Request
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete this form and our executive team will contact you within one business day.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">Direct Contacts</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="mt-1">
                    <FiMail className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Executive Inquiries</h4>
                    <p className="text-gray-800">executive@company.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="mt-1">
                    <FiPhone className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Office</h4>
                    <p className="text-gray-800">+1 (212) 555-0100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="mt-1">
                    <FiMapPin className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Headquarters</h4>
                    <p className="text-gray-800">350 Fifth Avenue<br />New York, NY 10118</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="mt-1">
                    <FiClock className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Business Hours</h4>
                    <p className="text-gray-800">Monday-Friday<br />9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-gray-50 text-gray-800 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Your request has been submitted successfully.</span>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-gray-50 text-gray-800 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>There was an error submitting your request. Please try again.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-400" />
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
                        className={`pl-10 pr-4 py-3 w-full border ${activeField === 'name' ? 'border-gray-400' : 'border-gray-200'} rounded-lg focus:ring-1 focus:ring-gray-400 bg-white text-gray-800 placeholder-gray-400 transition-all`}
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
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
                        className={`pl-10 pr-4 py-3 w-full border ${activeField === 'email' ? 'border-gray-400' : 'border-gray-200'} rounded-lg focus:ring-1 focus:ring-gray-400 bg-white text-gray-800 placeholder-gray-400 transition-all`}
                        placeholder="john.smith@company.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiBriefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                        className={`pl-10 pr-4 py-3 w-full border ${activeField === 'company' ? 'border-gray-400' : 'border-gray-200'} rounded-lg focus:ring-1 focus:ring-gray-400 bg-white text-gray-800 placeholder-gray-400 transition-all`}
                        placeholder="Acme Corporation"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        className={`pl-10 pr-4 py-3 w-full border ${activeField === 'phone' ? 'border-gray-400' : 'border-gray-200'} rounded-lg focus:ring-1 focus:ring-gray-400 bg-white text-gray-800 placeholder-gray-400 transition-all`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Details *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className="h-5 w-5 text-gray-400" />
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
                      className={`pl-10 pr-4 py-3 w-full border ${activeField === 'message' ? 'border-gray-400' : 'border-gray-200'} rounded-lg focus:ring-1 focus:ring-gray-400 bg-white text-gray-800 placeholder-gray-400 transition-all`}
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-6 border border-gray-800 rounded-lg text-lg font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Request...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-3 h-5 w-5" />
                        Submit Request
                      </>
                    )}
                  </button>
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
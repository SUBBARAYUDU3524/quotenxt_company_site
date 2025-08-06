'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const MainPage = () => {
  const router = useRouter()
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e1832] via-[#10314d] to-[#0b3d2c] overflow-hidden relative font-sans">
      {/* Top Center QUOTE NXT Branding */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none"
        style={{ top: '2.5rem' }}
      >
        <div className="flex flex-col items-center">
          <span
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 via-blue-600 to-green-400 text-transparent bg-clip-text drop-shadow-5xl animate-shine"
            style={{
              letterSpacing: '0.1em',
              textShadow: '0 4px 32px #0e7490, 0 2px 6px #059669',
              filter: 'brightness(1.2)',
              marginBottom: '0.5rem',
            }}
          >
            <span className="mr-2 text-shadow-blue-900" style={{
              textShadow: '0 2px 8px #2563eb,0 0px 2px #0e7490'
            }}>QUOTE</span>
            <span className="text-green-500 text-shadow-blue-950" style={{
              textShadow: '0 0px 12px #22c55e,0 2px 8px #2563eb'
            }}>NXT</span>
          </span>
          <div className="h-2 w-32 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 my-2 opacity-50 blur-sm"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              opacity: [0, 0.25, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5
            }}
            className="absolute rounded-full"
            style={{
              background: 'linear-gradient(135deg, #22c55e80 35%, #38bdf880 100%)',
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-8 z-10"
        style={{
          opacity,
          scale,
          paddingTop: '5.5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
          style={{ marginTop: '0.5rem' }}
        >
          {/* Animated Gradient Text */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{
              color: 'transparent',
              background: 'linear-gradient(90deg, #38bdf8 20%, #22c55e 80%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              marginTop: '-1.5rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block text-white drop-shadow-xl">Transform Your</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-blue-400 animate-shine">
              Digital Experience
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: '-1rem',
            }}
          >
            The most powerful platform to streamline your workflow and boost productivity
          </motion.p>

          {/* Dashboard Button with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
            style={{
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.07,
                boxShadow: "0 0 24px 8px #22c55e80, 0 0 60px 8px #38bdf880"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToDashboard}
              className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 text-white font-semibold text-lg shadow-lg overflow-hidden group transition-all duration-200 flex justify-center items-center"
              style={{
                width: '100%',
                maxWidth: '250px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span className="relative z-10 flex items-center justify-center w-full">
                Dashboard <FiArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-green-400/20 to-blue-500/30 pointer-events-none"
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            bottom: '2.5rem',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiChevronDown className="h-6 w-6 text-blue-300 drop-shadow-md" />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Feature Highlights */}
      <section className="py-20 relative z-20 bg-gradient-to-b from-[#10314d]/80 via-[#0b3d2c]/80 to-[#0e1832]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 via-green-500 to-blue-400 text-transparent bg-clip-text">QUOTE NXT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the features that make our platform stand out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
            {[
              {
                title: "Seamless Integration",
                description: "Connect with all your favorite tools and services",
                color: "from-blue-400 via-green-400 to-blue-500"
              },
              {
                title: "Real-time Analytics",
                description: "Get actionable insights with our powerful dashboard",
                color: "from-green-400 via-blue-400 to-green-600"
              },
              {
                title: "Enterprise Security",
                description: "Military-grade encryption to protect your data",
                color: "from-blue-400 via-green-400 to-blue-700"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-blue-300/30 transition-all shadow-lg flex flex-col items-center"
                style={{
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div className={`w-16 h-16 rounded-xl mb-6 bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white shadow-xl`}>
                  <span className="text-3xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden z-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-green-400/10 to-blue-600/20 -skew-y-3"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h3 className="text-3xl font-bold text-white mb-2">Ready to get started?</h3>
                <p className="text-blue-100 max-w-lg">Join thousands of businesses already using our platform</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToDashboard}
                className="px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center"
              >
                Launch Dashboard <FiArrowRight className="ml-3 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Responsive SM screen style fixes for spacing */}
      <style jsx>{`
        @media (max-width: 640px) {
          .absolute.left-1\\/2.transform.-translate-x-1\\/2.z-30.w-full.flex.justify-center.pointer-events-none {
            top: 1.2rem !important;
          }
          .max-w-4xl.mx-auto {
            margin-top: 0 !important;
          }
          .text-5xl {
            margin-top: -2.2rem !important;
          }
          .text-xl.md\\:text-2xl.text-gray-200.max-w-2xl.mx-auto.mb-10 {
            margin-top: -1.2rem !important;
          }
          .flex.flex-col.sm\\:flex-row.justify-center.gap-4 {
            margin-bottom: 0.5rem !important;
          }
          .absolute.left-1\\/2.transform.-translate-x-1\\/2 {
            bottom: 1.2rem !important;
          }
          .grid.grid-cols-1.md\\:grid-cols-3.gap-8 {
            gap: 1.2rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          .bg-white\\/5.backdrop-blur-lg.rounded-xl.p-8.border.border-white\\/10.hover\\:border-blue-300\\/30.transition-all.shadow-lg {
            align-items: center !important;
            text-align: center !important;
            margin-bottom: 0 !important;
          }
          /* Remove extra space between feature blocks on sm */
          .mb-16 {
            margin-bottom: 1.8rem !important;
          }
          section.py-20.relative.z-20.bg-gradient-to-b.from-\\[\\#10314d\\]\\/80.via-\\[\\#0b3d2c\\]\\/80.to-\\[\\#0e1832\\] {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default MainPage
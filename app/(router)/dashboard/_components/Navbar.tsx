'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Nav links data
const navLinks = [
  { name: 'Home', path: '/dashboard' },
  { name: 'What We Do', path: '/dashboard/what-we-do' },
  { name: 'Who We Serve', path: '/dashboard/who-we-serve' },
  { name: 'Join Our Team', path: '/dashboard/join-our-team' },
  { name: 'Contact Us', path: '/dashboard/contact-us' },
];

// Framer Motion variants
const navLinkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, type: 'spring', stiffness: 80 },
  }),
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 bg-white ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with subtle shine effect */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" aria-label="Home" className="flex items-center group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/logo.jpg"
                  alt="Logo"
                  width={190}
                  height={190}
                  className=""
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: -100 }}
                  whileHover={{ x: 100 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Premium Black Text Links */}
          <motion.ul
            className="hidden md:flex items-center gap-1"
            initial="initial"
            animate="animate"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <motion.li
                  key={link.path}
                  custom={i}
                  variants={navLinkVariants}
                  className="relative"
                >
                  <Link
                    href={link.path}
                    className={`group flex items-center px-4 py-2 font-medium text-black transition-all duration-300 relative overflow-hidden
                      ${isActive ? 'text-black font-semibold' : 'hover:text-black/80'}
                    `}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Animated underline effect */}
                    {isActive ? (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-black rounded-full"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    ) : (
                      <motion.span
                        className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black rounded-full transform -translate-x-1/2 group-hover:w-3/4"
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}
                    
                    {/* Hover background effect */}
                    <motion.span
                      className="absolute inset-0 bg-black/5 rounded-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Mobile menu button - Premium style */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-black/5 hover:bg-black/10 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-black" />
              ) : (
                <FiMenu className="h-6 w-6 text-black" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Premium style */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { 
            height: 'auto',
            opacity: 1,
            transition: { 
              height: { duration: 0.3 },
              opacity: { delay: 0.1, duration: 0.2 }
            }
          },
          closed: { 
            height: 0,
            opacity: 0,
            transition: { 
              opacity: { duration: 0.1 },
              height: { delay: 0.1, duration: 0.2 }
            }
          }
        }}
        className="md:hidden bg-white shadow-lg overflow-hidden"
      >
        {isOpen && (
          <motion.div 
            className="px-4 py-3 space-y-2"
            initial="closed"
            animate="open"
            variants={{
              open: {
                transition: { staggerChildren: 0.05, delayChildren: 0.1 }
              },
              closed: {
                transition: { staggerChildren: 0.02, staggerDirection: -1 }
              }
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  variants={{
                    open: { 
                      opacity: 1,
                      y: 0,
                      transition: { type: 'spring', stiffness: 300, damping: 24 }
                    },
                    closed: { 
                      opacity: 0,
                      y: 20,
                      transition: { duration: 0.2 }
                    }
                  }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium text-black transition-all duration-200
                      ${isActive ? 'bg-black/10 font-semibold' : 'hover:bg-black/5'}
                    `}
                  >
                    <div className="flex items-center">
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="ml-2 w-1.5 h-1.5 bg-black rounded-full"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}
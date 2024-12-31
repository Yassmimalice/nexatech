'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <Logo />
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              NexaTech
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Sobre', 'Serviços', 'Depoimentos', 'Blog', 'Contato'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group py-2"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <motion.button
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <motion.div 
                className="py-4 space-y-4"
                variants={{
                  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {['Sobre', 'Serviços', 'Depoimentos', 'Blog', 'Contato'].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: -20, opacity: 0 }
                    }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -20, opacity: 0 }
                  }}
                >
                  <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                    Começar
                  </button>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}


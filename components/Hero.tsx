'use client'

import { motion } from 'framer-motion'
import RobotAnimation from './RobotAnimation'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-blue-900/20" />
      
      {/* Animation background */}
      <div className="absolute inset-0 z-0">
        <RobotAnimation />
      </div>
      
      {/* Content overlay for better text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent z-10" />
      
      {/* Main content */}
      <div className="container mx-auto px-6 z-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 space-y-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                A Revolução Digital
                <br />
                Começa Aqui
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Soluções inteligentes para acelerar o futuro do seu negócio.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comece Agora
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-transparent text-white rounded-full text-lg font-semibold border-2 border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </motion.button>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">Scroll para descobrir</span>
              <motion.div
                className="w-6 h-10 border-2 border-gray-400/50 rounded-full p-1"
                initial={{ y: 0 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-1 h-2 bg-blue-500 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>
    </section>
  )
}


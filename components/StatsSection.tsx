'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              <Counter end={100} duration={2} suffix="+" />
            </div>
            <p className="text-gray-300">Projetos Concluídos</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              <Counter end={50} duration={2} suffix="+" />
            </div>
            <p className="text-gray-300">Clientes Satisfeitos</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              <Counter end={5} duration={2} suffix="+" />
            </div>
            <p className="text-gray-300">Anos de Experiência</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              <Counter end={24} duration={2} suffix="/7" />
            </div>
            <p className="text-gray-300">Suporte Disponível</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


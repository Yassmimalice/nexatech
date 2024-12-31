'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: "João Silva",
    role: "CEO da StartUp X",
    content: "Graças à NexaTech, automatizamos nossos processos e ganhamos agilidade. Nossa produtividade aumentou 50%!",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Maria Oliveira",
    role: "Diretora de Operações",
    content: "A NexaTech foi essencial para nossa transição digital. Hoje somos uma empresa muito mais competitiva.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Carlos Mendes",
    role: "CTO de Tech Innovations",
    content: "A expertise da NexaTech em IA nos ajudou a desenvolver soluções verdadeiramente inovadoras.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          O Que Nossos Clientes Dizem
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            <p className="text-xl mb-6 italic text-gray-300">"{testimonials[currentIndex].content}"</p>
            <div className="flex items-center">
              <Image 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                width={60} 
                height={60} 
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full"
          >
            &#8592;
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}


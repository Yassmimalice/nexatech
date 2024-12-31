'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaLightbulb, FaCogs, FaShieldAlt, FaNetworkWired } from 'react-icons/fa'

const services = [
  { icon: FaLaptopCode, title: "Desenvolvimento de Software Personalizado" },
  { icon: FaLightbulb, title: "Consultoria em Inovação Digital" },
  { icon: FaCogs, title: "Automatização de Processos Empresariais" },
  { icon: FaShieldAlt, title: "Segurança Cibernética Avançada" },
  { icon: FaNetworkWired, title: "Integração de Sistemas" },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-700 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <service.icon className="text-5xl text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Descubra Nossos Serviços
          </button>
        </motion.div>
      </div>
    </section>
  )
}


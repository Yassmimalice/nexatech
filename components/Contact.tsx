'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-blue-400 mr-2" />
                <span>Av. da Inovação, 456 - São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-2" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-2" />
                <span>contato@nexatech.com</span>
              </li>
            </ul>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <input 
              type="text" 
              placeholder="Nome" 
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            />
            <textarea 
              placeholder="Mensagem" 
              rows={4} 
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            ></textarea>
            <motion.button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}


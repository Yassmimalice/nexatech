'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNode, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTensorflow, SiKubernetes } from 'react-icons/si'

const technologies = [
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: FaNode, name: 'Node.js', color: '#339933' },
  { icon: FaPython, name: 'Python', color: '#3776AB' },
  { icon: FaAws, name: 'AWS', color: '#FF9900' },
  { icon: FaDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
]

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nossas Tecnologias
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <tech.icon 
                  size={60} 
                  color={tech.color}
                  className="relative z-10"
                />
              </motion.div>
              <p className="mt-4 text-gray-300 font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


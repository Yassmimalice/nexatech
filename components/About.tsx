'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          style={{ scale }}
        >
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-blue-500"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sobre Nós
            </motion.h2>
            <motion.p 
              className="mb-6 text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Na NexaTech, acreditamos que a tecnologia é a chave para desbloquear o potencial das empresas. Nossa equipe de especialistas é apaixonada por criar soluções únicas que geram resultados tangíveis.
            </motion.p>
            <motion.ul 
              className="mb-6 text-gray-300 text-lg space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">&#10003;</span>
                10+ anos de experiência transformando ideias em realidade digital.
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">&#10003;</span>
                Equipe altamente qualificada e multidisciplinar.
              </li>
            </motion.ul>
          </div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Equipe de especialistas" 
              width={500} 
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2018',
    title: 'Fundação',
    description: 'Início da nossa jornada revolucionária no mundo da tecnologia.'
  },
  {
    year: '2019',
    title: 'Expansão',
    description: 'Crescimento da equipe e primeiro grande projeto internacional.'
  },
  {
    year: '2020',
    title: 'Inovação',
    description: 'Lançamento da nossa plataforma de IA proprietária.'
  },
  {
    year: '2021',
    title: 'Reconhecimento',
    description: 'Premiados como uma das startups mais inovadoras do ano.'
  },
  {
    year: '2023',
    title: 'Global',
    description: 'Expansão para múltiplos continentes e novos mercados.'
  }
]

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nossa História
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className={`relative flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-5/12" />
              
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-gray-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              
              <motion.div 
                className="w-5/12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-blue-500 font-bold text-xl mb-2">{milestone.year}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


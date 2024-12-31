'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: "Como a Inteligência Artificial está redefinindo o setor de TI",
    excerpt: "Descubra como a IA está transformando a indústria de tecnologia...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "As maiores tendências de tecnologia para os próximos anos",
    excerpt: "Fique por dentro das tecnologias que vão moldar o futuro...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "O impacto da computação quântica nos negócios",
    excerpt: "Entenda como a computação quântica pode revolucionar sua empresa...",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog e Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={post.image} 
                alt={post.title} 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-400 hover:underline">Leia mais</a>
              </div>
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
            Explore o Conteúdo
          </button>
        </motion.div>
      </div>
    </section>
  )
}


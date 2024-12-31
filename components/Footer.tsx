'use client'

import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">NexaTech Solutions</h3>
            <p className="text-gray-400">Inovando o Futuro, Hoje</p>
          </div>
          
          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-8">
              <li><Link href="#" className="hover:text-blue-400 transition duration-300">Início</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition duration-300">Sobre</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition duration-300">Serviços</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition duration-300">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition duration-300">Contato</Link></li>
            </ul>
          </nav>

          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-blue-400 transition duration-300">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400 transition duration-300">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400 transition duration-300">
              <FaFacebook size={24} />
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-400">
          <p>© 2023 NexaTech Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


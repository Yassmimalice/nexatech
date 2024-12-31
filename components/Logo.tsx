'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="relative w-10 h-10"
      initial={{ rotate: -90 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <motion.path
          d="M20 4L4 20L20 36L36 20L20 4Z"
          stroke="url(#gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M20 12L12 20L20 28L28 20L20 12Z"
          fill="url(#gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.circle
          cx="20"
          cy="20"
          r="2"
          fill="#60A5FA"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
        <defs>
          <linearGradient id="gradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  )
}


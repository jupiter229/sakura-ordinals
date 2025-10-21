'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        className="relative w-6 h-6"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </motion.div>
    </button>
  )
}

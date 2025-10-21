'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const galleryImages = [
  { id: 1, src: '/assets/sakura_001.png', alt: 'Sakura Ordinal #1' },
  { id: 50, src: '/assets/sakura_050.png', alt: 'Sakura Ordinal #50' },
  { id: 100, src: '/assets/sakura_100.png', alt: 'Sakura Ordinal #100' },
  { id: 150, src: '/assets/sakura_150.png', alt: 'Sakura Ordinal #150' },
  { id: 200, src: '/assets/sakura_200.png', alt: 'Sakura Ordinal #200' },
  { id: 300, src: '/assets/sakura_300.png', alt: 'Sakura Ordinal #300' },
  { id: 333, src: '/assets/sakura_333.png', alt: 'Sakura Ordinal #333' },
  { id: 400, src: '/assets/sakura_400.png', alt: 'Sakura Ordinal #400' },
  { id: 500, src: '/assets/sakura_500.png', alt: 'Sakura Ordinal #500' },
  { id: 600, src: '/assets/sakura_600.png', alt: 'Sakura Ordinal #600' },
  { id: 666, src: '/assets/sakura_666.png', alt: 'Sakura Ordinal #666' },
  { id: 750, src: '/assets/sakura_750.png', alt: 'Sakura Ordinal #750' },
  { id: 850, src: '/assets/sakura_850.png', alt: 'Sakura Ordinal #850' },
  { id: 950, src: '/assets/sakura_950.png', alt: 'Sakura Ordinal #950' },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-pink-50 to-rose-50 dark:from-dark-800 dark:to-dark-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="gradient-text">Sakura Collection</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Each Sakura Ordinal is a unique piece of art, but more importantly, 
            it's your key to the future of web3 dating.
          </p>
        </motion.div>

        {/* Main Gallery Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-dark-800 p-4">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
              
              {/* Overlay with ordinal number */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-dark-700/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-bold text-sakura-600">
                  #{galleryImages[currentIndex].id}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">Sakura Ordinal #{galleryImages[currentIndex].id}</div>
                  <div className="text-sm opacity-90">Click to view on Magic Eden</div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sakura-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sakura-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-sakura-500 scale-125' 
                    : 'bg-gray-300 hover:bg-sakura-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-sakura-500 scale-105' 
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-auto"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                #{image.id}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Collection Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">999</div>
              <div className="text-gray-600 dark:text-gray-300">Unique Ordinals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Utility Focused</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-300">Possibilities</div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

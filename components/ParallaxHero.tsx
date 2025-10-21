'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Heart, ExternalLink, Star } from 'lucide-react'

const heroImages = [
  { id: 1, src: '/assets/sakura_001.png', speed: 0.2, size: 'w-20 h-20 sm:w-28 sm:h-28', position: 'top-20 left-4' },
  { id: 50, src: '/assets/sakura_050.png', speed: 0.4, size: 'w-24 h-24 sm:w-32 sm:h-32', position: 'top-32 right-8' },
  { id: 100, src: '/assets/sakura_100.png', speed: 0.3, size: 'w-18 h-18 sm:w-24 sm:h-24', position: 'top-48 left-1/4' },
  { id: 150, src: '/assets/sakura_150.png', speed: 0.6, size: 'w-22 h-22 sm:w-28 sm:h-28', position: 'top-64 right-1/3' },
  { id: 200, src: '/assets/sakura_200.png', speed: 0.1, size: 'w-20 h-20 sm:w-26 sm:h-26', position: 'top-80 left-1/2' },
  { id: 300, src: '/assets/sakura_300.png', speed: 0.5, size: 'w-26 h-26 sm:w-36 sm:h-36', position: 'top-96 right-1/4' },
  { id: 400, src: '/assets/sakura_400.png', speed: 0.3, size: 'w-16 h-16 sm:w-22 sm:h-22', position: 'top-32 left-3/4' },
  { id: 500, src: '/assets/sakura_500.png', speed: 0.7, size: 'w-24 h-24 sm:w-32 sm:h-32', position: 'top-56 right-16' },
  { id: 600, src: '/assets/sakura_600.png', speed: 0.2, size: 'w-20 h-20 sm:w-26 sm:h-26', position: 'top-72 left-1/6' },
  { id: 666, src: '/assets/sakura_666.png', speed: 0.4, size: 'w-28 h-28 sm:w-40 sm:h-40', position: 'top-40 right-1/2' },
]

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800" />
      
      {/* Floating Sakura petals */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute sakura-petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.03 }}
        />
      ))}

      {/* Parallax Sakura Ordinals */}
      {heroImages.map((image, index) => {
        const y = useTransform(smoothScrollY, [0, 1], [0, -300 * image.speed])
        const opacity = useTransform(smoothScrollY, [0, 0.2, 0.8, 1], [1, 1, 1, 0])
        const scale = useTransform(smoothScrollY, [0, 0.5, 1], [0.8, 1, 1.2])
        const rotate = useTransform(smoothScrollY, [0, 1], [0, 360 * image.speed])
        const x = useTransform(smoothScrollY, [0, 1], [0, 100 * (index % 2 === 0 ? 1 : -1)])

        return (
          <motion.div
            key={image.id}
            className={`absolute ${image.position} ${image.size} z-10`}
            style={{ y, opacity, scale, rotate, x }}
            initial={{ opacity: 1, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.4, 
              rotate: 15,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative group cursor-pointer">
              <Image
                src={image.src}
                alt={`Sakura Ordinal #${image.id}`}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-3xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-sakura-500/30"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sakura-500/30 to-cherry-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm sm:text-lg font-bold drop-shadow-lg">#{image.id}</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sakura-400/40 to-cherry-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10 scale-125" />
            </div>
          </motion.div>
        )
      })}

      {/* Additional floating elements for depth */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-sakura-200/25 to-cherry-200/25 rounded-full blur-3xl"
        style={{
          y: useTransform(smoothScrollY, [0, 1], [0, -150]),
          scale: useTransform(smoothScrollY, [0, 1], [1, 2]),
          opacity: useTransform(smoothScrollY, [0, 0.5, 1], [0.4, 0.7, 0.3])
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-2xl"
        style={{
          y: useTransform(smoothScrollY, [0, 1], [0, -100]),
          scale: useTransform(smoothScrollY, [0, 1], [1, 1.8]),
          opacity: useTransform(smoothScrollY, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.5, 0.2])
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-r from-rose-200/15 to-pink-200/15 rounded-full blur-xl"
        style={{
          y: useTransform(smoothScrollY, [0, 1], [0, -120]),
          scale: useTransform(smoothScrollY, [0, 1], [1, 1.6]),
          opacity: useTransform(smoothScrollY, [0, 0.4, 0.8, 1], [0.2, 0.4, 0.3, 0.1])
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-sakura-100 dark:bg-sakura-900/30 text-sakura-700 dark:text-sakura-300 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                The First Utility-Focused Bitcoin Ordinals Collection
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-sakura-500 to-cherry-500 bg-clip-text text-transparent">
                  Sakura Ordinals
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Beyond PFP. Beyond pixels. The first Bitcoin Ordinals collection with{' '}
                <span className="font-semibold text-sakura-600">real utility</span> - 
                featuring a revolutionary web3 dating platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-gradient-to-r from-sakura-500 to-cherry-500 hover:from-sakura-600 hover:to-cherry-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg px-10 py-4">
                <Heart className="w-5 h-5 mr-2" />
                Join the Waitlist
              </button>
              <button className="border-2 border-sakura-500 text-sakura-500 hover:bg-sakura-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-lg px-10 py-4">
                <ExternalLink className="w-5 h-5 mr-2" />
                View on Magic Eden
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-sakura-500 to-cherry-500 bg-clip-text text-transparent mb-2">999</div>
                <div className="text-gray-600 dark:text-gray-300">Unique Ordinals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-sakura-500 to-cherry-500 bg-clip-text text-transparent mb-2">Real</div>
                <div className="text-gray-600 dark:text-gray-300">Utility & Use Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-sakura-500 to-cherry-500 bg-clip-text text-transparent mb-2">Web3</div>
                <div className="text-gray-600 dark:text-gray-300">Dating Platform</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/60 dark:from-dark-900/90 dark:via-transparent dark:to-dark-900/60 pointer-events-none z-10" />
    </div>
  )
}

'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const parallaxImages = [
  { id: 1, src: '/assets/sakura_001.png', speed: 0.3, size: 'w-16 h-16 sm:w-20 sm:h-20', position: 'top-20 left-4 sm:left-8' },
  { id: 25, src: '/assets/sakura_025.png', speed: 0.5, size: 'w-20 h-20 sm:w-24 sm:h-24', position: 'top-32 right-4 sm:right-12' },
  { id: 50, src: '/assets/sakura_050.png', speed: 0.2, size: 'w-14 h-14 sm:w-18 sm:h-18', position: 'top-48 left-1/4' },
  { id: 75, src: '/assets/sakura_075.png', speed: 0.7, size: 'w-18 h-18 sm:w-22 sm:h-22', position: 'top-64 right-1/3' },
  { id: 100, src: '/assets/sakura_100.png', speed: 0.4, size: 'w-16 h-16 sm:w-20 sm:h-20', position: 'top-80 left-1/2' },
  { id: 125, src: '/assets/sakura_125.png', speed: 0.6, size: 'w-22 h-22 sm:w-28 sm:h-28', position: 'top-96 right-1/4' },
  { id: 150, src: '/assets/sakura_150.png', speed: 0.3, size: 'w-12 h-12 sm:w-16 sm:h-16', position: 'top-32 left-3/4' },
  { id: 175, src: '/assets/sakura_175.png', speed: 0.8, size: 'w-20 h-20 sm:w-24 sm:h-24', position: 'top-56 right-8 sm:right-16' },
  { id: 200, src: '/assets/sakura_200.png', speed: 0.5, size: 'w-16 h-16 sm:w-20 sm:h-20', position: 'top-72 left-1/6' },
  { id: 250, src: '/assets/sakura_250.png', speed: 0.2, size: 'w-18 h-18 sm:w-22 sm:h-22', position: 'top-40 right-1/2' },
  { id: 300, src: '/assets/sakura_300.png', speed: 0.6, size: 'w-14 h-14 sm:w-18 sm:h-18', position: 'top-88 left-2/3' },
  { id: 333, src: '/assets/sakura_333.png', speed: 0.4, size: 'w-20 h-20 sm:w-24 sm:h-24', position: 'top-24 right-1/6' },
  { id: 350, src: '/assets/sakura_350.png', speed: 0.7, size: 'w-16 h-16 sm:w-20 sm:h-20', position: 'top-60 left-1/3' },
  { id: 400, src: '/assets/sakura_400.png', speed: 0.3, size: 'w-18 h-18 sm:w-22 sm:h-22', position: 'top-76 right-2/3' },
  { id: 450, src: '/assets/sakura_450.png', speed: 0.5, size: 'w-14 h-14 sm:w-18 sm:h-18', position: 'top-44 left-1/5' },
  { id: 500, src: '/assets/sakura_500.png', speed: 0.8, size: 'w-22 h-22 sm:w-28 sm:h-28', position: 'top-68 right-1/5' },
  { id: 600, src: '/assets/sakura_600.png', speed: 0.2, size: 'w-12 h-12 sm:w-16 sm:h-16', position: 'top-52 left-4/5' },
  { id: 666, src: '/assets/sakura_666.png', speed: 0.6, size: 'w-24 h-24 sm:w-32 sm:h-32', position: 'top-36 right-1/3' },
]

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function ParallaxSection({ children, className = "", id }: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} id={id} className={`relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800" />
      
      {/* Floating Sakura petals */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute sakura-petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        />
      ))}

      {/* Parallax Sakura Ordinals */}
      {parallaxImages.map((image, index) => {
        const y = useTransform(smoothScrollY, [0, 1], [0, -200 * image.speed])
        const opacity = useTransform(smoothScrollY, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
        const scale = useTransform(smoothScrollY, [0, 0.5, 1], [0.8, 1, 1.1])
        const rotate = useTransform(smoothScrollY, [0, 1], [0, 180 * image.speed])
        const x = useTransform(smoothScrollY, [0, 1], [0, 50 * (index % 2 === 0 ? 1 : -1)])

        return (
          <motion.div
            key={image.id}
            className={`absolute ${image.position} ${image.size} z-10`}
            style={{ y, opacity, scale, rotate, x }}
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: 10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative group cursor-pointer">
              <Image
                src={image.src}
                alt={`Sakura Ordinal #${image.id}`}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-sakura-500/20"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sakura-500/20 to-cherry-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-xs sm:text-sm font-bold drop-shadow-lg">#{image.id}</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sakura-400/30 to-cherry-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10 scale-110" />
            </div>
          </motion.div>
        )
      })}

      {/* Additional floating elements for depth */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-sakura-200/20 to-cherry-200/20 rounded-full blur-2xl"
        style={{
          y: useTransform(smoothScrollY, [0, 1], [0, -100]),
          scale: useTransform(smoothScrollY, [0, 1], [1, 1.8]),
          opacity: useTransform(smoothScrollY, [0, 0.5, 1], [0.3, 0.6, 0.2])
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-pink-200/15 to-rose-200/15 rounded-full blur-xl"
        style={{
          y: useTransform(smoothScrollY, [0, 1], [0, -60]),
          scale: useTransform(smoothScrollY, [0, 1], [1, 1.5]),
          opacity: useTransform(smoothScrollY, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.4, 0.1])
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-rose-200/10 to-pink-200/10 rounded-full blur-lg"
        style={{
          y: useTransform(smoothScrollY, [0, 1], [0, -80]),
          scale: useTransform(smoothScrollY, [0, 1], [1, 1.3]),
          opacity: useTransform(smoothScrollY, [0, 0.4, 0.8, 1], [0.1, 0.3, 0.2, 0])
        }}
      />

      {/* Content overlay */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/70 dark:from-dark-900/90 dark:via-transparent dark:to-dark-900/70 pointer-events-none z-10" />
    </div>
  )
}

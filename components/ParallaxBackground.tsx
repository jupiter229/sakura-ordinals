'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const parallaxImages = [
  { id: 1, src: '/assets/sakura_001.png', alt: 'Sakura Ordinal #1', speed: 0.5, size: 'w-16 h-16', position: 'top-20 left-10' },
  { id: 25, src: '/assets/sakura_025.png', alt: 'Sakura Ordinal #25', speed: 0.3, size: 'w-20 h-20', position: 'top-32 right-16' },
  { id: 50, src: '/assets/sakura_050.png', alt: 'Sakura Ordinal #50', speed: 0.7, size: 'w-14 h-14', position: 'top-48 left-1/4' },
  { id: 75, src: '/assets/sakura_075.png', alt: 'Sakura Ordinal #75', speed: 0.4, size: 'w-18 h-18', position: 'top-64 right-1/3' },
  { id: 100, src: '/assets/sakura_100.png', alt: 'Sakura Ordinal #100', speed: 0.6, size: 'w-16 h-16', position: 'top-80 left-1/2' },
  { id: 125, src: '/assets/sakura_125.png', alt: 'Sakura Ordinal #125', speed: 0.2, size: 'w-22 h-22', position: 'top-96 right-1/4' },
  { id: 150, src: '/assets/sakura_150.png', alt: 'Sakura Ordinal #150', speed: 0.8, size: 'w-12 h-12', position: 'top-32 left-3/4' },
  { id: 175, src: '/assets/sakura_175.png', alt: 'Sakura Ordinal #175', speed: 0.5, size: 'w-20 h-20', position: 'top-56 right-10' },
  { id: 200, src: '/assets/sakura_200.png', alt: 'Sakura Ordinal #200', speed: 0.3, size: 'w-16 h-16', position: 'top-72 left-1/6' },
  { id: 250, src: '/assets/sakura_250.png', alt: 'Sakura Ordinal #250', speed: 0.6, size: 'w-18 h-18', position: 'top-40 right-1/2' },
  { id: 300, src: '/assets/sakura_300.png', alt: 'Sakura Ordinal #300', speed: 0.4, size: 'w-14 h-14', position: 'top-88 left-2/3' },
  { id: 333, src: '/assets/sakura_333.png', alt: 'Sakura Ordinal #333', speed: 0.7, size: 'w-20 h-20', position: 'top-24 right-1/6' },
  { id: 350, src: '/assets/sakura_350.png', alt: 'Sakura Ordinal #350', speed: 0.5, size: 'w-16 h-16', position: 'top-60 left-1/3' },
  { id: 400, src: '/assets/sakura_400.png', alt: 'Sakura Ordinal #400', speed: 0.3, size: 'w-18 h-18', position: 'top-76 right-2/3' },
  { id: 450, src: '/assets/sakura_450.png', alt: 'Sakura Ordinal #450', speed: 0.6, size: 'w-14 h-14', position: 'top-44 left-1/5' },
  { id: 500, src: '/assets/sakura_500.png', alt: 'Sakura Ordinal #500', speed: 0.4, size: 'w-22 h-22', position: 'top-68 right-1/5' },
  { id: 600, src: '/assets/sakura_600.png', alt: 'Sakura Ordinal #600', speed: 0.8, size: 'w-12 h-12', position: 'top-52 left-4/5' },
  { id: 666, src: '/assets/sakura_666.png', alt: 'Sakura Ordinal #666', speed: 0.2, size: 'w-24 h-24', position: 'top-36 right-1/3' },
]

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50" />
      
      {/* Floating Sakura petals */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute sakura-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}

      {/* Parallax Sakura Ordinals */}
      {parallaxImages.map((image, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, -100 * image.speed])
        const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
        const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2])
        const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * image.speed])

        return (
          <motion.div
            key={image.id}
            className={`absolute ${image.position} ${image.size} z-10`}
            style={{ y, opacity, scale, rotate }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative group cursor-pointer">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-bold">#{image.id}</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sakura-400/20 to-cherry-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </div>
          </motion.div>
        )
      })}

      {/* Additional floating elements for depth */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-to-r from-sakura-200/30 to-cherry-200/30 rounded-full blur-xl"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-lg"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.3])
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60 pointer-events-none" />
    </div>
  )
}

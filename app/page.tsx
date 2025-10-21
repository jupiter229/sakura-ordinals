'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight, 
  Star,
  CheckCircle,
  ExternalLink,
  Calendar,
  Target,
  Rocket
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Gallery from '../components/Gallery'

// Sakura petal component for background animation
const SakuraPetal = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="sakura-petal"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
  />
)

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Animated Sakura Petals */}
      {[...Array(20)].map((_, i) => (
        <SakuraPetal key={i} delay={i * 0.5} />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-sakura-500 to-cherry-500 rounded-full"></div>
              <span className="text-xl font-bold gradient-text">Sakura Ordinals</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#about" className="text-gray-600 hover:text-sakura-500 transition-colors">About</a>
              <a href="#utilities" className="text-gray-600 hover:text-sakura-500 transition-colors">Utilities</a>
              <a href="#gallery" className="text-gray-600 hover:text-sakura-500 transition-colors">Gallery</a>
              <a href="#roadmap" className="text-gray-600 hover:text-sakura-500 transition-colors">Roadmap</a>
              <a href="#launch" className="text-gray-600 hover:text-sakura-500 transition-colors">Launch</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-sakura-100 text-sakura-700 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                The First Utility-Focused Bitcoin Ordinals Collection
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Sakura Ordinals</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
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
              <button className="btn-primary text-lg px-10 py-4">
                <Heart className="w-5 h-5 mr-2" />
                Join the Waitlist
              </button>
              <button className="btn-secondary text-lg px-10 py-4">
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
                <div className="text-3xl font-bold gradient-text mb-2">999</div>
                <div className="text-gray-600">Unique Ordinals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">Real</div>
                <div className="text-gray-600">Utility & Use Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">Web3</div>
                <div className="text-gray-600">Dating Platform</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Current State of <span className="gradient-text">Ordinals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most Bitcoin Ordinals today are limited to simple PFPs and pixel art due to high inscription fees and lack of utility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-red-600">Current Limitations</h3>
              <div className="space-y-4">
                {[
                  "High inscription fees limit creativity",
                  "Mostly PFP and pixel art collections",
                  "No real utility or use cases",
                  "Poor trading experience on Bitcoin network",
                  "Slow transaction speeds"
                ].map((limitation, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">{limitation}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-sakura-50 to-cherry-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-sakura-600">Our Solution</h3>
              <div className="space-y-4">
                {[
                  "Real utility through web3 dating platform",
                  "ERC-721 vault system for smooth trading",
                  "Actual use cases beyond just collecting",
                  "Community-driven development",
                  "Revolutionary dating experience"
                ].map((solution, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Utilities Section */}
      <section id="utilities" className="section-padding bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real <span className="gradient-text">Utilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Sakura Ordinal isn't just a collectible - it's your key to a revolutionary web3 dating experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Web3 Dating Platform",
                description: "Connect with other Sakura holders in a decentralized dating ecosystem built on blockchain technology.",
                features: ["Profile verification", "Secure messaging", "Community events"]
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Exclusive Community",
                description: "Access to a private community of like-minded individuals who value both technology and meaningful connections.",
                features: ["Private Discord", "Exclusive events", "Networking opportunities"]
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "ERC-721 Vault System",
                description: "Trade your Ordinals seamlessly through our Ethereum-based vault system for better liquidity and user experience.",
                features: ["Easy trading", "Better liquidity", "Lower fees"]
              }
            ].map((utility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="text-sakura-500 mb-4">{utility.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{utility.title}</h3>
                <p className="text-gray-600 mb-6">{utility.description}</p>
                <ul className="space-y-2">
                  {utility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Roadmap Section */}
      <section id="roadmap" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Development <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey from launch to a fully functional web3 dating platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Collection Launch",
                  description: "Launch 999 Sakura Ordinals on Magic Eden Launchpad",
                  status: "Current",
                  features: ["Magic Eden integration", "Community building", "Initial marketing"]
                },
                {
                  phase: "Phase 2",
                  title: "Community Platform",
                  description: "Build exclusive community features and Discord integration",
                  status: "Q2 2024",
                  features: ["Private Discord", "Holder verification", "Community events"]
                },
                {
                  phase: "Phase 3",
                  title: "Dating Platform MVP",
                  description: "Launch the core web3 dating platform with basic features",
                  status: "Q3 2024",
                  features: ["Profile creation", "Matching system", "Secure messaging"]
                },
                {
                  phase: "Phase 4",
                  title: "Advanced Features",
                  description: "Add advanced dating features and mobile app",
                  status: "Q4 2024",
                  features: ["Mobile app", "Video calls", "Advanced matching"]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-sakura-500 to-cherry-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                      {phase.phase}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-sakura-100 to-cherry-100 rounded-full flex items-center justify-center">
                      <Rocket className="w-16 h-16 text-sakura-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Launch Section */}
      <section id="launch" className="section-padding bg-gradient-to-br from-sakura-500 to-cherry-500 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join the <span className="text-yellow-300">Revolution</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the first Bitcoin Ordinals collection with real utility. 
              Your Sakura Ordinal is more than art - it's your gateway to the future of web3 dating.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Collection Details</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span>Total Supply:</span>
                    <span className="font-semibold">999</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform:</span>
                    <span className="font-semibold">Magic Eden</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Launch:</span>
                    <span className="font-semibold">Coming Soon</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">What You Get</h3>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Unique Sakura Ordinal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Dating Platform Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Exclusive Community</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sakura-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                <ExternalLink className="w-5 h-5 mr-2 inline" />
                View on Magic Eden
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-sakura-600 font-semibold py-4 px-8 rounded-full transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2 inline" />
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-sakura-500 to-cherry-500 rounded-full"></div>
              <span className="text-xl font-bold">Sakura Ordinals</span>
            </div>
            <p className="text-gray-400 mb-4">
              The first Bitcoin Ordinals collection with real utility
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Magic Eden</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

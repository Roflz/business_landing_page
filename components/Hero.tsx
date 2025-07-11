'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { heroContent } from '../site.config'
import ImageWithEffects from './ImageWithEffects'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative w-full overflow-hidden flex items-center justify-center pt-16 min-h-[60vh] md:min-h-[70vh]">
      {/* Full-width background image with effects */}
      <div className="absolute inset-0 -z-10">
        <ImageWithEffects {...heroContent.image} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
          >
            <span className="gradient-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {heroContent.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-100/90 font-medium drop-shadow"
          >
            {heroContent.subheadline}
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={heroContent.ctaLink}
              className="btn-primary flex items-center gap-2 px-8 py-3 text-lg"
            >
              {heroContent.ctaText}
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary flex items-center gap-2 px-8 py-3 text-lg"
            >
              View Services
            </button>
          </motion.div>

          {/* Business Stats / Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center items-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-gray-100/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-Star</div>
              <div className="text-sm text-gray-100/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Fast</div>
              <div className="text-sm text-gray-100/80">Turnaround</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm border border-gray-200 dark:border-dark-700"
        >
          <ChevronDown size={24} className="text-gray-600 dark:text-gray-300" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 
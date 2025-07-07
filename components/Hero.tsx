'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900 -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-600 dark:text-primary-400 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white"
          >
            <span className="gradient-text">Your Name</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
          >
            Software Developer & Full-Stack Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I build exceptional digital experiences that combine beautiful design with powerful functionality. 
            Passionate about creating innovative solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2 px-8 py-3 text-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary flex items-center gap-2 px-8 py-3 text-lg"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="btn-secondary flex items-center gap-2 px-8 py-3 text-lg">
              <Download size={20} />
              Download CV
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center items-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
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
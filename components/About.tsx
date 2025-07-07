'use client'

import { motion } from 'framer-motion'
import { Users, Award, Globe, Briefcase } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            About <span className="gradient-text">Our Business</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering quality digital solutions to help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Placeholder Business/Team Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-primary p-1 flex items-center justify-center">
                <Users size={120} className="text-gray-200 dark:text-dark-700" />
              </div>
            </div>

            {/* Business Highlights */}
            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experienced</p>
                    <p className="font-medium text-dark-900 dark:text-white">Professional Team</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Global Reach</p>
                    <p className="font-medium text-dark-900 dark:text-white">Clients Worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fast Turnaround</p>
                    <p className="font-medium text-dark-900 dark:text-white">Reliable Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">5-Star Rated</p>
                    <p className="font-medium text-dark-900 dark:text-white">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission and Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Our mission is to empower businesses with modern, effective digital solutions that drive real results. We believe in building long-term partnerships and delivering measurable value to every client.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                Company Info
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-primary" />
                  <span className="text-dark-900 dark:text-white font-medium">Serving clients worldwide since 2020</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  <span className="text-dark-900 dark:text-white font-medium">Remote & Flexible</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  <span className="text-dark-900 dark:text-white font-medium">100+ Projects Delivered</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <button className="btn-primary flex items-center gap-2">
                <Briefcase size={20} />
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone, Globe } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Your Full Name' },
    { icon: MapPin, label: 'Location', value: 'City, Country' },
    { icon: Calendar, label: 'Birthday', value: 'January 1, 1990' },
    { icon: Mail, label: 'Email', value: 'your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Globe, label: 'Website', value: 'www.yourwebsite.com' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and understand my journey in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                  <User size={120} className="text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">5+</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <info.icon size={20} className="text-primary-600 dark:text-primary-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-medium text-dark-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate software developer with over 5 years of experience creating 
                innovative digital solutions. I specialize in full-stack development, focusing 
                on building scalable web applications and intuitive user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My journey in technology began with a curiosity about how things work, which 
                evolved into a deep passion for creating software that solves real-world problems. 
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest industry trends and best practices.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                What I Do
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-dark-900 dark:text-white">Frontend Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, TypeScript, Next.js, Tailwind CSS
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-dark-900 dark:text-white">Backend Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Node.js, Python, PostgreSQL, MongoDB
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-dark-900 dark:text-white">Mobile Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React Native, Flutter, iOS, Android
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-dark-900 dark:text-white">DevOps & Tools</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Docker, AWS, Git, CI/CD
                  </p>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="btn-primary flex items-center gap-2">
                <User size={20} />
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
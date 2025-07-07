'use client'

import { motion } from 'framer-motion'
import { Search, ClipboardList, Layout, MessageCircle, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery & Consultation',
    description: 'We discuss your goals and requirements to understand your business needs.'
  },
  {
    icon: ClipboardList,
    title: 'Planning & Strategy',
    description: 'We create a tailored plan and timeline for your project.'
  },
  {
    icon: Layout,
    title: 'Design & Development',
    description: 'We bring your vision to life with modern design and robust development.'
  },
  {
    icon: MessageCircle,
    title: 'Review & Feedback',
    description: 'You review the work and provide feedback for revisions.'
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We launch your project and provide ongoing support as needed.'
  }
]

const Process = () => {
  return (
    <section id="process" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A simple, transparent workflow for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <step.icon size={40} className="mb-4 text-primary" />
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {step.description}
              </p>
              <div className="text-sm text-gray-400 dark:text-gray-500">Step {idx + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process 
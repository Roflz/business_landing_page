'use client'

import { motion } from 'framer-motion'
import { Code, PenTool, ShoppingCart, TrendingUp, FileText, LifeBuoy } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Modern, responsive websites tailored to your business needs.'
  },
  {
    icon: PenTool,
    title: 'Branding & Logo Design',
    description: 'Professional branding and logo creation to make your business stand out.'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Online stores with secure payments and easy management.'
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    description: 'Boost your online presence and attract more customers.'
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Engaging copy, blog posts, and marketing materials.'
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support & Maintenance',
    description: 'Reliable updates, troubleshooting, and technical support.'
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Solutions to help your business grow and succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <service.icon size={40} className="mb-4 text-primary" />
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="btn-primary flex items-center gap-2 mx-auto">
            Get a Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 
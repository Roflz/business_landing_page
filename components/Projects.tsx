'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const caseStudies = [
    {
      id: 1,
      title: 'Website Redesign for Local Bakery',
      description: 'Transformed an outdated site into a modern, mobile-friendly experience, increasing online orders by 40%.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      category: 'web',
      results: 'Online orders up 40%'
    },
    {
      id: 2,
      title: 'E-Commerce Launch for Retailer',
      description: 'Built a custom online store with secure payments and inventory management.',
      image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?w=600&h=400&fit=crop',
      category: 'web',
      results: 'Launched in 2 weeks'
    },
    {
      id: 3,
      title: 'Branding & Logo for Startup',
      description: 'Developed a unique brand identity and logo, helping the client stand out in a crowded market.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
      category: 'branding',
      results: 'Brand recognition boost'
    },
    {
      id: 4,
      title: 'SEO Boost for Consultant',
      description: 'Implemented SEO best practices, resulting in a 3x increase in organic traffic.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop',
      category: 'seo',
      results: '3x organic traffic'
    },
    {
      id: 5,
      title: 'Content Strategy for Agency',
      description: 'Created a content plan and blog series that increased engagement and leads.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      category: 'content',
      results: 'Leads up 25%'
    },
    {
      id: 6,
      title: 'Ongoing Support for SaaS',
      description: 'Provided reliable updates, troubleshooting, and technical support for a growing SaaS business.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      category: 'support',
      results: '99.9% uptime'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Websites' },
    { id: 'branding', label: 'Branding' },
    { id: 'seo', label: 'SEO' },
    { id: 'content', label: 'Content' },
    { id: 'support', label: 'Support' }
  ]

  const filteredStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Recent <span className="gradient-text">Client Work</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results for real businesses—see how we help clients succeed.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary transition-colors duration-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              {/* Case Study Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-dark-900" />
                  </a>
                </div>
                {study.results && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.results}
                  </div>
                )}
              </div>

              {/* Case Study Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary flex items-center gap-2 mx-auto">
            <Eye size={20} />
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 
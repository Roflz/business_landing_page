'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Globe, Smartphone } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: true
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning that provides customer support and answers queries in real-time.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data, interactive maps, and detailed forecasts for multiple locations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Vuetify'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', label: 'AI/ML', icon: Code }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and see how I bring ideas to life through code
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
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-600'
              }`}
            >
              <filter.icon size={20} />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-dark-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors duration-200"
                  >
                    <Github size={20} className="text-dark-900" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm"
                  >
                    <Eye size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary flex items-center gap-2 mx-auto">
            <Github size={20} />
            View More on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 
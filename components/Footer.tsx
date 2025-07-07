'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Your Name
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              A passionate software developer dedicated to creating innovative digital solutions 
              that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'GitHub', url: 'https://github.com/yourusername' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
                { name: 'Twitter', url: 'https://twitter.com/yourusername' },
                { name: 'Dribbble', url: 'https://dribbble.com/yourusername' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>your.email@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Your Name. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 
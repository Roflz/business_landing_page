'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client contact info
const ContactSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="contact" className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
              <span className="gradient-text">Contact Us</span>
            </h2>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 p-8"
            onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}
          >
            <input type="text" placeholder="[Your Name]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="email" placeholder="[Your Email]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <textarea placeholder="[Your Message]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} required />
            <button
              type="submit"
              className="w-full py-3 text-white rounded font-semibold hover:opacity-90 transition"
              style={{ background: 'var(--theme-primary)' }}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="contact" className="py-16 bg-white animate-fade-in">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-primary)' }}>Contact Us</h2>
        <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
          <input type="text" placeholder="[Your Name]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="email" placeholder="[Your Email]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <textarea placeholder="[Your Message]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} required />
          <button
            type="submit"
            className="w-full py-3 text-white rounded font-semibold hover:opacity-90 transition"
            style={{ background: 'var(--theme-primary)' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default ContactSection; 
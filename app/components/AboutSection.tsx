'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client about info
const AboutSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
              About <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              [Brief description about your business or client. Example: 'We are a passionate team dedicated to helping businesses grow with modern, effective web solutions.']
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-900 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 p-8 mx-auto max-w-3xl"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              [Add more details about your mission, values, or experience here.]
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="about" className="py-16 bg-white border-b border-gray-100 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--theme-primary)' }}>About Us</h2>
        <p className="text-base sm:text-lg mb-4" style={{ color: 'var(--theme-secondary)' }}>[Brief description about your business or client. Example: 'We are a passionate team dedicated to helping businesses grow with modern, effective web solutions.']</p>
        <p className="text-gray-500">[Add more details about your mission, values, or experience here.]</p>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default AboutSection; 
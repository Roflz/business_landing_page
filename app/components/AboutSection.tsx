'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client about info
const AboutSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="about" className="py-20 bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)' }}>
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
    <section id="about" className="py-20 bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--theme-primary)' }}>About Us</h2>
        <p className="text-base sm:text-lg mb-4" style={{ color: 'var(--theme-secondary)' }}>[Brief description about your business or client. Example: 'We are a passionate team dedicated to helping businesses grow with modern, effective web solutions.']</p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Example: Add team members or company highlights here */}
          <div className="p-6 rounded-xl shadow bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-primary)' }}>
            <span className="block text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>🌟</span>
            <span className="block font-semibold">10+ Years Experience</span>
          </div>
          <div className="p-6 rounded-xl shadow bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-primary)' }}>
            <span className="block text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>🚀</span>
            <span className="block font-semibold">100+ Projects Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default AboutSection; 
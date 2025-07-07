'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client features/benefits
const FeaturesSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="features" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform"
              >
                <span className="text-4xl mb-3" style={{ color: 'var(--theme-primary)' }}>
                  {i === 1 ? '🚀' : i === 2 ? '🎨' : '💡'}
                </span>
                <h3 className="font-semibold text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Feature {i}]</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">[Describe the feature or benefit here.]</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="features" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-primary)' }}>Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <span className="text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>🚀</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Feature One]</h3>
            <p className="text-gray-600 text-center">[Describe the first feature or benefit here.]</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <span className="text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>🎨</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Feature Two]</h3>
            <p className="text-gray-600 text-center">[Describe the second feature or benefit here.]</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <span className="text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>💡</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Feature Three]</h3>
            <p className="text-gray-600 text-center">[Describe the third feature or benefit here.]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default FeaturesSection; 
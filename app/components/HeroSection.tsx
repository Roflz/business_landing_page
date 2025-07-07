'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client name and tagline
const HeroSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
        {/* Modern: Gradient BG + Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900 -z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-600 dark:text-primary-400 font-medium"
            >
              Welcome to
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white"
            >
              <span className="gradient-text">[Your Business Name]</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
            >
              [Your business tagline or a short description goes here.]
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 px-8 py-3 text-lg"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="hero" className="py-20 flex flex-col items-center justify-center text-center animate-fade-in">
      <h1
        className="text-4xl sm:text-5xl font-extrabold mb-4 animate-pulse"
        style={{ color: 'var(--theme-primary)' }}
      >
        [Your Business Name]
      </h1>
      <p className="text-lg sm:text-xl mb-6 max-w-xl">[Your business tagline or a short description goes here. Example: 'We help you grow online with beautiful, modern websites.']</p>
      <a
        href="#contact"
        className="px-8 py-3 text-white rounded-full font-semibold shadow hover:opacity-90 transition"
        style={{ background: 'var(--theme-primary)' }}
      >
        Contact Us
      </a>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default HeroSection; 
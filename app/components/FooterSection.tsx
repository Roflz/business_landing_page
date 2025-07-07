'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client footer info
const FooterSection = () => {
  const { layoutStyle } = useTheme();
  const year = new Date().getFullYear();

  if (layoutStyle === 'modern') {
    return (
      <footer className="py-12 mt-8 bg-[color:var(--theme-secondary)]" style={{ color: 'var(--theme-text)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6"
          >
            <div className="text-2xl font-bold" style={{ color: 'var(--theme-primary)' }}>[Your Business Name]</div>
            <div className="flex gap-6 text-2xl">
              <a href="#" aria-label="Twitter" className="hover:opacity-80 transition" style={{ color: 'var(--theme-primary)' }}>🐦</a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition" style={{ color: 'var(--theme-primary)' }}>💼</a>
              <a href="#" aria-label="GitHub" className="hover:opacity-80 transition" style={{ color: 'var(--theme-primary)' }}>💻</a>
            </div>
            <div className="text-sm" style={{ color: 'var(--theme-muted)' }}>&copy; {year} [Your Business Name]. All rights reserved.</div>
          </motion.div>
        </div>
      </footer>
    );
  }

  // Classic style fallback
  return (
    <footer className="py-8 mt-8 animate-fade-in bg-[color:var(--theme-secondary)]" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>[Your Business Name]</div>
        <div className="flex gap-6 text-2xl">
          <a href="#" aria-label="Twitter" className="hover:opacity-80 transition" style={{ color: 'var(--theme-primary)' }}>🐦</a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition" style={{ color: 'var(--theme-primary)' }}>💼</a>
          <a href="#" aria-label="GitHub" className="hover:opacity-80 transition" style={{ color: 'var(--theme-primary)' }}>💻</a>
        </div>
        <div className="text-sm" style={{ color: 'var(--theme-muted)' }}>&copy; {year} [Your Business Name]. All rights reserved.</div>
      </div>
    </footer>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default FooterSection; 
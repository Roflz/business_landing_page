'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client call-to-action
const CTASection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="cta" className="py-20 bg-[color:var(--theme-secondary)] text-center" style={{ color: 'var(--theme-text)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: 'var(--theme-text)' }}>[Ready to grow your business?]</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--theme-muted)' }}>[Contact us today for a free consultation and see how we can help you succeed online.]</p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 font-bold rounded-full shadow-lg hover:opacity-90 transition text-[color:var(--theme-bg)]"
              style={{ background: 'var(--theme-primary)' }}
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="cta" className="py-16 bg-[color:var(--theme-secondary)] text-center animate-fade-in" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--theme-text)' }}>[Ready to grow your business?]</h2>
        <p className="text-base sm:text-lg mb-8" style={{ color: 'var(--theme-muted)' }}>[Contact us today for a free consultation and see how we can help you succeed online.]</p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 font-bold rounded-full shadow-lg hover:opacity-90 transition text-[color:var(--theme-bg)]"
          style={{ background: 'var(--theme-primary)' }}
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default CTASection; 
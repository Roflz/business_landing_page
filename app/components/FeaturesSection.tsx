'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client features/benefits
const FeaturesSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="features" className="py-20 bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
              Why <span style={{ color: 'var(--theme-primary)' }}>[Choose Us]</span>
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
                className="rounded-xl shadow-lg border p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform bg-[color:var(--theme-secondary)] dark:bg-[color:var(--theme-secondary)]"
                style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
              >
                <span className="text-4xl mb-3" style={{ color: 'var(--theme-primary)' }}>
                  {i === 1 ? '🚀' : i === 2 ? '🎨' : '💡'}
                </span>
                <h3 className="font-semibold text-xl mb-2" style={{ color: 'var(--theme-text)' }}>[Feature {i}]</h3>
                <p className="text-center" style={{ color: 'var(--theme-muted)' }}>[Describe the feature or benefit here.]</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="features" className="py-16 bg-[color:var(--theme-bg)] animate-fade-in" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-text)' }}>Why <span style={{ color: 'var(--theme-primary)' }}>Choose Us</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-[color:var(--theme-secondary)] rounded-lg shadow hover:shadow-lg transition" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-primary)' }}>
            <span className="text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>🚀</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-text)' }}>[Feature One]</h3>
            <p className="text-center" style={{ color: 'var(--theme-muted)' }}>[Describe the first feature or benefit here.]</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[color:var(--theme-secondary)] rounded-lg shadow hover:shadow-lg transition" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-primary)' }}>
            <span className="text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>🎨</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-text)' }}>[Feature Two]</h3>
            <p className="text-center" style={{ color: 'var(--theme-muted)' }}>[Describe the second feature or benefit here.]</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[color:var(--theme-secondary)] rounded-lg shadow hover:shadow-lg transition" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-primary)' }}>
            <span className="text-4xl mb-2" style={{ color: 'var(--theme-primary)' }}>💡</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-text)' }}>[Feature Three]</h3>
            <p className="text-center" style={{ color: 'var(--theme-muted)' }}>[Describe the third feature or benefit here.]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default FeaturesSection; 
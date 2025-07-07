'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client services
const ServicesSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="services" className="py-20 bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--theme-primary)' }}>
              Our <span>[Services]</span>
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
                className="rounded-xl shadow-lg border p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform bg-[color:var(--theme-bg)]"
                style={{ borderColor: 'var(--theme-primary)', color: 'var(--theme-text)' }}
              >
                <span className="text-4xl mb-3" style={{ color: 'var(--theme-primary)' }}>
                  {i === 1 ? '💻' : i === 2 ? '📱' : '🔍'}
                </span>
                <h3 className="font-semibold text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Service {i}]</h3>
                <p className="text-center" style={{ color: 'var(--theme-secondary)' }}>[Description of the service offered.]</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="services" className="py-16 bg-[color:var(--theme-bg)] animate-fade-in" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-primary)' }}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform bg-[color:var(--theme-bg)] flex flex-col items-center" style={{ borderColor: 'var(--theme-primary)', color: 'var(--theme-text)' }}>
            <span className="text-4xl mb-3" style={{ color: 'var(--theme-primary)' }}>💻</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Service One]</h3>
            <p className="text-center" style={{ color: 'var(--theme-secondary)' }}>[Description of the first service offered.]</p>
          </div>
          <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform bg-[color:var(--theme-bg)] flex flex-col items-center" style={{ borderColor: 'var(--theme-primary)', color: 'var(--theme-text)' }}>
            <span className="text-4xl mb-3" style={{ color: 'var(--theme-primary)' }}>📱</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Service Two]</h3>
            <p className="text-center" style={{ color: 'var(--theme-secondary)' }}>[Description of the second service offered.]</p>
          </div>
          <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform bg-[color:var(--theme-bg)] flex flex-col items-center" style={{ borderColor: 'var(--theme-primary)', color: 'var(--theme-text)' }}>
            <span className="text-4xl mb-3" style={{ color: 'var(--theme-primary)' }}>🔍</span>
            <h3 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: 'var(--theme-primary)' }}>[Service Three]</h3>
            <p className="text-center" style={{ color: 'var(--theme-secondary)' }}>[Description of the third service offered.]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default ServicesSection; 
'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="testimonials" className="py-20 bg-blue-50 dark:bg-dark-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
              <span className="gradient-text">Testimonials</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1,2].map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-lg flex flex-col items-center"
              >
                <img src={i === 1 ? 'https://randomuser.me/api/portraits/men/32.jpg' : 'https://randomuser.me/api/portraits/women/44.jpg'} alt="Client" className="w-16 h-16 rounded-full mb-4 border-4" style={{ borderColor: 'var(--theme-secondary)' }} />
                <p className="italic mb-2 text-center" style={{ color: 'var(--theme-secondary)' }}>
                  {i === 1 ? '"[This business transformed our workflow! Highly recommended.]"' : '"[Professional, responsive, and effective. Will work with them again.]"'}
                </p>
                <span className="block font-semibold" style={{ color: 'var(--theme-primary)' }}>{i === 1 ? '- [Happy Client]' : '- [Satisfied Customer]'}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="testimonials" className="py-16 bg-blue-50 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-primary)' }}>Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center animate-fade-in">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-16 h-16 rounded-full mb-4 border-4" style={{ borderColor: 'var(--theme-secondary)' }} />
            <p className="italic mb-2 text-center" style={{ color: 'var(--theme-secondary)' }}>
              "[This business transformed our workflow! Highly recommended.]"
            </p>
            <span className="block font-semibold" style={{ color: 'var(--theme-primary)' }}>- [Happy Client]</span>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center animate-fade-in delay-150">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-16 h-16 rounded-full mb-4 border-4" style={{ borderColor: 'var(--theme-secondary)' }} />
            <p className="italic mb-2 text-center" style={{ color: 'var(--theme-secondary)' }}>
              "[Professional, responsive, and effective. Will work with them again.]"
            </p>
            <span className="block font-semibold" style={{ color: 'var(--theme-primary)' }}>- [Satisfied Customer]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
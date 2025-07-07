'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="testimonials" className="py-20 bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
              <span style={{ color: 'var(--theme-primary)' }}>[Testimonials]</span>
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
                className="p-8 rounded-2xl shadow-lg flex flex-col items-center bg-[color:var(--theme-secondary)] dark:bg-[color:var(--theme-secondary)]"
                style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-border)' }}
              >
                <img src={i === 1 ? 'https://randomuser.me/api/portraits/men/32.jpg' : 'https://randomuser.me/api/portraits/women/44.jpg'} alt="Client" className="w-16 h-16 rounded-full mb-4 border-4" style={{ borderColor: 'var(--theme-primary)' }} />
                <p className="italic mb-2 text-center" style={{ color: 'var(--theme-muted)' }}>
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
    <section id="testimonials" className="py-16 bg-[color:var(--theme-bg)] animate-fade-in" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-text)' }}><span style={{ color: 'var(--theme-primary)' }}>Testimonials</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center animate-fade-in bg-[color:var(--theme-secondary)]" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-border)' }}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-16 h-16 rounded-full mb-4 border-4" style={{ borderColor: 'var(--theme-primary)' }} />
            <p className="italic mb-2 text-center" style={{ color: 'var(--theme-muted)' }}>
              "[This business transformed our workflow! Highly recommended.]"
            </p>
            <span className="block font-semibold" style={{ color: 'var(--theme-primary)' }}>- [Happy Client]</span>
          </div>
          <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center animate-fade-in delay-150 bg-[color:var(--theme-secondary)]" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-border)' }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-16 h-16 rounded-full mb-4 border-4" style={{ borderColor: 'var(--theme-primary)' }} />
            <p className="italic mb-2 text-center" style={{ color: 'var(--theme-muted)' }}>
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
'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client portfolio/case studies
const PortfolioSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="portfolio" className="py-20 bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
              Our <span style={{ color: 'var(--theme-primary)' }}>[Work]</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1,2,3].map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform flex flex-col bg-[color:var(--theme-secondary)] dark:bg-[color:var(--theme-secondary)]"
                style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-border)' }}
              >
                <div className="h-40 flex items-center justify-center" style={{ background: 'var(--theme-primary)', color: 'var(--theme-bg)' }}>
                  <span className="text-5xl">{i === 1 ? '🌐' : i === 2 ? '🏢' : '📸'}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--theme-text)' }}>[Project {i}]</h3>
                  <p className="mb-4 flex-1" style={{ color: 'var(--theme-muted)' }}>[Short description of the project.]</p>
                  <a href="#" className="font-medium hover:underline" style={{ color: 'var(--theme-primary)' }}>View Project</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="portfolio" className="py-16 bg-[color:var(--theme-bg)] animate-fade-in" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-text)' }}>Our <span style={{ color: 'var(--theme-primary)' }}>Work</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Portfolio Card 1 */}
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform flex flex-col bg-[color:var(--theme-secondary)]" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-border)' }}>
            <div className="h-40 flex items-center justify-center" style={{ background: 'var(--theme-primary)', color: 'var(--theme-bg)' }}>
              <span className="text-5xl">🌐</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--theme-text)' }}>[Project One]</h3>
              <p className="mb-4 flex-1" style={{ color: 'var(--theme-muted)' }}>[Short description of the first project. Example: 'A modern website for a tech startup.']</p>
              <a href="#" className="font-medium hover:underline" style={{ color: 'var(--theme-primary)' }}>View Project</a>
            </div>
          </div>
          {/* Portfolio Card 2 */}
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform flex flex-col bg-[color:var(--theme-secondary)]" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-border)' }}>
            <div className="h-40 flex items-center justify-center" style={{ background: 'var(--theme-primary)', color: 'var(--theme-bg)' }}>
              <span className="text-5xl">🏢</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--theme-text)' }}>[Project Two]</h3>
              <p className="mb-4 flex-1" style={{ color: 'var(--theme-muted)' }}>[Short description of the second project. Example: 'A business landing page for a local company.']</p>
              <a href="#" className="font-medium hover:underline" style={{ color: 'var(--theme-primary)' }}>View Project</a>
            </div>
          </div>
          {/* Portfolio Card 3 */}
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform flex flex-col bg-[color:var(--theme-secondary)]" style={{ color: 'var(--theme-text)', border: '1px solid var(--theme-border)' }}>
            <div className="h-40 flex items-center justify-center" style={{ background: 'var(--theme-primary)', color: 'var(--theme-bg)' }}>
              <span className="text-5xl">📸</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--theme-text)' }}>[Project Three]</h3>
              <p className="mb-4 flex-1" style={{ color: 'var(--theme-muted)' }}>[Short description of the third project. Example: 'A portfolio site for a creative professional.']</p>
              <a href="#" className="font-medium hover:underline" style={{ color: 'var(--theme-primary)' }}>View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default PortfolioSection; 
'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// TODO: Replace with your business or client contact info
const ContactSection = () => {
  const { layoutStyle } = useTheme();

  if (layoutStyle === 'modern') {
    return (
      <section id="contact" className="py-20 bg-[color:var(--theme-bg)]" style={{ color: 'var(--theme-text)' }}>
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
              <span style={{ color: 'var(--theme-primary)' }}>[Contact Us]</span>
            </h2>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 bg-[color:var(--theme-secondary)] rounded-xl shadow-lg border p-8"
            style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
            onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}
          >
            <input type="text" placeholder="[Your Name]" className="w-full p-3 border rounded focus:outline-none focus:ring-2" style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-bg)', color: 'var(--theme-text)' }} required />
            <input type="email" placeholder="[Your Email]" className="w-full p-3 border rounded focus:outline-none focus:ring-2" style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-bg)', color: 'var(--theme-text)' }} required />
            <textarea placeholder="[Your Message]" className="w-full p-3 border rounded focus:outline-none focus:ring-2" style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-bg)', color: 'var(--theme-text)' }} rows={4} required />
            <button
              type="submit"
              className="w-full py-3 rounded font-semibold hover:opacity-90 transition text-[color:var(--theme-bg)]"
              style={{ background: 'var(--theme-primary)' }}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    );
  }

  // Classic style fallback
  return (
    <section id="contact" className="py-16 bg-[color:var(--theme-bg)] animate-fade-in" style={{ color: 'var(--theme-text)' }}>
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--theme-text)' }}><span style={{ color: 'var(--theme-primary)' }}>Contact Us</span></h2>
        <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
          <input type="text" placeholder="[Your Name]" className="w-full p-3 border rounded focus:outline-none focus:ring-2" style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-bg)', color: 'var(--theme-text)' }} required />
          <input type="email" placeholder="[Your Email]" className="w-full p-3 border rounded focus:outline-none focus:ring-2" style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-bg)', color: 'var(--theme-text)' }} required />
          <textarea placeholder="[Your Message]" className="w-full p-3 border rounded focus:outline-none focus:ring-2" style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-bg)', color: 'var(--theme-text)' }} rows={4} required />
          <button
            type="submit"
            className="w-full py-3 rounded font-semibold hover:opacity-90 transition text-[color:var(--theme-bg)]"
            style={{ background: 'var(--theme-primary)' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default ContactSection; 
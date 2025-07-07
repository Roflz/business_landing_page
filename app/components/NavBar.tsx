'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const themeOptions = [
  { name: 'Blue', value: 'theme-blue' },
  { name: 'Green', value: 'theme-green' },
];

const layoutOptions = [
  { name: 'Classic', value: 'classic' },
  { name: 'Modern', value: 'modern' },
];

export default function NavBar() {
  const { theme, setTheme, darkMode, setDarkMode, layoutStyle, setLayoutStyle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--theme-primary)' }}>[Your Business Name]</span>
        <ul className="flex gap-6 font-medium">
          <li><a href="#hero" className="transition-colors" style={{ color: 'var(--theme-primary)' }}>Home</a></li>
          <li><a href="#about" className="transition-colors" style={{ color: 'var(--theme-primary)' }}>About</a></li>
          <li><a href="#services" className="transition-colors" style={{ color: 'var(--theme-primary)' }}>Services</a></li>
          <li><a href="#features" className="transition-colors" style={{ color: 'var(--theme-primary)' }}>Features</a></li>
          <li><a href="#portfolio" className="transition-colors" style={{ color: 'var(--theme-primary)' }}>Portfolio</a></li>
          <li><a href="#testimonials" className="transition-colors" style={{ color: 'var(--theme-primary)' }}>Testimonials</a></li>
          <li><a href="#contact" className="transition-colors" style={{ color: 'var(--theme-primary)' }}>Contact</a></li>
        </ul>
        <div className="flex items-center gap-4 ml-6">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Color Theme Switcher */}
          <select
            className="px-2 py-1 rounded border border-gray-300 text-gray-700 bg-white focus:outline-none"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            aria-label="Switch color theme"
          >
            {themeOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.name}</option>
            ))}
          </select>
          {/* Layout Style Switcher */}
          <select
            className="px-2 py-1 rounded border border-gray-300 text-gray-700 bg-white focus:outline-none"
            value={layoutStyle}
            onChange={e => setLayoutStyle(e.target.value)}
            aria-label="Switch layout style"
          >
            {layoutOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.name}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
} 
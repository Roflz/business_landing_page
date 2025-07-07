'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';

const themeOptions = [
  { name: 'Blue', value: 'theme-blue' },
  { name: 'Green', value: 'theme-green' },
  { name: 'Dark', value: 'theme-dark' },
];

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-bold text-xl text-blue-700 tracking-tight">[Your Business Name]</span>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
          <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
        {/* Theme Switcher */}
        <select
          className="ml-6 px-2 py-1 rounded border border-gray-300 text-gray-700 bg-white focus:outline-none"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          aria-label="Switch color theme"
        >
          {themeOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.name}</option>
          ))}
        </select>
      </div>
    </nav>
  );
} 
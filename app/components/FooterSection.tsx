import React from 'react';

// TODO: Replace with your business or client footer info
const FooterSection = () => (
  <footer className="bg-blue-900 text-white py-8 mt-8 animate-fade-in">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-lg font-bold">[Your Business Name]</div>
      <div className="flex gap-6 text-2xl">
        <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition">🐦</a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-300 transition">💼</a>
        <a href="#" aria-label="GitHub" className="hover:text-blue-300 transition">💻</a>
      </div>
      <div className="text-sm text-blue-200">&copy; {new Date().getFullYear()} [Your Business Name]. All rights reserved.</div>
    </div>
  </footer>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default FooterSection; 
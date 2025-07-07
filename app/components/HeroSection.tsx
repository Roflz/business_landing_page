import React from 'react';

// TODO: Replace with your business or client name and tagline
const HeroSection = () => (
  <section id="hero" className="py-20 flex flex-col items-center justify-center text-center animate-fade-in">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-4 animate-pulse">[Your Business Name]</h1>
    <p className="text-lg sm:text-xl mb-6 max-w-xl">[Your business tagline or a short description goes here. Example: 'We help you grow online with beautiful, modern websites.']</p>
    <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">Contact Us</a>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default HeroSection; 
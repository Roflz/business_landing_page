import React from 'react';

// TODO: Replace with your business or client about info
const AboutSection = () => (
  <section id="about" className="py-16 bg-white border-b border-gray-100 animate-fade-in">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">About Us</h2>
      <p className="text-base sm:text-lg text-gray-700 mb-4">[Brief description about your business or client. Example: 'We are a passionate team dedicated to helping businesses grow with modern, effective web solutions.']</p>
      <p className="text-gray-500">[Add more details about your mission, values, or experience here.]</p>
    </div>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default AboutSection; 
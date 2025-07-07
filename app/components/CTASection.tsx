import React from 'react';

// TODO: Replace with your business or client call-to-action
const CTASection = () => (
  <section id="cta" className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center animate-fade-in">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">[Ready to grow your business?]</h2>
      <p className="text-base sm:text-lg mb-8">[Contact us today for a free consultation and see how we can help you succeed online.]</p>
      <a href="#contact" className="inline-block px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">Get Started</a>
    </div>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default CTASection; 
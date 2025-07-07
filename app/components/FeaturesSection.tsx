import React from 'react';

// TODO: Replace with your business or client features/benefits
const FeaturesSection = () => (
  <section id="features" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 animate-fade-in">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <span className="text-blue-600 text-4xl mb-2">🚀</span>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">[Feature One]</h3>
          <p className="text-gray-600 text-center">[Describe the first feature or benefit here.]</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <span className="text-blue-600 text-4xl mb-2">🎨</span>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">[Feature Two]</h3>
          <p className="text-gray-600 text-center">[Describe the second feature or benefit here.]</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <span className="text-blue-600 text-4xl mb-2">💡</span>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">[Feature Three]</h3>
          <p className="text-gray-600 text-center">[Describe the third feature or benefit here.]</p>
        </div>
      </div>
    </div>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default FeaturesSection; 
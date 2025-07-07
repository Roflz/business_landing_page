import React from 'react';

// TODO: Replace with your business or client services
const ServicesSection = () => (
  <section id="services" className="py-16 bg-white animate-fade-in">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform bg-gradient-to-br from-blue-50 to-white flex flex-col items-center">
          <span className="text-4xl mb-3 text-blue-500">💻</span>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">[Service One]</h3>
          <p className="text-gray-600 text-center">[Description of the first service offered.]</p>
        </div>
        <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform bg-gradient-to-br from-blue-50 to-white flex flex-col items-center">
          <span className="text-4xl mb-3 text-blue-500">📱</span>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">[Service Two]</h3>
          <p className="text-gray-600 text-center">[Description of the second service offered.]</p>
        </div>
        <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform bg-gradient-to-br from-blue-50 to-white flex flex-col items-center">
          <span className="text-4xl mb-3 text-blue-500">🔍</span>
          <h3 className="font-semibold text-lg sm:text-xl mb-2">[Service Three]</h3>
          <p className="text-gray-600 text-center">[Description of the third service offered.]</p>
        </div>
      </div>
    </div>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default ServicesSection; 
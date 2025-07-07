import React from 'react';

// TODO: Replace with your business or client testimonials (use demo/mock data)
const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 bg-blue-50 animate-fade-in">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center animate-fade-in">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-16 h-16 rounded-full mb-4 border-4 border-blue-100" />
          <p className="italic mb-2 text-gray-700 text-center">"[This business transformed our workflow! Highly recommended.]"</p>
          <span className="block font-semibold text-blue-600">- [Happy Client]</span>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center animate-fade-in delay-150">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-16 h-16 rounded-full mb-4 border-4 border-blue-100" />
          <p className="italic mb-2 text-gray-700 text-center">"[Professional, responsive, and effective. Will work with them again.]"</p>
          <span className="block font-semibold text-blue-600">- [Satisfied Customer]</span>
        </div>
      </div>
    </div>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default TestimonialsSection; 
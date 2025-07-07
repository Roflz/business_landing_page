import React from 'react';

// TODO: Replace with your business or client contact info
const ContactSection = () => (
  <section id="contact" className="py-16 bg-white animate-fade-in">
    <div className="max-w-xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700">Contact Us</h2>
      <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
        <input type="text" placeholder="[Your Name]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input type="email" placeholder="[Your Email]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <textarea placeholder="[Your Message]" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} required />
        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default ContactSection; 
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4 animate-pulse">Business Name</h1>
        <p className="text-xl mb-6 max-w-xl">Welcome to your modern business landing page. Grow your business with a beautiful, responsive, and SEO-friendly site.</p>
        <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">Contact Us</a>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Service One</h3>
              <p>Short description of the first service offered by the business.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Service Two</h3>
              <p>Short description of the second service offered by the business.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">Service Three</h3>
              <p>Short description of the third service offered by the business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50" id="testimonials">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-2">"This business transformed our workflow! Highly recommended."</p>
              <span className="block font-semibold">- Happy Client</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-2">"Professional, responsive, and effective. Will work with them again."</p>
              <span className="block font-semibold">- Satisfied Customer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded" rows={4} required />
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

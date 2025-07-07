import React from 'react';

// TODO: Replace with your business or client portfolio/case studies
const PortfolioSection = () => (
  <section id="portfolio" className="py-16 bg-blue-50 animate-fade-in">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Portfolio Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform flex flex-col">
          <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
            <span className="text-5xl">🌐</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">[Project One]</h3>
            <p className="text-gray-600 mb-4 flex-1">[Short description of the first project. Example: 'A modern website for a tech startup.']</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">View Project</a>
          </div>
        </div>
        {/* Portfolio Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform flex flex-col">
          <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
            <span className="text-5xl">🏢</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">[Project Two]</h3>
            <p className="text-gray-600 mb-4 flex-1">[Short description of the second project. Example: 'A business landing page for a local company.']</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">View Project</a>
          </div>
        </div>
        {/* Portfolio Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform flex flex-col">
          <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
            <span className="text-5xl">📸</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">[Project Three]</h3>
            <p className="text-gray-600 mb-4 flex-1">[Short description of the third project. Example: 'A portfolio site for a creative professional.']</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// You can add more animation classes or use a library like Framer Motion for advanced effects.
export default PortfolioSection; 
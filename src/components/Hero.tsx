import React from 'react';
import { ArrowRight, Download, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600 text-5xl md:text-7xl font-extrabold">A</span>dvancing{' '}
            <span className="text-blue-600 text-5xl md:text-7xl font-extrabold">S</span>olutions for{' '}
            <span className="text-blue-600 text-5xl md:text-7xl font-extrabold">C</span>ommunity{' '}
            <span className="text-blue-600 text-5xl md:text-7xl font-extrabold">E</span>mpowerment &{' '}
            <span className="text-blue-600 text-5xl md:text-7xl font-extrabold">N</span>onprofit{' '}
            <span className="text-blue-600 text-5xl md:text-7xl font-extrabold">D</span>evelopment
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            From Vision to Victory
          </p>
          
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering immigrant-led and community-based nonprofits with expert guidance, proven strategies, 
            and comprehensive resources to secure funding, build sustainable organizations, and create lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('resources')}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>Download Starter Guide</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Intro Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$1M+</div>
              <p className="text-gray-600">In grants secured for clients</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Years of experience</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$100M</div>
              <p className="text-gray-600">School referendum chaired</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
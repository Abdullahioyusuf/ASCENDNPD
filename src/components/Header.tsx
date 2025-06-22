import React, { useState } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              {/* Circular compass-style logo */}
              <div className="w-12 h-12 border-3 border-blue-600 rounded-full bg-white flex items-center justify-center relative">
                {/* Compass arrow pointing up */}
                <div className="relative">
                  <ChevronUp className="w-8 h-8 text-blue-600 font-bold stroke-[3]" />
                  {/* Small compass points */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ASCEND</h1>
              <p className="text-xs text-blue-600">Nonprofit Development</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Free Call
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Resources
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Book Free Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
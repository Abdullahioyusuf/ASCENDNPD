import React from 'react';
import { Download, BookOpen, DollarSign, Clock, Gift, FileText, Video, Star } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Free Starter Guide",
      format: "1-Page Quick Start PDF",
      price: "FREE",
      originalPrice: null,
      description: "Essential nonprofit basics to get you started immediately. Perfect introduction to nonprofit development with actionable steps.",
      features: [
        "Mission & vision development framework",
        "Board formation essentials", 
        "Initial funding strategies overview",
        "Legal structure guidance",
        "Immediate download access"
      ],
      popular: false,
      free: true,
      badge: "Most Popular"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Complete Starter Guide",
      format: "8-Page Comprehensive PDF",
      price: "$19",
      originalPrice: "$29",
      description: "Comprehensive nonprofit formation guide with detailed checklists, templates, and step-by-step instructions for success.",
      features: [
        "Detailed nonprofit formation roadmap",
        "Board structure & recruitment guide", 
        "Grant writing introduction & tips",
        "Community engagement strategies",
        "Financial planning templates"
      ],
      popular: false,
      free: false,
      badge: null
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Complete Development Guide",
      format: "30-Page Professional eBook",
      price: "$47",
      originalPrice: "$67",
      description: "The ultimate comprehensive guide covering every aspect of nonprofit development from vision to sustainable operations.",
      features: [
        "Complete 501(c)(3) formation process",
        "Advanced grant writing strategies",
        "Storytelling for maximum impact",
        "Financial management & sustainability",
        "Program development & evaluation",
        "Marketing & community engagement"
      ],
      popular: true,
      free: false,
      badge: "Best Value"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Grant Writing Masterclass",
      format: "Digital Course + Templates",
      price: "$197",
      originalPrice: "$297",
      description: "Complete grant writing course with video tutorials, professional templates, and proven strategies that secure funding.",
      features: [
        "20+ professional grant templates",
        "Video tutorials & masterclasses",
        "Storytelling frameworks & examples",
        "Funder research strategies",
        "Proposal review checklist",
        "Lifetime access to materials"
      ],
      popular: false,
      free: false,
      badge: "Premium"
    }
  ];

  const handleDownload = (resourceTitle: string, isFree: boolean) => {
    if (isFree) {
      // For free resources, trigger immediate download
      window.open('/free-starter-guide.html', '_blank');
    } else {
      // For paid resources, redirect to contact
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Resources & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertly crafted resources to guide you through every step of nonprofit development, from startup to sustainability.
          </p>
        </div>

        {/* Free Resource Highlight */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Start Your Journey Today - Completely FREE!</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Download our professionally designed starter guide and begin building your nonprofit with confidence and clarity.
            </p>
            <button
              onClick={() => handleDownload("Free Starter Guide", true)}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg"
            >
              <Download className="w-6 h-6" />
              <span>Download Free Guide Now</span>
            </button>
            <p className="mt-4 text-green-100 text-sm">No email required • Instant download • Professional quality</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 relative ${resource.popular ? 'ring-2 ring-blue-600 shadow-xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
              {resource.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    resource.free ? 'bg-green-600 text-white' :
                    resource.popular ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {resource.badge}
                  </span>
                </div>
              )}
              
              <div className={`${resource.free ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                {resource.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {resource.title}
              </h3>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-600 font-semibold text-sm">{resource.format}</span>
                <div className="flex items-center space-x-2">
                  {resource.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">${resource.originalPrice}</span>
                  )}
                  <div className={`flex items-center font-bold ${resource.free ? 'text-green-600' : 'text-gray-900'}`}>
                    {!resource.free && <DollarSign className="w-4 h-4" />}
                    <span>{resource.price}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {resource.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {resource.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleDownload(resource.title, resource.free)}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors text-sm ${
                  resource.free
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : resource.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {resource.free ? 'Download Free' : 'Get This Guide'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Grant Writing or Storytelling Support?
            </h3>
            <p className="text-gray-600 mb-6">
              Every organization has a unique story. Our team specializes in crafting compelling narratives that secure funding and build lasting relationships with donors and stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Clock className="w-5 h-5" />
                <span>Free 30-Min Consultation</span>
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
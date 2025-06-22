import React from 'react';
import { Video, MessageCircle, BookOpen, Users, PenTool, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "1:1 Consulting",
      description: "Personalized guidance via Zoom or phone covering grant writing, storytelling, IRS compliance, and strategic planning.",
      features: [
        "First 30-minute session free",
        "Grant writing expertise & training",
        "Compelling storytelling development",
        "IRS compliance guidance",
        "Strategic planning sessions"
      ],
      cta: "Schedule Free Consultation"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Grant Writing & Storytelling",
      description: "Expert grant writing services and storytelling workshops to help you secure funding and communicate your impact.",
      features: [
        "Professional grant proposal writing",
        "Compelling narrative development",
        "Impact storytelling workshops",
        "Donor communication strategies",
        "Success story documentation"
      ],
      cta: "Learn More About Grant Services"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Online Course",
      description: "Comprehensive step-by-step training for launching and funding successful nonprofits with storytelling focus.",
      features: [
        "Video tutorials & templates",
        "Grant writing masterclass",
        "Storytelling for impact module",
        "Mini-assignments for practice",
        "Optional coaching add-ons"
      ],
      cta: "Explore Course Options"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Workshops",
      description: "Interactive workshops on nonprofit development, grant writing, and storytelling for multiple organizations.",
      features: [
        "Grant writing workshops",
        "Storytelling for nonprofits",
        "Peer learning opportunities",
        "Networking sessions",
        "Community building"
      ],
      cta: "Join Next Workshop"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Services for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grant writing to storytelling, we provide the tools and expertise to help your nonprofit thrive.
          </p>
        </div>

        {/* Featured Service Highlight */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Grant Writing Excellence</h3>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                Transform your funding potential with expert grant writing and compelling storytelling that resonates with funders.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Professional grant proposal development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Impact storytelling that moves donors</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Proven track record: $1M+ secured</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">$1M+</div>
                <p className="text-lg">In grants secured for clients</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Grant Writing Help
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
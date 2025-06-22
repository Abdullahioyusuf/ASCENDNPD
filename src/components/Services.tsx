import React from 'react';
import { Video, MessageCircle, PenTool, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "1:1 Expert Consulting",
      description: "Personalized guidance from our team of nonprofit specialists via Zoom or phone covering all aspects of nonprofit development.",
      features: [
        "First 30 minutes completely FREE",
        "Then $75/hour for ongoing support",
        "Grant writing expertise & training",
        "Compelling storytelling development",
        "IRS compliance guidance",
        "Strategic planning sessions"
      ],
      pricing: "FREE consultation, then $75/hr",
      cta: "Schedule Free Consultation"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Professional Grant Writing",
      description: "Expert grant writing services and storytelling workshops to help you secure funding and communicate your impact effectively.",
      features: [
        "Professional grant proposal writing",
        "Compelling narrative development",
        "Impact storytelling workshops",
        "Donor communication strategies",
        "Success story documentation",
        "Funder research and matching"
      ],
      pricing: "Starting at $500 per proposal",
      cta: "Learn More About Grant Services"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Grant Writing Masterclass",
      description: "Comprehensive digital course with templates, video tutorials, and step-by-step training for nonprofit success.",
      features: [
        "20+ video tutorials & templates",
        "Grant writing masterclass modules",
        "Storytelling for impact training",
        "Mini-assignments for practice",
        "Downloadable templates & tools",
        "Lifetime access to materials"
      ],
      pricing: "$197 one-time payment",
      cta: "Enroll in Masterclass"
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
            Expert Services for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of nonprofit specialists provides comprehensive support from grant writing to storytelling, helping your organization thrive.
          </p>
        </div>

        {/* Featured Service Highlight */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <PenTool className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Grant Writing Excellence</h3>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                Transform your funding potential with our expert grant writing team and compelling storytelling that resonates with funders.
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
                <p className="text-lg mb-4">In grants secured for clients</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">First 30 minutes FREE</span>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Grant Writing Help
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-blue-600 font-bold">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">{service.pricing}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
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

        {/* Team Expertise Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Team?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of nonprofit specialists brings decades of combined experience in grant writing, storytelling, and organizational development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                20+
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Years Experience</h4>
              <p className="text-gray-600 text-sm">Combined team expertise in nonprofit development</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                $1M+
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Grants Secured</h4>
              <p className="text-gray-600 text-sm">Successfully funded projects for our clients</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                100+
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Organizations Helped</h4>
              <p className="text-gray-600 text-sm">Nonprofits successfully launched and scaled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
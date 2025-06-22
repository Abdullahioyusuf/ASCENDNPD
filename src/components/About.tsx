import React from 'react';
import { Award, Users, Target, Heart, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by Abdullahi Yusuf, our team of nonprofit specialists brings decades of combined experience helping immigrant-led nonprofits transform their vision into sustainable, impactful organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Abdullahi Yusuf</h3>
                  <p className="text-lg opacity-90">Lead Consultant & Founder</p>
                </div>
              </div>
              <p className="text-lg mb-4 opacity-95">MBA, DBA Candidate</p>
              <p className="leading-relaxed opacity-90">
                With over 20 years of dedicated experience in nonprofit development, 
                Abdullahi leads our team in helping immigrant-led and community-based organizations 
                secure over $1 million in grants and build sustainable, impactful programs.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Leadership</h4>
                <p className="text-gray-600">
                  Successfully chaired a $100M school referendum in Rochester, MN, demonstrating 
                  exceptional leadership in large-scale community initiatives and stakeholder engagement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Strategic Partnerships</h4>
                <p className="text-gray-600">
                  Collaborated with prestigious organizations including MnDEED, Otto Bremer Trust, 
                  SMIF, and BDPA to maximize funding opportunities and organizational impact.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Intelligence</h4>
                <p className="text-gray-600">
                  Specializes in emotional intelligence and cultural insight to help organizations 
                  navigate challenges and prevent burnout while maintaining authentic community connection.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Mission-Driven Approach</h4>
                <p className="text-gray-600">
                  Dedicated to helping nonprofits avoid common pitfalls, mismanagement issues, 
                  and funding challenges through strategic planning and proven methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Expertise Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Team's Collective Expertise
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring together specialists in grant writing, storytelling, organizational development, and community engagement to provide comprehensive support for your nonprofit journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Grant Writing</h4>
              <p className="text-gray-600 text-sm">Expert proposal development and funder relationship management</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Storytelling</h4>
              <p className="text-gray-600 text-sm">Compelling narrative development for maximum impact</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Organizational Development</h4>
              <p className="text-gray-600 text-sm">Strategic planning and operational excellence</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community Engagement</h4>
              <p className="text-gray-600 text-sm">Cultural competency and stakeholder relations</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work with Our Team?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Schedule your free 30-minute consultation and discover how our expertise can accelerate your nonprofit's success.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Schedule Free Consultation</span>
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
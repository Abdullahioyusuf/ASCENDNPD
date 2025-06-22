import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Guide to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abdullahi Yusuf brings decades of experience helping immigrant-led nonprofits 
            transform their vision into sustainable, impactful organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Abdullahi Yusuf</h3>
              <p className="text-lg mb-4">MBA, DBA Candidate</p>
              <p className="leading-relaxed">
                With over 20 years of dedicated experience in nonprofit development, 
                I've had the privilege of helping immigrant-led and community-based organizations 
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
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                <p className="text-gray-600">
                  Successfully chaired a $100M school referendum in Rochester, MN, demonstrating 
                  exceptional leadership in large-scale community initiatives.
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
                  SMIF, and BDPA to maximize funding opportunities.
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
      </div>
    </section>
  );
};

export default About;
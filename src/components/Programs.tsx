
import { GraduationCap, Heart, Users, Leaf, Briefcase, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Providing quality education access, scholarships, and learning resources to underprivileged children.',
      features: ['Free tutoring classes', 'Scholarship programs', 'School supplies distribution', 'Digital literacy'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Healthcare Services',
      description: 'Delivering essential healthcare services and health awareness programs to rural communities.',
      features: ['Mobile health clinics', 'Vaccination drives', 'Health awareness camps', 'Emergency medical aid'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      description: 'Empowering women through skill development, microfinance, and leadership training programs.',
      features: ['Skill development workshops', 'Microfinance support', 'Leadership training', 'Self-help groups'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Leaf,
      title: 'Environmental Conservation',
      description: 'Promoting sustainable practices and environmental awareness for a greener future.',
      features: ['Tree plantation drives', 'Waste management programs', 'Water conservation', 'Renewable energy'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: 'Skill Development',
      description: 'Building employable skills and creating livelihood opportunities for youth and adults.',
      features: ['Vocational training', 'Job placement assistance', 'Entrepreneurship support', 'Digital skills'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Home,
      title: 'Community Development',
      description: 'Strengthening community infrastructure and promoting social cohesion.',
      features: ['Infrastructure development', 'Community centers', 'Social welfare programs', 'Cultural preservation'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to address various aspects of community development and empowerment
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${program.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-200">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect gradient */}
              <div className={`h-1 bg-gradient-to-r ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-poppins font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join us in our mission to transform communities and empower lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                Volunteer Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                Support Our Cause
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

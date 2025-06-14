
import { Heart, Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every initiative with empathy and genuine care for community needs.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong, self-sustaining communities through collaborative efforts.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Focused on creating measurable, long-term positive change.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards in all our programs and services.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Saransh Sewa Trust</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to create lasting positive change in rural communities across Uttar Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Story */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-poppins font-semibold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Saransh Sewa Trust was born from a deep commitment to serve the underserved communities 
                of Sultanpur and surrounding regions in Uttar Pradesh. Our journey began with a simple 
                belief that every individual deserves access to basic necessities like education, 
                healthcare, and opportunities for growth.
              </p>
              <p>
                What started as a small initiative has grown into a comprehensive organization working 
                across multiple sectors. We believe in empowering communities from within, fostering 
                self-reliance, and creating sustainable solutions that address root causes rather than 
                just symptoms.
              </p>
              <p>
                Today, our work spans across education, healthcare, women's empowerment, skill development, 
                and environmental sustainability. Each program is designed with deep community consultation 
                and implemented with local leadership at its core.
              </p>
            </div>
          </div>

          {/* Right side - Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                To empower rural communities through comprehensive programs in education, healthcare, 
                and sustainable development, fostering self-reliance and dignity for all.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                A society where every individual has equal access to opportunities, resources, 
                and the chance to live with dignity and purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-poppins font-semibold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-200 group"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

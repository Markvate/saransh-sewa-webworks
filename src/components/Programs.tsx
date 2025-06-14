
import { GraduationCap, Heart, Users, Leaf, Briefcase, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'शिक्षा सहायता • Education Support',
      description: 'वंचित बच्चों को गुणवत्तापूर्ण शिक्षा पहुंच, छात्रवृत्ति और शिक्षण संसाधन प्रदान करना।',
      features: ['निःशुल्क ट्यूशन कक्षाएं', 'छात्रवृत्ति कार्यक्रम', 'स्कूली सामग्री वितरण', 'डिजिटल साक्षरता'],
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=300&fit=crop&crop=center'
    },
    {
      icon: Heart,
      title: 'स्वास्थ्य सेवाएं • Healthcare Services',
      description: 'ग्रामीण समुदायों को आवश्यक स्वास्थ्य सेवाएं और स्वास्थ्य जागरूकता कार्यक्रम प्रदान करना।',
      features: ['मोबाइल स्वास्थ्य क्लिनिक', 'टीकाकरण अभियान', 'स्वास्थ्य जागरूकता शिविर', 'आपातकालीन चिकित्सा सहायता'],
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center'
    },
    {
      icon: Users,
      title: 'महिला सशक्तिकरण • Women Empowerment',
      description: 'कौशल विकास, माइक्रोफाइनेंस और नेतृत्व प्रशिक्षण कार्यक्रमों के माध्यम से महिलाओं को सशक्त बनाना।',
      features: ['कौशल विकास कार्यशालाएं', 'माइक्रोफाइनेंस सहायता', 'नेतृत्व प्रशिक्षण', 'स्वयं सहायता समूह'],
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=300&fit=crop&crop=center'
    },
    {
      icon: Leaf,
      title: 'पर्यावरण संरक्षण • Environmental Conservation',
      description: 'हरित भविष्य के लिए टिकाऊ प्रथाओं और पर्यावरणीय जागरूकता को बढ़ावा देना।',
      features: ['वृक्षारोपण अभियान', 'अपशिष्ट प्रबंधन कार्यक्रम', 'जल संरक्षण', 'नवीकरणीय ऊर्जा'],
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop&crop=center'
    },
    {
      icon: Briefcase,
      title: 'कौशल विकास • Skill Development',
      description: 'युवाओं और वयस्कों के लिए रोजगार योग्य कौशल निर्माण और आजीविका के अवसर सृजन।',
      features: ['व्यावसायिक प्रशिक्षण', 'नौकरी प्लेसमेंट सहायता', 'उद्यमिता सहायता', 'डिजिटल कौशल'],
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop&crop=center'
    },
    {
      icon: Home,
      title: 'सामुदायिक विकास • Community Development',
      description: 'सामुदायिक अवसंरचना को मजबूत बनाना और सामाजिक सामंजस्य को बढ़ावा देना।',
      features: ['अवसंरचना विकास', 'सामुदायिक केंद्र', 'सामाजिक कल्याण कार्यक्रम', 'सांस्कृतिक संरक्षण'],
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
            हमारे कार्यक्रम
          </h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-semibold text-orange-500 mb-4">
            Our <span className="text-orange-500">Programs</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            सामुदायिक विकास और सशक्तिकरण के विभिन्न पहलुओं को संबोधित करने के लिए डिज़ाइन की गई व्यापक पहल
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
              {/* Program Image */}
              <div className="h-56 overflow-hidden bg-gray-100">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${program.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-200">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
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
              बदलाव लाने के लिए तैयार हैं?
            </h3>
            <h4 className="text-2xl font-poppins font-semibold mb-4">
              Ready to Make a Difference?
            </h4>
            <p className="text-xl mb-6 opacity-90">
              समुदायों को बदलने और जीवन को सशक्त बनाने के हमारे मिशन में शामिल हों
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                अभी स्वयंसेवक बनें • Volunteer Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                हमारे उद्देश्य का समर्थन करें • Support Our Cause
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

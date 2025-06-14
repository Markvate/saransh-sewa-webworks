import { Heart, Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'करुणा • Compassion',
      description: 'हम समुदायिक आवश्यकताओं के लिए सहानुभूति और वास्तविक देखभाल के साथ हर पहल का दृष्टिकोण अपनाते हैं।'
    },
    {
      icon: Users,
      title: 'समुदाय • Community',
      description: 'सहयोगात्मक प्रयासों के माध्यम से मजबूत, आत्मनिर्भर समुदायों का निर्माण करना।'
    },
    {
      icon: Target,
      title: 'प्रभाव • Impact',
      description: 'मापने योग्य, दीर्घकालिक सकारात्मक बदलाव लाने पर ध्यान केंद्रित करना।'
    },
    {
      icon: Award,
      title: 'उत्कृष्टता • Excellence',
      description: 'हमारे सभी कार्यक्रमों और सेवाओं में उच्चतम मानकों के लिए प्रतिबद्ध।'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
            सरांश सेवा ट्रस्ट के बारे में
          </h2>
          <h3 className="text-3xl md:text-4xl font-poppins font-semibold text-orange-500 mb-4">
            About <span className="text-orange-500">Saransh Sewa Trust</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            उत्तर प्रदेश के ग्रामीण समुदायों में स्थायी सकारात्मक बदलाव लाने के दृष्टिकोण के साथ स्थापित
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Story with Indian rural village image */}
          <div className="animate-slide-in-left">
            <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
                alt="Traditional Indian village with rural community"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-3xl font-poppins font-semibold text-gray-900 mb-6">
              हमारी कहानी • Our Story
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                सरांश सेवा ट्रस्ट का जन्म सुल्तानपुर और उत्तर प्रदेश के आसपास के क्षेत्रों के वंचित समुदायों की सेवा करने की गहरी प्रतिबद्धता से हुआ है। हमारी यात्रा इस सरल विश्वास के साथ शुरू हुई कि हर व्यक्ति शिक्षा, स्वास्थ्य सेवा और विकास के अवसरों जैसी बुनियादी आवश्यकताओं तक पहुंच का हकदार है।
              </p>
              <p>
                What started as a small initiative has grown into a comprehensive organization working 
                across multiple sectors. We believe in empowering communities from within, fostering 
                self-reliance, and creating sustainable solutions that address root causes rather than 
                just symptoms.
              </p>
              <p>
                आज, हमारा काम शिक्षा, स्वास्थ्य सेवा, महिला सशक्तिकरण, कौशल विकास और पर्यावरणीय स्थिरता में फैला हुआ है। प्रत्येक कार्यक्रम गहन सामुदायिक परामर्श के साथ डिज़ाइन किया गया है और इसके मूल में स्थानीय नेतृत्व के साथ लागू किया गया है।
              </p>
            </div>
          </div>

          {/* Right side - Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">हमारा मिशन • Our Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                शिक्षा, स्वास्थ्य सेवा और सतत विकास में व्यापक कार्यक्रमों के माध्यम से ग्रामीण समुदायों को सशक्त बनाना, सभी के लिए आत्मनिर्भरता और गरिमा को बढ़ावा देना।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">हमारा दृष्टिकोण • Our Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                एक ऐसा समाज जहां हर व्यक्ति के पास अवसरों, संसाधनों और गरिमा और उद्देश्य के साथ जीने के मौके तक समान पहुंच हो।
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-poppins font-semibold text-gray-900 text-center mb-12">
            हमारे मूल मूल्य • Our Core Values
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
                <p className="text-gray-600 leading-relaxed text-sm">
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

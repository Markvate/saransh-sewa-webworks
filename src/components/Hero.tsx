
import { ArrowRight, Heart, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop"
          alt="Indian village landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-orange-600/70 to-black/60"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Location badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">सुल्तानपुर, उत्तर प्रदेश • Sultanpur, Uttar Pradesh</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
            समुदाय को सशक्त बनाना,
            <span className="block text-orange-300">जीवन को बदलना</span>
            <span className="block text-3xl md:text-4xl mt-2 opacity-90">
              Empowering Communities, Transforming Lives
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            Saransh Sewa Trust is dedicated to creating positive change in rural communities through education, healthcare, and sustainable development programs.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-orange-300" />
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-200">Lives Impacted • प्रभावित जीवन</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-orange-300" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-200">Programs • कार्यक्रम</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-orange-300" />
              </div>
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-gray-200">Villages • गांव</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donate">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white border-2 border-orange-400 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                दान करें • Donate Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                स्वयंसेवक बनें • Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

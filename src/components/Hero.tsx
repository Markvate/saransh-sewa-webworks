
import { ArrowRight, Heart, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MembershipModal from './MembershipModal';

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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto animate-fade-in space-y-6 sm:space-y-8">
          {/* Location badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            <span className="text-xs sm:text-sm font-medium">सुल्तानपुर, उत्तर प्रदेश • Sultanpur, Uttar Pradesh</span>
          </div>

          {/* Main heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              सेवा ही संकल्प,
              <span className="block text-orange-300">जीवन को बदलना</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold opacity-90 text-orange-100">
              Service is our pledge, Transforming Lives
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Saransh Sewa Trust is dedicated to creating positive change in rural communities through education, healthcare, and sustainable development programs.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto my-8 sm:my-12 px-4 sm:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">1000+</div>
              <div className="text-xs sm:text-sm text-gray-200">Lives Impacted • प्रभावित जीवन</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-200">Programs • कार्यक्रम</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-transform duration-200 sm:col-span-1">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">25+</div>
              <div className="text-xs sm:text-sm text-gray-200">Villages • गांव</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Link to="/donate" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white border-2 border-orange-400 px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                दान करें • Donate Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <div className="w-full sm:w-auto">
              <MembershipModal />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { ArrowRight, Heart, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-black"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Location badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Sultanpur, Uttar Pradesh</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
            Empowering Communities,
            <span className="block text-orange-300">Transforming Lives</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Saransh Sewa Trust is dedicated to creating positive change in rural communities through education, healthcare, and sustainable development programs.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-orange-300" />
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-200">Lives Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-orange-300" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-200">Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-orange-300" />
              </div>
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-gray-200">Villages</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 group"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </Button>
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


import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Programs from '@/components/Programs';

const ProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1500&q=80"
          alt="Programs Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="pt-20 flex-1 flex items-start justify-center">
          <div className="w-full max-w-6xl mx-auto bg-white/70 rounded-xl shadow-xl backdrop-blur-lg p-2 sm:p-4 md:p-8 mt-6 mb-8">
            <Programs />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProgramsPage;

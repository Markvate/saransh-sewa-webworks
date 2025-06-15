
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl bg-white/70 backdrop-blur-[2px] border border-orange-100 shadow-lg rounded-2xl p-6 sm:p-10">
            <About />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

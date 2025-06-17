
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { useAnalytics } from '@/hooks/useAnalytics';

const AboutPage = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/about');
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="pt-20 flex-1 flex items-start justify-center">
          <div className="w-full rounded-xl shadow-xl p-2 sm:p-4 md:p-8 mt-6 mb-8 bg-white">
            <About />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;

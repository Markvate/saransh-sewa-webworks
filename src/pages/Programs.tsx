
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Programs from '@/components/Programs';
import { useAnalytics } from '@/hooks/useAnalytics';

const ProgramsPage = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/programs');
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="pt-20 flex-1 flex items-start justify-center">
          <div className="container mx-auto px-4">
            <Programs />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProgramsPage;

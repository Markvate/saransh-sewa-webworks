
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Gallery from '@/components/Gallery';
import Impact from '@/components/Impact';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const Index = () => {
  const { trackPageView } = useAnalytics();

  // Scroll to top when component mounts and track page view
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

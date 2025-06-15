
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Programs from '@/components/Programs';

const ProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Programs />
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { useAnalytics } from '@/hooks/useAnalytics';

const ContactUs = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/contact-us');
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 flex-1 flex items-start justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              
              <div className="space-y-6 text-gray-700">
                <section>
                  <p className="mb-6">
                    For any inquiries, support, or information, please reach out to us:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">Saransh Sewa Trust</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Address:</p>
                      <p>kamapur lambhua sultanpur UP 222302</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Phone:</p>
                      <p>+91 9415607400</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <p>
                        <a href="mailto:saranshsewatrust@gmail.com" className="text-orange-600 hover:underline">
                          saranshsewatrust@gmail.com
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Working Hours:</p>
                      <p>10:00 AM – 6:00 PM (Mon–Sat)</p>
                    </div>
                  </div>
                </section>

                <section className="mt-8 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
                  <Contact />
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const Shipping = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/shipping');
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 flex-1 flex items-start justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Shipping Policy
              </h1>
              
              <div className="space-y-6 text-gray-700">
                <section>
                  <p>
                    Saransh Sewa Trust may ship physical items such as donation receipts, certificates, awareness materials, or merchandise related to campaigns.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Dispatch Time</h2>
                  <p>
                    Items are usually dispatched within 3–7 working days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Delivery Time</h2>
                  <p>
                    Delivery time may vary depending on your location and courier service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Delays</h2>
                  <p>
                    Delays may occur due to holidays, natural events, or logistical issues. We will keep you informed where possible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">International Shipping</h2>
                  <p>
                    International shipments may require additional processing time and charges.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                  <div className="space-y-1">
                    <p><strong>Saransh Sewa Trust</strong></p>
                    <p><strong>Phone:</strong> +91 9415607400</p>
                    <p><strong>Email:</strong> saranshsewatrust@gmail.com</p>
                    <p><strong>Address:</strong> kamapur lambhua sultanpur UP 222302</p>
                  </div>
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

export default Shipping;

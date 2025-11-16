import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const CancellationRefunds = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/cancellation-refunds');
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 flex-1 flex items-start justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Cancellation & Refunds Policy
              </h1>
              
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Donation Cancellation</h2>
                  <p>
                    If you made an incorrect donation or a duplicate payment, you may request cancellation within 24 hours by contacting us directly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Refund Policy</h2>
                  <p className="mb-3">
                    Refunds may be issued only under the following conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Accidental duplicate donations.</li>
                    <li>Technical/payment gateway errors.</li>
                    <li>Wrong amount debited due to system malfunction.</li>
                  </ul>
                  <p className="mt-3">
                    Refunds are not provided for voluntary donations made intentionally.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Refund Request Requirements</h2>
                  <p className="mb-3">To request a refund, please provide:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Transaction ID</li>
                    <li>Donor name</li>
                    <li>Date of donation</li>
                    <li>Screenshot/payment proof</li>
                  </ul>
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

export default CancellationRefunds;

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
                  <p className="mb-3">
                    Saransh Sewa Trust appreciates your generous support. Once a donation is made, it is generally considered final. However, we understand that mistakes can happen.
                  </p>
                  <p>
                    If you believe a donation was made in error, please contact us within 24 hours at <a href="mailto:info@saranshsewatrust.org" className="text-orange-600 hover:underline">info@saranshsewatrust.org</a> with your transaction details.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Refund Policy</h2>
                  <p className="mb-3">
                    Refunds will be processed on a case-by-case basis and are subject to the following conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Duplicate donations made by mistake</li>
                    <li>Technical errors resulting in incorrect donation amounts</li>
                    <li>Unauthorized transactions (requires proof)</li>
                  </ul>
                  <p className="mt-3">
                    Approved refunds will be processed within 7-10 business days to the original payment method.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Non-Refundable Donations</h2>
                  <p>
                    Donations are generally non-refundable as they are utilized immediately for charitable activities. Tax receipts issued for donations cannot be honored if a refund is processed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                  <p>
                    For any queries regarding cancellations or refunds, please reach out to us at:
                  </p>
                  <div className="mt-3 space-y-1">
                    <p><strong>Email:</strong> info@saranshsewatrust.org</p>
                    <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
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

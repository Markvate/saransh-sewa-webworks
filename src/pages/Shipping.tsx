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
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">About This Policy</h2>
                  <p>
                    Saransh Sewa Trust is a non-profit charitable organization. We do not sell physical products or goods through our website. This page exists for informational purposes only.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Digital Receipts & Documentation</h2>
                  <p className="mb-3">
                    When you make a donation, you will receive:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email confirmation of your donation immediately</li>
                    <li>Tax receipt (80G certificate) via email within 3-5 business days</li>
                    <li>Digital copies of all documentation related to your contribution</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Physical Documentation (If Requested)</h2>
                  <p className="mb-3">
                    If you require physical copies of donation receipts or certificates, please contact us at:
                  </p>
                  <div className="space-y-1 mb-3">
                    <p><strong>Email:</strong> info@saranshsewatrust.org</p>
                    <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
                  </div>
                  <p>
                    Physical documents will be dispatched via registered post within 7-10 business days of your request.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Merchandise (Future)</h2>
                  <p>
                    If Saransh Sewa Trust launches merchandise or fundraising products in the future, detailed shipping information will be updated on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                  <p>
                    For any questions or special requests regarding documentation or future merchandise:
                  </p>
                  <div className="mt-3 space-y-1">
                    <p><strong>Email:</strong> info@saranshsewatrust.org</p>
                    <p><strong>Address:</strong> Saransh Sewa Trust, Sultanpur, Uttar Pradesh, India</p>
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

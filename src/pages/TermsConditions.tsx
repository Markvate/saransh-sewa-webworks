import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const TermsConditions = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/terms-conditions');
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 flex-1 flex items-start justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Terms and Conditions
              </h1>
              
              <div className="space-y-6 text-gray-700">
                <section>
                  <p>
                    By accessing the Saransh Sewa Trust website, you agree to the following Terms & Conditions. Please read them carefully.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use of Website</h2>
                  <p>
                    You agree to use this website responsibly and only for lawful purposes related to charitable activities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Donations</h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All donations made to Saransh Sewa Trust are voluntary.</li>
                    <li>Once processed, donations are generally non-refundable unless a valid technical issue occurs.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Content Ownership</h2>
                  <p>
                    All text, images, videos, and logos on this website belong to Saransh Sewa Trust and cannot be copied, republished, or used without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Accuracy of Information</h2>
                  <p>
                    We strive to keep all information accurate and updated. However, we do not guarantee complete accuracy at all times.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
                  <p>
                    Saransh Sewa Trust is not responsible for any loss, damage, or inconvenience that may arise from the use of the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Modifications</h2>
                  <p>
                    We reserve the right to update or modify these Terms & Conditions at any time.
                  </p>
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

export default TermsConditions;

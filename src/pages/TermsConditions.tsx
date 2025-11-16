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
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the Saransh Sewa Trust website, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree with these terms, please refrain from using our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Use of Website</h2>
                  <p className="mb-3">
                    You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.
                  </p>
                  <p>
                    Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Donations</h2>
                  <p className="mb-3">
                    All donations made through this website are voluntary and will be used for charitable purposes as determined by Saransh Sewa Trust.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Donations are subject to our Cancellation & Refunds Policy</li>
                    <li>Tax receipts will be provided as per applicable laws</li>
                    <li>We reserve the right to accept or decline any donation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
                  <p>
                    All content on this website, including text, graphics, logos, images, and software, is the property of Saransh Sewa Trust and is protected by copyright laws. Unauthorized reproduction or distribution is prohibited.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
                  <p>
                    Saransh Sewa Trust will not be liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, incidental, or consequential damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms and conditions at any time. Your continued use of the website following any changes constitutes acceptance of those changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Governing Law</h2>
                  <p>
                    These terms and conditions are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Sultanpur, Uttar Pradesh.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
                  <p>
                    For questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="mt-3 space-y-1">
                    <p><strong>Email:</strong> info@saranshsewatrust.org</p>
                    <p><strong>Address:</strong> Sultanpur, Uttar Pradesh, India</p>
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

export default TermsConditions;

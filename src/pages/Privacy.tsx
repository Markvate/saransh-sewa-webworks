import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const Privacy = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/privacy');
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 flex-1 flex items-start justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              
              <div className="space-y-6 text-gray-700">
                <section>
                  <p>
                    At Saransh Sewa Trust, we are committed to protecting the privacy and personal information of our donors, beneficiaries, volunteers, and visitors. This Privacy Policy explains how we collect, use, and safeguard your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Personal details such as name, email, mobile number, and address when you donate, volunteer, or contact us.</li>
                    <li>Transaction details for donations.</li>
                    <li>Non-personal data such as browser type, IP address, and device information.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To process donations and issue receipts.</li>
                    <li>To communicate updates, campaigns, and trust activities.</li>
                    <li>To respond to inquiries and provide assistance.</li>
                    <li>To improve our website and services.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Protection</h2>
                  <p>
                    We follow strict security practices to ensure your information is stored safely and is never misused.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third-Party Sharing</h2>
                  <p>
                    We do not sell or rent your information. Data may only be shared with trusted vendors such as payment gateways solely for donation processing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h2>
                  <p>
                    You may request correction, deletion, or access to your personal information anytime.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                  <p className="mb-3">
                    For privacy-related concerns, contact:
                  </p>
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

export default Privacy;

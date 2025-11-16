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
                  <p className="mb-4">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN')}
                  </p>
                  <p>
                    Saransh Sewa Trust ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p className="mb-3">We may collect personal information that you provide to us, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, phone number</li>
                    <li>Mailing address</li>
                    <li>Payment information (processed securely through payment gateways)</li>
                    <li>Volunteer application details</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device information</li>
                    <li>Usage data and analytics</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process donations and issue tax receipts</li>
                    <li>Communicate with you about our programs and activities</li>
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Process volunteer applications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Information Sharing</h2>
                  <p className="mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Payment processors to handle donations securely</li>
                    <li>Service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Cookies</h2>
                  <p>
                    Our website uses cookies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Children's Privacy</h2>
                  <p>
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
                  <p>
                    If you have questions or concerns about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-3 space-y-1">
                    <p><strong>Email:</strong> info@saranshsewatrust.org</p>
                    <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
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

export default Privacy;

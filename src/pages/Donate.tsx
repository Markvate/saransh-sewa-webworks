
import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Copy, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Donate = () => {
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('saranshsewatrust@paytm');
      toast({
        title: "कॉपी किया गया! • Copied!",
        description: "UPI ID आपके क्लिपबोर्ड में कॉपी हो गई है • UPI ID copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "त्रुटि • Error",
        description: "कॉपी नहीं हो सका • Could not copy to clipboard",
        variant: "destructive"
      });
    }
  };

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText('+91 9876543210');
      toast({
        title: "कॉपी किया गया! • Copied!",
        description: "फोन नंबर कॉपी हो गया • Phone number copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "त्रुटि • Error",
        description: "कॉपी नहीं हो सका • Could not copy to clipboard",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Header />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              होम पर वापस जाएं • Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
              दान करें
              <span className="block text-orange-600">Donate Now</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              आपका योगदान हमारे समुदाय को बेहतर बनाने में मदद करता है • 
              Your contribution helps us build better communities
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Donation Section */}
            <Card className="border-2 border-orange-200 shadow-lg">
              <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Heart className="h-6 w-6" />
                  <span>दान करें • Donate Now</span>
                </CardTitle>
                <CardDescription className="text-orange-100">
                  आपका हर योगदान मायने रखता है • Every contribution matters
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Side - QR Code, UPI ID, and Hindi Payment Issues */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="bg-white border-4 border-orange-200 rounded-lg p-4 sm:p-6 inline-block">
                        <img 
                          src="/lovable-uploads/4f573f89-0673-4a9c-bf46-1ba9ca2d1bc2.png" 
                          alt="QR Code for Donation" 
                          className="h-32 w-32 sm:h-48 sm:w-48 mx-auto mb-4"
                        />
                        <p className="text-sm text-gray-600 font-medium">
                          QR कोड स्कैन करें • Scan QR Code to Donate
                        </p>
                      </div>
                    </div>
                    
                    {/* UPI ID Section */}
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">UPI ID</h4>
                      <div className="bg-white rounded p-3 border border-orange-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <p className="text-sm sm:text-lg font-mono text-gray-800 break-all">
                            saranshsewatrust@paytm
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={copyToClipboard}
                            className="self-end sm:self-auto h-8 w-8 p-0 hover:bg-orange-100 flex-shrink-0"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Hindi Payment Issue Contact (LEFT) */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-start space-x-2">
                        <Phone className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-blue-800 font-medium mb-2">
                            भुगतान में समस्या?
                          </p>
                          <p className="text-sm text-blue-700 mb-2">
                            कृपया हमसे संपर्क करें
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-mono text-blue-800">
                              +91 9876543210
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={copyPhoneNumber}
                              className="h-6 w-6 p-0 hover:bg-blue-100 flex-shrink-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Bank Details & English Payment Issues */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-4 text-center lg:text-left">
                        बैंक विवरण • Bank Details
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p><strong>Account Name:</strong> Saransh Sewa Trust</p>
                        </div>
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p><strong>Account Number:</strong> XXXX-XXXX-XXXX</p>
                        </div>
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p><strong>IFSC Code:</strong> XXXXXXXXX</p>
                        </div>
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p><strong>Bank:</strong> State Bank of India</p>
                        </div>
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p><strong>Branch:</strong> Sultanpur, UP</p>
                        </div>
                      </div>
                    </div>

                    {/* English Payment Issue Contact (RIGHT) */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-start space-x-2">
                        <Phone className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-blue-800 font-medium mb-2">
                            Having payment issues?
                          </p>
                          <p className="text-sm text-blue-700 mb-2">
                            Please feel free to contact us
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-mono text-blue-800">
                              +91 9876543210
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={copyPhoneNumber}
                              className="h-6 w-6 p-0 hover:bg-blue-100 flex-shrink-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>नोट:</strong> दान के बाद कृपया अपनी रसीद 
                        <a href="mailto:donations@saranshsewatrust.org" className="text-orange-600 hover:underline ml-1">
                          donations@saranshsewatrust.org
                        </a> पर भेजें
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;

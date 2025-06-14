
import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, QrCode, Copy } from 'lucide-react';
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

          <div className="max-w-2xl mx-auto">
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
                <div className="text-center space-y-6">
                  <div className="bg-white border-4 border-orange-200 rounded-lg p-4 sm:p-6 inline-block">
                    <QrCode className="h-32 w-32 sm:h-48 sm:w-48 mx-auto text-gray-800 mb-4" />
                    <p className="text-sm text-gray-600 font-medium">
                      QR कोड स्कैन करें • Scan QR Code to Donate
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      दान के तरीके • Payment Methods
                    </h3>
                    
                    {/* UPI ID Section */}
                    <div className="bg-orange-50 rounded-lg p-4 text-left">
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
                    
                    {/* Bank Details Section */}
                    <div className="bg-gray-50 rounded-lg p-4 text-left">
                      <h4 className="font-semibold text-gray-900 mb-2">बैंक विवरण • Bank Details</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Account Name:</strong> Saransh Sewa Trust</p>
                        <p><strong>Account Number:</strong> XXXX-XXXX-XXXX</p>
                        <p><strong>IFSC Code:</strong> XXXXXXXXX</p>
                        <p><strong>Bank:</strong> State Bank of India</p>
                        <p><strong>Branch:</strong> Sultanpur, UP</p>
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

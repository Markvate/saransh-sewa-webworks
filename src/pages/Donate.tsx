import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Heart, Users, QrCode, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MembershipFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  motivation: string;
  volunteerAreas: string[];
  agreeToTerms: boolean;
}

const Donate = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MembershipFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [volunteerAreas, setVolunteerAreas] = useState<string[]>([]);

  const volunteerOptions = [
    'Education Support • शिक्षा सहायता',
    'Healthcare Services • स्वास्थ्य सेवाएं',
    'Women Empowerment • महिला सशक्तिकरण',
    'Environmental Conservation • पर्यावरण संरक्षण',
    'Skill Development • कौशल विकास',
    'Community Development • सामुदायिक विकास'
  ];

  const handleVolunteerAreaChange = (area: string, checked: boolean) => {
    if (checked) {
      setVolunteerAreas([...volunteerAreas, area]);
    } else {
      setVolunteerAreas(volunteerAreas.filter(item => item !== area));
    }
  };

  const onSubmit = async (data: MembershipFormData) => {
    if (volunteerAreas.length === 0) {
      toast({
        title: "कृपया कम से कम एक क्षेत्र चुनें • Please select at least one area",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('membership_applications')
        .insert({
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          occupation: data.occupation || '',
          motivation: data.motivation,
          volunteer_areas: volunteerAreas
        });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      toast({
        title: "सदस्यता आवेदन सफल! • Membership Application Successful!",
        description: "हम जल्द ही आपसे संपर्क करेंगे • We will contact you soon",
      });
      
      reset();
      setVolunteerAreas([]);
    } catch (error) {
      console.error('Error submitting membership application:', error);
      toast({
        title: "त्रुटि • Error",
        description: "कृपया बाद में पुनः प्रयास करें • Please try again later",
        variant: "destructive"
      });
    }
    
    setIsSubmitting(false);
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
              दान करें और सदस्य बनें
              <span className="block text-orange-600">Donate & Become a Member</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              आपका योगदान हमारे समुदाय को बेहतर बनाने में मदद करता है • 
              Your contribution helps us build better communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Section */}
            <div className="space-y-8">
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
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="bg-white border-4 border-orange-200 rounded-lg p-6 inline-block">
                      <QrCode className="h-48 w-48 mx-auto text-gray-800 mb-4" />
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
                          <p className="text-lg font-mono text-center text-gray-800">
                            saranshsewatrust@paytm
                          </p>
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

            {/* Membership Form */}
            <div className="space-y-8">
              <Card className="border-2 border-orange-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6" />
                    <span>सदस्यता फॉर्म • Membership Form</span>
                  </CardTitle>
                  <CardDescription className="text-orange-100">
                    हमारे मिशन में शामिल हों • Join our mission
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">पूरा नाम • Full Name *</Label>
                        <Input
                          id="fullName"
                          {...register('fullName', { required: 'Name is required' })}
                          className="mt-1"
                          placeholder="अपना पूरा नाम दर्ज करें"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">फोन नंबर • Phone Number *</Label>
                        <Input
                          id="phone"
                          {...register('phone', { required: 'Phone number is required' })}
                          className="mt-1"
                          placeholder="+91 XXXXXXXXXX"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">ईमेल • Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="address">पता • Address *</Label>
                      <Textarea
                        id="address"
                        {...register('address', { required: 'Address is required' })}
                        className="mt-1"
                        placeholder="अपना पूरा पता दर्ज करें"
                        rows={3}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="occupation">व्यवसाय • Occupation</Label>
                      <Input
                        id="occupation"
                        {...register('occupation')}
                        className="mt-1"
                        placeholder="आपका व्यवसाय या पेशा"
                      />
                    </div>

                    <div>
                      <Label htmlFor="motivation">प्रेरणा • Why do you want to join us? *</Label>
                      <Textarea
                        id="motivation"
                        {...register('motivation', { required: 'Please share your motivation' })}
                        className="mt-1"
                        placeholder="आप हमसे क्यों जुड़ना चाहते हैं?"
                        rows={4}
                      />
                      {errors.motivation && (
                        <p className="text-red-500 text-sm mt-1">{errors.motivation.message}</p>
                      )}
                    </div>

                    <div>
                      <Label className="text-base font-medium">
                        स्वयंसेवा के क्षेत्र • Areas of Interest for Volunteering *
                      </Label>
                      <div className="mt-3 space-y-3">
                        {volunteerOptions.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                              id={option}
                              checked={volunteerAreas.includes(option)}
                              onCheckedChange={(checked) => 
                                handleVolunteerAreaChange(option, checked as boolean)
                              }
                            />
                            <Label htmlFor={option} className="text-sm font-normal">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        {...register('agreeToTerms', { required: 'Please agree to terms' })}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        मैं नियम और शर्तों से सहमत हूं • I agree to the terms and conditions *
                      </Label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          प्रसंस्करण • Processing...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          सदस्यता के लिए आवेदन करें • Apply for Membership
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;

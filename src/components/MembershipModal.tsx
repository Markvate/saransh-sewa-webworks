
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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

const MembershipModal = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MembershipFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [volunteerAreas, setVolunteerAreas] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

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
      
      setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          variant="outline"
          className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          सदस्य बनें • Become a Member
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-orange-600">
            <Users className="h-6 w-6" />
            <span>सदस्यता फॉर्म • Membership Form</span>
          </DialogTitle>
          <DialogDescription>
            हमारे मिशन में शामिल हों • Join our mission to serve the community
          </DialogDescription>
        </DialogHeader>
        
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
      </DialogContent>
    </Dialog>
  );
};

export default MembershipModal;

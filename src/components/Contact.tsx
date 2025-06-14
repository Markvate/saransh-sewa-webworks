import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Leadership Contact • नेतृत्व संपर्क',
      details: [
        'Karan Shukla - Founder/संस्थापक: +91 9415607400',
        'Pandit Sudhanshu Tiwari Ji - President/अध्यक्ष: +91 9005804713'
      ],
      description: 'Reach out to our leadership team directly'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@saranshsewatrust.org', 'contact@saranshsewatrust.org'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Sultanpur, Uttar Pradesh', 'India - 228001'],
      description: 'Visit our main office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      description: 'Our office hours'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference? Contact us to learn how you can get involved or support our mission
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-poppins font-semibold text-gray-900 mb-8">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200 border-0 bg-white">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">
                            {info.title.includes('Leadership') && detail.includes(':') ? (
                              <>
                                {detail.split(':')[0]}: <a href={`tel:${detail.split(':')[1].trim().replace(' ', '')}`} className="text-orange-600 hover:text-orange-700 font-semibold">{detail.split(':')[1].trim()}</a>
                              </>
                            ) : detail}
                          </p>
                        ))}
                        <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-110"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                Stay updated with our latest initiatives and success stories
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-3xl font-poppins font-semibold text-gray-900 mb-8">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                    <option>General Inquiry</option>
                    <option>Volunteer Application</option>
                    <option>Donation Information</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how you'd like to get involved or support our cause..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-poppins font-bold mb-4">
              Ready to Join Our Mission?
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Every contribution, no matter how small, makes a significant impact. 
              Together, we can create lasting change in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Become a Volunteer
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Make a Donation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

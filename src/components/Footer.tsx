
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Impact Stories', href: '#impact' },
    { name: 'Get Involved', href: '#contact' },
    { name: 'Donate', href: '#' },
    { name: 'Volunteer', href: '#' }
  ];

  const programs = [
    { name: 'Education Support', href: '#' },
    { name: 'Healthcare Services', href: '#' },
    { name: 'Women Empowerment', href: '#' },
    { name: 'Environmental Conservation', href: '#' },
    { name: 'Skill Development', href: '#' },
    { name: 'Community Development', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: 'https://www.facebook.com/p/Saransh-Sewa-Trust-61555761001064/' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/saranshsewatrust/' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <img 
                  src="/lovable-uploads/7a9d422f-d8a9-484f-b62e-8c238a77d1f4.png" 
                  alt="Saransh Sewa Trust Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-poppins font-bold">
                Saransh Sewa Trust
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Dedicated to empowering rural communities in Sultanpur, Uttar Pradesh through 
              comprehensive programs in education, healthcare, and sustainable development. 
              Together, we're building a better tomorrow.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">
                  <span className="inline-block mr-2">🎗️</span>
                  <span className="ml-1">Sultanpur, Uttar Pradesh, India</span>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <div className="text-gray-300">
                  <div>Karan Shukla - Founder/संस्थापक: <a href="tel:+919415607400" className="hover:text-orange-500 transition-colors">+91 9415607400</a></div>
                  <div className="mt-1">Pandit Sudhanshu Tiwari Ji - President/अध्यक्ष: <a href="tel:+919005804713" className="hover:text-orange-500 transition-colors">+91 9005804713</a></div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@saranshsewatrust.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 inline-block relative group"
                  >
                    {program.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest updates on our programs and impact stories.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Saransh Sewa Trust. All rights reserved. | 
              <span className="ml-1">Registered Non-Profit Organization</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                  title={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 z-40"
      >
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;

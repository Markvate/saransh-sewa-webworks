
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useAnalytics } from '@/hooks/useAnalytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const { trackButtonClick, trackPageView } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (linkName: string, href: string) => {
    trackButtonClick(linkName, window.location.pathname);
    trackPageView(href);
  };

  const handleSignOut = async () => {
    trackButtonClick('sign-out', window.location.pathname);
    await signOut();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with integrated auth */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 sm:space-x-3"
              onClick={() => handleLinkClick('logo', '/')}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                <img 
                  src="/lovable-uploads/9a11ab3d-47e9-4052-89d0-574ed2958cfd.png" 
                  alt="Saransh Sewa Trust Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-base sm:text-xl font-poppins font-bold text-gray-900">
                Saransh Sewa Trust
              </span>
            </Link>
            
            {/* New Child Photo */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
              <img 
                src="/lovable-uploads/5de881d6-10df-444c-a145-380dcbed1e93.png" 
                alt="Child Photo" 
                className="w-full h-full object-cover rounded-full border-2 border-orange-200"
              />
            </div>
            
            {/* Auth integrated with logo */}
            <div className="flex items-center space-x-2">
              {user ? (
                <div className="flex items-center space-x-2">
                  {isAdmin && (
                    <>
                      <Link 
                        to="/admin"
                        onClick={() => handleLinkClick('admin', '/admin')}
                        className="text-xs sm:text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 hidden sm:block"
                      >
                        Admin
                      </Link>
                      <Link 
                        to="/messages"
                        onClick={() => handleLinkClick('messages', '/messages')}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hidden sm:block"
                      >
                        Messages
                      </Link>
                      <Link 
                        to="/mail"
                        onClick={() => handleLinkClick('mail', '/mail')}
                        className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200 hidden sm:block"
                      >
                        Mail
                      </Link>
                    </>
                  )}
                  <Button
                    onClick={handleSignOut}
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1 text-xs sm:text-sm h-8 px-2"
                  >
                    <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </Button>
                </div>
              ) : (
                <Link to="/auth" onClick={() => handleLinkClick('sign-in', '/auth')}>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-xs sm:text-sm h-8 px-2">
                    <User className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Sign In</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleLinkClick(item.name.toLowerCase(), item.href)}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link to="/donate" onClick={() => handleLinkClick('donate', '/donate')}>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-sm xl:text-base">
                Donate Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-3 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  onClick={() => {
                    handleLinkClick(item.name.toLowerCase(), item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Auth Section */}
              {user ? (
                <>
                  {isAdmin && (
                    <>
                      <Link
                        to="/admin"
                        className="text-gray-700 hover:text-orange-500 font-medium px-4 py-3 transition-colors duration-200 border-b border-gray-100"
                        onClick={() => {
                          handleLinkClick('admin', '/admin');
                          setIsMenuOpen(false);
                        }}
                      >
                        Admin Dashboard
                      </Link>
                      <Link
                        to="/messages"
                        className="text-gray-700 hover:text-blue-500 font-medium px-4 py-3 transition-colors duration-200 border-b border-gray-100"
                        onClick={() => {
                          handleLinkClick('messages', '/messages');
                          setIsMenuOpen(false);
                        }}
                      >
                        Messages
                      </Link>
                      <Link
                        to="/mail"
                        className="text-gray-700 hover:text-green-500 font-medium px-4 py-3 transition-colors duration-200 border-b border-gray-100"
                        onClick={() => {
                          handleLinkClick('mail', '/mail');
                          setIsMenuOpen(false);
                        }}
                      >
                        Mail System
                      </Link>
                    </>
                  )}
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-orange-500 font-medium px-4 py-3 transition-colors duration-200 border-b border-gray-100 text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-3 transition-colors duration-200 border-b border-gray-100"
                  onClick={() => {
                    handleLinkClick('sign-in', '/auth');
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </Link>
              )}
              
              <div className="px-4 pt-2">
                <Link 
                  to="/donate" 
                  onClick={() => {
                    handleLinkClick('donate', '/donate');
                    setIsMenuOpen(false);
                  }}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-full font-medium">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

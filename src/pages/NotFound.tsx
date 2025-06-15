
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1500&q=80"
          alt="Not Found Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white/70 rounded-xl shadow-xl backdrop-blur-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

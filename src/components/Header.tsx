import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ChevronDown } from 'lucide-react';

function Header() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const services = [
    { name: 'See All', path: '/services' },
    { name: 'AI Chatbots', path: '/services/chatbots' },
    { name: 'Phone Callers', path: '/services/phone-callers' },
    { name: 'Web Design', path: '/services/web-design' },
    { name: 'Custom AI Solutions', path: '/services/custom-ai' },
    { name: 'Process Automation', path: '/services/automation' },
    { name: 'Data Analytics', path: '/services/analytics' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-3 frame-hover"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/93aed375-ff01-4d9d-9b1a-d095aa7f58e6.png" alt="Neural AI" className="h-10" />
          <span className="text-white text-xl font-bold">Neural AI</span>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <NavLink to="/about" active={location.pathname === '/about'}>
            About
          </NavLink>
          
          <div className="relative">
            <button
              className={`text-sm font-medium transition-colors duration-300 flex items-center space-x-1 frame-hover ${
                location.pathname.includes('/services') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-xl py-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white frame-hover"
                    onClick={() => {
                      setIsServicesOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact" active={location.pathname === '/contact'}>
            Contact
          </NavLink>
          
          {isAuthenticated && (
            <NavLink to="/account" active={location.pathname === '/account'}>
              Account
            </NavLink>
          )}
          
          <Link
            to={isAuthenticated ? "/dashboard" : "/get-started"}
            className="px-6 py-2 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 frame-hover"
            onClick={() => window.scrollTo(0, 0)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors duration-300 frame-hover ${
        active ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {children}
    </Link>
  );
}

export default Header;
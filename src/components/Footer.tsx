import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black/80 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/93aed375-ff01-4d9d-9b1a-d095aa7f58e6.png" alt="Neural AI" className="h-8 mb-4" />
            <p className="text-gray-400 text-sm">
              Pioneering the future of AI automation for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Main Page
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-white" />
                <span>contact@neural-ai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-white" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-white" />
                <span>123 AI Boulevard, Tech District</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.instagram.com/neuralaiautomation/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://x.com/neauralai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Neural AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
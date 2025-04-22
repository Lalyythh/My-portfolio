import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Lalith Kishore H</h3>
              <p className="mb-4">
                A passionate Java Full Stack Developer creating efficient, scalable, and user-friendly applications.
              </p>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <ArrowUp size={16} className="mr-2" />
                Back to top
              </button>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition-colors duration-200">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors duration-200">About</a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-blue-400 transition-colors duration-200">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">📧</span>
                  <a href="mailto:lalithkishore200417@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                    lalithkishore200417@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📱</span>
                  <a href="tel:+919884545966" className="hover:text-blue-400 transition-colors duration-200">
                    +91 9884545966
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Guduvancherry, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Lalith Kishore H. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
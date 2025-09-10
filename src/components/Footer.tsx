import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Pranay Singa</h3>
            <p className="text-gray-400">Fullstack web development Enthusiast</p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="text-red-500 mx-1" size={16} /> and passion for technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {year} Shivakrishna. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-gray-400">
              Made with <Heart size={14} className="inline text-red-500 mx-1" /> by Shivakrishna
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
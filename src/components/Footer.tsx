import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4">1018</h3>
            <p className="mb-4 text-gray-400 max-w-xs">
              Timeless elegance and modern luxury. Crafted for those who appreciate the finest things in life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Men's Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Women's Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Luxury Avenue</li>
              <li>New York, NY 10001</li>
              <li>United States</li>
              <li className="pt-2"><a href="mailto:contact@1018.com" className="hover:text-white transition-colors">contact@1018.com</a></li>
              <li><a href="tel:+12125551018" className="hover:text-white transition-colors">+1 212 555 1018</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} 1018. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
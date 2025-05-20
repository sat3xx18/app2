import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-green text-white py-3' : 'bg-transparent text-brand-green py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-wider">
            1018
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <a href="#products" className="hover:text-brand-gold transition-colors">Products</a>
            <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hover:text-brand-gold transition-colors">
              <ShoppingBag size={24} />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-green text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#products" 
                className="py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
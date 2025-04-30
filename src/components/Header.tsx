import React from 'react';
import { Search, Bookmark, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-1 text-primary-500 font-bold text-2xl">
              <span className="text-3xl">🔬</span>
              <span>Science<span className="text-warning-500">World</span></span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search topics..." 
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            
            <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-500">
              <Bookmark className="h-5 w-5" />
              <span>Saved</span>
            </button>
            
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full transition-colors">
              Log In
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-gray-700" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-30 transition-all duration-300 ease-in-out" style={{ maxHeight: mobileMenuOpen ? '100vh' : '0' }}>
          <div className="px-4 py-6 space-y-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search topics..." 
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 w-full"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            
            <button className="flex items-center space-x-2 text-gray-700 w-full">
              <Bookmark className="h-5 w-5" />
              <span>Saved Articles</span>
            </button>
            
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full transition-colors w-full">
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
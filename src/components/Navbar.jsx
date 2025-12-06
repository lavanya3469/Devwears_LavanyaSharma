import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CountryAwareLink from './CountryAwareLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Extract path without country code for active link check
  const getPathWithoutCountry = (path) => {
    const parts = path.split('/');
    if (parts[1]?.length === 2 && !['products', 'about', 'contact', 'terms', 'privacy', 'refund'].includes(parts[1])) {
      return '/' + parts.slice(2).join('/');
    }
    return path;
  };

  const isActive = (path) => {
    const currentPath = getPathWithoutCountry(location.pathname);
    return currentPath === path || (currentPath === '' && path === '/');
  };
  
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <CountryAwareLink to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">DevWears</span>
          </CountryAwareLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <CountryAwareLink
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className={`relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  isActive(item.path) ? 'text-blue-600' : ''
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </CountryAwareLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <CountryAwareLink
                key={item.name}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  handleLinkClick();
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </CountryAwareLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

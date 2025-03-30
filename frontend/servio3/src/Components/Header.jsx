// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserGroupIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function Header({ isLoggedIn = false, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about-us' },
    { text: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className="text-3xl font-bold font-[Poppins] cursor-pointer"
            onClick={() => navigate('/')}
          >
            Servio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={link.text}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.path);
                }}
                className={`text-lg font-[Raleway] hover:text-orange-600 transition-colors duration-300 animate-fade-in ${
                  location.pathname === link.path ? 'text-orange-600 font-semibold' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Conditional Buttons: Show Profile and Logout if logged in, otherwise show Login and Register */}
          {isLoggedIn ? (
            <>
              <button
                onClick={() => navigate('/profile')}
                className="hidden md:block bg-gradient-to-r from-orange-600 to-orange-800 text-white px-6 py-2 rounded-full font-medium text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${navLinks.length * 100}ms` }}
              >
                <div className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  Technician Profile
                </div>
              </button>
              <button
                onClick={onLogout}
                className="hidden md:block bg-gradient-to-r from-orange-600 to-orange-800 text-white px-6 py-2 rounded-full font-medium text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
              >
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 mr-2" />
                  Logout
                </div>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="hidden md:block bg-gradient-to-r from-orange-600 to-orange-800 text-white px-6 py-2 rounded-full font-medium text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${navLinks.length * 100}ms` }}
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="hidden md:block bg-gradient-to-r from-orange-600 to-orange-800 text-white px-6 py-2 rounded-full font-medium text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
              >
                Register
              </button>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? (
                <XMarkIcon className="h-8 w-8 text-white" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-4">
          {navLinks.map((link, index) => (
            <a
              key={link.text}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.path);
                setIsOpen(false);
              }}
              className={`block py-2 text-lg font-[Raleway] hover:text-orange-600 transition-colors duration-300 animate-fade-in ${
                location.pathname === link.path ? 'text-orange-600 font-semibold' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.text}
            </a>
          ))}
          {/* Mobile Buttons */}
          {isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  navigate('/profile');
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-lg font-[Raleway] bg-gradient-to-r from-orange-600 to-orange-800 text-white px-4 rounded-full mt-2 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${navLinks.length * 100}ms` }}
              >
                Technician Profile
              </button>
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-lg font-[Raleway] bg-gradient-to-r from-orange-600 to-orange-800 text-white px-4 rounded-full mt-2 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate('/login');
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-lg font-[Raleway] bg-gradient-to-r from-orange-600 to-orange-800 text-white px-4 rounded-full mt-2 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${navLinks.length * 100}ms` }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate('/signup');
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-lg font-[Raleway] bg-gradient-to-r from-orange-600 to-orange-800 text-white px-4 rounded-full mt-2 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
              >
                Register
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
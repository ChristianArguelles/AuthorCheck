import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="AuthorCheck Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-semibold text-gray-800">AuthorCheck</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#upload" className="text-gray-700 hover:text-blue-600">Upload</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden px-4 pb-4 ${styles.fadeIn}`}>
          <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="#upload" className="block py-2 text-gray-700 hover:text-blue-600">Upload</a>
          <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

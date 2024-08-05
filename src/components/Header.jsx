import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-5 shadow-lg relative">
      <nav className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo or Brand Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-purple-900 hover:text-gray-700 transition-colors duration-300 md:hidden">
          SLW-KHP
        </Link>
        <Link
          to="/"
          className="hidden md:block text-2xl font-bold text-purple-900 hover:text-gray-700 transition-colors duration-300">
          SmartLearning With KPH
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="block md:hidden text-purple-900 focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center text-purple-900 hover:text-gray-900 transition-colors duration-300">
            <FaHome className="mr-1" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center text-purple-900 hover:text-gray-900 transition-colors duration-300">
            <FaUser className="mr-1" />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center text-purple-900 hover:text-gray-900 transition-colors duration-300">
            <FaPhone className="mr-1" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden z-50`}>
          <div className="flex flex-col p-6 items-center">
            <button 
              onClick={toggleMenu} 
              className="self-end text-purple-900 mb-4"
              aria-label="Close menu">
              <FaTimes className="text-2xl" />
            </button>
            <Link to="/" className="flex items-center text-purple-900 hover:text-gray-700 mb-4" onClick={toggleMenu}>
              <FaHome className="mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center text-purple-900 hover:text-gray-700 mb-4" onClick={toggleMenu}>
              <FaUser className="mr-1" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center text-purple-900 hover:text-gray-700" onClick={toggleMenu}>
              <FaPhone className="mr-1" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#130121] text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-2"> SmartLearning by KPH</h2>
            <p className="text-gray-400">
              Your go-to resource for learning network scanning, cybersecurity, and more.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0">
            <Link to="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-300 mb-2 md:mb-0">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-gray-100 transition-colors duration-300 mb-2 md:mb-0">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-gray-100 transition-colors duration-300 mb-2 md:mb-0">Contact</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaXTwitter  size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()}  SmartLearning by KPH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

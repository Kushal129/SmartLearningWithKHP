import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#130121] text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link to="/about" className="text-2xl font-bold text-white hover:text-purple-300 cursor-pointer mb-3">Discover SmartLearning with KPH</Link>
            <p className="text-gray-600 mt-2">
              Unlock your potential with our expert-guided tutorials on network scanning, cybersecurity, and beyond.
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
            <a href="https://www.github.com/Kushal129" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kushal-pipaliya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/KushalPipaliya5" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/kushal.pipaliya.12?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/_kushal_pipaliya/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SmartLearning With KPH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

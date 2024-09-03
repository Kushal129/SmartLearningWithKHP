import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {


  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/All-ShortlyContent", label: "All-ShortlyContent" },
  ];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="bg-[#130121] text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">

          {/* About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/3">
            <Link to="/about" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors duration-300 block mb-3">
              Discover SmartLearning with KPH
            </Link>
            <p className="text-gray-400 mt-2">
              Unlock your potential with expert-guided tutorials on network scanning, cybersecurity, and beyond.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-300 hover:text-purple-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.github.com/Kushal129" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kushal-pipaliya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/KushalPipaliya5" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/kushal.pipaliya.12?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/_kushal_pipaliya/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SmartLearning With KPH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

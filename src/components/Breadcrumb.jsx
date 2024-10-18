import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { PiGreaterThanLight } from "react-icons/pi";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="p-2 mb-6">
      <ol className="flex items-center space-x-2 text-purple-950 text-md md:text-base">
        {/* Home Link */}
        <li className="relative">
          <Link
            to="/"
            className="flex items-center text-purple-950 hover:text-gray-800 transition-colors relative pb-1 group"
          >
            <FaHome className="mr-1 transition-transform group-hover:scale-125 duration-200" />
            <span className="hidden md:inline">Home</span>
            <span className="absolute bottom-0 left-0 w-full border-b-2 border-transparent hover:border-purple-950 transition-all breadcrumb-border"></span>
          </Link>
        </li>

        {/* Breadcrumb Links */}
        {pathnames.map((name, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <React.Fragment key={to}>
              {/* Divider Icon */}
              <li className="text-gray-400 mx-2">
                <PiGreaterThanLight className="transition-transform duration-200 text-purple-950 hover:text-gray-800 " />
              </li>

              {/* Breadcrumb Link */}
              <li className="relative flex items-center">
                <Link
                  to={to}
                  className="text-purple-950 hover:text-gray-800 transition-colors relative pb-1 capitalize group"
                >
                  {name.replace(/-/g, ' ')}
                  <span className="absolute bottom-0 left-0 w-full border-b-2 border-transparent hover:border-purple-950 transition-all breadcrumb-border"></span>
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

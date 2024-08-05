import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="p-2 mb-6">
      <ol className="flex items-center space-x-2 text-purple-950 text-md md:text-base">
        <li className="relative">
          <Link 
            to="/" 
            className="flex items-center text-purple-950 hover:text-gray-800 transition-colors relative pb-1"
          >
            <FaHome className="mr-1"/>
            <span className="hidden md:inline">Home</span>
            <span className="absolute bottom-0 left-0 w-full border-b-2 border-transparent hover:border-purple-950 transition-all breadcrumb-border"></span>
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <React.Fragment key={to}>
              <li className="relative flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link 
                  to={to} 
                  className="text-purple-950 hover:text-gray-800 transition-colors relative pb-1 capitalize"
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

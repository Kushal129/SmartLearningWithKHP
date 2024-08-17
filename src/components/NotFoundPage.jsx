import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => (
  <div className="text-center p-6">
    <h1 className="text-6xl text-purple-900 font-bold mb-4">404 Not Found</h1>
    <p className="text-md mb-4">The page you are looking for does not exist.</p>
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
      alt="404 Not Found"
      className="mx-auto mb-4 w-3/4 md:w-1/2"
    />
    <p className="text-lg mb-4">Oops! It seems like this page is missing.</p>
    <Link
      to="/"
      className="inline-flex text-white bg-purple-900 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
    >
      Go Back to Homepage
    </Link>
  </div>
);

export default NotFoundPage;

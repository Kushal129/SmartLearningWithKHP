import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const lowQualityImageUrl = 'https://via.placeholder.com/80x80?text=404';
  const highQualityImageUrl = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg';

  useEffect(() => {
    const img = new Image();
    img.src = highQualityImageUrl;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center text-center justify-center min-h-screen text-purple-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl text-center font-extrabold mb-4">404</h1>
        <h2 className="text-4xl text-center font-bold mb-6">Page Not Found !</h2>
      </motion.div>

      <motion.img
        src={imageLoaded ? highQualityImageUrl : lowQualityImageUrl}
        alt="404 Robot"
        className="w-64 h-64 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        loading="eager"
      />

      <motion.p 
        className="text-xl mb-8 max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Oops! It seems you've wandered into uncharted territory. Let's get you back on track!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="px-8 py-3 text-center bg-purple-900 text-white rounded-full font-bold text-lg hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

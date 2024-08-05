import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { FaLinux, FaNetworkWired } from 'react-icons/fa';
import { GiEyeTarget } from "react-icons/gi";

const cards = [
  { 
    title: 'Kali Linux Installation', 
    description: 'Guide to installing Kali Linux.', 
    path: '/kali-installation', 
    icon: <FaLinux className="text-6xl text-indigo-600 mb-4" /> 
  },
//   { 
//     title: 'Nmap', 
//     description: 'Learn about network scanning with Nmap.', 
//     path: '/nmap', 
//     icon: <FaNetworkWired className="text-6xl text-teal-500 mb-4" /> 
//   },
];
const deftcards = [ 
{ 
    title: 'Under Devlopmnet Nmap',  
    description: 'This section is under Devlopmnet.', 
    path: '/', 
    icon: <GiEyeTarget className="text-6xl text-gray-400 mb-4" /> 
  },

];
const IndexPage = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 25 },
  });

  return (
    <div className="min-h-screen flex flex-col rounded-xl ">
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-extrabold mb-12 text-gray-900 text-center">
          Welcome to SmartLearning with <span className="text-purple-800">KHP</span>
        </h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <animated.div
              key={index}
              style={springProps}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <Link to={card.path} className="block p-6 text-center transition-colors duration-200">
                <div className="flex items-center justify-center mb-4 p-4 rounded-full transition-colors duration-200">
                  {card.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-gray-800">{card.title}</h2>
                <p className="text-gray-600 group-hover:text-gray-500">{card.description}</p>
              </Link>
            </animated.div>
          ))}
           {deftcards.map((card, index) => (
        <animated.div
          key={index}
          style={springProps}
          className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300"
        >
          <Link to={card.path} className="block p-6 text-center cursor-not-allowed ">
            <div className="flex items-center justify-center mb-4 p-4 rounded-full">
              {card.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </Link>
        </animated.div>
      ))}
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

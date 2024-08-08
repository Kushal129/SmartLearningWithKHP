import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { FaNetworkWired, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import { GiEyeTarget } from 'react-icons/gi';

const cards = [
  {
    title: 'Kali Linux in VMware Installation',
    description: 'Guide to installing Kali Linux into VMware.',
    path: '/kali-installation',
    icon: <img src='https://cdn-icons-png.flaticon.com/512/15465/15465695.png' className='w-[50%] h-[50%]' />
  },
  {
    title: 'Nmap',
    description: 'Learn about network scanning with Nmap.',
    path: '/nmap',
    icon: <img src='https://miro.medium.com/v2/resize:fit:351/0*P4UVvCNl7EX4Xfgn.png' className='w-[50%] h-[50%]'/>
  },
];

// const deftcards = [
//   {
//     title: 'Under Development Nmap',
//     description: 'This section is under development.',
//     path: '/',
//     icon: <GiEyeTarget className="text-6xl text-gray-400 mb-4" />
//   },
// ];

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 25 },
  });

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col rounded-xl">
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-extrabold mb-12 text-gray-900 text-center">
          Welcome to SmartLearning with <span className="text-purple-800">KHP</span>
        </h1>

        {/* Search Bar */}
        <div className="mb-8 text-center">
          <div className="relative inline-block w-full max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch className="text-lg" />
            </span>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.length > 0 ? filteredCards.map((card, index) => (
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
          )) : (
            <p className="text-center text-gray-600 flex items-center justify-center">
              <FaRegWindowClose className="text-black mr-2" />
              <span>No results found for "<strong>{searchQuery}</strong>"</span>
            </p>
          )}

          {/* {deftcards.map((card, index) => (
            <animated.div
              key={index}
              style={springProps}
              className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300"
            >
              <Link to={card.path} className="block p-6 text-center cursor-not-allowed">
                <div className="flex items-center justify-center mb-4 p-4 rounded-full">
                  {card.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </Link>
            </animated.div>
          ))} */}
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

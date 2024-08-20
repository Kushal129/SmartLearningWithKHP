import React, { useState } from 'react';
import moment from 'moment';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { FaRegWindowClose, FaSearch } from 'react-icons/fa';
import ShortlyData from './Shortlydata';


// const deftcards = [
//   {
//     title: 'Under Development Nmap',
//     description: 'This section is under development.',
//     path: '/',
//     icon: <GiEyeTarget className="text-6xl text-gray-400 mb-4" />
//   },
// ];

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
    icon: <img src='https://miro.medium.com/v2/resize:fit:351/0*P4UVvCNl7EX4Xfgn.png' className='w-[50%] h-[50%]' />
  },
  {
    title: 'All Port List',
    description: 'All Networks Port List',
    path: '/AllPortsList',
    icon: <img src='https://ipvm-uploads.s3.amazonaws.com/uploads/a4ca/a530/ethernet.png' className='w-[50%] h-[50%]' />
  },
];

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 25 },
  });

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort shortlyData by date and time in descending order
  const sortedData = ShortlyData.sort((a, b) =>
    new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time)
  );

  // Slice to show only the latest 4 items
  const latestData = sortedData.slice(0, 4);

  const handleToggleExpand = (index) => {
    setExpandedItemIndex(expandedItemIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col rounded-xl">
      <main className="flex-grow p-8">
        <h1 className="lg:text-4xl text-3xl font-extrabold mb-12 text-gray-900 text-center">
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
              className="w-full px-4 py-2 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-purple-500 transition-shadow duration-300"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch className="text-lg" />
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <animated.div
          style={springProps}
          className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
        </animated.div>

        {/* Latest Cybersecurity Updates */}
        <animated.div
          style={springProps}
          className="mt-12"
        >
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Latest Cybersecurity Shortly content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestData.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {expandedItemIndex === index ? item.description : `${item.description.slice(0, 100)}...`}
                  </p>
                  {item.description.length > 100 && (
                    <button
                      className="text-purple-800 hover:underline"
                      onClick={() => handleToggleExpand(index)}
                    >
                      {expandedItemIndex === index ? 'View Less' : 'View More'}
                    </button>
                  )}
                  <p className="text-gray-400 text-sm hidden">{moment(item.date + ' ' + item.time).format('MMMM D, YYYY h:mm A')}</p>
                </div>
              ))}
            </div>
            {sortedData.length > 4 && (
              <div className="mt-8 text-center">
                <Link to="/All-ShortlyContent" className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg">
                  See More ?
                </Link>
              </div>
            )}
          </div>
        </animated.div>




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
      </main>
    </div>
  );
};

export default IndexPage;

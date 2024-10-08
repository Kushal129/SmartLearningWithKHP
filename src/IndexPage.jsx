import React, { useState } from 'react';
import moment from 'moment';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { FaRegWindowClose, FaSearch } from 'react-icons/fa';
import ShortlyData from './Shortlydata';

const cards = [
  {
    title: 'Kali Linux in VMware Installation',
    description: 'Guide to installing Kali Linux into VMware.',
    path: '/Kali-Installation',
    icon: <img src='https://cdn-icons-png.flaticon.com/512/15465/15465695.png' className='w-[50%] h-[50%]' />
  },
  {
    title: 'Nmap',
    description: 'Learn about network scanning with Nmap.',
    path: '/Nmap',
    icon: <img src='https://miro.medium.com/v2/resize:fit:351/0*P4UVvCNl7EX4Xfgn.png' className='w-[50%] h-[50%]' />
  },
  {
    title: 'All Port List',
    description: 'All Networks Port List',
    path: '/AllPortsList',
    icon: <img src='https://ipvm-uploads.s3.amazonaws.com/uploads/a4ca/a530/ethernet.png' className='w-[50%] h-[50%]' />
  },
  // sql injeaction
  {
    title: 'SQL Injection',
    description: 'Learn about SQL Injection 0 to PRO.',
    path: '/Sql-injection',
    icon: <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*kPOMkxicnlfdeqibsnvZeA.jpeg' className='w-[100%] h-[100%]' />
  }
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
                <h2 className="text-2xl font-semibold mb-2 text-purple-700 group-hover:text-purple-800">{card.title}</h2>
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
            <h2 className="text-2xl font-bold text-center mb-4">Latest Cybersecurity Shortly Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestData.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className={`text-gray-600 mb-4 ${expandedItemIndex === index ? '' : 'truncate'}`}>
                    {item.description}
                  </p>
                  {item.additionalPoints && item.additionalPoints.length > 0 && (
                    <ul className={`list-disc list-inside text-gray-600 mt-4 ${expandedItemIndex === index ? '' : 'max-h-32 overflow-hidden'}`}>
                      {item.additionalPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                  <button
                    className="text-purple-800 hover:underline mt-2 block"
                    onClick={() => handleToggleExpand(index)}
                  >
                    {expandedItemIndex === index ? 'View Less' : 'View More'}
                  </button>
                  <p className="text-gray-400 text-sm mt-2">{moment(item.date + ' ' + item.time).format('MMMM D, YYYY h:mm A')}</p>
                </div>
              ))}
            </div>
            {sortedData.length > 4 && (
              <div className="mt-8 text-center">
                <Link to="/All-ShortlyContent" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">See More ?</span>
                  <span className="relative invisible">See More ?</span>
                </Link>
              </div>
            )}
          </div>
        </animated.div>
      </main>
    </div>
  );
};

export default IndexPage;

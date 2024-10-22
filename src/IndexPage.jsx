import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';
import { FaRegWindowClose, FaChevronLeft, FaChevronRight, FaSearch, FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import ShortlyData from './Shortlydata';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useSwipeable } from 'react-swipeable';

const cards = [
  {
    title: 'Kali Linux in VMware Installation',
    description: 'Step-by-step guide to installing Kali Linux in VMware for cybersecurity testing.',
    path: '/Kali-Installation',
    icon: 'https://cdn-icons-png.flaticon.com/512/15465/15465695.png'
  },
  {
    title: 'Nmap: Network Mapping Tool',
    description: 'Explore advanced network scanning techniques with Nmap for security professionals.',
    path: '/Nmap',
    icon: 'https://i.pinimg.com/736x/f5/85/9a/f5859aede9aacdbc9d2183e956bec163.jpg'
  },
  {
    title: 'Comprehensive Network Port List',
    description: 'Detailed list of network ports, their functions, and security implications.',
    path: '/AllPortsList',
    icon: 'https://ipvm-uploads.s3.amazonaws.com/uploads/a4ca/a530/ethernet.png'
  },
  {
    title: 'SQL Injection: Advanced Techniques',
    description: 'In-depth exploration of SQL Injection vulnerabilities and prevention strategies.',
    path: '/Sql-injection',
    icon: 'https://cdn-icons-png.flaticon.com/512/10961/10961459.png'
  },
  {
    title: 'SQL Injection: Advanced Techniques',
    description: 'In-depth exploration of SQL Injection vulnerabilities and prevention strategies.',
    path: '/Sql-injection',
    icon: 'https://cdn-icons-png.flaticon.com/512/10961/10961459.png'
  },
  {
    title: 'SQL Injection: Advanced Techniques',
    description: 'In-depth exploration of SQL Injection vulnerabilities and prevention strategies.',
    path: '/Sql-injection',
    icon: 'https://cdn-icons-png.flaticon.com/512/10961/10961459.png'
  },
];

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(cards);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 768) {
        setCardsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: config.molasses,
  });

  const filteredCards = visibleCards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = ShortlyData.sort((a, b) =>
    new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time)
  );

  const latestData = sortedData.slice(0, 4);

  const handleToggleExpand = (index) => {
    setExpandedItemIndex(expandedItemIndex === index ? null : index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(filteredCards.length / cardsPerPage) - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(filteredCards.length / cardsPerPage) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col rounded-xl">
      <main className="flex-grow p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-5xl text-4xl font-extrabold mb-12 text-center"
        >
          {!typewriterComplete ? (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Welcome to <span class="text-purple-800">SmartLearning</span> with <span class="text-purple-800">KHP</span>')
                  .callFunction(() => {
                    setTypewriterComplete(true);
                  })
                  .start();
              }}
              options={{
                cursor: '',
                delay: 50,
              }}
            />
          ) : (
            <span>Welcome to <span className="text-purple-800 font-bold">SmartLearning</span> with <span className="text-purple-800 font-extrabold">KHP</span><span className="text-black"> !</span></span>
          )}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="relative inline-block w-full max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for cybersecurity topics..."
              className="w-full px-4 py-3 pl-12 border-2 border-purple-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500">
              <FaSearch className="text-xl" />
            </span>
          </div>
        </motion.div>

        <animated.div style={springProps} className="container mx-auto relative">
          <div className="overflow-hidden touch-pan-y" {...handlers}>
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredCards.map((card, index) => (
                <div key={index} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 mb-4`}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-purple-50 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 transform hover:-translate-y-2 h-full"
                  >
                    <Link to={card.path} className="block h-full group">
                      <div className="p-4 flex flex-col h-full rounded-xl transition-all duration-300 hover:shadow-lg">
                        <div className="mb-4 relative">
                          <div className="absolute inset-0 bg-purple-200 opacity-50 rounded-full transform -rotate-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105"></div>
                          <div className="relative z-10 bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                            <img src={card.icon} alt={card.title} className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110" />
                          </div>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-purple-800 text-center transition-colors duration-300 group-hover:text-purple-900">{card.title}</h2>
                        <p className="text-purple-700 text-xs leading-relaxed flex-grow text-center mb-4 transition-colors duration-300 group-hover:text-purple-800">{card.description}</p>
                        <div className="mt-auto">
                          <div className="bg-purple-600 text-white py-2 px-4 rounded-full text-center font-semibold transition-all duration-300 transform group-hover:bg-purple-700 group-hover:scale-105 group-hover:shadow-md flex items-center justify-center">
                            <span className="mr-2 text-sm">Explore Now</span>
                            <motion.div
                              initial={{ x: 0 }}
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <FaArrowRight className="text-base" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
          >
            <FaChevronRight />
          </button> */}
        </animated.div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 focus:outline-none transition-all duration-300 ${
                index === currentIndex ? 'bg-purple-600 w-6' : 'bg-purple-300'
              }`}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Latest Cybersecurity Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-purple-100 shadow-lg hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 transform hover:scale-105"
                >
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">{item.title}</h3>
                  <p className={`text-gray-600 mb-4 ${expandedItemIndex === index ? '' : 'line-clamp-3'}`} 
                     dangerouslySetInnerHTML={{ __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-600">$1</strong>') }}>
                  </p>
                  {item.additionalPoints && item.additionalPoints.length > 0 && (
                    <ul className={`list-disc list-inside text-gray-600 mt-4 ${expandedItemIndex === index ? '' : 'hidden'}`}>
                      {item.additionalPoints.map((point, i) => (
                         <li key={i} dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-600">$1</strong>') }}></li>
                      ))}
                    </ul>
                  )}
                  <button
                    className="text-purple-600 hover:text-purple-800 mt-2 block transition-colors duration-300"
                    onClick={() => handleToggleExpand(index)}
                  >
                    {expandedItemIndex === index ? 'View Less' : 'View More'}
                  </button>
                  <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 text-purple-500" />
                      <span>{moment(item.date).format('MMMM D, YYYY')}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1 text-purple-500" />
                      <span>{moment(item.time, 'HH:mm').format('h:mm A')}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {sortedData.length > 4 && (
              <div className="mt-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    to="/All-ShortlyContent"
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 rounded-full overflow-hidden group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-purple-700"></span>
                    <span className="relative flex items-center">
                      Explore All Content
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default IndexPage;

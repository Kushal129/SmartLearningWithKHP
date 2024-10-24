  import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from '../components/Admin/firebase';
import { getApp, initializeApp } from "firebase/app";
import { FaSearch, FaCalendarAlt, FaClock, FaThLarge, FaList, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const app = getApp() || initializeApp(firebaseConfig);
const database = getDatabase(app);

const AllShortlyContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [shortlyData, setShortlyData] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const shortlyContentRef = ref(database, 'shortlyContent');
      try {
        const snapshot = await get(shortlyContentRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setShortlyData(dataArray);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const sortedData = shortlyData.sort((a, b) => {
    const dateA = new Date(a.date + ' ' + a.time);
    const dateB = new Date(b.date + ' ' + b.time);
    return dateB - dateA;
  });

  const filteredData = sortedData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (item) => {
    setSelectedImage(item.image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const toggleExpand = (id, field) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: !prev[id]?.[field]
      }
    }));
  };

  const renderAdditionalPoints = (points, id) => {
    const isExpanded = expandedItems[id]?.additionalPoints;
    const displayPoints = isExpanded ? points : points.slice(0, 2);
    
    return (
      <>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {displayPoints.map((point, i) => {
            const boldText = point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            return (
              <li key={i} dangerouslySetInnerHTML={{ __html: boldText }} />
            );
          })}
        </ul>
        {points.length > 2 && (
          <button 
            onClick={() => toggleExpand(id, 'additionalPoints')} 
            className="text-purple-900 hover:text-purple-950 transition duration-300"
          >
            {isExpanded ? (
              <>Show Less <FaChevronUp className="inline ml-1" /></>
            ) : (
              <>Show More <FaChevronDown className="inline ml-1" /></>
            )}
          </button>
        )}
      </>
    );
  };

  const renderContent = (item) => {
    const isExpanded = expandedItems[item.id]?.description;
    const shortDescription = item.description.slice(0, 150) + (item.description.length > 150 ? '...' : '');
    
    return (
      <>
        <p className="text-gray-600 mb-4">
          {isExpanded ? item.description : shortDescription}
        </p>
        {item.description.length > 150 && (
          <button 
            onClick={() => toggleExpand(item.id, 'description')} 
            className="text-purple-600 hover:text-purple-800 transition duration-300 mb-4"
          >
            {isExpanded ? (
              <>Show Less <FaChevronUp className="inline ml-1" /></>
            ) : (
              <>Show More <FaChevronDown className="inline ml-1" /></>
            )}
          </button>
        )}
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">All Cybersecurity Shortly Content</h2>

      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full p-3 pl-10 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search content by title"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            <FaThLarge />
          </button>
          <button
            className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            <FaList />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {viewMode === 'grid' ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={item.image}
                    alt={`Preview of ${item.title}`}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => handleImageClick(item)}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-purple-900">{item.title}</h3>
                    {renderContent(item)}
                    {item.additionalPoints && item.additionalPoints.length > 0 && renderAdditionalPoints(item.additionalPoints, item.id)}
                    <div className="flex justify-between text-sm text-gray-500">
                      <span><FaCalendarAlt className="inline mr-1 text-purple-900" />{item.date}</span>
                      <span><FaClock className="inline mr-1 text-purple-900" />{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mb-4"></div>
                <p className="text-gray-500">No results found</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={item.image}
                    alt={`Preview of ${item.title}`}
                    className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 cursor-pointer"
                    onClick={() => handleImageClick(item)}
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-purple-900">{item.title}</h3>
                    {renderContent(item)}
                    {item.additionalPoints && item.additionalPoints.length > 0 && renderAdditionalPoints(item.additionalPoints, item.id)}
                    <div className="flex justify-end text-sm text-gray-500">
                      <span className="mr-4"><FaCalendarAlt className="inline mr-1" />{item.date}</span>
                      <span><FaClock className="inline mr-1" />{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mb-4"></div>
                <p className="text-gray-500">No results found</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative bg-white p-4 rounded-lg max-w-3xl mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
                onClick={handleCloseModal}
                aria-label="Close image modal"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage}
                alt="Selected Preview"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllShortlyContent;
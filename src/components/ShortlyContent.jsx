import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from '../components/Admin/firebase';
import { getApp, initializeApp } from "firebase/app";
import { FaSearch, FaCalendarAlt, FaClock } from 'react-icons/fa';

const app = getApp() || initializeApp(firebaseConfig);
const database = getDatabase(app);

const AllShortlyContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [shortlyData, setShortlyData] = useState([]);

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

  const renderAdditionalPoints = (points) => {
    return points.map((point, i) => {
      const boldText = point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <li key={i} dangerouslySetInnerHTML={{ __html: boldText }} />
      );
    });
  };

  return (
    <div className="container mx-auto m-3">
      <h2 className="text-2xl font-bold text-center mb-4">All Cybersecurity Shortly Content</h2>

      <div className="mb-4 flex justify-center items-center">
        <div className="relative w-full max-w-md mr-4">
          <input
            type="text"
            placeholder="Search by title..."
            className="border shadow-md focus:outline-none focus:ring-1 focus:ring-purple-500 transition-shadow duration-300 rounded-lg p-2 pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search content by title"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        <div className="flex">
          <button
            className={`px-4 py-2 rounded-l-lg ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={item.image}
                  alt={`Preview of ${item.title}`}
                  className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => handleImageClick(item)}
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.additionalPoints && item.additionalPoints.length > 0 && (
                  <ul className="list-disc list-inside text-gray-600">
                    {renderAdditionalPoints(item.additionalPoints)}
                  </ul>
                )}
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span><FaCalendarAlt className="inline mr-1" />{item.date}</span>
                  <span><FaClock className="inline mr-1" />{item.time}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No results found</p>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex">
                <img
                  src={item.image}
                  alt={`Preview of ${item.title}`}
                  className="w-48 h-48 object-cover rounded-lg mr-4 cursor-pointer"
                  onClick={() => handleImageClick(item)}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.additionalPoints && item.additionalPoints.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600">
                      {renderAdditionalPoints(item.additionalPoints)}
                    </ul>
                  )}
                  <div className="mt-4 flex justify-end text-sm text-gray-500">
                    <span className="mr-4"><FaCalendarAlt className="inline mr-1" />{item.date}</span>
                    <span><FaClock className="inline mr-1" />{item.time}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-lg mx-4">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
              onClick={handleCloseModal}
              aria-label="Close image modal"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllShortlyContent;

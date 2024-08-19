import React, { useState } from 'react';
import shortlyData from '../Shortlydata';
import { FaSearch } from 'react-icons/fa';  

const AllShortlyContent = () => {
  // State for search term and modal image
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Sort data by date and time in descending order
  const sortedData = shortlyData.sort((a, b) => 
    new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time)
  );

  // Filter data based on search term
  const filteredData = sortedData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (item) => {
    setSelectedImage(item.image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto m-3">
      <h2 className="text-2xl font-bold text-center mb-4">All Cybersecurity Updates</h2>
      
      <div className="mb-4 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by title..."
            className="border shadow-md focus:outline-none focus:ring-1 focus:ring-purple-500 transition-shadow duration-300 rounded-lg p-2 pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer" 
                onClick={() => handleImageClick(item)}
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No results found</p>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-lg mx-4">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl" 
              onClick={handleCloseModal}
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

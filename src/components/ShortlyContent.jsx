import React, { useState } from 'react';
import shortlyData from '../Shortlydata';
import moment from 'moment';

const AllShortlyContent = () => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Sort data by date and time in descending order
  const sortedData = shortlyData.sort((a, b) => 
    new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time)
  );

  // Filter data based on search term
  const filteredData = sortedData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto m-3">
      <h2 className="text-2xl font-bold text-center mb-4">All Cybersecurity Updates</h2>
      
      {/* Search input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by title..."
          className="border shadow-md focus:outline-none focus:ring-1 focus:ring-purple-500 transition-shadow duration-300 rounded-lg p-2 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-gray-400 text-sm">{moment(item.date + ' ' + item.time).format('MMMM D, YYYY h:mm A')}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default AllShortlyContent;

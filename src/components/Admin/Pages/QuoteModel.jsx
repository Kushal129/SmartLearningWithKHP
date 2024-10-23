import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

const QuoteModel = ({ showQuotesModel, toggleQuotesModel, darkMode, currentQuote }) => {
  return (
    <>
      {showQuotesModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`w-3/4 max-w-2xl ${darkMode ? 'bg-gray-800' : 'bg-purple-950'} rounded-lg shadow-xl`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-100'}`}>Be Motivated</h2>
                <button 
                  onClick={toggleQuotesModel}
                  className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-600'} text-gray-100`}
                  aria-label="Close"
                >
                  <RiCloseLine size={24} />
                </button>
              </div>
              <div className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-100'}`}>
                <p className="text-xl italic">"{currentQuote}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteModel;
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, get, set } from "firebase/database";
import { firebaseConfig } from '../firebase';
import { getApp, initializeApp } from "firebase/app";
import { FaFileAlt, FaCopy, FaDownload } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const app = getApp() || initializeApp(firebaseConfig);
const database = getDatabase(app);

const AdminShortlyContent = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    additionalPoints: [''],
    date: '',
    time: ''
  });
  const [showFirebaseFile, setShowFirebaseFile] = useState(false);
  const [firebaseFileContent, setFirebaseFileContent] = useState('');
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAdditionalPointChange = (index, value) => {
    const newAdditionalPoints = [...formData.additionalPoints];
    newAdditionalPoints[index] = value;
    setFormData(prevState => ({
      ...prevState,
      additionalPoints: newAdditionalPoints
    }));
  };

  const addAdditionalPoint = () => {
    setFormData(prevState => ({
      ...prevState,
      additionalPoints: [...prevState.additionalPoints, '']
    }));
  };

  const removeAdditionalPoint = (index) => {
    const newAdditionalPoints = formData.additionalPoints.filter((_, i) => i !== index);
    setFormData(prevState => ({
      ...prevState,
      additionalPoints: newAdditionalPoints
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const shortlyContent = {
        title: formData.title,
        image: formData.image,
        description: formData.description,
        additionalPoints: formData.additionalPoints.filter(point => point !== ''),
        date: formData.date,
        time: formData.time
      };

      await push(ref(database, 'shortlyContent'), shortlyContent);

      toast.success('Content added successfully!', { position: 'bottom-center' });
      setFormData({
        title: '',
        image: '',
        description: '',
        additionalPoints: [''],
        date: '',
        time: ''
      });
    } catch (error) {
      console.error("Error adding content: ", error);
      toast.error('Error adding content. Please try again.', { position: 'bottom-center' });
    }
  };

  const handleShowFirebaseFile = () => {
    get(ref(database, 'shortlyContent'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFirebaseFileContent(JSON.stringify(snapshot.val(), null, 2));
          setShowFirebaseFile(true);
        } else {
          toast.error('No data available', { position: 'bottom-center' });
        }
      })
      .catch((error) => {
        toast.error('Error fetching data: ' + error.message, { position: 'bottom-center' });
      });
  };

  const handleCopyContent = () => {
    navigator.clipboard.writeText(firebaseFileContent)
      .then(() => toast.success('Content copied to clipboard!', { position: 'bottom-center' }))
      .catch(err => toast.error('Failed to copy content: ' + err.message, { position: 'bottom-center' }));
  };

  const handleFormatJSON = () => {
    try {
      const formattedContent = JSON.stringify(JSON.parse(firebaseFileContent), null, 2);
      setFirebaseFileContent(formattedContent);
    } catch (error) {
      toast.error('Error formatting JSON: ' + error.message, { position: 'bottom-center' });
    }
  };

  const handleSaveChanges = () => {
    try {
      const contentObj = JSON.parse(firebaseFileContent);
      set(ref(database, 'shortlyContent'), contentObj)
        .then(() => {
          toast.success('Changes saved successfully!', { position: 'bottom-center' });
          setShowSaveButton(false);
        })
        .catch(error => toast.error('Error saving changes: ' + error.message, { position: 'bottom-center' }));
    } catch (error) {
      toast.error('Error parsing JSON: ' + error.message, { position: 'bottom-center' });
    }
  };

  return (
    <div className={`container mx-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Toaster position="bottom-center" />
      <h1 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add Shortly Content</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
            required
          />
        </div>
        <div>
          <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Image URL:</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
            required
          />
        </div>
        <div>
          <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
            required
          ></textarea>
        </div>
        <div>
          <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Additional Points:</label>
          {formData.additionalPoints.map((point, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={point}
                onChange={(e) => handleAdditionalPointChange(index, e.target.value)}
                className={`flex-grow p-2 border rounded mr-2 ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
              />
              <button
                type="button"
                onClick={() => removeAdditionalPoint(index)}
                className={`px-2 py-1 rounded ${darkMode ? 'bg-red-700 text-white hover:bg-red-600' : 'bg-red-500 text-white hover:bg-red-600'}`}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addAdditionalPoint}
            className={`px-2 py-1 rounded ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Add Point
          </button>
        </div>
        <div>
          <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
            required
          />
        </div>
        <div>
          <label className={`block mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
            required
          />
        </div>
        <button type="submit" className={`px-4 py-2 rounded ${darkMode ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-green-500 text-white hover:bg-green-600'}`}>
          Add Content
        </button>
      </form>

      <button
        type="button"
        onClick={handleShowFirebaseFile}
        className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
          darkMode ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-green-500 text-white hover:bg-green-600'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 mt-8`}
      >
        <FaFileAlt className="mr-2" /> Show Firebase File
      </button>

      {showFirebaseFile && (
        <div className="mt-8">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Firebase File Content</h2>
          <div className={`w-full border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} rounded-md shadow-sm`}>
            <div className={`flex items-center justify-between px-3 py-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <div className="flex space-x-2">
                <button 
                  onClick={handleCopyContent}
                  className={`px-3 py-1 rounded flex items-center ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  <FaCopy className="mr-1" /> Copy
                </button>
                <button 
                  onClick={() => {
                    const blob = new Blob([firebaseFileContent], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'firebase_content.txt';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className={`px-3 py-1 rounded flex items-center ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  <FaDownload className="mr-1" /> Download
                </button>
                <button 
                  onClick={handleFormatJSON}
                  className={`px-3 py-1 rounded flex items-center ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  Format JSON
                </button>
              </div>
            </div>
            <textarea
              value={firebaseFileContent}
              onChange={(e) => {
                setFirebaseFileContent(e.target.value);
                setShowSaveButton(true);
              }}
              className={`w-full h-96 px-3 py-2 font-mono text-sm ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'} focus:outline-none resize-none`}
            />
          </div>
          {showSaveButton && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSaveChanges}
                className={`px-4 py-2 rounded ${darkMode ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-green-500 text-white hover:bg-green-600'} transition-colors`}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminShortlyContent;

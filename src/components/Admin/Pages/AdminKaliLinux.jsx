import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaSave, FaUpload, FaFileAlt, FaCopy, FaDownload } from 'react-icons/fa';
import { getDatabase, ref, push, get, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, Toaster } from 'react-hot-toast';
import { firebaseConfig } from '../firebase';
import { getApp, initializeApp } from "firebase/app";

const app = getApp() || initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

const AdminKaliLinux = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    topicName: '',
    logo: '',
    intro: '',
    topicContent: '',
    description: '',
    codeExamples: [{ title: '', code: '' }],
    steps: [''],
    videoUrl: '',
    images: []
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

  const handleArrayInputChange = (index, field, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prevState => ({
      ...prevState,
      [field]: newArray
    }));
  };

  const handleAddArrayItem = (field) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: [...prevState[field], '']
    }));
  };

  const handleRemoveArrayItem = (field, index) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: prevState[field].filter((_, i) => i !== index)
    }));
  };

  const handleCodeExampleChange = (index, field, value) => {
    const newCodeExamples = [...formData.codeExamples];
    newCodeExamples[index][field] = value;
    setFormData(prevState => ({
      ...prevState,
      codeExamples: newCodeExamples
    }));
  };

  const handleAddCodeExample = () => {
    setFormData(prevState => ({
      ...prevState,
      codeExamples: [...prevState.codeExamples, { title: '', code: '' }]
    }));
  };

  const handleRemoveCodeExample = (index) => {
    setFormData(prevState => ({
      ...prevState,
      codeExamples: prevState.codeExamples.filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadPromises = files.map(async (file) => {
      const imageRef = storageRef(storage, `kaliimg/${file.name}`);
      await uploadBytes(imageRef, file);
      return getDownloadURL(imageRef);
    });

    try {
      const urls = await Promise.all(uploadPromises);
      setFormData(prevState => ({
        ...prevState,
        images: [...prevState.images, ...urls]
      }));
      toast.success('Images uploaded successfully!', { position: 'bottom-center' });
    } catch (error) {
      toast.error('Error uploading images: ' + error.message, { position: 'bottom-center' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push(ref(database, 'kaliLinux'), formData)
      .then(() => {
        toast.success('Content saved successfully!', { position: 'bottom-center' });
        setFormData({
          topicName: '',
          logo: '',
          intro: '',
          topicContent: '',
          description: '',
          codeExamples: [{ title: '', code: '' }],
          steps: [''],
          videoUrl: '',
          images: []
        });
      })
      .catch((error) => {
        toast.error('Error saving content: ' + error.message, { position: 'bottom-center' });
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
      set(ref(database, 'kaliLinux'), contentObj)
        .then(() => {
          toast.success('Changes saved successfully!', { position: 'bottom-center' });
          setShowSaveButton(false);
        })
        .catch(error => toast.error('Error saving changes: ' + error.message, { position: 'bottom-center' }));
    } catch (error) {
      toast.error('Error parsing JSON: ' + error.message, { position: 'bottom-center' });
    }
  };

  const handleShowFirebaseFile = () => {
    get(ref(database, 'kaliLinux'))
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

  return (
    <div className="max-w-full mx-auto p-6">
      <Toaster position="bottom-center" />
      <h1 className="text-3xl font-bold mb-6">Kali Linux Content Management</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Topic Name" name="topicName" value={formData.topicName} onChange={handleInputChange} darkMode={darkMode} />
        <InputField label="Logo URL" name="logo" value={formData.logo} onChange={handleInputChange} darkMode={darkMode} />
        <TextAreaField label="Introduction" name="intro" value={formData.intro} onChange={handleInputChange} darkMode={darkMode} />
        <InputField label="Topic Content" name="topicContent" value={formData.topicContent} onChange={handleInputChange} darkMode={darkMode} />
        <TextAreaField label="Description" name="description" value={formData.description} onChange={handleInputChange} darkMode={darkMode} />
        
        <div className="space-y-4">
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Code Examples</label>
          {formData.codeExamples.map((example, index) => (
            <div key={index} className="space-y-2 p-4 border rounded-lg">
              <input
                type="text"
                value={example.title}
                onChange={(e) => handleCodeExampleChange(index, 'title', e.target.value)}
                placeholder="Title"
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
              />
              <textarea
                value={example.code}
                onChange={(e) => handleCodeExampleChange(index, 'code', e.target.value)}
                placeholder="Code"
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
              />
              <button type="button" onClick={() => handleRemoveCodeExample(index)} className="text-red-500 hover:text-red-700 transition-colors">
                <FaTrash className="inline-block mr-1" /> Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddCodeExample} className="text-blue-500 hover:text-blue-700 transition-colors">
            <FaPlus className="inline-block mr-1" /> Add Code Example
          </button>
        </div>
        
        <ArrayField label="Steps" field="steps" values={formData.steps} onChange={handleArrayInputChange} onAdd={() => handleAddArrayItem('steps')} onRemove={(index) => handleRemoveArrayItem('steps', index)} darkMode={darkMode} />
        <InputField label="Video URL" name="videoUrl" value={formData.videoUrl} onChange={handleInputChange} darkMode={darkMode} />
        
        <div className="space-y-2">
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Upload Images</label>
          <div className={`p-4 border-2 border-dashed rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className={`hidden`}
              id="image-upload"
            />
            <label htmlFor="image-upload" className={`cursor-pointer flex items-center justify-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>
              <FaUpload />
              <span>Choose files</span>
            </label>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.images.map((url, index) => (
              <img key={index} src={url} alt={`Uploaded ${index}`} className="w-20 h-20 object-cover rounded" />
            ))}
          </div>
        </div>
        
        <button type="submit" className={`w-full px-4 py-2 rounded ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}>
          <FaSave className="inline mr-2" /> Save Content
        </button>
      </form>

      <button
        type="button"
        onClick={handleShowFirebaseFile}
        className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
          darkMode ? 'text-white bg-green-600 hover:bg-green-700' : 'text-white bg-green-500 hover:bg-green-600'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 mt-8`}
      >
        <FaFileAlt className="mr-2" /> Show Firebase File
      </button>

      {showFirebaseFile && (
        <div className="mt-8">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Firebase File Content</h2>
          <div className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-md shadow-sm`}>
            <div className={`flex items-center justify-between px-3 py-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
              <div className="flex space-x-2">
                <button 
                  onClick={handleCopyContent}
                  className={`px-3 py-1 rounded flex items-center ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
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
                  className={`px-3 py-1 rounded flex items-center ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  <FaDownload className="mr-1" /> Download
                </button>
                <button 
                  onClick={handleFormatJSON}
                  className={`px-3 py-1 rounded flex items-center ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
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
              className={`w-full h-96 px-3 py-2 font-mono text-sm ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-900'} focus:outline-none resize-none`}
            />
          </div>
          {showSaveButton && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSaveChanges}
                className={`px-4 py-2 rounded ${darkMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'} transition-colors`}
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

const InputField = ({ label, name, value, onChange, darkMode }) => (
  <div>
    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, darkMode }) => (
  <div>
    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="4"
      className={`mt-1 block w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
    />
  </div>
);

const ArrayField = ({ label, field, values, onChange, onAdd, onRemove, darkMode }) => (
  <div>
    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</label>
    {values.map((value, index) => (
      <div key={index} className="flex items-center space-x-2 mb-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(index, field, e.target.value)}
          className={`block w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        />
        <button type="button" onClick={() => onRemove(index)} className="text-red-500 hover:text-red-700 transition-colors">
          <FaTrash />
        </button>
      </div>
    ))}
    <button type="button" onClick={onAdd} className={`text-blue-500 hover:text-blue-700 transition-colors flex items-center`}>
      <FaPlus className="mr-1" /> Add {label}
    </button>
  </div>
);

export default AdminKaliLinux;

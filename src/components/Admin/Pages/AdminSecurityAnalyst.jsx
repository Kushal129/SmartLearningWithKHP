import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaSave, FaFileAlt } from 'react-icons/fa';
import { getDatabase, ref, push, get, set } from "firebase/database";
import { toast, Toaster } from 'react-hot-toast';
import { firebaseConfig } from '../firebase';
import { getApp, initializeApp } from "firebase/app";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const app = getApp() || initializeApp(firebaseConfig);
const database = getDatabase(app);  

const SecurityAnalystAdmin = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    topicName: '',
    title: '',
    description: '',
    points: '',
    images: [''],
    referenceUrls: [''],
    logo: '',
    intro: '',
    topicContent: '',
    codeExamples: [{ title: '', code: '' }],
    steps: '',
    videoUrl: ''
  });
  const [showFirebaseFile, setShowFirebaseFile] = useState(false);
  const [firebaseFileContent, setFirebaseFileContent] = useState('');
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      codeExamples: formData.codeExamples.filter(example => example.title.trim() !== '' && example.code.trim() !== ''),
      points: formData.points.split('\n').filter(point => point.trim() !== ''),
      images: formData.images.filter(image => image.trim() !== ''),
      referenceUrls: formData.referenceUrls.filter(url => url.trim() !== ''),
      steps: formData.steps.split('\n').filter(step => step.trim() !== '')
    };
    
    push(ref(database, 'securityAnalyst'), dataToSubmit)
      .then(() => {
        toast.success('Content saved successfully!', {
          duration: 4000,
          position: 'bottom-right',
        });
        setFormData({
          topicName: '',
          title: '',
          description: '',
          points: '',
          images: [''],
          referenceUrls: [''],
          logo: '',
          intro: '',
          topicContent: '',
          codeExamples: [{ title: '', code: '' }],
          steps: '',
          videoUrl: ''
        });
      })
      .catch((error) => {
        toast.error('Error saving content: ' + error.message, {
          duration: 4000,
          position: 'bottom-right',
        });
      });
  };

  const handleShowFirebaseFile = () => {
    get(ref(database, 'securityAnalyst'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setFirebaseFileContent(JSON.stringify(data, null, 2));
          setShowFirebaseFile(true);
        } else {
          toast.error('No data available', {
            duration: 4000,
            position: 'bottom-right',
          });
        }
      })
      .catch((error) => {
        toast.error('Error fetching data: ' + error.message, {
          duration: 4000,
          position: 'bottom-right',
        });
      });
  };

  const handleSaveChanges = () => {
    setAlertMessage('Are you sure you want to save the new data?');
    setIsAlertOpen(true);
  };

  const confirmSaveChanges = () => {
    try {
      const parsedData = JSON.parse(firebaseFileContent);
      set(ref(database, 'securityAnalyst'), parsedData)
        .then(() => {
          toast.success('Changes saved successfully!', {
            duration: 4000,
            position: 'bottom-right',
          });
          setShowSaveButton(false);
        })
        .catch((error) => {
          toast.error('Error saving changes: ' + error.message, {
            duration: 4000,
            position: 'bottom-right',
          });
        });
    } catch (error) {
      toast.error('Invalid JSON format. Please check your input.', {
        duration: 4000,
        position: 'bottom-right',
      });
    }
    setIsAlertOpen(false);
  };

  const handleFormatJSON = () => {
    try {
      const parsedData = JSON.parse(firebaseFileContent);
      const formattedContent = JSON.stringify(parsedData, null, 2);
      setFirebaseFileContent(formattedContent);
      setShowSaveButton(true);
      toast.success('JSON formatted successfully!', {
        duration: 2000,
        position: 'bottom-right',
      });
    } catch (error) {
      toast.error('Invalid JSON format. Please check your input.', {
        duration: 4000,
        position: 'bottom-right',
      });
    }
  };

  const handleCopyContent = () => {
    navigator.clipboard.writeText(firebaseFileContent);
    toast.success('Content copied to clipboard!', {
      duration: 2000,
      position: 'bottom-right',
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 ">
      <Toaster />
      <h1 className={`text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Security Analyst Content Management</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Topic Name"
          name="topicName"
          value={formData.topicName}
          onChange={handleInputChange}
          required
          darkMode={darkMode}
        />
        <InputField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          darkMode={darkMode}
        />
        <TextAreaField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          darkMode={darkMode}
        />
        <TextAreaField
          label="Points (Enter each point on a new line)"
          name="points"
          value={formData.points}
          onChange={handleInputChange}
          required
          darkMode={darkMode}
        />
        <ArrayField
          label="Images"
          field="images"
          values={formData.images}
          onChange={handleArrayInputChange}
          onAdd={() => handleAddArrayItem('images')}
          onRemove={(index) => handleRemoveArrayItem('images', index)}
          darkMode={darkMode}
        />
        <ArrayField
          label="Reference URLs"
          field="referenceUrls"
          values={formData.referenceUrls}
          onChange={handleArrayInputChange}
          onAdd={() => handleAddArrayItem('referenceUrls')}
          onRemove={(index) => handleRemoveArrayItem('referenceUrls', index)}
          darkMode={darkMode}
        />
        <InputField
          label="Logo URL"
          name="logo"
          type="url"
          value={formData.logo}
          onChange={handleInputChange}
          darkMode={darkMode}
        />
        <TextAreaField
          label="Introduction"
          name="intro"
          value={formData.intro}
          onChange={handleInputChange}
          required
          darkMode={darkMode}
        />
        <TextAreaField
          label="Topic Content"
          name="topicContent"
          value={formData.topicContent}
          onChange={handleInputChange}
          required
          darkMode={darkMode}
        />
        <div className="space-y-4">
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Code Examples</label>
          {formData.codeExamples.map((example, index) => (
            <CodeExampleField
              key={index}
              example={example}
              index={index}
              onChange={handleCodeExampleChange}
              onRemove={handleRemoveCodeExample}
              darkMode={darkMode}
            />
          ))}
          <button
            type="button"
            onClick={handleAddCodeExample}
            className={`w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${darkMode ? 
            'text-purple-200 bg-purple-800 hover:bg-purple-700' : 'text-purple-600 bg-purple-100 hover:bg-purple-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-purple-500`}
          >
            <FaPlus className="mr-2" /> Add Code Example
          </button>
        </div>
        <TextAreaField
          label="Steps (Enter each step on a new line)"
          name="steps"
          value={formData.steps}
          onChange={handleInputChange}
          required
          darkMode={darkMode}
        />
        <InputField
          label="Video URL"
          name="videoUrl"
          type="url"
          value={formData.videoUrl}
          onChange={handleInputChange}
          darkMode={darkMode}
        />
        <div className="flex justify-center mt-8 space-x-4">
          <button
            type="submit"
            className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? 
            'text-white bg-purple-600 hover:bg-purple-700' : 'text-white bg-purple-600 hover:bg-purple-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-purple-500 transition-colors duration-200`}
          >
            <FaSave className="mr-2" /> Save Content
          </button>
          <button
            type="button"
            onClick={handleShowFirebaseFile}
            className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? 
            'text-white bg-gradient-to-r from-red-700 via-orange-500 to-yellow-500 hover:from-red-800 hover:via-orange-600 hover:to-yellow-600' : 'text-white bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 hover:from-red-600 hover:via-orange-500 hover:to-yellow-500'}`}
          >
            <FaFileAlt className="mr-2" /> Show Firebase File
          </button>
        </div>  
      </form>

      {showFirebaseFile && (
        <div className="mt-8">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Firebase File Content</h2>
          <div className={`w-full border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-md shadow-sm`}>
            <div className={`flex items-center justify-between px-3 py-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
              <div className="flex space-x-2">
                <button 
                  onClick={handleCopyContent}
                  className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Copy
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
                  className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Download
                </button>
                <button 
                  onClick={handleFormatJSON}
                  className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
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
              className={`w-full h-96 px-3 py-2 font-mono text-sm ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-900'} focus:outline-none resize-none custom-scrollbar`}
            />
          </div>
          {showSaveButton && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSaveChanges}
                className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      )}

      <Transition appear show={isAlertOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsAlertOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 text-left align-middle shadow-xl transition-all`}>
                  <Dialog.Title as="h3" className={`text-lg font-medium leading-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Confirmation
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      {alertMessage}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-100 hover:bg-blue-200'} px-4 py-2 text-sm font-medium ${darkMode ? 'text-white' : 'text-blue-900'} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={confirmSaveChanges}
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} px-4 py-2 text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2`}
                      onClick={() => setIsAlertOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, required = false, darkMode }) => (
  <div className="w-full">
    <label htmlFor={name} className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
      required={required}
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, required = false, darkMode }) => (
  <div className="w-full">
    <label htmlFor={name} className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows="4"
      className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
      required={required}
    ></textarea>
  </div>
);

const ArrayField = ({ label, field, values, onChange, onAdd, onRemove, darkMode }) => (
  <div className="space-y-2">
    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{label}</label>
    {values.map((value, index) => (
      <div key={index} className="flex items-center space-x-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(index, field, e.target.value)}
          className={`flex-grow px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
        />
        <button
          type="button"
          onClick={() => onRemove(index)}
          className={`inline-flex items-center justify-center p-2 border border-transparent text-sm font-medium rounded-md ${darkMode ? 'text-red-200 bg-red-800 hover:bg-red-700' : 'text-red-600 bg-red-100 hover:bg-red-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
        >
          <FaTrash />
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className={`w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${darkMode ? 'text-purple-200 bg-purple-800 hover:bg-purple-700' : 'text-purple-600 bg-purple-100 hover:bg-purple-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
    >
      <FaPlus className="mr-2" /> Add {label}
    </button>
  </div>
);

const CodeExampleField = ({ example, index, onChange, onRemove, darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4 rounded-md space-y-2`}>
    <input
      type="text"
      value={example.title}
      onChange={(e) => onChange(index, 'title', e.target.value)}
      placeholder="Title"
      className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
    />
    <textarea
      value={example.code}
      onChange={(e) => onChange(index, 'code', e.target.value)}
      placeholder="Code"
      rows="3"
      className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
    ></textarea>
    <button
      type="button"
      onClick={() => onRemove(index)}
      className={`w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${darkMode ? 'text-red-200 bg-red-800 hover:bg-red-700' : 'text-red-600 bg-red-100 hover:bg-red-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out`}
    >
      <FaTrash className="mr-2" /> Remove
    </button>
  </div>
);

export default SecurityAnalystAdmin;

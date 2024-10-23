import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { getDatabase, ref, onValue } from "firebase/database";
import { getApp, initializeApp } from "firebase/app";
import { firebaseConfig } from '../../components/Admin/firebase';

const app = getApp() || initializeApp(firebaseConfig);
const database = getDatabase(app);

const SecurityAnalyst = () => {
  const [content, setContent] = useState([]);
  const [expandedTopics, setExpandedTopics] = useState({});

  useEffect(() => {
    const securityAnalystRef = ref(database, 'securityAnalyst');
    onValue(securityAnalystRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const contentArray = Object.values(data);
        setContent(contentArray);
        const initialExpandedState = {};
        contentArray.forEach((item, index) => {
          initialExpandedState[index] = false;
        });
        setExpandedTopics(initialExpandedState);
      }
    });
  }, []);

  const toggleTopic = (index) => {
    setExpandedTopics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (content.length === 0) return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-white">Please wait while we fetch the content.</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      {content.map((item, index) => (
        <motion.div 
          key={index}
          className="mb-6 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleTopic(index)}
          >
            <div className="flex items-center">
              {item.logo && (
                <img src={item.logo} alt={item.topicName} className="w-12 h-12 mr-4" />
              )}
              <motion.h1 
                className="text-3xl font-bold text-purple-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.topicName}
              </motion.h1>
            </div>
            {expandedTopics[index] ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">{item.title}</h2>
            <p className="text-lg text-gray-700">{item.description}</p>
          </motion.div>

          <AnimatePresence>
            {expandedTopics[index] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Introduction</h2>
                  <p className="text-gray-700">{item.intro}</p>
                </motion.div>

                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Key Points</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {item.points && item.points.map((point, pointIndex) => (
                      <motion.li 
                        key={pointIndex}
                        className="text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + pointIndex * 0.1, duration: 0.3 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Topic Content</h2>
                  <div className="text-gray-700 space-y-6">
                    {item.topicContent.split('\n\n').map((section, index) => {
                      const [title, ...content] = section.split('\n');
                      return (
                        <div key={index} className="mb-4">
                          <p className="text-sm font-semibold mb-2">{title.replace('###', '').trim()}</p>
                          <ul className="list-disc pl-6 space-y-2">
                            {content.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-gray-700">
                                {item.replace(/^\d+\.\s|\-\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Steps to Become a Cybersecurity Analyst</h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    {item.steps && item.steps.map((step, stepIndex) => (
                      <motion.li 
                        key={stepIndex}
                        className="text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + stepIndex * 0.1, duration: 0.3 }}
                      >
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </motion.div>

                {item.videoUrl && (
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Video Tutorial</h3>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe 
                        src={item.videoUrl} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </motion.div>
                )}

                {item.images && item.images.length > 0 && (
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Images</h3>
                    <div className="flex flex-wrap gap-4">
                      {item.images.map((image, imageIndex) => (
                        <img key={imageIndex} src={image} alt={`Image ${imageIndex + 1}`} className="w-48 h-48 object-cover rounded-lg" />
                      ))}
                    </div>
                  </motion.div>
                )}

                {item.referenceUrls && item.referenceUrls.length > 0 && (
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">References</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {item.referenceUrls.map((url, urlIndex) => (
                        <li key={urlIndex}>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                            {url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.div 
                  className="flex justify-between items-center text-sm text-gray-600 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default SecurityAnalyst;

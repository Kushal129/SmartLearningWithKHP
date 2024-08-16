import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa'; 
import { LuClipboardCheck } from 'react-icons/lu'; 

// Modal component
const Modal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-4 rounded-lg shadow-md relative max-w-full max-h-[80vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-black hover:text-gray-700"
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt="Popup"
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
};

const copyToClipboard = (text, callback) => {
  navigator.clipboard.writeText(text).then(() => {
    callback(true);
    setTimeout(() => callback(false), 2000); 
  }).catch((err) => {
    console.error('Failed to copy: ', err);
    callback(false);
  });
};

const SubcategoryDetail = ({ title, description, additionalPoints = [], additionalPointstitle = '', codeExamples = [], images = [], links = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [copiedCodeIndex, setCopiedCodeIndex] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="p-4 mt-4 border border-gray-200 rounded-lg shadow-md bg-white overflow-auto">
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <div className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: description }} />

      {additionalPoints.length > 0 && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">{additionalPointstitle}</h4>
          <ul className="list-disc list-inside ml-5 text-gray-800">
            {additionalPoints.map((point, index) => (
              <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      )}

      {codeExamples.length > 0 && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Code Examples</h4>
          {codeExamples.map((example, index) => (
            <div key={index} className="mb-4 relative">
              <pre className="bg-gray-900 text-white lg:p-4 p-2 rounded-lg overflow-x-auto whitespace-pre-wrap">{example.code}</pre>
              {example.description && (
                <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: example.description }} />
              )}
              <FaRegCopy
                onClick={() => {
                  copyToClipboard(example.code, (copied) => setCopiedCodeIndex(copied ? index : null));
                }}
                className={`absolute top-2 right-2 text-gray-400 hover:text-gray-300 cursor-pointer sm:block md:block lg:hidden ${copiedCodeIndex === index ? 'hidden' : 'block'} `}
                size={20}
              />
              {copiedCodeIndex === index && (
                <LuClipboardCheck
                  className="absolute top-2 right-2 text-white cursor-pointer sm:block md:block lg:hidden"
                  size={20}
                />
              )}
              <button
                onClick={() => copyToClipboard(example.code, (copied) => setCopiedCodeIndex(copied ? index : null))}
                className="absolute top-2 right-2 hidden lg:block  bg-zinc-700 text-white py-1 px-3 rounded hover:bg-purple-900"
              >
                {copiedCodeIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Images</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(src)}
              />
            ))}
          </div>
        </div>
      )}

      {links.length > 0 && (
        <div className="px-4 py-2">
          <h4 className="text-base font-semibold mb-2 md:text-sm">Links</h4>
          <ul className="list-disc list-inside ml-4 text-black underline md:text-xs">
            {links.map((link, index) => (
              <li key={index} className="mb-1">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm md:text-xs"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Modal isOpen={isModalOpen} imageSrc={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default SubcategoryDetail;

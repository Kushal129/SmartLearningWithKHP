import React, { useState, useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from '../components/Admin/firebase';
import { getApp, initializeApp } from "firebase/app";

const app = getApp() || initializeApp(firebaseConfig);
const database = getDatabase(app);

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Image Modal"
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    overlayClassName="fixed inset-0"
  >
    <div className="relative bg-white p-2 rounded-md max-w-4xl mx-auto">
      <button
        onClick={onRequestClose}
        className="absolute top-1 right-2 text-white hover:text-gray-300 text-2xl rounded-full p-2"
        aria-label="Close modal"
      >
        &times;
      </button>
      <img src={imageUrl} alt="Modal Content" className="max-w-full max-h-[80vh] object-contain" />
    </div>
  </Modal>
);

const CodeExample = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => alert('Failed to copy text: ', err)
    );
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 relative">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <pre className="bg-gray-800 text-white p-4 rounded whitespace-pre-wrap">{code}</pre>
      <button
        onClick={() => copyToClipboard(code)}
        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded shadow-md hover:bg-purple-600"
      >
        {copied ? 'Copied' : <FaRegCopy />}
      </button>
    </div>
  );
};

const ImageGallery = ({ images, onImageClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {images && images.map((src, index) => (
      <div key={index} className="relative cursor-pointer" onClick={() => onImageClick(src)}>
        <img src={src} alt={`Step ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
        <div className="absolute bottom-0 left-0 rounded-r-lg bg-black text-white p-2 text-sm">
          Step {index + 1}
        </div>
      </div>
    ))}
  </div>
);

const KaliInstallationPage = () => {
  const [data, setData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root');
    
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database, 'kaliLinux'));
        if (snapshot.exists()) {
          setData(snapshot.val()['-O9xzVvGRGE_SzwlNCKf']);
        } else {
          setError("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  if (error) return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-red-500 text-xl font-semibold bg-red-100 border border-red-400 rounded-lg p-4 shadow-md">
        <span className="mr-2">⚠️</span>{error}
      </div>
    </div>
  );
  if (!data) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-900"></div>
      <span className="ml-4 text-xl font-semibold text-gray-700">Loading...</span>
    </div>
  );

  const { topicName, logo, topicContent, description, codeExamples, intro, images } = data;

  return (
    <div className="container mx-auto px-4 py-8 rounded-lg bg-gradient-to-b from-[#6e89e4] via-white to-transparent min-h-screen">
      <header className="mb-8 text-center">
        <img src={logo} alt="Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{topicName}</h1>
        <p className="text-lg text-gray-700 mb-4">{intro}</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{topicContent}</h2>
          <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: description }} />
        </section>

        {images && images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Kali Linux Installation Steps</h2>
            <p className="text-lg text-gray-700 mb-4">Here are the steps to install Kali Linux:</p>
            <ImageGallery images={images} onImageClick={openModal} />
          </section>
        )}

        {codeExamples && codeExamples.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Code Examples</h2>
            <p className="text-lg text-gray-700 mb-4">Open terminal and write this command:</p>
            {codeExamples.map((example, index) => (
              <CodeExample key={index} title={example.title} code={example.code} />
            ))}
          </section>
        )}
      </main>

      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default KaliInstallationPage;

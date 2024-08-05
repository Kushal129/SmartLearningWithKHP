import React from 'react';

// Example dynamic data structure
const dynamicData = {
  topicName: 'Nmap',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_nmap.png', // Replace with your logo path
  topicContent: 'Learn about network scanning with Nmap and its various features.',
  description: 'This guide covers basic to advanced scanning techniques using Nmap.',
  codeExamples: [
    {
      title: 'Basic Scan',
      code: "nmap -sP 192.168.1.1/24"
    },
    {
      title: 'Scan Specific Port',
      code: 'nmap -p 80,443 example.com'
    }
  ],
  images: [
    'path/to/nmap-overview.jpg',
    'path/to/nmap-scan.jpg'
  ],
  videoUrl: 'https://www.youtube.com/embed/examplevideo'
};

// Component for rendering code examples
const CodeExample = ({ title, code }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <pre className="bg-gray-900 text-white p-4 rounded">{code}</pre>
  </div>
);

// Component for rendering images
const ImageGallery = ({ images }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
    ))}
  </div>
);

// Component for embedding video
const VideoEmbed = ({ url }) => (
  <div className="mb-6">
    <iframe
      width="100%"
      height="315"
      src={url}
      title="Video Player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const NmapPage = () => {
  const { topicName, logo, topicContent, description, codeExamples, images, videoUrl } = dynamicData;

  return (
    <div className="p-6 inline-block bg-gradient-to-b from-[] via-transparent to-transparent min-h-screen rounded-lg">
      <header className="mb-6 text-center">
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">{topicName}</h1>
      </header>
      <section className="mb-6">
        <p className="text-gray-700 mb-4">{topicContent}</p>
        <p className="text-gray-600">{description}</p>
      </section>
      <section className="mb-6">
        {codeExamples.map((example, index) => (
          <CodeExample key={index} title={example.title} code={example.code} />
        ))}
      </section>
      {/* <section className="mb-6">
        <ImageGallery images={images} />
      </section> */}
      {videoUrl && (
        <section>
          <VideoEmbed url={videoUrl} />
        </section>
      )}
    </div>
  );
};

export default NmapPage;

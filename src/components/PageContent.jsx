import React from 'react';

const PageContent = ({ title, points, codeExamples, images }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
      
      {/* Main Content */}
      <div className="mb-6">
        {points && points.length > 0 && (
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {points.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Code Examples */}
      {codeExamples && (
        <div className="mb-6">
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-900">{codeExamples}</code>
          </pre>
        </div>
      )}
      
      {/* Images */}
      {images && images.length > 0 && (
        <div className="mt-4">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Example ${index}`} className="w-full h-auto mt-4 rounded-lg shadow-md"/>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageContent;

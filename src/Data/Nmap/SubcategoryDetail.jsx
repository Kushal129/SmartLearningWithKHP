import React from 'react';

const SubcategoryDetail = ({ title, description, additionalPoints = [], additionalPointstitle = '', codeExamples = [], images = [], links = [] }) => {

  return (
    <div className="p-4 mt-4 border border-gray-200 rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <div
        className="mb-4 text-gray-700"
        dangerouslySetInnerHTML={{ __html: description }}
      />

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
            <div key={index} className="mb-4">
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">{example.code}</pre>
              {example.description && (
                <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: example.description }} />
              )}
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Images</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
            ))}
          </div>
        </div>
      )}

      {links.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-2">Links</h4>
          <ul className="list-disc list-inside ml-5 text-blue-600">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubcategoryDetail;

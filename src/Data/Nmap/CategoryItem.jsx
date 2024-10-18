import React, { useState } from 'react';
import SubcategoryDetail from './SubcategoryDetail';
import { GoTriangleDown } from "react-icons/go";

const CategoryItem = ({ title, subcategories, isOpen, onClick }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSubcategoryClick = (index) => {
    setSelectedSubcategory(selectedSubcategory === index ? null : index);
  };
2
  return (
    <div className="mb-4">
      <div
        className="cursor-pointer flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
        onClick={onClick}
      >
        <h2 className={`text-lg font-bold transition-opacity`}>{title}</h2>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <GoTriangleDown />
        </span>
      </div>
      {isOpen && (
        <ul className="-mt-2 space-y-2 bg-gray-100 shadow-md rounded-b-md p-2">
          {subcategories.map((sub, index) => (
            <li key={index} className="py-1 bg-gray-100 rounded-b-md">
              <button
                onClick={() => handleSubcategoryClick(index)}
                className="text-black hover:underline ml-2"
              >
                <span className={`transition-opacity ${selectedSubcategory === index ? 'opacity-0' : 'opacity-100'}`}>
                  {sub.title}
                </span>
              </button>
              {selectedSubcategory === index && (
                <SubcategoryDetail
                  title={sub.title}
                  description={sub.description}
                  codeExamples={sub.codeExamples}
                  additionalPoints={sub.additionalPoints}
                  additionalPointstitle={sub.additionalPointstitle}
                  images={sub.images}
                  links={sub.links}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryItem;

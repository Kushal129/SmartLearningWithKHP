import React, { useState } from 'react';
import '../../../src/App.css';
import CategoryItem from './CategoryItem';
import mainCategories from './Nmapdata.js';

const NmapPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-3 bg-gradient-to-b rounded-lg from-[#72b8ce] via-transparent to-transparent">
        <header className="mb-6 text-center">
          <img src="https://www.liquidweb.com/wp-content/uploads/2024/03/nmap-logo-256x256-1.png" alt="Nmap Logo" className="w-24 md:w-32 mx-auto mb-4" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Nmap Essentials: From Basics to Advanced Techniques</h1>
          <p className="text-sm md:text-base lg:text-lg mt-2">Nmap (Network Mapper) is a versatile and powerful network scanning utility designed for network exploration and security assessment. It allows users to efficiently map out network infrastructures, uncover available hosts and services, determine operating systems, identify open ports, and gather detailed information about various network components. By leveraging Nmap, users can perform comprehensive security audits and gain valuable insights into their network environment.</p>
        </header>
        <main className="flex-1 overflow-y-auto">
          {mainCategories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              subcategories={category.subcategories}
              isOpen={openCategory === index}
              onClick={() => handleCategoryClick(index)}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default NmapPage;

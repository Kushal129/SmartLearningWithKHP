// src/components/AllPortsSection.jsx

import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import ports from './portsData';

const ITEMS_PER_PAGE = 10;

const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;

  const escapedSearchTerm = searchTerm.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');

  return text.replace(regex, '<span class="bg-purple-300 text-white">$1</span>');
};

const AllPortsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState({ field: 'number', direction: 'asc' });
  const [currentCategory, setCurrentCategory] = useState(null);

  const sortPorts = (ports, field, direction) => {
    return [...ports].sort((a, b) => {
      if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (field) => {
    setSortOrder(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const filteredPorts = ports.filter(port =>
    port.number.toString().includes(searchTerm) ||
    port.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedPorts = filteredPorts.reduce((acc, port) => {
    (acc[port.category] = acc[port.category] || []).push(port);
    return acc;
  }, {});

  const sortedPorts = Object.keys(groupedPorts).reduce((acc, category) => {
    acc[category] = sortPorts(groupedPorts[category], sortOrder.field, sortOrder.direction);
    return acc;
  }, {});

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const categoryHeaders = Object.keys(sortedPorts).map(category => (
    <div key={category} className="mb-4">
      <div
        onClick={() => setOpenCategories(prev => ({ ...prev, [category]: !prev[category] }))}
        className="flex items-center cursor-pointer font-bold text-xl"
      >
        <span>{category}</span>
        {openCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {openCategories[category] && (
        <div className="pl-4">
          {sortedPorts[category].slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE).map(port => (
            <div key={port.number} className="p-2 border border-gray-300 rounded mb-2">
              <h4 className="font-semibold">Port: {highlightText(port.number.toString(), searchTerm)}</h4>
              <p className="mb-1"><strong>Service:</strong> {highlightText(port.service, searchTerm)}</p>
              <p><strong>Description:</strong> <span dangerouslySetInnerHTML={{ __html: highlightText(port.description, searchTerm) }} /></p>
            </div>
          ))}
        </div>
      )}
    </div>
  ));

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search ports..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <FaSearch className="ml-2" />
      </div>
      {categoryHeaders}
      <ReactPaginate
        pageCount={Math.ceil(filteredPorts.length / ITEMS_PER_PAGE)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default AllPortsSection;

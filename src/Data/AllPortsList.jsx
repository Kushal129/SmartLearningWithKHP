import React, { useState, useMemo } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import ports from './portsData';

const ITEMS_PER_PAGE = 10;

const AllPortsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState({ field: 'number', direction: 'asc' });

  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const strippedText = stripHtmlTags(text);
    const escapedTerm = searchTerm.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    const parts = strippedText.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === escapedTerm.toLowerCase() ? (
        `<span class="font-bold bg-purple-200 text-black p-1 rounded-md">${part}</span>`
      ) : (
        part
      )
    ).join('');
  };

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

  const filteredPorts = useMemo(() =>
    ports.filter(port =>
      port.number.toString().includes(searchTerm) ||
      stripHtmlTags(port.service).toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const groupedPorts = useMemo(() =>
    filteredPorts.reduce((acc, port) => {
      (acc[port.category] = acc[port.category] || []).push(port);
      return acc;
    }, {}), [filteredPorts]);

  const sortedPorts = useMemo(() =>
    Object.keys(groupedPorts).reduce((acc, category) => {
      acc[category] = sortPorts(groupedPorts[category], sortOrder.field, sortOrder.direction);
      return acc;
    }, {}), [groupedPorts, sortOrder]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const categoryHeaders = Object.keys(sortedPorts).map(category => (
    <div key={category} className="mb-6">
      <div
        onClick={() => {
          setExpandedCategory(prev => prev === category ? null : category);
          setCurrentPage(0); // Reset to first page when expanding a new category
        }}
        className="flex items-center cursor-pointer text-lg font-semibold p-3 text-purple-800 rounded-lg shadow-md hover:bg-purple-100 transition"
      >
        <span>{category}</span>
        {expandedCategory === category ? <FaChevronUp className="ml-2 text-purple-800" /> : <FaChevronDown className="ml-2 text-purple-800" />}
      </div>
      {expandedCategory === category && (
        <div className="pt-4 rounded-b-lg border-t border-purple-200">
          {sortedPorts[category].slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE).map(port => (
            <div key={port.number} className="p-4 mb-4 border border-purple-200 rounded-lg shadow-md bg-purple-50 hover:bg-gray-50 transition">
              <h4 className="text-lg font-semibold mb-2">
                <span className='text-purple-700'>Port: </span><span dangerouslySetInnerHTML={{ __html: highlightText(port.number.toString(), searchTerm) }} />
              </h4>
              <p className="mb-2 text-sm">
                <strong className='text-purple-700'>Service:</strong> <span dangerouslySetInnerHTML={{ __html: highlightText(port.service, searchTerm) }} />
              </p>
              <p className="text-sm">
                <strong className='text-purple-700'>Description:</strong> <span dangerouslySetInnerHTML={{ __html: port.description }} />
              </p>
            </div>
          ))}

          {sortedPorts[category].length > ITEMS_PER_PAGE && (
            <div className="flex justify-center mt-6">
              <ReactPaginate
                pageCount={Math.ceil(sortedPorts[category].length / ITEMS_PER_PAGE)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="flex space-x-2"
                pageClassName="relative inline-flex items-center hover:bg-purple-200 px-3 py-1 border border-purple-300 rounded-md"
                pageLinkClassName="text-purple-700 transition"
                activeClassName="bg-purple-700 hover:bg-purple-600 text-white"
                activeLinkClassName="text-white"
                previousLabel={<span className="text-purple-700">«</span>}
                nextLabel={<span className="text-purple-700">»</span>}
                previousClassName="relative inline-flex items-center px-3 py-1 border border-purple-300 rounded-md text-purple-700 hover:bg-purple-100 transition"
                nextClassName="relative inline-flex items-center px-3 py-1 border border-purple-300 rounded-md text-purple-700 hover:bg-purple-100 transition"
              />
            </div>
          )}
        </div>
      )}
    </div>
  ));

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen">
      <div className="relative flex items-center mb-4">
        <input
          type="text"
          placeholder="Search ports..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="pl-10 p-2 border border-purple-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-purple-500 transition"
        />
        <FaSearch className="absolute left-3 text-purple-700 pointer-events-none" />
      </div>

      <div className="space-y-6">
        {categoryHeaders}
      </div>
    </div>
  );
};

export default AllPortsSection;

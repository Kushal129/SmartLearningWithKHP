import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

const ports = [
  { number: 1, category: 'Networking', service: 'ICMP Echo Reply', description: '<span class="font-bold">ICMP Echo Reply</span> is used to respond to ICMP Echo Requests, typically used for testing network connectivity (ping).' },
  { number: 7, category: 'Networking', service: 'ICMP Echo Request', description: '<span class="font-bold">ICMP Echo Request</span> is used to request a response from a remote host, commonly used for testing network connectivity (ping).' },
  { number: 20, category: 'Networking', service: 'FTP Data Transfer', description: 'Used for <span class="font-bold">File Transfer Protocol (FTP)</span> data transfer. FTP control commands are handled on port 21.' },
  { number: 21, category: 'Networking', service: 'FTP Control', description: 'Handles <span class="font-bold">FTP control commands</span> used to manage file transfers over the network.' },
  { number: 22, category: 'Networking', service: 'SSH', description: 'Used for <span class="font-bold">Secure Shell (SSH)</span> access, providing encrypted communication for secure remote login and data transfer.' },
  { number: 23, category: 'Networking', service: 'Telnet', description: '<span class="font-bold">Telnet</span> provides unencrypted text communications. It is generally considered insecure due to lack of encryption.' },
  { number: 25, category: 'Email', service: 'SMTP', description: '<span class="font-bold">Simple Mail Transfer Protocol (SMTP)</span> is used for sending emails between servers.' },
  { number: 53, category: 'Networking', service: 'DNS', description: '<span class="font-bold">Domain Name System (DNS)</span> translates domain names (like www.example.com) into IP addresses needed for network communication.' },
  { number: 67, category: 'Networking', service: 'DHCP Server', description: '<span class="font-bold">Dynamic Host Configuration Protocol (DHCP)</span> server assigns IP addresses to client devices on a network.' },
  { number: 68, category: 'Networking', service: 'DHCP Client', description: '<span class="font-bold">DHCP Client</span> receives IP address assignments from the DHCP server.' },
  { number: 80, category: 'Web', service: 'HTTP', description: '<span class="font-bold">HyperText Transfer Protocol (HTTP)</span> is used for transmitting web pages and other content over the internet.' },
  { number: 110, category: 'Email', service: 'POP3', description: '<span class="font-bold">Post Office Protocol version 3 (POP3)</span> is used for receiving and downloading emails from a mail server to a client device.' },
  { number: 123, category: 'Networking', service: 'NTP', description: '<span class="font-bold">Network Time Protocol (NTP)</span> is used to synchronize the clocks of computers over a network, ensuring accurate timekeeping.' },
  { number: 143, category: 'Email', service: 'IMAP', description: '<span class="font-bold">Internet Message Access Protocol (IMAP)</span> is used for accessing and managing emails on a mail server, allowing multiple devices to interact with the same mailbox.' },
  { number: 443, category: 'Web', service: 'HTTPS', description: '<span class="font-bold">HyperText Transfer Protocol Secure (HTTPS)</span> is a secure version of HTTP that encrypts data exchanged between web browsers and servers.' },
  { number: 3306, category: 'Database', service: 'MySQL', description: '<span class="font-bold">MySQL</span> database connections use this port to communicate with MySQL databases for data management.' },
  { number: 3389, category: 'Remote Access', service: 'RDP', description: '<span class="font-bold">Remote Desktop Protocol (RDP)</span> allows users to connect to and control remote computers over a network.' },
  { number: 5432, category: 'Database', service: 'PostgreSQL', description: '<span class="font-bold">PostgreSQL</span> database connections use this port for interaction with PostgreSQL databases.' },
  { number: 5900, category: 'Remote Access', service: 'VNC', description: '<span class="font-bold">Virtual Network Computing (VNC)</span> allows remote desktop access, enabling users to view and control their computers from another location.' },
  { number: 6379, category: 'Database', service: 'Redis', description: '<span class="font-bold">Redis</span> database connections use this port for interacting with Redis, an in-memory data structure store often used for caching.' },
  { number: 8080, category: 'Web', service: 'HTTP Alternate', description: '<span class="font-bold">HTTP Alternate</span> is often used as an alternative port for HTTP traffic, commonly employed for web servers running on non-standard ports.' },
  { number: 8443, category: 'Web', service: 'HTTPS Alternate', description: '<span class="font-bold">HTTPS Alternate</span> is used as an alternative port for HTTPS traffic, similar to port 443 but for different use cases or configurations.' },
  { number: 1521, category: 'Database', service: 'Oracle DB', description: '<span class="font-bold">Oracle Database</span> uses this port for client-server communication.' },
  { number: 27017, category: 'Database', service: 'MongoDB', description: '<span class="font-bold">MongoDB</span> uses this port for database communication.' },
  { number: 5000, category: 'Networking', service: 'UPnP', description: '<span class="font-bold">Universal Plug and Play (UPnP)</span> is used for network device discovery and management.' },
  { number: 9200, category: 'Search', service: 'Elasticsearch', description: '<span class="font-bold">Elasticsearch</span> uses this port for search and analytics services.' },
  { number: 10000, category: 'Administration', service: 'Webmin', description: '<span class="font-bold">Webmin</span> is a web-based interface for system administration.' },
  { number: 10001, category: 'Networking', service: 'SCTP', description: '<span class="font-bold">SCTP</span> (Stream Control Transmission Protocol) is a transport layer protocol used for network communication.' },
];

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

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
    setCurrentCategory(prevCategory => prevCategory === category ? null : category);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const paginatedPorts = currentCategory ? 
    sortPorts(groupedPorts[currentCategory] || [], sortOrder.field, sortOrder.direction).slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE) 
    : [];

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">List of Ports</h2>
      <div className="overflow-x-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-purple-900">
              <h3 className="text-lg md:text-xl font-medium text-white mb-2 md:mb-0">Ports List</h3>
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search by port number..."
                  className="px-4 py-2 pl-10 border rounded-lg text-gray-700 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="p-4">
            {Object.keys(groupedPorts).map((category, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleCategory(category)}>
                  <h4 className="text-xl font-semibold mb-2">{category}</h4>
                  {openCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openCategories[category] && (
                  <>
                    <table className="min-w-full divide-y divide-gray-200 mt-4">
                      <thead className="bg-gray-200 text-gray-600">
                        <tr>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('number')}>
                            Port Number {sortOrder.field === 'number' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                          </th>
                          <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('service')}>
                            Service {sortOrder.field === 'service' && (sortOrder.direction === 'asc' ? '▲' : '▼')}
                          </th>
                          <th className="px-4 py-2 text-left">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {paginatedPorts.map((port, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2" dangerouslySetInnerHTML={{ __html: highlightText(port.number.toString(), searchTerm) }} />
                            <td className="px-4 py-2" dangerouslySetInnerHTML={{ __html: highlightText(port.service, searchTerm)}}/>
                            <td className="px-4 py-2" dangerouslySetInnerHTML={{ __html: highlightText(port.description) }} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {currentCategory && (
                      <div className="mt-4 flex justify-center">
                        <ReactPaginate
                          pageCount={Math.ceil(groupedPorts[currentCategory].length / ITEMS_PER_PAGE)}
                          pageRangeDisplayed={5}
                          marginPagesDisplayed={2}
                          onPageChange={handlePageChange}
                          containerClassName="flex space-x-2"
                          pageClassName="page-item"
                          pageLinkClassName="py-1 px-3 rounded-lg border border-gray-300 text-gray-700"
                          activeClassName="text-white"
                          previousClassName="page-item"
                          nextClassName="page-item"
                          previousLinkClassName="py-1 px-3 rounded-lg border border-gray-300 text-gray-700"
                          nextLinkClassName="py-1 px-3 rounded-lg border border-gray-300 text-gray-700"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPortsSection;
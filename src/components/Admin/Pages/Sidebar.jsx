import React from 'react';
import { FaHome, FaPlus, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { useAuth } from '../Auth/AuthContext`';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setCurrentPage }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success('Logout successful.');
    navigate('/');
  };

  return (
    <div className={`bg-gray-800 text-white h-full transition-all duration-300 ${isSidebarOpen ? 'w-60' : 'w-16'}`}>
      {/* Close button for mobile */}
      {isSidebarOpen && (
        <button
          className="absolute top-2 right-2 text-red-300 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={18} />
        </button>
      )}

      {/* Sidebar Header */}
      <div className={`p-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>

      {/* Navigation Links */}
      <ul className="mt-4 flex flex-col">
        <li
          className="flex items-center p-4 hover:bg-purple-900 cursor-pointer transition duration-300"
          onClick={() => {
            setCurrentPage('dashboard');
            setIsSidebarOpen(true);
          }}
        >
          <FaHome className="mr-2" />
          <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
        </li>

        <li
          className="flex items-center p-4 hover:bg-purple-900 cursor-pointer transition duration-300"
          onClick={() => {
            setCurrentPage('addPage');
            setIsSidebarOpen(true);
          }}
        >
          <FaPlus className="mr-2" />
          <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>Add Page</span>
        </li>

        <li
          className={`flex items-center p-4 hover:bg-purple-900 cursor-pointer transition duration-300 ${isSidebarOpen ? 'block' : 'hidden'}`}
          onClick={() => {
            navigate('/AllPages');
            setIsSidebarOpen(true);
          }}
        >
          <span>Pages</span>
        </li>
      </ul>

      {/* Logout */}
      <div className="mt-auto">
        <li
          className="flex items-center p-4 hover:bg-purple-900 cursor-pointer transition duration-300"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="mr-2" />
          <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;

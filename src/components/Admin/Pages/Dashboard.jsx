import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { FaUsers, FaEye, FaFileAlt } from 'react-icons/fa';
import CountUp from 'react-countup';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = ({ darkMode }) => {
  // Fake data for total views, users, and pages
  const totalViews = 15789;
  const totalUsers = 458;
  const totalPages = 3;

  // Fake data for user views graph
  const userViewsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Views',
        data: [1200, 1900, 3000, 5000, 4200, 3800],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Fake data for page popularity
  const pagePopularityData = {
    labels: ['Home', 'Courses', 'About', 'Contact', 'Blog'],
    datasets: [
      {
        label: 'Page Views',
        data: [4500, 3200, 2100, 1800, 2900],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  // Fake data for user engagement
  const userEngagementData = {
    labels: ['Active', 'Inactive', 'New'],
    datasets: [
      {
        data: [2000, 800, 454],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return (
    <div className={`p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg shadow-lg`}>
      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow flex items-center`}>
          <FaEye className={`text-4xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mr-4`} />
          <div>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Total Views</h3>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <CountUp end={totalViews} duration={2.5} separator="," />
            </p>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow flex items-center`}>
          <FaUsers className={`text-4xl ${darkMode ? 'text-green-400' : 'text-green-500'} mr-4`} />
          <div>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Total Users</h3>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <CountUp end={totalUsers} duration={2.5} separator="," />
            </p>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow flex items-center`}>
          <FaFileAlt className={`text-4xl ${darkMode ? 'text-purple-400' : 'text-purple-500'} mr-4`} />
          <div>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Total Pages</h3>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <CountUp end={totalPages} duration={2.5} />
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>User Views Over Time</h3>
          <Line data={userViewsData} options={{ color: darkMode ? 'white' : 'black' }} />
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Page Popularity</h3>
          <Bar data={pagePopularityData} options={{ color: darkMode ? 'white' : 'black' }} />
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>User Engagement</h3>
          <Pie data={userEngagementData} options={{ color: darkMode ? 'white' : 'black' }} />
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>All Pages</h3>
          <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Nmap">Nmap</Link></li>
            <li><Link to="/Security-Analyst">Security Analyst</Link></li>
            <li><Link to="/Kali-Installation">Kali Installation</Link></li>
            <li><Link to="/AllPortsList">All Ports List</Link></li>
            <li><Link to="/Sql-Injection">SQL Injection</Link></li>
            <li><Link to="/All-ShortlyContent">All Shortly Content</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

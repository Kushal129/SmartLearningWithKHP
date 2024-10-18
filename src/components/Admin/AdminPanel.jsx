import React, { useState } from 'react';
import { FaHome, FaPlus, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { useAuth } from './Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Dashboard from './Pages/Dashboard';
import AddPage from './Pages/AddPage';

const quotes = [
    "In business, success is built on resilience and adaptability. 💼",
    "The greatest risk is not taking any risk at all. ⚠️",
    "Innovation is the cornerstone of growth in today's competitive landscape. 🚀",
    "In cybersecurity, every challenge is an opportunity to strengthen defenses. 🔒",
    "Your network is your net worth—invest in relationships. 🤝",
    "Hacking is not just about breaking in; it’s about understanding systems. 💻",
    "Success in business requires a clear vision and unwavering commitment. 🎯",
    "A proactive mindset is the best protection against threats. 🛡️",
    "Failure is simply a stepping stone toward achieving your goals. 🏆",
    "Great leaders inspire others to dream more, learn more, and become more. 🌟",
    "In the world of cybersecurity, knowledge is power—stay informed. 📚",
    "The only way to predict the future is to create it. 🔮",
    "In the realm of business, perseverance can turn dreams into reality. 🌈",
    "The best hackers are those who think like defenders. 🔍",
    "Success is not about luck; it’s about preparation meeting opportunity. ✨",
    "Every problem is a chance to learn and grow; embrace challenges. 🌱",
    "Your success is determined by your mindset—think big, act bigger. 💪",
    "The road to success is dotted with many tempting parking spaces. 🛣️",
    "True strength is not in never falling, but in rising every time we fall. ⛰️",
    "Discipline is the bridge between goals and accomplishment. 🏗️",
    "In the digital age, adaptability is the key to survival. 🔑",
    "Be relentless in the pursuit of what sets your soul on fire. 🔥",
    "Leaders create more leaders, not followers. 🌟",
    "Knowledge is the new currency; invest wisely. 💰",
    "Every expert was once a beginner—start your journey today. 🌍",
    "In a world full of noise, find your unique voice and amplify it. 📢",
    "Success is a journey, not a destination; enjoy every step. 🗺️",
    "To succeed in cybersecurity, think like a hacker and defend like a pro. 💻🛡️",
    "Opportunities don't just happen; you create them through hard work. 🛠️"
];




const AdminPanel = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(true);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        toast.success('Logout successful.');
        navigate('/');
    };

    const closeModal = () => {
        setShowQuoteModal(false);
    };

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className="flex p-2 h-screen">
            {/* Sidebar */}
            <div className={`bg-purple-950 rounded-l-lg text-center items-center text-white transition-all duration-300 ${isSidebarOpen ? 'lg:w-60' : 'w-16'}`}>
                {isSidebarOpen && (
                    <button
                        className="absolute top-[165px] right-2 text-red-300 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaTimes size={18} />
                    </button>
                )}

                <div className={`p-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>

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
                </ul>

                <div className="mt-auto mb-4">
                    <li
                        className="flex items-center p-4 hover:bg-purple-900 cursor-pointer transition duration-300"
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt className="mr-2" />
                        <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
                    </li>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex w-full justify-center bg-purple-100 p-4 transition-all duration-300 overflow-auto">
                {currentPage === 'dashboard' ? <Dashboard /> : <AddPage />}
            </div>

            {showQuoteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 transition-opacity duration-300">
                    <div className="bg-gradient-to-r from-purple-950 to-purple-700 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-transform duration-300 scale-100 relative">
                        {/* Close Button at the Top Right */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white hover:text-purple-200 transition duration-300"
                        >
                            <FaTimes size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-white mb-4 text-center">Always Motivated</h2>
                        <p className="mb-4 text-gray-50 text-center italic">{randomQuote}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminPanel;

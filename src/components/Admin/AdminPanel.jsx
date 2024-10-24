import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiSunLine, RiMoonLine, RiDashboardLine, RiBookOpenLine, RiLogoutBoxRLine, RiArrowDownSLine, RiArrowUpSLine, RiShieldKeyholeLine, RiMenuFoldLine, RiMenuUnfoldLine, RiCloseLine } from 'react-icons/ri';
import { SiKalilinux } from "react-icons/si";
import AdminSecurityAnalyst from './Pages/AdminSecurityAnalyst';
import DashboardContent from './Pages/Dashboard';
import myimage from '../../../public/my.png';
import quotes from './Pages/quotes';
import QuoteModel from './Pages/QuoteModel';
import AdminKaliLinux from './Pages/AdminKaliLinux';
import AdminShortlyContent from './Pages/AdminShortlyContent';

const AdminPanel = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [pagesExpanded, setPagesExpanded] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [time, setTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showQuotesModel, setShowQuotesModel] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const hasSeenQuote = localStorage.getItem('hasSeenQuote');
    if (!hasSeenQuote) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
      setShowQuotesModel(true);
      localStorage.setItem('hasSeenQuote', 'true');
      const timer = setTimeout(() => setShowQuotesModel(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const togglePages = () => setPagesExpanded(!pagesExpanded);
  const toggleQuotesModel = () => setShowQuotesModel(!showQuotesModel);

  const pageComponents = {
    dashboard: <DashboardContent darkMode={darkMode} />,
    securityAnalyst: <AdminSecurityAnalyst darkMode={darkMode} />,
    kaliLinux: <AdminKaliLinux darkMode={darkMode} />,
    shortlyContent: <AdminShortlyContent darkMode={darkMode} />,
    // Add other page components here
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <motion.div
        className={`${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-purple-950'} text-white transition-all duration-300 ease-in-out`}
        animate={{ width: sidebarOpen ? 256 : 80 }}
      >
        
        <div className="p-4 flex items-center justify-between">
          <motion.h1 
            className={`font-bold ${sidebarOpen ? 'text-xl' : 'text-xs'} transition-all duration-300`}
            animate={{ opacity: sidebarOpen ? 1 : 0 }}
          >
            {sidebarOpen ? 'Smart Learning With KHP' : 'SLW-KHP'}
          </motion.h1>
          <button 
            onClick={toggleSidebar} 
            className="text-white focus:outline-none hover:bg-purple-700 p-2 rounded-full transition-colors duration-200"
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebarOpen ? <RiMenuFoldLine size={20} /> : <RiMenuUnfoldLine size={20} />}
          </button>
        </div>

        <hr className="border-spacing-0.5 border-white my-2" />
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-2">
            <SidebarItem icon={RiDashboardLine} text="Dashboard" onClick={() => setActivePage('dashboard')} expanded={sidebarOpen} />
            <SidebarItem icon={RiBookOpenLine} text="Pages" onClick={togglePages} expanded={sidebarOpen} hasSubmenu>
              <AnimatePresence>
                {pagesExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 space-y-2"
                  >
                    <SidebarItem icon={RiShieldKeyholeLine} text="Security Analyst" onClick={() => setActivePage('securityAnalyst')} expanded={sidebarOpen} submenuItem />
                    <SidebarItem icon={SiKalilinux} text="Kali Linux" onClick={() => setActivePage('kaliLinux')} expanded={sidebarOpen} submenuItem />
                    <SidebarItem icon={RiBookOpenLine} text="Shortly Content" onClick={() => setActivePage('shortlyContent')} expanded={sidebarOpen} submenuItem />
                  </motion.ul>
                )}
              </AnimatePresence>
            </SidebarItem>
            {/* <SidebarItem icon={RiQuoteText} text="Quotes" onClick={toggleQuotesModel} expanded={sidebarOpen} /> */}
          </ul>
        </nav>
        <div className="p-4">
          <SidebarItem icon={RiLogoutBoxRLine} text="Logout" onClick={() => console.log('Logout')} expanded={sidebarOpen} />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-purple-950'} shadow-md`}>
          <div>
            <p className={`text-2xl font-semibold capitalize ${darkMode ? 'text-white' : 'text-gray-100'}`}>{activePage}</p>
            {activePage === 'dashboard' && (
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-200'}`}>Welcome, Kushal Pipaliya!</p>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-100'}`}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            <button onClick={toggleDarkMode} className="p-2 rounded-full transition-colors duration-200">
              {darkMode ? <RiSunLine className="text-yellow-400" size={24} /> : <RiMoonLine className="text-gray-100" size={24} />}
            </button>
            <div className="relative">
              <div className="relative">
                <img 
                  src={myimage} 
                  alt="User" 
                  className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200" 
                  onClick={() => setShowModal(true)}
                />
                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl`}>
                      <div className="p-4">
                        <div className="flex justify-end">
                          <button 
                            onClick={() => setShowModal(false)}
                            className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                          >
                            <RiCloseLine size={20} />
                          </button>
                        </div>
                        <img src={myimage} alt="User" className="w-24 h-26 object-contain rounded-full mx-auto mb-2" />
                        <h3 className={`text-lg font-semibold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Kushal Pipaliya</h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>Web Developer & Security Enthusiast</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
          </div>
        </header>
        <main className={`flex-1 overflow-x-hidden overflow-y-auto p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {pageComponents[activePage]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      {showQuotesModel && (
        <QuoteModel 
          showQuotesModel={showQuotesModel} 
          toggleQuotesModel={toggleQuotesModel} 
          darkMode={darkMode} 
          currentQuote={currentQuote}
        />
      )}
    </div>
  );
};

const SidebarItem = ({ icon: Icon, text, onClick, expanded, hasSubmenu, submenuItem, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex items-center w-full p-2 rounded-lg ${
          submenuItem ? 'text-gray-300 hover:text-white' : 'text-white'
        } hover:bg-purple-800 transition-colors duration-200`}
      >
        <Icon className={`${expanded ? 'mr-3' : 'mx-auto'} h-6 w-6`} />
        {expanded && (
          <>
            <span className="flex-1 text-left">{text}</span>
            {hasSubmenu && (children ? <RiArrowUpSLine /> : <RiArrowDownSLine />)}
          </>
        )}
      </button>
      {children}
    </>
  );
};

export default AdminPanel;

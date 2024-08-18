import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './IndexPage';
import NmapPage from './Data/Nmap/NmapPage';
import KaliInstallationPage from './Data/KaliInstallationPage';
import AllPortsList from './Data/AllPortsList';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/About';
import ShortlyContent from './components/ShortlyContent';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow lg:p-6 bg-gradient-to-br from-white via-white to-purple-200 overflow-auto">
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/Nmap" element={<NmapPage />} />
            <Route path="/Kali-installation" element={<KaliInstallationPage />} />
            <Route path="/Contact" element={<ContactUsPage />} />
            <Route path="/About" element={<AboutUsPage />} />
            <Route path="/AllPortsList" element={<AllPortsList />} />
            <Route path="/All-ShortlyContent" element={<ShortlyContent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

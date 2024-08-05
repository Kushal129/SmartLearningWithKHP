import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './IndexPage';
import NmapPage from './Data/NmapPage';
import KaliInstallationPage from './Data/KaliInstallationPage';
import Breadcrumb from './components/Breadcrumb';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/About';

function App() {
  return (
    <Router>
    <Header />
    <main className="flex-grow p-6 bg-gradient-to-br from-white via-white to-purple-200">
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Nmap" element={<NmapPage />} />
        <Route path="/Kali-installation" element={<KaliInstallationPage />} />
        <Route path='/Contact' element={<ContactUsPage />} />
        <Route path='/About' element={<AboutUsPage/>} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </main>
    <Footer />
  </Router>
  )
}

export default App

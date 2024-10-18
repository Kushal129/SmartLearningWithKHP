import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './components/Admin/Auth/AuthContext';
import IndexPage from './IndexPage';
import NmapPage from './Data/Nmap/NmapPage';
import KaliInstallationPage from './Data/KaliInstallationPage';
import AllPortsList from './Data/AllPortsList';
import Breadcrumb from './components/Breadcrumb';
import SqlInjection from './Data/Sql_Injection/Sql-Injection';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/About';
import ShortlyContent from './components/ShortlyContent';
import BackToTop from './components/BackToTop';
import LoginPage from './components/Admin/Auth/LoginPage';
import AdminPage from './components/Admin/AdminPanel';
import ProtectedRoute from './components/Admin/Auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow lg:p-6 bg-gradient-to-br from-white via-white to-purple-200 overflow-auto">
            <Breadcrumb />
            <Toaster />
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path='/LoginPage' element={<LoginPage />} />
              <Route path="/About" element={<AboutUsPage />} />
              <Route path="/Contact" element={<ContactUsPage />} />
              <Route path="/Nmap" element={<NmapPage />} />
              <Route path="/Kali-Installation" element={<KaliInstallationPage />} />
              <Route path="/AllPortsList" element={<AllPortsList />} />
              <Route path="/Sql-Injection" element={<SqlInjection />} />
              <Route path="/All-ShortlyContent" element={<ShortlyContent />} />
              <Route
                path="/AdminPage"
                element={<ProtectedRoute element={<AdminPage />} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <BackToTop />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

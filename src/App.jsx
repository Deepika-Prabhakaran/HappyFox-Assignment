import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import OrganizationChartPage from './pages/organizationChart/OrganizationChartPage';
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/chart" element={<OrganizationChartPage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
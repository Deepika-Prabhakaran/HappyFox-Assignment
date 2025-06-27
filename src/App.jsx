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
      <Router basename='/'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chart" element={<OrganizationChartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
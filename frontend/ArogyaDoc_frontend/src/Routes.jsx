import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { PatientListPage } from './components/contents/PatientListPage';
import { PatientDetailPage } from './components/contents/PatientDetailPage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;

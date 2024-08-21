import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { PatientListPage } from './pages/PatientListPage';
import { PatientDetailPage } from './pages/PatientDetailPage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/patients" element={<PatientListPage />} />
        <Route path="/patients/:id" element={<PatientDetailPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

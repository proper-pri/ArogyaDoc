import React, { useState, useEffect } from 'react';
import './components design/Dashboard.css'; // Include your CSS file
import Header from './Header';
import Sidebar from './Sidebar';

import { PatientListPage } from './contents/PatientListPage';
import { PatientDetailPage } from './contents/PatientDetailPage';
import AddPatient from './AddPatient';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleProfileDropdown = (show, e) => {
    e.stopPropagation();
    setShowProfileDropdown(show);
    setShowNotificationsDropdown(false);
  };

  const toggleNotificationsDropdown = (show, e) => {
    e.stopPropagation();
    setShowNotificationsDropdown(show);
    setShowProfileDropdown(false);
  };

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    setActiveTab('PatientDetailPage');
  };

  const handleBackToList = () => {
    setActiveTab('PatientListPage');
    setSelectedPatient(null);
  };

  return (
    <div className="container">
      <Header
        toggleProfileDropdown={toggleProfileDropdown}
        showProfileDropdown={showProfileDropdown}
        toggleNotificationsDropdown={toggleNotificationsDropdown}
        showNotificationsDropdown={showNotificationsDropdown}
      />

      <div className="dashboard">
        <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
        <main className="content">
          {activeTab === 'PatientListPage' && (
            <PatientListPage onViewDetails={handlePatientSelect} />
          )}
          {activeTab === 'PatientDetailPage' && (
            <PatientDetailPage patient={selectedPatient} onBack={handleBackToList} />
          )}
          {activeTab === 'AddPatient' && <AddPatient />}
          {activeTab === 'settings' && (
            <div>
              <h2>Settings</h2>
              <p>Adjust your settings here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

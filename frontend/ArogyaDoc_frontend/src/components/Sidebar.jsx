import React from 'react';
import './components design/Dashboard.css'; // Include your CSS file

const Sidebar = ({ activeTab, handleTabClick }) => (
  <nav className="sidebar">
    <ul className="tabs">
      <li
        className={`tab ${activeTab === 'PatientListPage' ||'PatientDetailPage' ? 'active' : ''}`}
        onClick={() => handleTabClick('PatientListPage')}
      >
        PatientListPage
      </li>
      {/* <li
        className={`tab ${activeTab === 'PatientDetailPage' ? 'active' : ''}`}
        onClick={() => handleTabClick('PatientDetailPage')}
      >
        PatientDetailPage
      </li> */}
      <li
        className={`tab ${activeTab === 'AddPatient' ? 'active' : ''}`}
        onClick={() => handleTabClick('AddPatient')}
      >
        Add Patient
      </li>
      <li
        className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => handleTabClick('settings')}
      >
        Settings
      </li>
    </ul>
  </nav>
);

export default Sidebar;

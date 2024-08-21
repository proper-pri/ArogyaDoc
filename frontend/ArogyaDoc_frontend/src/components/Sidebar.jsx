import React from 'react';
import { FaHome, FaUser, FaCalendarAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-light sidebar">
      <div className="list-group">
        <a href="/home" className="list-group-item list-group-item-action"><FaHome /> Home</a>
        <a href="/patients" className="list-group-item list-group-item-action"><FaUser /> Patients</a>
        <a href="/appointments" className="list-group-item list-group-item-action"><FaCalendarAlt /> Appointments</a>
        <a href="/settings" className="list-group-item list-group-item-action"><FaCog /> Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;

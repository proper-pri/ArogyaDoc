import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 sidebar-col">
            <Sidebar />
          </div>
          <div className="col-md-10 main-content">
            <h2>Patient Data</h2>
            <div className="data-content">
              {/* Add your data visualization or tables here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

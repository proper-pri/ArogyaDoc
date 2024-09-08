import React, { useState } from 'react';
import '../components design/Dashboard.css'; // Include your CSS file

export const PatientDetailPage = ({ patient, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...patient });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Capture the file
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({ ...patient });
    setFile(null);
  };

  const handleSaveClick = () => {
    // Handle the file upload logic here
    // For now, just update the state with new form data
    setPatient({ ...formData });
    setIsEditing(false);
    setFile(null);
  };

  if (!patient) {
    return <p>No patient selected</p>;
  }

  return (
    <div className="patient-detail-container">
      <button className="back-button-pd"  onClick={onBack}>&larr; Back</button>
      <h2>Patient Detail Page</h2>
      <p>Welcome to the dashboard Patient Detail Page.</p>
      {isEditing ? (
        <div className="form-container">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Notes:</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Files:</label>
            <input
              type="file"
              name="files"
              onChange={handleFileChange}
            />
            {file && <p>Selected file: {file.name}</p>}
          </div>
          <button className="submit-button" onClick={handleSaveClick}>
            Save
          </button>
          <button className="submit-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="detail-group">
            <label>Name:</label>
            <p>{patient.name}</p>
          </div>
          <div className="detail-group">
            <label>Contact Number:</label>
            <p>{patient.contactNumber}</p>
          </div>
          <div className="detail-group">
            <label>Address:</label>
            <p>{patient.address}</p>
          </div>
          <div className="detail-group">
            <label>Notes:</label>
            <p>{patient.notes}</p>
          </div>
          <div className="detail-group">
            <label>Files:</label>
            <a href={patient.files} target="_blank" rel="noopener noreferrer">View File</a>
          </div>
          <button className="submit-button" onClick={handleEditClick}>
            Edit
          </button>
          <h2></h2>
        </>
      )}
    </div>
  );
};

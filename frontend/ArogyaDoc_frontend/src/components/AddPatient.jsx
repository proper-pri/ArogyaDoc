import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './components design/Dashboard.css'; // Include your CSS file
import { addPatientData } from '../redux/patient/patientThunk';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    address: '',
    notes: '',
    files: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'files') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            files: reader.result, // Store the base64 string
          });
        };
        reader.readAsDataURL(file); // Convert file to base64
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPatientData(formData));
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="files">Files</label>
          <input
            type="file"
            id="files"
            name="files"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;

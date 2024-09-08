import React, { useState, useEffect } from "react";
import "../components design/Dashboard.css"; // Include your CSS file
import { useDispatch, useSelector } from "react-redux";
import { deletePatientData, patientData } from "../../redux/patient/patientThunk";

export const PatientListPage = ({ onViewDetails }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [patients, setPatients] = useState([]);
  const [patientsCopy, setPatientsCopy] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Number of patients per page
  const [totalPages, setTotalPages] = useState(1);

  const allPatient = useSelector((state) => state.patientList.currentPatientList);
  const currentPatientLoading = useSelector((state) => state.patientList.currentPatientListLoading);
  const dispatch = useDispatch();

  const fetchPatients = async (page, pageSize) => {
    const allPatients = allPatient || []; // Load all patients from Redux state
    setPatientsCopy(allPatients); // Backup for filtering
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    return allPatients.slice(startIndex, endIndex);
  };

  const onDelete=(idArr)=>{
    const arr = [];
    arr.push(idArr);
    
    dispatch(deletePatientData(arr));

  }

  useEffect(() => {
    dispatch(patientData());
  }, [dispatch]);

  useEffect(() => {
    const loadPatients = async () => {
      const fetchedPatients = await fetchPatients(currentPage, pageSize);
      setPatients(fetchedPatients);

      const totalPatients = allPatient.length; // Get the total count from Redux state
      setTotalPages(Math.ceil(totalPatients / pageSize));
    };

    loadPatients();
  }, [currentPage, pageSize, allPatient]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredPatients = patientsCopy.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.contactNumber.includes(searchQuery)
  );

  const paginatedPatients = searchQuery
    ? filteredPatients.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : patients;

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const shouldShowPagination = paginatedPatients.length > 0 && totalPages > 1;
  const isNextButtonDisabled = currentPage >= totalPages;

  return (
    <div className="patient-list-container">
      <h2>Patient List Page</h2>
      <p>Welcome to the dashboard Patient List Page.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or contact number"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {paginatedPatients.length > 0 ? (
        <ul className="patient-list">
          {paginatedPatients.map((patient) => (
            <li key={patient.id} className="patient-item">
              <div className="patient-info">
                <h3>{patient.name}</h3>
                <p>Contact: {patient.contactNumber}</p>
                <p>Address: {patient.address}</p>
              </div>
              <button className="delete-button" onClick={() => onDelete(patient._id)}>
                Delete
              </button>
              <button className="view-button" onClick={() => onViewDetails(patient)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No patients found</p>
      )}

      {shouldShowPagination && (
        <div className="pagination">
          <button
            className={`page-button ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#171; Prev
          </button>
          <button
            className={`page-button ${isNextButtonDisabled ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isNextButtonDisabled}
          >
            Next &#187;
          </button>
        </div>
      )}
    </div>
  );
};

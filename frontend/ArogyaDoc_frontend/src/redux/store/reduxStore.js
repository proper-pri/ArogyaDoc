// reduxStore.js
import { configureStore } from "@reduxjs/toolkit";
import userAuthSliceReducer from "../auth/userAuthSlice"; // Import your user slice
import patientAuthSliceReducer from "../patient/patientAuthSlice"; // Import your user slice
import addPatientSliceReducer from "../patient/addPatientSlice";
import deletePatientSliceReducer from "../patient/deletePatientSlice";


// Create the Redux store
const store = configureStore({
  reducer: {
    user: userAuthSliceReducer, // Add your user reducer here
    patientList:patientAuthSliceReducer,
    addPatient: addPatientSliceReducer,
    deletePatient:deletePatientSliceReducer,
    
  },

});

export default store;
  